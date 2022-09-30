import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App w-screen h-screen bg-slate-200 flex">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
