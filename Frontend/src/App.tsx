import "./build.css";
import { useRef } from "react";
import MyTable from "./components/MyTable";
import ChangeMode from "./components/ChangeMode";

function App() {
  const root = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={root}
      className="min-h-screen w-full relative flex flex-wrap flex-col gap-10  items-center bg- dark:bg-dark-800 dark:text-dark-100 font-main overflow-auto"
    >
      <a
        title="Project's Github Repository"
        href="https://github.com/AbdallahKhaledAhmed/MERN-Students-App"
        target="_blank"
        className="fixed top-2 left-2 hover:bg-gray-400/50 rounded-full cursor-pointer p-1.5 flex justify-center items-center text-4xl"
      >
        <i className="bx bxl-github"></i>
      </a>
      <MyTable />
      <ChangeMode root={root} />
    </div>
  );
}

export default App;
