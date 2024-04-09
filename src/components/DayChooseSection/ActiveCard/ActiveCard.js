import { getForecastDay } from 'components/utils/js/getForecastDay';

export const ActiveCard = props => {
  const { forecast, currentDay } = props;

  return (
    <li className="active-card__item">
      <div className="active-card">
        <h1 className="active-card__title">
          {currentDay === 0
            ? 'Today'
            : getForecastDay(forecast[currentDay]?.date)}
        </h1>

        <div className="active-card__info">
          {/* <svg className="itemCard--icon__active">
            <use href={sprite + '#icon-sun'}></use>
          </svg> */}

          <img
            className="active-card__icon"
            src={forecast[currentDay]?.day?.condition?.icon}
            alt="Icon of weather"
          />
          <div className="degrees__position">
            <span className="degrees active-card__degrees degrees__max">
              {Math.round(forecast[currentDay]?.day?.maxtemp_c)}°
            </span>
            <span className="degrees active-card__degrees ">
              {Math.round(forecast[currentDay]?.day?.mintemp_c)}°
            </span>
          </div>

          <div className="active-card__text-block">
            <p className="active-card__text">
              {forecast[currentDay]?.day?.condition?.text}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
