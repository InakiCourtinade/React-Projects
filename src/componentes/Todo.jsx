import React from "react";
import TodoList from "./TodoList";
import { useState } from "react";
import {RiCloseCircleLine} from "react-icons/ri"
import {TiEdit} from "react-icons/ti"
import TodoForm from "./TodoForm";

export default function Todo ({todos, completeTodo, deleteTodo, updateTodo}){
    const [edit , setEdit]= useState ({
        id:null,
        value: ""
    })

    const sumbitUpdate=(value)=>{
        updateTodo(edit.id, value)
        setEdit({
        id:null,
        value: ""
    })
       
    }
    if(edit.id){
        return <TodoForm edit={edit} addTodo={sumbitUpdate}/>
    }

    return todos.map((todo,index)=> (
        <div className={todo.isComplete? "todo-row complete" : "todo-row"} key={index}>
            <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className ="icons">
                <RiCloseCircleLine className='delete-icon' onClick={()=>deleteTodo(todo.id)}/>
                <TiEdit className= 'edit-icon' onClick={()=>setEdit({id : todo.id, text: todo.text})}/>
            </div>


            
        </div>

    ))

    
}