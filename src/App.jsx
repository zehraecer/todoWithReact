import { createContext, useContext, useState, useRef } from 'react'
import './App.css'
import { InputArea } from './components/inputArea'
import { Todos } from './components/todos'

export const userContext = createContext()

function App() {
  const [todos, setTodos] = useState([])
  const completedRef = useRef()



  return (
    <userContext.Provider value={{ todos, setTodos, completedRef }}>
      <InputArea />
      <Todos />
    </userContext.Provider>
  )
}

export default App
