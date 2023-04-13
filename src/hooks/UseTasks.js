import { useEffect, useState } from "react";

var persistentTodoList = [
    {name : "todo1", description : "The todo #1"}, 
    {name : "todo2", description : "The todo #2"}
];
// localStorage.setItem("todoList", JSON.stringify(todoList))

export function UseTasks(){
    const [todoList, setTodoList] = useState([]);

    const addTask = (task) => {
        const newTodo = [...todoList, task];
        setTodoList(newTodo);
        localStorage.setItem("todoList", JSON.stringify(newTodo))
    }

    const deleteTask = (event) => {
        const taskId = event.target.parentElement.id
        const newTodo = todoList.filter((task) => taskId != task.name);
        setTodoList(newTodo);
        localStorage.setItem("todoList", JSON.stringify(newTodo))
    }

    const updateTask = (event) => {
        const taskId = event.target.parentElement.id
        let newName = prompt("Enter the new name:", taskId);
        let newDesc = prompt("Enter the new name:", taskId);
        todoList.forEach(todo => {
            if (todo.name == taskId){
                todo.name = newName
                todo.description = newDesc
                const newTodo = todoList.filter((task) => taskId != task.name);
                setTodoList(newTodo);
                localStorage.setItem("todoList", JSON.stringify(newTodo))
            } 
        });
    }

    useEffect(() => {
        if (localStorage.getItem("todoList") !== null){
            setTodoList(JSON.parse(localStorage.getItem("todoList")));
        } else {
            setTodoList(persistentTodoList)
            localStorage.setItem("todoList", JSON.stringify(persistentTodoList))
        }
    }, [])
    return [todoList, addTask, deleteTask, updateTask]
}