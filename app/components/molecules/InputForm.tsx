"use client";

import { InputForm } from "@/app/types/form";
import React, { useState } from "react";

const InputForm: React.FC<InputForm> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <form
      data-testid="input-form"
      onSubmit={handleSubmit}
      className="flex items-center gap-2"
    >
      <input
        data-testid="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 p-2 border border-blue-chill-300 rounded text-blue-chill-700"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
};

export default InputForm;
