import React from 'react'
import Card from './Card/Card'
import styles from './Cards.module.css'
import Form from './Form/Form'

const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.wrapper_card}>
        <Card />
        <Card />
        <Card />
      </div>
      <Form />
    </div>
  )
}

export default Cards
