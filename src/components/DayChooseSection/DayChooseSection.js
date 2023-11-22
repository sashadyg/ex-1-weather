// import sprite from '../utils/svg/sprite.svg';
import { ActiveCard } from './ActiveCard/ActiveCard';
import { CasualCard } from './CasualCard/CasualCard';

export const DayChooseSection = props => {
  return (
    <section className="dayChoose--section">
      <div className="container">
        <h1 className="dayChoose--cityName">{props.cityName}</h1>

        <ul className="dayChoose--list">
          <ActiveCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
          <CasualCard />
        </ul>
      </div>
    </section>
  );
};
