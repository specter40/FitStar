import "./globals.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AddItem from "./components/AddItem";
import SignIn from "./signIn/SignIn";

export default function Home() {
  return (
    <div>
      <Header loggedIn = {false}/>
      <Homepage />
      <SignIn />
    </div>
  );
}
