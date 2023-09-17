import { FormEvent, FormEventHandler } from "react";
import Page from "../components/Page";



export default function Login() {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(Object.fromEntries(new FormData(e.target).entries()))
    }

    return <Page>
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Email"></input>
            <input name="password" type="password" placeholder="Password"></input>
            <button type="submit">Login</button>
        </form>
    </Page>
}