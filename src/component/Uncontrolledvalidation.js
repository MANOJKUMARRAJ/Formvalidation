import React,{useRef,useState} from 'react'
import '../App.css';
const Uncontrolledvalidation =()=>{
    const Firstname=useRef()
    const lastname=useRef()
    const Email=useRef()
    const Securityques=useRef()
    const Securityans=useRef()
    const Bio=useRef()


    const [error, setError] = useState({
        firstnerror: "",
        lastnameerror: "",
        bioerror: "",
        secqerror:"",
        secaerror:"",
        emailerror:"",
    })
    const FormSubmit=(e)=>{
        e.preventDefault();
        const Firstname=useRef()
        const lastname=useRef()
        const Email=useRef()
        const Securityques=useRef()
        const Securityans=useRef()
        const Bio=useRef()
    }
    return (
        <div className='ucontrdi'>
            <h2>Uncontrolled component</h2>
            <form onSubmit={FormSubmit}>
            <div >
                        <label>First name :</label>
                        <input type='text' name='FirstName' placeholder='please enter your firstname' ref={Firstname} minLength='3' maxLength='15' required/>

                    </div>
                
                    <div >
                        <label>Last name :</label>
                        <input type='text' name='LastName' placeholder='please enter your lastname' ref={lastname}  minLength='3' maxLength='15'required />

                    </div>
                    
                    <div >
                        <label>Email :</label>
                        <input type='email' name='email' placeholder='please enter your email id' ref={Email} required />

                    </div>

                    <div >
                        <label>Security  Question :</label>
                        <select id="security"  >
                            <option value="Select an Option">Select an Option</option>
                            <option value="What is your mother's maiden name ? " ref={Securityques}>What is your mother's maiden name </option>
                            <option value="What was the name of your first pet?" ref={Securityques}>What was the name of your first pet </option>
                            <option value="What was the name of your first school?" ref={Securityques}>What was the name of your first school </option>
                        </select>

                    </div>
                    
                    <div >
                        <label>Security Answer :</label>
                        <input type='text' name='securitya' placeholder='please enter some security answer' ref={Securityans}  required/>

                    </div>
                    
                    <div >
                        <label>Bio :</label>
                        <textarea type='text' name='bio' placeholder='Enter some bio' ref={Bio} required/>

                    </div>
                    <button type='submit' >Submit</button>
                    <button type='submit' >Cancel</button>
                    </form>

        </div>
    )
}
export default Uncontrolledvalidation