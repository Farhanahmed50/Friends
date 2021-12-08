import React, {useState, useEffect} from 'react';
import { auth, db, collection, getDocs } from '../Configurations/firebaseConfig';
import GetPost from './GetPost'

function GetPosts() {
    const [userData, setUserData] = useState([]);
    const docRef = collection(db, "Posts");

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(docRef);
            setUserData(data.docs.map((doc) => {
                if (doc.data().userEmail === auth.currentUser.email) {
                    return doc.data();
                }
            }))
        }
        getUser();
    }, [])

    console.log(userData)
    const posts = userData.map((post, index) => <GetPost key={index} post={post} />);
    // console.log(posts.props.description)
    return (
        <div>
            {posts}
        </div>
    )
}

export default GetPosts
