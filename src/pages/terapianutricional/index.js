// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import Farinhamdl from "../../components/modals/Farinhamdl";
import Bolofubamdl from "../../components/modals/Bolofubamdl";
import Panqueca from "../../components/modals/Panqueca";
import Molhomdl from "../../components/modals/Molhomdl";

import frutas from "../../img/icons/frutas.png";
import bandeja from "../../img/icons/bandeja.png";

import img18 from "../../img/img-18.jpg";
import img19 from "../../img/img-19.jpg";
import img20 from "../../img/img-20.png";
import img21 from "../../img/img-21.png";
import img22 from "../../img/img-22.png";
import img23 from "../../img/img-23.png";
import img24 from "../../img/img-24.png";
import img25 from "../../img/img-25.jpg";
import img26 from "../../img/img-26.jpg";
import img27 from "../../img/img-27.jpg";
import img28 from "../../img/img-28.jpg";

const Terapianutricional = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.2em'}} src={frutas} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Terapia nutricional</h2>
          </div>
        </div>
        <button className="btnAudio">Audio descrição <BsFillCaretRightFill/></button>
        <div className="ContentCard">
          <p className="TextContent">
          Um dos sintomas da tuberculose é a falta de apetite que pode causar o emagrecimento, perda de massa corporal e desnutrição. A desnutrição deixa a imunidade baixa e diminui a eficácia da vacina BCG.       
          </p>
          <div className="imgContent">
            <img style={{width: '18em', borderRadius: '1em'}} src={img18} alt="" />
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <p className="TextContent">
            Os remédios usados no tratamento da tuberculose causam deficiência de vitamina B3 e B6, vitamina D e diminui a absorção de cálcio, por isso é muito importante comer alimentos que são ricos dessas vitaminas e mineral.          
          </p>
          <div className="imgContent">
            <img style={{width: '18em', borderRadius: '1em'}} src={img19} alt="" />
          </div>
          <p style={{textAlign: 'center', fontSize: '10pt'}} className="TextContent">principais fontes de proteína (frango, carne vermelha,peixes e ovos)</p>
          
          <div className="dividerTxtImg">
            <div className="box1">
              <img style={{width: '10em'}} src={img20} alt="" />
            </div>
            <div className="box2">
              <p className="TextContent">
                Fonte de vitamina B6 aveia e banana mas o ovo também é uma fonte dessa vitamina
              </p>
            </div>
          </div>
          <div className="dividerTxtImg">
            <div className="box1">
              <img style={{width: '10em'}} src={img21} alt="" />
            </div>
            <div className="box2">
              <p className="TextContent">
                algumas importantes fontes de niacina: carne vermelha, fígado, peixes , amendoim, abacate pimentão tomate.
              </p>
            </div>
          </div>
          <div className="dividerTxtImg">
            <div className="box1">
              <img style={{width: '10em'}} src={img22} alt="" />
            </div>
            <div className="box2">
              <p className="TextContent">
                A vitamina D é muito encontrada em óleo de fígado de peixes, como o bacalhau, esse óleo é vendido em capsulas e geralmente vendido em farmácias.
              </p>
            </div>
          </div>
          <div className="dividerTxtImg">
            <div className="box1">
              <img style={{width: '10em'}} src={img23} alt="" />
            </div>
            <div className="box2">
              <p className="TextContent">
                A exposição solar também é uma fonte de vitamina D é recomendado tomar sol por até 20 minutos ao dia pelo menos 3 vezes por semana sem protetor solar no corpo e com o minimo de roupa possível
              </p>
            </div>
          </div>
          <div className="dividerTxtImg">
            <div className="box1">
              <img style={{width: '10em'}} src={img24} alt="" />
            </div>
            <div className="box2">
              <p className="TextContent">
              O leite e seus derivados como queijos e iogurte são importantes fontes de cálcio mas priorizem iogurtes naturais e queijos brancos
              </p>
            </div>
          </div>
          <p className="TextContent">
            Uma opção mais econômica e também rica em cálcio é a farinha de casca de ovo de galinha que pode ser usada em sopas, caldos, bolos, vitaminas ou como você preferir.
          </p>
          <div className="imgContent">
            <img style={{width: '18em', borderRadius: '1em'}} src={img25} alt="" />
          </div>
          <br />
          <div style={{display: 'flex', justifyContent: 'center'}}>
          < Farinhamdl />
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.2em'}} src={bandeja} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>Receitas saborosas e fáceis <p style={{fontSize: '12pt'}}>(Com cálcio vit. B3 e B6)</p></h2>
          </div>
        </div>
        <div className="ContentCard">
        <div style={{backgroundColor: '#FFC1C1'}} className="cardsBtn">
            <div className="imgCardBtn" style={
              { backgroundImage: `url(${img26})`}
              }></div>
            <div className="ContentBtnsCard">
              <p className="textToptitleCard">Bolo de fubá com <br /> farinha de casca de ovo</p>
              <Bolofubamdl />
            </div>
        </div>
        <div style={{backgroundColor: '#FFC1C1'}} className="cardsBtn">
            <div className="imgCardBtn" style={
              { backgroundImage: `url(${img27})`}
              }></div>
            <div className="ContentBtnsCard">
              <p className="textToptitleCard">Panqueca de aveia e <br /> banana</p>
              <Panqueca />
            </div>
        </div>
        <div style={{backgroundColor: '#FFC1C1'}} className="cardsBtn">
            <div className="imgCardBtn" style={
              { backgroundImage: `url(${img28})`}
              }></div>
            <div className="ContentBtnsCard">
              <p className="textToptitleCard">Molho de abacate com <br /> iogurte para saladas</p>
              <Molhomdl />
            </div>
        </div>
        </div>
      </div>

      <div className="btnsPvNxt">
        <Link to="/tratamento">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/fisiorespiratoria">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Terapianutricional