import "../globals.css";
import Header from "../components/Header";
import Form from "../form/Form";

export default function Home() {
    return (
        <div>
            <Header loggedIn={false} />
            <Form />
        </div>
    );
}