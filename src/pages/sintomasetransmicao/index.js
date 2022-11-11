// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import tosse from "../../img/icons/tosse.png";
import alerta from "../../img/icons/alerta.png";
import hq3 from "../../img/hq-3.jpg" ;
import img3 from "../../img/img-3.png";
import img4 from "../../img/img-4.png";
import img5 from "../../img/img-5.png";
import img6 from "../../img/img-6.png";
import img7 from "../../img/img-7.png";
import img8 from "../../img/img-8.png";
import hq4 from "../../img/hq-4.jpg";
import img9 from "../../img/img-9.png";


const Sintomasetransmicao = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.3em'}} src={tosse} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Sintomas e transmição</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill /></button>
        <div className="ContentCard">
          <div className="imgContent">
          <img style={{width: '18em'}} src={hq3} alt="" />
          </div>
            <p className="TextContent">
              Após a pandemia ficou um pouco difícil diferenciar uma gripe ou outro tipo de doença respiratória da COVID-19. No caso da tuberculose são muitas semelhanças como tosse, febre e sintomas respiratórios, ambas atingem o pulmão e são transmitidas por via aérea, por isso é importanteconhecer todos os sintomas e ao chegar em ambulatórios pedir para investigar a possibilidade de ambas as doenças.
            </p>
        </div>
      </div>

      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.3em'}} src={alerta} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Fique de olho nos sintomas</h2>
          </div>
        </div>
        <div className="ContentCard">
          <div className="imgContent">
            <img style={{width: '16em'}} src={img3} alt="" />
          </div>
          <div className="imgContent">
            <img style={{width: '20em'}} src={img4} alt="" />
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="TopTitleCard">
          <div className="textToptitleCard">
            <h2>Sintomas de alguns tipos de TB extrapulmonar</h2>
          </div>
        </div>
        <div className="ContentCard">
          <div className="imgContent">
            <img style={{width: '18em'}} src={img5} alt="" />
          </div>
          <div className="imgContent">
            <img style={{width: '18em'}} src={img6} alt="" />
          </div>
          <div className="imgContent">
            <img style={{width: '18em'}} src={img7} alt="" />
          </div>
          <div className="imgContent">
            <img style={{width: '18em'}} src={img8} alt="" />
          </div>
          <p className="TextContent">*Caso apresente algum sintoma, procure a unidade de saúde mais proxima da sua residência.</p>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="imgContent">
            <img style={{width: '18em'}} src={hq4} alt="" />
          </div>
          <div className="imgContent">
            <img style={{width: '20em'}} src={img9} alt="" />
          </div>
        </div>
      </div>

      <div className="btnsPvNxt">
        <Link to="/oquee">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/diagnostico">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Sintomasetransmicao