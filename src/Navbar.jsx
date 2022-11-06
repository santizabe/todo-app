import { Link, useNavigate } from "react-router-dom";
import { useAuth } from './contexts/AuthContext'
import "./Styles.css";

function Navbar() {
  const navigate = useNavigate()
  const { logout, currentUser } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      navigate('/')
    } catch {
      console.log('error trying to logout')
    }
  }

  return (
  <nav className="nav">
    <Link to="/" className="site-title">
        Notes App
    </Link>
    { currentUser ?
      <ul>
        <li>
          {currentUser?.email}
        </li>
        <li>
          <button onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
      :
      <ul>
        <li> 
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    }
  </nav>
  );
}

export default Navbar;
