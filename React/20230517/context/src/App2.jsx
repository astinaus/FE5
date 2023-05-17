import React, { createContext } from 'react';
import HelloLicat from './components/HelloLicat';

const UserInfo = createContext();

const App = () => {
  return (
    <UserInfo.Provider value={{ name: 'gary', id: 'garyIsNotFree' }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

export { App, UserInfo };
