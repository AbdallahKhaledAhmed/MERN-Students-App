import { ReactNode, useState } from "react";
import { InputFieldsProps } from "../main";
import { showStudents } from "../utils/studentFunctions";
import Modal from "./Modal";
export default function MyTable({ studentsArray }: InputFieldsProps) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<undefined | ReactNode>(undefined);
  return (
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
  );
}
