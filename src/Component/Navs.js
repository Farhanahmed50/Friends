import React from 'react'
import './navBar.css'
import logo from './download.jpg'
import { useNavigate, Link } from 'react-router-dom'
import { auth, signOut } from '../Configurations/firebaseConfig';

function Navs() {
    const navigate = useNavigate();
    const NavItems = ({ navName }) => {
        if (navName === "Home") {
            return (
                <Link to="/" className="navItem">{navName}</Link>
            )
        }
        return (
            <Link to={navName.toLowerCase()} className="navItem">{navName}</Link>
        )
    }
    const handleProfile = () => {
        navigate("profile");
    }
    const handleLogo = () => {
        navigate("/");
    }
    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            console.log("Successfully Logout");
        })
        .catch((error) => {
            alert(error.message);
        })
    }
    return (
        <div className="navBar">
            <span className="team-logo" onClick={handleLogo}>
                Friends
            </span>
            <NavItems navName="Home" />
            <NavItems navName="Setting" />
            <NavItems navName="About" />
            <img onClick={handleProfile} src={logo} className="profile"></img>
            <button className="logout" onClick={handleLogout}>Logout</button>
        </div>

    )
}

export default Navs
