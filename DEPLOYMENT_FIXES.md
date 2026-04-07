# Deployment Fixes

## 1. What Broke?
During the deployment phase on Coolify, the `npm run build` process failed with the following traceback:
`Error occurred prerendering page "/_not-found"`
`PrismaClientKnownRequestError: The table main.SeoSettings does not exist in the current database.`

## 2. Why Did It Break?
Next.js tries to statically evaluate and generate pages (like `/_not-found`, `privacy-policy`, and `terms-of-service`) during the build process to maximize rendering speed. `/_not-found` implicitly utilizes the `root layout` (`layout.tsx`).
The `layout.tsx` file executes `generateMetadata()`, which was making a bare `prisma.seoSettings.findUnique()` call. 
However, in separated deployment environments like Docker/Nixpacks architectures that Coolify relies on, the SQLite database exists on a detached persistent volume that may either be empty during build stages or missing completely before the container ultimately starts. Querying a non-existent database schema statically aborted the entire Next.js optimization compiler.

## 3. What Was Changed?
- **Defensive Error Handling on layout**: Wrapped the `generateMetadata()` function internally with a `try...catch`. If Prisma evaluates the database query during build-time (empty state), it now skips the fetch and seamlessly resorts to default hard-coded SEO titles/descriptions instead of halting.
- **Made Legal Pages Safe**: Wrapped server-side database evaluations (`getSiteSettings` and `getNavigationItems`) internally in `src/lib/actions.ts` utilizing a `try...catch` envelope. The static rendering process of `privacy-policy/page.tsx` and `terms-of-service/page.tsx` can now default statically to `null`/empty content natively without crashing.
- **Refined Lifecycle Command Workflow**: Adjusted the `start` script in `package.json` to `"npx prisma db push && next start"`.

## 4. How the Deployment Flow Now Works?
1. **Prepare Phase:** Next.js successfully compiles without demanding functional connection to the database layer by reverting gracefully using static safe evaluation blocks.
2. **Launch Phase:** Coolify fully resolves the persistent SQLite `dev.db` file container directory mapping.
3. **Execution Phase:** The modified `"start"` script seamlessly runs `npx prisma db push` before running the Next.js process natively. This ensures that migrations are natively synchronized exactly onto the generated SQLite runtime database ensuring availability for incoming end-user traffic.

## 5. Deployment / Environment Guidelines for Coolify
- **Build Command**: `npm run build` (Works safely out of the box now)
- **Start Command**: `npm start` (This will invoke `npx prisma db push && next start` securely parsing the db model).
- **Persistent Storage**: Ensure you have successfully allocated `/app/prisma` mapped internally as a persistent volume inside Nixpacks configuration settings (or Coolify panel settings). This ensures your `dev.db` database changes won't reset on deployment restarts.
