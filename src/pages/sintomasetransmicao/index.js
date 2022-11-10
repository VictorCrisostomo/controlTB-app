// import React from 'react'

import { BsFillPlayFill } from "react-icons/bs";

import tosse from "../../img/icons/tosse.png";

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
        <button className="btnAudio">Audio descrição <BsFillPlayFill /></button>
      </div>
    </main>
  )
}

export default Sintomasetransmicao