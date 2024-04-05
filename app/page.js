import "./globals.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AddItem from "./components/AddItem";

export default function Home() {
  return (
    <div>
      <Header loggedIn = {false}/>
      <Homepage />
      <AddItem />
    </div>
  );
}
