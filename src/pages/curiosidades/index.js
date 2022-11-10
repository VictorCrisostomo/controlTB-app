// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


import lampada from "../../img/icons/lampada-2.png";

const Curiosidades = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.15em'}} src={lampada} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Curiosidades</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill /></button>
      </div>

      <div className="btnsPvNxt">
        <Link to="/prevencao">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/tvtb">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Curiosidades