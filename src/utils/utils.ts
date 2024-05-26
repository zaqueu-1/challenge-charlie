import { getLocation } from "@/services/GeolocationService/geolocation.service"
import { getBackground } from "@/services/BackgroundService/background.service"
import { getWeather } from "@/services/WeatherService/weather.service"
import { WeatherArray } from "@/@types/types"

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
      return res.results[0].components.city + ', ' + res.results[0].components.state
    }
  } catch (error) {
    console.log('error', error)
  }
}

const fetchWeather = async (location: string) => {
  try {
    const res = await getWeather(location)
    if (res.list) {
      return res.list
    }
  } catch (error) {
    console.log('error', error)
  }
}

const handleTemperature = (temp: number, unitInCelsius: boolean) => {
  if (unitInCelsius) {
    return temp
  } else {
    return (temp * 1.8) + 32
  }
}

const handleBackgroundColor = (temperature: number | null) => {
  if (temperature === null) {
    return 'linear-gradient(to bottom, rgba(209, 213, 219, 0.9), rgba(209, 213, 219, 0.9))'
  }

  if (temperature < 15) {
    const intensity = Math.floor((temperature / 15) * 200)
    return `linear-gradient(to bottom, rgba(56, 189, 248, 0.9), rgba(56, 189, 248, ${0.7 + intensity / 500}))`
  } else if (temperature >= 15 && temperature <= 35) {
    const intensity = Math.floor(((temperature - 15) / 20) * 200)
    return `linear-gradient(to bottom, rgba(250, 204, 21, 0.9), rgba(250, 204, 21, ${0.7 + intensity / 500}))`
  } else if (temperature > 35) {
    const intensity = Math.floor(((temperature - 35) / 15) * 200)
    return `linear-gradient(to bottom, rgba(248, 113, 113, 0.9), rgba(248, 113, 113, ${0.7 + intensity / 500}))`
  } else {
    return 'linear-gradient(to bottom, rgba(209, 213, 219, 0.9), rgba(209, 213, 219, 0.9))'
  }
}

const findNextDaysWeather = (weathers: WeatherArray) => {
  if (weathers.length === 0) return []

  const initialDate = new Date(weathers[0].dt_txt)

  const targetDate1 = new Date(initialDate)
  targetDate1.setDate(initialDate.getDate() + 1)
  const targetDate2 = new Date(initialDate)
  targetDate2.setDate(initialDate.getDate() + 2)

  const formattedTargetDate1 = targetDate1.toISOString().slice(0, 10) + " " + targetDate1.toTimeString().slice(0, 8)
  const formattedTargetDate2 = targetDate2.toISOString().slice(0, 10) + " " + targetDate2.toTimeString().slice(0, 8)

  const weather1 = weathers.find(weather => weather.dt_txt === formattedTargetDate1)
  const weather2 = weathers.find(weather => weather.dt_txt === formattedTargetDate2)

  return [weather1, weather2].filter(Boolean) as WeatherArray
}

export { fetchBackground, fetchLocation, fetchWeather, handleTemperature , handleBackgroundColor, findNextDaysWeather }