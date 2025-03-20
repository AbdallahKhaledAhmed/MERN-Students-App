import "./index.css";
import { useRef } from "react";
import MyTable from "./componants/MyTable";
import ChangeMode from "./componants/ChangeMode";

function App() {
  const root = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={root}
      className="min-h-screen w-full relative flex flex-wrap flex-col gap-10  items-center bg- dark:bg-dark-800 dark:text-dark-100 font-main"
    >
      <a
        title="Project's Github Repository"
        href="https://github.com/AbdallahKhaledAhmed/MERN-Students-App"
        target="_blank"
        className="absolute top-2 left-2 hover:bg-gray-400/50 rounded-full cursor-pointer p-1.5 flex justify-center items-center text-4xl"
      >
        <i className="bx bxl-github"></i>
      </a>
      <MyTable />
      <ChangeMode root={root} />
    </div>
  );
}

export default App;
