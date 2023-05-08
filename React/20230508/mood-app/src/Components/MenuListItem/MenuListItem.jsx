import React from 'react';
import './MenuListItem.css';

export default function MenuListItem(props) {
  const onItemClick = () => {
    props.onClickEvt(props.mood);
  };

  const getBgColor = () => {
    if (props.isSelected) {
      return 'skyblue';
    }
  };

  return (
    <li key={props.id}>
      <button
        className="btn-item"
        onClick={onItemClick}
        style={{ backgroundColor: getBgColor() }}
      >
        기분이 : {props.mood}
      </button>
    </li>
  );
}
