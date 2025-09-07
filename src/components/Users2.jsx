import React from 'react';
import { useLoaderData } from 'react-router';


const Users2 = () => {
    const user = useLoaderData();
    console.log(user);

    const {website,name} = user;
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Website Name : {website}</p>
        </div>
    );
};

export default Users2;