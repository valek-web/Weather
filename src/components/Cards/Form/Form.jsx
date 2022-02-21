import React, { useState } from 'react'
import styles from './Form.module.css'

const Form = () => {
  const [latitude, setLatitude] = useState(0)
  const changesStateLatitude = (newValue) => {
    let value = newValue.currentTarget.value
    if (Number(value) > 90) {
      alert('Maximum value 90!')
      setLatitude(90)
    } else if (Number(value) < -90) {
      alert('Minimum value -90!')
      setLatitude(-90)
    } else {
      setLatitude(value)
    }
  }

  const [longitude, setLongitude] = useState(0)
  const changesStateLongitude = (newValue) => {
    let value = newValue.currentTarget.value
    if (Number(value) > 180) {
      alert('Maximum value 180!')
      setLongitude(180)
    } else if (Number(value) < -180) {
      alert('Minimum value -180!')
      setLongitude(-180)
    } else {
      setLongitude(value)
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
          value={latitude}
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
          value={longitude}
          placeholder='Longitude'
          onChange={changesStateLongitude}
          className={styles.input_cards}
        />
      </div>
    </form>
  )
}

export default Form
