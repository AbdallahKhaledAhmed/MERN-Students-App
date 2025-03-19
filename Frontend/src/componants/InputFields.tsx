import { reactUseRef } from "../main";

export default function InputFields({ form }: reactUseRef) {
  return (
    <form className="flex flex-col gap-0.5 dark:bg-dark-900" ref={form}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="form-input"
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        className="form-input"
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        className="form-input"
      />
      <input
        name="class"
        type="text"
        placeholder="Class"
        className="form-input"
      />
    </form>
  );
}
