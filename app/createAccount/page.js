"use client"
import "../globals.css";
import Header from "../components/Header";
import CreateAccount from "./CreateAccount";
import axios from 'axios';

export default function Home() {
    return (
        <div>
            <Header />
            <CreateAccount />
        </div>
    );
}