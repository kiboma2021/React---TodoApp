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
        const [name, setName] = useState("");
        const [status, setStatus] = useState(false);
      
        function handleDelete(id) {
          setTasks(tasks.filter(task => task.id !== id))
        }

        function addTask(event){
          setName(event.target.value)
        }

        function handleSubmit(event){
          event.preventDefault();

          console.log(status,Boolean(status));

          const gen_id=Math.floor(Math.random()*10000);

          const task = 
            {
              id: gen_id,
              name: name,
              completed: Boolean(status)
            }

          console.log(task)
          setTasks([...tasks,task])
          handleReset()

        }

        function handleReset(){
          setName("");
          setStatus(false);
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
    <h1 style={styles} className='title'>{props.title}</h1>
    <div className='toggle-cont'>
      <button className='toggle' onClick={()=>setShow(!show)}>{show? "Hide":"Show"}</button>
    </div>
    <form onSubmit={handleSubmit}>
      <input on onChange={addTask} type="text" placeholder='Enter Task' value={name} />
      <select onChange={(event)=>setStatus(event.target.value)} value={status} >
        <option value="false">Pending</option>
        <option value="true">Completed</option>
      </select>
      <span onClick={handleReset} className='reset'>Reset</span>
      <button>Add</button>
    </form>
    <div className='task-output'>
      <p>{name} </p>
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
