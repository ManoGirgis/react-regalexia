import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useOrderUpdate from "./fetchings/useOrderUpdate";

const PaymentFinish = () => {
    const location = useLocation();
    const { updateOrderStatus, responseData, error, loading } = useOrderUpdate();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const [tokens, setTokens] = useState(urlParams.get('token') || null);
    const [status, setStatus] = useState(urlParams.get('status'));
    const [errorCode, setErrorCode] = useState(urlParams.get('errorCode') || null);
    const [orderId, setOrderId] = useState(urlParams.get('orderId'));

    console.log("PaymentFinish -> tokens", tokens)
    console.log("PaymentFinish -> status", status)

    console.log("PaymentFinish -> orderId", orderId)

    useEffect(() => {
        if (status === "success" && orderId) {
            console.log("Payment succeeded. Updating order status...");
            updateOrderStatus(orderId, "completed");

            localStorage.removeItem("appointments");
            localStorage.removeItem("Product");

            const timer = setTimeout(() => {
                window.location.href = "/";
            }, 5000);

            return () => clearTimeout(timer);
        } else if (status === "failure" && orderId) {
            console.log("Payment failed or invalid order ID.");
        }
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Payment {status === "success" ? "Success" : "Failure"}</h1>
            {status === "success" && !errorCode ? (
                <p>Your order has been completed successfully!</p>
            ) : (
                <p>There was an issue with your payment. Please try again.</p>
            )}
        </div>
    );
};

export default PaymentFinish;
