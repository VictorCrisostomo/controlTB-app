import { Link } from "react-router-dom";
import "./styles.css";

// imagens
import virus from "../img/icons/virus.png"
import tosse from "../img/icons/tosse.png"
import microscopio from "../img/icons/microscopio.png"
import remedio from "../img/icons/remedio.png"
import frutas from "../img/icons/frutas.png"
import pulmao from "../img/icons/pulmao.png"
import vacina from "../img/icons/vacina.png"
import lampada from "../img/icons/lampada.png"
import tv from "../img/icons/tv.png"


const MenuInicial = () => {
  return (
    <main>

          <h2 className="Title">TUBERCULOSE</h2>

        <div className="Container">
          <Link to="/oquee">
            <div className="Cards">
              <div className="BackgroundIcon">
                <img className="icon" src={virus} alt="" />
              </div>
              <div className="">
                <h3>O que é</h3>
                <p></p>
              </div>
            </div>
          </Link>

          <Link to="/sintomasetransmicao">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img className="icon" src={tosse} alt="" />
              </div>
              <div className="">
                <h3>Sintomas e transmisão</h3>
                <p></p>
              </div>
            </div>
          </Link>

          <Link to="/diagnostico">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img className="icon" src={microscopio} alt="" />
              </div>
              <div className="">
                <h3>Diagnóstico</h3>
                <p></p>
              </div>
            </div>
          </Link>

          <Link to="/tratamento">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img className="icon" src={remedio} alt="" />
              </div>
              <div className="">
                <h3>Tratamento</h3>
                <p></p>
              </div>
            </div>
          </Link>

          <Link to="/terapianutricional">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img className="icon" src={frutas} alt="" />
              </div>
              <div className="">
                <h3>Terapia Nutricional</h3>
                <p></p>
              </div>
            </div>
          </Link>

          <Link to="/fisiorespiratoria">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img className="icon" src={pulmao} alt="" />
              </div>
              <div className="">
                <h3>Fisioterapia Respirátoria</h3>
                <p></p>
              </div>
            </div>
          </Link>

          <Link to="/prevencao">
            <div className="Cards">
              <div className="BackgroundIcon">
                <img className="icon" src={vacina} alt="" />
              </div>
              <div className="">
                <h3>Prevenção</h3>
                <p></p>
              </div>
            </div>
          </Link>

          <Link to="/curiosidades">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img className="icon" src={lampada} alt="" />
              </div>
              <div className="">
                <h3>Curiosidades</h3>
                <p></p>
              </div>
            </div>
          </Link>

          <Link to="/tvtb">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img className="icon" src={tv} alt="" />
              </div>
              <div className="">
              <h3>TV TB</h3>
                <p></p>
              </div>
            </div>
          </Link>
        </div>
    </main>
  )
}

export default MenuInicial