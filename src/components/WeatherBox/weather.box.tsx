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
        return <Icons.clearSky className='w-fit' />;
      case '02d':
      case '02n':
        return <Icons.fewClouds className='w-fit p-8' />;
      case '03d':
      case '03n':
        return <Icons.scatteredClouds className='w-fit' />;
      case '04d':
      case '04n':
        return <Icons.brokenClouds className='w-fit p-8 mb-8' />;
      case '09d':
      case '09n':
        return <Icons.showerRain className='w-fit p-6' />;
      case '10d':
      case '10n':
        return <Icons.rain className='w-fit p-8' />;
      case '11d':
      case '11n':
        return <Icons.thunderstorm className='w-fit p-8 mt-8' />;
      case '13d':
      case '13n':
        return <Icons.snow className='w-fit p-10' />;
      case '50d':
      case '50n':
        return <Icons.mist className='w-fit p-10' />;
      default:
        return <Icons.clearSky className='w-fit' />;
    }
  }

  return (
    <div className='w-full max-w-[50%]'>
        <div className="flex h-[400px] w-full p-4 text-white" style={{ backgroundColor: handleBackgroundColor(weather?.main?.temp || null)}}>
            {weather?.main && (
                <div className="flex gap-2 items-start justify-start w-full">
                    <div className='flex items-center justify-center w-[60%] h-full p-10'>
                        {handleIcon(weather?.weather[0]?.icon)}
                    </div>
                    <div className='flex flex-col gap-4 items-start justify-between w-[40%]'>
                        <div className="flex flex-col gap-2 items-start justify-start text-2xl">
                            <span>HOJE</span>
                            <span>{handleTemperature(weather?.main?.temp, showCelsius)}</span>
                        </div>

                        <span className='text-3xl capitalize'>{weather?.weather[0]?.description}</span>

                        <div className="flex flex-col items-start justify-between text-2xl">
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
