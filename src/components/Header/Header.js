import { Formik, Field, Form } from 'formik';

export const Header = props => {
  return (
    <header className="header">
      <div className="header--container">
        <p className="header--logo">WEATHER</p>

        <Formik
          initialValues={{
            cityName: '',
          }}
          onSubmit={values => {
            props.inputCity(values.cityName);
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
            />
          </Form>
        </Formik>
        {/* <input
          type="text"
          className="header--input"
          placeholder="Enter a city"
        /> */}
      </div>
    </header>
  );
};
