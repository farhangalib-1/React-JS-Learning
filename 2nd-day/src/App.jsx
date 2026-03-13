function App(){
  const users = ['Farhan', 'Ishraq', 'Galib', 'Sakib', 'Tamim']
  return(
    <>
      <ul>
        {users.map((el, index)=>
        <li key={index} >{el}</li>
        )}
      </ul>
    </>
  )
}

export default App