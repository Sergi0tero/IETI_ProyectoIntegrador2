import { useEffect, useState } from 'react'
import { Task } from "./Task";
import { UseTasks } from '../hooks/UseTasks';
import { TaskCreator } from './TaskCreator';
import '../App.css';
import './TaskList.css'

export const TaskList = () => {
    const [checked, setChecked] = useState([]);
    const [todoList, addTask, deleteTask, updateTask] = UseTasks([]);

    let checkedCopy = [...checked]

    const handleState = (name) =>{
        if(!checked.includes(name.target.id)){
            checkedCopy = [...checked, name.target.id];

        }else{
            checkedCopy = checked.filter((taskName) => name.target.id != taskName );
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
            <TaskCreator></TaskCreator>
            <ul>
                {
                    todoList.map((task) => (
                        <li >
                            <Task
                            name={task.name} 
                            state={checked.includes(task.name)} 
                            desc={task.description} 
                            onCheckClick={handleState}
                            onDeleteTask = {deleteTask}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}