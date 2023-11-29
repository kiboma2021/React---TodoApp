import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [tasks, setTasks]=useState([
    {id:121, name: 'Wash utensils', completed: false},
    {id:122, name: 'Wash Clothes', completed: true},
    {id:123, name: 'Go to the Library to collect a book', completed: false},
    {id:124, name: 'Study python - 100 days of code', completed: false},
    {id:125, name: 'Go swimming', completed: true},
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id != id))
  }
  return (
    <div className="App">
      <>
        <Header />
        <div className='list-container'>
        
          <div>
          <h1>My to do List</h1>
          <div className='toggle-cont'>
            <button className='toggle' onClick={()=>setShow(!show)}>Toggle</button>
          </div>
          
            <ul>
              {show && tasks.map(task =>(
                <li className='items' key={task.id}>
                  <span>{task.id}- {task.name}</span>                
                  <button onClick={()=>handleDelete(task.id)}>Delete</button>                  
                </li>

              ))}
            </ul>
          </div>
          
        </div>
        <Footer />
      </>

    </div>
  );
}

export default App;
