import styles from "./styles.module.css";

import { Input } from "../Input";

export function TaskForm() {
  return (
    <>
      <form className={styles.formContainer}>
        <p className={styles.titleForm}>Add new Task</p>

        <div className={styles.divider}></div>

        <div className={styles.inputRow}>
          <Input id="task" type="text" placeholder="Enter task title" />

          <button type="submit" className={styles.btnForm}>
            + Add Task
          </button>
        </div>
      </form>
    </>
  );
}
