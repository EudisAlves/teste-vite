import { useState } from 'react'
import { Header } from './components/Header/index';
import { Main } from './components/Main/index';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
