import Redsys from 'redsys-easy';

const redsys = new Redsys();

export const generateRedsysForm = (paymentData, secretKey) => {
    const merchantParameters = redsys.createMerchantParameters(paymentData);
    const signature = redsys.createMerchantSignature(secretKey, merchantParameters);

    return {
        merchantParameters,
        signature,
        url: "https://sis-t.redsys.es:25443/sis/realizarPago", // Use the test environment URL
    };
};
