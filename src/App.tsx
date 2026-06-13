import { NavHeader } from './components/NavHeader.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment () {
      return setCount((count) => count + 1);
  }

  return (
    <>
        <NavHeader/>
        <Sidebar/>
        <h1 className="text-center text-5xl underline mb-3">Hello World</h1> 
        <p className="text-center text-3xl bg-cyan-900 text-white mb-3 w-fit mx-auto p-4 rounded">{count}</p>
        <div className="flex justify-center">
            <button onClick={increment} className="bg-cyan-300 rounded hover:bg-cyan-500 text-4xl pl-4 pr-4">test</button>
        </div>
         

    </>
  )
}


export default App



