import React from 'react';
import iconEdit from '../../img/icon-edit.svg';
import iconDelete from '../../img/icon-delete.svg';
import styles from './Home.module.css';

export default function DiaryList({ diaries }) {
  return diaries.map((item) => {
    console.log(item);
    console.log(item.createTime);
    console.log(new Date(item.createTime.seconds * 1000));
    const date = new Date(item.createTime.seconds * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const week = date.getDay(); // 0 ~ 6
    const weekList = ['일', '월', '화', '수', '목', '금', '토'];
    const result = `${year}.${month}.${day} (${weekList[week]})`;
    return (
      <li key={item.id}>
        <article className={styles['diary-article']}>
          <h3 className={styles['article-title']}>{item.title}</h3>
          <time className={styles['article-time']} dateTime={result}>
            {result}
          </time>
          <p className={styles['article-content']}>{item.text}</p>

          <div className={styles['button-group']}>
            <button type='button'>
              <img src={iconEdit} alt='수정' />
            </button>
            <span></span>
            <button type='button'>
              <img src={iconDelete} alt='삭제' />
            </button>
          </div>
        </article>
      </li>
    );
  });
}
