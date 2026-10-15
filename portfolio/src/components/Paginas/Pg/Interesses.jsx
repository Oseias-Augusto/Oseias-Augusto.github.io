import { ESTUDOS } from "../../../dados";
import s from "./Pg.module.css";

export default function Interesses() {
  return (
    <section className={s.secao}>
      <p className={s.intro}>Aprendizado contínuo</p>
      <h2>Interesses</h2>
      <p className={s.lead}>Além das tecnologias que já utilizo, estudo temas que ampliam minha visão de desenvolvimento e de produto.</p>
      <dl className={s.estudos}>
        {ESTUDOS.map(([tema, descricao]) => (
          <div className={s.cartao} key={tema}>
            <dt>{tema}</dt>
            <dd>{descricao}</dd>
          </div>
        ))}
      </dl>
      <div className={s.rodape}>
        <p>Tenho interesse em oportunidades que me permitam aprender com uma equipe, contribuir com responsabilidade e evoluir tecnicamente em projetos reais.</p>
      </div>
    </section>
  );
}