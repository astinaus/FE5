import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { appAuth } from '../firebase/config';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user) {
          throw new Error('로그인에 실패했습니다.');
        }
        dispatch({ type: 'LOGIN', payload: user });
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return { login, error, isPending };
};
