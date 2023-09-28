import { Link } from "react-router-dom";
import { Container } from "./style";

const Navbar = () => {
  return (
    <Container>
      <nav className="nav-routes">
        <h1 className="logo">Site de Rotas</h1>

        <ul className="list-links">
          <Link className="link" to="/">Home 🏚️</Link>
          <Link className="link" to="/contact">Contact 📞</Link>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
