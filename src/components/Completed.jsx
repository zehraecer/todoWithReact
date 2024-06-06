import { useContext, useRef } from "react";
import { supabase } from "./Supabase";
import { userContext } from "../App";

export const CompletedBtn = ({ id }) => {

    const { todos, setTodos, completedRef } = useContext(userContext)


    const completedBtn = () => {

        todos.map(todo => {

            if (todo.id === id) {
                completedRef.current.style.color = "red"
            }
        })

    }

    return (

        <>
            <button onClick={completedBtn} >Completed</button>
        </>
    )

}