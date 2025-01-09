import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentFinish = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const { orderId, order, status, errorCode } = location.state || {};
    console.log("orderId:", orderId);
    console.log("Error:", errorCode);

    useEffect(() => {
        if (orderId && !errorCode == "") {
            updateOrderStatus(orderId, "completed");
        } else {
            console.error("Payment failed or invalid order ID.");
        }
        if (orderId && errorCode) {
            console.error("Payment failed or invalid order ID.");
        }
    }, [orderId, errorCode]);

    useEffect(() => {
        if (!errorCode == "") {
            const timer = setTimeout(() => {
                window.location.href = "/";
            }, 5000);

            localStorage.removeItem('appointments')
            localStorage.removeItem('Product')


            return () => clearTimeout(timer);
        }
    }, [])

    const updateOrderStatus = async (orderId, status = "completed") => {
        const apiUrl = `${process.env.REACT_APP_WC_STORE_URL}/wp-json/wc/v3/orders/${orderId}`;
        const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
        const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

        try {
            const credentials = btoa(`${consumerKey}:${consumerSecret}`);
            const response = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${credentials}`,
                },
                body: JSON.stringify({ status: status }),
            });

            if (!response.ok) {
                throw new Error("Failed to update order status.");
            }

            console.log("Order status updated successfully.");
        } catch (error) {
            console.error("Error updating order status:", error);
        }
    };

    return (
        <div>
            <h1>Payment {errorCode == null ? "Success" : "Failure"}</h1>
            {errorCode == null ? (
                <p>Your order has been completed successfully!</p>
            ) : (
                <p>There was an issue with your payment. Please try again.</p>
            )}
        </div>
    );
};
export default PaymentFinish;

