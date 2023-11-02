import { Header } from './Header/Header';
import { DayChooseSection } from './DayChooseSection/DayChooseSection';
import { ForecastPerHour } from './ForecastPerHour/ForecastPerHour';
import { useState } from 'react';
// import fetchForecast from './fetch/fetchForecast';

export const App = () => {
  const [cityName, setCityName] = useState('');

  function inputCity(city) {
    setCityName(city);
  }

  return (
    <>
      <Header inputCity={inputCity} />

      <main>
        <DayChooseSection cityName={cityName ? cityName : 'London'} />
        <ForecastPerHour />
      </main>
    </>
  );
};
