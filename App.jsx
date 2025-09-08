import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LegalEaseApp from './LegalEaseApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LegalEaseApp></LegalEaseApp>
    </>
  )
}

export default App
