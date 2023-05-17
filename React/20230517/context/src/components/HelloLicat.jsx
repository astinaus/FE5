import React from 'react';
import { UserInfo } from '../App2';
import HelloLicatTwo from './HelloLicatTwo';

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo />
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default HelloLicat;
