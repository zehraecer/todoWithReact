import { useContext, useRef } from "react";
import { supabase } from "./Supabase";
import { userContext } from "../App";
import { AiOutlineCheck } from "react-icons/ai";

export const CompletedBtn = ({ id }) => {

    const { todos, setTodos, completedRef } = useContext(userContext)



    const completedBtn = async () => {

        const completedTodo = todos.find(todo => todo.id === id)
        console.log(completedTodo);

        const isCompleted = !completedTodo.completed === false ? false : true
        console.log(isCompleted);

        const { data, error } = await supabase
            .from('todos')
            .update({ completed: isCompleted })
            .eq('id', id);

        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: isCompleted } : todo)

        setTodos(updatedTodos)

    }

    return (

        <>
            <button className="btn" onClick={completedBtn} ><AiOutlineCheck /></button>
        </>
    )

}