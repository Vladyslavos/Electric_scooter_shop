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
window.onscroll = function () {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop,
          topBtn = document.getElementById('top');
    if (scrolled > 700) {
    	topBtn.style.visibility = 'visible';
    } else {
    	topBtn.style.visibility = 'hidden';
    }
}

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
//Packing list block script
let tabNavItem = document.querySelectorAll('.tab-nav-item');

let tabContentItem = document.querySelectorAll('.tab__content');



tabNavItem.forEach(function(elem) {
   elem.addEventListener('click', activeTab);
   })

function activeTab() {
   tabNavItem.forEach(function(elem){
      elem.classList.remove('active');
   })
   this.classList.add('active');
   let tabName = this.getAttribute('data-tab');

   activeTabContent(tabName);
}

function activeTabContent (tabName) {
   tabContentItem.forEach(function(item){
      if (item.classList.contains(tabName)) {
         item.classList.add('active');
      } else {
         item.classList.remove('active');
      }
   })
}



