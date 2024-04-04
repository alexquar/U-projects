import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'

// styles
import './Project.css'
import ProjectSumarry from "./ProjectSumarry"
import ProjectComments from "./ProjectComments"
export default function Project() {
  const { id } = useParams()
  const { document, error } = useDocument('projects', id)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="project-details">
      <ProjectSumarry project={document} />
      <ProjectComments project={document}/>
    </div>
  )
}