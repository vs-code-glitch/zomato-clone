import "./Header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon">
              <i className="fa-solid fa-location-dot absolute-center location-pin" />
              <div>Kolkata</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <i className="fa-solid fa-magnifying-glass absolute-center search-icon" />
            <input
              placeholder="Search for restaurant or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/c3e/5a340e92e84ced349a47463407873c3e.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile-img"
            className="profile-img"
          />
          {/* <i className="fa-regular fa-user profile-img absolute-center"/> */}
          <span className="profile-username">Vivek</span>
          <i className="fa-solid fa-caret-down absolute-center profile-options-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
