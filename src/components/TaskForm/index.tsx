import { Input } from '../Input';
import styles from './styles.module.css';

export function TaskForm() {
  return (
    <>
      <p className={styles.titleform}>Add new Task</p>
      <form>
        <div className={styles.form}>
          <Input
            id='input'
            type='text'
            placeholder='Enter task title'
          />
        </div>
      </form>
    </>
  )
}