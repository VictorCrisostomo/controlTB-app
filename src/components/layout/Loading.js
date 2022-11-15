import React from 'react'

import styles from "./Loading.module.css"

import spin from "../../img/icons/load-icon-png-27.png";

const Loading = () => {
  return (
    <div className={styles.container}>
        <img className={styles.loading} src={spin} alt="" />
    </div>
  )
}

export default Loading