import React, { useState } from 'react'
import Card from './Card/Card'
import styles from './Cards.module.css'
import Form from './Form/Form'
import getWeatherAPI from '../../api/api'
import Select from 'react-select'
import { options } from '../../city'

const Cards = () => {
  const [latLon, setLatLon] = useState({ latitude: 0, longitude: 0 })
  const [weather, setWeather] = useState('')
  const [validate_form, setValidate] = useState(false)

  const getWeather = () => {
    setValidate(false)
    getWeatherAPI(latLon)
      .then((respons) => {
        setWeather([
          {
            info_center: `${Math.round(respons.data.main.pressure * 0.75)}mmHg`,
            info_bottom: `Humidity: ${respons.data.main.humidity}%`,
            info_top: respons.data.weather[0].description,
          },
          {
            info_center:
              Math.round(respons.data.main.temp - 273) >= 0
                ? `+${Math.round(respons.data.main.temp - 273)}°C`
                : `${Math.round(respons.data.main.temp - 273)}°C`,
            info_bottom: `Feels like: ${
              Math.round(respons.data.main.feels_like - 273) >= 0
                ? `+${Math.round(respons.data.main.temp - 273)}`
                : `${Math.round(respons.data.main.temp - 273)}°C`
            }°C`,
            info_top: !respons.data.name
              ? 'City: No data'
              : `City: ${respons.data.name}`,
          },
          {
            info_center: `${respons.data.wind.speed}m/s`,
            info_bottom: `Direction: ${respons.data.wind.deg}deg`,
            info_top: `Cloudiness: ${respons.data.clouds.all}%`,
          },
        ])
        console.log(respons)
      })
      .catch((error) => console.error(error))
  }

  let cards_map = () =>
    weather.map((params) => (
      <Card
        param_1={params.info_center}
        param_2={params.info_bottom}
        param_3={params.info_top}
      />
    ))

  const [selectedOption, setSelectedOption] = useState(null)

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #497ede',
      color: state.isSelected ? '#fff' : '#497ede',
      padding: 5,
    }),
    singleValue: (provided, state) => {
      return { ...provided }
    },
  }

  return (
    <div className={styles.cards}>
      {!weather ? null : (
        <div className={styles.wrapper_card}>{cards_map()}</div>
      )}
      Enter coordinates or select a city:
      {!!validate_form ? (
        <div className={styles.validate_form_info}>{validate_form}</div>
      ) : null}
      <div className={styles.wrapper_select}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          styles={customStyles}
        />
      </div>
      <Form
        latLon={latLon}
        setLatLon={setLatLon}
        setWeather={setWeather}
        setValidate={setValidate}
      />
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
