"use client"

import SearchInput from "@/components/SearchInput/search.input"
import MainContainer from "@/components/MainContainer/main.container"
import WeatherBox from "@/components/WeatherBox/weather.box"
import { getWeather } from "@/services/WeatherService/weather.service"
import { useEffect, useState } from "react"
import { fetchBackground, fetchLocation, fetchWeather } from "@/utils/utils"

export default function Home() {

  const [location, setLocation] = useState('')
  const [background, setBackground] = useState('')
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      fetchLocation(latitude, longitude).then((location) => {
        setLocation(location)
      })
    })
  }, [])

  useEffect(() => {
    if (background != '') return
    fetchBackground().then((background) => {
      setBackground(background)
    })
  }, [background])

  useEffect(() => {
    if (!location) return

    fetchWeather(location).then((weather) => {
      setWeather(weather)
      setLoading(false)
    })
  }, [location])

  return (
    <MainContainer background={background}>
      <SearchInput onSearchChange={(location) => setLocation(location)} location={location} loading={loading} />
      <WeatherBox />
    </MainContainer>
  );
}
