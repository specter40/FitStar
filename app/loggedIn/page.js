import "../globals.css";
import Header from "../components/Header";
import LoggedPage from "../loggedIn/LoggedPage";

export default function Home() {
    return (
        <div>
            <Header />
            <LoggedPage />
        </div>
    );
}