function Footer() {
  return (
    <footer className="bg-primary text-white pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link text-decoration-none text-white-50 mb-1">Dashboard</a></li>
              <li><a href="#" className="footer-link text-decoration-none text-white-50 mb-1">Students</a></li>
              <li><a href="#" className="footer-link text-decoration-none text-white-50 mb-1">Courses</a></li>
              <li><a href="#" className="footer-link text-decoration-none text-white-50 mb-1">Reports</a></li>
            </ul>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Contact Information</h5>
            <p className="text-white-50 mb-1">
              Email: support@szabist.pk
            </p>

            <p className="text-white-50">
              Location: Karachi, Pakistan
            </p>
          </div>
        </div>

        <hr />
        <p className="text-center text-white-50 mb-0">
          © 2026 StudentPortal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;