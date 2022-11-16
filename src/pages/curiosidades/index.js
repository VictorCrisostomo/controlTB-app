import { Component } from 'react'
import { Link } from "react-router-dom"

import Song from '../../static/curiosidades.mp3'

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import lampada from "../../img/icons/lampada-2.png";

import img34 from "../../img/img-34.png";
import img35 from "../../img/img-35.png";
import img36 from "../../img/img-36.png";
import img37 from "../../img/img-37.png";
import img38 from "../../img/img-38.png";

class Curiosidades extends Component{

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
  render (){
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
          <button className="btnAudio" onClick={this.playPause}>
            {this.state.isPlaying ?
              "Pausar audio" :
              "Audio descrição" 
            }
          </button>
          <div className="dividerTxtImg">
              <div className="box1">
                <img style={{width: '10em'}} src={img34} alt="" />
              </div>
              <div className="box2">
                <p className="TextContent">
                  Dom Pedro I morreu de tuberculose no ano de 1834
                </p>
              </div>
            </div>
        </div>
        <div className="Cards">
          <div className="dividerTxtImg">
              <div className="box1">
                <img style={{width: '10em'}} src={img35} alt="" />
              </div>
              <div className="box2">
                <p className="TextContent">
                  A cantora Simaria ficou aproximadamente 1 ano fora dos palcos para tratar de uma tuberculose ganglionar
                </p>
              </div>
            </div>
        </div>
        <div className="Cards">
          <div className="dividerTxtImg">
              <div className="box1">
                <img style={{width: '10em'}} src={img36} alt="" />
              </div>
              <div className="box2">
                <p className="TextContent">
                  O termo usado para Tuberculose antigamente era justamente “consumo”, pois os pacientes sofriam com grande perda de peso, aparentando serem consumidos pela doença.
                </p>
              </div>
            </div>
        </div>
        <div className="Cards">
          <div className="dividerTxtImg">
              <div className="box1">
                <img style={{width: '10em'}} src={img37} alt="" />
              </div>
              <div className="box2">
                <p className="TextContent">
                  A pequena cicatriz que se forma no braço direito é uma reação natural do corpo à bactéria Mycobacterium bovis que é um microrganismo presente na vacina.
                </p>
              </div>
            </div>
        </div>
        <div className="Cards">
          <div className="dividerTxtImg">
              <div className="box1">
                <img style={{width: '10em'}} src={img38} alt="" />
              </div>
              <div className="box2">
                <p className="TextContent">
                  Existe também a tuberculose bovina que é uma doença causada pelo Mycobacterium bovis que afeta, principalmente, bovinos e búfalos. Ela se torna crônica nos animais e é transmissível para o homem.
                </p>
              </div>
            </div>
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
    );
  }
}

export default Curiosidades