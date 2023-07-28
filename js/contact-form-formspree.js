const form = document.getElementById("contact-form-formspree");

function checkFormValidity() {
    return document.querySelector('.contacts__email').value !== '' &&
           document.querySelector('.contacts__message').value !== '';
}

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("contact-form-status");
    if (!checkFormValidity()) {
        status.innerText = 'Please correct errors';
        return;
    }
    const response = await fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
    } else {
        status.innerHTML = "Oops! There was a problem submitting your form";
    }
}
form.addEventListener("submit", handleSubmit)