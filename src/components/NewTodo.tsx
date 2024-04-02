import { FormEvent, useRef } from "react";


interface Props {
    addHandler: (text: string) => void;
}

const NewTodo = ({addHandler}: Props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
       const enteredText = textInputRef.current!.value;
       addHandler(enteredText);
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