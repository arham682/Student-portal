import { useState } from "react";
function Studentcard({ name, studentId, id, major, year, gpa, imageUrl, image }) {
  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const currentId = id || studentId;
  const currentImage = image || imageUrl;
  function handleViews() {
    setViews((previousViews) => previousViews + 1);
    setShowDetails(true);
  }
  return (
    <div className="card shadow-sm h-100 student-card" style={{ maxWidth: "320px" }}>
      <img
        src={currentImage}
        className="card-img-top"
        alt={name}
        style={{ height: "230px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-tit]le">{name}</h5>
        <div className="card-text mb-3">
          <p className="mb-1"><strong>ID:</strong> {currentId}</p>
          <p className="mb-1"><strong>Major:</strong> {major}</p>
          <p className="mb-1"><strong>Year:</strong> {year}</p>
          <p className="mb-1"><strong>GPA:</strong> {gpa}</p>
        </div>
        <p className="text-muted mb-3">
          Profile Views: {views}
        </p>
        <div className="d-flex flex-wrap gap-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={handleViews}
          >
            View Profile
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        
        </div>
        {showDetails && (
          <div className="alert alert-light border mt-3">
            <p className="mb-1">Email: {name ? name.toLowerCase().replace(/\s+/g, '') : "user"}@szabist.pk</p>
            <p className="mb-0">Status: Active</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Studentcard;