import './Navbar.css'
import icon from '../assets/icon.png'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
      <nav className="navbar">
        <ul>
          <li className="logo">
            <img src={icon} alt="dojo logo" />
            <span><h1>U Projects</h1></span>
          </li>
  
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
          <li>
            <button className="btn">Logout</button>
          </li>
        </ul>
      </nav>
    )
  }