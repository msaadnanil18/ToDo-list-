import React, {createContext, useContext } from "react";
import { TodoContainer, Todo } from "../types";


export const TodoContext = createContext<TodoContainer>({
    todos:[
        {
            id: 1,
            todo:"Todos msg",
            complete: false,
        }

      
    ],
    addTodos : (todo:any) => {},
    updateTodo:(id:any, todo:any) => {},
    deleteTodo:(id:any) => {},
    toggleComlate:(id:any) => {}
})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider =  TodoContext.Provider