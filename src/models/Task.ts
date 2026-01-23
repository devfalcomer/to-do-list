import type { TaskState } from "./TaskState";

export type Task = {
  id: string,
  title: string,
  description: string,
  statusTask: 'All' | 'Pending' | 'Completed',
  createdAt: Date
  type: keyof TaskState['filter']
}