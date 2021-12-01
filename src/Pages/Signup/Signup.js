import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';
import { auth, createUserWithEmailAndPassword, updateProfile } from '../../Configurations/firebaseConfig'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [fieldError, setFieldError] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        if (!name || !email || !password) {
            setFieldError(true);
        }
        else {
            setFieldError(false);
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user);
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                    navigate("../");
                })

        }
    }

    const Field = () => {
        return (<span className={styles.required}>*All fields are required.</span>)
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className={[styles.inputText, styles.upper].join(" ")} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                <br />
                <input type="text" className={styles.inputText} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <br />
                <input type="password" className={styles.inputText} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <br />
                {fieldError && <Field />}
                <div>
                    <input type="checkbox" className={styles.checkBox} />
                    <span className={[styles.fontStyle, styles.remember].join(" ")}>I have accept the <span className="font-style forgot">Terms & Conditions</span> </span>
                </div>
                <br />
                <input type="submit" className={styles.button} value="Sign Up" />
                <br />
                <span className={[styles.fontStyle, styles.haveAccount].join(" ")}>Already have an account? <Link to="../login" className={styles.signUp}>Log In</Link></span>
            </form>
        </div>
    )
}

export default Signup
