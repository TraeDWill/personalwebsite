let form = document.querySelector('form');
form.style.margin = '0 auto';
form.style.border = '2px solid';
form.style.height = '450px';
form.style.width = '260px';
form.style.marginBottom = '50px';

let h1 = document.querySelector('#form-header');
h1.style.textAlign = 'center';
h1.style.inlineSize = '250px';
h1.style.overflowWrap = 'break-word';

let div = document.querySelectorAll('.form-div');
for (var i = 0; i < div.length; ++i) {
  div[i].style.marginBottom = '10px';
  div[i].style.paddingBottom = '10px';
}

let formElement = document.getElementsByClassName('form-element');
for (var i = 0; i < formElement.length; ++i) {
  formElement[i].style.fontWeight = 'bold';
  formElement[i].style.textAlign = 'left';
  formElement[i].style.float = 'left';
  formElement[i].style.width = '75px';
  formElement[i].style.paddingLeft = '5px';
}

let formInput = document.getElementsByClassName('.form-input');
for (var i = 0; i < formInput.length; ++i) {
  formInput[i].style.textAlign = 'right';
}

let button = document.getElementsByClassName('.btn');
for (var i = 0; i < button.length; ++i) {
  button[i].style.paddingLeft = '10px';
  button[i].style.marginLeft = '10px';
}

let buttonWords = document.getElementsByClassName('.btn-words');
for (var i = 0; i < buttonWords.length; ++i) {
  buttonWords[i].style.paddingLeft = '5px';
}

let dateWords = document.querySelector('.date-words');
dateWords.style.float = 'left';
dateWords.style.paddingLeft = '5px';
dateWords.style.fontWeight = 'bold';
dateWords.style.textAlign = 'left';
dateWords.style.text = 'break-word';

let dateInput = document.querySelector('#dateinput');
dateInput.style.float = 'right';
dateInput.style.paddingRight = '40px';
dateInput.style.marginRight = '10px';

let buttonPrimary = document.querySelector('.btn-primary');
buttonPrimary.style.backgroundColor = 'green';
buttonPrimary.style.color = 'white';
buttonPrimary.style.fontSize = '1em';
buttonPrimary.style.textAlign = 'center';
buttonPrimary.style.transitionDuration = '0.4ms';
buttonPrimary.style.float = 'left';
buttonPrimary.style.border = '1px solid black';
buttonPrimary.style.padding = '5px 35px';
buttonPrimary.style.marginTop = '20px';
buttonPrimary.style.marginLeft = '6px';

let buttonSecondary = document.querySelector('.btn-secondary');
buttonSecondary.style.backgroundColor = 'white';
buttonSecondary.style.color = 'green';
buttonSecondary.style.border = '1px solid green';
buttonSecondary.style.fontSize = '1em';
buttonSecondary.style.textAlign = 'center';
buttonSecondary.style.transitionDuration = '0.4ms';
buttonSecondary.style.float = 'left';
buttonSecondary.style.padding = '5px 39px';
buttonSecondary.style.margin = '20px 5px';

let fieldset = document.querySelector('fieldset');
fieldset.style.border = 'none';
fieldset.style.marginTop = '20px';
fieldset.style.padding = '0px';

buttonPrimary.onclick = function () {
  let username = form.elements['user'];
  let email = form.elements['Email'];
  let yes = document.querySelector('#Yes');
  let datestuff = form.elements['date'];

  let emailv = email.value;
  let usernamev = username.value;
  let datestuffv = datestuff.value;
  console.log('========== Contact ==========');
  console.log(`Name ${usernamev}`);
  console.log(`Email: ${emailv}`);
  if (yes.checked) {
    console.log('Prefer Email');
  } else {
    console.log('Prefer Phone');
  }
  console.log(`Date: ${datestuffv}`);
};
