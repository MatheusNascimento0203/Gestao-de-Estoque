import { Link, Outlet, useLoaderData } from "react-router-dom";

export default () => {
  const item = useLoaderData(); //FUNÇÃO QUE BUSCA OS VALORES DE ACORDO COM O PARAMS
  return (
    <section className="bg-[#242424] min-h-screen flex flex-col gap-6">
      <div>
        <h2 className="text-blue-400 font-bold text-2xl">{item.nome}</h2>
      </div>
      <div className="flex gap-4">
        <div className=" flex justify-center items-center w-52 bg-zinc-900 h-10">
          <p className="text-white">{`Categoria: ${item.categoria}`}</p>
        </div>
        <div className=" flex justify-center items-center w-52 bg-zinc-900 h-10">
          <p className="text-white">{`Quantidade em estoque: ${item.quantidade}`}</p>
        </div>
        <div className=" flex justify-center items-center w-52 bg-zinc-900 h-10">
          <p className="text-white">{`Preço: R$${item.preco}`}</p>
        </div>
      </div>
      <div>
        <p className="text-white">{item.descricao}</p>
      </div>
      <div className="flex gap-3">
        <p className="text-white">{`Cadastrado em: ${item.dataCadastro}`}</p>
        <p className="text-white">{`Atualizado em: ${item.dataAtualizacao}`}</p>
      </div>
      <Outlet />
    </section>
  );
};
