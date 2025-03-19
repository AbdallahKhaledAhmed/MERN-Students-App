import { ReactNode, useRef, useState } from "react";
import { student } from "../main";
import { addStudent, showStudents } from "../utils/studentFunctions";
import Modal from "./Modal";
export default function MyTable() {
  const [studentsArray, setStudentsArray] = useState<student[]>([]); // Explicitly type the state
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<undefined | ReactNode>(undefined);
  const form = useRef<HTMLFormElement>(null);
  return (
    <>
      <button
        className="btn-secondary border border-black dark:border-white w-fit px-4"
        onClick={() => {
          addStudent(setShowModal, setModalData, form);
        }}
      >
        Add Student
        <i className="bx bx-plus-medical text-green-600 ml-1.5 dark:text-success"></i>
      </button>
      <table className="border-2 h-fit w-fit dark:bg-dark-900">
        <Modal showModal={showModal}>{modalData}</Modal>
        <thead className="border-b-2">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>E-mail</th>
            <th>Class</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>{showStudents(studentsArray, setShowModal, setModalData)}</tbody>
      </table>
    </>
  );
}
