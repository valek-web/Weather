import * as axios from 'axios'

const API_KEY = 'b735ccd54d864e69dc0bf488eaf83cf8'

const getWeather = (lat, lon) => {
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
}

export default getWeather
