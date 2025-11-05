import PaymentUI from "./paymentUI.js";

const buttonController = () =>
{
    // get all matching buttons
    const ypay_btns = document.querySelectorAll(".payment_btn, .custom_payment_btn");

    ypay_btns.forEach(btn =>
    {
        btn.addEventListener("click", () =>
        {
            const amount = btn.dataset.amount || 0;
            const modal = btn.dataset.modal || false;

            let paymentUIInstance = new PaymentUI();
            paymentUIInstance.amount = amount;
            paymentUIInstance.modal = modal;
            paymentUIInstance.renderForm();
        });
    });
};

export default buttonController;