export const checkoutOrder = async () => {
  if (!cart.length) return;

  try {
    const apiUrl = `${process.env.REACT_APP_WC_STORE_URL}/wp-json/wc/v3/orders`;
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

    const credentials = btoa(
      `${process.env.REACT_APP_WC_CONSUMER_KEY}:${process.env.REACT_APP_WC_CONSUMER_SECRET}`
    );

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`WooCommerce error: ${errorData.message}`);
    }

    const order = await response.json();

    // Extract the payment URL (WooCommerce + Redsys)
    if (order.redirect_url) {
      // Redirect the user to Redsys for payment
      window.location.href = order.redirect_url;
    } else {
      console.error("No payment redirect URL provided.");
    }
  } catch (error) {
    console.error("Error during checkout:", error);
  }
};
