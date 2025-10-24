// ----- PAYMENT ONE TIME INFORMATION
class PaymentData
{
    static currencies =
    {
        USD: "USD",
        NGN: "NGN",
        XOF: "F CFA"
    };

    constructor(config)
    {
        try
        {
            this._validateConfig(config);
            this.amount = config.amount;
            this.currency = config.currency;
            this.shopName = config.shopName;
        }
        catch (e)
        {
            console.error(e);
            throw e;
        }
    }

    _validateConfig(config)
    {
        let errorStack = [];

        // Shop name validation
        if (!config.shopName)
        {
            errorStack.push('Shop Name is required');
        }

        // Amount validation
        if (!config.amount || config.amount <= 0)
        {
            errorStack.push('The amount should be greater than 0');
        }

        // Currency validation
        if (!Object.keys(PaymentData.currencies).includes(config.currency))
        {
            errorStack.push('Currency is not available');
        }

        if (errorStack.length > 0)
        {
            throw new Error(errorStack.join('\n'));
        }

        return true;
    }
}

export default PaymentData;