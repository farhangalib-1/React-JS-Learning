function UserLoggedIn(){
    const isLoggedIn = true
    const isLoggedIn2 = false
    return(
        <>
        {isLoggedIn&& <h1>Welcome Back!!!</h1>}
        {isLoggedIn2||<h1>please logged in</h1>}
        </>
    )
}
export default UserLoggedIn