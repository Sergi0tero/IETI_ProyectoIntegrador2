import { Checkbox } from '@chakra-ui/react'
import { useState } from "react";
import { Input } from '@chakra-ui/react'
import './task.css';
import '../App.css'

export const Task = (props) => {
    const {name, state, desc, onCheckClick, onUpdateTask, onDeleteTask} = props

    return(<div id={name}>
            <Checkbox colorScheme='orange' color="black" fontFamily="sans-serif" checked={state} onChange={onCheckClick}>{name}: {desc}</Checkbox>
            <label className={state ? "cheked" : "not-cheked"} htmlFor={name}> </label>
            <button id ={'upd' + name} className = 'update-task icon' onClick={onUpdateTask}>✏</button>
            <button id ={'del' + name} className = 'delete-task icon' onClick={onDeleteTask}>X</button>
        </div>
    )
}