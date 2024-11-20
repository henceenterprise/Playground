import React, { useState, useRef, useEffect } from "react";

import { Modal, Button, NavigationList } from "../../components";

import ic_playground from "@/assets/media/svg/ic__design_services.svg";
import ic_designsystem from "@/assets/media/svg/ic__draw_abstract.svg";
import ic_minigames from "@/assets/media/svg/ic__joystick.svg";
import ic_logout from "@/assets/media/svg/ic__logout.svg";
import ic_settings from "@/assets/media/svg/ic__settings.svg";

import menuData from "../../data/NavigationList.json";

import "./Search.scss";

const Search: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Estado para o valor do input
  const modalRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const iconMap: Record<string, string> = {
    ic_playground,
    ic_designsystem,
    ic_minigames,
    ic_logout,
    ic_settings,
  };

  const allItems = [...menuData.menu, ...menuData.modal_user].map((group: any[]) =>
    group.map((item) => ({
      ...item,
      icon: item.icon ? iconMap[item.icon] : undefined,
    }))
  );

  const filteredItems = allItems
    .map((group) =>
      group.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    )
    .filter((group) => group.length > 0); 

  const handleFocus = () => {
    setModalOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const clearInput = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    setInputValue("");
    inputRef.current?.focus();
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    if (
      modalRef.current &&
      !modalRef.current.contains(target) &&
      searchRef.current &&
      !searchRef.current.contains(target)
    ) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="search"
        ref={searchRef}
        onFocus={handleFocus}
        onClick={handleFocus} // Garante que o clique na div abre o modal
        tabIndex={0} // Permite que a div seja focada via teclado ou clique
      >
        <div className="search__icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="0D0D0D"
            className="search__icon"
          >
            <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
          </svg>
        </div>
        <input
          className="search__input"
          ref={inputRef}
          type="text"
          placeholder="Quick search..."
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <Button
            variant="secondary"
            size="small"
            hover="secondary"
            icon={
              <svg
                className="search__clear"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="0D0D0D"
              >
                <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
              </svg>
            }
            onClick={clearInput}
          />
        )}
      </div>
      {isModalOpen && (
        <Modal ref={modalRef} id="modal-search" variant="primary" size="medium">
          {filteredItems.length > 0 ? (
            <NavigationList variant="secondary" items={filteredItems} />
          ) : (
            <p>No results found</p>
          )}
        </Modal>
      )}
    </>
  );
};

export default Search;
