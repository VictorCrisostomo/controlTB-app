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
                <img style={{width: '3.6em'}} src={virus} alt="" />
              </div>
              <div className="ContentCard">
                <h3 className="TitleCard">O que é</h3>
                <p className="TextCard">Tipos, vetor, surgimento</p>
              </div>
            </div>
          </Link>

          <Link to="/sintomasetransmicao">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img style={{width: '3.5em'}} src={tosse} alt="" />
              </div>
              <div className="ContentCard">
                <h3 className="TitleCard">Sintomas e transmisão</h3>
                <p className="TextCard">Sinais, sintomas, formas <br/>de transmição</p>
              </div>
            </div>
          </Link>

          <Link to="/diagnostico">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img style={{width: '3em'}} src={microscopio} alt="" />
              </div>
              <div className="ContentCard">
                <h3 className="TitleCard">Diagnóstico</h3>
                <p className="TextCard">Exames clínicos, locais <br/>onde são realizados</p>
              </div>
            </div>
          </Link>

          <Link to="/tratamento">/
            <div className="Cards">
            <div className="BackgroundIcon">
                <img style={{width: '3em'}} src={remedio} alt="" />
              </div>
              <div className="ContentCard">
                <h3 className="TitleCard">Tratamento</h3>
                <p className="TextCard">Medicamentos, efeitos colaterais, <br/>locais de distribuição</p>
              </div>
            </div>
          </Link>

          <Link to="/terapianutricional">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img style={{width: '3.2em'}} src={frutas} alt="" />
              </div>
              <div className="ContentCard">
                <h3 class="TitleCard">Terapia Nutricional</h3>
                <p class="TextCard">Alimentação como parte do <br/>tratamento, receitas</p>
              </div>
            </div>
          </Link>

          <Link to="/fisiorespiratoria">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img style={{width: '3.8em'}} src={pulmao} alt="" />
              </div>
              <div className="ContentCard">
                <h3 class="TitleCard">Fisioterapia Respirátoria</h3>
                <p class="TextCard">Como funciona, onde fazer</p>
              </div>
            </div>
          </Link>

          <Link to="/prevencao">
            <div className="Cards">
              <div className="BackgroundIcon">
                <img style={{width: '3em'}} src={vacina} alt="" />
              </div>
              <div className="ContentCard">
                <h3 class="TitleCard">Prevenção</h3>
                <p class="TextCard">Vacinação, onde fazer</p>
              </div>
            </div>
          </Link>

          <Link to="/curiosidades">
            <div className="Cards">
              <div className="BackgroundIcon">
                <img style={{width: '4.2em'}} src={lampada} alt="" />
              </div>
              <div className="ContentCard">
                <h3 class="TitleCard">Curiosidades</h3>
                <p class="TextCard">Coisas que você provavelmente <br/>não sabia sobre a tuberculose</p>
              </div>
            </div>
          </Link>

          <Link to="/tvtb">
            <div className="Cards">
            <div className="BackgroundIcon">
                <img style={{width: '3.5em'}} src={tv} alt="" />
              </div>
              <div className="ContentCard">
              <h3 class="TitleCard">TV TB</h3>
                <p class="TextCard">Canal de informações com <br/>animações e vídeos</p>
              </div>
            </div>
          </Link>
        </div>
    </main>
  )
}

export default MenuInicial