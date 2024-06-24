import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isShow, setIsShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            setIsShow(true);
        }
    };
    return (
        <div className="App">
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <label for="fname">First Name:</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    onChange={(e) => {
						setIsShow(false);
						setFirstName(e.target.value)
					}}
                    required
                />
                <br></br>
                <label for="lname">Last Name:</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    onChange={(e) => {
						setIsShow(false);
						setLastName(e.target.value)
					}}
                    required
                />
                <br></br>
                <button type="submit">Submit</button>
            </form>
            {isShow && (
                <p>
                    Full Name: {firstName} {lastName}
                </p>
            )}
        </div>
    );
}

export default App;
