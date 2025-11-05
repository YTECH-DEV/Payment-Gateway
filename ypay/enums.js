class Currency
{
    static USD = "USD"
    static NGN = "NGN"
    static XOF = "F CFA"

    static isValid(currency)
    {
        return Object.values(this).includes(currency.toUpperCase());
    }
}

class Language
{
    static FR = "FR";
    static EN = "EN";

    static isValid(language)
    {
        return Object.values(this).includes(language.toUpperCase());
    }
}

export {Currency, Language};