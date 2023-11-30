import React from 'react'

export default function TaskList({task,handleDelete}) {
  return (
    <div>
        <li className={task.completed? "completed-items":"pending-items"} key={task.id} >
        <span>{task.id}- {task.name}</span>                
        <button onClick={()=>handleDelete(task.id)} className={task.completed?"btn-completed":"btn-pending"}>Delete</button>                  
        </li>    
    </div>
  )
}
