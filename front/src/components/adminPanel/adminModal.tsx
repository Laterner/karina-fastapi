import { Modal } from '@chakra-ui/react';

import { Button } from '../../shared/styledComponents/Buttons';

import { ModalContainer, ModalBackground, ModalFooter, ModalTitle, ModalBody, Input } from './adminModal.styled';

interface IAdminModalProps {
    titleType: string;
    onClose: () => void;
    isOpen: boolean;
}

const AdminModal = ({ titleType, onClose, isOpen }: IAdminModalProps) => {
  return (
    <Modal onClose={() => onClose()} isOpen={isOpen}>
      <ModalBackground>
        <ModalContainer>
          <ModalTitle>{titleType}</ModalTitle>
          <ModalBody>
            <Input placeholder="Название товара" />
            <Input type="number" min={1} placeholder="Количество товара" />
          </ModalBody>
          <ModalFooter>
            <Button bgcolor={'#90ee90'} onClick={onClose}>
                            Подтвердить
            </Button>
            <Button bgcolor={'#ff0000'} onClick={onClose}>
                            Отмена
            </Button>
          </ModalFooter>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default AdminModal;
