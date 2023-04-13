import { useState } from "react";
import './task.css';
import '../App.css'

export const Task = (props) => {
    const {name, state, desc, onCheckClick, onUpdateTask, onDeleteTask} = props

    return(<div id={name}>
            <input type="checkbox" checked={state} onChange={onCheckClick}/>
            <label  className={state ? "cheked" : "not-cheked"} htmlFor={name}>{name}: {desc}</label>
            <button id ={'upd' + name} className = 'update-task icon' onClick={onUpdateTask}>✏</button>
            <button id ={'del' + name} className = 'delete-task icon' onClick={onDeleteTask}>X</button>
        </div>
    )
}