import { getForecastDay } from 'components/utils/js/getForecastDay';

export const CasualCard = props => {
  const { forecast, index, currentDay } = props;

  return (
    <li
      className="dayChoose--item"
      onClick={props?.onClick}
      index={props.index}
    >
      <div
        className={
          index === currentDay
            ? 'dayChoose--itemCard dayChoose--itemCard__borderTop'
            : 'dayChoose--itemCard'
        }
      >
        <p className="itemCard--day">
          {index === 0 ? 'Today' : getForecastDay(forecast[index]?.date)}
        </p>

        <div className="itemCard--info">
          <img
            className="itemCard--icon"
            src={forecast[index]?.day?.condition?.icon}
            alt="Icon of weather"
          />

          <div className="itemCard--degrees__position">
            <span className="itemCard--degrees itemCard--degrees__max">
              {Math.round(forecast[index]?.day?.maxtemp_c)}°
            </span>
            <span className="itemCard--degrees itemCard--degrees__min">
              {Math.round(forecast[index]?.day?.mintemp_c)}°
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
