import React from 'react'
import { useState } from 'react';
import TaskList from './TaskList';

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

        const styles={
          color: show? "green":"red",
          fontSize:"3rem",
          padding:"2rem",
          border: "2px solid",
          borderColor: show? "green" : "red",
        }

  return (
    <div className='list-container'>
        
    <div>
    <h1 style={styles}>{props.title}</h1>
    <div className='toggle-cont'>
      <button className='toggle' onClick={()=>setShow(!show)}>Toggle</button>
    </div>
    <ul>
        {show && tasks.map(task =>(
          <TaskList task={task} handleDelete={handleDelete} />

        ))}
      </ul>  

    </div>
    
  </div>
  )
}
