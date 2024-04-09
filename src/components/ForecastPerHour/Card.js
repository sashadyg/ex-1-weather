import sprite from '../utils/svg/sprite.svg';

export const Card = props => {
  const { hour } = props;

  return (
    <li>
      <div className="forecast__item">
        <p className="forecast-item__hour">
          <span className="forecast-item__hour_span">
            {hour?.time?.slice(-5, -3)}
          </span>
          {hour?.time?.slice(-2)}
        </p>

        <img
          className="forecast-item__icon"
          src={hour?.condition?.icon}
          alt={hour?.condition?.text}
        />

        <p className="forecast-item__degrees">{Math.round(hour?.temp_c)}°</p>

        <div className="forecast-item__precipitation">
          <svg className="forecast-item__icon_precipitation">
            <use href={sprite + '#icon-precipitation'}></use>
          </svg>
          <p className="forecast-item__precipitation_procent">
            {hour?.chance_of_rain}%
          </p>
        </div>
      </div>
    </li>
  );
};
