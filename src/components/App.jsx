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
        <div className="container">
          <section className="dayChoose--section">
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
                      <p className="itemCard--degrees itemCard--degrees__max">
                        19°
                      </p>
                      <p className="itemCard--degrees itemCard--degrees__min">
                        17°
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};
