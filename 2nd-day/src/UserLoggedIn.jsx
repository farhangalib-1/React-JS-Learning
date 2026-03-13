function UserLoggerIn(props){
    const userName = 'Farhan Galib'
    if(props.loggedIn){
        return <h1>Welcome {userName}</h1>
    }
    else{
        return<h1>Please log in</h1>
    }
}
export default UserLoggerIn