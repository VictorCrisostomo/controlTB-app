// import React from 'react'

import { BsFillPlayFill } from "react-icons/bs";

import remedio from "../../img/icons/remedio.png";

const Tratamento = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.1em'}} src={remedio} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Tratamento</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillPlayFill /></button>
      </div>
    </main>
  )
}

export default Tratamento