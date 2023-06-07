import { createContext, useReducer } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

// 회원정보가 담겨있을 context를 객체를 구독할 컴포넌트의 묶음 범위를 설정하는 함수입니다.
// children을 이용해 컴포넌트 안에 들어올 자식 컴포넌트들이 컨텍스트를 공유하도록 만듭니다.
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    // { ...state, dispatch } 이 두 가지 값이 context객체를 통해 접근할 수 있는 값이 됩니다.
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
