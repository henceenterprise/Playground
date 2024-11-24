import React, { useState, useRef, useEffect } from "react";

import { Modal, Button, NavigationList } from "../../components";

import menuData from "../../data/NavigationList.json";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Estado para o valor do input
  const [recentsItems, setRecentsItems] = useState<
    { label: string; to: string }[][]
  >([]);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const allItems = [...menuData.menu, ...menuData.modal_user];

  const filteredItems = allItems
    .map((group: any[]) =>
      group
        .filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase())
        )
        .sort((a, b) => {
          const aIncludes = a.label
            .toLowerCase()
            .startsWith(inputValue.toLowerCase());
          const bIncludes = b.label
            .toLowerCase()
            .startsWith(inputValue.toLowerCase());

          if (aIncludes && !bIncludes) return -1; // Itens que começam com o termo primeiro
          if (!aIncludes && bIncludes) return 1;
          return a.label.localeCompare(b.label); // Ordenação alfabética caso contrário
        })
    )
    .filter((group) => group.length > 0);

  const hasFilteredResults = filteredItems.length > 0;

  const handleFocus = () => {
    if (inputValue || recentsItems.some((group) => group.length > 0)) {
      setModalOpen(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Atualiza o estado da modal com base nos resultados filtrados e itens recentes
    if (!value && !recentsItems.some((group) => group.length > 0)) {
      setModalOpen(false);
    } else if (!isModalOpen) {
      setModalOpen(
        hasFilteredResults || recentsItems.some((group) => group.length > 0)
      );
    }
  };

  const removeFromRecents = (itemToRemove: { label: string; to: string }) => {
    setRecentsItems((prev) => {
      const updatedRecents = prev.map((group) =>
        group.filter((item) => item.label !== itemToRemove.label)
      );

      const hasRemainingItems = updatedRecents.some(
        (group) => group.length > 0
      );
      if (!hasRemainingItems && !inputValue) {
        setModalOpen(false);
      }

      return updatedRecents;
    });
  };

  const addToRecents = (item: { label: string; to: string }) => {
    setRecentsItems((prev) => {
      const flatRecents = prev.flat();

      // Verificar duplicatas
      const alreadyExists = flatRecents.some(
        (recentItem) =>
          recentItem.label === item.label && recentItem.to === item.to
      );

      if (alreadyExists) {
        return prev;
      }

      // Adiciona no topo e mantém no máximo 10 itens
      const updatedRecents = [[item, ...flatRecents.slice(0, 9)]];
      return updatedRecents;
    });
  };

  const handleLinkClick = (item: { label: string; to: string }) => {
    addToRecents(item); // Adiciona o item clicado à lista de recentes
    setModalOpen(false); // Fecha a modal
  };

  const clearInput = (event: React.MouseEvent) => {
    event.stopPropagation();
    setInputValue("");

    if (!recentsItems.some((group) => group.length > 0)) {
      setModalOpen(false);
      inputRef.current?.focus();
    } else {
      inputRef.current?.focus();
    }
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
        className={styles.search}
        ref={searchRef}
        onFocus={handleFocus}
        onClick={handleFocus} // Garante que o clique na div abre o modal
        tabIndex={0} // Permite que a div seja focada via teclado ou clique
      >
        <div className={styles.search__icon_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="0D0D0D"
            className={styles.search__icon}
          >
            <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
          </svg>
        </div>
        <input
          className={styles.search__input}
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
                className={styles["search__clear"]}
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
        <Modal
          ref={modalRef}
          id={styles["modal-search"]}
          variant="primary"
          size="medium"
        >
          {inputValue && hasFilteredResults ? (
            <NavigationList
              variant="search-list"
              items={filteredItems}
              onClickLink={handleLinkClick} // Para links da lista normal
            />
          ) : (
            <NavigationList
              variant="search-recent"
              items={recentsItems}
              onClickLink={handleLinkClick} // Para navegação dos links recentes
              onClickButton={removeFromRecents} // Para remover itens
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default Search;
