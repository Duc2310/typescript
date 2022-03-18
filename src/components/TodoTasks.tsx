import React, { useState } from 'react'
import { Todo } from '../model';
import {AiFillEdit,AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import "./style.css";

type Props={
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoTasks = ({todo,todos,setTodos}:Props) => {
        const [edit,setEdit] = useState<boolean>(false);
        const [editTodo,setEditTodo] = useState<string>(todo.todo);
    
        const todoDone = (id: number) => {
            setTodos(
              todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
              )
            );
          };

    const todoDelete = (id:number) =>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    }

    const todoEdit = (e:React.FormEvent, id:number ) =>{
        e.preventDefault();
        setTodos(todos.map((todo) => ( todo.id === id?{...todo, todo:editTodo}:todo)));
        setEdit(false);
    }

    return (
    <form className='todo_tasks' onSubmit={(e)=>todoEdit(e,todo.id)}>
        {
            edit ?(
                <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="todo_tasks_text"/>
            )
            :todo.isDone?
            (<s className='todo_tasks_text'>{todo.todo}</s>)
            :( <span className='todo_tasks_text'>{todo.todo}</span>)
        }
        
        <div>
            <span className='icon' onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }}}>
                <AiFillEdit/>
            </span>
            <span className='icon'onClick={()=>todoDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className='icon' onClick={()=>todoDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default TodoTasks