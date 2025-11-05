import Transaction from "./transaction.js";
import PaymentData, {Currency, Language} from "./enums.js";

// ----- ONE TIME CONFIGURATIONS FOR YPAY PAYMENTS
class YPAY
{
    // one-time initialization
    constructor(token, currency, language, shopName)
    {
        this.token = token;
        this.currency = currency || Currency.XOF;
        this.language = language || Language.FR;
        this.shopName = shopName || "Undefined";


        // Validate during construction
        const validationError = this._validate();
        if (validationError)
        {
            this.validationError = validationError;
        }

        // singleton instance-like
        if(YPAY.instance)
        {
            return YPAY.instance;
        }

        YPAY.instance = this;
    }

    // create a transaction and execute it
    createTransaction(card_code, otp, amount, handlers = {})
    {
        return new Transaction(
            this.token,
            card_code,
            otp,
            amount,
            handlers
        ).exec();
    }

    static resetInstance()
    {
        YPAY.instance = null;
    }

    _validate()
    {
        const errors = []

        // checks currency
        if(!Currency.isValid(this.currency))
        {
            errors.push(this.currency + " is not supported yet");
        }

        if(!Language.isValid(this.language))
        {
            errors.push(this.language + " is not supported yet");
        }

        return errors.length > 0 ? new Error(errors.join("\n")) : null;
    }
}

export default YPAY;