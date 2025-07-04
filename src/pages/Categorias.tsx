import { SpinnerIcon } from "@phosphor-icons/react";
import { Categoria } from "../components/Categoria";
import { useCategorias } from "../hooks/useCategorias";

export function Categorias() {
  const { categorias, isLoading } = useCategorias();

  return (
    <div className="container h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-items-center py-12">
      {isLoading ? (
        <span className="flex justify-center items-center">
          <SpinnerIcon size={44} className="text-gray-800 animate-spin" />
        </span>
      ) : (
        <>
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} data={categoria} titulo="Categoria" />
          ))}
        </>
      )}
    </div>
  );
}