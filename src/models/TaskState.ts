import type { Task } from "./Task";

export type TaskState = {
  tasks: Task[];
  filter: "All" | "Pending" | "Completed";
  selectedTask: Task | null;
  isLoading: boolean;
};
