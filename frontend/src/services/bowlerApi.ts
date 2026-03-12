// frontend\src\services\bowlerApi.ts
// This file contains functions to interact with the backend API for bowlers.

import type { Bowler } from '../types/Bowler';

export async function getBowlers(): Promise<Bowler[]> {
    const res = await fetch(import.meta.env.VITE_API_URL);
    if (!res.ok) throw new Error('Failed to fetch bowlers');
    return res.json() as Promise<Bowler[]>;
}