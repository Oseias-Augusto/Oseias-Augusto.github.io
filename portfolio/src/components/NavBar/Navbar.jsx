import { useState } from "react";
import { PAGINAS } from "../Paginas/Paginas";
import { ME } from "../../dados";
import s from "./NavBar.module.css";

export default function NavBar({ ativa, recolhida, onAlternarRecolhida }) {
  const [aberto, setAberto] = useState(false);
  const [semFoto, setSemFoto] = useState(false);
  const iniciais = ME.nome.split(" ").map((p) => p[0]).join("");

  return (
    <header className={`${s.barra} ${aberto ? s.aberto : ""} ${recolhida ? s.recolhida : ""}`}>
      <a
        className={s.marca}
        href={`#${PAGINAS[0].id}`}
        onClick={() => setAberto(false)}
        title={ME.nome}
      >
        {semFoto ? (
          <span className={`${s.avatar} ${s.iniciais}`} aria-hidden="true">{iniciais}</span>
        ) : (
          <img
            className={s.avatar}
            src={ME.foto}
            alt={`Foto de ${ME.nome}`}
            onError={() => setSemFoto(true)}
          />
        )}
        <span className={s.nome}>{ME.nome}</span>
      </a>

      <button
        className={s.botao}
        type="button"
        aria-expanded={aberto}
        aria-controls="menu"
        onClick={() => setAberto((valor) => !valor)}
      >
        {aberto ? "Fechar menu" : "Menu"}
      </button>

      <button
        className={s.recolher}
        type="button"
        aria-label={recolhida ? "Expandir barra de navegação" : "Recolher barra de navegação"}
        aria-pressed={recolhida}
        onClick={onAlternarRecolhida}
        title={recolhida ? "Expandir menu" : "Recolher menu"}
      >
        {recolhida ? "»" : "«"}
      </button>

      <nav id="menu" className={s.menu} aria-label="Páginas do portfólio">
        <ul>
          {PAGINAS.map(({ id, nome }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={ativa === id ? s.ativo : ""}
                aria-current={ativa === id ? "page" : undefined}
                onClick={() => setAberto(false)}
                title={nome}
              >
                <span className={s.menuTexto}>{nome}</span>
                <span className={s.menuInicial} aria-hidden="true">{nome.charAt(0)}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
