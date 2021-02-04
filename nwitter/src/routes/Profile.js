import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { authService, dbService } from 'fbase';

const Profile = ({ userObj }) => {
    const history = useHistory();

    useEffect(() => {
        getMyNweets();
    })

    const onLogOutClick = () => {
        authService.signOut();
        history.push('/');
    };
    const getMyNweets = async () => {
        const nweets = await dbService.collection('nweets').where("creatorId", "==", userObj.uid).orderBy("createdAt").get();
        console.log(nweets.docs.map(doc => doc.data()));
    };

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}

export default Profile;