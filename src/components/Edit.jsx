import { useContext } from "react";
import { supabase } from "./Supabase";
import { userContext } from "../App";
import { CiEdit } from "react-icons/ci";

export const EditTodo = ({ id }) => {

    const { todos, setTodos } = useContext(userContext)

    const editBtn = async () => {

        const answer = prompt("ne ile değiştirmek istersiniz")

        if (!answer) return
        const { data, error } = await supabase
            .from('todos')
            .update({ todo: answer })
            .eq('id', id)

        const updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.todo = answer
                return todo
            } else {
                return todo;
            }
        })

        setTodos(updateTodos)

    }
    return (
        <>

            <button className="btn" onClick={editBtn}><CiEdit /></button>

        </>
    )
}