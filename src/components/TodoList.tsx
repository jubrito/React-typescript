interface TodoListProps {
    items: {id: string, text: string}[]
}

const TodoList = ({items}: TodoListProps): JSX.Element => {
    return (
        <ul>
            {items.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};

export default TodoList;
