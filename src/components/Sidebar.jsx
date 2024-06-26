import './Sidebar.css'
import Dashboard from '../assets/dashboard_icon.svg'
import Add from '../assets/add_icon.svg'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Avatar from './Avatar'
export default function Sidebar() {
  const {user} = useAuthContext()
  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
            <p>Hey {user.displayName}!</p>
        </div>
        <nav className="links">
            <ul>
                <li>
               <NavLink to='/'>
                    <img src={Dashboard} alt="dashboard icon" />
                    <span>Dashboard</span>
               </NavLink>
               </li>
               <li>
               <NavLink to='/create'>
                    <img src={Add} alt="add icon" />
                    <span>New project</span>
               </NavLink>
               </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}
