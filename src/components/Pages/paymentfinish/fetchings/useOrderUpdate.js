import { useState } from "react";

const useOrderUpdate = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateOrderStatus = async (orderId, status = "completed") => {
    console.log("Updating order status...");
    console.log("Order ID:", orderId);

    setLoading(true);
    setError(null);

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
        const errorText = await response.text();
        throw new Error(`Failed to update order status: ${errorText}`);
      }

      console.log("Order status updated successfully.");

      const Data = await response.json();
      console.log(Data);
      setResponseData(Data);
    } catch (error) {
      setError(error.message);
      console.error("Error updating order status:", error);
    } finally {
      setLoading(false);
    }
  };

  return { updateOrderStatus, responseData, loading, error };
};

export default useOrderUpdate;
