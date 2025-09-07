import React, { Suspense, useState } from 'react';
import '../postCSS/user.css'
import { Link, useNavigate } from 'react-router';
import User3 from './User3';
// import { Link } from 'react-router-dom';




const User = ({ user }) => {



    // console.log(user);
    const [showInfo, setShowInfo] = useState(false);
    const { name, id } = user
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

    const userPormice = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json());
    // const 
    return (
        <div className='user'>
            <h3>Name : {name}</h3>
            {/* <p>User Name : {username}</p>
            <p>E-mails : {email}</p> */}
            <Link to={`/users/${id}`}>Show More</Link>
            {/* <Link to={`/users.id/${id}`}>Show More</Link> */}
            <button onClick={handleNavigate}>Go Home</button>

            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>
            {
                showInfo &&
                <Suspense fallback={<span>Loading...</span>}>
                    <User3 userPormice={userPormice}></User3>
                </Suspense>
            }


        </div>
    );
};

export default User;

