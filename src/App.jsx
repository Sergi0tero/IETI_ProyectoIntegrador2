import { Divider, Button, ChakraProvider, Flex, Heading } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import { TaskList } from './components/TaskList'
import {HomePage} from './pages/HomePage'
import {AboutUs} from './pages/AboutUsPage'
import {Menu} from './components/Menu'

function App() {

  return (
    <Flex direction="column">
      <BrowserRouter>
        <Flex bgColor="#ffdc58" borderTopRadius="30px">
          <Flex width="50%" justifyContent="left" alignContent="center">
            <Header />
          </Flex>
          <Flex width="50%" justifyContent="right" alignContent="center">
            <Menu/>
          </Flex>
        </Flex>
        <Routes>
          <Route path = '/' element = {<HomePage />}></Route>
          <Route path = '/task-list' element = {<TaskList />}></Route>
          <Route path = '/about-us' element = {<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
      </Flex>
  )
}

export default App
