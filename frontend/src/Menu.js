import {Link
} from "react-router-dom";

export default function Menu() {
    return (
        <>
            <div className="row-cols-6 ">
                <Link to="/">Home</Link>  <Link to="/register">To Registration</Link>  <Link to="/summary">To Summary Page</Link>
            </div>
        </>
    );
}
