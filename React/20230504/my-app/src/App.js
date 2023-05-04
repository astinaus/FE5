import "./App.css";
import TripList from "./components/tripList/TripList";

function Time() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();
  return (
    <div className="clock">
      <h1 className="date">
        <strong>{year}년</strong> {month}월 {day}일
      </h1>
      <h1 className="time">
        {hour}시 {minute}분 {second}초
      </h1>
    </div>
  );
}

function App() {
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 style={someStyle}>안녕, {name} 1호</h1>
      <h1>안녕, 라이캣 2호!</h1>
      <div className="newClass" />
      <Time />
      <TripList />
    </div>
  );
}

export default App;
