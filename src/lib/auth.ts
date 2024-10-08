import { SvelteKitAuth } from "@auth/sveltekit"
import {
    CLIENT_ID,
    CLIENT_SECRET,
    VERCEL_PROJECT_PRODUCTION_URL
} from "$env/static/private"

export const { handle } = SvelteKitAuth({
    trustHost: true,
    providers: [{
        id: 'yahoo',
        name: 'Yahoo',
        type: 'oauth',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        authorization: {
            url: "https://api.login.yahoo.com/oauth2/request_auth",
            params: {
                redirect_uri: `https://${VERCEL_PROJECT_PRODUCTION_URL}/auth/callback/yahoo`,
                response_type: "code",
                scope: ""
            },
        },
        token: 'https://api.login.yahoo.com/oauth2/get_token',
        userinfo: 'https://api.login.yahoo.com/openid/v1/userinfo',
        client: {
            authorization_signed_response_alg: 'ES256',
            id_token_signed_response_alg: 'ES256',
        },
        profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            }
        },

    }],
    debug: true,
})