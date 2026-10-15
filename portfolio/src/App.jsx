import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/Navbar";
import Pagina from "./components/Pagina/Pagina";
import { PAGINAS } from "./components/Paginas/Paginas";
import s from "./App.module.css";

const idDoHash = () => {
  const id = window.location.hash.slice(1);
  return PAGINAS.some((p) => p.id === id) ? id : PAGINAS[0].id;
};

export default function App() {
  const [ativa, setAtiva] = useState(idDoHash);
  const [navRecolhida, setNavRecolhida] = useState(false);

  useEffect(() => {
    const aoMudar = () => setAtiva(idDoHash());
    window.addEventListener("hashchange", aoMudar);
    return () => window.removeEventListener("hashchange", aoMudar);
  }, []);

  return (
    <div className={`${s.app} ${navRecolhida ? s.recolhida : ""}`}>
      <NavBar
        ativa={ativa}
        recolhida={navRecolhida}
        onAlternarRecolhida={() => setNavRecolhida((valor) => !valor)}
      />
      <Pagina id={ativa} />
    </div>
  );
}