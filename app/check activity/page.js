import AddItem from "../components/AddItem";
import Homepage from "../components/Homepage";
import Header from "../components/Header";

export default function Home() {
    return (
        <div>
            <Header loggedIn={false}/>
            <Homepage />
            <AddItem />
        </div>
    );
};