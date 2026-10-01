import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Inicio
          </Link>
        </li>
        <li className="navigation__item">
          <a href="#about" className="navigation__link">
            Acerca de
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
