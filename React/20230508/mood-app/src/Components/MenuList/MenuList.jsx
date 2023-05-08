import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';
import './MenuList.css';

export default function MenuList(props) {
  const menus = ['좋아요!', '정말 좋아요!', '최고에요!', '미쳤어요!!'];

  return (
    <ul className="container-list">
      {menus.map((moodEl, i) => {
        // mood : 기분의 텍스트, isSelected : 선택된 기분인지 아닌지, onClick : 클릭했을 때 실행할 함수
        return (
          <MenuListItem
            id={i + 1}
            mood={moodEl}
            isSelected={props.mood === moodEl}
            onClickEvt={props.onItemClick}
          />
        );
      })}
    </ul>
  );
}
