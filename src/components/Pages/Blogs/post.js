import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Get_POST_BY_ID } from '../../../connections/queries';
import Comments from '../Home/Comment/Comment';
import Organizar_fiestas_infantiles_1 from './../../../Images/Posts/Organizar-fiestas-infantiles-1.webp';
import AsideMenu from './AsideMenu';
import { Col, Row } from "antd";

const Post = (props) => {
    const { postId } = useParams();

    const { loading, error, data } = useQuery(Get_POST_BY_ID, {
        variables: { id: postId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const post = data?.post;

    if (!post) {
        return <p>No post found</p>;
    }

    const comments = post.comments?.edges || [];
    return (
        <Row gutter={[0, 0]} className='Blog'>
            <Col lg={{ span: 19 }} xs={{ span: 24 }} className='blog-cols'>
                <div>
                    <div>
                        <div className='container-post'>
                            {post.featuredImage ? (<img src={post.featuredImage.node.sourceUrl}></img>) : (<img src={Organizar_fiestas_infantiles_1}></img>)}
                            <div className='Blog-text-container'>
                                <h1>{post.title}</h1>
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                            </div>

                        </div>
                        <div>
                            <h2>Comments</h2>
                            {comments.length > 0 ? (
                                <ul className="comments-list">
                                    {comments.map(commentario => (
                                        <Comments
                                            comment={commentario}
                                        ></Comments>
                                    ))}
                                </ul>
                            ) : (
                                <p>No comments yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={{ span: 1 }} xs={{ span: 0 }} ></Col>
            <Col lg={{ span: 4 }} xs={{ span: 24 }} className='blog-cols'> <AsideMenu /></Col>
        </Row>
    );
}

export default Post;
