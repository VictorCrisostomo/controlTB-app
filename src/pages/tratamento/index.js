import { Component } from 'react'
import { Link } from "react-router-dom"

import Song from '../../static/tratamento.mp3'

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import remedio from "../../img/icons/remedio.png";
import alertaBc from "../../img/icons/alerta-bc.png";

import hq6 from "../../img/hq-6.jpg" ;
import hq7 from "../../img/hq-7.jpg" ;
import hq8 from "../../img/hq-8.jpg" ;
import img17 from "../../img/img-17.jpg" ;

class Tratamento extends Component {
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
              <img style={{width: '2.05em'}} src={remedio} alt="" />
            </div>
            <div className="textToptitleCard">
              <h2>Tratamento</h2>
            </div>
          </div>
          <button className="btnAudio" onClick={this.playPause}>
            {this.state.isPlaying ?
              "Pausar audio" :
              "Audio descrição" 
            }
          </button>
          <div className="ContentCard">
            <p className="TextContent">
              A tuberculose tem cura em praticamente todos os casos desde que o tratamento seja seguido corretamente.
            </p>
            <div className="imgContent">
              <img style={{width: '16em'}} src={hq6} alt="" />
            </div>
            <br />
            <p className="TextContent">
              No SUS também tem o TDO que é o Tratamento Diretamente Observado, sendo uma estratégia realizada para observar a tomada de medicamentos do paciente com tuberculose pelos profissionais capacitados, pode ser feito em dias uteis da semana ou três vezes na semana. O local e o horário podem ser combinados entre o paciente e o serviço de saúde.
            </p>
          </div>
        </div>
  
        <div className="CardsAlert">
          <div className="TopTitleCard">
            <div className="imgToptitleCard">
              <img style={{width: '2.05em'}} src={alertaBc} alt="" />
            </div>
            <div className="textToptitleCardAlert">
              <h2>Importante</h2>
            </div>
          </div>
          <div className="ContentCard">
            <p className="TextContentAlert">
              | A rifampicina contém açúcar, então é importante avisar aos médicos se você for diabético.
            </p>
            <br /> <br />
            <p className="TextContentAlert">
              | O consumo de bebida alcoólica durante o uso da isoniazida pode aumentar o risco de o medicamento ser tóxico para o fígado.
            </p>
            <br /> <br />
            <p className="TextContentAlert">
              | Nunca tome duas doses ao mesmo tempo se esquecer de tomar 2 doses ou mais, avise ao médico. (isso vale pra todos os 4 medicamentos).
            </p>
            <br /> <br />
            <p className="TextContentAlert">
              | O recomendado é tomar os medicamentos em jejum ou pelo menos 1 hora antes de uma refeição ou 2 horas depois para evitar que os alimentos interajam com os remédios.
            </p>
          </div>
        </div>
  
        <div className="CardsSecondary">
          <div className="ContentCard">
            <div className="imgContent">
              <img style={{width: '18em'}} src={hq7} alt="" />
            </div>
            <br />
            <h4 style={{textAlign: 'center'}} className="textToptitleCard">Calma, não se desespere!</h4>
            <p className="TextContentSecondary">
              A rifampicina pode deixar a urina, as fezes, suor e lágrimas com uma cor avermelhada e marrom mas não se preocupe é um efeito colateral comum desse medicamento.          
            </p>
            <div className="imgContent">
              <img style={{width: '18em'}} src={hq8} alt="" />
            </div>
            <p className="TextContentSecondary">
              A Maria não sabia mas a rifampicina reduz o efeito do anticoncepcional! então para não ter uma gravidez inesperada, use preservativo durante todo o período do tratamento e até 2 semanas depois de conclui-lo por precaução
            </p>
            <div className="imgContent">
              <img style={{width: '18em', borderRadius: '1em'}} src={img17} alt="" />
            </div>
            <p className="TextContentSecondary">
              Evite consumir durante o tratamento alimentos fermentados e envelhecidos como pães, queijos envelhecidos, salames e vinhos, pois eles são ricos em tiramina e histamina que interagem com a isoniazida.          
            </p>
          </div>
        </div>
  
        <div className="Cards">
          <div className="ContentCard">
            <p className="TextContent">
              A rifampicina também pode diminuir a ação de alguns medicamentos se ingeridos juntos ou num intervalo curto entre eles, segue lista desses medicamentos abaixo:          
            </p>
            <div className="dividerTxtImg">
              <div className="box2">
                <p className="textToptitleCard">
                  | diazepam <br/>| quinidina <br/>| disopiramida <br/>| cloranfenicol <br/>| dapsona <br/>| cumarinas <br/>| varfarina <p className="subText">(reduz o efeito anticoagulante)</p> <br/>| imipramina <br/>| clomipramina <br/>| carbamazepina <br/>| fenitoína <p className="subText">(dificulta o controle da epilepsia)</p> <br/>| fluconazol <br/>| itraconazol <br/>| cetoconazol <br/>| haloperidol <br/>| propranolol <br/>| diltiazem <br/>| nifedipino <br/>
                </p>
              </div>
              <div className="box2">
                <p className="textToptitleCard">
                | verapamil <br/>| isradipino <br/>| nisoldipino <br/>| ciclosporina <br/>| azatioprina <p className="subText">(uso com rifampicina possivelmente leva à rejeição de transplantes)</p> <br/>| corticosteróides <p className="subText">(prednisona)</p> <br/>| levotiroxina <br/>| tacrolimus <br/>| teofilina <br/>| metadona <br/>| digoxina <br/>| paracetamol <br/>| clofibrato <br/>| levotipoxina <br/>| amitriptilina <br/>| nortriptilina
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="btnsPvNxt">
          <Link to="/diagnostico">
            <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
          </Link>
          <Link className="backToMenu" to="/">Menu principal</Link>
          <Link to="/terapianutricional">
          <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
          </Link>
        </div>
      </main>
    )
  }
}



export default Tratamento