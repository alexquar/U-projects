import { useEffect, useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import './Create.css'
import Select from 'react-select'
export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)
  const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
  ]
  const {documents} = useCollection('user')
  const [users, setUsers]= useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)
    if(!category ){
      setFormError('Please select a category...')
      return 
    }
    if(assignedUsers.length<1 ){
      setFormError('Please select atleast one user...')
      return 
    }
    //
  }

  useEffect(()=>{
    if(documents){
   const options = documents.map((user)=>{
        return {value : user , label:user.displayName}
    })
    setUsers(options)
}
  },[documents])

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            required 
            type="text" 
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea 
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details} 
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input
            required 
            type="date" 
            onChange={(e) => setDueDate(e.target.value)} 
            value={dueDate}
          />
        </label>
        <label>
          <span>Project category:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        <label>
          <span>Assign to:</span>
        <Select 
         onChange={(option) => setAssignedUsers(option)}
        options={users}
        isMulti
        />


        </label>
        {formError && <div className='error'>{formError}</div>}
        <button className="btn">Add Project</button>
      </form>
    </div>
  )
}