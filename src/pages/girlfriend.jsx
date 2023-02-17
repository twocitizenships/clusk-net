import React, { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        handle: "",
        bmi: "",
        nationality: "",
        message: ""
    });

    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault()

        const formURL = e.target.action
        const data = new FormData()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })

        // POST the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
                'accept': 'application/json',
            },
        }).then((response) => response.json())
            .then((data) => {
                setFormData({
                    name: "",
                    email: "",
                    handle: "",
                    message: ""
                })

                setFormSuccess(true)
                setFormSuccessMessage(data.submission_text)
            })
    }

    return (
        <div>
            <Header />
            <p>Building a matchmaking application for Twitter mutuals...</p>
            <p>I already have a gf #fakecel</p>
            <form action="/api/form" method="post">
                <br />
                <div><label htmlFor="twitter">  Twitter: </label>
                    <input type="text" id="twitter" name="twitter" required />
                </div>
                <br />
                <div><label htmlFor="age">Age: </label>
                    <input type="number" id="age" name="age" maxLength="2" max="25" required />
                </div>
                <br />
                <div><label htmlFor="bmi">BMI: </label>
                    <input type="number" id="bmi" name="bmi" maxLength="2" max="25" required />
                </div>
                <br />
                <div><label htmlFor="nationality">Nationality: </label>
                    <input type="text" id="nationality" name="nationality" required />
                </div>
                <br />
                <div><label htmlFor="message">Impress me: </label>
                    <textarea id="message" name="message"/>
                </div>
                <br />
                <div><label htmlFor="message">Image Upload: [coming soon!] </label>
                </div>
                <br />
                <button type="submit">Send Girlfriend Application</button>
            </form>
            <Footer />
        </div>
    )
}