export const getUser = () => {
    const userStr= sessionStorage.getItem("user")
    if(userStr) return JSON.parse(userStr)
    else return null
}
export const getToken = () => {
    const userStr= sessionStorage.getItem("token") || null;

}
export const getUserSession = () => {
    sessionStorage.setItem("token", token)
    sessionStorage.setItem("user", JSON.stringify(user))
}
export const removeUserSession = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
}