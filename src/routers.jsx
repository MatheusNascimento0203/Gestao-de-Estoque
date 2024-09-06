import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Home from "./Pages/Home";
import StockItems from "./Pages/StockItems";
import NewItem from "./Pages/NewItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "stock",
        element: <StockItems />,
        children: [
          {
            path: "newItem",
            element: <NewItem />,
          },
        ],
      },
    ],
  },
]);

export default router;
