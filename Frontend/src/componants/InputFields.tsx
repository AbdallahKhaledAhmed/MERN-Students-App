import { useRef } from "react";
import { student } from "../main"; // Import the student interface

interface InputFieldsProps {
  studentsArray: student[];
  setStudentsArray: (students: student[]) => void;
}

export default function InputFields({
  studentsArray,
  setStudentsArray,
}: InputFieldsProps) {
  const form = useRef<HTMLFormElement>(null);

  function addNewStudent() {
    if (!form.current) return;

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

  return (
    <form className="flex flex-col gap-0.5 dark:bg-dark-900" ref={form}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="border-gray-800/80 border-1 rounded dark:border-white"
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        className="border-gray-800/80 border-1 rounded dark:border-white"
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        className="border-gray-800/80 border-1 rounded dark:border-white"
      />
      <input
        name="class"
        type="text"
        placeholder="Class"
        className="border-gray-800/80 border-1 rounded dark:border-white"
      />
      <input
        type="submit"
        className="border-gray-800/80 border-1 rounded dark:border-white hover:bg-gray-400/50 cursor-pointer"
        value={"Add Student"}
        onClick={(event) => {
          event.preventDefault();
          addNewStudent();
        }}
      />
    </form>
  );
}
