(function ($) {
    
	function loadFancyBox(){
		$('.slider a.thumbnail').fancybox({
			'overlayColor'  :   '#666',
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	500, 
			'speedOut'		:	300
		});
	}	
	
	function loadSlider(){
		$(".slider").jCarouselLite({
			btnNext:'.next',
			btnPrev:'.prev',
			easing: 'easeOutSine',
			speed: 300,
			scroll:2,
			circular:false
		});
	}
    
	// Page loader.
	var $winHeight = $(window).height(),
	$wrapper = $('.ajax-wrapper'),
	$header = $('header'),
	$nav = $('nav'),
	$content = $('#content'),
	$footer = $('footer');
	
	// Load pages dynamically.
	var $menu = $('#menu li'),
	$menuAhrefs = $menu.find('a'),
	$currentPage = $menu.find('a.selected').attr('href');
	
	// Hide content if loaded page is index (undefined).
	if($currentPage==undefined){
		$content.css({'top':$winHeight}).show();
	}
	
	// Menu button clicked.
	$menu.on('click', function(){
		var $this = $(this),
		$ahref = $this.find('a'),
		$link = $ahref.attr('href'),
		$pos = $content.position().top,
		$collapse = $this.data('collapse');
		
		// Show content div.
		if($collapse==0){
			// Move header and nav up.
			$header.animate({top:'0'}, 800, 'easeOutCubic');
			$nav.animate({top:'-15px'}, 800, 'easeOutCubic');
			
			// Move footer down.
			$footer.animate({top:'-110px'},800, 'easeOutCubic');
			
			// Set menu item as selected.
			$menuAhrefs.removeClass('selected');
			$ahref.addClass('selected');
			
			// Load content and animate.
			if($pos > 600 ){ 
				$wrapper.load($link+' .ajax-content');
				$content.animate({top:'-95px'}, 800, 'easeOutCubic', function() {
					$wrapper.animate({top:'0'}, 400, 'easeOutCubic');
					
					loadFancyBox();
					loadSlider();
					
					$('input[placeholder], textarea[placeholder]').placeholder();
				});
			} else {
				// Slide content down, load new page, then slide content up.
				loadContent($link);
			}
		} else {
			// Show home page. Slide content down and hide.
			loadHome();
		}
	
		return false;
	});
	
	// If click on my name load home page.
	var $name = $('.name');
	$name.on('click', function(){
		loadHome();
		
		return false;
	});
	
	// Class to load href links dynamically.
	$('body').delegate('.dynamic', 'click', function(e) {
		var $this = $(this),
		$link = $this.attr('href'),
		$pageTo = $this.data('page');
		
		// Prevent default action.
		e.preventDefault();
		
		// Set menu item as selected.
		$menuAhrefs.removeClass('selected');
		$('#'+$pageTo).find('a').addClass('selected');
		
		// Load content dynamically.
		loadContent($link);
	});
	
	// Show home page. Slide content down and hide.
	function loadHome(){
		$header.animate({top:'160px'}, 800, 'easeOutCubic');
		$nav.animate({top:'40px'}, 800, 'easeOutCubic');
		$footer.animate({top:'-270px'},800, 'easeOutCubic');
		
		// Remove selected menu.
		$menuAhrefs.removeClass('selected');
		
		// Hide content.
		$content.animate({top:$winHeight}, 800, 'easeOutCubic', function(){
			$wrapper.empty().animate({top:'510px'}, 400, 'easeOutCubic');
		});
	}
	
	// Load content dynamically.
	function loadContent($link){
		$wrapper.animate({top:'510px'}, 400, 'easeOutCubic', function(){
			$wrapper.load($link+' .ajax-content', function(){
				$wrapper.animate({top:'0'}, 400, 'easeOutCubic');
				
				loadFancyBox();
				loadSlider();
				
				$('input[placeholder], textarea[placeholder]').placeholder();
			});
		});
	}
	
	// Check contact form.
	$('body').delegate('#submit', 'click', function(e) {

		var $inputs = $('#contact-form :input[type!=submit]'),
		$contactForm = $('#contact-form'),
		$pufe = $('.pufe'),
		$pue = $('.pue'),
		$pus = $('.pus'),
		$pusen = $('.pusen'),
		pass=true;
		
		// Prevent default action.
		e.preventDefault();
		
		// Check all fields are filled in.
		$inputs.each(function() {
			var $field = $(this);
			
			$('#'+$field.attr('id')).removeClass('error-field');
			
			// Placeholder fix.  Next to check that value isn't placeholer text.
			if($field.val()=='' || $field.val().toLowerCase()==$field.attr('id')+':'.toLowerCase()){
				$('#'+$field.attr('id')).addClass('error-field');
				pass=false;
			}
		});
		
		// Show error popup if errors.
		if(pass==false){
			$pufe.fadeTo(900, 1).delay(2000).fadeToggle(900);
		} else {
			// Show sending popup.
			$pusen.fadeTo(900, 1);
			
			// Post results to email php.
			$.post("lib/send-email.php?type=js", $contactForm.serialize(), function(data){
				if(data=='success'){
					// Email sent.
					$pusen.fadeToggle(900);
					$pus.fadeTo(900, 1).delay(2000).fadeToggle(900);
					
					// Reset form
					$contactForm[0].reset();
				} else if(data=='missing-fields'){
					// Missing fields.
					$pufe.fadeTo(900, 1).delay(2000).fadeToggle(900);
				} else {
					// Email failed.
					$pue.fadeTo(900, 1).delay(1000).fadeToggle(900);
				}
			});
		}
	});
	
	loadFancyBox();
	loadSlider();
	$('input[placeholder], textarea[placeholder]').placeholder();
	
	// Google Analytics.
	var _gaq=[['_setAccount','UA-32933519-1'],['_trackPageview']];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	s.parentNode.insertBefore(g,s)}(document,'script'));
})(jQuery);