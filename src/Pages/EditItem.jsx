import { useState } from "react";
import TextInput from "../Components/TextInput";
import stockItem from "../hooks/stockItem.js";
import { useLoaderData } from "react-router-dom";

export default () => {
  const item = useLoaderData();

  const [nome, setNome] = useState(item.nome);
  const [quantidade, setQuantidade] = useState(item.quantidade);
  const [preco, setPreco] = useState(item.preco);
  const [categoria, setCategoria] = useState(item.categoria);
  const [descricao, setDescricao] = useState(item.descricao);
  const { editItem } = stockItem();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    editItem({
      id: item.id,
      nome,
      quantidade,
      preco,
      categoria,
      descricao,
      dataCadastro: item.dataCadastro,
    });
    alert("Item atualizado com sucesso.");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex gap-4 pl-40">
        <TextInput
          label={"Nome"}
          id={nome}
          value={nome}
          setValue={setNome}
          type={"text"}
        />
        <TextInput
          label={"Quantidade"}
          id={quantidade}
          value={quantidade}
          setValue={setQuantidade}
          type={"number"}
        />
        <TextInput
          label={"Preço"}
          id={preco}
          value={preco}
          setValue={setPreco}
          type={"number"}
        />
        <div className="flex flex-col w-48 gap-1">
          <label htmlFor="categoria" className="text-white">
            Categoria
          </label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => {
              return setCategoria(e.target.value);
            }}
            className="bg-zinc-900 text-white w-52 "
          >
            <option value="">Selecione uma categoria</option>
            <option value="Construção">Construção</option>
            <option value="Comida">Comida</option>
            <option value="Limpeza">Materiais de Limpeza</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col pl-40 gap-1">
        <label htmlFor="description" className="text-white">
          Descrição
        </label>
        <textarea
          name="descricao"
          id="descricao"
          value={descricao}
          onChange={(e) => {
            return setDescricao(e.target.value);
          }}
          className="bg-zinc-900 text-white w-[832px] h-28"
        ></textarea>
      </div>
      <div className="pl-40">
        <button
          className="bg-blue-500 w-20 rounded hover:bg-blue-50 font-bold"
          type="submit"
        >
          Salvar
        </button>
      </div>
    </form>
  );
};
