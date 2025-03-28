import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";

const Header = () => {
  const [initial, setInitial] = useState("LogIn");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            id="login-btn"
            onClick={() =>
              initial === "LogIn" ? setInitial("LogOut") : setInitial("LogIn")
            }
          >
            {initial}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
