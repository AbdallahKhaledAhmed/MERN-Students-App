import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
export interface student {
  name: string;
  age: number;
  email: string;
  class: string;
  db_id: string;
}
export interface ChangeModeProps {
  root: React.RefObject<HTMLDivElement | null>; // root is of type HTMLFormElement
}
export interface MyTableProps {
  studentsArray: student[]; // arr is an array of student objects
}
export interface InputFieldsProps {
  studentsArray: student[];
  setStudentsArray: (students: student[]) => void;
  form?: React.RefObject<HTMLFormElement | null>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
