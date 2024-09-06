import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import GridResultado from "../Components/GridResultado";

export default () => {
  const location = useLocation();

  return (
    <div className="flex flex-col px-10 gap-8 ">
      <title>StockItems</title>
      <h2 className="text-white text-5xl">Stock Items</h2>
      <div className="flex gap-4 text-white pl-4">
        <Link>
          <button onClick={() => setLocation("/stock")}>Todos os itens</button>
        </Link>
        <Link to={"/stock/newItem"}>
          <button>Novo Item</button>
        </Link>
      </div>
      <hr className="bg-white" /> <Outlet />
      {location.pathname === "/stock" && <GridResultado />}
    </div>
  );
};
