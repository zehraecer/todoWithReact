import { createContext, useContext, useState } from 'react'
import './App.css'
import { InputArea } from './components/inputArea'
import { Todos } from './components/todos'

export const userContext = createContext()

function App() {
  const [todos, setTodos] = useState([])


  return (
    <userContext.Provider value={{ todos, setTodos }}>
      <InputArea />
      <Todos />
    </userContext.Provider>
  )
}

export default App
