function Avatar(){
    return(
        <img src="WhatsApp Image 2026-03-08 at 9.45.23 PM.jpeg" alt="" />
    )
}

function UserInfo(){

    return(
    <>
    <Avatar />
    <h1>Hello This is Farhan Galib</h1>
    <p>I'm Currently Learning React Js</p>
    <p>I'm skillful in HTML, CSS and JavaScript</p>
    </>
    )
}


function App(){
    return (
        <>
        <UserInfo />
        <p>If you have any doubt you can contact me</p>
        </>
    )
}
export default App