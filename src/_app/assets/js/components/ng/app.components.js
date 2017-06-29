import angular from 'angular';

import navigationModule from './nav/navigation.module';
import portfolioModule from './portfolio/portfolio.module';
import dateModule from './date/date.module';
import goToTopModule from './goToTop/goToTop.module';
import shuffleModule from './shuffle/shuffle.module';
import shuffleOnScreenModule from './shuffleOnScreen/shuffleOnScreen.module';
import socialIconsModule from './socialIcons/socialIcons.module';
import scrollBlurModule from './scrollBlur/scrollBlur.module';
import scrollFadeModule from './scrollFade/scrollFade.module';
import lazyLoadModule from './lazyLoad/lazyLoad.module';
import randomNumbersOnScreenModule from './randomNumbersOnScreen/randomNumbersOnScreen.module';
import testimonialsModule from './testimonials/testimonials.module';

// Init app with dependencies.
export default angular
	.module('TM.components', [navigationModule, portfolioModule, dateModule, goToTopModule, shuffleModule, shuffleOnScreenModule, socialIconsModule, scrollBlurModule, scrollFadeModule, lazyLoadModule, randomNumbersOnScreenModule, testimonialsModule])
	.name;