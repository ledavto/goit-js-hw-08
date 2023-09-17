import throttle from 'lodash/throttle';

const dataFeedback = {email:"", message: ""};

const elForm = document.querySelector('.feedback-form'); 

const getObj = JSON.parse(localStorage.getItem('feedback-form-state'));
if (getObj)
    {
    elForm.elements.email.value = getObj.email;
    elForm.elements.message.value = getObj.message;
    }

elForm.elements.email.addEventListener('input', throttle(onInput, 500));
elForm.elements.message.addEventListener('input', throttle(onInput, 500));

function onInput() {
    dataFeedback.email = elForm.elements.email.value;
    dataFeedback.message = elForm.elements.message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataFeedback));

}

elForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(dataFeedback);
    elForm.elements.email.value = "";
    elForm.elements.message.value = "";
    localStorage.removeItem('feedback-form-state');
}


