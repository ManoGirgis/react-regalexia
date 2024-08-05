import React, { useEffect, useState } from 'react';
import WordpressConnection from '../../../../connections/wordpress';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(WordpressConnection('posts'));
        const intervalId = setInterval(WordpressConnection, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title.rendered}</li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
