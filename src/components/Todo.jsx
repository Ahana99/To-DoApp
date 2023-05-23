import React from 'react';

export default function Todo({todos, setTodos, searchStr, openPopup, setOpenPopup, setEdit}){

    function handleCheck({id,completed}){

        const findTodo = todos.find((todo) => todo.id === id);
        const newTodo = todos.map((todo) => todo.id === findTodo.id ? {...findTodo, completed: !completed} : todo)
        setTodos(newTodo);  
    }

    function handleClickEdit({id}){
        const findTodo = todos.find((todo) => todo.id === id);
        setEdit(findTodo);
        setOpenPopup(!openPopup);
        }

    function handleRemove({id}){
        setTodos(todos.filter((todo) => todo.id !== id));
    }
        return(
        <div>{todos.filter((todo) => todo.title.toLowerCase().includes(searchStr.toLowerCase())).map((todo) => (
                <li className='item'
                key={todo.id}>
                    <input
                    type='text'
                    value={todo.title}
                    className={`list ${todo.completed ? "done" : ""}`}
                    onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className='complete' onClick={() => handleCheck(todo)}>
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='edit' onClick={() => handleClickEdit(todo)}>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='delete' onClick={() => handleRemove(todo)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            )
            )}
            

            
        </div>
    )
}
