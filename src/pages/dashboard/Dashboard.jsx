import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
// components
import ProjectList from '../../components/ProjectList'

// styles
import './Dashboard.css'
import ProjectFilter from './ProjectFilter'

export default function Dashboard() {
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')
  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }
  return (
    <div>
      <h1 className="page-title" id='dashtitle'>Dashboard</h1>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter 
      currentFilter = {currentFilter} 
      changeFilter={changeFilter}
      />}
      {documents && <ProjectList projects={documents}  />}
    </div>
  )
}