import { TOKEN_NAMES } from '../constants/tokenName'

export const tokenStorage = {
    getAccess: () => localStorage.getItem(TOKEN_NAMES.ACCESS_TOKEN),

    set: (accessToken: string, refreshToken?: string) => {
        localStorage.setItem(TOKEN_NAMES.ACCESS_TOKEN, accessToken)
        if (refreshToken) localStorage.setItem(TOKEN_NAMES.REFRESH_TOKEN, refreshToken)
    },

    clear: () => {
        localStorage.removeItem(TOKEN_NAMES.ACCESS_TOKEN)
        localStorage.removeItem(TOKEN_NAMES.REFRESH_TOKEN)
    }
}


/* localStorage stores data in browser and saves page reloads.
it shows three simple actions: read,save and clear.
refreshToken? with the ? means it's optional. */

