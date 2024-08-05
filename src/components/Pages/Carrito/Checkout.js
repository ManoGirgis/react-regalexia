import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { cart } = location.state || { cart: [] };

    const apiUrl = process.env.REACT_APP_WOO_WORDPRESS_API_URL;
    const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
    const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

    const checkoutOrder = async () => {
        const url = new URL(`${apiUrl}/orders`);
        url.searchParams.append('consumer_key', consumerKey);
        url.searchParams.append('consumer_secret', consumerSecret);

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
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();
            console.log('Order created successfully:', data);
            // Aquí puedes redirigir al usuario a una página de confirmación, etc.
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            {/* Mostrar detalles del carrito */}
            {cart.map(product => (
                <div key={product.id}>
                    <p>{product.name} - {product.quantity} x ${product.price}</p>
                </div>
            ))}
            {/* Botón para finalizar la compra */}
            <button onClick={checkoutOrder}>Finalizar Compra</button>
        </div>
    );
};

export default Checkout;
