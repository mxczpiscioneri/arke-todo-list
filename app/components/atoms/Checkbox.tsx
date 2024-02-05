import { CheckboxForm } from "@/app/types/form";
import React from "react";

const Checkbox: React.FC<CheckboxForm> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-2 relative cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="rounded text-blue-chill-500"
      />
      <span className="flex-1 text-blue-chill-700 px-1">{label}</span>
    </label>
  );
};

export default Checkbox;
