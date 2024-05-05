const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});

document.querySelectorAll(".menuitem").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
}));


///////////REGIST FORM VALIDATION
const form = document.getElementById('form');
const fullname = document.getElementById('full-name');
const phonenumber = document.getElementById('phone-number');
const email = document.getElementById('email');
const chooseactivity = document.getElementById('choose-activity');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fullnameV = fullname.value.trim();
	const phonenumberV = phonenumber.value.trim();
	const emailV = email.value.trim();
    
    if(fullnameV === '' ) {
        setErrorFor(fullname, '*Cannot be blank!');
    } else if(fullnameV.length < 3 ) {
        setErrorFor(fullname, '*Must contain at least 3 characters');
    } else {
        setSuccessFor(fullname);
    }

    if(phonenumberV === '' ) {
        setErrorFor(phonenumber, '*Cannot be blank!');
    } else if(isNaN(phonenumberV)) {
        setErrorFor(phonenumber, '*Must be a number!');
    } else if(phonenumberV.length > 14) {
        setErrorFor(phonenumber, '*Cannot be more than 14 characters!');
    } else if(!phonenumberV.startsWith('08')) {
        setErrorFor(phonenumber, '*Must start with \"08\"!');
    } else {
        setSuccessFor(phonenumber);
    }

    if(emailV === '' ) {
        setErrorFor(email, '*Cannot be blank!');
    } else if(emailV.indexOf('@') <= 0) {
        setErrorFor(email, '*Must contain \"@\"!');
    } else {
        setSuccessFor(email);
    }

    if(chooseactivity=='select'){
        setErrorFor(chooseactivity, '*Select at least one');
    } else {
        setSuccessFor(chooseactivity);
    }
}

function setErrorFor(input, message) {
	const registformbox = input.parentElement;
	const span = registformbox.querySelector('span');
	registformbox.className = 'regist-form-box error';
	span.innerText = message;
}

function setSuccessFor(input) {
	const registformbox = input.parentElement;
	registformbox.className = 'regist-form-box success';
}


///CAROUSEL
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });