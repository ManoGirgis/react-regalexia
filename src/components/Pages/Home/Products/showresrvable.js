import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../../../../connections/woocommerce';
import AppointmentAv from '../../../../connections/AppointmentAv';
import prodimg from '../../../../Images/prodimg.png';
import Navigation from "../../../Common/Reusables/Navigation";
import Reservarbtn from '../../Carrito/reservebtn';
import { Row, Col, Select, Input } from "antd";
import Showprod from "./showprod";

const Showresrvable = (props) => {
    const [productId, setProductId] = useState(props.id);
    const { data: products, loading, error } = WoocommerceConnection("products");
    const { data: appointments, loadingAppo, errorappo } = AppointmentAv("availabilities");
    const [appointment, setAppointment] = useState({});
    const [product, setProduct] = useState({});
    const [fecha, setFecha] = useState('');
    const [minfecha, setminfecha] = useState();
    const [hora, setHora] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            const foundProduct = products.find(props => props.id === productId);
            if (foundProduct) {
                setProduct(foundProduct);
            }
        }
        if (appointments && appointments.length > 0) {
            const foundAppointment = appointments.find(props => props.id === productId);
            if (foundAppointment) {
                setAppointment(foundAppointment);
                console.log(appointment);
            }
        }

    }, [products, productId]);
    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setminfecha(formattedDate);
    }, []);

    if (loading) { return <div>Cargando...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    const handleDateChange = (e) => setFecha(e.target.value);
    const handleTimeChange = (value) => setHora(value);


    const nextProd = (nextId) => {
        setProductId(nextId);
    };

    const prevProd = (prevId) => {
        setProductId(prevId);
    };

    const addOption = (value) => {
        if (value && !options.includes(value)) {
            setOptions([...options, value]);
        }
        console.log(options)
    };
    return (
        product.type === "simple" ? (
            <Showprod id={props.id} nextProd={nextProd} prevProd={prevProd} prods={products} />
        ) : (
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
                                            <td>
                                                <input
                                                    type="date"
                                                    id="start_date"
                                                    name="start_date"
                                                    min={minfecha}
                                                    onChange={handleDateChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <b>Time: </b> </td>
                                            <td>
                                                <Select
                                                    style={{ width: '100%' }}
                                                    value={hora || undefined}
                                                    onSelect={handleTimeChange}
                                                    placeholder="Select an available time"
                                                    dropdownRender={(menu) => (
                                                        <div>
                                                            {menu}
                                                            <div
                                                                style={{ padding: '8px', cursor: 'pointer' }}
                                                                onMouseDown={() => addOption(inputValue)}
                                                            >
                                                                Add "{inputValue}" to options
                                                            </div>
                                                        </div>
                                                    )}
                                                >
                                                    {options.map((option) => (
                                                        <Select.Option key={option} value={option}>
                                                            {option}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </td>
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
        )
    );
};
export default Showresrvable;
