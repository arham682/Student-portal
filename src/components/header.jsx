
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
        <h2 className="mb-1">Page Header</h2>

        <Link
          to="/studentform"
          className="btn btn-primary"
          style={{
            backgroundColor: "#387be0",
            borderColor: "#387be0",
          }}
        >
          Add New Student
        </Link>
      </div>
    </div>
  );
}

export default Header;
