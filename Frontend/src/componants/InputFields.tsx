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
          addStudent({ studentsArray, setStudentsArray, form });
        }}
      />
    </form>
  );
}
