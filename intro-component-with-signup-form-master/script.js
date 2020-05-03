
const emailCheck = () => {
    const emailAddress = document.getElementById('email').value;
    const emailInput = document.getElementById('email');
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    if (emailAddress.match(mailFormat)) {
        emailInput.classList.remove('error-input');
        document.getElementById('emailWarning').classList.add('hidden')
    } else if (!emailAddress.match(mailFormat)) {
        emailInput.classList.add('error-input');
        document.getElementById('emailWarning').classList.remove('hidden')
    }
}

const FirstNameInputCheck = () => {
    const firstNameValidate = document.getElementById('firstName').value;
    const firstNameValidateInput = document.getElementById('firstName');
    const firstNameWarning = document.getElementById('firstNameWarning');

    if (firstNameValidate.length >= 1 ) {
        firstNameValidateInput.classList.remove('error-input');
        firstNameWarning.classList.add('hidden')
    } else if (firstNameValidate.length < 1) {
        firstNameValidateInput.classList.add('error-input');
        firstNameWarning.classList.remove('hidden')
    }
}

const lastNameInputCheck = () => {
    const lastNameValidate = document.getElementById('lastName').value;
    const lastNameValidateInput = document.getElementById('lastName');
    const lastNameWarning = document.getElementById('lastNameWarning');

    if (lastNameValidate.length >= 1 ) {
        lastNameValidateInput.classList.remove('error-input');
        lastNameWarning.classList.add('hidden')
    } else if (lastNameValidate.length < 1) {
        lastNameValidateInput.classList.add('error-input');
        lastNameWarning.classList.remove('hidden')
    }
}

const passwordInputCheck = () => {
    const passwordValidate = document.getElementById('password').value;
    const passwordValidateInput = document.getElementById('password');
    const passwordWarning = document.getElementById('passwordWarning');

    if (passwordValidate.length >= 1 ) {
        passwordValidateInput.classList.remove('error-input');
        passwordWarning.classList.add('hidden')
    } else if (passwordValidate.length < 1) {
        passwordValidateInput.classList.add('error-input');
        passwordWarning.classList.remove('hidden')
    }
}


const submitCheck = (e) => {
    e.preventDefault();
    emailCheck();
    FirstNameInputCheck();
    lastNameInputCheck();
    passwordInputCheck();
}

const submitClick = document.getElementById('btn');

submitClick.addEventListener('click', submitCheck);




