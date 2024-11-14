import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Modal, InputNumber } from "antd";

const Reservarbtn = (props) => {
    const [quantity, setQuantity] = useState(1);

    const ToCart = () => {
        let cart = JSON.parse(localStorage.getItem('appointments'));
        if (!Array.isArray(cart)) {
            cart = [];
        }

        const productToAdd = {
            id: props.prod.id,
            name: props.prod.name,
            price: props.prod.price,
            fecha: props.date,
            hora: props.time,
            quantity: quantity
        };

        const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push(productToAdd);
        }

        localStorage.setItem('appointments', JSON.stringify(cart));

        Modal.success({
            title: 'Excursion Reservada',
            content: `${props.prod.name} ha sido añadido a tu carrito.`,
            onOk: () => {
                window.location.reload();
            }
        });
    }

    return (
        <div className='buy-cart'>
            <label htmlFor="Quantity">Cantidad: </label>
            <InputNumber
                id='Quantity'
                name="Quantity"
                keyboard
                size='small'
                min={1} max={100}
                defaultValue={1}
                onChange={value => setQuantity(value)}
            />
            <button onClick={ToCart} className="centered-icon-button">
                <FaCartPlus /> Reservar
            </button>
        </div>
    );
}

export default Reservarbtn;