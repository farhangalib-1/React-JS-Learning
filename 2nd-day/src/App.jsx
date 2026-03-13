function App(){
  const users = [
  { id: 1, name: "Galib", age: 19 },
  { id: 2, name: "Arnob", age: 20 },
  { id: 3, name: "Nafi", age: 18 }
];
    return(
      <>
      {users.map(el=>(
        <div key={el.id}>
          <h1>Name: {el.name}</h1>
          <h2>Age: {el.age}</h2>
        </div>
      ))}
      </>
    )
}

export default App