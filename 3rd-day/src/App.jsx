import './App.css'
export default function App() {
  const handleEvent = ()=>{
    alert('Ohhhh Nooooo!!!!!! You are hackeddddd')
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleEvent} className="btn">Click me</button>
    </div>
  )
}
