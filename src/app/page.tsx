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

  useEffect(() => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        fetchLocation(latitude, longitude).then((location) => {
          setLocation(location)
        }).catch(() => {
          setLoading(false)
        })
      },
      (error) => {
        console.error(error)
        setLoading(false)
      }
    )
  }, [])

  useEffect(() => {
    if (background) return
    fetchBackground().then((background) => {
      setBackground(background)
    }).catch(() => {
      setLoading(false)
    })
  }, [background])

  useEffect(() => {
    if (!location) return

    fetchWeather(location).then((weather) => {
      setWeather(weather)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [location])

  return (
    <MainContainer background={background}>
      <SearchInput onSearchChange={(location) => [setLocation(location), setLoading(true)]} location={location} loading={loading} />
      <WeatherBox weather={weather} />
    </MainContainer>
  )
}
