function Greeeting(props){
    if(props.isLoggedIn === true){
        return(
            <h1 style={{textAlign:'center'}}>Welcome Back!!!</h1>
        )
    }
    else{
        return(
            <h1 style={{textAlign: 'center'}}>Please Log In</h1>
        )
    }
}
export default Greeeting