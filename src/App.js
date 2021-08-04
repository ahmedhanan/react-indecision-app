import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Modal from './components/Modal';
import OptionsList from './components/OptionsList';
import { addItemToList, pickOneOption } from './helpers/Helpers';

const App = () => {
  const [newOption, setNewOption] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [randomlySelectedOption, setRandomlySelectedOption] = useState();
  const [listOfOptions, setListOfOptions] = useState([]);
  useEffect(() => {
    const updatedListOfOptions = addItemToList(listOfOptions, newOption);
    setListOfOptions(updatedListOfOptions);
  }, [newOption]);
  const handleQuestionClick = () => {
    const randomlySelected = pickOneOption(listOfOptions);
    setRandomlySelectedOption(randomlySelected);
    setOpenModal(true);
  };
  return (
    <>
      <Header />
      <section className='main'>
        <article className='main__article'>
          <section className='main__heading'>
            <h1>
              Put your life in the <del>arm</del> ram of a computer!
            </h1>
          </section>
          <input
            className='main__question__btn'
            type='submit'
            onClick={handleQuestionClick}
            value='What Should I do?'
            disabled={listOfOptions.length === 0}
          />
          <OptionsList list={listOfOptions} />
          <Modal modalOpen={openModal}>
            <p className='main__modal__text'>{randomlySelectedOption}</p>
            <button className='main__modal__btn' onClick={() => setOpenModal(false)}>Close ❌</button>
          </Modal>
          <Form retriveValue={setNewOption} />
        </article>
      </section>
    </>
  );
};

export default App;
