import { useRef } from "react";
import { addStudent } from "../utils/studentFunctions";
import { InputFieldsProps } from "../main";

export default function InputFields({
  studentsArray,
  setStudentsArray,
}: InputFieldsProps) {
  const form = useRef<HTMLFormElement>(null);

  return (
    <form className="flex flex-col gap-0.5 dark:bg-dark-900" ref={form}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="form-input"
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        className="form-input"
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        className="form-input"
      />
      <input
        name="class"
        type="text"
        placeholder="Class"
        className="form-input"
      />
      <input
        type="submit"
        className="form-input hover:bg-gray-400/50 cursor-pointer"
        value={"Add Student"}
        onClick={(event) => {
          event.preventDefault();
          addStudent({ studentsArray, setStudentsArray, form });
        }}
      />
    </form>
  );
}
