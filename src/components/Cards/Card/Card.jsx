import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.top_info}>{`${props.param_3}`}</div>
      <div className={styles.center_info}>{`${props.param_1}`}</div>
      <div className={styles.bottom_info}>{`${props.param_2}`}</div>
    </div>
  )
}

export default Card
