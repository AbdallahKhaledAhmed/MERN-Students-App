import { ReactNode } from "react";

interface modalInputs {
  showModal: boolean;
  children: ReactNode;
}
export default function Modal({ showModal, children }: modalInputs) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center ${
        showModal ? "visible" : "invisible"
      }`}
    >
      {children}
    </div>
  );
}
