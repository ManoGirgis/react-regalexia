import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import Payment from "../../../connections/payment";

const Checkout = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };
  const [sum, setSum] = useState(0);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  // const { handlePayment, response: resp, loading, error } = Payment();

  const apiUrl = `${process.env.REACT_APP_WC_STORE_URL}/wp-json/wc/v3/orders`;
  const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
  const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

  // Calculate total sum on cart update
  useEffect(() => {
    const totalSum = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSum(totalSum);
  }, [cart]);

  const checkoutOrder = async () => {
    window.location.href = "/Payment-Finish"

    if (!cart.length) return;

    try {
      // WooCommerce Order Creation
      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      const orderData = {
        payment_method: "redsys",
        payment_method_title: "Redsys",
        set_paid: false,
        billing: {
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@example.com",
        },
        line_items: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
      };

      const orderResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${credentials}`,
        },
        body: JSON.stringify(orderData),
      });

      if (!orderResponse.ok) {
        throw new Error("Error creating WooCommerce order");
      }

      const order = await orderResponse.json();
      console.log("Order created successfully:", order);

      // Redirect to Redsys Payment
      if (order.redirect_url) {
        window.location.href = order.redirect_url;
      } else {
        console.error("Redsys payment URL not provided in the response");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {/* Display cart details */}
      {cart.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - {product.quantity} x €{product.price}
          </p>
        </div>
      ))}
      <p>Total: €{sum.toFixed(2)}</p>
      {/*loading && <p>Processing payment...</p>*/}
      {/*paymentInitiated && error && <p style={{ color: "red" }}>Payment failed: {error}</p>*/}
      {/*paymentInitiated && resp && <p style={{ color: "green" }}>Payment successful!</p>*/}
      {/* Button to complete the purchase */}
      <Button onClick={checkoutOrder} type="primary" className="Finalcheck">
        {/*loading ? "Processing..." : "Finalizar Compra"*/}Finalizar Compra
      </Button>
    </div>
  );
};

export default Checkout;
