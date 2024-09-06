import { useState } from "react";
import TextInput from "../Components/TextInput";
import stockItem from "../hooks/stockItem.js";

export default () => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const { addItem } = stockItem();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addItem({ nome, quantidade, preco, categoria, descricao });
    setNome("");
    setQuantidade("");
    setPreco("");
    setCategoria("");
    setDescricao("");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex gap-4 pl-40">
        <TextInput label={"Nome"} id={nome} value={nome} setValue={setNome} />
        <TextInput
          label={"Quantidade"}
          id={quantidade}
          value={quantidade}
          setValue={setQuantidade}
        />
        <TextInput
          label={"Preço"}
          id={preco}
          value={preco}
          setValue={setPreco}
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
            <option value="construcao">Construção</option>
            <option value="comida">Comida</option>
            <option value="limpeza">Materiais de Limpeza</option>
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
