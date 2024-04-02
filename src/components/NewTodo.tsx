import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {TodoListProps} from './TodoList';


interface Props {
    items: any,
    setTodos: any
}

const NewTodo = ({items, setTodos}: Props) => {

    const textInputRef = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState("");

    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
       const enteredText = textInputRef.current!.value;
       console.log('enteredText', enteredText)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo-text">
                    To-do text
                </label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Add to-do</button>
        </form>
    )
}
export default NewTodo;