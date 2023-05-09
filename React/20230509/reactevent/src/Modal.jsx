import React from 'react';
import './Modal.css';

export default function Modal(props) {
  return (
    <div className="modal-backdrop" onClick={props.isModal}>
      <article className="modal">
        {/* <h2>홈페이지에 오신 것을 환영합니다!</h2>
        <p>좋은 하루 되세요~!</p> */}
        {props.children}
        <button onClick={props.isModal}>닫기</button>
      </article>
    </div>
  );
}
