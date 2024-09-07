import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Home from "./Pages/Home";
import StockItems from "./Pages/StockItems";
import NewItem from "./Pages/NewItem";
import ShowItem from "./Pages/ShowItem";
import itemLoaderData from "./loaders/itemLoaderData";
import EditItem from "./pages/EditItem";

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
          {
            path: ":itemId",
            element: <ShowItem />,
            loader: itemLoaderData,
          },
          {
            path: "edit/:itemId",
            element: <EditItem />,
            loader: itemLoaderData,
          },
        ],
      },
    ],
  },
]);

export default router;
