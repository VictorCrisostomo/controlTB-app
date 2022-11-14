// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import img32 from "../../img/img-32.jpg";
import img33 from "../../img/img-33.jpg";
import hq9 from "../../img/hq-9.jpg";
import hq10 from "../../img/hq-10.jpg";

import vacina from "../../img/icons/vacina.png";

const Prevencao = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '1.62em'}} src={vacina} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Prevenção</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill /></button>
        <div className="ContentCard">
          <p className="TextContent">
            Muitas pessoas tem essa cicatriz mas nem todas sabem que ela é causada pela vacina BCG. Mas afinal que vacina é essa?
          </p>
          <div className="imgContent">
            <img style={{width: '18em', borderRadius: '1em'}} src={img32} alt="" />
          </div>
          <br />
          <p className="TextContent">
            A vacina BCG é a principal forma de prevenção contra a tuberculose.
          </p>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="imgContent">
            <img style={{width: '18em', borderRadius: '1em'}} src={img33} alt="" />
          </div>
          <br />
          <p className="TextContent">
            Para prevenir a tuberculose é necessário vacinar todas as crianças, a partir do nascimento até os 4 anos de idade. A vacina, em dose única, é oferecida, gratuitamente, nas Unidades Básicas de Saúde.
          </p>
          <div className="imgContent">
            <img style={{width: '18em', borderRadius: '1em'}} src={hq9} alt="" />
          </div>
          <br />
          <p className="TextContent">
            Evite, também, permanecer em locais onde há suspeita de infectados e, caso entre em contato com um doente, procure atendimento médico.
          </p>
          <div className="imgContent">
            <img style={{width: '18em', borderRadius: '1em'}} src={hq10} alt="" />
          </div>
        </div>
      </div>



      <div className="btnsPvNxt">
        <Link to="/fisiorespiratoria">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/curiosidades">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Prevencao