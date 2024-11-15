import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../../../../connections/woocommerce';
import AppointmentAv from '../../../../connections/AppointmentAv';
import prodimg from '../../../../Images/prodimg.png';
import Navigation from "../../../Common/Reusables/Navigation";
import Reservarbtn from '../../Carrito/reservebtn';
import { Row, Col, Select } from "antd";
import Showprod from "./showprod";

const Showresrvable = (props) => {
    const [productId, setProductId] = useState(props.id);
    const { data: products, loading, error } = WoocommerceConnection("products");
    const { data: appointments, loadingAppo, errorappo } = AppointmentAv("availabilities");
    const [product, setProduct] = useState({});
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [options, setOptions] = useState([]);
    const [minfecha, setminfecha] = useState();

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        setminfecha(`${year}-${month}-${day}`);
    }, []);

    useEffect(() => {
        if (products && products.length > 0) {
            const foundProduct = products.find(p => p.id === productId);
            if (foundProduct) setProduct(foundProduct);
        }

        if (appointments && appointments.length > 0) {
            //const productAppointments = appointments.filter(app => app.id === productId);
            const Fromtime = appointments.map(app => app.from);
            const ToTime = appointments.map(app => app.to);
            const availableTimes = [];

            function parseTimeString(timeStr) {
                if (typeof timeStr !== 'string') {
                    console.error('Expected a string in HH:mm format');
                    return null;
                }
                const [hours, minutes] = timeStr.split(':').map(Number);
                const date = new Date();
                date.setHours(hours, minutes, 0, 0);
                return date;
            }

            const fromTimeDate = parseTimeString(Fromtime.toString());
            const toTimeDate = parseTimeString(ToTime.toString());

            if (fromTimeDate && toTimeDate) {
                let currentTime = new Date(fromTimeDate);
                while (currentTime < toTimeDate) {
                    const formattedTime = currentTime.toTimeString().slice(0, 5);
                    availableTimes.push(formattedTime);

                    currentTime.setHours(currentTime.getHours() + 1);
                }
                setOptions(availableTimes);
            } else {
                console.error("Error: Invalid time format.");
            }


        }
    }, [fecha, appointments, productId]);

    if (loading || loadingAppo) return <div>Loading...</div>;
    if (error || errorappo) return <div>Error loading data</div>;

    const handleDateChange = (e) => setFecha(e.target.value);
    const handleTimeChange = (value) => setHora(value);

    const nextProd = (nextId) => setProductId(nextId);
    const prevProd = (prevId) => setProductId(prevId);

    return (
        product.type === "simple" ? (
            <Showprod id={props.id} nextProd={nextProd} prevProd={prevProd} prods={products} />
        ) : (
            <div className="product-details">
                <Row>
                    <Col xs={24} lg={12} className="tablecoulmnsleft">
                        <div className="product-img-container">
                            <img
                                src={product.images?.[0]?.src || prodimg}
                                alt={product.name || "product-default"}
                                id="Prodimg-detail"
                            />
                        </div>
                    </Col>
                    <Col xs={24} lg={12} className="tablecoulmnsright">
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
                                            <td><b>Fecha:</b></td>
                                            <td>
                                                <input
                                                    type="date"
                                                    min={minfecha}
                                                    onChange={handleDateChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Hora:</b></td>
                                            <td>
                                                <Select
                                                    style={{ width: '100%' }}
                                                    value={hora || undefined}
                                                    onChange={handleTimeChange}
                                                    placeholder="Seleccionar hora disponible"
                                                >
                                                    {options.map((time, index) => (
                                                        <Select.Option key={index} value={time}>
                                                            {time}
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
