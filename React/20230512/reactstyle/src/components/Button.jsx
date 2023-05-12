import styled from 'styled-components';

const Btn = styled.button`
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #000;
  box-shadow: inset 0 0 0 0 #000;
  &:hover {
    background-color: #ccc;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const Btn2 = styled(Btn)`
  background-color: skyblue;
  color: #fff;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid royalblue;
  outline: 2px solid gold;
  box-shadow: 2px 2px 1px 1px #000;
  &:hover {
    background: red;
  }
`;

const Btn3 = styled(Btn)`
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'red')};
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  border: 2px solid royalblue;
  outline: 2px solid gold;
  box-shadow: 2px 2px 1px 1px #000;
`;

const Btn4 = styled(Btn2)`
  background-color: green;
  color: #fff;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid royalblue;
  outline: 2px solid gold;
  box-shadow: 2px 2px 1px 1px #000;
  &:hover {
    background: red;
  }
`;

export { Btn, Btn2, Btn3, Btn4 };
