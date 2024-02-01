import { Button } from "@/app/types/form";
import React from "react";

const Button: React.FC<Button> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
