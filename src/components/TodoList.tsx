import React from 'react'
import { Todo } from '../model';
import TodoTasks from './TodoTasks';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>
        {todos.map(todo =>(
            <TodoTasks todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ) )}
    </div>
  )
}

export default TodoList