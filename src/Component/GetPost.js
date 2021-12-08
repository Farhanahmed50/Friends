import React from 'react'
import styles from './GetPost.module.css'
import image from './download.jpg'

function GetPost({post}) {
    console.log(post.description)
    return (
        <div className={styles.mainContainer}>
            <img src={image} className={styles.profileImage} />
            <span>{post.userName}</span>
            <br />
            <span>{post.description}</span> 
            <br />
            <img src={post.image} />
        </div>
    )
}

export default GetPost
