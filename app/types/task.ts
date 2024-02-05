export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export interface TaskItem {
  id: number;
  name: string;
  completed: boolean;
  onToggleCompleted: (id: number) => void;
  onRemove: (id: number) => void;
  onUpdateTaskName: (id: number, newName: string) => void;
}

export interface TaskList {
  tasks: Task[];
  onToggleCompleted: (id: number) => void;
  onRemoveTask: (id: number) => void;
  onUpdateTaskName: (id: number, newName: string) => void;
}
