interface student {
  name: string;
  age: number;
  email: string;
  class: string;
  db_id: string;
}
interface MyTableProps {
  studentsArray: student[]; // arr is an array of student objects
}

const showdata = (arr: student[]) => {
  return arr.map((student) => {
    return (
      <tr>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.email}</td>
        <td>{student.class}</td>
        <td>
          <button onClick={() => editStudent(student.db_id)}>Edit</button>
          <button onClick={() => deleteStudent(student.db_id)}>Delete</button>
        </td>
      </tr>
    );
  });
};

export default function MyTable({ studentsArray }: MyTableProps) {
  return (
    <>
      <table className="border-2 h-fit w-fit dark:bg-dark-900">
        <thead className="border-b-2">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>E-mail</th>
            <th>Class</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>{showdata(studentsArray)}</tbody>
      </table>
    </>
  );
}
