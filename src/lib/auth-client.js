import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://skill-sphere-teal.vercel.app"
})
export const {login, register, siinOut, useSescession} = createAuthClient()