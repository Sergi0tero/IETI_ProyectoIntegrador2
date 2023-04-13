import { ListIcon, ChakraProvider, Flex, Heading, Divider, UnorderedList, ListItem, Center} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Task } from "./Task";
import { UseTasks } from '../hooks/UseTasks';
import { TaskCreator } from './TaskCreator';
import '../App.css';
import './TaskList.css'

export const TaskList = () => {
    const [checked, setChecked] = useState([]);
    const [todoList, addTask, deleteTask, updateTask] = UseTasks();

    let checkedCopy = [...checked]

    const handleState = (name) =>{
        if(!checked.includes(name.target.parentElement.id)){
            checkedCopy = [...checked, name.target.parentElement.id];

        }else{
            checkedCopy = checked.filter((taskName) => name.target.parentElement.id != taskName );
        }
        setChecked(checkedCopy);
        localStorage.setItem("checked", JSON.stringify(checkedCopy));
    }

    useEffect(() => {
        if (localStorage.getItem("checked") !== null){
            setChecked(JSON.parse(localStorage.getItem("checked")));
        } else {
            setChecked([])
        }
    },[])

    return (
        <Flex direction="column" borderBottomRadius="50px" bgColor="#ffd66f">
            <Flex>
                <TaskCreator todoList = {todoList} addTask = {addTask}></TaskCreator>
            </Flex>
            <Divider/>
            <Center>
                <Flex width="70vw" justifyContent="center" bgColor="#3bebf5" borderRadius="10px" marginBottom="5%">
                    <UnorderedList className='unordered' width="70vw" justifyContent="center">
                        {
                            todoList.map((task) => (
                                <ListItem color="#e39b15" listStyleType='none' key={task.name} justifyContent="center">
                                    <Task
                                    name={task.name} 
                                    state={checked.includes(task.name)} 
                                    desc={task.description} 
                                    onCheckClick={handleState}
                                    onUpdateTask = {updateTask}
                                    onDeleteTask = {deleteTask}
                                    />
                                </ListItem>
                            ))
                        }
                    </UnorderedList>
                </Flex></Center>
        </Flex>
    );
}