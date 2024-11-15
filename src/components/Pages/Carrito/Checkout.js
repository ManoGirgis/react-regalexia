import { Button } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { cart } = location.state || { cart: [] };

    const apiUrl = process.env.REACT_APP_WOO_WORDPRESS_API_URL;
    const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
    const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

    const checkoutOrder = async () => {
        const url = `${apiUrl}/orders`;

        const orderData = {
            payment_method: 'bacs',
            payment_method_title: 'Direct Bank Transfer',
            set_paid: true,
            billing: {
                first_name: 'John',
                last_name: 'Doe',
                address_1: '969 Market',
                city: 'San Francisco',
                state: 'CA',
                postcode: '94103',
                country: 'US',
                email: 'john.doe@example.com',
                phone: '(555) 555-5555',
            },
            shipping: {
                first_name: 'John',
                last_name: 'Doe',
                address_1: '969 Market',
                city: 'San Francisco',
                state: 'CA',
                postcode: '94103',
                country: 'US',
            },
            line_items: cart.map(item => ({
                product_id: item.id,
                quantity: item.quantity,
            })),
        };

        try {
            const credentials = btoa(`${consumerKey}:${consumerSecret}`);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${credentials}`,
                },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Order created successfully:', data);
            } else {
                console.error('Error creating order:', data);
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const dataSource = cart.length > 0 ? cart.map(product => ({
        ...product,
        key: product.id,
        total: product.price * product.quantity
    })) : [];
    console.log(dataSource);
    return (
        <div>
            <h2>Checkout</h2>
            {/* Display cart details */}
            {cart.map(product => (
                <div key={product.id}>
                    <p>{product.name} - {product.quantity} x €{product.price}</p>
                </div>
            ))}
            <p>{dataSource.key}</p>
            {/* Button to complete the purchase */}
            <Button onClick={checkoutOrder} type="primary" className='Finalcheck'>
                Finalizar Compra
            </Button>
        </div>
    );
};

export default Checkout;
