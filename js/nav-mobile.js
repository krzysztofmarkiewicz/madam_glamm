let nav = document.getElementById('main-nav')


//on/off mobile navigation
document.addEventListener('click', function (event) {
	if (event.target.classList.contains('fas')) {
		nav.classList.toggle('is-open')
	}else{nav.classList.remove('is-open')}
})


// old version on/off menu mobile
/*
burger.addEventListener('click', function () {
	nav.classList.toggle('is-open');
});

nav.addEventListener('click', function () {
	nav.classList.remove('is-open')

})
*/