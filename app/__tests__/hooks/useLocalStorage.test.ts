import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { renderHook, act } from "@testing-library/react";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should set and get a value from localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "initialValue")
    );

    expect(result.current[0]).toBe("initialValue");

    act(() => {
      result.current[1]("newValue");
    });

    expect(result.current[0]).toBe("newValue");
  });

  it("should handle updating the value with a function", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", 0));

    act(() => {
      result.current[1]((prev: number) => prev + 1);
    });

    expect(result.current[0]).toBe(1);
  });
});
