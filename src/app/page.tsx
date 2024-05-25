'use client'

import SearchInput from "@/components/SearchInput/search.input"
import MainContainer from "@/components/MainContainer/main.container"
import { useState } from 'react'
import WeatherBox from "@/components/WeatherBox/weather.box"

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <MainContainer>
      <SearchInput search={search} onSearchChange={(val) => setSearch(val)} />
      <WeatherBox />
    </MainContainer>
  );
}
