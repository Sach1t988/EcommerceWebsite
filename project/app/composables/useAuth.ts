export const useAuth = () => {
    //the below useCookie is only required if we don't want to store the value in localStorage rather we only want it in Cookies 
    // const token = useCookie<string | null>("token")
const login = async (
    username: string,
    password: string
) => {
    try {
        const {data, error} = await useFetch<{token: string}>(
            "https://fakestoreapi.com/auth/login",
            {
                method: "POST",
                body:{
                    username,
                    password
                }
            }
        )
        if (error.value){
            console.error(error.value)
            return false
        }
        // token.value = data.value!.token
        if(data.value?.token){
            localStorage.setItem("token",data.value.token)
            return true
        }
        return false
    } catch (error) {
        console.error("Login failed:", error)
        return false
    }
    console.log(username, password)

}


const logout = () => {
    // token.value = null
    localStorage.removeItem("token")
    console.log("after removal",localStorage.getItem("token"))
    navigateTo("/login")
}
return {
    login,
    logout
}

}