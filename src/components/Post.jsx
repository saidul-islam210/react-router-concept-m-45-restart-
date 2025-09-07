import React from 'react';
// import 'postCSS/post.css'
import '../postCSS/post.css'


const Post = ({post}) => {
    // console.log(post);
    const {title,id} = post
    return (
        <div className='post'>
            <h3>Post Title : {title}</h3>
            <h4>User Id : {id}</h4>
        </div>
    );
};

export default Post;