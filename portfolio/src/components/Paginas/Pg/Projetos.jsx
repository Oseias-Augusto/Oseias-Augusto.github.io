import { useState } from "react";
import { PROJETOS } from "../../../dados";
import s from "./Pg.module.css";

export default function Projetos() {
  const [indice, setIndice] = useState(0);
  const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);
  const projeto = PROJETOS[indice];

  const anterior = () => {
    setIndice((atual) => (atual - 1 + PROJETOS.length) % PROJETOS.length);
    setDetalhesVisiveis(false);
  };
  const proximo = () => {
    setIndice((atual) => (atual + 1) % PROJETOS.length);
    setDetalhesVisiveis(false);
  };

  return (
    <section className={`${s.secao} ${s.paginaProjetos}`}>
      <header className={s.cabecalhoProjetos}>
        <div>
          <p className={s.intro}>Aplicações e experiências práticas</p>
          <h2>Projetos</h2>
        </div>
        <p className={s.contador}>{String(indice + 1).padStart(2, "0")} / {String(PROJETOS.length).padStart(2, "0")}</p>
      </header>

      <p className={s.leadProjetos}>
        Projetos acadêmicos e de extensão em que trabalhei com desenvolvimento, organização técnica e entendimento de requisitos.
      </p>

      <article className={`${s.projetoSlide} ${detalhesVisiveis ? s.detalhesVisiveis : ""}`} aria-live="polite">
        <div className={s.projetoTopo}>
          <p className={s.projetoPapel}>{projeto.papel}</p>
          <h3>{projeto.titulo}</h3>
          <p>{projeto.texto}</p>
        </div>

        <div className={s.projetoDetalhes}>
          <h4>Contribuições</h4>
          <ul>
            {projeto.pontos.map((ponto) => <li key={ponto}>{ponto}</li>)}
          </ul>
          <div className={s.chips}>
            {projeto.tec.map((tec) => <span key={tec}>{tec}</span>)}
          </div>
          {projeto.link
            ? <a className={s.botaoLink} href={projeto.link[1]} target="_blank" rel="noreferrer">{projeto.link[0]} ↗</a>
            : <p className={s.nota}>Repositório privado ou não público.</p>}
        </div>
      </article>

      <nav className={s.controlesSlide} aria-label="Navegação dos projetos">
        <button className={s.alternarDetalhes} type="button" onClick={() => setDetalhesVisiveis((valor) => !valor)}>
          {detalhesVisiveis ? "← Resumo" : "Contribuições →"}
        </button>
        <button type="button" onClick={anterior} aria-label="Projeto anterior">← Anterior</button>
        <div className={s.pontosSlide}>
          {PROJETOS.map((item, i) => (
            <button
              type="button"
              key={item.titulo}
              className={i === indice ? s.pontoAtivo : ""}
              onClick={() => setIndice(i)}
              aria-label={`Mostrar projeto ${i + 1}: ${item.titulo}`}
              aria-current={i === indice ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={proximo} aria-label="Próximo projeto">Próximo →</button>
      </nav>
    </section>
  );
}
