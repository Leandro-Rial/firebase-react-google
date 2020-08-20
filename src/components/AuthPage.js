import React from 'react';
import firebase from 'firebase'

export const AuthPage = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const authWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
    }

    return (
        <>
            <button onClick={authWithGoogle}>Login</button>
        </>
    ) 
}