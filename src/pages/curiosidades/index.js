// import React from 'react'

import { BsFillPlayFill } from "react-icons/bs";

import lampada from "../../img/icons/lampada-2.png";

const Curiosidades = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.3em'}} src={lampada} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Curiosidades</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillPlayFill /></button>
      </div>
    </main>
  )
}

export default Curiosidades