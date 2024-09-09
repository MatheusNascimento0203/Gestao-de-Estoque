import { useLoaderData } from "react-router-dom";
import stockItem from "../hooks/stockItem";

export default () => {
  const { itens } = stockItem();
  const listaItens = itens.length;
  const inventoryTotal = itens.reduce((sum, item) => {
    return +sum + +item.quantidade;
  }, 0);

  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 10);
  limitDate.setHours(0, 0, 0, 0);
  const recentItems = itens.filter((item) => {
    const itemDate = new Date(item.dataCadastro);
    return itemDate >= limitDate && itemDate <= today;
  });
  const recentTotal = recentItems.length;

  const lowQuantityItems = itens.filter((item) => item.quantidade < 10);
  const lowQuantityTotal = lowQuantityItems.length;
  console.log(lowQuantityItems);

  return (
    <div className="flex flex-col gap-12 pl-12">
      <h2 className="text-white text-4xl ">DashBoard</h2>
      <div className="flex gap-6 justify-center">
        <div className="bg-zinc-900 text-white w-60 h-32">
          <p className="pl-4">Diversidades de Itens</p>
          <p className="text-center text-3xl pt-6">{listaItens}</p>
        </div>
        <div className="bg-zinc-900 text-white w-60 h-32">
          <p className="pl-4">Inventário total</p>
          <p className="text-center text-3xl pt-6">{inventoryTotal}</p>
        </div>
        <div className="bg-zinc-900 text-white w-60 h-32">
          <p className="pl-4">Itens recentes</p>
          <p className="text-center text-3xl pt-6">{recentTotal}</p>
        </div>
        <div className="bg-zinc-900 text-white w-60 h-32">
          <p className="pl-4">Itens acabado</p>
          <p className="text-center text-3xl pt-6">{lowQuantityTotal}</p>
        </div>
      </div>
      <div className="flex gap-6 justify-center">
        <div className="flex bg-zinc-900 text-white w-[504px] gap-[200px] pl-8">
          <p>Itens recentes</p>
          <p>Ações</p>
        </div>
        <div className="flex bg-zinc-900 text-white w-[504px] gap-[200px] pl-8">
          <p>Itens recentes</p>
          <p>Ações</p>
        </div>
      </div>
    </div>
  );
};
