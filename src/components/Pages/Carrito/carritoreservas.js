import React, { useState } from 'react';
import Total from './Total';
import { Table, InputNumber, Popconfirm, Button } from 'antd';
import { CiTrash, CiEdit } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CarritoReservas = () => {
    const navigate = useNavigate();

    const redirectToCheckoutPage = () => {
        navigate('/checkout', { state: { cart } });
    };

    const [cart, setCart] = useState(() => {
        let carrito = JSON.parse(localStorage.getItem('appointments'));
        return Array.isArray(carrito) ? carrito : [];
    });

    const redirectToCheckout = (prodID, quant, fecha, hora) => {
        const cartUrl = `${process.env.REACT_APP_WEBSITE_URL}?add-to-cart=${prodID}&appointment_type=1&quantity=${quant}&start_date=${fecha}&start_time=${hora}`;
        window.location.href = cartUrl;
    };

    const redirectToCheckoutAll = (cart) => {
        let cartUrl = `${process.env.REACT_APP_WEBSITE_URL}?add-to-cart=`;

        cart.forEach((product, index) => {
            const separator = index === 0 ? '' : ',';
            cartUrl += `${separator}${product.id}`;
        });

        cartUrl += '&quantities=';
        cart.forEach((product, index) => {
            const separator = index === 0 ? '' : ',';
            cartUrl += `${separator}${product.quantity}`;
        });

        cartUrl += '&start_dates=';
        cart.forEach((product, index) => {
            const separator = index === 0 ? '' : ',';
            cartUrl += `${separator}${product.fecha}`;
        });

        cartUrl += '&start_times=';
        cart.forEach((product, index) => {
            const separator = index === 0 ? '' : ',';
            cartUrl += `${separator}${product.hora}`;
        });

        window.location.href = cartUrl;
    };

    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem('appointments', JSON.stringify(updatedCart));
    };

    const handleDelete = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    };

    const handleQuantityChange = (value, id) => {
        const updatedCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: value };
            }
            return product;
        });
        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    };

    const dataSource = cart.length > 0 ? cart.map(product => ({
        ...product,
        key: product.id,
        total: product.price * product.quantity
    })) : [];

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
        },
        {
            title: 'Hora',
            dataIndex: 'hora',
            key: 'hora',
        },
        {
            title: 'Precio',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Cantidad',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <InputNumber
                    min={1}
                    value={record.quantity}
                    onChange={(value) => handleQuantityChange(value, record.id)}
                />
            ),
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Acciones',
            dataIndex: 'actions',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Popconfirm
                        title="Are you sure you want to delete this item?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" icon={<CiTrash />} />
                    </Popconfirm>
                    <Button onClick={() => redirectToCheckout(record.id, record.quantity, record.fecha, record.hora)} type="link" icon={<CiEdit />} />
                </div>
            ),
        },
    ];

    return (
        <div className='Cart-container'>
            {cart.length > 0 ? (
                <>
                    <Table dataSource={dataSource} columns={columns} pagination={false} />
                    <Total subtotal={dataSource.reduce((total, product) => total + product.total, 0)} />
                    <Button onClick={redirectToCheckoutPage} type="primary" className='Finalcheck'>
                        <FaLock /> Finalizar compra
                    </Button>
                </>
            ) : (
                <div>
                    <h1>Excursion</h1>
                    <p>No Hay Excursion en el Carrito</p>
                </div>
            )}
        </div>
    );
};

export default CarritoReservas;
