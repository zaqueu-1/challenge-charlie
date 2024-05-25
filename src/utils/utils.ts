import { getLocation } from "@/services/GeolocationService/geolocation.service"
import { getBackground } from "@/services/BackgroundService/background.service"
import { getWeather } from "@/services/WeatherService/weather.service"

const fetchBackground = async () => {
    try {
      const res = await getBackground()
      if (res) {
        return res.images[0].url
      }
    } catch (error) {
      console.log('error', error)
    }
}

const fetchLocation = async (lat: number, lon: number) => {
  try {
    const res = await getLocation(lat, lon)
    if (res) {
      return res.results[0].components.city
    }
  } catch (error) {
    console.log('error', error)
  }
}

const fetchWeather = async (location: string) => {
  try {
    const res = await getWeather(location)
    if (res) {
      return res
    }
  } catch (error) {
    console.log('error', error)
  }
}

export { fetchBackground, fetchLocation, fetchWeather }