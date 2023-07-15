import { useState, useEffect } from 'react';

interface Parameters {
  data: string | number | boolean | undefined;
}
export default function useUpdateListener(data: Parameters) {
  const [newUpdate, setNewUpdate] = useState(false);

  useEffect(() => {
    async function setAndReset() {
      setNewUpdate(true);
      await new Promise((res) => {
        setTimeout(res, 1500);
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
