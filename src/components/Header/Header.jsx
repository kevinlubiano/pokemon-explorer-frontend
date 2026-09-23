import Navigation from "../Navigation/Navigation.jsx";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <p className="header__logo">Pokédex App</p>
      <Navigation />
    </header>
  );
}

export default Header;
