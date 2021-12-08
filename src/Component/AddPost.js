import React, { useState } from 'react'
import styles from './addPost.module.css'
import image from './download.jpg'
import { addDoc, auth, db, collection} from '../Configurations/firebaseConfig'

function AddPost() {
    const [discription, setDiscription] = useState("");
    const [baseImage, setBaseImage] = useState("");
    const handlePost = () => {
        if (discription === "") {
            alert("Entry something first")
        }
        else {
            try {
                addDoc(collection(db, "Posts"), {
                    userName: auth.currentUser.displayName,
                    userEmail: auth.currentUser.email,
                    userUid: auth.currentUser.uid,
                    description: discription,
                    image: baseImage,
                    createdOn: Date()
                })
                alert("Post created successfully!")
            } catch (error) {
                alert(error);
            }
        }
    }
    const handleImageUpload = async (e) => {
        const files = e.target.files[0];
        const base = await convertBase64(files);
        setBaseImage(base);
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }
        })
    }


    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img src={image} className={styles.image} />
                <input onChange={(e) => setDiscription(e.target.value)} type="text" placeholder="What's in your mind? Farhan Ahmed" className={styles.inputBar} />
            </div>
            <hr />
            <input type="file" accept="image/*" className={styles.imageUploadButton} onChange={handleImageUpload} />
            {/* <FileBase type="file" multiple={false} onDone={({ base64 }) => setBaseImage({ ...postData, selectedFile: base64 })} /> */}
            <br />
            <button className={styles.postButton} onClick={handlePost}>Post</button>
        </div>
    )
}


export default AddPost