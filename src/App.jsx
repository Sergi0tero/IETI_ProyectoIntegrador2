import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import { TaskList } from './components/TaskList'

const todos = [
  {name : "todo1"}, 
  {name : "todo2"}
];
function App() {

  return (
    <div className="App">
      <Header />
      <TaskList todoList = {todos}/>
    </div>
  )
}

export default App
