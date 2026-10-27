function StudentList() {

  const students = [
    {
      name: 'Arham Khan',
      id: '248256',
      major: 'Computer Science',
      year: '2nd',
      GPA: 3
    },
    {
      name: 'Arham Khan',
      id: '248256',
      major: 'Computer Science',
      year: '2nd',
      GPA: 3
    },
     {
      name: 'Arham Khan',
      id: '248256',
      major: 'Computer Science',
      year: '2nd',
      GPA: 3
    },
    {
      name: 'Arham Khan',
      id: '248256',
      major: 'Computer Science',
      year: '2nd',
      GPA: 3
    }
  ]

  return (
    <div className="card shadow-sm">

      <div className="card-body">

        <h2 className="mb-4">
          Student List
        </h2>

        <div className="row">

          {students.map((student, index) => (

            <div className="col-md-6 mb-3" key={index}>

              <div className="card">

                <div className="card-body">

                  <h5 className="card-title">
                    {student.name}
                  </h5>

                  <p className="card-text mb-1">
                    <strong>Department:</strong> {student.department}
                  </p>

                  <p className="card-text">
                    <strong>Semester:</strong> {student.semester}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default StudentList