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

  const setSelected = (value) => {
    setWeather('')
    setSelectedOption(value)
    switch (value.value) {
      case 'moscow':
        setLatLon({ latitude: 55.7558, longitude: 37.6173 })
        break
      case 'voronezh':
        setLatLon({ latitude: 51.6683, longitude: 39.1919 })
        break
      case 'lipetsk':
        setLatLon({ latitude: 52.6122, longitude: 39.5981 })
        break
      case 'chelyabinsk':
        setLatLon({ latitude: 55.1644, longitude: 61.4368 })
        break
      case 'sochi':
        setLatLon({ latitude: 43.6028, longitude: 39.7342 })
        break
      case 'novosibirsk':
        setLatLon({ latitude: 54.9833, longitude: 82.8964 })
        break
      case 'vladivostok':
        setLatLon({ latitude: 43.1332, longitude: 131.9113 })
        break
      case 'ekaterinburg':
        setLatLon({ latitude: 56.8431, longitude: 60.6454 })
        break
      case 'petersburg':
        setLatLon({ latitude: 59.9311, longitude: 30.3609 })
        break
      case 'nizhnyNovgorod':
        setLatLon({ latitude: 56.3269, longitude: 44.0059 })
        break
      case 'kazan':
        setLatLon({ latitude: 55.7879, longitude: 49.1233 })
        break
      case 'samara':
        setLatLon({ latitude: 53.2038, longitude: 50.1606 })
        break
      case 'omsk':
        setLatLon({ latitude: 54.9914, longitude: 73.3645 })
        break
      case 'ufa':
        setLatLon({ latitude: 54.7348, longitude: 55.9579 })
        break
      case 'belgorod':
        setLatLon({ latitude: 50.5997, longitude: 36.5983 })
        break
      case 'krasnoyarsk':
        setLatLon({ latitude: 56.0153, longitude: 92.8932 })
        break
      case 'perm':
        setLatLon({ latitude: 58.0092, longitude: 56.227 })
        break
      case 'volgograd':
        setLatLon({ latitude: 48.708, longitude: 44.5133 })
        break
      case 'saratov':
        setLatLon({ latitude: 51.5462, longitude: 46.0154 })
        break
      case 'tyumen':
        setLatLon({ latitude: 57.1553, longitude: 65.5619 })
        break
      case 'irkutsk':
        setLatLon({ latitude: 52.2855, longitude: 104.289 })
        break
      case 'yaroslavl':
        setLatLon({ latitude: 57.6261, longitude: 39.8845 })
        break
      case 'tomsk':
        setLatLon({ latitude: 56.4884, longitude: 84.948 })
        break
      case 'ryazan':
        setLatLon({ latitude: 54.6095, longitude: 39.7126 })
        break
      case 'tver':
        setLatLon({ latitude: 56.8587, longitude: 35.9176 })
        break
      case 'pechora':
        setLatLon({ latitude: 65.1476, longitude: 57.228 })
        break
      default:
        setLatLon({ latitude: 0, longitude: 0 })
    }
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
          onChange={setSelected}
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
