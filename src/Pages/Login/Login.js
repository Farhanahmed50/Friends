import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from "../../Configurations/firebaseConfig"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handleError, setHandleError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                setHandleError(error.message)
            })
    }

    const ErrorHandle = () => {
        if (handleError === "Firebase: Error (auth/user-not-found).") {
            return (
                <span className={styles.errorHandle}>* User not found.</span>
            )
        }
        else if (handleError === "Firebase: Error (auth/invalid-email).") {
            return (
                <span className={styles.errorHandle}>* Invalid Email Address.</span>
            )
        }
        else if (handleError === "Firebase: Error (auth/network-request-failed).") {
            return (
                <span className={styles.errorHandle}>* Network request failed. Try again.</span>
            )
        }
        else if(handleError){
            return (
                <span className={styles.errorHandle}>* Something went wrong.</span>
            )
        }
        return (
            <>
            </>
        )
    }

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.heading}>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className={[styles.inputText, styles.upper].join(" ")} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <br />
                <input type="password" className= {[styles.inputText, styles.bottomText].join(" ")} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <br />
                <span>{handleError && <ErrorHandle />}</span>
                <br />
                <div className={styles.rememberMeContainer}>
                    <span>
                        <input type="checkbox" className={styles.checkBox} />
                        <span className={[styles.fontStyle, styles.remember].join(" ")} >Remember Me</span>
                    </span>
                    <span className={[styles.fontStyle, styles.forgot].join(" ")} >Forgot Password</span>
                </div>
                <br />
                <input type="submit" className={styles.button} value="Log in" />
                <br />
                <span className={styles.fontStyle}>Don't have an account? <Link to="../signup" className={styles.signUp}>Sign Up</Link></span>
            </form>
        </div>
    )
}

export default Login
