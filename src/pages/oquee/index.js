import { Component } from 'react'
import { Link } from "react-router-dom"

import Song from '../../static/oquee.mp3'

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import virus from "../../img/icons/virus.png";
import hq1 from "../../img/hq-1.jpg" ;
import img1 from "../../img/img-1.png" ;
import img2 from "../../img/img-2.jpg" ;
import hq2 from "../../img/hq-2.jpg" ;

class Oquee extends Component {
  state = {
    audio: new Audio(Song),

    isPlaying: false,
  };

  playPause =() => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  }
  render() {
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
          <button className="btnAudio" onClick={this.playPause}>
            {this.state.isPlaying ?
              "Pausar audio" :
              "Audio descrição" 
            }
          </button>
          <div className="ContentCard">
            <div className="imgContent">
            <img style={{width: '18em'}} src={hq1} alt="" />
            </div>
            <br />
              <p className="TextContent">
                Parece que o Chico está um pouco confuso né? Os tuberculos são alimentos de raízes grossas que ficam embaixo da terra, já a tuberculose (TB) é uma doença infecciosa causada por uma bactéria chamada Mycobacterium tuberculosis ou bacilo de koch. Embora o nome seja parecido as definições são totalmente opostas não é mesmo?
              </p>
            <div className="dividerTxtImg">
              <div className="box1">
                <img style={{width: '10em'}} src={img1} alt="" />
              </div>
              <div className="box2">
                <p className="TextContent">
                  Além da TB pulmonar (que afeta os pulmões) ser a forma mais frequente e principal responsável pela transmissão existe também a forma extrapulmonar, alguns tipos apresentados abaixo
                </p>
              </div>
            </div>
            <div className="imgContent">
            <img style={{width: '18em'}} src={img2} alt="" />
            </div>
          </div>
        </div>
  
        <div className="Cards">
          <div className="ContentCard">
            <div className="imgContent">
            <img style={{width: '18em'}} src={hq2} alt="" />
            </div>
            <br />
            <p className="TextContent">
              Mesmo sendo descoberta apenas em 1882 pelo bacteriologista alemão Robert Koch a tuberculose já existia 8 mil anos antes de Cristo (AC),já foram encontrados ossos pré- históricos com evidencias da doença, sendo assim, a tuberculose é uma das doenças mais antigas do mundo.
            </p>
          </div>
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
}

export default Oquee