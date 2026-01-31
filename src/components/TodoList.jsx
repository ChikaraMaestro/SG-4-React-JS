import React from 'react'
import '../assets/css/TodoList.css'
import { useState } from 'react'

const TodoList = () => {
    const[todo, setTodo] = useState('')

    const[list, setList] = useState([
        {
            id: 1, 
            deskripsi:'Belajar ReactJs',
        }
    ])

const addTodohandler = () =>{

    if(!todo)return;

    const data = {
        id: list.length + 1, 
        deskripsi: todo,
    }

    list.push(data)

    setList(list);
    setTodo('')
}

  return (
    <div className="card todo-section">
        <h3>My Tasks</h3>

        <div className="input-group">
          <input 
          type="text" 
          placeholder="Tulis tugas baru..." 
          onChange={(e)=> setTodo(e.target.value)}
          /> 

          <button className="btn btn-primary" onClick={addTodohandler}>Add</button>
          
        </div>
        
        <ul id="todo-list" className="todo-list" >
            {list.map((element, index)=>{
                return ( 
                <li key={element.id}>
                    <span>{element.deskripsi}</span>
                </li>)
            })}
        </ul>
    </div>
  )
}

export default TodoList
