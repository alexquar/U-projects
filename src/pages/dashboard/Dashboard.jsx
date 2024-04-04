import { useCollection } from '../../hooks/useCollection'

// components
import ProjectList from '../../components/ProjectList'

// styles
import './Dashboard.css'
import ProjectFilter from './ProjectFilter'

export default function Dashboard() {
  const { documents, error } = useCollection('projects')

  return (
    <div>
      <h1 className="page-title" id='dashtitle'>Dashboard</h1>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}