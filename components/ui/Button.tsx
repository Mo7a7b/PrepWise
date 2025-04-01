import React from "react";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }
> = ({ children, ...props }) => {
  return (
    <button
      className="bg-[#CAC5FE] hover:bg-[#b7b0ea] transition rounded-full text-[#020408] p-2 font-bold text-sm cursor-pointer"
      {...props}
      type="submit"
    >
      {children}
    </button>
  );
};
