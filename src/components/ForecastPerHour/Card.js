import sprite from '../utils/svg/sprite.svg';

export const Card = props => {
  const { hour } = props;

  return (
    <li>
      <div className="forecastPerHour--item">
        <p className="forecastPerHour--hour">
          <span className="forecastPerHour--hour__span">
            {hour?.time?.slice(-5, -3)}
          </span>
          {hour?.time?.slice(-2)}
        </p>

        <img
          className="forecastPerHour--icon"
          src={hour?.condition?.icon}
          alt={hour?.condition?.text}
        />

        <p className="forecastPerHour--degrees">{Math.round(hour?.temp_c)}°</p>

        <div className="forecastPerHour--precipitation">
          <svg className="forecastPerHour--icon__precipitation">
            <use href={sprite + '#icon-precipitation'}></use>
          </svg>
          <p className="forecastPerHour--precipitation__procent">
            {hour?.chance_of_rain}%
          </p>
        </div>
      </div>
    </li>
  );
};
