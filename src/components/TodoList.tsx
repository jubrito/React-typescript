import { Todo } from "../todo.model";
export interface Props {
    items: Todo[];
    deleteHandler: (todoId: string) => void;
}

const TodoList = ({ items, deleteHandler }: Props) => {
    return (
        <ul>
            {items.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
