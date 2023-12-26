import { Header } from './Header/Header';
import { DayChooseSection } from './DayChooseSection/DayChooseSection';
import { ForecastPerHour } from './ForecastPerHour/ForecastPerHour';
import { useState, useEffect } from 'react';
import fetchForecast from './fetch/fetchForecast';

export const App = () => {
  const [forecast, setForecast] = useState({});
  const [currentDay, changeCurrentDay] = useState(0);
  let cityName = forecast?.location?.name;

  async function changeCityName(city) {
    setForecast(await getForecast(city));
  }

  async function getForecast(name) {
    const city = name.split(',')[0];
    const forecast = await fetchForecast(city);

    return forecast;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetchForecast('London');
      setForecast(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <Header changeCityName={changeCityName} />

      <main>
        <DayChooseSection
          cityName={cityName ? cityName : 'London'}
          forecast={forecast}
          currentDay={currentDay}
          changeCurrentDay={changeCurrentDay}
        />
        <ForecastPerHour
          cityName={cityName ? cityName : 'London'}
          forecast={forecast}
          currentDay={currentDay}
        />
      </main>
    </>
  );
};
