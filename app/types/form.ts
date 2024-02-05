export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

export interface InputForm {
  onAddTask: (name: string) => void;
}

export interface CheckboxForm {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export interface Button {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  "data-testid"?: string;
}

export interface TaskSummaryProps {
  completedTasks: number;
  totalTasks: number;
  removeAllTasks: () => void;
}
