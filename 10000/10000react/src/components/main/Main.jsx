import React, { useState } from 'react';
import './Main.css';

export default function Main({ modalOpen }) {
  const [expert, setExpert] = useState('');
  const [trainingTime, setTrainingTime] = useState('');
  const [resultData, setResultData] = useState({});
  const [displayResult, setDisplayResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expert || !trainingTime) alert('빈칸을 모두 채워주세요!');
    if (trainingTime < 1) alert('1시간 이상 훈련해야 합니다!');
    if (trainingTime > 24) alert('하루에 24시간 이상 훈련할 수 없습니다!');
    const dday = Math.ceil(10000 / parseInt(trainingTime));

    setResultData({
      expert: expert,
      dday: dday,
    });

    setDisplayResult(true);
  };

  return (
    <main>
      <h2 className="a11y">필요한 시간 알아보기</h2>
      <form className="cont-input" onSubmit={handleSubmit}>
        <p className="txt-wannabe">
          나는
          <input
            type="text"
            required
            value={expert}
            onChange={(e) => setExpert(e.target.value)}
            placeholder="예)프로그래밍"
          />
          전문가가 될 것이다.
        </p>
        <p className="txt-time">
          그래서 앞으로 매일 하루에
          <input
            type="number"
            required
            value={trainingTime}
            onChange={(e) => setTrainingTime(e.target.value)}
            placeholder="예)5"
          />
          시간씩 훈련할 것이다.
        </p>
        <button type="submit" className="btn-exc">
          나는 며칠동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>
      {displayResult && (
        <section className="cont-result">
          <h3 className="a11y">결과 확인</h3>
          <p className="txt-wannabe">
            당신은 <strong>{resultData.expert}</strong> 전문가가 되기 위해서는
            <br />
            대략 <strong>{resultData.dday}</strong>일 이상 훈련하셔야 합니다!
            :&#41;
          </p>
          <button type="button" className="btn-go" onClick={modalOpen}>
            훈련하러가기 GO! GO!
          </button>
          <button type="button" className="btn-share">
            공유하기
          </button>
        </section>
      )}
    </main>
  );
}
