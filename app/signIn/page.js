import "../globals.css";
import Header from "../components/Header";
import SignIn from "./SignIn";

export default function Home() {
    return (
        <div>
            <Header loggedIn={false} />
            <SignIn />
        </div>
    );
}

