import sprite from '../../utils/svg/sprite.svg';

export const ActiveCard = data => {
  return (
    <li className="dayChoose--item__active">
      <div className="dayChoose--itemCard__active">
        <h1 className="itemCard--title">Today</h1>

        <div className="itemCard--info__active">
          <svg className="itemCard--icon__active">
            <use href={sprite + '#icon-sun'}></use>
          </svg>
          <div className="itemCard--degrees__position">
            <span className="itemCard--degrees itemCard--degrees__max itemCard--degrees__active">
              23°
            </span>
            <span className="itemCard--degrees itemCard--degrees__min itemCard--degrees__active">
              13°
            </span>
          </div>

          <div className="itemCard--textBlock">
            <p className="itemCard--text">Sunny intervals and light winds</p>
          </div>
        </div>
      </div>
    </li>
  );
};
