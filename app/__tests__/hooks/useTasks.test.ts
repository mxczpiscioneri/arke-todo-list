import { useTasks } from "@/app/hooks/useTasks";
import { renderHook, act } from "@testing-library/react";
import { useState } from "react";

jest.mock("@/app/hooks/useLocalStorage", () => ({
  useLocalStorage: jest.fn((key, initialValue) => {
    const [state, setState] = useState(initialValue);
    return [state, setState];
  }),
}));

describe("useTasks Hook", () => {
  it("should initialize tasks", () => {
    const { result } = renderHook(() => useTasks([]));
    expect(result.current.tasks).toEqual([]);
  });

  it("should add a new task", () => {
    const { result } = renderHook(() => useTasks([]));

    act(() => {
      result.current.addTask("New Task");
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].name).toBe("New Task");
  });

  it("should toggle task completion", () => {
    const initialTasks = [{ id: 1, name: "Task 1", completed: false }];
    const { result } = renderHook(() => useTasks(initialTasks));

    act(() => {
      result.current.toggleTaskCompletion(1);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  it("should remove a task", () => {
    const initialTasks = [{ id: 1, name: "Task 1", completed: false }];
    const { result } = renderHook(() => useTasks(initialTasks));

    act(() => {
      result.current.removeTask(1);
    });

    expect(result.current.tasks.length).toBe(0);
  });
});
