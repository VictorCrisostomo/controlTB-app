// import React from 'react'
import { Link } from "react-router-dom"

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import tv from "../../img/icons/tv.png";

const Tvtb = () => {
  return (
    <main className="Container">
      <div className="Cards">
        <div className="TopTitleCard">
          <div className="imgToptitleCard">
            <img style={{width: '2.08em'}} src={tv} alt="" />
          </div>
          <div className="textToptitleCard">
            <h2>TV TB</h2>
          </div>
        </div>
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| Campanha Tuberculose 2020</h3>
          </div>
          <div className="imgContent">
          <iframe width="100%" height="190" src="https://www.youtube.com/embed/S8jteT4rPds?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| Infográfico animado Tuberculose</h3>
          </div>
          <div className="imgContent">
          <iframe width="100%" height="190" src="https://www.youtube.com/embed/0TgYOLknoa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| Prevenção e Saúde - 24 de Março: Dia Mundial de Combate à Tuberculose</h3>
          </div>
          <div className="imgContent">
          <iframe width="100%" height="190" src="https://www.youtube.com/embed/VEtiFXeQU6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| Todos juntos contra a tuberculose</h3>
          </div>
          <div className="imgContent">
            <iframe width="100%" height="190" src="https://www.youtube.com/embed/2y-UC8JLOb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| Tuberculose em pacientes com HIV</h3>
          </div>
          <div className="imgContent">
          <iframe width="100%" height="190" src="https://www.youtube.com/embed/7UuLENh1EXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| Nossas batalhas (como funciona nosso sistema imunológico?)</h3>
          </div>
          <div className="imgContent">
          <iframe width="100%" height="190" src="https://www.youtube.com/embed/ahzcg6dy5MM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| 5 exercícios para fortalecer o pulmão</h3>
          </div>
          <div className="imgContent">
          <iframe width="100%" height="190" src="https://www.youtube.com/embed/CEfBBZoJ9Rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| Alimentação e Imunidade (alimentos que ajudam na imunidade)</h3>
          </div>
          <div className="imgContent">
          <iframe width="100%" height="190" src="https://www.youtube.com/embed/oK0WPxeboWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="ContentCard">
          <div className="textToptitleCard">
            <h3>| 3 receitas gostosas para Aumentar a Imunidade naturalmente</h3>
          </div>
          <div className="imgContent">
          <iframe width="100%" height="190" src="https://www.youtube.com/embed/RPeQhYuhrWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className="btnsPvNxt">
        <Link to="/curiosidades">
          <button className="btnPrev"><BsFillCaretLeftFill /> Voltar</button>        
        </Link>
        <Link className="backToMenu" to="/">Menu principal</Link>
        <Link to="/">
        <button className="btnNext">Proximo <BsFillCaretRightFill /></button>
        </Link>
      </div>
    </main>
  )
}

export default Tvtb