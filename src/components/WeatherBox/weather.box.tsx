import { handleTemperature, handleBackgroundColor } from '@/utils/utils'
import { Icons } from '@/components/Icons/icons'
import React, { useState } from 'react'
import { WeatherData } from '@/@types/types'

interface WeatherProps {
    weather: WeatherData | undefined
}

function WeatherBox(props: WeatherProps) {
  const { weather } = props

  const [showCelsius, setShowCelsius] = useState(true)

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

  return (
    <div className='w-full max-w-[850px] min-w-[370px]'>
        <div className="flex h-[440px] text-white" style={{ background: handleBackgroundColor(weather?.main?.temp || null)}}>
            {weather?.main && (
                <div className="flex flex-col gap-2 items-center justify-around w-full md:flex-row md:items-start md:justify-between">
                    <div className='flex items-center md:h-full justify-center w-[250px] md:w-[50%]'>
                        {handleIcon(weather?.weather[0]?.icon)}
                    </div>
                    <div className='flex md:flex-col gap-2 md:gap-6 items-center justify-between md:items-start px-[1.2rem] w-[90%] md:w-[50%] md:mt-[1.2rem]'>
                        <div className="flex flex-col items-start justify-start">
                            <span className='md:text-[1.5rem] text-[1rem]'>HOJE</span>
                            <div className='flex flex-col md:items-center items-start justify-center md:flex-row'>
                                <span className='md:text-[1.8rem] text-[1.2rem]'>
                                    {handleTemperature(weather?.main?.temp, showCelsius)}
                                    {showCelsius ? '°C' : '°F'}
                                </span>
                                <button className='md:ml-2 text-xs italic' onClick={() => [setShowCelsius(!showCelsius), handleTemperature(weather?.main?.temp, showCelsius)]}>
                                    {showCelsius ? 'Fahrenheit' : 'Celsius'}
                                </button>
                            </div>
                        </div>

                        <span className='md:text-[1.8rem] text-[1.2rem] text-center capitalize'>{weather?.weather[0]?.description}</span>

                        <div className="flex flex-col items-start justify-between md:text-[1.5rem] text-[1rem]">
                            <span>{'Vento: ' + weather?.wind?.speed + ' km/h'}</span>
                            <span>{'Umidade: ' + weather?.main?.humidity + '%'}</span>
                            <span>{'Pressão: ' + weather?.main?.pressure + 'hPa'}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default WeatherBox
