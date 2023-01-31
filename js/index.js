let form = document.querySelector('form');
let inputs = form.querySelectorAll('input');
let btn = form.querySelector('button');

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        if (e.target.value !== '') {
            removePrompt(input);
        }
    });
});

btn.addEventListener('click', () => {
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            promptError(input);

            if (input.name !== 'email') {
                input.placeholder = '';
            } else {
                input.placeholder = 'email@example.com';
                input.classList.add('red');
            }
            
            input.style.borderColor = 'hsl(0, 100%, 74%)';
            input.style.background = 'url("../images/icon-error.svg") right 1.5em center no-repeat scroll';
        } 

        if (input.name === 'email') {
            const regex = /^\w+@\w+\.(com|cn)$/g;
            const email = input.value.trim();
            const found = regex.test(email);
            if (!found && email.length) {
                promptError(input);
            }
        }
    })
});

form.addEventListener('submit', () => {
    alert('Sign up succeeded!');
});

// Append an error message beneath the element
const promptError = (element) => {
    if (element.nextSibling.nodeName === '#text') {
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('error');

        let message = '';
        element.name !== 'email'
            ? message = `${element.placeholder} cannot be empty`
            : message = 'Looks like this is not an email';

        const pText = document.createTextNode(message);
        errorMsg.appendChild(pText);
        element.parentNode.insertBefore(errorMsg, element.nextSibling);
    }
};

// Remove error message, change border style, and change input background
const removePrompt = (element) => {
    if (element.nextSibling.nodeName !== '#text') {
            element.nextSibling.remove();
            element.style.borderColor = 'hsl(0, 6%, 90%)';
            element.style.background = 'hsl(0, 0%, 100%)';
    };
};