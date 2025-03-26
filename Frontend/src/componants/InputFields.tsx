import { formData } from "../main";

export default function InputFields({ form, obj }: formData) {
  const objToShow = obj ?? { name: "", age: undefined, email: "", class: "" };
  return (
    <form
      className="flex flex-col gap-0.5 dark:bg-dark-900"
      ref={form}
      key={Math.random()}
    >
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="form-input"
        defaultValue={objToShow.name}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        className="form-input"
        defaultValue={objToShow.age !== undefined ? objToShow.age : ""}
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        className="form-input"
        defaultValue={objToShow.email}
      />
      <input
        name="class"
        type="text"
        placeholder="Class"
        className="form-input"
        defaultValue={objToShow.class}
      />
    </form>
  );
}
