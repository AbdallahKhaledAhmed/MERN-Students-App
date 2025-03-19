import { ReactNode } from "react";
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

export function updateStudent(
  person: student,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>
) {
  setShowModal(true);
  setModalData(
    <div className="modal-content">
      <header className="text-xl px-7 py-2">Edit Student</header>
      <hr />
      <main className="flex flex-col justify-center items-center  w-100 h-60">
        <form className="flex flex-col gap-0.5 dark:bg-dark-900">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={person.name}
            className="form-input"
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            value={person.age}
            className="form-input"
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={person.email}
            className="form-input"
          />
          <input
            name="class"
            type="text"
            placeholder="Class"
            value={person.class}
            className="form-input"
          />
        </form>
      </main>
      <footer className="flex justify-end gap-3 mx-4 my-4">
        <button className="btn-primary">Save</button>
        <button className="btn-secondary" onClick={() => setShowModal(false)}>
          Cancel
        </button>
      </footer>
    </div>
  );
}
export function deleteStudent(
  person: student,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>
) {
  setShowModal(true);
  setModalData(
    <div className="modal-content">
      <header className="text-xl px-7 py-2">Delete Student</header>
      <hr />
      <main className="w-100 h-30 flex justify-center items-center">
        <p>Are you sure you want to Delete {person.name}</p>
      </main>
      <footer className="flex justify-end gap-3 mx-4 my-4">
        <button className="btn-primary">Yes</button>
        <button className="btn-secondary" onClick={() => setShowModal(false)}>
          No
        </button>
      </footer>
    </div>
  );
}

export function showStudents(
  studentsArray: student[],
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>
) {
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
            onClick={() => updateStudent(person, setShowModal, setModalData)}
          >
            <i
              className="bx bxs-message-square-edit text-3xl"
              style={{ color: "#52b921" }}
            ></i>
          </button>
          <button
            className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1"
            onClick={() => deleteStudent(person, setShowModal, setModalData)}
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
