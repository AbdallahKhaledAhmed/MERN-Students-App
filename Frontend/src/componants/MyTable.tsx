import { InputFieldsProps } from "../main";
import { showStudents } from "../utils/studentFunctions";

export default function MyTable({ studentsArray }: InputFieldsProps) {
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
      <tbody>{showStudents(studentsArray)}</tbody>
    </table>
  );
}
