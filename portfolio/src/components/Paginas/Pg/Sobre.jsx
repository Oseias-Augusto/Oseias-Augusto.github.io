import { useState } from "react";
import { ME } from "../../../dados";
import s from "./Pg.module.css";

export default function Sobre() {
  const [etapa, setEtapa] = useState(0);

  return (
    <section className={`${s.secao} ${s.hero} ${s.sobre}`}>
      {etapa === 0 ? (
        <div className={s.sobreSlide} aria-live="polite">
          <p className={s.intro}>{ME.local} · Portfólio pessoal</p>
          <h1>Oséias Augusto</h1>
          <p className={s.subtitulo}>Desenvolvimento de software · Back-end e web</p>
          <p className={s.lead}>
            Sou estudante de Análise e Desenvolvimento de Sistemas no IFSP e gosto de entender como as partes de um sistema se conectam — da modelagem dos dados à experiência de quem usa a aplicação.
          </p>
          <p>
            Tenho experiência acadêmica e de extensão com desenvolvimento back-end e full-stack, documentação técnica e colaboração em equipe. Busco oportunidades para transformar problemas reais em soluções claras, úteis e bem estruturadas.
          </p>
          <div className={s.links}>
            <a className={s.botaoLink} href={`mailto:${ME.email}`}>Entre em contato</a>
            <a className={`${s.botaoLink} ${s.secundario}`} href="#projetos">Ver projetos</a>
          </div>
        </div>
      ) : (
        <div className={s.sobreSlide} aria-live="polite">
          <p className={s.intro}>Um pouco sobre meu jeito de trabalhar</p>
          <h2>O que me interessa</h2>
          <p className={s.lead}>
            Tenho interesse em arquitetura de software, organização de dados e decisões que tornam projetos mais fáceis de compreender e manter.
          </p>
          <p>
            Gosto de compreender o problema antes de escolher a solução, registrar decisões técnicas e colaborar para que a equipe compartilhe o mesmo entendimento do sistema.
          </p>
          <div className={`${s.links} ${s.redes}`} aria-label="Redes profissionais">
            {ME.links.map(([nome, url]) => (
              <a key={nome} href={url} target="_blank" rel="noreferrer">{nome} ↗</a>
            ))}
          </div>
          <footer className={s.rodape}>© {new Date().getFullYear()} {ME.nome}. Feito com React.</footer>
        </div>
      )}

      <nav className={s.sobreControles} aria-label="Navegação da página Sobre">
        <button type="button" onClick={() => setEtapa((valor) => (valor === 0 ? 1 : 0))}>
          {etapa === 0 ? "Mais sobre mim →" : "← Voltar à apresentação"}
        </button>
        <span>{etapa + 1} / 2</span>
      </nav>
    </section>
  );
}
