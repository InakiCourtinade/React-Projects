import React from "react";
import TodoForm from "./TodoForm";
import { useState } from "react";
import Todo from "./Todo";

export default function TodoList(){
    const[todos, setTodos] = useState([])

    const addTodo = (todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [ todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

    const completeTodo =(id)=>{
        let updateTodos = todos.map(todo=>{

            if(todo.id=== id){
                todo.isComplete = !todo.isComplete
            }
          return todo  
        })
        setTodos(updateTodos)
    }
    const deleteTodo = (id)=>{
        const arraRemove = [...todos].filter(todo => todo.id !== id)

        setTodos(arraRemove)
    }

    const updateTodo = (todoId, newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev=>prev.map(item=> item.id === todoId ? newValue : item))
    }

    return(
        <div>
            <h1>What's your plan for today??</h1>
            <TodoForm addTodo={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
    )
}