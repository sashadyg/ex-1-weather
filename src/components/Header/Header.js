export const Header = () => {
  return (
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
  );
};
