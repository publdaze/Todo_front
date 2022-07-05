import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialState: any) {
  const [state, setState] = useState(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialState))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
