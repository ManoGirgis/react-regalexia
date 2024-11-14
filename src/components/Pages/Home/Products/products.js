import React, { useEffect, useState } from 'react';
import Card from '../../../Common/Reusables/Card';
import WoocommerceConnection from '../../../../connections/woocommerce';
import Showprod from './showprod';
import Showresrvable from './showresrvable';
import prodimg from '../../../../Images/prodimg.png';
import './../../../../styles/products.css';

const Products = () => {

    const { data: products, loading, error } = WoocommerceConnection('products');
    const [selectedProdId, setSelectedProdId] = useState();
    const [type, setType] = useState('appointment');
    const [imagen, setimagen] = useState(prodimg);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const setprod = (id, typeee) => {
        setSelectedProdId(id);
        setType(typeee);
    }

    return (
        <div>
            {selectedProdId ? (
                <>
                    {type === "appointment" ? <Showresrvable id={selectedProdId} /> : <Showprod id={selectedProdId} />}

                </>
            ) : <>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h1 className="">Productos</h1>
                        <ul className="grid-products">
                            {products.map(product => (
                                <Card
                                    // onClick={() => setSelectedProdId(product.id) }
                                    key={product.id}
                                    id={product.id}
                                    title={product.name}
                                    button="Add to cart"
                                    text={product.price}
                                    unit="Euros"
                                    image={product.images[0]?.src}
                                    // image={prodimg}
                                    imageAlt="Product-image"
                                    item="Product"
                                    click={setprod}
                                    type={product.type}
                                >
                                </Card>

                            ))}
                        </ul>
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default Products;


