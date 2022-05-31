import Menu from "./Menu";
import axios from 'axios';
import {useState} from "react";
import {useNavigate} from "react-router-dom";




export default function Register() {
    const [FirstName, FirstNameHandler] = useState('');
    const [LastName, LastNameHandler] = useState('');
    const [BirthDay, BirthDayHandler] = useState('');
    const [Address, AddressHandler] = useState('');
    const [City, CityHandler ] = useState('');
    const [ZipCode, ZipCodeHandler] = useState('');
    const [LandLine, LandLineHandler] = useState('');
    const [Phone, PhoneHandler] = useState('');
    const [IfInfected, IfInfectedHandler] = useState(false);
    const [Other, OtherHandler] = useState('');
   /* const [otherInput, setOtherInput] = useState(false);*/
/*    const [conditionInput, setConditionInput] = useState([]);*/
    /*const [error, setError] = useState('');*/
    const navigate = useNavigate();

    const submitHandler =async e =>{
        e.preventDefault();
        const dataForm = {
            FirstName, LastName, BirthDay, Address, City, ZipCode,LandLine, Phone, IfInfected, Other
        }

        fetch('http://localhost:8000/register/', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataForm),
        })
            .then(response => response.json())
            .then(data => {
                navigate('/summary');
                console.log('Success:', data);
            })
            .catch((error) => {
                alert("Problem with server, Please try again!");
                console.error('Error:', error);
            });
      /*  try{
            await axios.post('http://localhost:8000/register/', sendData);
            navigate('/summary')
        }catch(e){
            alert("Problem with server, Please try again!");
        }*/
    }

    return (
        <form action="http://localhost:8000/register/" method="post">
            <Menu></Menu>
            <h1>Registration Page</h1>
            <strong>Please fill in your personal details.</strong><br/><br/>
            <div className="form-group">
                <label >First Name:</label>
                <input type="text" id="FirstName" className="form-control" autoComplete="off"
                       placeholder="Enter First Name" value={FirstName} onChange={(e) => FirstNameHandler(e.target.value)}/>
             {/*   <p  className={nameIsValid ? "" : "alert alert-danger"}> {nameIsValid ? '' : `${message}`}</p>*/}
            </div>
            <br/>
            <div className="form-group">
                <label>Last Name:</label>
                <input type="text" id="LastName" className="form-control" autoComplete="off"
                       placeholder="Enter Last Name" value={LastName} onChange={(e) => LastNameHandler(e.target.value)}/>
             {/*   <p  className={latitudeIsValid ? "" : "alert alert-danger"}> {latitudeIsValid ? '' : `${latitudeMessage}`}</p>*/}
            </div>
            <br/>
            <div className="mb-4">
                <label htmlFor="Date-of-birth" className="form-label fw-normal h5">
                    Date of birth:
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="Date-BirthDay-birth"
                    aria-describedby="emailHelp"
                    name="BirthDay"
                    value={BirthDay}
                    onChange={(ev) => {
                        const value = ev.target.value;
                        BirthDayHandler(value);
                    }}
                />
            </div>
            <br/>
            <div className="form-group">
                <label>Address:</label>
                <input type="text" id="Address" className="form-control" autoComplete="off"
                       placeholder="Enter Address" value={Address} onChange={(e) => AddressHandler(e.target.value)}/>
               {/* <p  className={longitudeIsValid ? "" : "alert alert-danger"}> {longitudeIsValid ? '' : `${longitudeMessage}`}</p>*/}
            </div>
            <br/>
            <div className="mb-4">
                <label htmlFor="city" className="form-label fw-normal h5">
                    City: </label>
                <select className="form-select" aria-label="Default select example"
                        name="City" value={City} onChange={(e)=>CityHandler(e.target.value)}>
                    <option selected>Tel Aviv</option>
                    <option value="">Jerusalem</option>
                    <option value="">Haifa</option>
                    <option value="">Ashdod</option>
                </select>
            </div>
            <br/>
            <div className="form-group">
                <label>Zip Code:</label>
                <input type="number" id="ZipCode" className="form-control" autoComplete="off"
                       placeholder="Enter ZipCode" value={ZipCode} onChange={(e) => ZipCodeHandler(e.target.value)}/>
                {/* <p  className={longitudeIsValid ? "" : "alert alert-danger"}> {longitudeIsValid ? '' : `${longitudeMessage}`}</p>*/}
            </div>
            <br/>
            <div className="form-group">
                <label>Land Line:</label>
                <input type="number" id="LandLine" className="form-control" autoComplete="off"
                       placeholder="Enter LandLine" value={LandLine} onChange={(e) => LandLineHandler(e.target.value)}/>
                {/* <p  className={longitudeIsValid ? "" : "alert alert-danger"}> {longitudeIsValid ? '' : `${longitudeMessage}`}</p>*/}
            </div>
            <br/>
            <div className="form-group">
                <label>Phone Number:</label>
                <input type="number" id="Phone" className="form-control" autoComplete="off"
                       placeholder="Enter Phone" value={Phone} onChange={(e) => PhoneHandler(e.target.value)}/>
                {/* <p  className={longitudeIsValid ? "" : "alert alert-danger"}> {longitudeIsValid ? '' : `${longitudeMessage}`}</p>*/}
            </div>
            <br/>
            <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" id="IfInfected" autoComplete="off"
                value={IfInfected} onChange={(e)=> IfInfectedHandler(!IfInfected)}/>
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Have been infected by COVID-19 before?
                </label>
            </div>
            <br/>
            <div className="form-group">
                <label>Other:</label>
                <input type="text" id="Other" className="form-control" autoComplete="off"
                       value={Other} onChange={(e) => OtherHandler(e.target.value)}/>
                {/* <p  className={longitudeIsValid ? "" : "alert alert-danger"}> {longitudeIsValid ? '' : `${longitudeMessage}`}</p>*/}
            </div>
            <input type="submit" value="Submit"/>
        </form>


    );

}
