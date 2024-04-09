import "./globals.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <div>
      <Header loggedIn = {false}/>
      <Homepage />
    </div>
  );
}
