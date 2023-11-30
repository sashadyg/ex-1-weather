import { Card } from './Card';

export const ForecastPerHour = props => {
  const { forecast } = props;

  return (
    <div className="container">
      <ul className="forecastPerHour--list">
        <Card />
      </ul>
    </div>
  );
};
