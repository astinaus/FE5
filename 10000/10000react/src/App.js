import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(false);

  const modalClose = () => {
    setModalShow(false);
  };

  const modalOpen = () => {
    setModalShow(true);
  };

  return (
    <div id="app">
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
    </div>
  );
}
export default App;
