import { Task } from "../types/task";
import { useLocalStorage } from "./useLocalStorage";

export const useTasks = (initialTasks: Task[] = []) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", initialTasks);

  const addTask = (name: string) => {
    const newTask: Task = {
      id: Date.now(),
      name: name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return {
    tasks,
    addTask,
    toggleTaskCompletion,
    removeTask,
  };
};
