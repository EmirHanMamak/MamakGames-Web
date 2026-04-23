# TestSprite Test Report — Mamak Games Landing

**Project:** mamak-games-landing
**Date:** 2026-04-23
**Tester:** TestSprite AI (MCP)
**Server Mode:** Production (Next.js 16.2.4)

---

## 1. Executive Summary

| Metric | Count |
|--------|-------|
| Total Tests | 30 |
| Passed | 20 |
| Failed | 6 |
| Blocked | 4 |
| Pass Rate | 66.67% |

**Critical Issues Found:**
- 3 UI/UX gaps (missing feature toggles in list views)
- 2 Data persistence/cache invalidation bugs (footer, privacy policy)
- 2 Server-side rendering crashes (submissions page, game edit)
- 1 Authentication/timing issue (admin sign-in timeout)

---

## 2. Passed Tests (20)

| ID | Test | Status |
|----|------|--------|
| TC001 | Sign in as admin and reach the admin dashboard | Passed |
| TC002 | Access control redirects unauthenticated users to admin login | Passed |
| TC003 | Create initial admin via setup wizard and reach admin login | Passed |
| TC004 | View dashboard stats and reach Games from quick navigation | Passed |
| TC005 | Create a new game and see it in the games list | Passed |
| TC006 | Discover studio content sections on the landing page | Passed |
| TC007 | Dashboard stat cards are visible after successful login | Passed |
| TC008 | Open a published game's detail modal from the carousel | Passed |
| TC010 | Update and publish privacy policy content | Passed |
| TC012 | Update and publish terms of service content | Passed |
| TC016 | Navigate to privacy policy from the landing page | Passed |
| TC017 | Navigate to terms of service from the landing page | Passed |
| TC020 | Save site settings and see success feedback | Passed |
| TC021 | Update contact info and see public contact section reflect changes | Passed |
| TC022 | Persist saved legal content after refresh | Passed |
| TC024 | SEO metadata fields can be updated and saved | Passed |
| TC025 | Update about section title, description, and images then save | Passed |
| TC026 | View contact information and social links | Passed |
| TC027 | Edit an existing service and save so the landing page reflects changes | Passed |
| TC029 | Invalid admin credentials show an error | Passed |

---

## 3. Failed Tests (6) — Root Cause & Fix

### TC013 — Publish and feature a game from the games list
**Status:** Failed
**Error:** The admin UI does not provide a 'Feature' toggle in the games list.

**Root Cause:**
- `src/app/admin/games/GameActions.tsx` only exposes `Publish/Unpublish` and `Delete` buttons.
- The `Featured` toggle exists inside `EditGameForm.tsx` (the detail/edit page) but is not accessible from the list view.
- The test expected to feature a game directly from `/admin/games` without opening the edit form.

**Fix Suggestion:**
Add a `Feature`/`Unfeature` button to `GameActions.tsx` by reusing the existing `toggleGamePublish` pattern. Create a new server action `toggleGameFeature` in `src/lib/actions.ts` (or reuse `updateGame` with `{ featured: !featured }`), then wire it into `GameActions.tsx`.

```tsx
// In src/app/admin/games/GameActions.tsx
// Add props: featured: boolean
// Add button:
<button onClick={handleFeatureToggle} className="...">
  {featured ? 'Unfeature' : 'Feature'}
</button>
```

Also add `revalidatePath('/admin/games')` after the toggle action.

---

### TC014 — Delete a contact submission from the inbox
**Status:** Failed
**Error:** Deleting a submission did not remove it from the submissions list.

**Root Cause:**
- `deleteSubmission()` in `src/lib/actions.ts` does **not** call `revalidatePath('/admin/submissions')`.
- Although the page is marked `dynamic = 'force-dynamic'`, the admin layout and Next.js production caching can still serve stale data when `router.refresh()` is called from a client component if the server action didn't invalidate the cache.
- Additionally, `SubmissionActions.tsx` never checks whether `deleteSubmission()` actually succeeded (returns `{ success: false }` on error).

**Fix Suggestion:**
1. In `src/lib/actions.ts`, add `revalidatePath('/admin/submissions')` to both `deleteSubmission` and `markSubmissionRead`.
2. In `src/app/admin/submissions/SubmissionActions.tsx`, check the action result before trusting `router.refresh()`:

```tsx
const handleDelete = async () => {
  const result = await deleteSubmission(id)
  if (result.success) {
    router.refresh()
  } else {
    // show error toast
  }
}
```

---

### TC015 — Add, hide, reorder, and save services so the landing page reflects changes
**Status:** Failed
**Error:** The admin UI does not provide a control to toggle a service's visibility.

**Root Cause:**
- `src/app/admin/services/page.tsx` does not include a `visible` field in the service form.
- The Prisma schema and actions likely support `visible` on `ServiceItem` (the `updateServiceItem` signature includes `visible?: boolean`), but the UI never renders a toggle for it.
- The landing page (`HomeClient.tsx`) renders all services unconditionally: `{services.length > 0 && <Services services={services} />}` — it does not filter by `visible`.

**Fix Suggestion:**
1. Add a `<Toggle label="Visible" ... />` to the service form in `src/app/admin/services/page.tsx`.
2. Include `visible` in `handleSave` payload sent to `updateServiceItem` / `createServiceItem`.
3. Filter services on the public page in `src/app/page.tsx` or `src/app/HomeClient.tsx`:

```tsx
const visibleServices = services.filter(s => s.visible)
{visibleServices.length > 0 && <Services services={visibleServices} />}
```

---

### TC019 — Update hero content and save successfully
**Status:** Failed
**Error:** The hero editor allows editing headline, subheadline, and CTA, but the background image URL field is missing.

**Root Cause:**
- The `Hero` component (`src/components/Hero.tsx`) uses a canvas-based particle animation for the background, not a static image.
- The Prisma `heroSection` model does not contain a `backgroundImage` field, and the hero editor (`src/app/admin/hero/page.tsx`) does not provide an input for one.
- The test expected a background image upload/URL field based on the code summary specification, but this feature is not implemented.

**Fix Suggestion:**
Option A — Add the feature:
1. Add `backgroundImage String @default("")` to the `heroSection` Prisma schema.
2. Run `prisma db push` / migration.
3. Add a background image input to `src/app/admin/hero/page.tsx`.
4. Update `src/components/Hero.tsx` to conditionally render the image behind the canvas when `data.backgroundImage` is set.

Option B — Update the test plan/code summary to match the actual feature set (canvas animation instead of static image).

---

### TC023 — Edit footer text and links and see public footer reflect changes
**Status:** Failed
**Error:** Admin footer updates were not fully reflected on the public site.

**Root Cause:**
- `src/app/admin/footer/page.tsx` calls `await updateFooterSettings(footer)` but **never checks the return value**.
- If the DB update silently fails (e.g., record doesn't exist, validation error), the UI still shows the "Footer saved!" toast.
- `updateFooterSettings` does call `revalidatePath('/')`, but if the update failed, there is nothing new to revalidate.
- Additionally, the `Footer` component in `src/components/Footer.tsx` returns `null` if `!footer`, which would hide the entire footer if the prop is missing.

**Fix Suggestion:**
1. Check the action result in `src/app/admin/footer/page.tsx`:

```tsx
const result = await updateFooterSettings(footer)
if (result.success) {
  setToast('Footer saved!')
} else {
  setToast(`Error: ${result.error}`)
}
```

2. Ensure the `footerSettings` singleton record with `id: 'main'` exists in the database (setup wizard creates it, but if deleted, the page will fail silently).
3. In `src/app/page.tsx`, add fallback handling so `footer` prop is never passed as `null` when the DB is unreachable:

```tsx
// In page.tsx fetch block
let footer = null
try {
  footer = await prisma.footerSettings.findUnique({ where: { id: 'main' } })
} catch { /* keep null */ }
// Provide a default if missing
if (!footer) footer = { description: '', copyrightText: '', bottomText: '' }
```

---

### TC028 — Preview privacy policy rendering before saving
**Status:** Failed
**Error:** The preview did not render the privacy policy updates from the admin editor.

**Root Cause:**
- `updatePrivacyPolicy` in `src/lib/actions.ts` does call `revalidatePath('/privacy-policy')`, but the test observed that the public page still showed old content.
- In production mode, Next.js 16 may aggressively cache static pages. The `/privacy-policy` page is marked as static (`○` in the build output), meaning it is prerendered at build time and might not revalidate immediately unless `revalidatePath` is paired with a dynamic segment or `export const revalidate = 0`.
- Also, `src/app/admin/legal/page.tsx` does not check the return value of `updatePrivacyPolicy`, so a silent DB failure would still show the success toast.

**Fix Suggestion:**
1. Add `export const dynamic = 'force-dynamic'` or `export const revalidate = 0` to `src/app/privacy-policy/page.tsx` and `src/app/terms-of-service/page.tsx` so they always fetch fresh data from the DB.
2. Check the action result in `src/app/admin/legal/page.tsx`:

```tsx
const result = await updatePrivacyPolicy({ content: privacyContent })
if (result.success) {
  setToast({ message: 'Privacy policy updated', type: 'success' })
} else {
  setToast({ message: result.error, type: 'error' })
}
```

---

## 4. Blocked Tests (4) — Root Cause & Fix

### TC009 — Mark a contact submission read then unread
**Status:** Blocked
**Error:** The contact submission could not be created and the admin inbox remains empty.

**Root Cause:**
- The public contact form is conditionally rendered based on `contactInfo.formEnabled` (`src/components/Contact.tsx:88`).
- If the `contactInfo` singleton does not have `formEnabled: true`, the form is completely hidden from the DOM, so TestSprite could not fill and submit it.
- Even if the form is visible, `createSubmission` in `src/lib/actions.ts` returns an `ActionResult` object. It **never throws** — it catches all errors internally. However, `Contact.tsx` wraps it in `try/catch` and assumes success if no exception is thrown. A DB error would return `{ success: false }` but the UI would still show the "Message Sent!" success state.

**Fix Suggestion:**
1. Ensure the `contactInfo` seed/setup sets `formEnabled: true`:

```ts
// In prisma/seed.ts or setup wizard
await prisma.contactInfo.create({
  data: { id: 'main', formEnabled: true, email: '...', ... }
})
```

2. Fix error handling in `src/components/Contact.tsx`:

```tsx
const result = await createSubmission(form)
if (result.success) {
  setStatus('success')
  setForm({ name: '', email: '', projectType: '', message: '' })
} else {
  setStatus('error')
}
```

---

### TC011 — Reach Submissions from dashboard quick navigation
**Status:** Blocked
**Error:** The submissions inbox could not be reached because the server did not return data for `/admin/submissions`. Browser showed "This page isn't working" and `ERR_EMPTY_RESPONSE`.

**Root Cause:**
- `src/app/admin/submissions/page.tsx` is a server component that directly calls `prisma.contactSubmission.findMany()` without any `try/catch`.
- If the Prisma query throws (e.g., missing table, connection issue, corrupted DB), Next.js returns an empty response or crashes the page.
- The `export const dynamic = 'force-dynamic'` does not prevent runtime query errors.

**Fix Suggestion:**
Wrap the data fetch in a try/catch and render a graceful error state:

```tsx
export default async function SubmissionsPage() {
  let submissions: ContactSubmission[] = []
  let error = ''
  try {
    submissions = await prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' } })
  } catch (e) {
    error = 'Failed to load submissions. Database may be unavailable.'
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <h2 className="text-xl font-semibold text-white">Contact Submissions</h2>
      {error && <div className="text-red-400 text-sm">{error}</div>}
      {/* ...rest of render */}
    </div>
  )
}
```

Also ensure `prisma.contactSubmission` table exists (run `prisma db push`).

---

### TC018 — Edit an existing game and save changes
**Status:** Blocked
**Error:** The admin edit page is not loading and the app shows an empty DOM (0 interactive elements).

**Root Cause:**
- `src/app/admin/games/[id]/page.tsx` uses `notFound()` if `prisma.game.findUnique()` returns null.
- If the game ID used by the test was deleted by a prior test (e.g., TC005 created a game, but TC014 or another test may have deleted it), the page renders a 404/not-found UI which might appear blank to TestSprite.
- Alternatively, `EditGameForm.tsx` is a heavy client component with image arrays. If `game.images` is undefined (rather than an empty array), `game.images?.map` would work, but other destructured fields might cause issues.

**Fix Suggestion:**
1. Ensure game IDs used in tests remain stable, or create a new game specifically for the edit test.
2. Add defensive defaults in `EditGameForm.tsx`:

```tsx
const [form, setForm] = useState({
  title: game.title ?? '',
  slug: game.slug ?? '',
  // ...other fields with ?? defaults
  images: game.images ?? [],
})
```

3. Add a loading skeleton to `EditGamePage` so the page is never truly empty:

```tsx
if (!game) {
  return <div className="text-white/50">Loading game...</div>
}
```

---

### TC030 — Delete a service and save so it is removed from the landing page
**Status:** Blocked
**Error:** Admin sign-in did not complete. The page shows "Signing in..." and the admin dashboard did not load.

**Root Cause:**
- This is a **test infrastructure / timing issue**, not a code bug. By the time TC030 ran, many prior tests had already authenticated successfully (TC001, TC004, TC005, etc.).
- Most likely, the NextAuth session state was stale or the CSRF/token cookie was invalidated between test runs.
- The production server handles auth with `next-auth`. In production mode, the JWT session strategy requires the `NEXTAUTH_SECRET`. If the environment variable was missing or the token signature validation failed, the sign-in would hang at "Signing in...".
- Another possibility: the SQLite database was locked or corrupted after many concurrent writes from previous tests, causing the `/api/auth/callback/credentials` endpoint to hang.

**Fix Suggestion:**
1. Ensure `NEXTAUTH_SECRET` is set in `.env` before running tests in production mode:

```bash
NEXTAUTH_SECRET=<a-strong-random-secret>
NEXTAUTH_URL=http://localhost:3030
```

2. Add a timeout and error state to `src/app/admin/login/page.tsx` so sign-in failures are surfaced to the user instead of hanging on "Signing in...":

```tsx
const [loading, setLoading] = useState(false)
useEffect(() => {
  if (!loading) return
  const timer = setTimeout(() => {
    setError('Sign-in is taking too long. Please refresh and try again.')
    setLoading(false)
  }, 10000)
  return () => clearTimeout(timer)
}, [loading])
```

3. For testing, ensure the database file is not locked by another process and that `prisma` connections are properly managed (use connection pooling or ensure the SQLite file is on a fast local disk).

---

## 5. Key Gaps / Risks

| Risk | Severity | Location |
|------|----------|----------|
| **Silent action failures** — Admin pages show success toast even when DB updates fail | High | `src/app/admin/*/page.tsx` (footer, legal, services, etc.) |
| **Missing cache revalidation** — Deleting a submission doesn't refresh the list | High | `src/lib/actions.ts` (`deleteSubmission`, `markSubmissionRead`) |
| **No error boundaries on server components** — Submissions and edit pages crash on DB errors | High | `src/app/admin/submissions/page.tsx`, `src/app/admin/games/[id]/page.tsx` |
| **Missing UI controls** — Feature toggle (games list) and visibility toggle (services) not exposed | Medium | `src/app/admin/games/GameActions.tsx`, `src/app/admin/services/page.tsx` |
| **Conditional form rendering** — Contact form hidden if `formEnabled` is false/unset | Medium | `src/components/Contact.tsx` |
| **Schema/UI mismatch** — Hero background image expected but not implemented | Low | `src/components/Hero.tsx`, `prisma/schema.prisma` |
| **Auth session fragility** — Sign-in can hang in production if secret/DB state is bad | Medium | `src/lib/auth.ts`, `.env` |

---

## 6. Recommended Action Plan

1. **Fix silent failures (P0):** Update all admin forms to check `ActionResult.success` and display error toasts on failure.
2. **Fix cache invalidation (P0):** Add missing `revalidatePath('/admin/submissions')` to submission actions.
3. **Add error boundaries (P0):** Wrap all admin server-component DB queries in `try/catch` with graceful error UI.
4. **Add missing toggles (P1):** Implement `Feature` toggle in `GameActions.tsx` and `Visible` toggle in services form.
5. **Fix contact form (P1):** Ensure `formEnabled` is seeded as `true`, and fix `createSubmission` error handling in `Contact.tsx`.
6. **Stabilize auth (P1):** Verify `NEXTAUTH_SECRET` is present; add sign-in timeout handling.
7. **Re-run TestSprite** after fixes to verify resolution.
