// import React from 'react'

import { BsFillPlayFill } from "react-icons/bs";

import vacina from "../../img/icons/vacina.png";

const Prevencao = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.1em'}} src={vacina} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Prevenção</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillPlayFill /></button>
      </div>
    </main>
  )
}

export default Prevencao