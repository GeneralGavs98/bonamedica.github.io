const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const headerMenu = document.querySelector('.header__menu');
const mask = document.querySelector('.mask');

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
	headerMenu.classList.toggle('active')
	body.classList.toggle('lock')
	mask.classList.toggle('active')
})

mask.addEventListener('click', function () {
	if (mask.classList.contains('active')) {
		burger.classList.remove('active')
		headerMenu.classList.remove('active')
		body.classList.remove('lock')
		mask.classList.remove('active')
	}
});