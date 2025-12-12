import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><h1> Jarvis, Stroke it a lil'</h1></div>
      <div><img src='https://www.meme-arsenal.com/memes/25e492096d315034df6516fa16694af6.jpg'></img></div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Times Stroked: {count}
        </button>
      </div>
    </>
  )
}

export default App
