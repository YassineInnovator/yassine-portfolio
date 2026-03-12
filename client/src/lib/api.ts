import type { PortfolioResponse } from '../types/portfolio';

const apiBase = (import.meta.env.VITE_API_URL ?? '/api').replace(/\/$/, '');

export async function fetchPortfolio(): Promise<PortfolioResponse> {
  const response = await fetch(`${apiBase}/portfolio`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(
      'Unable to load the portfolio API. Start the Nest server and seed PostgreSQL first.',
    );
  }

  return (await response.json()) as PortfolioResponse;
}
