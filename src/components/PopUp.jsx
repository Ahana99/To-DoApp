import React, {useEffect, useRef} from "react";

export default function PopUp({todos, setTodos, openPopup, setOpenPopup, edit, setEdit}){
    const editInput = useRef(null);

    useEffect(() => {
        if (editInput.current != null) {
            editInput.current.value=edit.title;
        }
        }, [edit.title]);

    function onPopUpSubmit(event){
        event.preventDefault();
        const newTodo = todos.map((todo) => todo.id === edit.id ? {...edit, title: editInput.current.value} : todo)
        setTodos(newTodo);  
        setOpenPopup(!openPopup);
        setEdit({});
    }

    return(
        <div  className='pop-up'>
            <form onSubmit={onPopUpSubmit}>
                <div className='header'>
                    <h2>Make changes...</h2>
                </div>
                <div>
                    <input type='text' placeholder='Enter changed name...' className='task' ref={editInput}></input>
                </div>
                <div className='btn-grp'>
                    <button className='add-btn-pop' onClick={() => setOpenPopup(!openPopup)}>Cancel</button>
                    <button className='add-btn-pop' type="submit">Change</button>
                </div>
            </form>
        </div>
    )
}