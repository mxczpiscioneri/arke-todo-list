import { CheckboxForm } from "@/app/types/form";
import React from "react";

const Checkbox: React.FC<CheckboxForm> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-2 relative cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="rounded text-blue-chill-500 mr-4"
      />
      <span className="flex-1 text-blue-chill-700 px-1 relative">
        {label}
        <span
          data-testid="opacity-span"
          className={`absolute inset-0 flex items-center ${
            checked ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <span className="w-full bg-blue-chill-400 h-0.5"></span>
        </span>
      </span>
    </label>
  );
};

export default Checkbox;
