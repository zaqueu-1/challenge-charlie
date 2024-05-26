import { handleTemperature, handleBackgroundColor, findNextDaysWeather } from '@/utils/utils'
import { Icons } from '@/components/Icons/icons'
import React, { useEffect, useState } from 'react'
import { WeatherArray } from '@/@types/types'
import CurrentTemperature from '@/components/CurrentTemperature/current.temperature'

interface WeatherProps {
    weather: WeatherArray
    error: boolean
}

function WeatherBox(props: WeatherProps) {
  const { weather, error } = props

  const [showCelsius, setShowCelsius] = useState(true)
  const [nextDaysWeather, setNextDaysWeather] = useState<WeatherArray>([])
  const currentWeather = weather ? weather[0] : null

  const handleIcon = (icon: string) => {
    switch (icon) {
      case '01d':
      case '01n':
        return <Icons.clearSky className='w-fit h-auto' />;
      case '02d':
      case '02n':
        return <Icons.fewClouds className='w-fit h-auto p-10' />;
      case '03d':
      case '03n':
        return <Icons.scatteredClouds className='w-fit h-auto' />;
      case '04d':
      case '04n':
        return <Icons.brokenClouds className='w-fit h-auto p-8 mb-8' />;
      case '09d':
      case '09n':
        return <Icons.showerRain className='w-fit h-auto p-6' />;
      case '10d':
      case '10n':
        return <Icons.rain className='w-fit h-auto p-8' />;
      case '11d':
      case '11n':
        return <Icons.thunderstorm className='w-fit h-auto p-8 mt-8' />;
      case '13d':
      case '13n':
        return <Icons.snow className='w-fit h-auto p-10' />;
      case '50d':
      case '50n':
        return <Icons.mist className='w-fit h-auto p-10' />;
      default:
        return <Icons.clearSky className='w-fit' />;
    }
  }

  useEffect(() => {
    if (!weather) {
      setNextDaysWeather([])
      return
    }
    setNextDaysWeather(findNextDaysWeather(weather))
  }, [weather])

  return (
    <div className='w-full max-w-[850px] min-w-[370px]'>
        <div className="flex h-[440px] relative drop-shadow" style={{ background: handleBackgroundColor(currentWeather?.main?.temp || null)}}>
            {error && <span className='text-center text-[1.2rem] md:text-[1.8rem] font-bold absolute left-0 right-0 top-0 bottom-0 mt-[2rem] text-[rgb(var(--secondary))]'>Sua busca não retornou resultados</span>}
            {currentWeather?.main && (
                <div className="flex flex-col gap-2 items-center justify-around w-full md:flex-row md:items-start md:justify-between">
                    <div className='flex items-center md:h-full justify-center w-[250px] md:w-[50%]'>
                        {handleIcon(currentWeather?.weather[0]?.icon)}
                    </div>
                    <div className='flex md:flex-col gap-2 md:gap-6 items-center justify-between md:items-start px-[1.2rem] w-[90%] md:w-[50%] md:mt-[1.2rem]'>
                        <CurrentTemperature temperature={currentWeather?.main?.temp} label={'HOJE'} showCelsius={showCelsius} setShowCelsius={setShowCelsius} />

                        <span className='md:text-[1.8rem] text-[1.2rem] text-center capitalize'>{currentWeather?.weather[0]?.description}</span>

                        <div className="flex flex-col items-start justify-between md:text-[1.5rem] text-[1rem]">
                            <span>{'Vento: ' + currentWeather?.wind?.speed + ' km/h'}</span>
                            <span>{'Umidade: ' + currentWeather?.main?.humidity + '%'}</span>
                            <span>{'Pressão: ' + currentWeather?.main?.pressure + 'hPa'}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div className='flex items-center justify-start md:justify-end h-[150px] drop-shadow' style={{ background: handleBackgroundColor(nextDaysWeather[0]?.main?.temp || null)}}>
            <div className='px-[2.5rem] md:px-[1.2rem] w-[90%] md:w-[50%]'>
                {nextDaysWeather[0]?.main && <CurrentTemperature temperature={nextDaysWeather[0]?.main?.temp} label={'AMANHÃ'} showCelsius={showCelsius} setShowCelsius={setShowCelsius} />}
            </div>
        </div>
        <div className='flex items-center justify-start md:justify-end h-[140px] drop-shadow' style={{ background: handleBackgroundColor(nextDaysWeather[1]?.main?.temp || null)}}>
            <div className='px-[2.5rem] md:px-[1.2rem] w-[90%] md:w-[50%]'>
                {nextDaysWeather[1]?.main && <CurrentTemperature temperature={nextDaysWeather[1]?.main?.temp} label={'DEPOIS DE AMANHÃ'} showCelsius={showCelsius} setShowCelsius={setShowCelsius} />}
            </div>
        </div>
    </div> 
  )
}

export default WeatherBox
