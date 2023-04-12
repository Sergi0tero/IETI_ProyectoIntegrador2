import { useState } from "react"
import { UseTasks } from '../hooks/UseTasks';

export const TaskCreator = (props) => {
    const [todoList, addTask] = UseTasks();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    function onWriteName(event){
        setName(event.target.value);
    }
    function onWriteDesc(event){
        setDesc(event.target.value);
    }
    function createTask(){
        addTask({id : todoList.length, name : name, description : desc});
    }
    return(
        <div>
            <input id="nameInput" type="text" placeholder="Task name" onChange={onWriteName}/>
            <input id="descInput" type="text" placeholder="Task description" onChange={onWriteDesc}/>
            <button className='icon add-task' onClick={createTask}>+</button>
        </div>
    )
}