import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Paycomponent = () => {
    const location = useLocation();

    const handlePaymentMessage = (event) => {

        const trustedOrigins = [
            "http://localhost:3000"
        ];
        const { orderId } = location.state || {};
        const { status, token, errorCode } = event.data;

        if (!trustedOrigins.includes(event.origin)) {
            console.warn("Invalid message origin:", event.origin);
            return;
        }


        console.log("Payment Status:", status, "Token:", token, "Error Code:", errorCode);

        if (status === "success") {
            window.location.href = `/payment-done?status=success&token=${token}&orderId=${orderId}`;

        } else if (status === "failure") {
            window.location.href = `/payment-done?status=failure&errorCode=${errorCode}&orderId=${orderId}`;
        }
    };

    useEffect(() => {
        window.addEventListener("message", handlePaymentMessage);

        return () => {
            window.removeEventListener("message", handlePaymentMessage);
        };
    }, []);

    return (
        <div>
            <h1>Redsys Payment Integration</h1>
            <div className="card-redsys">
                <iframe
                    src={`${process.env.PUBLIC_URL}/Payment.html`}
                    title="Redsys Payment Form"
                    className="redsysIframe"
                />
            </div>
        </div>
    );
};

export default Paycomponent;
