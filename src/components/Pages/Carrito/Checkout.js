import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import checkoutOrder from "../../../Authentication/checkoutOrder";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const totalSum = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSum(totalSum);
  }, [cart]);

  const handleCheckout = () => {
    if (cart.length > 0) {
      checkoutOrder(cart, navigate);
    } else {
      console.error("Cart is empty. Cannot proceed with checkout.");
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
      {/* Button to complete the purchase */}
      <Button onClick={handleCheckout} type="primary" className="Finalcheck">
        Finalizar Compra
      </Button>
    </div>
  );
};

export default Checkout;
