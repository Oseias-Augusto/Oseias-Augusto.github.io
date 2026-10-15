import { FORMACAO } from "../../../dados";
import s from "./Pg.module.css";

export default function Formacao() {
  return (
    <section className={s.secao}>
      <p className={s.intro}>Percurso acadêmico</p>
      <h2>Formação</h2>
      {FORMACAO.map((f) => (
        <article className={s.linha} key={`${f.nome}-${f.data}`}>
          <div>
            <h3>{f.curso}</h3>
            <p>{f.nome}</p>
            <p className={s.nota}>{f.info}</p>
          </div>
          <p className={s.data}>{f.data}</p>
        </article>
      ))}
      <p className={s.nota}>A previsão de conclusão é estimada e pode mudar conforme o andamento do curso.</p>
    </section>
  );
}