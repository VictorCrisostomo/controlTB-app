// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


import virus from "../../img/icons/virus.png";

const Oquee = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.3em'}} src={virus} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>O que é?</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill/></button>
      </div>

      <div className="btnsPvNxt">
        <Link to="/">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/sintomasetransmicao">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Oquee