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

        setTodos(data)

    }



    return (
        <>
            <div ref={completedRef} className='todoList' >{todos.map((todo) => {
                return (

                    <div key={todo.id} ref={completedRef} className='todos'>

                        <li className={todo.completed ? "active" : "noActive"}>{todo.todo}</li>

                        <div className="btns">

                            <div><DeleteTodo id={todo.id} /></div>
                            <div><EditTodo id={todo.id} /></div>
                            <div><CompletedBtn id={todo.id} /></div>

                        </div>
                    </div>
                )
            })}

            </div>
        </>
    )
}