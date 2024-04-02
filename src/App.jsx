
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="container">
   <Navbar />
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/project:id" element={<Project />} />
  </Routes>
  </div>
  </div>
    </BrowserRouter>
  

  );
}

export default App;
