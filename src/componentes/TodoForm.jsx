import React from "react";
import { useState, useEffect, useRef} from "react";


export default function TodoForm ({addTodo}){
    const[input, setInput] = useState("")

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus();
    })
    const handleChange =(e)=>{
        setInput(e.target.value)
    }
    const handleSumbit = (e)=>{
        e.preventDefault()


        addTodo({
            id: Math.floor(Math.random()* 1000),
            text: input
        })
        
        setInput("")
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSumbit} ref={inputRef} className='todo-form'>
                    <input type="text" placeholder="activity..." value={input} name = "text" onChange={handleChange} className='todo-input edit'></input>
                    <button className ='todo-button'>Add</button>
                </form>
            </div>
        </div>
    )
}
