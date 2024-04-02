import { FormEvent, useRef } from "react";
import './NewTodo.css';

interface Props {
    todoAddHandler: (todoText: string) => void;
}

const NewTodo = ({todoAddHandler}: Props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
       const enteredText = textInputRef.current!.value;
       todoAddHandler(enteredText);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
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