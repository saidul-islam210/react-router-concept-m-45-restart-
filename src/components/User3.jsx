import React, { use } from 'react';

const User3 = ({userPormice}) => {
    const user3 = use(userPormice);
    // console.log(user3);
    const {username,email,phone,company} = user3;
    return (
        <div>
            <h3>User name : {username}</h3>
            <p>phone : {phone}</p>
            <p>Email : {email}</p>
            <p>Company : {company.name}</p>
        </div>
    );
};

export default User3;

 