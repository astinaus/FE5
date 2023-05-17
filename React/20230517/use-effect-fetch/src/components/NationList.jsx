import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  margin: 60px auto;

  ul {
    padding: 10px;
  }

  li {
    border: 1px solid #000;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  }

  li + li {
    margin-top: 20px;
  }
`;

export default function NationList() {
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState('http://localhost:3000/nations');

  useEffect(() => {
    const fetchNations = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('네트워크 응답에 문제가 있습니다.');
        } else {
          const data = await response.json();
          setNations(data);
        }
      } catch (error) {
        console.error('데이터를 가져오는데 문제가 생겼습니다.', error);
      }
    };

    fetchNations();
  }, [url]);

  return (
    <Item>
      <h2>나라 목록</h2>
      <ul>
        {nations.map((nation) => (
          <li key={nation.id}>
            <h3>나라이름 : {nation.title}</h3>
            <p>인구수 : {nation.population}</p>
            <p>대륙 : {nation.location}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            setUrl('http://localhost:3000/nations?location=europe');
          }}
        >
          유럽 목록
        </button>
        <button
          onClick={() => {
            setUrl('http://localhost:3000/nations');
          }}
        >
          전체 목록
        </button>
      </div>
    </Item>
  );
}
