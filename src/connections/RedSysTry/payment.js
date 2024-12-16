import React, { useState } from "react";
import { createPaymentForm } from "./RedsysApi"; // Function to interact with Redsys API.

const Payment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePayment = async (cart, totalAmount, billingDetails) => {
        setLoading(true);
        setError(null);

        try {
            // Generate the payment request for Redsys
            const paymentData = {
                Ds_Merchant_Amount: Math.round(totalAmount * 100).toString(), // Amount in cents
                Ds_Merchant_Currency: "978", // EUR currency code
                Ds_Merchant_Order: Math.floor(Math.random() * 1000000000000).toString().padStart(12, "0"),
                Ds_Merchant_MerchantCode: process.env.REACT_APP_REDSYS_MERCHANT_CODE,
                Ds_Merchant_Terminal: "1",
                Ds_Merchant_TransactionType: "0",
                Ds_Merchant_MerchantURL: `${process.env.REACT_APP_SITE_URL}/redsys-notification`,
                Ds_Merchant_UrlOK: `${process.env.REACT_APP_SITE_URL}/payment-success`,
                Ds_Merchant_UrlKO: `${process.env.REACT_APP_SITE_URL}/payment-failure`,
            };

            // Create a payment form with Redsys
            const formHtml = await createPaymentForm(paymentData);

            // Redirect user to Redsys payment form
            const wrapper = document.createElement("div");
            wrapper.innerHTML = formHtml;
            document.body.appendChild(wrapper);

            const formElement = wrapper.querySelector("form");
            if (formElement) {
                formElement.submit(); // Automatically submit the form
            } else {
                throw new Error("Failed to generate payment form.");
            }
        } catch (error) {
            console.error("Error initiating Redsys payment:", error);
            setError("Payment initialization failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return { handlePayment, loading, error };
};

export default Payment;
