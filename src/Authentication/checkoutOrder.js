const checkoutOrder = async (cart, navigate) => {
  if (!cart.length) {
    console.error("Cart is empty. Cannot proceed with checkout.");
    return;
  }

  const apiUrl = `${process.env.REACT_APP_WC_STORE_URL}wp-json/wc/v3/orders`;
  const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
  const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;

  try {

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

    console.log("Order created successfully:", orderResponse)

    const order = await orderResponse.json();
    console.log("Order created successfully:", order);

    navigate(`/redsys`, { state: { orderId: order.id, order } });
    console.log("Order id: ", order.id);
  } catch (error) {
    console.error("Error during checkout:", error);
  }
};

export default checkoutOrder;
