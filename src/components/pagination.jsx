function Pagination(){
    return (
        <nav aria-label="pagination">
  <ul className="pagination justify-content-center">
    <li className="page-item"><a href="#" className="page-link">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active">
      <a className="page-link" href="#" aria-current="page">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
    )
}
export default Pagination;