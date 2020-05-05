const emailCheck = () => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailAddress = document.getElementById('email').value;
    const emailInput = document.getElementById('email');
    const emailWarning = document.getElementById('emailWarning');


    if (emailAddress.match(mailFormat)) {
        emailInput.classList.remove('error-input');
        emailWarning.classList.add('hidden');
    } else if (!emailAddress.match(mailFormat)) {
        emailInput.classList.add('error-input');
        emailWarning.classList.remove('hidden')
    }
}


const submitCheck = (e) => {
    e.preventDefault();
    emailCheck();
}

const submit = document.querySelector('.btn')

submit.addEventListener('click', submitCheck)