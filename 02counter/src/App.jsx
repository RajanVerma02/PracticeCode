import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment =() => {
    if(count < 20)
    setCount(count + 1);
  }

  const decrement =() =>{
    if(count > 0)
    setCount(count - 1);
  }

  const reset =() => {
    setCount(0);
  }

  return (
    <>
     <h1> Welcome to Vite + React! || Counter App</h1>
     <h2>Counter: {count}</h2>
     {/* <button onClick={() => setCount(count + 1)}>Increment</button>
     <button onClick={() => setCount(count - 1)}>Decrement</button>
     <button onClick={() => setCount(0)}>Reset</button> */}

     <button onClick={increment}>Increment {count}</button>
     <button onClick={decrement}>Decrement {count} </button>
     <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
