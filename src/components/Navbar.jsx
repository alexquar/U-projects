import './Navbar.css'
import icon from '../assets/icon.png'
import { NavLink } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
export default function Navbar() {
  const {logout, isPending} = useLogout()
    return (
      <nav className="navbar">
        <ul>
          <li className="logo">
            <img src={icon} alt="dojo logo" />
            <span><h1>U Projects</h1></span>
          </li>
  
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Sign up</NavLink></li>
          <li>
          {!isPending && <button onClick={logout} className="btn">Logout</button>}
          {isPending && <button disabled className="btn">Pending...</button>}
          </li>
        </ul>
      </nav>
    )
  }