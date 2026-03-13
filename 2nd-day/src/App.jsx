function LogIn(){
  return <h1>Please Logged In</h1>
}
function Dashboard(){
  return <h1>Welcome back!!!</h1>
}

function App() {
  const isLoggedIn = false
  return (
   <>
    {isLoggedIn? <Dashboard /> : <LogIn />}
   </>
  )
}

export default App
