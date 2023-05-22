// 액션 생성 함수
export const addNumber = () => {
  return {
    type: 'ADD',
  };
};

export const substractNumber = () => {
  return {
    type: 'SUBSTRACT',
  };
};

const initialState = {
  stock: 100,
  goods: 1,
};

// 리듀서
const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        goods: state.goods + 1,
        stock: state.stock - 1,
      };
    case 'SUBSTRACT':
      return {
        ...state,
        goods: state.goods - 1,
        stock: state.stock + 1,
      };
    default:
      return state;
  }
};

export default goodsReducer;
