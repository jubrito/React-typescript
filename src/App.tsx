import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([{ id: "t1", text: "Finish the course" }]);
  
  const addHandler = (text: string) => {
    console.log('text', text)
  }
  
  return (
    <div className="App">
      <TodoList items={todos}/>
      <NewTodo addHandler={addHandler}/>
    </div>
  );
}

export default App;
