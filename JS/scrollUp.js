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