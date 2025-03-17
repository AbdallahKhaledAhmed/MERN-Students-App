import { student } from "../main";
import { InputFieldsProps } from "../main";

export function addStudent({
  studentsArray,
  setStudentsArray,
  form,
}: InputFieldsProps) {
  if (!form || !form.current) return;
  // Get data from input fields
  const formData = new FormData(form.current);
  const data = Object.fromEntries(formData.entries());
  // Create a new student object
  const newStudent: student = {
    name: data.name as string,
    age: parseInt(data.age as string, 10),
    email: data.email as string,
    class: data.class as string,
    db_id: Math.random().toString(36).substring(7), // Generate a random ID for demonstration
  };
  // Save the new student to the array
  if (studentsArray.length === 0) {
    setStudentsArray([newStudent]);
  } else {
    setStudentsArray([...studentsArray, newStudent]);
  }
}

export function updateStudent(db_id: string) {
  console.log(db_id);
}
export function deleteStudent(db_id: string) {
  console.log(db_id);
}

export function showStudents(studentsArray: student[]) {
  return studentsArray.map((person) => {
    return (
      <tr key={person.db_id}>
        <td className="pb-4">{person.name}</td>
        <td className="pb-4">{person.age}</td>
        <td className="pb-4">{person.email}</td>
        <td className="pb-4">{person.class}</td>
        <td>
          <button
            className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1"
            onClick={() => updateStudent(person.db_id)}
          >
            <i
              className="bx bxs-message-square-edit text-3xl"
              style={{ color: "#52b921" }}
            ></i>
          </button>
          <button
            className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1"
            onClick={() => deleteStudent(person.db_id)}
          >
            <i
              className="bx bxs-message-square-x text-3xl"
              style={{ color: "#ab3224" }}
            ></i>
          </button>
        </td>
      </tr>
    );
  });
}
