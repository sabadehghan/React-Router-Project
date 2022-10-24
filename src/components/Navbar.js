import { NavLink } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div id="header">MaktabSharif</div>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contactUs"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/bootCamps"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Boot Camps
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Contact
        </NavLink>
      </div>

      <div>
        <img src="/images/maktab.png" alt="maktab" className="maktab-img" />
      </div>
    </nav>
  );
}
