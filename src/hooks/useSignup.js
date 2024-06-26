import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { projectStorage } from '../firebase/config'
export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await projectStorage.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()
      // add display name to user
      await res.user.updateProfile({ displayName, photoURL : imgUrl })

     await projectFirestore.collection('user').doc(res.user.uid).set({
      online : true,
      photoURL : imgUrl,
      displayName
     })
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

        setIsPending(false)
        setError(null)

    } 
    catch(err) {
        setError(err.message)
        setIsPending(false)
    }
  }

  return { signup, error, isPending }
}