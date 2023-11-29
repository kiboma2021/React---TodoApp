import React from 'react'
import { useState } from 'react';

export default function Tasks(props) {
        const [tasks, setTasks]=useState([
          {id:121, name: 'Wash utensils', completed: false},
          {id:122, name: 'Wash Clothes', completed: true},
          {id:123, name: 'Go to the Library to collect a book', completed: false},
          {id:124, name: 'Study python - 100 days of code', completed: false},
          {id:125, name: 'Go swimming', completed: true},
        ]);
      
        const [show, setShow] = useState(true);
      
        function handleDelete(id) {
          setTasks(tasks.filter(task => task.id !== id))
        }


  return (
    <div className='list-container'>
        
    <div>
    <h1>{props.title}</h1>
    <div className='toggle-cont'>
      <button className='toggle' onClick={()=>setShow(!show)}>Toggle</button>
    </div>
    
      <ul>
        {show && tasks.map(task =>(
          <li className={task.completed? "completed-items":"pending-items"} key={task.id} >
            <span>{task.id}- {task.name}</span>                
            <button onClick={()=>handleDelete(task.id)} className={task.completed?"btn-completed":"btn-pending"}>Delete</button>                  
          </li>

        ))}
      </ul>
    </div>
    
  </div>
  )
}
