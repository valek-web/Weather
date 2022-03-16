import styles from './Form.module.css'
import React from 'react'

const Form = (props) => {
  const changesStateLatitude = (newValue) => {
    props.setWeather('')
    props.setValidate(false)
    let value = newValue.currentTarget.value
    if (Number(value) > 90) {
      props.setValidate('Maximum value 90!')
      props.setLatLon({ ...props.latLon, latitude: 90 })
    } else if (Number(value) < -90) {
      props.setValidate('Minimum value -90!')
      props.setLatLon({ ...props.latLon, latitude: -90 })
    } else if (Number(value[0]) === 0) {
      value.length > 1
        ? props.setLatLon({ ...props.latLon, latitude: value.substr(1) })
        : props.setLatLon({ ...props.latLon, latitude: value })
    } else if (value[0] === '.') {
      props.setValidate('Wrong coordinates! You cannot start with "."')
      props.setLatLon({ ...props.latLon, latitude: value.substr(1) })
    } else {
      props.setLatLon({ ...props.latLon, latitude: value })
    }
  }

  const changesStateLongitude = (newValue) => {
    props.setWeather('')
    let value = newValue.currentTarget.value
    props.setValidate(false)
    if (Number(value) > 180) {
      props.setValidate('Maximum value 180!')
      props.setLatLon({ ...props.latLon, longitude: 180 })
    } else if (Number(value) < -180) {
      props.setValidate('Minimum value -180!')
      props.setLatLon({ ...props.latLon, longitude: -180 })
    } else if (Number(value[0]) === 0) {
      value.length > 1
        ? props.setLatLon({ ...props.latLon, longitude: value.substr(1) })
        : props.setLatLon({ ...props.latLon, longitude: value })
    } else if (value[0] === '.') {
      props.setValidate('Wrong coordinates! You cannot start with "."')
      props.setLatLon({ ...props.latLon, longitude: value.substr(1) })
    } else {
      props.setLatLon({ ...props.latLon, longitude: value })
    }
  }

  return (
    <form className={styles.wrapper_input}>
      <div>
        <label htmlFor='latitude' className={styles.label_cards}>
          Latitude:
        </label>
        <input
          type='number'
          min='-90'
          max='90'
          name='latitude'
          value={props.latLon.latitude}
          placeholder='Latitude'
          onChange={changesStateLatitude}
          className={styles.input_cards}
        />
      </div>
      <div>
        <label htmlFor='longitude' className={styles.label_cards}>
          Longitude:
        </label>
        <input
          type='number'
          min='-180'
          max='180'
          name='longitude'
          value={props.latLon.longitude}
          placeholder='Longitude'
          onChange={changesStateLongitude}
          className={styles.input_cards}
        />
      </div>
    </form>
  )
}

export default Form
