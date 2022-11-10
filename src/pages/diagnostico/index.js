// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


import microscopio from "../../img/icons/microscopio.png";

const Diagnostico = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '1.75em'}} src={microscopio} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Diagnostico</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill /></button>
      </div>

      <div className="btnsPvNxt">
        <Link to="/sintomasetransmicao">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/tratamento">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Diagnostico