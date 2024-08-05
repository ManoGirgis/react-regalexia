import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Col, Row, Pagination } from "antd";
import { Get_Posts, GET_POST_NUMBER } from './../../../connections/queries';
import './../../../styles/blogs.css';
import Organizar_fiestas_infantiles_1 from './../../../Images/Posts/Organizar-fiestas-infantiles-1.webp';
import AsideMenu from './AsideMenu';

const Blog = () => {
    const [first] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [after, setAfter] = useState(null);

    const { loading, error, data, fetchMore } = useQuery(Get_Posts, {
        variables: { first, after },
        notifyOnNetworkStatusChange: true,
    });

    const { loading: loadingPostNumber, error: errorPostNumber, data: postNumberData } = useQuery(GET_POST_NUMBER);

    useEffect(() => {
        if (currentPage === 1) {
            setAfter(null);
        } else {
            const fetchPageData = async () => {
                const endCursor = await fetchEndCursor((currentPage - 1) * first);
                setAfter(endCursor);
            };
            fetchPageData();
        }
    }, [currentPage]);

    const fetchEndCursor = async (skip) => {
        const result = await fetchMore({
            variables: { first: skip, after: null },
        });
        return result.data.posts.pageInfo.endCursor;
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading || loadingPostNumber) return <p>Loading...</p>;
    if (error || errorPostNumber) return <p>Error: {error?.message || errorPostNumber?.message}</p>;

    const posts = data?.posts?.edges?.map(edge => edge.node) || [];
    const totalPosts = postNumberData?.posts?.pageInfo?.total || 0;

    return (
        <Row gutter={[0, 0]} className='Blog'>
            <Col lg={{ span: 19 }} xs={{ span: 24 }} className='blog-cols'>
                <div>
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <a key={post.id} href={'/' + "posts/" + post.id} className='Blog-linker'>
                                {post.featuredImage ? (
                                    <img src={post.featuredImage.node.sourceUrl} alt="Post" />
                                ) : (
                                    <img src={Organizar_fiestas_infantiles_1} alt="Post" />
                                )}
                                <div className='container-blog'>
                                    <h1 className='header-blog'>{post.title}</h1>
                                    <span className='info-blog'>{formatDate(post.date)} por {post.author.node.name}</span>
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>
                                <hr></hr>
                            </a>
                        ))
                    ) : (
                        <p>Sin publicaciones disponibles.</p>
                    )}
                    <Pagination
                        current={currentPage}
                        pageSize={first}
                        total={totalPosts}
                        onChange={handlePageChange}
                        align="center"
                    />
                </div>
            </Col>
            <Col lg={{ span: 1 }} xs={{ span: 0 }} ></Col>
            <Col lg={{ span: 4 }} xs={{ span: 24 }} className='blog-cols'>
                <AsideMenu />
            </Col>
        </Row>
    );
};

export default Blog;
