
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          StudentPortal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/students">
                Students
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/studentform">
                Student Form
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/studentprofile">
                Student Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/reports">
                Reports
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav me-3">
      <form className="hstack gap-2" role="search">
  <input
    className="form-control"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
</form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
