// import React from 'react'

import { BsFillPlayFill } from "react-icons/bs";

import pulmao from "../../img/icons/pulmao.png";


const Fisiorespitatoria = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.5em'}} src={pulmao} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Fisioterapia Respiratória</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillPlayFill /></button>
      </div>
    </main>
  )
}

export default Fisiorespitatoria