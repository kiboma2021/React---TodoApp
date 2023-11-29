import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div className='list-container'>
          <h1>My to do List</h1>

        </div>
        <Footer />
      </>

    </div>
  );
}

export default App;
