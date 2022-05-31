import {Link} from "react-router-dom";
import Menu from "./Menu";

export default function Register() {
    return (

        <div className="container">
            <Menu></Menu>
            <div className="row justify-content-center">
                <div className="col-6">
                    <h1>Registration Page</h1><br/>
                    <strong>Please fill in your personal details.</strong><br/><br/>
                    <form action="http://127.0.0.1:8000/register" method="post">
                        <div className="mb-4">
                            <label for="FirstName" className="form-label fw-normal h5">
                                First Name:    </label>
                            <input
                                type="text" className="form-control" autoComplete="off"
                                id="FirstName" placeholder="Enter your First Name"/>
                        </div>
                        <div className="mb-4">
                            <label for="LastName" className="form-label fw-normal h5">
                                Last Name:    </label>
                            <input
                                type="text" className="form-control" autoComplete="off"
                                id="LastName" placeholder="Enter your Last Name"/>
                        </div>
                        <div className="mb-4">
                            <label for="date" className="form-label fw-normal h5">
                                Date of birth:    </label>
                            <input
                                type="date" className="form-control"
                                id="Date-of-birth" name="date_of_birth"/>
                        </div>
                        <div className="mb-4">
                            <label for="address" className="form-label fw-normal h5">
                                Address:    </label>
                            <input
                                type="text" className="form-control" autoComplete="off"
                                placeholder="Enter your Address" id="address" />
                        </div>
                        <div className="mb-4">
                            <label for="city" className="form-label fw-normal h5">
                                City:    </label>
                            <select className="form-select" aria-label="Default select example" name="city">
                                <option selected>One</option>
                                <option value="">Two</option>
                                <option value="">Three</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label for="zip_code" className="form-label fw-normal h5">
                                Zip code:    </label>
                            <input
                                type="number" className="form-control" autoComplete="off"
                                id="zip_code" name="zip_code" placeholder="Enter your Zip code"/>
                        </div>
                        <div className="mb-4">
                            <label for="land_line" className="form-label fw-normal h5">
                                Land line:    </label>
                            <input
                                type="number" className="form-control" autoComplete="off"
                                id="land_line" name="land_line" placeholder="Enter your Land line"/>
                        </div>
                        <div className="mb-4">
                            <label for="cellular_phone" className="form-label fw-normal h5">
                                Cellular phone:    </label>
                            <input
                                type="number" className="form-control" autoComplete="off"
                                id="cellular_phone" name="cellular_phone" placeholder="Enter your Cellular phone"/>
                        </div><br/>
                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="been_infected" />
                            <label className="form-check-label" for="exampleCheck1">
                                Have been infected by COVID-19 before
                            </label>
                        </div><br/>
                        <div className="mb-4">
                            <label for="LastName" className="form-label fw-normal h5">
                                Other conditions:
                            </label>
                            <div className="card">
                                <div className="card-body border-3 border border-3 rounded-3">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">
                                            Diabetes
                                        </label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">
                                            Cardio-Vascular problems
                                        </label>
                                    </div>
                                     <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">
                                            High Blood Pressure
                                        </label>
                                    </div>
                                    <br/>
                                    <label>
                                        Other: <br/><input type="text" name="other" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto my-4 text-center">
                            <button type="submit" className="btn-lg btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}
