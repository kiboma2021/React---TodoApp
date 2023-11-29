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
  return (
    <div className="App">
      <>
        <Header />
        <div className='list-container'>
        
          <div>
          <h1>My to do List</h1>
            <ul>
              {tasks.map(task =>(
                <li className='items'>
                  <span>{task.id}- {task.name}</span>                
                  <button>Delete</button>                  
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
