import styles from "./styles.module.css";

import { Input } from "../Input";
import { useRef } from "react";

export function TaskForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o o nome da tarefa")
      return
    }

    
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.formContainer}>
        <p className={styles.titleForm}>Add new Task</p>

        <div className={styles.divider}></div>

        <div className={styles.inputRow}>
          <Input
            id="task"
            type="text"
            placeholder="Enter task title"
            ref={taskNameInput}
          />

          <button type="submit" className={styles.btnForm}>
            + Add Task
          </button>
        </div>
      </form>
    </>
  );
}
