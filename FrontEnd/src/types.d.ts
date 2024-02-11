


export interface Todo{
 
    id: number;
    todo: string;
    complete: boolean;
  }
  

  export interface TodoContainer{
    todos:Todo[],
    addTodos:(todo:Todo) => void,
    updateTodo:(id:Id, todo:Todo) => void,
    deleteTodo:(id:Id) => void,
    toggleComlate:(id:Id) => void,
    
}