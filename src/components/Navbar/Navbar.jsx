import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    // Topbar
    <div className="topbar">
      {/* Topbar logo */}
      <div className="topbar-logo">
        <img src={logo} />
        <span>VirtualR</span>
      </div>

      {/* Menu */}
      <input type="checkbox" id="navbar-status" />
      <label className="navbar-toggler" htmlFor="navbar-status">
        <i className="bx bx-menu"></i>
      </label>

      {/* Topbar Navbar */}
      <div className="topbar-navbar">
        <a href="#">Features</a>
        <a href="#">Workflow</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>

        {/* Topbar btn */}
        <div className="topbar-btn">
          <a href="#" className="btn-secondary">
            Sign In
          </a>
          <a href="#" className="btn-primary">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
