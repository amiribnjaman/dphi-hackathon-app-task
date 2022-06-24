import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Navbar from './SharedComponents/Navbar';
import { Routes, Route } from 'react-router-dom';
import CreateChallenge from './Pages/CreateChallenge/CreateChallenge';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './Pages/Details/Details';
import UpdateChallenge from './Pages/UpdateChallenge/UpdateChallenge';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-challenge' element={<CreateChallenge />} />
        <Route path='/challenge-details/:id' element={<Details />} />
        <Route path='/edit-challenge/:id' element={<UpdateChallenge />} />
      </Routes>
      <ToastContainer
        position="top-center"
      />
    </div>
  );
}

export default App;
