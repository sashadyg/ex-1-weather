import { useFormik } from 'formik';
import fetchCities from 'components/fetch/fetchCities';
import { useState } from 'react';

export const Header = props => {
  const [citiesName, setCitiesName] = useState([]);

  const formik = useFormik({
    initialValues: {
      cityName: '',
    },
    onSubmit: (values, actions) => {
      actions.resetForm();
    },
  });

  async function handleChange(e) {
    const value = e.target.value.trim();

    if (value <= 3) {
      return;
    }

    const cities = await fetchCities(value);
    setCitiesName(cities);
  }

  function chooseCity(e) {
    const city = e.target.innerHTML;

    props.changeCityName(city);
    setCitiesName([]);
    formik.handleSubmit();
  }

  return (
    <header className="header">
      <div className="header--container">
        <p className="header--logo">WEATHER</p>

        <div className="header--search">
          <form
            className="header--Form"
            onSubmit={e => {
              formik.handleSubmit(e);
            }}
          >
            <input
              id="cityName"
              name="cityName"
              type="text"
              className="header--input"
              placeholder="Enter a city"
              autoComplete="off"
              value={formik.values.cityName}
              onChange={e => {
                formik.handleChange(e);

                handleChange(e);
              }}
            />
            {citiesName ? (
              citiesName.map((city, index) => {
                const { name, country } = city;

                return (
                  <>
                    <button
                      type="submit"
                      key={index}
                      className="header--cities"
                      onClick={chooseCity}
                    >
                      {name}, {country === 'Russia' ? 'swamp' : country}
                      <span className="header--cities__mobile-line" />
                    </button>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};
