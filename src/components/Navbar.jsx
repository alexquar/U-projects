import './Navbar.css'
import icon from '../assets/icon.png'
import { NavLink } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
export default function Navbar() {
  const {logout, isPending} = useLogout()
  const {user} = useAuthContext()
    return (
      <nav className="navbar">
        <ul>
          <li className="logo">
            <img src={icon} alt="dojo logo" />
           <NavLink id="Title"><span><h1>U Projects</h1></span></NavLink> 
          </li>
        {!user && 
          <li><NavLink to="/login">Login</NavLink></li>
        }
        {!user &&
          <li><NavLink to="/signup">Sign up</NavLink></li>
        }
        {user &&<li>
          {!isPending && <button onClick={logout} className="btn">Logout</button>}
          {isPending && <button disabled className="btn">Pending...</button>}
          </li>
       }
        </ul>
      </nav>
    )
  }