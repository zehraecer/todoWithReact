import { useEffect, useContext } from 'react';
import { supabase } from './Supabase.js';
import { userContext } from '../App.jsx';



export const Todos = () => {
    const { todos, setTodos } = useContext(userContext);

    useEffect(() => {
        getTodos()

    }, [])

    async function getTodos() {
        let { data, error } = await supabase.from('todos').select()


        return setTodos(data)

    }
    console.log(todos);
    return (
        <>
            <ul>{todos.map((e) => {
                return (
                    <li key={e.id}>{e.todo}</li>
                )
            })}</ul>
        </>
    )
}