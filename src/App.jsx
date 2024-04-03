
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Sidebar from './components/Sidebar';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const {user, authIsReady} = useAuthContext()
  return (
    
    <div className="App">
      {authIsReady &&
      <BrowserRouter>
      <Sidebar />
      <div className="container">
   <Navbar />
      <Routes>
    {user &&  <Route path="/" element={<Dashboard />} />}
    {!user &&  <Route path="/" element={<Navigate to='/login' />} />}
    {!user && <Route path="/login" element={<Login />} /> }
    {user && <Route path="/login" element={<Navigate to='/' />} /> }
    {user &&  <Route path="/create" element={<Create />} /> }
    {!user &&  <Route path="/create" element={<Navigate to='/login' />} /> }
    {!user &&  <Route path="/signup" element={<Signup />} /> }
    {user && <Route path="/signup" element={<Navigate to='/' />} /> }
    {user && <Route path="/project:id" element={<Project />} /> }
    {!user && <Route path="/project:id" element={<Navigate to='/login' />} /> }
  </Routes>
  </div>
  </BrowserRouter>
}
  </div>
  

  );
}

export default App;
