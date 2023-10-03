import sprite from '../../utils/svg/sprite.svg';

export const CasualCard = data => {
  return (
    <li className="dayChoose--item">
      <div className="dayChoose--itemCard">
        <p className="itemCard--day">Fri 8th</p>

        <div className="itemCard--info">
          <svg className="itemCard--icon">
            <use href={sprite + '#icon-sun'}></use>
          </svg>

          <div className="itemCard--degrees__position">
            <span className="itemCard--degrees itemCard--degrees__max">
              23°
            </span>
            <span className="itemCard--degrees itemCard--degrees__min">
              13°
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
