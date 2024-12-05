export const createPaymentForm = async (paymentData) => {
  try {
    // Validate the `paymentData` structure (ensure required fields are present)
    if (!paymentData.Ds_Merchant_Amount || !paymentData.Ds_Merchant_Order) {
      throw new Error("Missing required payment fields");
    }

    // Dynamically create a form
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://sis-t.redsys.es:25443/sis/realizarPago";

    // Add required fields as hidden inputs
    Object.entries(paymentData).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Append the form to the body and submit it
    document.body.appendChild(form);
    form.submit();
  } catch (error) {
    console.error("Error in createPaymentForm:", error);
    throw error;
  }
};
