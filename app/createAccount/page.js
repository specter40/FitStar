import "../globals.css";
import Header from "../components/Header";
import CreateAccount from "./CreateAccount";

export default function Home() {
    return (
        <div>
            <Header loggedIn={false} />
            <CreateAccount />
        </div>
    );
}