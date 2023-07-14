import { useState, useEffect } from 'react';

export default function useUpdateListener(data: string | undefined) {
  const [newUpdate, setNewUpdate] = useState(false);

  useEffect(() => {
    async function setAndReset() {
      setNewUpdate(true);
      await new Promise((res) => {
        setTimeout(res, 1000);
      });
      setNewUpdate(false);
    }
    if (data !== undefined) {
      setAndReset();
    }
    return () => {
      setNewUpdate(false);
    };
  }, [data]);

  return newUpdate;
}
