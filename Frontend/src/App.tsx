import "./index.css";
import { useRef, useState } from "react";
import MyTable from "./componants/MyTable";
import ChangeMode from "./componants/ChangeMode";
import InputFields from "./componants/InputFields";
import { student } from "./main"; // Import the student interface

function App() {
  const root = useRef<HTMLDivElement>(null);
  const [studentsArray, setStudentsArray] = useState<student[]>([]); // Explicitly type the state

  return (
    <div
      ref={root}
      className="min-h-screen w-full relative flex flex-wrap flex-col gap-10 justify-center items-center bg- dark:bg-dark-800 dark:text-dark-100 font-main"
    >
      <a
        href="https://github.com/AbdallahKhaledAhmed/MERN-Students-App"
        target="_blank"
        className="absolute top-2 left-2 hover:bg-gray-400/50 rounded-full cursor-pointer p-1.5 flex justify-center items-center text-4xl"
      >
        <i className="bx bxl-github"></i>
      </a>
      <MyTable
        studentsArray={studentsArray}
        setStudentsArray={setStudentsArray}
      />
      <ChangeMode root={root} />
      <InputFields
        studentsArray={studentsArray}
        setStudentsArray={setStudentsArray}
      />
    </div>
  );
}

export default App;
