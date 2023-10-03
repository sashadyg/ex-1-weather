import sprite from '../utils/svg/sprite.svg';

export const Card = data => {
  return (
    <li>
      <div className="forecastPerHour--item">
        <p className="forecastPerHour--hour">
          <span className="forecastPerHour--hour__span">14</span>00
        </p>

        <svg className="forecastPerHour--icon">
          <use href={sprite + '#icon-sun'}></use>
        </svg>

        <p className="forecastPerHour--degrees">13°</p>

        <div className="forecastPerHour--precipitation">
          <svg className="forecastPerHour--icon__precipitation">
            <use href={sprite + '#icon-precipitation'}></use>
          </svg>
          <p className="forecastPerHour--precipitation__procent">0%</p>
        </div>
      </div>
    </li>
  );
};
