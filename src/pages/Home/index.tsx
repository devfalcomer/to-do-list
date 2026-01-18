import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TaskForm } from "../../components/TaskForm";

export function Home() {
  return (
    <>
      <Header />
      <TaskForm/>
      <Footer />
    </>
  );
}
