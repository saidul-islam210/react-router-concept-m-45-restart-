import React, { use } from 'react';
import Post from './Post';

const Posts = ({postPromice}) => {
    const posts = use(postPromice)
    // console.log(posts);
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;