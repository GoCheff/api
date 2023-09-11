import { PaymentProvider } from "./PaymentProvider";

const paypalConfig = {
  mode: "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
};

const paymentProvider = new PaymentProvider(paypalConfig);

export { paymentProvider };
