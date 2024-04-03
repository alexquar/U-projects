import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { projectFirestore } from '../firebase/config'
export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
  
    try {
      // login
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      await projectFirestore.collection('user').doc(res.user.uid).update({online : true})
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

        setIsPending(false)
        setError(null)

    } 
    catch(err) {
        setError("Incorrect credentials...")
        setIsPending(false)
    }
  }

  return { login, isPending, error }
}