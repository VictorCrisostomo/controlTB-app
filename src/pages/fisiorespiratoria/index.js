// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import Atendimentomdl from "../../components/modals/Atendimentomdl";

import pulmao from "../../img/icons/pulmao.png";

import img29 from "../../img/img-29.jpg";
import img30 from "../../img/img-30.jpg";
import img31 from "../../img/img-31.jpg";


const Fisiorespitatoria = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.6em'}} src={pulmao} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Fisioterapia Respiratória</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill/></button>
        <div className="ContentCard">
          <p className="TextContent">
            O fisioterapeuta irá atuar no tratamento das sequelas deixadas pela tuberculose, que podem ser alterações na postura, atelectasia ( colapso total ou parcial do pulmão) e acúmulo de secreção.           
          </p>
          <div className="imgContent">
          <img style={{width: '18em'}} src={img29} alt="" />
          </div>
          <br />
            <p className="TextContent">
              A fisioterapia respiratória é feita com o uso de técnicas não invasivas, como exercícios de inspiração e expiração, movimentos que fortalecem os músculos do sistema respiratório e equipamentos que auxiliam no controle da respiração.
            </p>
          <div className="imgContent">
          <img style={{width: '18em'}} src={img30} alt="" />
          </div>
          <br />
          <p className="TextContent">
            Este tipo de fisioterapia serve para melhorar o fornecimento de oxigênio O objetivo é liberar as vias respiratórias das secreções e aumentar a capacidade de entrada e saída de ar do pulmão.
          </p>
        </div>
      </div>

      <div className="CardsSecondary">
        <div className="ContentCard">
          <h3 style={{textAlign: 'center'}} className="textToptitleCard">Quer atendimento gratuito de Fisioterapia?</h3>
          <p className="TextContentSecondary">
            A Unime oferece o serviço. Destinado para moradores de Itabuna e região, o atendimento é realizado na Clínica-Escola de Fisioterapia da instituição e em pacientes idosos, os serviços são promovidos em suas residências, albergues ou abrigos.
          </p>
          <div className="imgContent">
            <img style={{width: '18em', borderRadius: '1em'}} src={img31} alt="" />
          </div>
          <div style={{marginTop: '1em'}} className="btnsPvNxt">
            <Atendimentomdl />
            <a href="tel:+557332151704">
              <button className="btnTell">Ligar</button>
            </a>
          </div>
          <br />
        </div>
      </div>

      <div className="btnsPvNxt">
        <Link to="/terapianutricional">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/prevencao">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Fisiorespitatoria