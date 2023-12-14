export const getForecastDay = date => {
  const day = new Date(date);
  const dayOfWeek = day?.getDay();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return dayNames[dayOfWeek]?.slice(0, 3) + ' ' + day?.getDate() + 'th';
};
