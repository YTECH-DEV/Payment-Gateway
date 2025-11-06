import YPAY from "../../ypay/ypay.js";
import Localization from "./localization.js";

class PaymentUI
{
    constructor(token, currency, language, handlers = {}, shopName, logo)
    {
        this.logo = logo || '';
        this.language = language || 'en';
        this.shopName = shopName || 'Unknown';
        this.currency = currency || 'XOF';
        this.token = token;
        this.modal = false;
        this.handlers = handlers;
        this.overlayElement = null;
        this.newWindowRef = null;


        // Set language
        this.localization = new Localization();
        this.localization.setLang(this.language);

        // Validate
        this._validate();

        this.ypay = new YPAY(token, currency, shopName);
    }

    _validate()
    {
        let errors = [];

        if (this.language && !this.localization.isValid(this.language))
        {
            errors.push('Language is not available');
        }

        if (this.token==="")
        {
            errors.push('Token is required');
        }

        // if (this.amount <= 0)
        // {
        //     errors.push('Amount must be greater than 0');
        // }

        if (errors.length > 0)
        {
            throw new Error(errors.join('\n'));
        }
    }

    async triggerPayment()
    {
        try
        {
            const doc = this.newWindowRef ? this.newWindowRef.document : document;

            const cardInput = doc.getElementById("card_number");
            const card_code = cardInput.value.trim();

            const otpInputs = doc.getElementsByClassName("otp_input_item");
            const otp = parseInt([...otpInputs].map(elem => elem.value).join(""));

            const submit_button = doc.querySelector(".submit_button");
            if (submit_button)
            {
                submit_button.innerHTML = this.localization.tag("submit_button_processing");
                submit_button.disabled = true;
            }

            const data = await this.ypay.createTransaction(card_code, this.amount, otp);

            this.closePaymentUI();
            this.showPopupMessage('success', data);

            if (this.handlers.onSuccess)
            {
                this.handlers.onSuccess(data);
            }

        }
        catch (err)
        {
            console.error('Payment error:', err);
            this.closePaymentUI();
            this.showPopupMessage('error', err);

            if (this.handlers.onError)
            {
                this.handlers.onError(err);
            }
        }
    }

    closePaymentUI()
    {
        if (this.overlayElement)
        {
            this.overlayElement.remove();
            this.overlayElement = null;
        }

        if (this.newWindowRef && !this.newWindowRef.closed)
        {
            this.newWindowRef.close();
            this.newWindowRef = null;
        }
    }

    showPopupMessage(type, data)
    {
        const message = type === 'success'
            ? this.localization.tag("payment_success") || 'Payment successful!'
            : this.localization.tag("payment_error") || 'Payment failed. Please try again.';

        alert(message);
        console.log(`Payment ${type}:`, data);
    }

    formatAmount()
    {
        return this.language === 'fr'
            ? `${this.amount} ${this.currency}`
            : `${this.currency} ${this.amount}`;
    }

    getTemplateData()
    {
        return {
            language: this.language,
            logoImg: this.logo ? `<img src="${this.logo}" alt="Shop Logo"/>` : '',
            shopName: this.shopName,
            amount: this.formatAmount(),
            texts: {
                message: this.localization.tag("message"),
                no_app: this.localization.tag("no_app"),
                download: this.localization.tag("download"),
                card_label: this.localization.tag("card_label"),
                card_placeholder: this.localization.tag("card_placeholder"),
                otp_label: this.localization.tag("otp_label"),
                submit_button: this.localization.tag("submit_button"),
                secured_payment: this.localization.tag("secured_payment")
            }
        };
    }

    attachEventListeners(targetDocument = document)
    {
        const form = targetDocument.getElementById('payment_form');
        if (form)
        {
            form.addEventListener('submit', (e) =>
            {
                e.preventDefault();
                this.triggerPayment();
            });
        }

        if (this.modal)
        {
            const closeBtn = targetDocument.querySelector('.close_modal');
            if (closeBtn)
            {
                closeBtn.addEventListener('click', () => {
                    this.closePaymentUI();
                    if (this.handlers.onClose)
                    {
                        this.handlers.onClose();
                    }
                });
            }

            const overlay = targetDocument.querySelector('.modal_overlay');
            if (overlay)
            {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        this.closePaymentUI();
                        if (this.handlers.onClose)
                        {
                            this.handlers.onClose();
                        }
                    }
                });
            }
        }
    }

    showModal()
    {
        // Load and render template
        fetch('./ui/templates/payment_form.html')
            .then(response => response.text())
            .then(template =>
            {
                const overlay = document.createElement('div');
                overlay.className = 'modal_overlay';
                overlay.innerHTML = this.renderTemplate(template);

                this.overlayElement = overlay;
                document.body.appendChild(overlay);

                setTimeout(() => {
                    this.attachEventListeners(document);
                    this.initializeFormController(document);
                }, 0);
            })
            .catch(err =>
            {
                console.error('Failed to load template:', err);
                if (this.handlers.onError)
                {
                    this.handlers.onError(err);
                }
            });
    }

    openNewTab()
    {
        fetch('./ui/templates/payment_form.html')
            .then(response => response.text())
            .then(template =>
            {
                // Open in new tab by removing window features (3rd parameter)
                const newTab = window.open("", '_blank');

                if (!newTab)
                {
                    throw new Error('Popup blocked');
                }

                this.newWindowRef = newTab;
                newTab.document.write(this.renderTemplate(template));
                newTab.document.close();

                newTab.addEventListener('load', () => {
                    this.attachEventListeners(newTab.document);
                    this.initializeFormController(newTab.document);
                });

                newTab.focus();
            })
            .catch(err => {
                console.error('Failed to open payment tab:', err);
                if (this.handlers.onError) {
                    this.handlers.onError(err);
                }
            });
    }

    renderTemplate(template)
    {
        const data = this.getTemplateData();

        // Simple template replacement
        return template
            .replace(/\{\{language\}\}/g, data.language)
            .replace(/\{\{logoImg\}\}/g, data.logoImg)
            .replace(/\{\{closeBtn\}\}/g, this.modal ? '<button class="close_modal" type="button">×</button>' : '')
            .replace(/\{\{shopName\}\}/g, data.shopName)
            .replace(/\{\{amount\}\}/g, data.amount)
            .replace(/\{\{texts\.message\}\}/g, data.texts.message)
            .replace(/\{\{texts\.no_app\}\}/g, data.texts.no_app)
            .replace(/\{\{texts\.download\}\}/g, data.texts.download)
            .replace(/\{\{texts\.card_label\}\}/g, data.texts.card_label)
            .replace(/\{\{texts\.card_placeholder\}\}/g, data.texts.card_placeholder)
            .replace(/\{\{texts\.otp_label\}\}/g, data.texts.otp_label)
            .replace(/\{\{texts\.submit_button\}\}/g, data.texts.submit_button)
            .replace(/\{\{texts\.secured_payment\}\}/g, data.texts.secured_payment);
    }

    initializeFormController(targetDocument)
    {
        import('./form_controller.js')
            .then(module => {
                if (module.default && typeof module.default === 'function') {
                    module.default(targetDocument);
                }
            })
            .catch(err => {
                console.warn('Form controller not available:', err);
            });
    }

    renderForm()
    {
        if (this.modal)
        {
            this.showModal();
        }
        else
        {
            this.openNewTab();
        }
    }

    setModalMode(isModal)
    {
        this.modal = isModal;
        return this;
    }
}

export default PaymentUI;