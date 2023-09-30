
import React, { useState } from 'react'

const FormValidation = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const { name, email, password, confirmPass } = user;  // destructuring

    function formValid(e) {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || confirmPass === '') {
            setError("All fields are required");
            setSuccess("")
            return
        }

        if (name.trim().includes(" ") == false) {
            setError("Name should be atleast 2 words")
            setSuccess("")
            return
        }
        if (email.includes("@") == false) {
            setError("Email should be valid")
            setSuccess("")
            return
        }
        if (password.length < 8) {
            setError("Password should be atleast 8 characters long")
            setSuccess("")
            return
        }
        if (password != confirmPass) {
            setError("Password and confirm password should not matchched")
            setSuccess("")
            return
        }
        setSuccess("Form submitted successfully")
        setError("")
    }

    return (
        <div className='FormValidation'>
            {
                error && <h3 style={{ color: "red", textAlign: 'center', fontSize: '30px' }}>{error}</h3>
            }

            {
                success && <h3 style={{ color: "green", textAlign: 'center', fontSize: '30px' }}>{success}</h3>
            }
            <form onSubmit={formValid}>
                <input type="text" placeholder='Enter your name' onChange={e => setUser({
                    ...user, name:
                        e.target.value
                })} />
                <input type='email' placeholder='Enter your email' onChange={e => setUser({ ...user, email: e.target.value })} />
                <input type="password" placeholder='Password' onChange={e => setUser({ ...user, password: e.target.value })} />
                <input type="password" placeholder='Confirmed Password' onChange={e => setUser({ ...user, confirmPass: e.target.value })} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormValidation




