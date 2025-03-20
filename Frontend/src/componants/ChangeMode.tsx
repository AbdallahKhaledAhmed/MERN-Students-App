import { useEffect, useState } from "react";
import { ChangeModeProps } from "../main";

export default function ChangeMode({ root }: ChangeModeProps) {
  const storedValue = window.localStorage.getItem("darktheme");
  const [darkmode, setDarkMode] = useState(
    storedValue ? JSON.parse(storedValue) : false
  );
  useEffect(() => {
    if (darkmode === true) {
      root.current?.classList.add("dark");
    } else if (darkmode === false) {
      root.current?.classList.remove("dark");
    }
    window.localStorage.setItem("darktheme", JSON.stringify(darkmode));
  }, [darkmode, root]);

  return (
    <button
      onClick={() => {
        setDarkMode(!darkmode);
      }}
      className="fixed top-2 right-2 hover:bg-gray-400/50 rounded-full cursor-pointer p-1.5 flex justify-center items-center text-4xl"
    >
      {darkmode ? (
        <i className="bx bxs-sun" title="Switch to Light Mode"></i>
      ) : (
        <i className="bx bxs-moon" title="Switch to Dark Mode"></i>
      )}
    </button>
  );
}
