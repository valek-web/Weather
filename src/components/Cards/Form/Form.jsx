import React from 'react'
import styles from './Form.module.css'

const Form = (props) => {
  const changesStateLatitude = (newValue) => {
    let value = newValue.currentTarget.value
    if (Number(value) > 90) {
      alert('Maximum value 90!')
      props.setLatLon({ ...props.latLon, latitude: 90 })
    } else if (Number(value) < -90) {
      alert('Minimum value -90!')
      props.setLatLon({ ...props.latLon, latitude: -90 })
    } else {
      props.setLatLon({ ...props.latLon, latitude: value })
    }
  }

  const changesStateLongitude = (newValue) => {
    let value = newValue.currentTarget.value
    if (Number(value) > 180) {
      alert('Maximum value 180!')
      props.setLatLon({ ...props.latLon, longitude: 180 })
    } else if (Number(value) < -180) {
      alert('Minimum value -180!')
      props.setLatLon({ ...props.latLon, longitude: -180 })
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
