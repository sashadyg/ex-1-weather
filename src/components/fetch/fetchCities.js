import Notiflix from 'notiflix';

export default async function fetchCities(city) {
  const BASE_URL = 'https://api.weatherapi.com/v1/search.json';
  const KEY = 'c0541c6f753a4a9686d130334232509';

  try {
    const response = await fetch(`${BASE_URL}?key=${KEY}&q=${city}`);
    if (response.status === 404) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
