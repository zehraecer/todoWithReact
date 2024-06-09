import { createContext, useContext, useState, useRef } from 'react'
import './App.css'
import { InputArea } from './components/inputArea'
import { Todos } from './components/todos'

export const userContext = createContext()

function App() {
  const [todos, setTodos] = useState([])
  const completedRef = useRef()
  const todoRef = useRef()

  return (
    <userContext.Provider value={{ todos, setTodos, completedRef, todoRef }}>
      <div className='container'>
        <img className='todoLogo' src="./todoLogo.png" alt="" />
        <InputArea />
        <Todos />

      </div>
    </userContext.Provider>
  )
}

export default App
