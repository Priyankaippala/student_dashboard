import { useState } from "react";

function Student() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "sreeja",
      dept: "it",
    },
    {
      id: 2,
      name: "sreeja",
      dept: "it",
    },
    {
      id: 3,
      name: "sreeja",
      dept: "it",
    },
  ]);

  return (
    <div className="bg-blue-500 h-100 p-10">
      {students.map(student => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>{student.dept}</p>
        </div>
      ))}
    </div>
  );
}

export default Student;
