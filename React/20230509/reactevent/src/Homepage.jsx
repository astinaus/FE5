import React from 'react';

export default function Homepage(props) {
  return (
    <>
      <h1>홈페이지에 오신 것을 환영합니다.</h1>
      <button>로그아웃</button>
      <button onClick={props.isModal}>모달창 열기</button>
    </>
  );
}
