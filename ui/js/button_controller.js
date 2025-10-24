import PaymentUI from "./paymentUI.js";

const buttonController = (paymentUIInstance) => {
    // Use querySelectorAll to get all matching buttons
    const ypay_btns = document.querySelectorAll(".payment_btn, .custom_payment_btn");

    ypay_btns.forEach(btn =>
    {
        btn.addEventListener("click", () =>
        {
            // Get amount from button's data attribute if available
            const amount = btn.dataset.amount || 0;

            // Trigger payment with amount
            paymentUIInstance.triggerPayment(false, parseFloat(amount));

            // Render the form
            paymentUIInstance.renderForm();
        });
    });
};

export default buttonController;