import { useState } from 'react';
function Form(props) {
  const { retriveValue } = props;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.option;
    retriveValue(value);
  };
  return (
    <form onSubmit={handleFormSubmit} className='main__form'>
      <input type='text' name='option' className='main__form__text' />
      <input
        type='submit'
        value='Add Option 👆'
        className='main__form__submit'
      />
    </form>
  );
}

export default Form;
