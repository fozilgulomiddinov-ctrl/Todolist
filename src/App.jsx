
import React, { useState } from 'react'
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const deleteTodo = (index) => {
  setTodos(todos.filter((_, i) => i !== index));
};


  const addTodo = (e) => {
    e.preventDefault();

    if (text.trim() === "" )return; 

      setTodos([...todos, text]);
      setText("");
  }
  return (
    <div className='w-full'>

      <div className='flex justify-center my-10'>
        <form className='flex gap-1' onSubmit = {addTodo}>

          <input 
          type = "text"
          value={text}
          onChange={(e) => setText(e.target.value )}
          placeholder='Enter a new tasks...'
          className='border text-black w-100 h-12 p-3 rounded-lg text-lg'/>

          <button type="submit" className="text-black text-xl h-12 bg-blue-500 box-border rounded-lg  border border-transparent hover:bg-brand-strong focus:ring-1 focus:ring-brand-medium shadow-xs font-medium leading-5 px-4 p-2 focus:outline-none">Add Tasks</button>

        </form>
      </div>
      <h3 className='text-center text-2xl m-2'>Jami: {todos.length} ta</h3>

        <div className='flex justify-center'>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
        
    </div>
    
  )
}

export default App