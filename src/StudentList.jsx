import Student from './Student'

const StudentList = (props) => {
  return ( 
    <>
    <h2>Student list!</h2>
    {props.students.map(student => <Student key={student.name} student={student} />
    )}
  </>
  );
}

export default StudentList;