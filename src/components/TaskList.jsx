import { useEffect, useState } from 'react'
import { Task } from "./Task";

var todoList = [
    {name : "todo1", description : "The todo #1"}, 
    {name : "todo2", description : "The todo #2"}
];
localStorage.setItem("todoList", JSON.stringify(todoList))
export const TaskList = () => {
    const [checked, setChecked] = useState([])

    let checkedCopy = [...checked]


    const handleState = (name) =>{
        if(!checked.includes(name.target.id)){
            checkedCopy = [...checked, name.target.id];

        }else{
            checkedCopy = checked.filter((taskName) => name.target.id != taskName );
        }
        setChecked(checkedCopy);
        console.log({checked})
        localStorage.setItem("todoList", JSON.stringify(checkedCopy));
    }

    useEffect(() => {
        if (localStorage.getItem("todoList") !== null){
            todoList = JSON.parse(localStorage.getItem("todoList"));
            setChecked(todoList);
        }
    },[])

    return (
        <div>
            <input id="input" type="text" placeholder="new task"/>
            <ul>
                {
                    todoList.map((task) => (
                        <li >
                            <Task name={task.name} 
                            state={checked.includes(task.name)} 
                            desc={task.desc} 
                            onCheckClick={handleState}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}