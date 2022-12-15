import $ from 'jquery';

window.$ = $;
/*
	Passive listeners fix for Google Page Speed
*/
import './utils/passive-listeners';

// - Uncomment to import Swiper
// import Swiper from 'swiper/bundle';

/*
	If you want to pick and choose which modules to include, comment out the above and uncomment
	the line below
*/
// import whatInput from 'what-input';
import './lib/foundation-explicit-pieces';
import './lib/searchform';
import './lib/parallax-block';
import './lib/product-grid-tabs';
import './lib/quantity-input';
import './lib/accordion';
import './lib/mobile-menu';

$(document).foundation();

/*
	Common JS snippets. Uncomment as needed.
*/
$(function () { });
