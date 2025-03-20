import { formData } from "../main";

export default function InputFields({ form, obj }: formData) {
  obj = obj ?? { name: "", age: undefined, email: "", class: "" };

  return (
    <form className="flex flex-col gap-0.5 dark:bg-dark-900" ref={form}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="form-input"
        defaultValue={obj.name}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        className="form-input"
        defaultValue={obj.age}
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        className="form-input"
        defaultValue={obj.email}
      />
      <input
        name="class"
        type="text"
        placeholder="Class"
        className="form-input"
        defaultValue={obj.class}
      />
    </form>
  );
}
