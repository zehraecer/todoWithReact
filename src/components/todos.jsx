import { useEffect, useContext } from 'react';
import { supabase } from './Supabase.js';
import { userContext } from '../App.jsx';
import { InputArea } from './inputArea.jsx';
import { DeleteTodo } from './Delete.jsx';
import { EditTodo } from './Edit.jsx';
import { CompletedBtn } from './Completed.jsx';



export const Todos = () => {
    const { todos, setTodos, completedRef } = useContext(userContext);

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
            <div>{todos.map((todo) => {
                return (

                    <div key={todo.id} ref={completedRef} >

                        <li>{todo.todo}</li>
                        <DeleteTodo id={todo.id} />
                        <EditTodo id={todo.id} />
                        <CompletedBtn id={todo.id} />
                    </div>
                )
            })}

            </div>
        </>
    )
}