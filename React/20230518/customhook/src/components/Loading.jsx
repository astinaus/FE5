import React from 'react';
import styles from './Loading.module.css';
import loading from '../images/loading.gif';

export default function Loading() {
  return (
    <>
      <img className={styles.imgLoading} src={loading} alt="loading" />
    </>
  );
}
