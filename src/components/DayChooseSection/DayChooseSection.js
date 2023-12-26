// import sprite from '../utils/svg/sprite.svg';
import { ActiveCard } from './ActiveCard/ActiveCard';
import { CasualCard } from './CasualCard/CasualCard';

export const DayChooseSection = props => {
  const forecast = props?.forecast?.forecast?.forecastday;
  const currentDay = props.currentDay;

  const handleClick = e => {
    props.changeCurrentDay(Number(e.currentTarget.getAttribute('index')));
  };

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
        </ul>
      </div>
    </section>
  );
};
