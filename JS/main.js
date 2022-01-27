//Script for menu
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.currentTarget;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault()
		}
	}
}

//Scroll-up script
window.onload = () => {
	var scrolled;
	var timer;
	document.getElementById('top').onclick = (e) => {
		scrolled = window.pageYOffset;
		//window.scrollTo(0,0);
		scrollToTop();
	}
	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100;
			timer = setTimeout(scrollToTop, 8);
		}
		else{
			clearTimeout(timer);
			window.scrollTo(0, 0);
		}
	}
}