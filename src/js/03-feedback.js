import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(inputHandler, 500));
form.addEventListener('submit', submitHandler);
let email = document.querySelector('input');
let inputText = document.querySelector('textarea');

formPrefeel();

function inputHandler() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email.value,
      inputText: inputText.value,
    })
  );
}

function submitHandler(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}

function formPrefeel() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const parsedFormData = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    email.value = parsedFormData.email || '';
    inputText.value = parsedFormData.inputText || '';
  }
}
