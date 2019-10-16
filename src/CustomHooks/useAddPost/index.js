import { useState } from 'react'
import firebase, { db } from '../../utils/Firebase'

const useAddPost = () => {
    const [title, settitle] = useState('')
    const [linkTo, setLinkTo] = useState('')
    const [imgLink, setImgLink] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const handleSubmite = (e) => {
        e.preventDefault()
        if (!title || !linkTo || !imgLink) {
            setIsValid(true)
            console.log('emty firlds')
        } else {
            setIsSubmit(true)
            setIsValid(false)
            db.collection("posts").add({
                title,
                linkTo,
                imgLink,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                upvote: 0,
                downvote: 0
            });
        }
        setTimeout(() => {
            setIsValid(false)
            setIsSubmit(false)
        }, 3500)
    }
    return { settitle, setLinkTo, setImgLink, handleSubmite, isValid, isSubmit }

}

export default useAddPost;