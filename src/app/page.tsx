"use client"

import SearchInput from "@/components/SearchInput/search.input"
import MainContainer from "@/components/MainContainer/main.container"
import WeatherBox from "@/components/WeatherBox/weather.box"
import { getWeather } from "@/services/WeatherService/weather.service"
import { useEffect, useState } from "react"
import { getLocation } from "@/services/GeolocationService/geolocation.service"

export default function Home() {

  const [location, setLocation] = useState('')

  useEffect(() => {
    const fetchLocation = async (lat: number, lon: number) => {
      try {
        const res = await getLocation(lat, lon)
        if (res) {
          setLocation(res.results[0].components.city)
        }
      } catch (error) {
        console.log('error', error)
      }
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      fetchLocation(latitude, longitude)
    })
  }, [])

  useEffect(() => {
    if (!location) return
    getWeather(location)
  }, [location])

  return (
    <MainContainer>
      <SearchInput onSearchChange={(location) => setLocation(location)} />
      <WeatherBox />
    </MainContainer>
  );
}
