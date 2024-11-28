import React, { useState } from "react";
import { createPaymentForm } from "./RedsysApi";

const Payment = () => {
    const [response, setResponse] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePayment = async (sum) => {
        setLoading(true);
        setResponse(null);
        setError(null);

        try {
            const totalAmount = Math.round(sum * 100);

            const paymentData = {
                Ds_Merchant_Amount: totalAmount.toString(),
                Ds_Merchant_Currency: "978",
                Ds_Merchant_Order: Math.floor(Math.random() * 1000000000000).toString().padStart(12, "0"),
                Ds_Merchant_MerchantCode: process.env.REACT_APP_REDSYS_MERCHANT_CODE,
                Ds_Merchant_Terminal: "1",
                Ds_Merchant_TransactionType: "0",
                Ds_Merchant_MerchantURL: `${process.env.REACT_APP_SITE_URL}/redsys-notification`,
                Ds_Merchant_UrlOK: `${process.env.REACT_APP_SITE_URL}/payment-success`,
                Ds_Merchant_UrlKO: `${process.env.REACT_APP_SITE_URL}/payment-failure`,
            };

            const formHtml = await createPaymentForm(paymentData);

            const wrapper = document.createElement("div");
            wrapper.innerHTML = formHtml;
            document.body.appendChild(wrapper);

            const formElement = wrapper.querySelector("form");
            if (formElement) {
                formElement.submit();
                setResponse("Payment initiated");
            } else {
                throw new Error("Form element not found");
            }
        } catch (error) {
            console.error("Error initiating Redsys payment:", error);
            setError("Error initiating payment. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return { handlePayment, response, loading, error };
};

export default Payment;
