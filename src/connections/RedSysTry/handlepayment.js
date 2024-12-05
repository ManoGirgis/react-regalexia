const handlePaymentRedirect = async (orderId) => {
    try {
      const redirectUrl = `${process.env.REACT_APP_WC_STORE_URL}/?wc-api=WC_redsys_redirect&order_id=${orderId}`;
      
      window.location.href = redirectUrl;
    } catch (error) {
      console.error("Error during payment redirection:", error);
    }
  };
  