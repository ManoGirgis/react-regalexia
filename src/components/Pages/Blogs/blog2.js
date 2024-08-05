import React, { useEffect, useState } from 'react';
import { Get_Posts } from './../../../connections/queries'
import { useQuery } from '@apollo/client'
import './../../../styles/blogs.css';
import Organizar_fiestas_infantiles_1 from './../../../Images/Posts/Organizar-fiestas-infantiles-1.webp';
import { Col, Row, Pagination } from "antd";
import AsideMenu from './AsideMenu';

const Blog = () => {
    //     const [posts, setPosts] = useState([]);
    //     const [authors, setAuthors] = useState({});
    //     const [selectedPostId, setSelectedPostId] = useState(null);

    //     useEffect(() => {
    //         const fetchPosts = () => {
    //             axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/posts`)
    //                 .then(async res => {
    //                     const posts = res.data;
    //                     setPosts(posts);

    //                     const authorIds = [...new Set(posts.map(post => post.author))];
    //                     const authorRequests = authorIds.map(id => axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/users/${id}`));
    //                     const authorResponses = await Promise.all(authorRequests);

    //                     const authors = authorResponses.reduce((acc, res) => {
    //                         acc[res.data.id] = res.data;
    //                         return acc;
    //                     }, {});

    //                     setAuthors(authors);
    //                 })
    //                 .catch(error => {
    //                     console.error('Error fetching posts:', error);
    //                 });
    //         };

    //         fetchPosts();

    //         const intervalId = setInterval(fetchPosts, 10000);

    //         return () => clearInterval(intervalId);
    //     }, []);

    //     const formatDate = (dateString) => {
    //         const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //         return new Date(dateString).toLocaleDateString(undefined, options);
    //     };

    //     return (
    //         <div>
    //             {selectedPostId ? (
    //                 <>
    //                     <Post id={selectedPostId} />
    //                     <Comment id={selectedPostId} />
    //                 </>
    //             ) : (
    //                 posts.map(post => (
    //                     <a onClick={() => setSelectedPostId(post.id)}>
    //                         <div key={post.id} onClick={() => setSelectedPostId(post.id)} className='container-blog'>
    //                             <h1 className='header-blog'>{post.title.rendered}</h1>
    //                             <span className='info-blog'>{formatDate(post.date)} por {authors[post.author]?.name}</span>
    //                             <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    //                             <hr></hr>
    //                         </div>
    //                     </a>
    //                 ))
    //             )}
    //         </div>
    //     );




    const [selectedPostId, setSelectedPostId] = useState(null);
    const { loading, error, data } = useQuery(Get_Posts);


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Row gutter={[0, 0]} className='Blog'>
                <Col lg={{ span: 19 }} xs={{ span: 24 }} className='blog-cols'>
                    <div>
                        {data.posts.nodes.map(post => (
                            <a key={post.id} onClick={() => setSelectedPostId(post.id)} href={'/' + "posts/" + post.id} className='Blog-linker'>
                                {post.featuredImage ?
                                    (
                                        <img src={post.featuredImage.node.sourceUrl} alt="Post" />
                                    ) : (
                                        <img src={Organizar_fiestas_infantiles_1} alt="Post" />
                                    )
                                }
                                <div className='container-blog'>
                                    <h1 className='header-blog'>{post.title}</h1>
                                    <span className='info-blog'>{formatDate(post.date)} por {post.author.node.name}</span>
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                                </div>
                                <hr></hr>
                            </a>
                        ))}
                        {/* )} */}
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </Col>
                <Col lg={{ span: 1 }} xs={{ span: 0 }} ></Col>
                <Col lg={{ span: 4 }} xs={{ span: 24 }} className='blog-cols'> <AsideMenu /></Col>
            </Row>
        </div>
    );
};

export default Blog;
