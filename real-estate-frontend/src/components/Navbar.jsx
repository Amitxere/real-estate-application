import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <div
          className="navbar-logo"
          onClick={() => navigate("/")}
        >
          <div className="logo-icon">
            🏠
          </div>

          <div className="logo-text">
            <strong>RealEstate</strong>
            <span>Find Your Perfect Place</span>
          </div>
        </div>


        {/* NAVIGATION */}

        <nav className="navbar-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/buy"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Buy
          </NavLink>

          <NavLink
            to="/rent"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Rent
          </NavLink>

          <NavLink
            to="/sell"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Sell
          </NavLink>

          <NavLink
            to="/agents"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Agents
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>


        {/* RIGHT SIDE */}

        <div className="navbar-actions">

          <button
            className="favorite-nav-button"
            onClick={() => navigate("/favorites")}
            title="Favorites"
          >
            ♡
            <span className="favorite-count">0</span>
          </button>


          <button
            className="login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>


          <button
            className="register-button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;