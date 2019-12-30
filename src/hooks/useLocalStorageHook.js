import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    let value;

    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      value = defaultValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem('theendscart', JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorage;
