import { Link } from "react-router-dom";
import "./styles.css";

const MenuInicial = () => {
  return (
    <main>
      <div className="">
        <h1>Control TB</h1>
      </div>

        <div className="">
          <h2>TUBERCULOSE</h2>
        </div>

        <div className="">
          <div className="">
            <Link to="/oquee"><h3>O que é</h3></Link>
          </div>
          <div className="">
            <Link to="/sintomasetransmicao"><h3>Sintomas e transmisão</h3></Link>
          </div>
          <div className="">
            <Link to="/diagnostico"><h3>Diagnóstico</h3></Link>
          </div>
          <div className="">
            <Link to="/tratamento"><h3>Tratamento</h3></Link>
          </div>
          <div className="">
            <Link to="/terapianutricional"><h3>Terapia Nutricional</h3></Link>
          </div>
          <div className="">
            <Link to="/fisiorespiratoria"><h3>Fisioterapia Respirátoria</h3></Link>
          </div>
          <div className="">
            <Link to="/prevencao"><h3>Prevenção</h3></Link>
          </div>
          <div className="">
            <Link to="/curiosidades"><h3>Curiosidades</h3></Link>
          </div>
          <div className="">
            <Link to="/tvtb"><h3>TV TB</h3></Link>
          </div>
        </div>
    </main>
  )
}

export default MenuInicial