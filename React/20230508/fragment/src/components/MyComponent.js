import React from 'react';
import './MyComponent.css';

let list = [
  { no: 1, area: '대전', visited: false },
  { no: 2, area: '부산', visited: true },
  { no: 3, area: '목포', visited: false },
  { no: 4, area: '제주도', visited: false },
];

function MyComponent() {
  return list.map((item) => (
    <React.Fragment>
      <h1 key={item.no}>{item.area}</h1>
      <p>{item.visited ? '방문함' : '방문하지않음'}</p>
    </React.Fragment>
  ));
}

export default MyComponent;
