import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { useState } from "react";
import { Todo } from "./todo.model";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (todoText: string) => {
        setTodos((previousTodosLatestState) => [
            ...previousTodosLatestState,
            { id: Math.random().toString(), text: todoText },
        ]);
    };

    const deleteHandler = (todoId: string) => {
        console.log("todoId", todoId);
        setTodos((previousTodosLatestState) => {
            return previousTodosLatestState.filter(
                (todo) => todo.id !== todoId
            );
        });
    };

    return (
        <div className="App">
            <TodoList items={todos} deleteHandler={deleteHandler} />
            <NewTodo todoAddHandler={todoAddHandler} />
        </div>
    );
}

export default App;
