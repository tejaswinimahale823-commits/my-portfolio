

const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector(
        'button[type="submit"]'
    );

    submitButton.disabled = true;
    formResponse.textContent = "Sending your message...";

    try {
        await emailjs.sendForm(
            "service_kddltd7",
            "template_292qoy8",
            contactForm,
            {
                publicKey: "GaCAU8B8wQpn-h-kj"
            }
        );

        formResponse.textContent =
            "Thank you! Your message has been sent successfully.";

        contactForm.reset();

    } catch (error) {
        console.error("Email sending failed:", error);

        formResponse.textContent =
            "Sorry, your message could not be sent. Please try again.";
    } finally {
        submitButton.disabled = false;
    }
});
