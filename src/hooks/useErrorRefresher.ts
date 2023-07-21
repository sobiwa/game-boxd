import { useEffect } from 'react';
import type { ErrorNoteType } from '../components/ErrorNote';

export default function useErrorRefresher(
  state: 'submitting' | 'idle' | 'loading' | undefined,
  setError: React.Dispatch<React.SetStateAction<ErrorNoteType | null>>
) {
  useEffect(() => {
    if (state === 'submitting') {
      setError(null);
    }
  }, [state]);
}
