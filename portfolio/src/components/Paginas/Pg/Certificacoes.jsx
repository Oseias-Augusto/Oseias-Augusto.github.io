import { CERTS, PREMIOS } from "../../../dados";
import s from "./Pg.module.css";

const CERTS_CREDLY = {
  "JavaScript Essentials 1": {
    url: "https://www.credly.com/org/cisco/badge/javascript-essentials-1",
    imagem: "b93bf373-3da6-4ada-9879-a0c39d6a11f8",
  },
  "JavaScript Essentials 2": {
    url: "https://www.credly.com/org/cisco/badge/javascript-essentials-2/",
    imagem: "e090c1e1-dbd4-40f8-bbb3-93cc07884d7f",
  },
  "Python Essentials 1": {
    url: "https://www.credly.com/org/cisco/badge/python-essentials-1.1",
    imagem: "68c0b94d-f6ac-40b1-a0e0-921439eb092e",
  },
  "Python Essentials 2": {
    url: "https://www.credly.com/org/cisco/badge/python-essentials-2/",
    imagem: "3f802526-7274-4230-91ab-f6d1a35340e6",
  },
};

const urlImagemCredly = (id) =>
  `https://images.credly.com/images/${id}/image.png`;

export default function Certificacoes() {
  return (
    <section className={s.secao}>
      <p className={s.intro}>Cursos concluídos e reconhecimento</p>
      <h2>Certificações e prêmios</h2>
      <h3>Certificações Cisco Networking Academy</h3>
      <p className={s.nota}>
        Confira os badges e os detalhes de cada curso diretamente no Credly.
      </p>

      <ul className={s.certs}>
        {CERTS.map(([nome]) => {
          const certificado = CERTS_CREDLY[nome];

          if (!certificado) {
            return null;
          }

          return (
            <li key={nome}>
              <a
                href={certificado.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${nome} — ver badge no Credly`}
              >
                <img
                  className={s.certImagem}
                  src={urlImagemCredly(certificado.imagem)}
                  alt={`Badge ${nome}, emitido pela Cisco Networking Academy`}
                  loading="lazy"
                />
                <span>{nome}</span>
                <span className={s.nota}>Ver no Credly ↗</span>
              </a>
            </li>
          );
        })}
      </ul>

      <h3 className={s.subtituloSecao}>Prêmios</h3>
      <ul className={s.check}>
        {PREMIOS.map((premio) => (
          <li key={premio}>{premio}</li>
        ))}
      </ul>
    </section>
  );
}
