const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

const name = myForm.elements.name.value.trim();
const nameError = document.querySelector('#name + .errorMessage');
const nameInput = document.getElementById('name');
if (name === '') {
    nameError.textContent = 'Name is required.';
      nameInput.parentNode.classList.add('error');
      nameInput.parentNode.classList.remove('success');
    } else {
      nameError.textContent = '';
      nameInput.parentNode.classList.add('success');
      nameInput.parentNode.classList.remove('error');
    }
    const email = myForm.elements.email.value.trim();
    const emailError = document.querySelector('#email + .errorMessage');
    const emailInput = document.getElementById('email');
    if (email === '') {
      emailError.textContent = 'Email is required.';
      emailInput.parentNode.classList.add('error');
      emailInput.parentNode.classList.remove('success');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.parentNode.classList.add('error');
      emailInput.parentNode.classList.remove('success');
    } else {
      emailError.textContent = '';
      emailInput.parentNode.classList.add('success');
      emailInput.parentNode.classList.remove('error');
    }

    const message = myForm.elements.message.value.trim();
const messageError = document.querySelector('#message + .errorMessage');
const messageInput = document.getElementById('message');
if (message === '') {
    messageError.textContent = 'Message is required.';
      messageInput.parentNode.classList.add('error');
      messageInput.parentNode.classList.remove('success');
    } else {
      messageError.textContent = '';
      messageInput.parentNode.classList.add('success');
      messageInput.parentNode.classList.remove('error');
    }

    if (nameError.textContent === '' && emailError.textContent === '' && messageError === '') {
        myForm.submit();
      }
    });