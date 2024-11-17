import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Button, Search, Modal } from "../../components";
import ic_menu from "@/assets/media/svg/ic__menu.svg";
import "./Header.scss";

const Header: React.FC = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); // Referência da modal para verificar o clique fora dela

  const toggleMenu = () => {
    const menu = $(".menu");
    menu?.toggleClass("menu--closed");
  };

  // Função para abrir ou fechar a modal
  const openUserModal = () => setIsUserModalOpen((prevState) => !prevState);

  // Função que fecha a modal se o clique for fora da área da modal
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsUserModalOpen(false); // Fecha a modal se o clique for fora
    }
  };

  useEffect(() => {
    if (isUserModalOpen) {
      // Adiciona o evento de clique fora da modal
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Remove o evento se a modal estiver fechada
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Limpeza do efeito ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isUserModalOpen]);

  return (
    <header className="header">
      <div className="header__column header__column--left">
        <Button
          label=""
          onClick={toggleMenu} // Toggling menu
          variant="primary"
          size="medium"
          icon={<img src={ic_menu} alt="" />}
        />
        <Link className="header__link" to="/">
          Homepage
        </Link>
      </div>
      <div className="header__column header__column--center">
        <Search />
      </div>
      <div className="header__column header__column--right">
        <Button
          label=""
          onClick={openUserModal} // Toggling a modal
          variant="user"
          size="medium"
          icon={"A"}
        />
        {isUserModalOpen && (
          <Modal
            ref={modalRef} // Referência da modal para detecção de clique fora
            variant="user"
            size="small"
            isOpen={isUserModalOpen}
            onClose={openUserModal} // Botão de fechar com toggle
          >
            <div className="modal__content">
              <p>Modal de usuario</p>
            </div>
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
