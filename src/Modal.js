import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  // This is a effectively a singleton. If we don't do this we won't be able to destroy the modal and
  // we will start leaking memory.
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // This is run whenever the modal is closed.
    return () => modalRoot.removeChild(elRef.current);
    // Added an empty array so that it only runs onces.
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
