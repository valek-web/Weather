import axios from 'axios'

const getWeatherAPI = (latLon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.latitude}&lon=${latLon.longitude}&appid=b735ccd54d864e69dc0bf488eaf83cf8`
    )
    .then((respons) => respons)
}

export default getWeatherAPI
