import React, { useEffect } from 'react';

const Paycomponent = () => {
    const handlePaymentMessage = (event) => {
        const trustedOrigins = [
            "http://localhost:3000"
        ];

        if (!trustedOrigins.includes(event.origin)) {
            console.warn("Invalid message origin:", event.origin);
            return;
        }

        const { status, token, errorCode } = event.data;
        console.log("Payment Status:", status, "Token:", token, "Error Code:", errorCode);

        if (status === "success") {
            window.location.href = `/payment-done?status=success&token=${token}`;
            
        } else if (status === "failure") {
            window.location.href = `/payment-done?status=failure&errorCode=${errorCode}`;
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
