export default defineNuxtRouteMiddleware(() => {
    if(import.meta.server) return
    //const token = useCookie("access_token")
    const token = localStorage.getItem("token")
    if (token != null) {
        return navigateTo("/")
    }

})