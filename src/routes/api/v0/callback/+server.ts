import { error } from '@sveltejs/kit';
import type { RequestHandler, RequestEvent } from './$types';

export function GET(params: RequestEvent): RequestHandler {
    const code = params.url.searchParams?.get("code")

    if (!code) {
        error(403, "Ooops")
    }
    return new Response("")
}