import type { PageServerLoad } from './$types';

export const load = (async () => {
    const res = await fetch("http://127.0.0.1:7777/servers");

    if (!res.ok) {
        throw new Error("Failed to connect to API.");
    }

    const servers = await res.json();
    return {
        servers
    };
}) satisfies PageServerLoad;