import { useState } from 'react'
import firebase, { db } from '../../utils/Firebase'

const useAddPost = () => {
    const [title, settitle] = useState('')
    const [linkTo, setLinkTo] = useState('')
    const [imgLink, setImgLink] = useState('')
    const handleSubmite = (e) => {
        e.preventDefault()
        db.collection("posts").add({
            title,
            linkTo,
            imgLink,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            upvote: 0,
            downvote: 0
        });
    }
    return { settitle, setLinkTo, setImgLink, handleSubmite }

}

export default useAddPost;