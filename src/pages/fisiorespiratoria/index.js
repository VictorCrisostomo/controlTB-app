// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


import pulmao from "../../img/icons/pulmao.png";


const Fisiorespitatoria = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.6em'}} src={pulmao} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Fisioterapia Respiratória</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill/></button>
      </div>

      <div className="btnsPvNxt">
        <Link to="/terapianutricional">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/prevencao">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Fisiorespitatoria