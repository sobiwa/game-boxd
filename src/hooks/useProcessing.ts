import { useEffect, useState } from 'react';

// returns true if form is still submitting to database after delay
export default function useProcessing(
  state: 'idle' | 'loading' | 'submitting'
) {
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    let ignore: boolean | undefined;
    async function initiateProcessing() {
      await new Promise((res) => {
        setTimeout(res, 300);
      });
      if (!ignore) {
        setProcessing(true);
      }
    }

    if (state === 'submitting' || state === 'loading') {
      initiateProcessing();
    } else {
      setProcessing(false);
    }

    return () => {
      ignore = true;
    };
  }, [state]);

  return processing;
}
