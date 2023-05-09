import { useState } from 'react';
import Login from './Login';
import Homepage from './Homepage';
import Modal from './Modal';

function App() {
  const user = {
    idUser: 'rmfosem1541@naver.com',
    pwUser: '1234',
  };

  const [login, setLogin] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {login ? (
        <Homepage isModal={handleModalOpen} />
      ) : (
        <Login infoUser={user} setLogin={setLogin} />
      )}

      {isModalOpen && (
        <Modal isModal={handleModalOpen} isModalOpen={isModalOpen}>
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            est rem, suscipit qui impedit debitis harum architecto, a, mollitia
            esse tempora sapiente numquam totam ipsum modi eos ut odio
            excepturi?
          </p>
          <a href="#none">더보기</a>
        </Modal>
      )}
    </>
  );
}
export default App;
