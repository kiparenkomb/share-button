import Swiper from 'swiper';
import {removeClass,addClass} from './../../../../modules/header/modules/toggleClass';

export function initPopup({slider,openPopupSelector}) {
  
	const openPopupBtn = document.querySelectorAll(openPopupSelector);

	if(!openPopupBtn.length) return;

	const swiper = new Swiper (slider,{
		direction: 'horizontal',
		loop: true,
		effect: 'fade',
		zoom: true,
		autoHeight: true,
		observer: true,
		observeParents: true,
		keyboard: {
			enabled: true,
			onlyInViewport: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		on: {
			slideChange: function() {
				setTimeout(()=>{
					const activeSlide = this.slides[this.activeIndex];
					const inner = document.getElementById('altTextInner');
					if(activeSlide === undefined && !inner) return;
					inner.innerText = (this.slides[this.activeIndex] ? 
						`${this.slides[this.activeIndex].getAttribute('data-title')} ${this.slides[this.activeIndex].getAttribute('data-description')}` : '');
				},200);
			}
		}
	});  

	for(let i = 0; i < openPopupBtn.length; i++){

		const popup = document.getElementById(openPopupBtn[i].getAttribute('data-target'));

		openPopupBtn[i].addEventListener('click',(e) => { 
			e.preventDefault();
			addClass(popup,'active');
			swiper.slideTo(Number(openPopupBtn[i].getAttribute('data-index'))-1,null,null);
		});
    
		popup.querySelector('.modal_close_icon').addEventListener('click',() => {
			removeClass(popup,'active');
		});  
	}  
}

