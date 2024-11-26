import { Button } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Payment from '../../../connections/payment';

const Checkout = () => {
    const location = useLocation();
    const { cart } = location.state || { cart: [] };
    const [sum, setSum] = React.useState(0);
    const { handlePayment, response, loading, error } = Payment();

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
            })
            ),
        };

        cart.map(item => {
            setSum(sum + item.price * item.quantity);
        })

        const state = handlePayment(sum);

        if (state) {
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
                    localStorage.removeItem('Product');
                    localStorage.removeItem('appointments');
                } else {
                    console.error('Error creating order:', data);
                }
            } catch (error) {
                console.error('Error creating order:', error);
            }
        } else {
            <div>
                <h1>Payment failed</h1>
                <p>{error}</p>
            </div>
        }


    };

    const dataSource = cart.length > 0 ? cart.map(product => ({
        ...product,
        key: product.id,
        total: product.price * product.quantity
    })) : [];
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
