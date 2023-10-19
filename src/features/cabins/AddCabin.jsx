import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal((prev) => !prev)}>
        Add new Cabin
      </Button>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
