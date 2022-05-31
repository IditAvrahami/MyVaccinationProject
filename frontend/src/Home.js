import {Link} from "react-router-dom";
import Menu from "./Menu";


export default function Home() {

    return (
        <>
            <Menu/>
            <h1>Hello and welcome</h1>
            <strong>About Us...</strong>
               <p> We are developers of a health data app for developing countries.<br/>
                We encourage the preservation of medical data and their collection from citizens to prioritize a vaccine against COVID-19.<br/>
                We'll be happy for you to help us with that.</p>

        </>
    );
}
