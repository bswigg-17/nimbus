import { SvelteKitAuth } from "@auth/sveltekit"

export const { handle } = SvelteKitAuth({
    providers: [{
        id: 'yahoo',
        name: 'Yahoo',
        type: 'oauth',
        clientId: "dj0yJmk9R2wya0d2cHlheE1qJmQ9WVdrOWJURkZabU5CYVVrbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWNh",
        clientSecret: "8fd36fe6dba43b04fdee1ec075be6f160aaf45b6",
        authorization: {
            url: "https://api.login.yahoo.com/oauth2/request_auth",
            params: {
                client_id: "dj0yJmk9R2wya0d2cHlheE1qJmQ9WVdrOWJURkZabU5CYVVrbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWNh",
                redirect_uri: "https://localhost:5174/auth/callback/yahoo",
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