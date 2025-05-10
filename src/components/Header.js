import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [initial, setInitial] = useState("LogOut");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img className="logo w-30 h-30" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items flex ">
        <ul className="head-list flex p-4 my-3 ml-4">
          <li className=" font-bold p-2 m-2">
            {" "}
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="font-bold p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold p-2 m-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" font-bold p-2 m-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold p-2 m-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold p-2 m-2 text-xl">
            <Link to="/cart">🛒 ({cartItems.length})</Link>
          </li>
          {initial === "LogOut" && (
            <li className="font-bold p-2 m-2">{loggedInUser}</li>
          )}
        </ul>
        <button
          className=" font-bold px-2 mx-2 my-11 bg-orange-300 hover:bg-amber-600"
          id="login-btn"
          onClick={() =>
            initial === "LogIn" ? setInitial("LogOut") : setInitial("LogIn")
          }
        >
          {initial}
        </button>
      </div>
    </div>
  );
};

export default Header;
