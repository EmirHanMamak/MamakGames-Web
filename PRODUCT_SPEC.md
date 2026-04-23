# Mamak Games Website — Product Specification Document

**Version:** 1.0
**Date:** 2026-04-23
**Author:** Emir Han Mamak

---

## 1. Overview

Mamak Games Website is the official landing page and content management system (CMS) for Mamak Games, an independent solo game studio. The site is a single-page marketing landing experience with a fully editable backend, allowing the studio owner to manage all content dynamically without code changes.

### 1.1 Purpose
- Present the studio's game portfolio to players, publishers, and partners.
- Provide contact and legal information.
- Offer a private admin dashboard for real-time content management.

### 1.2 Target Users
| User Type | Goal |
|---|---|
| Players / Visitors | Discover games, learn about the studio, make contact |
| Admin (Studio Owner) | Edit all public content, manage game listings, view submissions |

---

## 2. Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^16.2.4 |
| Frontend | React | ^19.2.5 |
| Language | TypeScript | ^5.8.3 |
| Styling | Tailwind CSS | ^4.2.4 (CSS-first config) |
| Animation | Framer Motion | ^12.38.0 |
| Icons | Lucide React | ^1.8.0 |
| Auth | NextAuth.js (Credentials + JWT) | ^4.24.14 |
| ORM | Prisma | ^7.8.0 |
| Database | SQLite (via `better-sqlite3`) | — |
| Validation | Zod | ^4.3.6 |
| Forms | React Hook Form + `@hookform/resolvers` | ^7.73.1 |

---

## 3. Architecture

### 3.1 App Router Structure
- **Server Components** (`page.tsx`, `layout.tsx`) fetch data directly from Prisma.
- **Client Components** (`HomeClient.tsx`, admin pages, `LoadingScreen.tsx`) handle interactivity, animations, and session state.
- Public site is a single-page scroll experience with hash anchors (`#games`, `#about`, `#services`, `#contact`).
- Admin panel is a separate route group under `/admin/*` protected by NextAuth session middleware.

### 3.2 Data Flow
```
Browser
  → Next.js Server Component (page.tsx)
    → Prisma Client (src/lib/prisma.ts)
      → SQLite (prisma/dev.db)
    → Props passed to Client Component
  → Hydrated interactive UI
```

### 3.3 Authentication
- Credentials provider (email + bcrypt-hashed password).
- JWT session strategy.
- Single `AdminUser` record seeded on first run.
- Setup endpoint (`/api/setup`) creates the first admin if no user exists.

---

## 4. Database Schema

### 4.1 Entity Overview
| Model | Purpose | Cardinality |
|---|---|---|
| `AdminUser` | CMS login credentials | 1 (studio owner) |
| `SiteSettings` | Logo text, loading screen toggle | 1 |
| `SeoSettings` | Meta title, description, OG image, keywords | 1 |
| `NavigationItem` | Navbar links (sortable, toggleable) | N |
| `HeroSection` | Tagline, title, CTA buttons | 1 |
| `AboutSection` | Studio description, founder info, stats | 1 |
| `ServiceItem` | Services list with Lucide icons | N |
| `Game` | Game portfolio entries with store links | N |
| `GameImage` | Screenshots per game | N per Game |
| `ContactInfo` | Email, social links, location, form toggle | 1 |
| `ContactSubmission` | Contact form entries | N |
| `SocialLink` | Footer social media icons | N |
| `FooterSettings` | Footer text & copyright | 1 |
| `PrivacyPolicy` | HTML legal content | 1 |
| `TermsOfService` | HTML legal content | 1 |

### 4.2 Key Relationships
- `Game` 1:N `GameImage` (cascade delete)
- All singleton models (`SiteSettings`, `SeoSettings`, `HeroSection`, `AboutSection`, `ContactInfo`, `FooterSettings`, `PrivacyPolicy`, `TermsOfService`) use a fixed `id: "main"` primary key.

---

## 5. Public Site (Visitor Experience)

### 5.1 Sections (in scroll order)
1. **Loading Screen** — Optional branded splash with studio logo, auto-dismissed after 1.8s. Toggleable via CMS.
2. **Header** — Sticky nav with logo text and anchor links. Populated from `NavigationItem`.
3. **Hero** — Tagline, large title with highlight word, subtitle, two CTA buttons.
4. **Games** — Horizontal infinite-scroll carousel of published games. Click opens a detail modal with cover art, screenshots, genre, release date, store links (App Store, Google Play, Web).
5. **About** — Studio story, founder photo, key stats (founded year, location, focus).
6. **Services** — 2-column grid of service cards with Lucide icons and descriptions.
7. **Contact** — Contact info cards + optional contact form (name, email, subject, message). Submissions saved to DB.
8. **Footer** — Studio description, social links, navigation, legal links, copyright.

### 5.2 Design System
- **Brand Colors:** Neon Pink (`#FF0055`), Cyan (`#00F0FF`), Electric Purple (`#7000FF`)
- **Backgrounds:** Deep space navy palette (`#05040A` to `#231E40`)
- **Typography:** Poppins (headlines), Inter (body)
- **Animations:** Fade-in-up scroll reveals, float, pulse glow, shimmer, neon pulse

---

## 6. Admin Dashboard (CMS)

### 6.1 Access
- URL: `/admin`
- First-time setup: `/admin/setup` (creates initial `AdminUser` and singleton rows)
- Login: `/admin/login`
- Unauthenticated users are redirected to `/admin/login`.

### 6.2 Dashboard Pages
| Page | Function |
|---|---|
| `/admin` | Overview cards (game count, submission count, unread messages) |
| `/admin/settings` | Edit `SiteSettings` + `SeoSettings` |
| `/admin/hero` | Edit `HeroSection` content and visibility |
| `/admin/about` | Edit `AboutSection` text, stats, founder info |
| `/admin/services` | CRUD `ServiceItem` list |
| `/admin/games` | List all games with publish toggle, edit, delete |
| `/admin/games/new` | Create new game |
| `/admin/games/[id]` | Edit game details, upload/manage screenshots |
| `/admin/contact` | Edit `ContactInfo` and form toggle |
| `/admin/submissions` | View and manage `ContactSubmission` entries |
| `/admin/footer` | Edit `FooterSettings` and `SocialLink` list |
| `/admin/legal` | Edit `PrivacyPolicy` and `TermsOfService` HTML content |

### 6.3 File Upload
- Endpoint: `POST /api/upload`
- Authenticated only.
- Accepted: `image/jpeg`, `image/png`, `image/webp`, `image/gif`, `image/avif`, `image/svg+xml`
- Max size: 5 MB
- Files saved to `/public/uploads/` with sanitized unique filenames.

---

## 7. API Endpoints

| Route | Method | Auth | Description |
|---|---|---|---|
| `/api/auth/[...nextauth]` | GET/POST | — | NextAuth handler |
| `/api/setup` | GET | — | Check setup status and env health |
| `/api/setup` | POST | — | Create first admin + bootstrap singletons |
| `/api/upload` | POST | Admin | Image upload with validation |

---

## 8. Server Actions (`src/lib/actions.ts`)

All data mutations and fetches are encapsulated in Next.js Server Actions. Every action returns a typed `ActionResult<T>`:

```ts
type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string }
```

### 8.1 Action Groups
- **Site & SEO:** `getSiteSettings`, `updateSiteSettings`, `getSeoSettings`, `updateSeoSettings`
- **Navigation:** `getNavigationItems`, `createNavigationItem`, `updateNavigationItem`, `deleteNavigationItem`
- **Hero:** `getHeroSection`, `updateHeroSection`
- **About:** `getAboutSection`, `updateAboutSection`
- **Services:** `getServiceItems`, `createServiceItem`, `updateServiceItem`, `deleteServiceItem`
- **Games:** `getGames`, `getPublishedGames`, `getGameById`, `createGame`, `updateGame`, `deleteGame`, `toggleGamePublish`, `addGameImage`, `deleteGameImage`
- **Contact:** `getContactInfo`, `updateContactInfo`, `createSubmission`
- **Submissions:** `getSubmissions`, `markSubmissionRead`, `deleteSubmission`
- **Social Links:** `getSocialLinks`, `getAllSocialLinks`, `createSocialLink`, `updateSocialLink`, `deleteSocialLink`
- **Footer:** `getFooterSettings`, `updateFooterSettings`
- **Legal:** `getPrivacyPolicy`, `updatePrivacyPolicy`, `getTermsOfService`, `updateTermsOfService`

---

## 9. Environment Configuration

```env
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="<generate with openssl rand -base64 32>"
NEXTAUTH_URL="http://localhost:3030"
```

- `.env` must **not** be committed to git (see `.env.example` for template).
- `NEXTAUTH_SECRET` is required in production.
- Port 3030 is used for both dev and production start.

---

## 10. Scripts

| Script | Command |
|---|---|
| `npm run dev` | Start dev server on port 3030 |
| `npm run build` | Production build |
| `npm run start` | Production start (prisma db push + next start on 3030) |
| `npm run db:push` | Push schema to SQLite |
| `npm run db:seed` | Seed demo data |
| `npm run db:setup` | Push + seed |
| `npm run db:bootstrap` | Push with data loss + seed (first deploy) |

---

## 11. Deployment Notes

- Target platform: Coolify / Docker-compatible host using Nixpacks.
- `nixpacks.toml` pins Node `24.4.1`.
- SQLite file (`prisma/dev.db`) must be mounted on a **persistent volume** at `/app/prisma` to survive redeploys.
- First deploy requires visiting `/admin/setup` or running `npm run db:bootstrap`.
- `postinstall` automatically runs `prisma generate` after `npm install`.

---

## 12. Security & Best Practices

| Concern | Mitigation |
|---|---|
| XSS on legal pages | `dangerouslySetInnerHTML` replaced with `html-react-parser` |
| File upload abuse | MIME type whitelist + 5 MB limit + filename sanitization |
| Hardcoded secrets | `.env` excluded from git; seed password auto-generated |
| Open image proxy | `remotePatterns` restricted (empty whitelist) |
| Missing error handling | All Prisma queries wrapped in try/catch with `ActionResult<T>` |
| Unmount race conditions | React timeouts use cleanup refs |
| Carousel memory | Array duplication replaced with `Array.from` flat pattern |

---

## 13. Future Roadmap (Optional)

- [ ] Blog / news section with markdown editor.
- [ ] Multi-language support (i18n).
- [ ] Analytics dashboard in admin panel.
- [ ] Game press kit auto-generator.
- [ ] Playable web game embeds.
