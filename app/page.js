import styles from "./page.module.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AddItem from "./components/AddItem";

export default function Home() {
  return (
    <div>
      <Header />
      <Homepage />
      <AddItem />
    </div>
  );
}
