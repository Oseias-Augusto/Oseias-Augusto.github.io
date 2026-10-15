import Sobre from "./Pg/Sobre";
import Projetos from "./Pg/Projetos";
import Formacao from "./Pg/Formacao";
import Habilidades from "./Pg/Habilidades";
import Certificacoes from "./Pg/Certificacoes";
import Interesses from "./Pg/Interesses";

export const PAGINAS = [
  { id: "sobre", nome: "Sobre", Componente: Sobre },
  { id: "projetos", nome: "Projetos", Componente: Projetos },
  { id: "formacao", nome: "Formação", Componente: Formacao },
  { id: "habilidades", nome: "Habilidades", Componente: Habilidades },
  { id: "certificacoes", nome: "Certificações e prêmios", Componente: Certificacoes },
  { id: "interesses", nome: "Interesses", Componente: Interesses }
];