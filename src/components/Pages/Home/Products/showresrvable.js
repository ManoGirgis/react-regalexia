import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../../../../connections/woocommerce';
import prodimg from '../../../../Images/prodimg.png';
import Navigation from "../../../Common/Reusables/Navigation";
import Reservarbtn from '../../Carrito/reservebtn';
import { Row, Col } from "antd";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";

const Showresrvable = (props) => {
    const [productId, setProductId] = useState(props.id);
    const { data: products, loading, error } = WoocommerceConnection("products");
    const [product, setProduct] = useState({});
    const [fecha, setfecha] = useState('');
    const [hora, sethora] = useState('');

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

    const handledate = (e) => {
        setfecha(e.target.value);
    }

    const handletime = (e) => {
        sethora(e.target.value);
    }

    return (
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
                                    <tr>
                                        <td> <b>Date: </b> </td>
                                        <td><input type="date" id="start_date" name="start_date" onChange={handledate} /></td>
                                    </tr>
                                    <tr>
                                        <td> <b>Time: </b> </td>
                                        <td><input type="time" id="start_time" name="start_time" onChange={handletime} /></td>
                                    </tr>
                                    <tr>
                                        <td><b>Descripcion:</b></td>
                                        <td dangerouslySetInnerHTML={{ __html: product.description }} />
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col span={24}>
                            <Reservarbtn prod={product} date={fecha} time={hora} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Navigation navi="products" current={product.id} right={nextProd} left={prevProd} />
        </div>
    );
};

export default Showresrvable;
