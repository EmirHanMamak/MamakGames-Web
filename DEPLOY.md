# Mamak Games — Deployment Setup Guide

## Quick Reference

| | Command |
|---|---|
| **Build Command** | `npm run build` |
| **Start Command** | `npm start` |
| **First-Run Seed** | `npm run db:bootstrap` (run once via Coolify terminal) |

---

## 1. Required Environment Variables

Set these in Coolify → Service → Environment Variables.

### Mandatory in Production

| Variable | Description | Example |
|---|---|---|
| `NEXTAUTH_SECRET` | **Required.** Signs JWT tokens. App will 500 without this. | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Full public URL of your app | `https://mamakgames.com` |

### Optional

| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | SQLite DB path | `file:./prisma/dev.db` |

---

## 2. How to Generate NEXTAUTH_SECRET

Run this command locally or in any terminal:

```bash
openssl rand -base64 32
```

Copy the output (e.g. `K8dJ2...`) and paste it as the `NEXTAUTH_SECRET` value in Coolify.

**Never commit this value to git.**

---

## 3. Deployment on Coolify

### Step-by-step

1. **Create a new Service** in Coolify from your Git repository.
2. **Set Build Command:** `npm run build`
3. **Set Start Command:** `npm start`  
   *(This runs `prisma db push --accept-data-loss && next start` automatically)*
4. **Add Environment Variables** (see section 1 above):
   - `NEXTAUTH_SECRET` — generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL` — set to your public domain, e.g. `https://mamakgames.com`
5. **Configure Persistent Storage:**
   - Mount a persistent volume at `/app/prisma`
   - This ensures your SQLite database (`dev.db`) survives redeploys
6. **Deploy.**

### Persistent Volume (Critical for SQLite)

The SQLite database lives at `prisma/dev.db` inside the container at `/app/prisma/dev.db`.
Without a persistent volume, **all data will be lost on every redeploy**.

In Coolify: Service → Storage → Add Volume
- **Source:** a named volume, e.g. `mamak-games-db`
- **Target:** `/app/prisma`

---

## 4. First-Run Setup (First Deploy)

After your first successful deployment:

### Option A: Use the Setup Page (Recommended for clean deployments)

1. Visit `https://your-domain.com/admin/setup`
2. Fill in your admin email, name, and password
3. Click **Create Admin Account**
4. The setup page automatically disables itself after the first account is created
5. You are redirected to `/admin/login`

### Option B: Run the Seed Script (Loads demo content)

Use this if you want sample games, services, and navigation items pre-loaded:

```bash
# In Coolify: Service → Terminal (or SSH into your container)
npm run db:bootstrap
```

Default credentials created by seed:
- **Email:** `admin@mamakgames.com`  
- **Password:** `mamakgames2026`

⚠️ **Change this password immediately after first login.**

---

## 5. How the Deployment Flow Works

```
npm ci
  └── postinstall → prisma generate (creates Prisma client from schema)

npm run build
  └── next build (no DB required, graceful fallbacks in place)

npm start
  └── prisma db push --accept-data-loss (syncs schema to SQLite)
  └── next start (app begins serving traffic)

First visit to /admin/setup
  └── Creates admin user + bootstraps required singleton rows
  └── Setup auto-disables after first admin is created
```

---

## 6. Database

- **Type:** SQLite (via `better-sqlite3`)
- **File location:** `prisma/dev.db` (relative to app working directory)
- **Schema sync:** Happens automatically on every `npm start` via `prisma db push`
- **Migrations:** This project uses `db push` (schema-sync approach), not migration files

For a production system with multiple instances or PostgreSQL, migrate to a hosted database and update `DATABASE_URL` and the Prisma adapter accordingly.

---

## 7. Common Failures & Fixes

### Blank/empty public website

**Symptom:** Website loads but is completely blank  
**Cause:** Usually combined `NEXTAUTH_SECRET` missing + DB not seeded  
**Fix:**
1. Set `NEXTAUTH_SECRET` in Coolify environment variables
2. Set `NEXTAUTH_URL` to your public URL
3. Redeploy, then run `npm run db:bootstrap` in the terminal

---

### `/api/auth/session` returns 500

**Symptom:** Browser console shows `[next-auth][error][CLIENT_FETCH_ERROR]`  
**Server log shows:** `[next-auth][error][NO_SECRET]`  
**Fix:** Set `NEXTAUTH_SECRET` in Coolify environment variables and redeploy.

---

### Container restart loop

**Symptom:** Coolify shows container restarting repeatedly  
**Cause:** `prisma db push` failing during startup (usually misconfigured DATABASE_URL or DB path not writable)  
**Fix:**
1. Check that the persistent volume is mounted at `/app/prisma`
2. Verify `DATABASE_URL` resolves to a writable path
3. Check container logs for the specific Prisma error

---

### `P1012` error during build

**Symptom:** `npm ci` or `prisma generate` fails with "datasource property url is no longer supported"  
**Fix:** The `url` field must NOT be in `prisma/schema.prisma`. It belongs only in `prisma.config.ts`. This is already fixed in the current codebase.

---

### Cannot login to admin (Invalid credentials)

**Symptom:** Login page shows "Invalid email or password"  
**Cause:** Admin user not created yet, or seed not run  
**Fix:** Visit `/admin/setup` to create an admin account, or run `npm run db:bootstrap`

---

### Setup page says "Setup already completed" but you cannot login

**Symptom:** `/admin/setup` blocks you, but login fails  
**Cause:** Admin user exists but password is incorrect  
**Fix:** Connect to the server terminal and run:
```bash
npx tsx -e "
const {PrismaClient} = require('./src/generated/prisma/client');
const {PrismaBetterSqlite3} = require('@prisma/adapter-better-sqlite3');
const {hashSync} = require('bcryptjs');
const adapter = new PrismaBetterSqlite3({url:'file:./prisma/dev.db'});
const p = new PrismaClient({adapter});
p.adminUser.update({where:{email:'admin@mamakgames.com'},data:{password:hashSync('newpassword123',12)}}).then(()=>console.log('Password reset!')).finally(()=>p.\$disconnect())
"
```

---

## 8. After Deployment Checklist

- [ ] `NEXTAUTH_SECRET` is set in Coolify
- [ ] `NEXTAUTH_URL` matches your public domain
- [ ] Persistent volume mounted at `/app/prisma`
- [ ] First deploy: visited `/admin/setup` or ran `npm run db:bootstrap`  
- [ ] Logged into admin panel at `/admin`
- [ ] Changed default password if seed was used
- [ ] Verified public site loads at `/`
