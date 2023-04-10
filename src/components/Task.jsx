import { useState } from "react";
import './task.css';

export const Task = (props) => {
    const {name, state, desc, onCheckClick} = props

    return(<div>
            <input id={name} type="checkbox" defaultChecked={state} onChange={onCheckClick}/>
            <label  className={state ? "cheked" : "not-cheked"} htmlFor={name}>{name}: {desc}</label>
        </div>
    )
}