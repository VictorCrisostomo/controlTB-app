import React from 'react'

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.ContentFooter}>
        <p className={styles.TextFooter}>Ação realizada pela <strong>uniftc</strong></p>
        <p className={styles.TextFooter}>Projeto Interprofissional em saúde <br/>Média e alta complexidade</p>
        <p className={styles.TextFooter}>Participantes:</p>
        <div className={styles.NamesFooter}>
          <div className={styles.LeftFooter}>
            <p> 
              Larissa Rodrigues Ferreira<br/>
              Andressa Karen Silva Menezes<br/>
              Andressa Ellen Moreira da Silva Gomes<br/>
              Polyana Morais Santos
            </p>
          </div>
          <div className={styles.RigthFooter}>
            <p>
              Thamilles Tenório Silva Souza<br/>
              Jayne Souza Feliciano<br/>
              Isabela dos Santos Aboboreira<br/>
              Gilenildo de Souza Brito
            </p>
          </div>
        </div>
        <p className={styles.ProfFooter}>Katiucia Ticila de Souza de Nascimento</p>
      </div>
    </footer>
  )
}

export default Footer