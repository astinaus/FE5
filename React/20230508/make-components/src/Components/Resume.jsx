import React, { useState } from 'react';

export default function Resume(props) {
  const [like, setLike] = useState(0);
  const [like2, setLike2] = useState('');

  function clickLike() {
    setLike(like + 1);
    !like2 ? setLike2('Like') : setLike2('');
  }
  return (
    <div style={{ border: '1px solid #000', width: '500px' }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={{ color: props.color }}>{props.color}</span>
      </h2>
      <button onClick={clickLike}>
        Like : <span>{like}</span>
      </button>
      <span>{like2}</span>
    </div>
  );
}
