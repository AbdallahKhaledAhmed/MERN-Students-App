import { student, MyTableProps } from "../main";

function showdata(studentsArray: student[]) {
  return studentsArray.map((person) => {
    return (
      <tr key={person.db_id}>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.email}</td>
        <td>{person.class}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  });
}
export default function MyTable({ studentsArray }: MyTableProps) {
  return (
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
  );
}
