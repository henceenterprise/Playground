import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Search,
  Modal,
  NavigationList,
  UserInformation,
} from "../../components";
import ic_menu from "@/assets/media/svg/ic__menu.svg";
import ic_logout from "@/assets/media/svg/ic__logout.svg";
import ic_settings from "@/assets/media/svg/ic__settings.svg";

import menuData from "../../data/NavigationList.json";

import styles from "./Header.module.scss";
import { useAuth } from "../../context/AuthContext"; // Importa o contexto

interface HeaderProps {
  onToggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { logout } = useAuth(); // Obtém a função logout do contexto
  const navigate = useNavigate();

  const iconMap: Record<string, string> = {
    ic_menu,
    ic_logout,
    ic_settings,
  };

  const ListItems = menuData.modal_user.map((group: any[]) =>
    group.map((item) => ({
      ...item,
      icon: item.icon ? iconMap[item.icon] : undefined,
    }))
  );

  const toggleModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsModalOpen((prev) => !prev);

    if (buttonRef.current) {
      buttonRef.current.classList.toggle("btn--active", !isModalOpen);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsModalOpen(false);
      buttonRef.current?.classList.remove("btn--active");
    }
  };

  const handleLogout = () => {
    logout(); // Atualiza o estado no contexto
    navigate("/"); // Redireciona para a página inicial
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <header className={styles.header}>
      <div
        className={
          styles["header__column"] + " " + styles["header__column--left"]
        }
      >
        <Button
          label=""
          onClick={onToggleMenu}
          variant="primary"
          size="medium"
          icon={<img src={ic_menu} alt="" />}
          hover="primary"
        />
        <Link className={styles["header__link"]} to="/">
          Homepage
        </Link>
      </div>
      <div
        className={
          styles["header__column"] + " " + styles["header__column--center"]
        }
      >
        <Search />
      </div>
      <div
        className={
          styles["header__column"] + " " + styles["header__column--right"]
        }
      >
        <Button
          ref={buttonRef}
          label=""
          onClick={toggleModal}
          variant="user"
          size="medium"
          icon={"A"}
          hover="user"
        />
        {isModalOpen && (
          <Modal
            ref={modalRef}
            id={styles["modal-user"]}
            variant="user"
            size="small"
            onClose={() => {
              setIsModalOpen(false);
              buttonRef.current?.classList.remove("btn--active");
            }}
          >
            <UserInformation />
            <NavigationList
              variant="primary"
              onClickButton={(item) => {
                if (item.label === "Log Out") {
                  handleLogout();
                }
              }}
              items={ListItems}
            />
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
