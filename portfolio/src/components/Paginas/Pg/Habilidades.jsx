import { JEITO, SKILLS } from "../../../dados";
import s from "./Pg.module.css";

export default function Habilidades() {
  return (
    <section className={s.secao}>
      <p className={s.intro}>Tecnologias e práticas</p>
      <h2>Habilidades</h2>
      <div className={s.grade}>
        {SKILLS.map(([grupo, itens]) => (
          <article className={s.cartao} key={grupo}>
            <h3>{grupo}</h3>
            <div className={s.chips}>{itens.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
      <h3 className={s.subtituloSecao}>Práticas de trabalho</h3>
      <ul className={s.check}>{JEITO.map((item) => <li key={item}>{item}</li>)}</ul>
      <p className={`${s.nota} ${s.notaFinal}`}>As tecnologias listadas representam ferramentas com as quais tive contato em estudos e projetos; o nível de experiência varia entre elas.</p>
    </section>
  );
}