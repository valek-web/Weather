import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import styles from './Cards.module.css'
import Form from './Form/Form'
import axios from 'axios'

const Cards = () => {
  const [latLon, setLatLon] = useState({ latitude: 0, longitude: 0 })
  const [weather, setWeather] = useState('')

  useEffect(() => {
    console.log(`lat: ${latLon.latitude} and lon: ${latLon.longitude}`)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.latitude}&lon=${latLon.longitude}&appid=b735ccd54d864e69dc0bf488eaf83cf8`
      )
      .then((respons) => {
        setWeather(respons)
        console.log(respons)
      })
      .catch((error) => console.error(error))
  }, [latLon])

  return (
    <div className={styles.cards}>
      {!weather ? null : (
        <div className={styles.wrapper_card}>
          {/* {weather.data.weather[0].main} */}
          <Card />
          <Card />
          <Card />
        </div>
      )}
      Enter coordinates:
      <Form latLon={latLon} setLatLon={setLatLon} />
      <button
        className={`${styles.cards_btn} ${styles.third}`}
        onClick={() => alert(0)}
      >
        Check weather
      </button>
    </div>
  )
}

export default Cards
