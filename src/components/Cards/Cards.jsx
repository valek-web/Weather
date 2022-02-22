import React, { useState } from 'react'
import Card from './Card/Card'
import styles from './Cards.module.css'
import Form from './Form/Form'
import axios from 'axios'

const Cards = () => {
  const [latLon, setLatLon] = useState({ latitude: 0, longitude: 0 })
  const [weather, setWeather] = useState('')

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.latitude}&lon=${latLon.longitude}&appid=b735ccd54d864e69dc0bf488eaf83cf8`
      )
      .then((respons) => {
        setWeather([
          {
            temp:
              Math.round(respons.data.main.temp - 273) >= 0
                ? `+${Math.round(respons.data.main.temp - 273)}°C`
                : `${Math.round(respons.data.main.temp - 273)}°C`,
            feels_like: `Feels like: ${
              Math.round(respons.data.main.feels_like - 273) >= 0
                ? `+${Math.round(respons.data.main.temp - 273)}`
                : `${Math.round(respons.data.main.temp - 273)}°C`
            }°C`,
            city: `City: ${respons.data.name}`,
          },

          {
            pressure: `${Math.round(respons.data.main.pressure * 0.75)}mmHg`,
            humidity: `Humidity: ${respons.data.main.humidity}%`,
            description: respons.data.weather[0].description,
          },
          {
            deg: `Direction: ${respons.data.wind.deg}deg`,
            speed: `${respons.data.wind.speed}m/s`,
            сloudiness: `Cloudiness: ${respons.data.clouds.all}%`,
          },
        ])
        console.log(respons)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className={styles.cards}>
      {!weather ? null : (
        <>
          <div className={styles.wrapper_card}>
            <Card
              param_1={weather[1].pressure}
              param_2={weather[1].humidity}
              param_3={weather[1].description}
            />
            <Card
              param_1={weather[0].temp}
              param_2={weather[0].feels_like}
              param_3={weather[0].city}
            />
            <Card
              param_1={weather[2].speed}
              param_2={weather[2].deg}
              param_3={weather[2].сloudiness}
            />
          </div>
        </>
      )}
      Enter coordinates:
      <Form latLon={latLon} setLatLon={setLatLon} setWeather={setWeather} />
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
