import React from 'react';
import styled from 'styled-components';

const UniAfter = styled.div`
  &:after {
    content: '!!';
  }
`;

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

function App() {
  return (
    <div>
      <UniAfter>goooood</UniAfter>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
}

export default App;
