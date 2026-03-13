function User(props){
    return(
    <div style={{border:"1px solid black", borderRadius:"16px", marginBottom:"20px"}}>
    <h1 style={{textAlign:"center"}}>Name: {props.name} </h1>
    <h1 style={{textAlign:"center"}}>Age: {props.age}</h1>
    <h1 style={{textAlign:"center"}}>Country: {props.country} </h1>
   </div>
    )
}
export default User