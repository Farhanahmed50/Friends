import React from 'react';
import { auth } from '../../Configurations/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Navs from '../../Component/Navs';
import AddPost from '../../Component/AddPost';
import styles from './Home.module.css';
import GetPosts from '../../Component/GetPosts';

function Home() {
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.signOut();
        navigate("/login");
    }

    const CurrentUser = () => {
        const [user, loading, error] = useAuthState(auth);

        if (loading) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
        if (error) {
            return (
                <div>
                    <p>Error: {error}</p>
                </div>
            );
        }
        if (user) {
            return (
                <div>
                    <h1>{user.displayName}</h1>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            );
        }
        if (!auth.currentUser) {
            navigate("/login");
        }
        return (
            <>
            </>
        )
    };
    console.log(auth.currentUser)

    return (
        <div className={styles.mainContainer}>
            <Navs />
            <CurrentUser />
            <AddPost />
            <GetPosts />
        </div>
    )
}

export default Home
