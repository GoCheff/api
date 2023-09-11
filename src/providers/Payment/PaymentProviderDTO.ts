import { Payment } from "paypal-rest-sdk";

namespace PaymentProviderDTO {
  export interface IPaymentProvider {
    createPayment(create_payment_json: Payment): Promise<string>;
  }
}

export { PaymentProviderDTO };
