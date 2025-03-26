import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface modalInputs {
  showModal: boolean;
  children: ReactNode;
}
export default function Modal({ showModal, children }: modalInputs) {
  const isDarkMode = JSON.parse(localStorage.getItem("darktheme") || "false");
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 dark:text-dark-100 bg-black/50 flex items-center justify-center ${
        showModal ? "visible" : "invisible"
      } ${isDarkMode ? "dark" : ""}`}
    >
      {children}
    </div>,
    document.getElementById("Modal")!
  );
}
