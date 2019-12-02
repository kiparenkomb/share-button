
import Swiper from 'swiper';

export function initNewSlider() {

	const galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		loopedSlides: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true, 
		autoplayDisableOnInteraction: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {   
			700: {
				slidesPerView: 2,
				spaceBetween: 10
			}
		}
	});

	new Swiper('.gallery-top', {
		spaceBetween: 10,
		loopedSlides: 5,
		thumbs: {
			swiper: galleryThumbs,
		}
	});

}

