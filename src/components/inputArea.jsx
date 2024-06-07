import { useRef, useContext, useState } from "react"
import { supabase } from './Supabase.js';
import { userContext } from "../App.jsx";


export const InputArea = () => {
    const inputRef = useRef()
    const { todos, setTodos } = useContext(userContext);
    const [input, setInput] = useState("")

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
        setInput("")

        console.log(data);


    }

    return (
        <>
            <div className="form">

                <form ref={inputRef}>

                    <input type="text" name="todo" placeholder="What do you need to do" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type="submit" className="submit" onClick={handleForm} >Add</button>

                </form>
            </div>

        </>
    )
}