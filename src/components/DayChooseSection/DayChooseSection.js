import sprite from '../utils/svg/sprite.svg';
import { ActiveCard } from './ActiveCard/ActiveCard';
import { CasualCard } from './CasualCard/CasualCard';

export const DayChooseSection = data => {
  return (
    <section className="dayChoose--section">
      <div className="container">
        <h1 className="dayChoose--cityName">Cherkassy</h1>

        <ul className="dayChoose--list">
          <ActiveCard />
          <CasualCard />

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
        </ul>
      </div>
    </section>
  );
};
