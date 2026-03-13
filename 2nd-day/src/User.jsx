function User({name, age, country}){
    return(
    <div style={{border:"1px solid black", borderRadius:"16px", marginBottom:"20px"}}>
    <h1 style={{textAlign:"center"}}>Name: {name} </h1>
    <h1 style={{textAlign:"center"}}>Age: {age}</h1>
    <h1 style={{textAlign:"center"}}>Country: {country} </h1>
   </div>
    )
}
export default User