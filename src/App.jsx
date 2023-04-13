import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import { TaskList } from './components/TaskList'
import {HomePage} from './pages/HomePage'
import {AboutUs} from './pages/AboutUsPage'
import {Menu} from './components/Menu'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Menu/>
      <Routes>
        <Route path = '/' element = {<HomePage />}></Route>
        <Route path = '/task-list' element = {<TaskList />}></Route>
        <Route path = '/about-us' element = {<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
