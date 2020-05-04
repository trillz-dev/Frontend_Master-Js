const emailCheck = () => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailAddress = document.getElementById('email').value;
    const emailInput = document.getElementById('email');
    const errorMsg = document.querySelector('.error-msg')

    if (emailAddress.match(mailFormat)) {
        emailInput.classList.remove('error-input');
        errorMsg.classList.add('hidden')
    } else if (!emailAddress.match(mailFormat)) {
        emailInput.classList.add('error-input');
        errorMsg.classList.remove('hidden')
    }
}

const submitCheck = (e) => {
    e.preventDefault();
    emailCheck();
}

const submitClick = document.querySelector('.btn');

submitClick.addEventListener('click', submitCheck)