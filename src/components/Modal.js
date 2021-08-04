import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));

function OptionItem(props) {
  const { modalOpen, children } = props;
  return (
    <Modal isOpen={modalOpen} contentLabel='Selected Option' className='modal'>
      {children}
    </Modal>
  );
}

export default OptionItem;
