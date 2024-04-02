import { useState } from 'react'
import './Signup.css'
import { useSignup } from '../../hooks/useSignup'
export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState('')
    const {isPending, error, signup} = useSignup(email, password, displayName, thumbnail)
    const handleSubmit = (e) => {
        e.preventDefault()

      }

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        if(!selected){
            setThumbnailError('Please choose a file...')
            return
        }
        if(!selected.type.includes('image')){
            setThumbnailError('Please choose an image(png/jpeg)...')
            return
        }
        if(selected.size > 100000){
            setThumbnailError('Image File size must be less than 100kb...')
            return
        }
        setThumbnailError(null)
        setThumbnail(selected)
    }
    
      return (
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Sign up</h2>
          <label>
            <span>Email:</span>
            <input
              required 
              type="email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              required
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />
          </label>
          <label>
            <span>Display name:</span>
            <input
              required
              type="text" 
              onChange={(e) => setDisplayName(e.target.value)} 
              value={displayName}
            />
          </label>
          <label>
            <span>Profile thumbnail:</span>
            <input 
              required
              type="file" 
              onChange={handleFileChange}
            />
                {thumbnailError && <div className='error'>{thumbnailError}</div>}
          </label>
          <button className="btn">Sign up</button>
        </form>
  )
}
