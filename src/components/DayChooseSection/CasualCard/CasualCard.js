import { getForecastDay } from 'components/utils/js/getForecastDay';

export const CasualCard = props => {
  const { forecast, index } = props;

  return (
    <li
      className="day-choose__item"
      onClick={props?.onClick}
      index={props.index}
    >
      <div className="casual-card">
        <p className="casual-card__day">
          {index === 0 ? 'Today' : getForecastDay(forecast[index]?.date)}
        </p>

        <div className="casual-card__info">
          <img
            className="casual-card__icon"
            src={forecast[index]?.day?.condition?.icon}
            alt="Icon of weather"
          />

          <div className="degrees__position">
            <span className="degrees degrees__max">
              {Math.round(forecast[index]?.day?.maxtemp_c)}°
            </span>
            <span className="degrees">
              {Math.round(forecast[index]?.day?.mintemp_c)}°
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
