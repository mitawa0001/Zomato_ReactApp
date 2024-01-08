import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleCounting = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div className="card">
        <button onClick={handleCounting}>hello</button>
        <div>{count}</div>
      </div >
    </>
  )
}

export default App
