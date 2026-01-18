import styles from "./styles.module.css";
import '../../styles/theme.css';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Todo List</h1>

        <nav className={styles.nav}>
          <a href="">Home</a>
          <a href="">About</a>
        </nav>
      </header>
    </>
  );
}
