import type { Handle } from '@sveltejs/kit';
import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private'
export { handle } from "$lib/auth"

// export const handle: Handle = async ({ event, resolve }) => {
//     if (event.url.pathname.startsWith("/auth/signin")) {
//         return Response.redirect("https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9dU1BSnZzM0UzUDg5JmQ9WVdrOWJtRkNkMnN6YURjbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWQ1&redirect_uri=https://31b6-2603-6080-87f0-8e20-25fd-5c39-e26f-50f1.ngrok-free.app/auth/callback/yahoo&response_type=code")
//     }
// 	if (event.url.pathname.startsWith("/auth/callback/yahoo")) {
//         const code = event.url.searchParams.get("code");

//         const body = new URLSearchParams({
//             redirect_uri: "https://31b6-2603-6080-87f0-8e20-25fd-5c39-e26f-50f1.ngrok-free.app/auth/callback/yahoo",
//             grant_type: "authorization_code",
//             code,
//         });

//         const res = await fetch("https://api.login.yahoo.com/oauth2/get_token", {
//             method: "POST",
//             headers: {
//                 Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body
//         });

//         const data = await res.json();
//         console.log(data);

//         return new Response('hello')
// 	}

// 	const response = await resolve(event);
// 	return response;
// };