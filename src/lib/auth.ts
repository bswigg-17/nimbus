import { SvelteKitAuth } from "@auth/sveltekit"
import {
    CLIENT_ID,
    CLIENT_SECRET,
    VERCEL_URL
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
                client_id: CLIENT_ID,
                redirect_uri: `https://${VERCEL_URL}/auth/callback/yahoo`,
                response_type: "code",
            },

        },
        token: "https://api.login.yahoo.com/oauth2/get_token",
        wellKnown: "https://api.login.yahoo.com/.well-known/openid-configuration",
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