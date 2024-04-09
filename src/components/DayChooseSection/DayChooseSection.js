// import sprite from '../utils/svg/sprite.svg';
import { ActiveCard } from './ActiveCard/ActiveCard';
import { CasualCard } from './CasualCard/CasualCard';

export const DayChooseSection = props => {
  const forecast = props?.forecast?.forecast?.forecastday;
  const currentDay = props.currentDay;
  const widhtOfScreen = window.innerWidth;

  const handleClick = e => {
    props.changeCurrentDay(Number(e.currentTarget.getAttribute('index')));
  };

  return (
    <section className="day-choose">
      <div className="container">
        <h1 className="day-choose__city-title">{props.cityName}</h1>

        <ul className="day-choose__list">
          {forecast?.map((day, index) =>
            index === currentDay && widhtOfScreen > 599 ? (
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
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};
