import React, { useState } from 'react'
import Card from './Card/Card'
import styles from './Cards.module.css'
import Form from './Form/Form'

const Cards = () => {
  const [weatherBool, setWeatherBool] = useState(false)

  const getWeather = () => {
    setWeatherBool(true)
  }

  return (
    <div className={styles.cards}>
      {!weatherBool ? null : (
        <div className={styles.wrapper_card}>
          <Card />
          <Card />
          <Card />
        </div>
      )}
      Enter coordinates:
      <Form />
      <button
        className={`${styles.cards_btn} ${styles.third}`}
        onClick={getWeather}
      >
        Check weather
      </button>
    </div>
  )
}

export default Cards
