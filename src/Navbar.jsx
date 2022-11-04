import { Link } from "react-router-dom";
import "./Styles.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Notes App
      </Link>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
