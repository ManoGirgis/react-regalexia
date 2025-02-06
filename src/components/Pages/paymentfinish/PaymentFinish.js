import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useOrderUpdate from "./fetchings/useOrderUpdate";
import { Button } from "antd";

const PaymentFinish = () => {
    const location = useLocation();
    const navigate = useNavigate();  // ✅ Use useNavigate() hook

    const { updateOrderStatus, responseData, error, loading } = useOrderUpdate();

    const urlParams = new URLSearchParams(window.location.search);

    const [tokens, setTokens] = useState(urlParams.get("token") || null);
    const [status, setStatus] = useState(urlParams.get("status"));
    const [errorCode, setErrorCode] = useState(urlParams.get("errorCode") || null);
    const [orderId, setOrderId] = useState(urlParams.get("orderId"));

    console.log("PaymentFinish -> tokens", tokens);
    console.log("PaymentFinish -> status", status);
    console.log("PaymentFinish -> errorCode", errorCode);
    console.log("PaymentFinish -> orderId", orderId);

    useEffect(() => {
        if (status === "success" && orderId) {
            console.log("Payment succeeded. Updating order status...");
            updateOrderStatus(orderId, "completed");

            localStorage.removeItem("appointments");
            localStorage.removeItem("Product");

            const timer = setTimeout(() => {
                navigate("/");  // ✅ Use navigate() instead of window.location.href
            }, 5000);

            return () => clearTimeout(timer);
        } else if (status === "failure" && orderId) {
            console.log("Payment failed or invalid order ID.");
        }
    }, [status, orderId, navigate, updateOrderStatus]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    const handleRetry = () => {
        navigate(`/redsys`, { state: { orderId } });  // ✅ Use navigate() correctly
    };

    return (
        <div>
            <h1>Payment {status === "success" ? "Success" : "Failure"}</h1>
            {status === "success" && !errorCode ? (
                <p>Your order has been completed successfully!</p>
            ) : (
                <>
                    <p>There was an issue with your payment. Please try again.</p>
                    <Button type="primary" onClick={handleRetry}>Retry</Button>
                    <Button type="primary" onClick={() => navigate("/")}>Go back to home</Button>
                </>
            )}
        </div>
    );
};

export default PaymentFinish;
