// import React from 'react'
import { BsFillPlayFill } from "react-icons/bs";

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
        <button className="btnAudio">Audio descrição <BsFillPlayFill /></button>
      </div>
    </main>
  )
}

export default Oquee