import { Header } from './Header/Header';
import { DayChooseSection } from './DayChooseSection/DayChooseSection';
import { ForecastPerHour } from './ForecastPerHour/ForecastPerHour';
import { useState } from 'react';
import fetchForecast from './fetch/fetchForecast';

export const App = () => {
  const [cityName, setCityName] = useState('London');
  const [forecast, setForecast] = useState({});

  async function changeCityName(city) {
    setCityName(city);
    setForecast(await getForecast(city));
  }

  async function getForecast(name) {
    const city = name.split(',')[0];
    const forecast = await fetchForecast(city);

    return forecast;
  }

  return (
    <>
      <Header changeCityName={changeCityName} />

      <main>
        <DayChooseSection cityName={cityName} />
        <ForecastPerHour cityName={cityName ? cityName : 'London'} />
      </main>
    </>
  );
};
