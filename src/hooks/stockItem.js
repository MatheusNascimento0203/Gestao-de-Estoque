import { useState } from "react";
import NewItem from "../Pages/NewItem";

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
    const tzString = "America/Sao_Paulo";
    const item = {
      id,
      nome,
      quantidade,
      preco,
      categoria,
      descricao,
      dataCadastro: new Date().toLocaleString("pt-BR", { timeZone: tzString }),
      dataAtualizacao: new Date().toLocaleString("pt-BR", {
        timeZone: tzString,
      }),
    };
    setItem((state) => {
      const newStateAdd = [...state, item];
      localStorage.setItem("obc-item-lib", JSON.stringify(newStateAdd));
      return newStateAdd;
    });
  };

  const deleteItemStock = (id) => {
    setItem((state) => {
      const newStateRemove = state.filter((item) => item.id !== id);
      localStorage.setItem("obc-item-lib", JSON.stringify(newStateRemove));
      return newStateRemove;
    });
  };

  const editItem = ({
    nome,
    quantidade,
    preco,
    categoria,
    descricao,
    id,
    dataCadastro,
  }) => {
    const tzString = "America/Sao_Paulo";
    const updateItem = {
      id,
      nome,
      quantidade,
      preco,
      categoria,
      descricao,
      dataCadastro,
      dataAtualizacao: new Date().toLocaleString("pt-BR", {
        timeZone: tzString,
      }),
    };

    setItem((state) => {
      const newStateEdit = state.map((item) =>
        item.id === id ? updateItem : item
      );
      localStorage.setItem("obc-item-lib", JSON.stringify(newStateEdit));
      return newStateEdit;
    });
  };

  return { itens, addItem, deleteItemStock, editItem };
};
