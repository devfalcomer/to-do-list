import styles from "./styles.module.css";

import { Plus } from "lucide-react";
import { Input } from "../Input";

export function TaskForm() {
  return (
    <>
      <form className={styles.formContainer}>
        <p className={styles.titleForm}>Add new Task</p>
        <div className={styles.inputForm}>
          <Input id="input" type="text" placeholder="Enter task title" />

          <div className={styles.btnForm}>
            <Plus />
            <p>Add Task</p>
          </div>
        </div>
      </form>
    </>
  );
}
