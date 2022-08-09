import React, { useState } from 'react'
import '../App.css';

function Formvalidation() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [securityq, setSecurityq] = useState("Select an Option")
    const [securitya, setSecuritya] = useState("")
    const [bio, setBio] = useState("")
    const [error, setError] = useState({
        firstnerror: "",
        lastnameerror: "",
        bioerror: ""
    })
    const [isdisabledsubmit, setIsdisabledsubmit] = useState(true)
    const handleInput = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if (name === 'FirstName') {
            if ((value.length < 3 || value.length > 15) && value.length > 0) {
                setError({
                    ...error, firstnerror: "Field Length should be 3 to 15 Letters",
                })
            } else {
                setError({ ...error, firstnerror: "" })
            }

        }

        if (name === 'LastName') {
            if ((value.length < 3 || value.length > 15) && value.length > 0) {
                setError({
                    ...error, lastnerror: "Field Length should be 3 to 15 ",
                })
            } else {
                setError({ ...error, lastnerror: "" })
            }

        }

        if (name === 'bio') {
            if ((value.length < 15 && value.length > 0)) {
                setError({
                    ...error, bioerror: "Field Length should be greater than 15 characters",
                })
            } else {
                setError({ ...error, bioerror: "" })
            }

        }
        if ((
            error.firstnerror === "" && error.lastnameerror === "" && error.bioerror === "") &&
            (firstname.length > 0 && lastname.length > 0 && bio.length > 0 && email.length > 0 && securitya.length > 0
            )) {

            setIsdisabledsubmit(false)
        }



    };
    const handleCancel = () => {
        setFirstname('');
        setLastname('')
        setEmail('')
        setSecurityq('')
        setSecuritya('')
        setBio('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("firstname : ", firstname)
        console.log("lastname : ", lastname)
        console.log("Email Id : ", email)
        console.log("security question : ", securityq)
        console.log("security answer : ", securitya)
        console.log("Bio : ", bio)
    }


    return (
        <div>
            <div className='contrdi'>
                <form action='' onSubmit={handleSubmit}>
                    <h4>Controlled Component</h4>
                    <div >
                        <label>First name :</label>
                        <input type='text' name='FirstName' placeholder='please enter your firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} onKeyUp={handleInput} />

                    </div>
                    <p className='erroo'>{error.firstnerror}</p>
                    <div >
                        <label>Last name :</label>
                        <input type='text' name='LastName' placeholder='please enter your lastname' value={lastname} onChange={(e) => setLastname(e.target.value)}  onKeyUp={handleInput} />

                    </div>
                    <p className='erroo'>{error.lastnerror}</p>
                    <div >
                        <label>Email :</label>
                        <input type='email' name='email' placeholder='please enter your email id' value={email} onChange={(e) => setEmail(e.target.value)} required />

                    </div>

                    <div >
                        <label>Security  Question :</label>
                        <select id="security" value={securityq} onChange={(e) => setSecurityq(e.target.value)}>
                            <option value="Select an Option">{securityq}</option>
                            <option value="What is your mother's maiden name ? ">What is your mother's maiden name </option>
                            <option value="What was the name of your first pet?">What was the name of your first pet </option>
                            <option value="What was the name of your first school?">What was the name of your first school </option>
                        </select>

                    </div>
                    
                    <div >
                        <label>Security Answer :</label>
                        <input type='text' name='securitya' placeholder='please enter some security answer' value={securitya} onChange={(e) => setSecuritya(e.target.value)} required/>

                    </div>
                    
                    <div >
                        <label>Bio :</label>
                        <textarea type='text' name='bio' placeholder='Enter some bio' value={bio} onChange={(e) => setBio(e.target.value)}   onKeyUp={handleInput} />

                    </div>
                    <p className='erroo'>{error.bioerror}</p>
                    <button type='submit' disabled={isdisabledsubmit}>Submit</button>
                    <button type='submit' onClick={handleCancel}>Cancel</button>

                </form>

            </div>
        </div>
    )
}

export default Formvalidation