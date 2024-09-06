import { useState } from "react";

export default () => {
  const [itens, setItem] = useState(() => {
    const storedItem = localStorage.getItem("obc-item-lib");
    if (!storedItem) {
      return [];
    } else {
      return JSON.parse(storedItem);
    }
  });

  const addItem = ({ nome, quantidade, preco, categoria, descricao }) => {
    const id = itens.length + 1;
    const item = { id, nome, quantidade, preco, categoria, descricao };
    setItem((state) => {
      const newStateAdd = [...state, item];
      localStorage.setItem("obc-item-lib", JSON.stringify(newStateAdd));
      return newStateAdd;
    });
  };
  return { itens, addItem };
};
