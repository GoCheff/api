import paypal, { Payment } from "paypal-rest-sdk";
import { PaymentProviderDTO } from "./PaymentProviderDTO";

class PaymentProvider implements PaymentProviderDTO.IPaymentProvider {
  constructor(paypalConfig: {
    mode: string;
    client_id: string;
    client_secret: string;
  }) {
    paypal.configure(paypalConfig);
  }

  public async createPayment(create_payment_json: Payment): Promise<string> {
    return new Promise((resolve, reject) => {
      paypal.payment.create(create_payment_json, (err, payment) => {
        if (err) {
          return reject(err);
        }

        for (const paymentLink of payment.links) {
          if (paymentLink.rel === "approval_url") {
            return resolve(paymentLink.href);
          }
        }
      });
    });
  }

  public async executePayment(
    paymentId: string,
    payerId: string
  ): Promise<Payment> {
    return new Promise((resolve, reject) => {
      paypal.payment.execute(
        paymentId,
        { payer_id: payerId },
        (err, payment) => {
          if (err) {
            return reject(err);
          }

          return resolve(payment);
        }
      );
    });
  }
}

export { PaymentProvider };
