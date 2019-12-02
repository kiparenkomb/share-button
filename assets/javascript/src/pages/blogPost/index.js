import { header } from './../../modules/header';
import { initNewSlider } from './modules/newsSlider';
import { initPopup } from './modules/popup';

class BlogPost {

	constructor() {
		this.initModules();
	}

	initModules() {
		header();
		initNewSlider();
		initPopup({
			slider: '.js_photo_gallery',
			openPopupSelector: '.js_open_gallery_popup'
		});
	}
}

new BlogPost();