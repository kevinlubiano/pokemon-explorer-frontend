import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">No encontramos esa página.</p>
      <Link to="/" className="not-found__link">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
