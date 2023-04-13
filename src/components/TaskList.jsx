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
        if(!checked.includes(event.target.parentElement.id)){
            checkedCopy = [...checked, event.target.parentElement.id];

        }else{
            checkedCopy = checked.filter((taskName) => event.target.parentElement.id != taskName );
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
        <div>
            <TaskCreator todoList = {todoList} addTask = {addTask}></TaskCreator>
            <ul>
                {
                    todoList.map((task) => (
                        <li key={task.name}>
                            <Task
                            name={task.name} 
                            state={checked.includes(task.name)} 
                            desc={task.description} 
                            onCheckClick={handleState}
                            onUpdateTask = {updateTask}
                            onDeleteTask = {deleteTask}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}