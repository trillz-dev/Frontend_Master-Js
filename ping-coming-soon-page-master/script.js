const emailCheck = () => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailAddress = document.getElementById('email').value;
    const emailInput = document.getElementById('email');
    const emailWarning = document.getElementById('emailWarning');


    if (email.address.match(mailFormat)) {
        emailInput.classList.remove('error-input');
        emailWarning.classList.add('hidden');
    } else if (!email.address.match(mailFormat)) {
        emailInput.classList.add('error-input');
        emailWarning.classList.remove('hidden')
    }
}


