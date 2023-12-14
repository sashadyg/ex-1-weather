import { getForecastDay } from 'components/utils/js/getForecastDay';

export const ActiveCard = props => {
  const { forecast, currentDay } = props;

  return (
    <li className="dayChoose--item__active">
      <div className="dayChoose--itemCard__active">
        <h1 className="itemCard--title">
          {currentDay === 0
            ? 'Today'
            : getForecastDay(forecast[currentDay]?.date)}
        </h1>

        <div className="itemCard--info__active">
          {/* <svg className="itemCard--icon__active">
            <use href={sprite + '#icon-sun'}></use>
          </svg> */}

          <img
            className="itemCard--icon__active"
            src={forecast[currentDay]?.day?.condition?.icon}
            alt="Icon of weather"
          />
          <div className="itemCard--degrees__position">
            <span className="itemCard--degrees itemCard--degrees__max itemCard--degrees__active">
              {Math.round(forecast[currentDay]?.day?.maxtemp_c)}°
            </span>
            <span className="itemCard--degrees itemCard--degrees__min itemCard--degrees__active">
              {Math.round(forecast[currentDay]?.day?.mintemp_c)}°
            </span>
          </div>

          <div className="itemCard--textBlock">
            <p className="itemCard--text">
              {forecast[currentDay]?.day?.condition?.text}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
