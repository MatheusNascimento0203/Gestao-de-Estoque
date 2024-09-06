import { Link } from "react-router-dom";
import stockItem from "../hooks/stockItem";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default () => {
  const { itens, deleteItemStock } = stockItem();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Em Estoque
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Categoria
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {itens.map((item, itemIdx) => (
                  <tr key={item.id}>
                    <td
                      className={classNames(
                        itemIdx !== item.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6 lg:pl-8"
                      )}
                    >
                      {item.id}
                    </td>
                    <td
                      className={classNames(
                        itemIdx !== item.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-white sm:table-cell"
                      )}
                    >
                      {item.nome}
                    </td>
                    <td
                      className={classNames(
                        itemIdx !== item.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-white lg:table-cell"
                      )}
                    >
                      {`${item.quantidade} unid.`}
                    </td>
                    <td
                      className={classNames(
                        itemIdx !== item.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden whitespace-nowrap px-3 py-4 text-sm text-white lg:table-cell"
                      )}
                    >
                      {item.categoria}
                    </td>
                    <td
                      className={classNames(
                        itemIdx !== item.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "   pl-3 pr-4 text-left text-sm font-medium sm:pr-8 lg:pr-8"
                      )}
                    >
                      <div className="flex gap-4">
                        <Link to={`/stock/${item.id}`}>
                          <button className="bg-blue-600 w-10 text-black hover:bg-blue-200 text-center rounded">
                            Ver<span className="sr-only">, {item.name}</span>
                          </button>
                        </Link>
                        <Link to={`/stock/edit/${item.id}`}>
                          <button className="bg-white w-16 text-black hover:bg-blue-200 text-center rounded">
                            Atualizar
                            <span className="sr-only">, {item.name}</span>
                          </button>
                        </Link>
                        <button
                          className="bg-red-800 w-14 text-black hover:bg-blue-200 text-center rounded"
                          onClick={() => {
                            deleteItemStock(item.id);
                          }}
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
