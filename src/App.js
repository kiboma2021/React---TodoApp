import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className="App">
      <>
        <Header title="To do App" />
        <Tasks title="My to do List" />
        <Footer footer="@copyright. All rights reserved" />
      </>

    </div>
  );
}

export default App;
