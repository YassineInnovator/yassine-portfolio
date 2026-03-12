# Yassine El Idrissi Portfolio

Full-stack portfolio built with React, NestJS, TypeScript, Prisma, and PostgreSQL.

## Stack

- Frontend: React + Vite + TypeScript
- Backend: NestJS + TypeScript
- Database: PostgreSQL + Prisma ORM

## Run locally

1. Start PostgreSQL:
   `npm run db:up`
2. Sync the schema:
   `npm run db:push`
3. Seed the portfolio data:
   `npm run db:seed`
4. Start frontend and backend together:
   `npm run dev`

## Ports

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4300/api`
- PostgreSQL: `localhost:5433`

## Useful commands

- Build everything: `npm run build`
- Backend only: `npm run dev:server`
- Frontend only: `npm run dev:client`
- Stop PostgreSQL: `npm run db:down`

## Notes

- The resume PDF is available from the frontend public folder.
- Portfolio content is seeded from the CV into PostgreSQL in `server/prisma/seed.ts`.
- Production deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
