//declaire a variables
const myForm = document.querySelector('#callback'),
  sendBtn = document.querySelector('#sendBtn'),
  name = myForm.elements.name,
  email = myForm.elements.email,
  comment = myForm.elements.comment,
  body = document.querySelector('body');

// check the name field validity for letters only
name.addEventListener('keydown', function (event) {
  let isLetter = false,
    isControl = false;

  if (isFinite(event.key) == false) {
    isLetter = true;
  }

  if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace" || event.keyCode == '32') {
    isControl = true;
  }

  if (!isLetter && !isControl) {
    event.preventDefault();
  }
});

sendBtn.addEventListener('click', event => {
  event.preventDefault();

  //check fields on validity
  if (validateForm(myForm)) {

    //bundling a json file consisting of fields value
    let formData = new FormData(myForm);
    formData.append("name", name.value);
    formData.append("phone", email.value);
    formData.append("comment", comment.value);
    formData.append("to", 'mail@mail.com');

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        const message = xhr.response.message;
        body.appendChild(createResponse(message));
        document.body.style.overflow = 'hidden';
      }
    });
  }
});

//checking the validity of an input fields
function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.email)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;
}

//function for checking validity
function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;

  if (!field.checkValidity()) {
    field.classList.add('callback__input--error');
    field.nextElementSibling.classList.add('callback__error--active');
  } else {
    field.classList.remove('callback__input--error');
    field.nextElementSibling.classList.remove('callback__error--active');
  }
  return field.checkValidity();
}

//function for creating of an overlay window
function createResponse(text) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#responseTemplate");
  overlayElement.innerHTML = template.innerHTML;

  const closeElement = overlayElement.querySelector(".overlay__btn");
  closeElement.addEventListener("click", function () {
    body.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  const wrapElement = overlayElement.querySelector(".overlay__container");
  wrapElement.addEventListener("click", function () {
    body.removeChild(overlayElement);
    document.body.style.overflow = 'initial';
  });

  const messageElement = overlayElement.querySelector(".overlay__message");
  messageElement.innerHTML = text;

  return overlayElement;
}

