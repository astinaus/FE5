import { useState, useEffect } from 'react';

export default function useScrollBottom() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsBottom(
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      );
    });
  }, []);

  return isBottom;
}
