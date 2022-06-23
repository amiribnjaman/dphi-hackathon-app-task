import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Navbar from './SharedComponents/Navbar';
import { Routes, Route } from 'react-router-dom';
import CreateChallenge from './Pages/CreateChallenge/CreateChallenge';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-challenge' element={<CreateChallenge />} />
      </Routes>
    </div>
  );
}

export default App;
