import { Link, Outlet } from "react-router-dom";
import GridResultado from "../Components/GridResultado";

export default () => {
  return (
    <div className="flex flex-col px-10 gap-8 ">
      <title>StockItems</title>
      <h2 className="text-white text-5xl">Stock Items</h2>
      <div className="flex gap-4 text-white pl-4">
        <Link>
          <button>Todos os itens</button>
        </Link>
        <Link to={"/stock/newItem"}>
          <button>Novo Item</button>
        </Link>
      </div>
      <hr className="bg-white" /> <Outlet />
      <GridResultado />
    </div>
  );
};
