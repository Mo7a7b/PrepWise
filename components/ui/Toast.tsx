import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type ToastProps = {
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number; // in milliseconds
};

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  return createPortal(
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } ${typeStyles[type]}`}
    >
      {message}
    </div>,
    document.body
  );
};

export default Toast;
