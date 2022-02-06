const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const password = document.querySelector('.password');
const phone = document.querySelector('.phone');
const nombre = document.querySelector('.name');
const lastName = document.querySelector('.lastname');
const email = document.querySelector('.email');
const address = document.querySelector('.address')

const errorPassword = document.getElementById('errorPassword');
const errorName = document.getElementById('errorName');  
const errorPhone = document.getElementById('errorPhone');
const errorLastName = document.getElementById('errorLastName');  
const errorMail = document.getElementById('errorMail');  
const errorAddress = document.getElementById('errorAddress'); 

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,15}$/,
	password: /^[a-zA-Z0-9]{3,15}$/,
	address: /^[a-zA-ZÀ-ÿ0-9\s]{3,15}$/,
	email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{9,11}$/ 
}	

const validate = (e) => {
	switch (e.target.name) {
		case "nombre":
			if (expresiones.nombre.test(e.target.value)) {
				nombre.classList.add('valid');
				nombre.classList.remove('invalid');
				errorName.style.display = 'none';
			} else {
				nombre.classList.add('invalid');
				nombre.classList.remove('valid');
				errorName.style.display = 'inline';
			}
		break;
		case "lastName":
			if (expresiones.nombre.test(e.target.value)) {
				lastName.classList.add('valid');
				lastName.classList.remove('invalid');
				errorLastName.style.display = 'none';
			} else {
				lastName.classList.add('invalid');
				lastName.classList.remove('valid');
				errorLastName.style.display = 'inline';
			}
		break;
		case "email":
			if (expresiones.email.test(e.target.value)) {
				email.classList.add('valid');
				email.classList.remove('invalid');
				errorMail.style.display = 'none';
			} else {
				email.classList.add('invalid');
				email.classList.remove('valid');
				errorMail.style.display = 'inline';
			}
		break;
		case "address":
			if (expresiones.address.test(e.target.value)) {
				address.classList.add('valid');
				address.classList.remove('invalid');
				errorAddress.style.display = 'none';
			} else {
				address.classList.add('invalid');
				address.classList.remove('valid');
				errorAddress.style.display = 'inline';
			}
		break;
		case "phone":
			if (expresiones.phone.test(e.target.value)) {
				phone.classList.add('valid');
				phone.classList.remove('invalid');
				errorPhone.style.display = 'none';
			} else {
				phone.classList.add('invalid');
				phone.classList.remove('valid');
				errorPhone.style.display = 'inline';
			}
		break;
		case "password":
			if (expresiones.password.test(e.target.value)) {
				password.classList.add('valid');
				password.classList.remove('invalid');
				errorPassword.style.display = 'none';
			} else {
				password.classList.add('invalid');
				password.classList.remove('valid');
				errorPassword.style.display = 'inline';
			}
		break;
	}
		
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validate);
	input.addEventListener('blur', validate);
})

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
});

