import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { useState } from "react";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const addHandler = (text: string) => {
    console.log("text", text);
    setTodos((previousTodosLatestState) => [
      ...previousTodosLatestState,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="App">
      <TodoList items={todos} />
      <NewTodo addHandler={addHandler} />
    </div>
  );
}

export default App;
