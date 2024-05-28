import React from 'react'
import { render, screen } from '@testing-library/react'
import WeatherBox from '@/components/WeatherBox/weather.box'
import { WeatherArray } from '@/@types/types'

jest.mock('@/components/CurrentTemperature/current.temperature', () => {
    const CurrentTemperature = (props: any) => (
      <div data-testid="current-temperature">{props.label}:{props.temperature}{props.showCelsius ? '°C' : '°F'}</div>
    )
    CurrentTemperature.displayName = 'CurrentTemperature'
    return CurrentTemperature
  })

jest.mock('@/components/Icons/icons', () => ({
  Icons: {
    clearSky: () => <div data-testid="icon-clearSky">Clear Sky Icon</div>,
    fewClouds: () => <div data-testid="icon-fewClouds">Few Clouds Icon</div>,
    scatteredClouds: () => <div data-testid="icon-scatteredClouds">Scattered Clouds Icon</div>,
    brokenClouds: () => <div data-testid="icon-brokenClouds">Broken Clouds Icon</div>,
    showerRain: () => <div data-testid="icon-showerRain">Shower Rain Icon</div>,
    rain: () => <div data-testid="icon-rain">Rain Icon</div>,
    thunderstorm: () => <div data-testid="icon-thunderstorm">Thunderstorm Icon</div>,
    snow: () => <div data-testid="icon-snow">Snow Icon</div>,
    mist: () => <div data-testid="icon-mist">Mist Icon</div>,
  },
}))

const mockWeatherData: WeatherArray = [
  {
    dt_txt: '2024-05-26 15:00:00',
    main: { temp: 20, feels_like: 20, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 50 },
    weather: [{ id: 1, main: 'Clear', description: 'clear sky', icon: '01d' }],
    wind: { speed: 3.5, deg: 200 },
    sys: { country: 'BR', sunrise: 1618317040, sunset: 1618361520 },
    name: 'Rio de Janeiro',
  },
  {
    dt_txt: '2024-05-27 15:00:00',
    main: { temp: 22, feels_like: 21, temp_min: 19, temp_max: 23, pressure: 1013, humidity: 55 },
    weather: [{ id: 1, main: 'Clouds', description: 'few clouds', icon: '02d' }],
    wind: { speed: 4.0, deg: 210 },
    sys: { country: 'BR', sunrise: 1618317040, sunset: 1618361520 },
    name: 'Rio de Janeiro',
  },
  {
    dt_txt: '2024-05-28 15:00:00',
    main: { temp: 24, feels_like: 23, temp_min: 21, temp_max: 25, pressure: 1014, humidity: 60 },
    weather: [{ id: 1, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
    wind: { speed: 4.5, deg: 220 },
    sys: { country: 'BR', sunrise: 1618317040, sunset: 1618361520 },
    name: 'Rio de Janeiro',
  },
]

describe('test for WeatherBox Component', () => {
  it('should render weather data correctly', () => {
    render(<WeatherBox weather={mockWeatherData} error={false} />)

    expect(screen.getByText('HOJE:20°C')).toBeInTheDocument()
    expect(screen.getByText('AMANHÃ:22°C')).toBeInTheDocument()
    expect(screen.getByText('DEPOIS DE AMANHÃ:24°C')).toBeInTheDocument()
  })

  it('should render the appropriate weather icon', () => {
    render(<WeatherBox weather={mockWeatherData} error={false} />)

    expect(screen.getByTestId('icon-clearSky')).toBeInTheDocument()
  })

  it('should display an error message when there is an error', () => {
    render(<WeatherBox weather={[]} error={true} />)

    expect(screen.getByText('Sua busca não retornou resultados')).toBeInTheDocument()
  })
})
