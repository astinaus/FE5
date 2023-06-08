import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { signOut } from 'firebase/auth';
import { appAuth } from '../firebase/config';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null);
    setIsPending(true);
    signOut(appAuth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { logout, error, isPending };
};
