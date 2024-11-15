import { restIniciaPeticion, createRedirectForm } from './path-to-your-redsys-config';

const initiatePayment = async (orderDetails) => {
    try {
        const paymentData = await restIniciaPeticion({
            amount: `${orderDetails.amount}`,
            currency: '978',
            order: `${orderDetails.id}`,
            merchantCode: '999008881',
            terminal: '1',
            transactionType: '0',
            merchantURL: `${process.env.REACT_APP_WORDPRESS_API_URL}callback`,
            urlOK: 'https://127.0.0.1:3000/payment-success',
            urlKO: 'https://127.0.0.1:3000/payment-failed',
        });

        return paymentData;
    } catch (error) {
        console.error('Error initiating payment:', error);
        throw error;
    }
};