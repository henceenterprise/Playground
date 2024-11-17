import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
import "./Header.scss";

interface HeaderProps {
  onToggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const ListItems = [
    [
      {
        label: "Log Out",
        to: "/log-out",
        icon: ic_logout,
      },
    ],
    [
      {
        label: "Settings",
        to: "/settings",
        icon: ic_settings,
      },
    ],
  ];

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
    <header className="header">
      <div className="header__column header__column--left">
        <Button
          label=""
          onClick={onToggleMenu}
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
          ref={buttonRef}
          label=""
          onClick={toggleModal}
          variant="user"
          size="medium"
          icon={"A"}
        />
        {isModalOpen && (
          <Modal
            ref={modalRef}
            variant="user"
            size="small"
            onClose={() => {
              setIsModalOpen(false);
              buttonRef.current?.classList.remove("btn--active");
            }}
          >
            <div className="modal__content">
              <UserInformation />
              <NavigationList items={ListItems} />
            </div>
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
