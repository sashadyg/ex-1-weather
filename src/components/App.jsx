import { Header } from './Header/Header';
import { DayChooseSection } from './DayChooseSection/DayChooseSection';
import { ForecastPerHour } from './ForecastPerHour/ForecastPerHour';

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <DayChooseSection />
        <ForecastPerHour />
      </main>
    </>
  );
};
