import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../../../../connections/woocommerce';
import prodimg from '../../../../Images/prodimg.png';
import Navigation from "../../../Common/Reusables/Navigation";
import AddCartbtn from '../../Carrito/AddCartbtn';
import Showresrvable from './showresrvable';
import { Row, Col } from "antd";

const Showprod = (props) => {
    const [productId, setProductId] = useState(props.id);
    const { data: products, loading, error } = WoocommerceConnection("products");
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (products && products.length > 0) {
            const foundProduct = products.find(p => p.id === productId);
            if (foundProduct) {
                setProduct(foundProduct);
            }
        }
    }, [products, productId]);

    if (loading) { return <div>Cargando...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    const nextProd = (nextId) => {
        setProductId(nextId);
    };

    const prevProd = (prevId) => {
        setProductId(prevId);
    };

    return (

        product.type === "appointment" ? <Showresrvable product={product} nextProd={nextProd} prevProd={prevProd} /> :
            <div className="product-details">
                <Row>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} className="tablecoulmnsleft">
                        <div className="product-img-container">
                            <img
                                src={product.images && product.images.length > 0 ? product.images[0].src : prodimg}
                                alt={product.name || "product-default"}
                                id="Prodimg-detail"
                            />
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }} className="tablecoulmnsright">
                        <Row>
                            <Col span={24}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><b>Nombre:</b></td>
                                            <td>{product.name}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Precio:</b></td>
                                            <td>{product.price}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Descripcion:</b></td>
                                            <td dangerouslySetInnerHTML={{ __html: product.description }} />
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                            <Col span={24}> <AddCartbtn prod={product} /></Col>
                        </Row>
                    </Col>
                </Row>
                <Navigation navi="products" current={product.id} right={nextProd} left={prevProd} />
            </div>

    );
};

export default Showprod;
