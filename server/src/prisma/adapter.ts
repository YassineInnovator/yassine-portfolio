import { PrismaPg } from '@prisma/adapter-pg';

function getConnectionString() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL is not set.');
  }

  return connectionString;
}

function normalizeConnectionString(connectionString: string) {
  const url = new URL(connectionString);

  // Keep the pg adapter aligned with libpq's sslmode=require behavior.
  if (
    url.searchParams.get('sslmode') === 'require' &&
    !url.searchParams.has('uselibpqcompat')
  ) {
    url.searchParams.set('uselibpqcompat', 'true');
  }

  return url.toString();
}

export function createPrismaPgAdapter() {
  return new PrismaPg({
    connectionString: normalizeConnectionString(getConnectionString()),
  });
}
