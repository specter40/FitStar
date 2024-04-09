import "../globals.css";
import Header from "../components/Header";
import DemoPage from "../demo/DemoPage";

export default function Home() {
    return (
        <div>
            <Header loggedIn={false}/>
            <DemoPage />
        </div>
    );
}