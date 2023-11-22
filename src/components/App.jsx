import { Header } from './Header/Header';
import { DayChooseSection } from './DayChooseSection/DayChooseSection';
import { ForecastPerHour } from './ForecastPerHour/ForecastPerHour';
import { useState, useEffect } from 'react';
import fetchForecast from './fetch/fetchForecast';

export const App = () => {
  let cityName = '';
  const [forecast, setForecast] = useState({});

  async function changeCityName(city) {
    cityName = city;
    setForecast(await getForecast(city));
  }

  async function getForecast(name) {
    const city = name.split(',')[0];
    const forecast = await fetchForecast(city);

    return forecast;
  }

  useEffect(() => {
    async function fetchData() {
      setForecast(await getForecast('London'));
    }

    fetchData();
  }, []);

  return (
    <>
      <Header changeCityName={changeCityName} />

      <main>
        <DayChooseSection cityName={cityName ? cityName : 'London'} />
        <ForecastPerHour cityName={cityName ? cityName : 'London'} />
      </main>
    </>
  );
};
