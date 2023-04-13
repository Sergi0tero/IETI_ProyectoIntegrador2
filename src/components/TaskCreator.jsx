import { useState } from "react"
import { UseTasks } from '../hooks/UseTasks';

export const TaskCreator = (props) => {
    const {todoList, addTask} = props;
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    function onWriteName(event){
        setName(event.target.value);
    }
    function onWriteDesc(event){
        setDesc(event.target.value);
    }
    function createTask(){
        addTask({name : name, description : desc});
    }
    const nameValid = name.length >= 3
    return(
        <form onSubmit={(event) => event.preventDefault()}>
            <input id="nameInput" type="text" placeholder="Task name" onChange={onWriteName}/>{!nameValid && (
            <span style={{ color: "red" }}>El nombre debe tener al menos 3 caracteres</span>
          )}
          <br />
            <input id="descInput" type="text" placeholder="Task description" onChange={onWriteDesc}/>
            <button className='icon add-task' onClick={createTask} disabled = {!nameValid}>+</button>
        </form>
    )
}