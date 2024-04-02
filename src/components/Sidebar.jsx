import './Sidebar.css'
import Dashboard from '../assets/dashboard_icon.svg'
import Add from '../assets/add_icon.svg'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="user">
            <p>Hey user</p>
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
