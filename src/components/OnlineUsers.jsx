import './OnlineUsers.css'
import { useCollection } from '../hooks/useCollection'
import Avatar from './Avatar'
export default function OnlineUsers() {
    const {documents, error} = useCollection('user')
  return (
    <div className='user-list'>
      <h2>Oneline Users</h2>

    {
      documents &&  documents.map(user => (
            <div className='user-list-item' key={user.id}>
                <span>{user.displayName}</span>
                <Avatar src={user.photoURL}/>
            </div>
        ))
    }

      {error && <div className='error'> {error}</div>}
    </div>
  )
}
