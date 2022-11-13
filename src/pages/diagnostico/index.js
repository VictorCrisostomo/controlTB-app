// import React from 'react'
import { Link } from "react-router-dom"

import Novaesmdl from "../../components/modals/Novaesmdl";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import microscopio from "../../img/icons/microscopio.png";
import localizacao from "../../img/icons/localizacao.png";

import hq5 from "../../img/hq-5.jpg" ;
import img10 from "../../img/img-10.jpg" ;
import img11 from "../../img/img-11.png" ;
import img12 from "../../img/img-12.jpg" ;
import img13 from "../../img/img-13.jpg" ;
import img14 from "../../img/img-14.jpg" ;
import img15 from "../../img/img-15.jpg" ;
import img16 from "../../img/img-16.jpg" ;

const Diagnostico = () => {

  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '1.75em'}} src={microscopio} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Diagnostico</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill /></button>
        <div className="ContentCard">
          <p className="TextContent">
          O diagnóstico precoce aumenta as chances de cura e reduz novos casos por transmissão da infecção por contágio.
          </p>
          <div className="imgContent">
            <img style={{width: '18em'}} src={hq5} alt="" />
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <p className="TextContent">
            O teste rápido molecular para tuberculose (TRM-TB) é realizado com 1 amostra respiratória (escarro) obtendo o resultado aproximadamente 2 horas depois.
          </p>
          <div className="imgContent">
            <img style={{width: '18em'}} src={img10} alt="" />
          </div>
          <div className="dividerTxtImg">
            <div className="box1">
              <img style={{width: '10em'}} src={img11} alt="" />
            </div>
            <div className="box2">
              <p className="TextContent">
                Além desses exames também são utilizados no diagnóstico da TB: exame microscópico direto (baciloscopia direta), cultura para micobactéria com identificação de espécie e teste de sensibilidade antimicrobiana.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '1.75em'}} src={localizacao} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Locais para realização desses exames</h2>
          </div>
        </div>
        <div className="ContentCard">
        <div className="textToptitleCard">
          <h3>| Itabuna</h3>
        </div>
          <br/>
          <div className="cardsBtn">
            <div className="imgCardBtn" style={
              { backgroundImage: `url(${img12})`}
              }></div>
            <div className="ContentBtnsCard">
              <p className="TextCardBtns">Hospital Manoel Novaes</p>
              {/* <button className="btnLocal">Ver endereço</button>   */}
              <Novaesmdl />
              <button className="btnTell">Ligar</button>
            </div>
          </div>
          <div className="cardsBtn">
            <div className="imgCardBtn" style={
              { backgroundImage: `url(${img13})`}
              }></div>
            <div className="ContentBtnsCard">
              <p className="TextCardBtns">LIDI Laboratório de Itabuna</p>
              <button className="btnLocal">Ver endereço</button>
              <button className="btnTell">Ligar</button>
            </div>
          </div>
          <div className="cardsBtn">
            <div className="imgCardBtn" style={
              { backgroundImage: `url(${img14})`}
              }></div>
            <div className="ContentBtnsCard">
              <p className="TextCardBtns">LAP - Laboratório médico</p>
              <button className="btnLocal">Ver endereço</button>
              <button className="btnTell">Ligar</button>
            </div>
          </div>
          <div className="textToptitleCard">
          <h3>| Ilhéus</h3>
          </div>
          <br/>
          <div className="cardsBtn">
            <div className="imgCardBtn" style={
              { backgroundImage: `url(${img15})`}
              }></div>
            <div className="ContentBtnsCard">
              <p className="TextCardBtns">LAP Medicina Laboratorial</p>
              <button className="btnLocal">Ver endereço</button>
              <button className="btnTell">Ligar</button>
            </div>
          </div>
          <div className="cardsBtn">
            <div className="imgCardBtn" style={
              { backgroundImage: `url(${img16})`}
              }></div>
            <div className="ContentBtnsCard">
              <p className="TextCardBtns">CIAC Analises Clinicas</p>
              <button className="btnLocal">Ver endereço</button>
              <button className="btnTell">Ligar</button>
            </div>
          </div>
          </div>
      </div>

      <div className="btnsPvNxt">
        <Link to="/sintomasetransmicao">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/tratamento">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Diagnostico