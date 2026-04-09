function TodoList({ todos, deleteTodo }) {
  return (
    <ul className='h-auto w-150 overflow-y-auto bg-white rounded-lg '>
      {todos.map((todo, index) => (
        <li
          key={index}
          className='flex justify-between text-2xl border-b last:border-0 p-3'
        >
          {todo}
          <button
            onClick={() => deleteTodo(index)}
            className="text-white text-lg h-10 bg-red-500 rounded-lg px-4"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;