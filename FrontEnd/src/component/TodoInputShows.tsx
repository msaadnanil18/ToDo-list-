import React, { useEffect, useState } from "react";
import { Card, Form, Input } from "antd";
import { TodoProvider, useTodo } from "../constext";
import { TodoContainer, Todo } from "../types";
import TodoForm from "./TodoForm"

interface IPops {
    todoContainer?:TodoContainer
}

const TodoInputShows: React.FC<IPops> = ({todoContainer}) => {

    const [todos, setTodos] = useState<Array<Todo>>([]);
   
    
    const addTodos = (todo:any) => {
       
        setTodos((prev) => [{ ...todo}, ...prev] )
    }
    const updateTodo = (id:any, todo:any) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id
            === id ? todo : prevTodo)) )
    }
    const deleteTodo = (id:any) => {
        setTodos((prev) => prev.filter((todo) => todo.id  !== id) )
    }
    const toggleComlate = (id:any) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, complete:!prevTodo.complete} : prevTodo) )
    }

    useEffect(() => {
        const todosString = localStorage.getItem("todos");
        const todos: Todo[] = todosString ? JSON.parse(todosString) : [];
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])
    useEffect(() => {
    localStorage.setItem("todos:", JSON.stringify(todos))
    }, [todos])


   

    return(
        <TodoProvider value={{todos, addTodos, updateTodo, deleteTodo, toggleComlate}} >
            <div>
            <TodoForm/>
            {todos.map((e,i) => (
                <div key={i}>
                 {e.todo}
                </div>
            ))}
            </div>
         
        </TodoProvider>
    )
} 

export default TodoInputShows