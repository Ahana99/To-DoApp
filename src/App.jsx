import React, { useState, useEffect, useRef } from 'react'
import {v4 as uuidV4} from "uuid";
import Header from './components/Header'
import Todo from './components/Todo'
import PopUp from './components/PopUp';

export default function App() {

  const input = useRef(null);
  const [todos, setTodos] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [edit, setEdit] = useState({});


//the form component
  function onFormSubmit(event){
    event.preventDefault();
    setTodos([...todos, {id: uuidV4(), title: input.current.value, completed: false}]);
    input.current.value = "";
    
}
  
  return(
    <div>
      <div className={`container ${openPopup ? "blur" : ""}`}>
      <div className='wrapper'>
          <Header />
          <form onSubmit={onFormSubmit}>
                <input
                type='text'
                placeholder='Enter a todo...'
                className='task'
                ref={input}
                required
                />
                <button className='add-btn' type='submit'>Add</button>
            </form>
            <input
                type='search'
                placeholder='Search a todo...'
                className='task'
                value = {searchStr}
                onChange={(e) => setSearchStr(e.target.value)}
                />
          <Todo
          todos={todos}
          setTodos={setTodos}
          input = {input}
          searchStr={searchStr}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          setEdit={setEdit}
          />
      </div>
      </div>
      <div>
        {openPopup && 
        <PopUp
        todos={todos}
        setTodos={setTodos}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        edit={edit}
        setEdit={setEdit}
        />}
      </div>
    </div>
  )
  
}
