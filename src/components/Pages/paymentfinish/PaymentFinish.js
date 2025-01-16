import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentFinish = () => {
    const location = useLocation();
    const { orderId, order, errorCode } = location.state || {}; // Destructure state from location

    console.log("Order ID:", orderId);
    console.log("Error Code:", errorCode);

    useEffect(() => {
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
                    body: JSON.stringify({ status }),
                });

                if (!response.ok) {
                    throw new Error("Failed to update order status.");
                }

                console.log("Order status updated successfully.");
            } catch (error) {
                console.error("Error updating order status:", error);
            }
        };

        if (orderId && !errorCode) {
            console.log("Payment succeeded. Updating order status...");
            updateOrderStatus(orderId, "completed");
            localStorage.removeItem("appointments");
            localStorage.removeItem("Product");

            // Redirect after 5 seconds
            const timer = setTimeout(() => {
                window.location.href = "/";
            }, 5000);

            return () => clearTimeout(timer);
        } else if (orderId && errorCode) {
            console.error("Payment failed or invalid order ID.");
        }
    }, [orderId, errorCode]);

    return (
        <div>
            <h1>Payment {errorCode ? "Failure" : "Success"}</h1>
            {errorCode ? (
                <p>There was an issue with your payment. Please try again.</p>
            ) : (
                <p>Your order has been completed successfully!</p>
            )}
        </div>
    );
};

export default PaymentFinish;
