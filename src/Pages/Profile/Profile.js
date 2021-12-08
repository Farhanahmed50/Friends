import React from 'react'
import styles from './Profile.module.css';
import coverPhoto from './Assets/147522826_1090227998152145_8248402290964246401_n.jpg';
import profilePhoto from './Assets/186957610_1150161695492108_2117671500814864539_n.jpg'
import Navs from '../../Component/Navs'
import { auth } from '../../Configurations/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
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
                    <span>{user.displayName}</span>
                    {/* <button onClick={handleLogout}>Log out</button> */}
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
    return (
        <div className={styles.container}>
            <Navs />
            <div>
                <div className={styles.coSetting}>
                    <img className={styles.coPhoto} src={coverPhoto} />
                </div>
                <div className={styles.profPhoto}>
                    <img className={styles.proPhoto} src={profilePhoto} />
                    <CurrentUser />
                </div>
            </div>
        </div>
    )
}

export default Profile
