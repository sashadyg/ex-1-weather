import sprite from './utils/svg/sprite.svg';

export const App = () => {
  return (
    <>
      <header className="header">
        <div className="header--container">
          <p className="header--logo">WEATHER</p>

          <input
            type="text"
            className="header--input"
            placeholder="Enter a city"
          />
        </div>
      </header>

      <main>
        <section className="dayChoose--section">
          <div className="container">
            <h1 className="dayChoose--cityName">Cherkassy</h1>

            <ul className="dayChoose--list">
              <li className="dayChoose--item__active">
                <div className="dayChoose--itemCard__active">
                  <h1 className="itemCard--title">Today</h1>

                  <div className="itemCard--info">
                    <svg className="icon">
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

                    <div className="itemCard--textBlock">
                      <p className="itemCard--text">
                        Sunny intervals and light winds
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
