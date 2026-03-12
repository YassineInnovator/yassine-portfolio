# Deployment Guide

This repo is prepared for:

- Frontend on Vercel
- Backend on Render
- PostgreSQL on Supabase

## 1. Create the Supabase database

Create a Supabase project, then create a dedicated Prisma role instead of using the default `postgres` role.

Supabase recommends a custom Prisma user with the required privileges. Source:
https://supabase.com/docs/guides/database/prisma

Run this in the Supabase SQL editor:

```sql
create user "prisma" with password 'replace_with_strong_password' bypassrls createdb;
grant "prisma" to "postgres";
grant usage on schema public to prisma;
grant create on schema public to prisma;
grant all on all tables in schema public to prisma;
grant all on all routines in schema public to prisma;
grant all on all sequences in schema public to prisma;
alter default privileges for role postgres in schema public grant all on tables to prisma;
alter default privileges for role postgres in schema public grant all on routines to prisma;
alter default privileges for role postgres in schema public grant all on sequences to prisma;
```

## 2. Choose the correct Supabase connection string

Use the Supabase Session pooler connection string for this backend.

Why:

- Supabase says persistent backend services that need IPv4 should use Supavisor session mode.
- Supabase says transaction mode is ideal for serverless and does not support prepared statements.

Source:
https://supabase.com/docs/guides/database/connecting-to-postgres

Use the connection string from `Connect` in the Supabase dashboard that looks like:

```text
postgresql://prisma.<project-ref>:<password>@aws-0-<region>.pooler.supabase.com:5432/postgres?sslmode=require
```

Do not use the transaction pooler `:6543` URL for this app.

## 3. Deploy the backend to Render

This repo includes [render.yaml](./render.yaml), so Render can create the service from the repo root while using `server` as the service root directory.

Render config included in the repo:

- `rootDir`: `server`
- `buildCommand`: `npm install && npm run prisma:generate && npm run build`
- `preDeployCommand`: `npm run prisma:push && npm run prisma:seed`
- `startCommand`: `npm run start:prod`
- `healthCheckPath`: `/api`

### Render env vars

Set these in Render:

- `DATABASE_URL`
  Use the Supabase Session pooler URL.
- `CLIENT_URL`
  Set this to your Vercel frontend URL.
- `NODE_ENV`
  Set to `production`

Template file:
[server/.env.render.example](./server/.env.render.example)

### Render steps

1. Push this repo to GitHub.
2. In Render, create a new Blueprint or Web Service from the repo.
3. If using Blueprint sync, Render will read `render.yaml`.
4. Add the environment variables above.
5. Deploy.

Your backend URL will look like:

```text
https://your-render-service.onrender.com/api
```

## 4. Deploy the frontend to Vercel

Vercel should deploy only the `client` app from this monorepo.

Vercel recommends setting the project Root Directory in the dashboard for monorepos. Source:
https://vercel.com/docs/builds/configure-a-build

### Vercel project settings

- Root Directory: `client`
- Framework Preset: `Vite`
- Build Command: leave default, or `npm run build`
- Output Directory: leave default, or `dist`

### Vercel env vars

Set this in Vercel:

- `VITE_API_URL`
  Example: `https://your-render-service.onrender.com/api`

Template file:
[client/.env.vercel.example](./client/.env.vercel.example)

## 5. Connect frontend and backend

After Vercel gives you the frontend URL:

1. Copy the Vercel URL
2. Put it into Render as `CLIENT_URL`
3. Redeploy the Render service if needed

If you later attach a custom domain, update:

- `CLIENT_URL` on Render
- your portfolio links if needed

## 6. Production URLs

Expected final setup:

- Frontend: `https://your-site.vercel.app`
- Backend: `https://your-api.onrender.com/api`
- Database: Supabase Postgres

## 7. Notes

- Free Render services can sleep when idle, so the first API request can be slow.
- Supabase free projects can pause after inactivity.
- This backend reseeds the portfolio on deploy by design, which is fine for a CV portfolio.
