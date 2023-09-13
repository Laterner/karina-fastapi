import React, { useState, useRef, useEffect } from "react";
import './CabinetBlock.css'
import {Link} from "react-router-dom";
import cn from 'classnames'

const NavigationBlock: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return (
    <div className="cabinet-block" onClick={openModal}>
      <div className="user-info">
        <img src="/src/no_image.png" alt="User Avatar" />
        <span>Диджей</span>
      </div>
      <div className={`modal ${isModalOpen ? 'visible' : ''}`} ref={modalRef}>
        <div className="modal-content">
          <Link to="/profile/1" onClick={closeModal}>
              Личный Кабинет
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBlock;