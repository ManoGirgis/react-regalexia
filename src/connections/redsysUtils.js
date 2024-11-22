import {
    createRedsysAPI,
    SANDBOX_URLS,
    useSingleInputFormatter,
    redirectInputFormatter,
} from 'redsys-easy';

const { createRedirectForm } = createRedsysAPI({
    secretKey: process.env.REACT_APP_REDSYS_SECRET_KEY,
    urls: SANDBOX_URLS,
});

export const createPaymentForm = useSingleInputFormatter(createRedirectForm, redirectInputFormatter);
