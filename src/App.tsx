import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import { Todo } from './components/todo.model'

function App() {
  const [todos, setTodos] = useState<{id: string, text: string}[]>([]);
  
  const addHandler = (text: string) => {
    console.log('text', text)
    let newTodo = todos;
    newTodo = [...todos, { id: Math.random().toString(), text: text }]
    setTodos(newTodo);
  }
  
  return (
    <div className="App">
      <TodoList items={todos}/>
      <NewTodo addHandler={addHandler}/>
    </div>
  );
}

export default App;
