export default function InputFields(studentsArray, setStudentsArray) {
  function addNewStudent() {
    // get data from input fields

    //save the new student to the array
    setStudentsArray([...studentsArray, newStudent]);
  }
  return (
    <div className="flex flex-col gap-0.5 dark:bg-dark-900 ">
      <input
        type="text"
        placeholder="Name"
        className="border-gray-800/80 border-1 rounded dark:border-white"
      />
      <input
        type="Number"
        placeholder="Age"
        className="border-gray-800/80 border-1 rounded dark:border-white"
      />
      <input
        type="text"
        placeholder="Email"
        className="border-gray-800/80 border-1 rounded dark:border-white"
      />
      <input
        type="text"
        placeholder="Class"
        className="border-gray-800/80 border-1 rounded dark:border-white"
      />
      <button
        className="border-gray-800/80 border-1 rounded dark:border-white"
        onClick={addNewStudent}
      >
        Add Student
      </button>
    </div>
  );
}
