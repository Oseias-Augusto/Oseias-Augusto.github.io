import { useEffect } from "react";
import { PAGINAS } from "../Paginas/Paginas";
import { ME } from "../../dados";
import s from "./Pagina.module.css";

export default function Pagina({ id }) {
  const atual = PAGINAS.find((p) => p.id === id) ?? PAGINAS[0];
  const { Componente } = atual;

  useEffect(() => {
    document.title = `${atual.nome} | ${ME.nome}`;
  }, [atual]);

  return (
    <main className={s.pagina}>
      <div key={atual.id} className={s.conteudo}>
        <Componente />
      </div>
    </main>
  );
}