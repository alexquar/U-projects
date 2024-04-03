import { useEffect, useState } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {
      // update online status
      const { uid } = projectAuth.currentUser
      await projectFirestore.collection('user').doc(uid).update({ online: false })
      
      // sign the user out
      await projectAuth.signOut()
      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })


        setIsPending(false)
        setError(null)
    } 
    catch(err) {

        setError(err.message)
        setIsPending(false)

    }
  }

  return { logout, error, isPending }
}