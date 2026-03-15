import './App.css'
export default function App() {
  const handleEvent = (event)=>{
    console.log(event.target.value);
    
  }
  return (
    <div >
      <h1>Hello World</h1>
      <button className="btn">Click me</button>
      <input onClick={handleEvent} type='text'></input>
    </div>
  )
}
