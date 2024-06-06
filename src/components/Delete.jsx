import { useContext } from "react";
import { supabase } from "./Supabase";
import { userContext } from "../App";


export const DeleteTodo = ({ id }) => {

    const { todos, setTodos } = useContext(userContext)

    const deleteBtn = async (e) => {

        const { data, error } = await supabase
            .from('todos')
            .delete()
            .eq('id', id)
        setTodos(todos.filter(todo => todo.id !== id))

    }

    return (
        <>

            <button onClick={deleteBtn}>Delete</button>

        </>

    )
}