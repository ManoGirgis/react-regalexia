import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../../Common/Reusables/Card';
import WoocommerceConnection from '../../../../connections/woocommerce';
import WordpressConnection from '../../../../connections/wordpress';
import './../../../../styles/searches.css';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Searched = () => {
    const query = useQuery();
    const searchTerm = query.get('q');
    const [selectedProdId, setSelectedProdId] = useState();

    const { data: products, loading: loadingProducts, error: errorProducts } = WoocommerceConnection(`products`);
    const { data: posts, loading: loadingPosts, error: errorPosts } = WordpressConnection('/posts');

    if (loadingProducts || loadingPosts) {
        return <div>Loading...</div>;
    }

    if (errorProducts || errorPosts) {
        return <div>Error: {errorProducts ? errorProducts.message : errorPosts.message}</div>;
    }

    const filteredProds = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredPosts = posts.filter(post =>
        post.title && post.title.rendered && post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const setprod = (id) => {
        setSelectedProdId(id);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (

        !filteredProds.length > 0 && !filteredPosts.length > 0 ? (
            <div>
                <div className='No-results'>
                    <h1>No se han encontrado resulatados que coincidan con tu selección: <b>{searchTerm}</b></h1>
                </div>
            </div>

        ) : (






            <div>
                <h1>Search Results for: {searchTerm}</h1>
                {filteredProds.length > 0 ? (
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="">Productos</h2>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {filteredProds.map(product => (
                                    <Card
                                        onClick={() => setSelectedProdId(product.id)}
                                        key={product.id}
                                        id={product.id}
                                        title={product.name}
                                        button="Add to cart"
                                        text={product.price}
                                        unit="Euros"
                                        image={product.images[0]?.src}
                                        imageAlt="Product-image"
                                        item="Product"
                                        click={setprod}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2>No hay Productos.</h2>
                )}
                <hr className='strong-separator'></hr>
                {filteredPosts.length > 0 ? (
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="">Productos</h2>

                            {filteredPosts.map(post => (
                                <div key={post.id} className='container-blog'>
                                    <h1 className='header-blog'>{post.title.rendered}</h1>
                                    <span className='info-blog'>{formatDate(post.date)}</span>
                                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                    <hr></hr>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <h2>No hay posts.</h2>
                )}
            </div>)


    );
};

export default Searched;
