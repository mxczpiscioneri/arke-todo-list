import { Button } from "@/app/types/form";
import React from "react";

const Button: React.FC<Button> = ({
  children,
  onClick,
  className,
  "data-testid": testId,
}) => {
  return (
    <button data-testid={testId} onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
