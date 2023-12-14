// import sprite from '../utils/svg/sprite.svg';
import { ActiveCard } from './ActiveCard/ActiveCard';
import { CasualCard } from './CasualCard/CasualCard';
import { useState } from 'react';

export const DayChooseSection = props => {
  const [currentDay, changeCurrentDay] = useState(0);
  const forecast = props?.forecast?.forecast?.forecastday;

  const handleClick = e => {
    // e.preventDefault();

    changeCurrentDay(Number(e.currentTarget.getAttribute('index')));
  };

  // console.log(forecast);

  return (
    <section className="dayChoose--section">
      <div className="container">
        <h1 className="dayChoose--cityName">{props.cityName}</h1>

        <ul className="dayChoose--list">
          {forecast?.map((day, index) =>
            index === currentDay ? (
              <ActiveCard
                forecast={forecast}
                currentDay={currentDay}
                key={index}
              />
            ) : (
              <CasualCard
                key={index}
                onClick={handleClick}
                index={index}
                forecast={forecast}
                currentDay={currentDay}
              />
            )
          )}
          {/* <ActiveCard forecast={forecast} />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard /> */}
        </ul>
      </div>
    </section>
  );
};
