export const createPaymentForm = async (paymentData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_WEBSITE_URL}api/redsys-signature`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error("Failed to create payment form");
    }

    const { formHtml } = await response.json();
    return formHtml;
  } catch (error) {
    console.error("Error in createPaymentForm:", error);
    throw error;
  }
};
