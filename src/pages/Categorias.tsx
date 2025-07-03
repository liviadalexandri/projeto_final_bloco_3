import { Categoria } from "../components/Categoria";

export function Categorias() {
  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Categoria titulo="Categoria" nome="Medicamentos" />
      <Categoria titulo="Categoria" nome="Cuidados pessoais" />
      <Categoria titulo="Categoria" nome="Higiene" />
    </div>
  );
}