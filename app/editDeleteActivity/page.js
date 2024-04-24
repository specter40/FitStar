import "../globals.css";
import Header from "../components/Header";
import Homepage from "../components/Homepage";
import EditDeleteItem from "../components/EditDeleteItem";

export default function Home() {
    return (
        <div>
            <Header/>
            <EditDeleteItem />
        </div>
    );
}