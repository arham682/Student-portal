import { Link } from 'react-router-dom'
function Breadcrumb() {
  return (
    <div className="container mt-1">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-primary px-3 py-2 rounded mb-0">
          <li className="breadcrumb-item">
            <Link to="/" className="text-white text-decoration-none text-white-50 mb-1">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/students" className="text-white text-decoration-none text-white-50 mb-1">
              Students
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/courses" className="text-white text-decoration-none text-white-50 mb-1">
              Courses
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;