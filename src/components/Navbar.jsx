import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1>Find Your Job Here 💼</h1>
      <ul>
        <NavLink to="/" className={ ({isActive}) =>  isActive ? 'active' : "not-active"}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/jobs" className={ ({isActive}) =>  isActive ? 'active' : "not-active"}>
          <li>Jobs</li>
        </NavLink>
        <NavLink to="/add-job" className={ ({isActive}) =>  isActive ? 'active' : "not-active"}>
          <li>Add Job</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
