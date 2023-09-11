import React, { useState } from 'react';

import { Button } from '../../shared/styledComponents/Buttons';

import { AdminPanelTypes } from './adminPanel.types';
import AdminModal from './adminModal';
import { AdminPanelContainer } from './adminPanel.styled';

const AdminPanel = () => {
  const [openModal, setOpenModal] = useState(false);
  const [titleType, setTitleType] = useState('');
  function handleClick(title: string) {
    setOpenModal(true);
    setTitleType(title);
  }

  return (
    <AdminPanelContainer>
      <AdminModal titleType={titleType} isOpen={openModal} onClose={() => setOpenModal(false)} />
      <Button bgcolor={'#90ee90'} onClick={() => handleClick(AdminPanelTypes.ADD)}>
        {AdminPanelTypes.ADD}
      </Button>
      <Button bgcolor={'#ff0000'} onClick={() => handleClick(AdminPanelTypes.DELETE)}>
        {AdminPanelTypes.DELETE}
      </Button>
      <Button bgcolor={'#ff6633'} onClick={() => handleClick(AdminPanelTypes.UPDATE)}>
        {AdminPanelTypes.UPDATE}
      </Button>
    </AdminPanelContainer>
  );
};

export default AdminPanel;
