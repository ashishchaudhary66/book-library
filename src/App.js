import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body-container'>
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}

export default App;
