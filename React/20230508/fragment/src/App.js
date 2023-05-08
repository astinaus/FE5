import React, { Fragment } from 'react';
import MyComponent from './components/MyComponent';

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' },
];

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.name}</dt>
      <dd>{item.desc}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

function App() {
  return (
    <Fragment>
      <h1>안녕, 라이캣 1호!</h1>
      <h2>안녕, 라이캣 2호!</h2>
      <Glossary items={items} />
      <MyComponent />
    </Fragment>
  );
}
export default App;
