import User from "./User";
function App(){
  const users = [
  { id: 1, name: "Galib", age: 19 },
  { id: 2, name: "Arnob", age: 20 },
  { id: 3, name: "Nafi", age: 18 }
];
    return(
      <>
      {users.map(el=>(
      <User key={el.id} name={el.name} age={el.age} />
      ))}
      </>
    )
}

export default App