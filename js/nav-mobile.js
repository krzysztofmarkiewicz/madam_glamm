let nav = document.getElementById('main-nav')

burger.addEventListener('click', function () {
	nav.classList.toggle('is-open');
});

nav.addEventListener('click', function () {
	nav.classList.remove('is-open')
})