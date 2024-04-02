import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([{ id: "t1", text: "Finish the course" }]);
  return (
    <div className="App">
      <TodoList items={todos}/>
      <NewTodo items={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
