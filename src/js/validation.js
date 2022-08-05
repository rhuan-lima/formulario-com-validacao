const form = document.getElementById('form');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

fullName.addEventListener("blur", function(){
	const fullNameValue = fullName.value.trim();

	if (fullNameValue === '' ) {
		setErrorFor(fullName);
	} else {
		setSuccessFor(fullName)
	}
});

email.addEventListener("blur", function(){
	const emailValue = email.value.trim();

	if (emailValue === '' ) {
		setErrorFor(email);
	} else {
		setSuccessFor(email)
	}
});

phone.addEventListener("blur", function(){
	const phoneValue = phone.value.trim();

	if (phoneValue === '' ) {
		setErrorFor(phone);
	} else {
		setSuccessFor(phone)
	}
});

message.addEventListener("blur", function(){
	const messageValue = message.value.trim();

	if (messageValue === '' ) {
		setErrorFor(message);
	} else {
		setSuccessFor(message)
	}
});

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputsOnSubmit();
});

function checkInputsOnSubmit() {

	const fullNameValue = fullName.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const messageValue = message.value.trim();
	
	if(fullNameValue === '') {
		setErrorFor(fullName);
	} else {
		setSuccessFor(fullName);
	}
	
	if(emailValue === '') {
		setErrorFor(email);
    } else {
		setSuccessFor(email);
	}

	if(phoneValue === '') {
		setErrorFor(phone);
    } else {
		setSuccessFor(phone);
	}

	if(messageValue === '') {
		setErrorFor(message);
	} else {
		setSuccessFor(message);
	}
}

function setErrorFor(input) {
	const formControl = input.parentElement;
	
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;

	formControl.className = 'form-control success';
}