import { Outlet } from "react-router-dom";
import Navegation from "./navegation/Navegation";

export default () => {
  return (
    <>
      <Navegation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
