"use client"

import SearchInput from "@/components/SearchInput/search.input"
import MainContainer from "@/components/MainContainer/main.container"
import WeatherBox from "@/components/WeatherBox/weather.box"
import { WeatherArray } from "@/@types/types"
import { useEffect, useState } from "react"
import { fetchBackground, fetchLocation, fetchWeather } from "@/utils/utils"

export default function Home() {

  const [location, setLocation] = useState<string | undefined>('')
  const [background, setBackground] = useState('')
  const [weather, setWeather] = useState<WeatherArray>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        fetchLocation(latitude, longitude).then((location) => {
          setLocation(location)
        })
      },
      (error) => {
        console.error('Geolocation error:', error)
        setLoading(false)
      }
    )
  }, [])

  useEffect(() => {
    if (background) return
    fetchBackground().then((background) => {
      setBackground(background)
    })
  }, [background])

  useEffect(() => {
    if (!location) return

    setLoading(true)
    fetchWeather(location).then((weather) => {
      setLoading(false)
      if (weather === 'not found'){
        setWeather([])
        setError(true)
        return
      }
      setWeather(weather)
      setError(false)
    })
  }, [location])

  return (
    <MainContainer background={background}>
      <SearchInput onSearchChange={(search) => { setLocation(search); setLoading(true); }} location={location} loading={loading} />
      <WeatherBox weather={weather} error={error} />
    </MainContainer>
  )
}
