import { ReactNode } from "react";
import { student } from "../main";
import InputFields from "../componants/InputFields";

const apiUrl =
  "https://backend-mern-students-app-production.up.railway.app/students/";

export function getAllStudents(
  setStudentsArray: React.Dispatch<React.SetStateAction<student[]>>
) {
  fetch(apiUrl, { method: "GET" })
    .then((data) => data.json())
    .then((data: student[]) => {
      setStudentsArray(data);
    })
    .catch(() => console.log("Fetch All Error"));
}

function apiSend(
  operation: "add" | "edit" | "del",
  data: student | React.RefObject<HTMLFormElement | null>,
  setStudentsArray: React.Dispatch<React.SetStateAction<student[]>>,
  form?: React.RefObject<HTMLFormElement | null>
) {
  let dataToSend: FormData | null = null;
  if (form && form.current) {
    dataToSend = new FormData(form.current);
  }
  switch (operation) {
    case "add":
      if (data && (data as React.RefObject<HTMLFormElement>).current) {
        const formData = new FormData(
          (data as React.RefObject<HTMLFormElement>).current
        );
        fetch(apiUrl, {
          method: "POST",
          body: formData,
        })
          .then(() => getAllStudents(setStudentsArray))
          .catch(() => {
            console.log("Error Request Failed");
          });
      }
      break;
    case "edit":
      fetch(apiUrl + (data as student)._id, {
        method: "PUT",
        body: dataToSend,
      })
        .then(() => getAllStudents(setStudentsArray))
        .catch(() => {
          console.log("Error Request Failed");
        });
      break;
    case "del":
      fetch(apiUrl + (data as student)._id, {
        method: "DELETE",
      })
        .then(() => getAllStudents(setStudentsArray))
        .catch(() => {
          console.log("Error Request Failed");
        });
      break;
  }
}

export function addStudent(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>,
  setStudentsArray: React.Dispatch<React.SetStateAction<student[]>>,
  form: React.RefObject<HTMLFormElement | null> // Allow null here
) {
  setShowModal(true);
  setModalData(
    <div className="modal-content">
      <header className="text-xl px-7 py-2">Add Student</header>
      <hr />
      <main className="flex flex-col justify-center items-center  w-100 h-60">
        <InputFields form={form} obj={null} />
      </main>
      <footer className="flex justify-end gap-3 mx-4 my-4">
        <button
          className="btn-primary"
          onClick={() => {
            apiSend("add", form, setStudentsArray);
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
  setStudentsArray: React.Dispatch<React.SetStateAction<student[]>>,
  form: React.RefObject<HTMLFormElement | null>
) {
  setShowModal(true);
  setModalData(
    <div className="modal-content">
      <header className="text-xl px-7 py-2">Edit Student</header>
      <hr />
      <main className="flex flex-col justify-center items-center  w-100 h-60">
        <InputFields form={form} obj={person} />
      </main>
      <footer className="flex justify-end gap-3 mx-4 my-4">
        <button
          className="btn-primary"
          onClick={() => {
            apiSend("edit", person, setStudentsArray, form);
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
  setModalData: React.Dispatch<React.SetStateAction<ReactNode>>,
  setStudentsArray: React.Dispatch<React.SetStateAction<student[]>>
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
            apiSend("del", person, setStudentsArray);
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
  form: React.RefObject<HTMLFormElement | null>
) {
  if (studentsArray.length === 0) {
    return (
      <tr>
        <td colSpan={5} className="text-center">
          No Students Found !
        </td>
      </tr>
    );
  } else {
    return studentsArray.map((person) => {
      return (
        <tr key={person._id}>
          <td className="pb-4">{person.name}</td>
          <td className="pb-4">{person.age}</td>
          <td className="pb-4">{person.email}</td>
          <td className="pb-4">{person.class}</td>
          <td>
            <button
              className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1"
              onClick={() =>
                updateStudent(
                  person,
                  setShowModal,
                  setModalData,
                  setStudentsArray,
                  form
                )
              }
            >
              <i className="bx bxs-message-square-edit text-3xl text-[#52b921]"></i>
            </button>
            <button
              className="hover:bg-gray-400/50 rounded-full cursor-pointer p-1"
              onClick={() =>
                deleteStudent(
                  person,
                  setShowModal,
                  setModalData,
                  setStudentsArray
                )
              }
            >
              <i className="bx bxs-message-square-x text-3xl text-[#ab3224]"></i>
            </button>
          </td>
        </tr>
      );
    });
  }
}
