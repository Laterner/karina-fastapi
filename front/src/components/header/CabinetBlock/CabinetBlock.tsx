import React, { useState, useRef, useEffect } from "react";
import './CabinetBlock.css'
import {Link} from "react-router-dom";
import {ModalContainer, ModalOverlay} from "../../../shared/styledComponents/Containers";
import {Input} from "../../../shared/styledComponents/Inputs";
import {Button} from "../../../shared/styledComponents/Buttons";

interface IProps {
  auth: boolean
}

const CabinetBlock: React.FC<IProps> = ({auth}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistation, setIsRegistation] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const renderFunction = () => {
    if (!auth) {
      return (
          <>
            <p onClick={() => openModal()}>Войти</p>
              <ModalOverlay className={`modal ${isModalOpen ? 'visible' : ''}`}>
                <ModalContainer ref={modalRef}>
                  {!isRegistation ?
                      <>
                        <Input placeholder='Логин'/>
                        <Input placeholder='Пароль' type="password"/>
                        <Button bgcolor={'#ff9a78'} width={100} onClick={() => closeModal()}>Войти</Button>
                        <a href="#" onClick={() => setIsRegistation(true)}>Зарегистрироваться</a>
                      </>
                  :
                      <>
                        <Input placeholder='Логин'/>
                        <Input placeholder='Пароль' type="password"/>
                        <Input placeholder='Почта' type="email"/>
                        <Button bgcolor={'#ff9a78'} width={200} onClick={() => closeModal()}>Зарегистрироваться</Button>
                        <a href="#" onClick={() => setIsRegistation(false)}>Войти</a>
                      </>
                  }
                </ModalContainer>
              </ModalOverlay>
          </>
      )
    } else {
      return (
          <>
            <div className="user-info" onClick={openModal}>
              <img src="/src/no_image.png" alt="User Avatar"/>
              <span>Диджей</span>
            </div>
            <div className={`modal ${isModalOpen ? 'visible' : ''}`} ref={modalRef}>
              <div className="modal-content">
                <Link to="/profile/1" onClick={closeModal}>
                  Личный Кабинет
                </Link>
              </div>
            </div>
          </>
      )
    }
  }
  return (
    <div className="cabinet-block">
      {renderFunction()}
    </div>
  );
};

export default CabinetBlock;