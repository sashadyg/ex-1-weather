import { Card } from './Card';

export const ForecastPerHour = props => {
  const { forecast, currentDay } = props;
  const forecastPerHour = forecast?.forecast?.forecastday[currentDay]?.hour;

  return (
    <div className="container">
      <ul className="forecastPerHour--list">
        {forecastPerHour?.map((hour, index) => {
          return <Card key={index} hour={hour} />;
        })}
      </ul>
    </div>
  );
};
