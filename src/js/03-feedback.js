import throttle from 'lodash.throttle';

const inputEl = document.querySelector('.feedback-form');
let localEl = {};

inputEl.addEventListener('input', throttle(onInputForm, 500));

function onInputForm(event) {
  localEl = { email: inputEl[0].value, message: inputEl[1].value };

  localStorage.setItem('feedback-form-state', JSON.stringify(localEl));
}

if (localStorage.getItem('feedback-form-state')) {
  const localSaveEl =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  inputEl[0].value = localSaveEl.email;
  inputEl[1].value = localSaveEl.message;
}

inputEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  inputEl.reset();
}
