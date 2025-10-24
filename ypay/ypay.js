import Transaction from "./transaction.js";
import PaymentData from "./payment_data.js";

// ----- ONE TIME CONFIGURATIONS FOR YPAY PAYMENTS
class YPAY
{
    constructor(receiver, currency, shopName)
    {
        this.receiver = receiver;
        this.currency = currency;
        this.shopName = shopName || "Undefined";

        if(YPAY.instance)
        {
            return YPAY.instance;
        }

        YPAY.instance = this;
    }

    createTransaction(sender, paymentData, handlers = {})
    {
        return new Transaction(
            sender,
            this.receiver,
            paymentData,
            handlers
        );
    }

    static get currencies()
    {
        return PaymentData.currencies;
    }

    static resetInstance()
    {
        YPAY.instance = null;
    }
}

export default YPAY;