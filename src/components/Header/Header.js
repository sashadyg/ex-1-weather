import { Formik, Field, Form } from 'formik';
import fetchCities from 'components/fetch/fetchCities';
import { useState } from 'react';

export const Header = props => {
  const [citiesName, setCitiesName] = useState([]);

  async function handleChange(e) {
    const value = e.target.value.trim();

    if (value <= 3) {
      return;
    }

    const cities = await fetchCities(value);
    setCitiesName(cities);
  }

  return (
    <header className="header">
      <div className="header--container">
        <p className="header--logo">WEATHER</p>

        <div className="header--search">
          <Formik
            initialValues={{
              cityName: props.cityName,
            }}
            onSubmit={values => {
              console.log(values);
            }}
          >
            <Form className="header--Form">
              <Field
                id="cityName"
                name="cityName"
                type="text"
                className="header--input"
                placeholder="Enter a city"
                autoComplete="off"
                onChange={handleChange}
              />
            </Form>
          </Formik>

          <ul>
            {citiesName ? (
              citiesName.map(city => {
                const { name, country } = city;

                return (
                  <li key={name} className="header--cities">
                    {name}, {country === 'Russia' ? 'shit' : country}
                  </li>
                );
              })
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
