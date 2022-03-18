import React, { useRef } from 'react'
import "./style.css";

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  addTodo:(e: React.FormEvent)=>void;
}
const InputTodo: React.FC<Props> = ({todo, setTodo, addTodo}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className="input" action="" onSubmit={(e)=>
      {
        addTodo(e)
        inputRef.current?.blur();
      }} >
      <input type="input" 
      ref={inputRef}
      value={todo}
      onChange={
        (e)=>setTodo(e.target.value)
      }
      placeholder='Nhap todo' className='input_box'/>
      <button className='btnSubmit' type='submit'> Submit</button>
    </form>
  )
}

export default InputTodo;