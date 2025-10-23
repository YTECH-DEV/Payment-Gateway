const Lang = {
    current: "en",

    setLang: (lang) =>
    {
        Lang.current = lang;
    },

    tag: (key) =>
    {
        return Lang[Lang.current][key] || key;
    },

    en:
    {
        card_label: "Card number",
        card_placeholder: "Enter your card number",
        otp_label: "Enter OTP",
        message:
            "To get the OTP, connect you to the Ypay application and generate the OTP.",
        submit_button: "Processing...",
        create_account: "Create account",
        error_message: "Enter XXXX-XXXX with letters/digits only.",
    },
    fr:
    {
        card_label: "Numéro de carte",
        card_placeholder: "Entrez votre numéro de carte",
        otp_label: "Entrez l'OTP",
        message: "Pour obtenir l'OTP, connectez-vous à l'application Ypay et générez l'OTP.",
        submit_button: "Traitement en cours...", // clé avec faute d'orthographe
        create_account: "Créer un compte",
        error_message: "Format XXXX-XXXX avec lettres et chiffres uniquement.",
    },
    
    apply_language:()=>
    {
        //const amount = document.getElementsByClassName('second_stack')[0];
        const message = document.getElementsByClassName('message')[0];
        const download_button = document.getElementsByClassName('download_button')[0];
        const card_label = document.getElementsByClassName('card_label')[0];
        const card_placeholder = document.getElementsByClassName('card_number_input')[0];
        const otp_label = document.getElementsByClassName('otp_label')[0];
        const otp_description = document.getElementsByClassName('card')[0];
        const submit_button = document.getElementsByClassName('submit_button')[0];
        const error_message = document.getElementsByClassName('error_message')[0];

        message.innerHTML = this.tag(otp_description);
        download_button.innerHTML = this.tag(download_button);
        card_label.innerHTML = this.tag(otp_label);
        card_placeholder.innerHTML = this.tag(card_placeholder);
        otp_label.innerHTML = this.tag(otp_label);
        submit_button.innerHTML = this.tag(submit_button);
        error_message.innerHTML = this.tag(error_message);
    }
};

export default Lang;