// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


import remedio from "../../img/icons/remedio.png";

const Tratamento = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.05em'}} src={remedio} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Tratamento</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill /></button>
      </div>

      <div className="btnsPvNxt">
        <Link to="/diagnostico">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/terapianutricional">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Tratamento