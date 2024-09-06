export default ({ params }) => {
  if (!params) {
    throw new Error("Parâmetros não foram fornecidos corretamente.");
  }
  const storedItem = localStorage.getItem("obc-item-lib");
  const itens = storedItem ? JSON.parse(storedItem) : [];
  const item = itens.find((i) => {
    return i.id === Number(params.itemId);
  });

  console.log(Number(params.itemId));

  if (!item) {
    throw new Response("404 not fund", { status: 404 });
  }

  return item;
};
