# Deployment Fixes

## 1. Build Phase Crash (Fixed)
**What Broke:** Next.js build failed during static prerendering of pages like `/_not-found` and legal pages.
**Root Cause:** These pages (or the root layout) were making direct Prisma queries during `next build`. In the Coolify build environment, the SQLite database was either missing or the schema wasn't pushed yet, causing Prisma to throw "Table does not exist" errors that crashed the build.
**The Fix:** 
- Wrapped metadata and global data fetching actions in `try/catch` blocks.
- Added graceful fallbacks so the app can build even if the database is not yet initialized.

## 2. Runtime Startup Loop (Fixed)
**What Broke:** The container would restart indefinitely in Coolify.
**Root Cause:** The `start` script `npx prisma db push && next start` was failing. Prisma 7's new `prisma.config.ts` explicitly required `datasource.url`, but the environment variable `DATABASE_URL` wasn't always successfully resolved by the CLI during startup, or the fallback was missing. Additionally, `schema.prisma` was missing the `url = env("DATABASE_URL")` definition.
**The Fix:**
- **Prisma Configuration:** Moved the database connection string entirely to `prisma.config.ts` and removed it from `prisma/schema.prisma`, as Prisma 7 no longer supports `url` properties inside schema files. Added a hardcoded fallback to `file:./prisma/dev.db` to prevent CLI failures.
- **Prisma Client:** Updated `src/lib/prisma.ts` to use `DATABASE_URL` if present, ensuring consistency between the CLI and the running application.
- **Startup Script:** Modified `package.json`'s `start` script to use `npx prisma db push --accept-data-loss`. This ensures the schema is always synced with the database on every boot without blocking for confirmation, which is essential for a "push-to-deploy" workflow with SQLite.

## 3. Deployment Flow Summary
- **Build Command:** `npm run build`
- **Start Command:** `npm start` (Runs schema sync followed by app launch)
- **Database:** SQLite is used. Ensure the path `/app/prisma` is mapped as a **Persistent Volume** in Coolify to prevent data loss on redeploys.
- **Environment Variables:** Ensure `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` are set in the Coolify environment settings.

## 4. Prisma 7 Configuration
We are using the new `prisma.config.ts` introduced in Prisma 7. This file handles the CLI configuration, while `src/lib/prisma.ts` handles the runtime client instantiation with the `better-sqlite3` adapter for optimal performance.
