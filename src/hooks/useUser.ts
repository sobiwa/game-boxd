import { useState, useEffect } from 'react';
import { onIdTokenChanged, User as FirebaseUser } from 'firebase/auth';
import { auth, anonLogin, userVerificationComplete } from '../firebase';

interface HandledUser {
  firebase: FirebaseUser;
  providerIsGoogle: boolean;
  verificationComplete: boolean;
}

 export type User = HandledUser | null;

export default function useUser() {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    let ignore: boolean | undefined;
    async function authStateObserver(firebaseUser: FirebaseUser | null) {
      if (firebaseUser === null) {
        try {
          if(!ignore) await anonLogin();
          return;
        } catch (err) {
          setUser(null);
          return;
        }
      }
      if (firebaseUser.isAnonymous) {
        setUser({
          firebase: firebaseUser,
          providerIsGoogle: false,
          verificationComplete: false,
        });
      } else {
        const verificationComplete = await userVerificationComplete();
        setUser({
          firebase: firebaseUser,
          providerIsGoogle: firebaseUser.providerData.some(
            (provider) => provider.providerId === 'google.com'
          ),
          verificationComplete,
        });
      }
    }
    onIdTokenChanged(auth, authStateObserver);
    return () => {
      ignore = true;
    };
  }, []);

  return user;
}
