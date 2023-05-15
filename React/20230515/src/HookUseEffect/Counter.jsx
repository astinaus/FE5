import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [checkRender, setCheckRender] = useState(false);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (checkRender) {
      if (count % 2) {
        alert('홀수입니다');
      } else {
        alert('짝수입니다');
      }
    } else {
      setCheckRender(true);
    }
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}
export default Counter;
