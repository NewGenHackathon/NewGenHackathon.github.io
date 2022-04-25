var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
	if (e.target.classList.contains('active')) return;
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active'))
			galleryItems[i].classList.remove('active');
	}
	
	e.target.classList.add('active');
}

function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//Make sure there is element to the leftd
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;
		
		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveRight);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveLeft);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
	var images = [
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide200.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide197.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide196.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide195.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide194.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide193.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide7.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide6.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide151.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide139.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide1.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide3.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide4.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide5.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide11.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide12.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide18.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide19.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide20.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide21.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide24.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide26.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide27.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide32.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide33.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide35.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide38.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide44.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide47.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide48.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide58.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide60.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide65.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide66.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide71.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide73.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide78.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide84.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide87.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide97.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide98.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide110.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide117.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide122.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide124.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide132.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide134.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide138.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide140.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide141.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide144.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide159.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide160.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide162.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide163.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide166.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide167.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide168.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide169.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide170.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide172.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide173.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide174.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide177.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide179.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide181.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide185.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide186.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide187.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide189.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide190.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide192.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide202.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide205.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide206.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide207.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide208.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide209.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide210.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide212.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide213.JPG?raw=true',
		'https://github.com/NewGenHackathon/NewGenHackathon.github.io/blob/master/images/Slide214.JPG?raw=true'
	];
	
	//Set Initial Featured Image
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//Set Images for Gallery and Add Event Listeners
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();