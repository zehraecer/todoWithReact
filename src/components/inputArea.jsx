import { useRef, useContext } from "react"
import { supabase } from './Supabase.js';
import { userContext } from "../App.jsx";


export const InputArea = () => {
    const inputRef = useRef()
    const { todos, setTodos } = useContext(userContext);

    const handleForm = async (e) => {
        e.preventDefault()
        console.log(inputRef.current);

        const formData = new FormData(inputRef.current)
        const formObj = Object.fromEntries(formData.entries());


        const { data, error } = await supabase
            .from('todos')
            .insert([
                { todo: formObj.todo },
            ])
            .select()

        setTodos([...todos, ...data])
        console.log(data);


    }

    return (
        <>
            <div>

                <form ref={inputRef}>

                    <input type="text" name="todo" placeholder="Add Todo" />
                    <button type="submit" onClick={handleForm} >Add</button>

                </form>
            </div>

        </>
    )
}