import { ReactNode } from "react";
import { student } from "../main";
import InputFields from "../componants/InputFields";

const apiUrl =
  "https://backend-mern-students-app-production.up.railway.app/students";
let studentsArraySetter: React.Dispatch<React.SetStateAction<student[]>>;

export function getAllStudents() {
  fetch(apiUrl, { method: "GET" })
    .then((data) => data.json())
    .then((data: student[]) => {
      studentsArraySetter(data);
    })
    .catch(() => console.log("Fetch All Error"));
}

function apiSend(operation: string, data, form?) {
  switch (operation) {
    case "add":
      data = new FormData(data.current);
      fetch(apiUrl, {
        method: "POST",
        body: data,
      });
      getAllStudents();
      break;
    case "edit":
      data = new FormData(data.current);
      fetch(apiUrl, {
        method: "PUT",
        body: data,
      });
      getAllStudents();
      break;
    case "del":
      fetch(apiUrl + data._id, {
        method: "DELETE",
      });
      getAllStudents();
      break;
  }
}
export function addStudent(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>,
  form: React.Ref<HTMLFormElement>
) {
  setShowModal(true);
  setModalData(
    <div className="modal-content">
      <header className="text-xl px-7 py-2">Add Student</header>
      <hr />
      <main className="flex flex-col justify-center items-center  w-100 h-60">
        <InputFields form={form} />
      </main>
      <footer className="flex justify-end gap-3 mx-4 my-4">
        <button
          className="btn-primary"
          onClick={() => {
            apiSend("add", form);
            setShowModal(false);
          }}
        >
          Save
        </button>
        <button className="btn-secondary" onClick={() => setShowModal(false)}>
          Cancel
        </button>
      </footer>
    </div>
  );
}

export function updateStudent(
  person: student,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>,
  form: React.Ref<HTMLFormElement>
) {
  setShowModal(true);
  setModalData(
    <div className="modal-content">
      <header className="text-xl px-7 py-2">Edit Student</header>
      <hr />
      <main className="flex flex-col justify-center items-center  w-100 h-60">
        <InputFields form={form} />
      </main>
      <footer className="flex justify-end gap-3 mx-4 my-4">
        <button
          className="btn-primary"
          onClick={() => {
            apiSend("edit", person, form);
            setShowModal(false);
          }}
        >
          Save
        </button>
        <button className="btn-secondary" onClick={() => setShowModal(false)}>
          Cancel
        </button>
      </footer>
    </div>
  );
}
export function deleteStudent(
  person: student,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>
) {
  setShowModal(true);
  setModalData(
    <div className="modal-content">
      <header className="text-xl px-7 py-2">Delete Student</header>
      <hr />
      <main className="w-100 h-30 flex justify-center items-center">
        <p>Are you sure you want to Delete {person.name}</p>
      </main>
      <footer className="flex justify-end gap-3 mx-4 my-4">
        <button
          className="btn-primary-danger"
          onClick={() => {
            apiSend("del", person);
            setShowModal(false);
          }}
        >
          Yes
        </button>
        <button className="btn-secondary" onClick={() => setShowModal(false)}>
          No
        </button>
      </footer>
    </div>
  );
}

export function showStudents(
  studentsArray: student[],
  setStudentsArray: React.Dispatch<React.SetStateAction<student[]>>,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>,
  form: React.Ref<HTMLFormElement>
) {
  studentsArraySetter = setStudentsArray;
  return studentsArray.map((person) => {
    return (
      <tr key={person.db_id}>
        <td className="pb-4">{person.name}</td>
        <td className="pb-4">{person.age}</td>
        <td className="pb-4">{person.email}</td>
        <td className="pb-4">{person.class}</td>
        <td>
          <button
            className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1"
            onClick={() =>
              updateStudent(person, setShowModal, setModalData, form)
            }
          >
            <i
              className="bx bxs-message-square-edit text-3xl"
              style={{ color: "#52b921" }}
            ></i>
          </button>
          <button
            className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1"
            onClick={() => deleteStudent(person, setShowModal, setModalData)}
          >
            <i
              className="bx bxs-message-square-x text-3xl"
              style={{ color: "#ab3224" }}
            ></i>
          </button>
        </td>
      </tr>
    );
  });
}
