webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Ng app.
	__webpack_require__(1);

	// Directives.
	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);

	// Serivces.
	__webpack_require__(23);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(5);

	// Init app with dependencies.
	module.exports = angular.module('TM', ['duScroll']);

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	/**
	  * x is a value between 0 and 1, indicating where in the animation you are.
	  */
	var duScrollDefaultEasing = function (x) {
	  'use strict';

	  if(x < 0.5) {
	    return Math.pow(x*2, 2)/2;
	  }
	  return 1-Math.pow((1-x)*2, 2)/2;
	};

	angular.module('duScroll', [
	  'duScroll.scrollspy',
	  'duScroll.smoothScroll',
	  'duScroll.scrollContainer',
	  'duScroll.spyContext',
	  'duScroll.scrollHelpers'
	])
	  //Default animation duration for smoothScroll directive
	  .value('duScrollDuration', 350)
	  //Scrollspy debounce interval, set to 0 to disable
	  .value('duScrollSpyWait', 100)
	  //Wether or not multiple scrollspies can be active at once
	  .value('duScrollGreedy', false)
	  //Default offset for smoothScroll directive
	  .value('duScrollOffset', 0)
	  //Default easing function for scroll animation
	  .value('duScrollEasing', duScrollDefaultEasing)
	  //Whether or not to activate the last scrollspy, when page/container bottom is reached
	  .value('duScrollBottomSpy', false);


	angular.module('duScroll.scrollHelpers', ['duScroll.requestAnimation'])
	.run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", function($window, $q, cancelAnimation, requestAnimation, duScrollEasing, duScrollDuration, duScrollOffset) {
	  'use strict';

	  var proto = {};

	  var isDocument = function(el) {
	    return (typeof HTMLDocument !== 'undefined' && el instanceof HTMLDocument) || (el.nodeType && el.nodeType === el.DOCUMENT_NODE);
	  };

	  var isElement = function(el) {
	    return (typeof HTMLElement !== 'undefined' && el instanceof HTMLElement) || (el.nodeType && el.nodeType === el.ELEMENT_NODE);
	  };

	  var unwrap = function(el) {
	    return isElement(el) || isDocument(el) ? el : el[0];
	  };

	  proto.duScrollTo = function(left, top, duration, easing) {
	    var aliasFn;
	    if(angular.isElement(left)) {
	      aliasFn = this.duScrollToElement;
	    } else if(angular.isDefined(duration)) {
	      aliasFn = this.duScrollToAnimated;
	    }
	    if(aliasFn) {
	      return aliasFn.apply(this, arguments);
	    }
	    var el = unwrap(this);
	    if(isDocument(el)) {
	      return $window.scrollTo(left, top);
	    }
	    el.scrollLeft = left;
	    el.scrollTop = top;
	  };

	  var scrollAnimation, deferred;
	  proto.duScrollToAnimated = function(left, top, duration, easing) {
	    if(duration && !easing) {
	      easing = duScrollEasing;
	    }
	    var startLeft = this.duScrollLeft(),
	        startTop = this.duScrollTop(),
	        deltaLeft = Math.round(left - startLeft),
	        deltaTop = Math.round(top - startTop);

	    var startTime = null, progress = 0;
	    var el = this;

	    var cancelOnEvents = 'scroll mousedown mousewheel touchmove keydown';
	    var cancelScrollAnimation = function($event) {
	      if (!$event || (progress && $event.which > 0)) {
	        el.unbind(cancelOnEvents, cancelScrollAnimation);
	        cancelAnimation(scrollAnimation);
	        deferred.reject();
	        scrollAnimation = null;
	      }
	    };

	    if(scrollAnimation) {
	      cancelScrollAnimation();
	    }
	    deferred = $q.defer();

	    if(duration === 0 || (!deltaLeft && !deltaTop)) {
	      if(duration === 0) {
	        el.duScrollTo(left, top);
	      }
	      deferred.resolve();
	      return deferred.promise;
	    }

	    var animationStep = function(timestamp) {
	      if (startTime === null) {
	        startTime = timestamp;
	      }

	      progress = timestamp - startTime;
	      var percent = (progress >= duration ? 1 : easing(progress/duration));

	      el.scrollTo(
	        startLeft + Math.ceil(deltaLeft * percent),
	        startTop + Math.ceil(deltaTop * percent)
	      );
	      if(percent < 1) {
	        scrollAnimation = requestAnimation(animationStep);
	      } else {
	        el.unbind(cancelOnEvents, cancelScrollAnimation);
	        scrollAnimation = null;
	        deferred.resolve();
	      }
	    };

	    //Fix random mobile safari bug when scrolling to top by hitting status bar
	    el.duScrollTo(startLeft, startTop);

	    el.bind(cancelOnEvents, cancelScrollAnimation);

	    scrollAnimation = requestAnimation(animationStep);
	    return deferred.promise;
	  };

	  proto.duScrollToElement = function(target, offset, duration, easing) {
	    var el = unwrap(this);
	    if(!angular.isNumber(offset) || isNaN(offset)) {
	      offset = duScrollOffset;
	    }
	    var top = this.duScrollTop() + unwrap(target).getBoundingClientRect().top - offset;
	    if(isElement(el)) {
	      top -= el.getBoundingClientRect().top;
	    }
	    return this.duScrollTo(0, top, duration, easing);
	  };

	  proto.duScrollLeft = function(value, duration, easing) {
	    if(angular.isNumber(value)) {
	      return this.duScrollTo(value, this.duScrollTop(), duration, easing);
	    }
	    var el = unwrap(this);
	    if(isDocument(el)) {
	      return $window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft;
	    }
	    return el.scrollLeft;
	  };
	  proto.duScrollTop = function(value, duration, easing) {
	    if(angular.isNumber(value)) {
	      return this.duScrollTo(this.duScrollLeft(), value, duration, easing);
	    }
	    var el = unwrap(this);
	    if(isDocument(el)) {
	      return $window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
	    }
	    return el.scrollTop;
	  };

	  proto.duScrollToElementAnimated = function(target, offset, duration, easing) {
	    return this.duScrollToElement(target, offset, duration || duScrollDuration, easing);
	  };

	  proto.duScrollTopAnimated = function(top, duration, easing) {
	    return this.duScrollTop(top, duration || duScrollDuration, easing);
	  };

	  proto.duScrollLeftAnimated = function(left, duration, easing) {
	    return this.duScrollLeft(left, duration || duScrollDuration, easing);
	  };

	  angular.forEach(proto, function(fn, key) {
	    angular.element.prototype[key] = fn;

	    //Remove prefix if not already claimed by jQuery / ui.utils
	    var unprefixed = key.replace(/^duScroll/, 'scroll');
	    if(angular.isUndefined(angular.element.prototype[unprefixed])) {
	      angular.element.prototype[unprefixed] = fn;
	    }
	  });

	}]);


	//Adapted from https://gist.github.com/paulirish/1579671
	angular.module('duScroll.polyfill', [])
	.factory('polyfill', ["$window", function($window) {
	  'use strict';

	  var vendors = ['webkit', 'moz', 'o', 'ms'];

	  return function(fnName, fallback) {
	    if($window[fnName]) {
	      return $window[fnName];
	    }
	    var suffix = fnName.substr(0, 1).toUpperCase() + fnName.substr(1);
	    for(var key, i = 0; i < vendors.length; i++) {
	      key = vendors[i]+suffix;
	      if($window[key]) {
	        return $window[key];
	      }
	    }
	    return fallback;
	  };
	}]);

	angular.module('duScroll.requestAnimation', ['duScroll.polyfill'])
	.factory('requestAnimation', ["polyfill", "$timeout", function(polyfill, $timeout) {
	  'use strict';

	  var lastTime = 0;
	  var fallback = function(callback, element) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = $timeout(function() { callback(currTime + timeToCall); },
	      timeToCall);
	    lastTime = currTime + timeToCall;
	    return id;
	  };

	  return polyfill('requestAnimationFrame', fallback);
	}])
	.factory('cancelAnimation', ["polyfill", "$timeout", function(polyfill, $timeout) {
	  'use strict';

	  var fallback = function(promise) {
	    $timeout.cancel(promise);
	  };

	  return polyfill('cancelAnimationFrame', fallback);
	}]);


	angular.module('duScroll.spyAPI', ['duScroll.scrollContainerAPI'])
	.factory('spyAPI', ["$rootScope", "$timeout", "$window", "$document", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", "duScrollBottomSpy", function($rootScope, $timeout, $window, $document, scrollContainerAPI, duScrollGreedy, duScrollSpyWait, duScrollBottomSpy) {
	  'use strict';

	  var createScrollHandler = function(context) {
	    var timer = false, queued = false;
	    var handler = function() {
	      queued = false;
	      var container = context.container,
	          containerEl = container[0],
	          containerOffset = 0,
	          bottomReached;

	      if (typeof HTMLElement !== 'undefined' && containerEl instanceof HTMLElement || containerEl.nodeType && containerEl.nodeType === containerEl.ELEMENT_NODE) {
	        containerOffset = containerEl.getBoundingClientRect().top;
	        bottomReached = Math.round(containerEl.scrollTop + containerEl.clientHeight) >= containerEl.scrollHeight;
	      } else {
	        bottomReached = Math.round($window.pageYOffset + $window.innerHeight) >= $document[0].body.scrollHeight;
	      }
	      var compareProperty = (duScrollBottomSpy && bottomReached ? 'bottom' : 'top');

	      var i, currentlyActive, toBeActive, spies, spy, pos;
	      spies = context.spies;
	      currentlyActive = context.currentlyActive;
	      toBeActive = undefined;

	      for(i = 0; i < spies.length; i++) {
	        spy = spies[i];
	        pos = spy.getTargetPosition();
	        if (!pos) continue;

	        if((duScrollBottomSpy && bottomReached) || (pos.top + spy.offset - containerOffset < 20 && (duScrollGreedy || pos.top*-1 + containerOffset) < pos.height)) {
	          //Find the one closest the viewport top or the page bottom if it's reached
	          if(!toBeActive || toBeActive[compareProperty] < pos[compareProperty]) {
	            toBeActive = {
	              spy: spy
	            };
	            toBeActive[compareProperty] = pos[compareProperty];
	          }
	        }
	      }

	      if(toBeActive) {
	        toBeActive = toBeActive.spy;
	      }
	      if(currentlyActive === toBeActive || (duScrollGreedy && !toBeActive)) return;
	      if(currentlyActive) {
	        currentlyActive.$element.removeClass('active');
	        $rootScope.$broadcast('duScrollspy:becameInactive', currentlyActive.$element);
	      }
	      if(toBeActive) {
	        toBeActive.$element.addClass('active');
	        $rootScope.$broadcast('duScrollspy:becameActive', toBeActive.$element);
	      }
	      context.currentlyActive = toBeActive;
	    };

	    if(!duScrollSpyWait) {
	      return handler;
	    }

	    //Debounce for potential performance savings
	    return function() {
	      if(!timer) {
	        handler();
	        timer = $timeout(function() {
	          timer = false;
	          if(queued) {
	            handler();
	          }
	        }, duScrollSpyWait, false);
	      } else {
	        queued = true;
	      }
	    };
	  };

	  var contexts = {};

	  var createContext = function($scope) {
	    var id = $scope.$id;
	    var context = {
	      spies: []
	    };

	    context.handler = createScrollHandler(context);
	    contexts[id] = context;

	    $scope.$on('$destroy', function() {
	      destroyContext($scope);
	    });

	    return id;
	  };

	  var destroyContext = function($scope) {
	    var id = $scope.$id;
	    var context = contexts[id], container = context.container;
	    if(container) {
	      container.off('scroll', context.handler);
	    }
	    delete contexts[id];
	  };

	  var defaultContextId = createContext($rootScope);

	  var getContextForScope = function(scope) {
	    if(contexts[scope.$id]) {
	      return contexts[scope.$id];
	    }
	    if(scope.$parent) {
	      return getContextForScope(scope.$parent);
	    }
	    return contexts[defaultContextId];
	  };

	  var getContextForSpy = function(spy) {
	    var context, contextId, scope = spy.$scope;
	    if(scope) {
	      return getContextForScope(scope);
	    }
	    //No scope, most likely destroyed
	    for(contextId in contexts) {
	      context = contexts[contextId];
	      if(context.spies.indexOf(spy) !== -1) {
	        return context;
	      }
	    }
	  };

	  var isElementInDocument = function(element) {
	    while (element.parentNode) {
	      element = element.parentNode;
	      if (element === document) {
	        return true;
	      }
	    }
	    return false;
	  };

	  var addSpy = function(spy) {
	    var context = getContextForSpy(spy);
	    if (!context) return;
	    context.spies.push(spy);
	    if (!context.container || !isElementInDocument(context.container)) {
	      if(context.container) {
	        context.container.off('scroll', context.handler);
	      }
	      context.container = scrollContainerAPI.getContainer(spy.$scope);
	      context.container.on('scroll', context.handler).triggerHandler('scroll');
	    }
	  };

	  var removeSpy = function(spy) {
	    var context = getContextForSpy(spy);
	    if(spy === context.currentlyActive) {
	      context.currentlyActive = null;
	    }
	    var i = context.spies.indexOf(spy);
	    if(i !== -1) {
	      context.spies.splice(i, 1);
	    }
			spy.$element = null;
	  };

	  return {
	    addSpy: addSpy,
	    removeSpy: removeSpy,
	    createContext: createContext,
	    destroyContext: destroyContext,
	    getContextForScope: getContextForScope
	  };
	}]);


	angular.module('duScroll.scrollContainerAPI', [])
	.factory('scrollContainerAPI', ["$document", function($document) {
	  'use strict';

	  var containers = {};

	  var setContainer = function(scope, element) {
	    var id = scope.$id;
	    containers[id] = element;
	    return id;
	  };

	  var getContainerId = function(scope) {
	    if(containers[scope.$id]) {
	      return scope.$id;
	    }
	    if(scope.$parent) {
	      return getContainerId(scope.$parent);
	    }
	    return;
	  };

	  var getContainer = function(scope) {
	    var id = getContainerId(scope);
	    return id ? containers[id] : $document;
	  };

	  var removeContainer = function(scope) {
	    var id = getContainerId(scope);
	    if(id) {
	      delete containers[id];
	    }
	  };

	  return {
	    getContainerId:   getContainerId,
	    getContainer:     getContainer,
	    setContainer:     setContainer,
	    removeContainer:  removeContainer
	  };
	}]);


	angular.module('duScroll.smoothScroll', ['duScroll.scrollHelpers', 'duScroll.scrollContainerAPI'])
	.directive('duSmoothScroll', ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(duScrollDuration, duScrollOffset, scrollContainerAPI) {
	  'use strict';

	  return {
	    link : function($scope, $element, $attr) {
	      $element.on('click', function(e) {
	        if((!$attr.href || $attr.href.indexOf('#') === -1) && $attr.duSmoothScroll === '') return;

	        var id = $attr.href ? $attr.href.replace(/.*(?=#[^\s]+$)/, '').substring(1) : $attr.duSmoothScroll;

	        var target = document.getElementById(id) || document.getElementsByName(id)[0];
	        if(!target || !target.getBoundingClientRect) return;

	        if (e.stopPropagation) e.stopPropagation();
	        if (e.preventDefault) e.preventDefault();

	        var offset    = $attr.offset ? parseInt($attr.offset, 10) : duScrollOffset;
	        var duration  = $attr.duration ? parseInt($attr.duration, 10) : duScrollDuration;
	        var container = scrollContainerAPI.getContainer($scope);

	        container.duScrollToElement(
	          angular.element(target),
	          isNaN(offset) ? 0 : offset,
	          isNaN(duration) ? 0 : duration
	        );
	      });
	    }
	  };
	}]);


	angular.module('duScroll.spyContext', ['duScroll.spyAPI'])
	.directive('duSpyContext', ["spyAPI", function(spyAPI) {
	  'use strict';

	  return {
	    restrict: 'A',
	    scope: true,
	    compile: function compile(tElement, tAttrs, transclude) {
	      return {
	        pre: function preLink($scope, iElement, iAttrs, controller) {
	          spyAPI.createContext($scope);
	        }
	      };
	    }
	  };
	}]);


	angular.module('duScroll.scrollContainer', ['duScroll.scrollContainerAPI'])
	.directive('duScrollContainer', ["scrollContainerAPI", function(scrollContainerAPI){
	  'use strict';

	  return {
	    restrict: 'A',
	    scope: true,
	    compile: function compile(tElement, tAttrs, transclude) {
	      return {
	        pre: function preLink($scope, iElement, iAttrs, controller) {
	          iAttrs.$observe('duScrollContainer', function(element) {
	            if(angular.isString(element)) {
	              element = document.getElementById(element);
	            }

	            element = (angular.isElement(element) ? angular.element(element) : iElement);
	            scrollContainerAPI.setContainer($scope, element);
	            $scope.$on('$destroy', function() {
	              scrollContainerAPI.removeContainer($scope);
	            });
	          });
	        }
	      };
	    }
	  };
	}]);


	angular.module('duScroll.scrollspy', ['duScroll.spyAPI'])
	.directive('duScrollspy', ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(spyAPI, duScrollOffset, $timeout, $rootScope) {
	  'use strict';

	  var Spy = function(targetElementOrId, $scope, $element, offset) {
	    if(angular.isElement(targetElementOrId)) {
	      this.target = targetElementOrId;
	    } else if(angular.isString(targetElementOrId)) {
	      this.targetId = targetElementOrId;
	    }
	    this.$scope = $scope;
	    this.$element = $element;
	    this.offset = offset;
	  };

	  Spy.prototype.getTargetElement = function() {
	    if (!this.target && this.targetId) {
	      this.target = document.getElementById(this.targetId) || document.getElementsByName(this.targetId)[0];
	    }
	    return this.target;
	  };

	  Spy.prototype.getTargetPosition = function() {
	    var target = this.getTargetElement();
	    if(target) {
	      return target.getBoundingClientRect();
	    }
	  };

	  Spy.prototype.flushTargetCache = function() {
	    if(this.targetId) {
	      this.target = undefined;
	    }
	  };

	  return {
	    link: function ($scope, $element, $attr) {
	      var href = $attr.ngHref || $attr.href;
	      var targetId;

	      if (href && href.indexOf('#') !== -1) {
	        targetId = href.replace(/.*(?=#[^\s]+$)/, '').substring(1);
	      } else if($attr.duScrollspy) {
	        targetId = $attr.duScrollspy;
	      } else if($attr.duSmoothScroll) {
	        targetId = $attr.duSmoothScroll;
	      }
	      if(!targetId) return;

	      // Run this in the next execution loop so that the scroll context has a chance
	      // to initialize
	      $timeout(function() {
	        var spy = new Spy(targetId, $scope, $element, -($attr.offset ? parseInt($attr.offset, 10) : duScrollOffset));
	        spyAPI.addSpy(spy);

	        $scope.$on('$locationChangeSuccess', spy.flushTargetCache.bind(spy));
	        var deregisterOnStateChange = $rootScope.$on('$stateChangeSuccess', spy.flushTargetCache.bind(spy));
	        $scope.$on('$destroy', function() {
	          spyAPI.removeSpy(spy);
	          deregisterOnStateChange();
	        });
	      }, 0, false);
	    }
	  };
	}]);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);

	module.exports = angular.module('TM').directive('tmCarousel', tmCarousel);

	function tmCarousel() {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var autoplay = (attrs.autoplay) ? true : false,
	        speed =  (attrs.speed) ? attrs.speed : 3000;

	    element.slick({
	      autoplay: autoplay,
	      autoplaySpeed: speed,
	      adaptiveHeight: true
	    });        
	  }
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/

	 Version: 1.5.3
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues

	 */
	/* global window, document, define, jQuery, setInterval, clearInterval */
	(function(factory) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }

	}(function($) {
	    'use strict';
	    var Slick = window.Slick || {};

	    Slick = (function() {

	        var instanceUid = 0;

	        function Slick(element, settings) {

	            var _ = this,
	                dataSettings, responsiveSettings, breakpoint;

	            _.defaults = {
	                accessibility: true,
	                adaptiveHeight: false,
	                appendArrows: $(element),
	                appendDots: $(element),
	                arrows: true,
	                asNavFor: null,
	                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
	                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
	                autoplay: false,
	                autoplaySpeed: 3000,
	                centerMode: false,
	                centerPadding: '50px',
	                cssEase: 'ease',
	                customPaging: function(slider, i) {
	                    return '<button type="button" data-role="none">' + (i + 1) + '</button>';
	                },
	                dots: false,
	                dotsClass: 'slick-dots',
	                draggable: true,
	                easing: 'linear',
	                edgeFriction: 0.35,
	                fade: false,
	                focusOnSelect: false,
	                infinite: true,
	                initialSlide: 0,
	                lazyLoad: 'ondemand',
	                mobileFirst: false,
	                pauseOnHover: true,
	                pauseOnDotsHover: false,
	                respondTo: 'window',
	                responsive: null,
	                rows: 1,
	                rtl: false,
	                slide: '',
	                slidesPerRow: 1,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                speed: 500,
	                swipe: true,
	                swipeToSlide: false,
	                touchMove: true,
	                touchThreshold: 5,
	                useCSS: true,
	                variableWidth: false,
	                vertical: false,
	                verticalSwiping: false,
	                waitForAnimate: true
	            };

	            _.initials = {
	                animating: false,
	                dragging: false,
	                autoPlayTimer: null,
	                currentDirection: 0,
	                currentLeft: null,
	                currentSlide: 0,
	                direction: 1,
	                $dots: null,
	                listWidth: null,
	                listHeight: null,
	                loadIndex: 0,
	                $nextArrow: null,
	                $prevArrow: null,
	                slideCount: null,
	                slideWidth: null,
	                $slideTrack: null,
	                $slides: null,
	                sliding: false,
	                slideOffset: 0,
	                swipeLeft: null,
	                $list: null,
	                touchObject: {},
	                transformsEnabled: false,
	                unslicked: false
	            };

	            $.extend(_, _.initials);

	            _.activeBreakpoint = null;
	            _.animType = null;
	            _.animProp = null;
	            _.breakpoints = [];
	            _.breakpointSettings = [];
	            _.cssTransitions = false;
	            _.hidden = 'hidden';
	            _.paused = false;
	            _.positionProp = null;
	            _.respondTo = null;
	            _.rowCount = 1;
	            _.shouldClick = true;
	            _.$slider = $(element);
	            _.$slidesCache = null;
	            _.transformType = null;
	            _.transitionType = null;
	            _.visibilityChange = 'visibilitychange';
	            _.windowWidth = 0;
	            _.windowTimer = null;

	            dataSettings = $(element).data('slick') || {};

	            _.options = $.extend({}, _.defaults, dataSettings, settings);

	            _.currentSlide = _.options.initialSlide;

	            _.originalSettings = _.options;
	            responsiveSettings = _.options.responsive || null;

	            if (responsiveSettings && responsiveSettings.length > -1) {
	                _.respondTo = _.options.respondTo || 'window';
	                for (breakpoint in responsiveSettings) {
	                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
	                        _.breakpoints.push(responsiveSettings[
	                            breakpoint].breakpoint);
	                        _.breakpointSettings[responsiveSettings[
	                                breakpoint].breakpoint] =
	                            responsiveSettings[breakpoint].settings;
	                    }
	                }
	                _.breakpoints.sort(function(a, b) {
	                    if (_.options.mobileFirst === true) {
	                        return a - b;
	                    } else {
	                        return b - a;
	                    }
	                });
	            }

	            if (typeof document.mozHidden !== 'undefined') {
	                _.hidden = 'mozHidden';
	                _.visibilityChange = 'mozvisibilitychange';
	            } else if (typeof document.webkitHidden !== 'undefined') {
	                _.hidden = 'webkitHidden';
	                _.visibilityChange = 'webkitvisibilitychange';
	            }

	            _.autoPlay = $.proxy(_.autoPlay, _);
	            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
	            _.changeSlide = $.proxy(_.changeSlide, _);
	            _.clickHandler = $.proxy(_.clickHandler, _);
	            _.selectHandler = $.proxy(_.selectHandler, _);
	            _.setPosition = $.proxy(_.setPosition, _);
	            _.swipeHandler = $.proxy(_.swipeHandler, _);
	            _.dragHandler = $.proxy(_.dragHandler, _);
	            _.keyHandler = $.proxy(_.keyHandler, _);
	            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

	            _.instanceUid = instanceUid++;

	            // A simple way to check for HTML strings
	            // Strict HTML recognition (must start with <)
	            // Extracted from jQuery v1.11 source
	            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

	            _.init(true);

	            _.checkResponsive(true);

	        }

	        return Slick;

	    }());

	    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

	        var _ = this;

	        if (typeof(index) === 'boolean') {
	            addBefore = index;
	            index = null;
	        } else if (index < 0 || (index >= _.slideCount)) {
	            return false;
	        }

	        _.unload();

	        if (typeof(index) === 'number') {
	            if (index === 0 && _.$slides.length === 0) {
	                $(markup).appendTo(_.$slideTrack);
	            } else if (addBefore) {
	                $(markup).insertBefore(_.$slides.eq(index));
	            } else {
	                $(markup).insertAfter(_.$slides.eq(index));
	            }
	        } else {
	            if (addBefore === true) {
	                $(markup).prependTo(_.$slideTrack);
	            } else {
	                $(markup).appendTo(_.$slideTrack);
	            }
	        }

	        _.$slides = _.$slideTrack.children(this.options.slide);

	        _.$slideTrack.children(this.options.slide).detach();

	        _.$slideTrack.append(_.$slides);

	        _.$slides.each(function(index, element) {
	            $(element).attr('data-slick-index', index);
	        });

	        _.$slidesCache = _.$slides;

	        _.reinit();

	    };

	    Slick.prototype.animateHeight = function() {
	        var _ = this;
	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.animate({
	                height: targetHeight
	            }, _.options.speed);
	        }
	    };

	    Slick.prototype.animateSlide = function(targetLeft, callback) {

	        var animProps = {},
	            _ = this;

	        _.animateHeight();

	        if (_.options.rtl === true && _.options.vertical === false) {
	            targetLeft = -targetLeft;
	        }
	        if (_.transformsEnabled === false) {
	            if (_.options.vertical === false) {
	                _.$slideTrack.animate({
	                    left: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            } else {
	                _.$slideTrack.animate({
	                    top: targetLeft
	                }, _.options.speed, _.options.easing, callback);
	            }

	        } else {

	            if (_.cssTransitions === false) {
	                if (_.options.rtl === true) {
	                    _.currentLeft = -(_.currentLeft);
	                }
	                $({
	                    animStart: _.currentLeft
	                }).animate({
	                    animStart: targetLeft
	                }, {
	                    duration: _.options.speed,
	                    easing: _.options.easing,
	                    step: function(now) {
	                        now = Math.ceil(now);
	                        if (_.options.vertical === false) {
	                            animProps[_.animType] = 'translate(' +
	                                now + 'px, 0px)';
	                            _.$slideTrack.css(animProps);
	                        } else {
	                            animProps[_.animType] = 'translate(0px,' +
	                                now + 'px)';
	                            _.$slideTrack.css(animProps);
	                        }
	                    },
	                    complete: function() {
	                        if (callback) {
	                            callback.call();
	                        }
	                    }
	                });

	            } else {

	                _.applyTransition();
	                targetLeft = Math.ceil(targetLeft);

	                if (_.options.vertical === false) {
	                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
	                } else {
	                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
	                }
	                _.$slideTrack.css(animProps);

	                if (callback) {
	                    setTimeout(function() {

	                        _.disableTransition();

	                        callback.call();
	                    }, _.options.speed);
	                }

	            }

	        }

	    };

	    Slick.prototype.asNavFor = function(index) {

	        var _ = this,
	            asNavFor = _.options.asNavFor;

	        if ( asNavFor && asNavFor !== null ) {
	            asNavFor = $(asNavFor).not(_.$slider);
	        }

	        if ( asNavFor !== null && typeof asNavFor === "object" ) {
	            asNavFor.each(function() {
	                var target = $(this).slick('getSlick');
	                if(!target.unslicked) {
	                    target.slideHandler(index, true);
	                }
	            });
	        }

	    };

	    Slick.prototype.applyTransition = function(slide) {

	        var _ = this,
	            transition = {};

	        if (_.options.fade === false) {
	            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
	        } else {
	            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
	        }

	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }

	    };

	    Slick.prototype.autoPlay = function() {

	        var _ = this;

	        if (_.autoPlayTimer) {
	            clearInterval(_.autoPlayTimer);
	        }

	        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
	            _.autoPlayTimer = setInterval(_.autoPlayIterator,
	                _.options.autoplaySpeed);
	        }

	    };

	    Slick.prototype.autoPlayClear = function() {

	        var _ = this;
	        if (_.autoPlayTimer) {
	            clearInterval(_.autoPlayTimer);
	        }

	    };

	    Slick.prototype.autoPlayIterator = function() {

	        var _ = this;

	        if (_.options.infinite === false) {

	            if (_.direction === 1) {

	                if ((_.currentSlide + 1) === _.slideCount -
	                    1) {
	                    _.direction = 0;
	                }

	                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

	            } else {

	                if ((_.currentSlide - 1 === 0)) {

	                    _.direction = 1;

	                }

	                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

	            }

	        } else {

	            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

	        }

	    };

	    Slick.prototype.buildArrows = function() {

	        var _ = this;

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

	            _.$prevArrow = $(_.options.prevArrow);
	            _.$nextArrow = $(_.options.nextArrow);

	            if (_.htmlExpr.test(_.options.prevArrow)) {
	                _.$prevArrow.appendTo(_.options.appendArrows);
	            }

	            if (_.htmlExpr.test(_.options.nextArrow)) {
	                _.$nextArrow.appendTo(_.options.appendArrows);
	            }

	            if (_.options.infinite !== true) {
	                _.$prevArrow.addClass('slick-disabled');
	            }

	        }

	    };

	    Slick.prototype.buildDots = function() {

	        var _ = this,
	            i, dotString;

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

	            dotString = '<ul class="' + _.options.dotsClass + '">';

	            for (i = 0; i <= _.getDotCount(); i += 1) {
	                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
	            }

	            dotString += '</ul>';

	            _.$dots = $(dotString).appendTo(
	                _.options.appendDots);

	            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

	        }

	    };

	    Slick.prototype.buildOut = function() {

	        var _ = this;

	        _.$slides = _.$slider.children(
	            ':not(.slick-cloned)').addClass(
	            'slick-slide');
	        _.slideCount = _.$slides.length;

	        _.$slides.each(function(index, element) {
	            $(element).attr('data-slick-index', index);
	        });

	        _.$slidesCache = _.$slides;

	        _.$slider.addClass('slick-slider');

	        _.$slideTrack = (_.slideCount === 0) ?
	            $('<div class="slick-track"/>').appendTo(_.$slider) :
	            _.$slides.wrapAll('<div class="slick-track"/>').parent();

	        _.$list = _.$slideTrack.wrap(
	            '<div aria-live="polite" class="slick-list"/>').parent();
	        _.$slideTrack.css('opacity', 0);

	        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
	            _.options.slidesToScroll = 1;
	        }

	        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

	        _.setupInfinite();

	        _.buildArrows();

	        _.buildDots();

	        _.updateDots();

	        if (_.options.accessibility === true) {
	            _.$list.prop('tabIndex', 0);
	        }

	        _.setSlideClasses(typeof this.currentSlide === 'number' ? this.currentSlide : 0);

	        if (_.options.draggable === true) {
	            _.$list.addClass('draggable');
	        }

	    };

	    Slick.prototype.buildRows = function() {

	        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

	        newSlides = document.createDocumentFragment();
	        originalSlides = _.$slider.children();

	        if(_.options.rows > 1) {
	            slidesPerSection = _.options.slidesPerRow * _.options.rows;
	            numOfSlides = Math.ceil(
	                originalSlides.length / slidesPerSection
	            );

	            for(a = 0; a < numOfSlides; a++){
	                var slide = document.createElement('div');
	                for(b = 0; b < _.options.rows; b++) {
	                    var row = document.createElement('div');
	                    for(c = 0; c < _.options.slidesPerRow; c++) {
	                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
	                        if (originalSlides.get(target)) {
	                            row.appendChild(originalSlides.get(target));
	                        }
	                    }
	                    slide.appendChild(row);
	                }
	                newSlides.appendChild(slide);
	            };
	            _.$slider.html(newSlides);
	            _.$slider.children().children().children()
	                .width((100 / _.options.slidesPerRow) + "%")
	                .css({'display': 'inline-block'});
	        };

	    };

	    Slick.prototype.checkResponsive = function(initial) {

	        var _ = this,
	            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
	        var sliderWidth = _.$slider.width();
	        var windowWidth = window.innerWidth || $(window).width();

	        if (_.respondTo === 'window') {
	            respondToWidth = windowWidth;
	        } else if (_.respondTo === 'slider') {
	            respondToWidth = sliderWidth;
	        } else if (_.respondTo === 'min') {
	            respondToWidth = Math.min(windowWidth, sliderWidth);
	        }

	        if (_.originalSettings.responsive && _.originalSettings
	            .responsive.length > -1 && _.originalSettings.responsive !== null) {

	            targetBreakpoint = null;

	            for (breakpoint in _.breakpoints) {
	                if (_.breakpoints.hasOwnProperty(breakpoint)) {
	                    if (_.originalSettings.mobileFirst === false) {
	                        if (respondToWidth < _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    } else {
	                        if (respondToWidth > _.breakpoints[breakpoint]) {
	                            targetBreakpoint = _.breakpoints[breakpoint];
	                        }
	                    }
	                }
	            }

	            if (targetBreakpoint !== null) {
	                if (_.activeBreakpoint !== null) {
	                    if (targetBreakpoint !== _.activeBreakpoint) {
	                        _.activeBreakpoint =
	                            targetBreakpoint;
	                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                            _.unslick(targetBreakpoint);
	                        } else {
	                            _.options = $.extend({}, _.originalSettings,
	                                _.breakpointSettings[
	                                    targetBreakpoint]);
	                            if (initial === true) {
	                                _.currentSlide = _.options.initialSlide;
	                            }
	                            _.refresh();
	                        }
	                        triggerBreakpoint = targetBreakpoint;
	                    }
	                } else {
	                    _.activeBreakpoint = targetBreakpoint;
	                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	                        _.unslick(targetBreakpoint);
	                    } else {
	                        _.options = $.extend({}, _.originalSettings,
	                            _.breakpointSettings[
	                                targetBreakpoint]);
	                        if (initial === true) {
	                            _.currentSlide = _.options.initialSlide;
	                        } else {
	                            _.refresh();
	                        }
	                    }
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            } else {
	                if (_.activeBreakpoint !== null) {
	                    _.activeBreakpoint = null;
	                    _.options = _.originalSettings;
	                    if (initial === true) {
	                        _.currentSlide = _.options.initialSlide;
	                    }
	                    _.refresh();
	                    triggerBreakpoint = targetBreakpoint;
	                }
	            }

	            // only trigger breakpoints during an actual break. not on initialize.
	            if( !initial && triggerBreakpoint !== false ) {
	                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
	            }
	        }

	    };

	    Slick.prototype.changeSlide = function(event, dontAnimate) {

	        var _ = this,
	            $target = $(event.target),
	            indexOffset, slideOffset, unevenOffset;

	        // If target is a link, prevent default action.
	        if($target.is('a')) {
	            event.preventDefault();
	        }

	        // If target is not the <li> element (ie: a child), find the <li>.
	        if(!$target.is('li')) {
	            $target = $target.closest('li');
	        }

	        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
	        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

	        switch (event.data.message) {

	            case 'previous':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
	                }
	                break;

	            case 'next':
	                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
	                if (_.slideCount > _.options.slidesToShow) {
	                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
	                }
	                break;

	            case 'index':
	                var index = event.data.index === 0 ? 0 :
	                    event.data.index || $target.index() * _.options.slidesToScroll;

	                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
	                $target.children().trigger("focus");
	                break;

	            default:
	                return;
	        }

	    };

	    Slick.prototype.checkNavigable = function(index) {

	        var _ = this,
	            navigables, prevNavigable;

	        navigables = _.getNavigableIndexes();
	        prevNavigable = 0;
	        if (index > navigables[navigables.length - 1]) {
	            index = navigables[navigables.length - 1];
	        } else {
	            for (var n in navigables) {
	                if (index < navigables[n]) {
	                    index = prevNavigable;
	                    break;
	                }
	                prevNavigable = navigables[n];
	            }
	        }

	        return index;
	    };

	    Slick.prototype.cleanUpEvents = function() {

	        var _ = this;

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	            $('li', _.$dots).off('click.slick', _.changeSlide);
	        }

	        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
	            $('li', _.$dots)
	                .off('mouseenter.slick', $.proxy(_.setPaused, _, true))
	                .off('mouseleave.slick', $.proxy(_.setPaused, _, false));
	        }

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
	            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
	        }

	        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
	        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
	        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
	        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

	        _.$list.off('click.slick', _.clickHandler);

	        $(document).off(_.visibilityChange, _.visibility);

	        _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
	        _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

	        if (_.options.accessibility === true) {
	            _.$list.off('keydown.slick', _.keyHandler);
	        }

	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
	        }

	        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

	        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

	        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

	        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
	        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
	    };

	    Slick.prototype.cleanUpRows = function() {

	        var _ = this, originalSlides;

	        if(_.options.rows > 1) {
	            originalSlides = _.$slides.children().children();
	            originalSlides.removeAttr('style');
	            _.$slider.html(originalSlides);
	        }

	    };

	    Slick.prototype.clickHandler = function(event) {

	        var _ = this;

	        if (_.shouldClick === false) {
	            event.stopImmediatePropagation();
	            event.stopPropagation();
	            event.preventDefault();
	        }

	    };

	    Slick.prototype.destroy = function() {

	        var _ = this;

	        _.autoPlayClear();

	        _.touchObject = {};

	        _.cleanUpEvents();

	        $('.slick-cloned', _.$slider).detach();

	        if (_.$dots) {
	            _.$dots.remove();
	        }
	        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
	            _.$prevArrow.remove();
	        }
	        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
	            _.$nextArrow.remove();
	        }

	        if (_.$slides) {
	            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible')
	                .removeAttr('aria-hidden')
	                .removeAttr('data-slick-index')
	                .css({
	                    position: '',
	                    left: '',
	                    top: '',
	                    zIndex: '',
	                    opacity: '',
	                    width: ''
	                });

	            _.$slideTrack.children(this.options.slide).detach();

	            _.$slideTrack.detach();

	            _.$list.detach();

	            _.$slider.append(_.$slides);
	        }

	        _.cleanUpRows();

	        _.$slider.removeClass('slick-slider');
	        _.$slider.removeClass('slick-initialized');

	        _.unslicked = true;

	    };

	    Slick.prototype.disableTransition = function(slide) {

	        var _ = this,
	            transition = {};

	        transition[_.transitionType] = '';

	        if (_.options.fade === false) {
	            _.$slideTrack.css(transition);
	        } else {
	            _.$slides.eq(slide).css(transition);
	        }

	    };

	    Slick.prototype.fadeSlide = function(slideIndex, callback) {

	        var _ = this;

	        if (_.cssTransitions === false) {

	            _.$slides.eq(slideIndex).css({
	                zIndex: 1000
	            });

	            _.$slides.eq(slideIndex).animate({
	                opacity: 1
	            }, _.options.speed, _.options.easing, callback);

	        } else {

	            _.applyTransition(slideIndex);

	            _.$slides.eq(slideIndex).css({
	                opacity: 1,
	                zIndex: 1000
	            });

	            if (callback) {
	                setTimeout(function() {

	                    _.disableTransition(slideIndex);

	                    callback.call();
	                }, _.options.speed);
	            }

	        }

	    };

	    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

	        var _ = this;

	        if (filter !== null) {

	            _.unload();

	            _.$slideTrack.children(this.options.slide).detach();

	            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

	            _.reinit();

	        }

	    };

	    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

	        var _ = this;
	        return _.currentSlide;

	    };

	    Slick.prototype.getDotCount = function() {

	        var _ = this;

	        var breakPoint = 0;
	        var counter = 0;
	        var pagerQty = 0;

	        if (_.options.infinite === true) {
	            while (breakPoint < _.slideCount) {
	                ++pagerQty;
	                breakPoint = counter + _.options.slidesToShow;
	                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	            }
	        } else if (_.options.centerMode === true) {
	            pagerQty = _.slideCount;
	        } else {
	            while (breakPoint < _.slideCount) {
	                ++pagerQty;
	                breakPoint = counter + _.options.slidesToShow;
	                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	            }
	        }

	        return pagerQty - 1;

	    };

	    Slick.prototype.getLeft = function(slideIndex) {

	        var _ = this,
	            targetLeft,
	            verticalHeight,
	            verticalOffset = 0,
	            targetSlide;

	        _.slideOffset = 0;
	        verticalHeight = _.$slides.first().outerHeight();

	        if (_.options.infinite === true) {
	            if (_.slideCount > _.options.slidesToShow) {
	                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
	                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
	            }
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
	                    if (slideIndex > _.slideCount) {
	                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
	                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
	                    } else {
	                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
	                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
	                    }
	                }
	            }
	        } else {
	            if (slideIndex + _.options.slidesToShow > _.slideCount) {
	                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
	                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
	            }
	        }

	        if (_.slideCount <= _.options.slidesToShow) {
	            _.slideOffset = 0;
	            verticalOffset = 0;
	        }

	        if (_.options.centerMode === true && _.options.infinite === true) {
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
	        } else if (_.options.centerMode === true) {
	            _.slideOffset = 0;
	            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
	        }

	        if (_.options.vertical === false) {
	            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
	        } else {
	            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
	        }

	        if (_.options.variableWidth === true) {

	            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	            } else {
	                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
	            }

	            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

	            if (_.options.centerMode === true) {
	                if (_.options.infinite === false) {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	                } else {
	                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
	                }
	                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
	            }
	        }

	        return targetLeft;

	    };

	    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

	        var _ = this;

	        return _.options[option];

	    };

	    Slick.prototype.getNavigableIndexes = function() {

	        var _ = this,
	            breakPoint = 0,
	            counter = 0,
	            indexes = [],
	            max;

	        if (_.options.infinite === false) {
	            max = _.slideCount;
	        } else {
	            breakPoint = _.options.slidesToScroll * -1;
	            counter = _.options.slidesToScroll * -1;
	            max = _.slideCount * 2;
	        }

	        while (breakPoint < max) {
	            indexes.push(breakPoint);
	            breakPoint = counter + _.options.slidesToScroll;
	            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	        }

	        return indexes;

	    };

	    Slick.prototype.getSlick = function() {

	        return this;

	    };

	    Slick.prototype.getSlideCount = function() {

	        var _ = this,
	            slidesTraversed, swipedSlide, centerOffset;

	        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

	        if (_.options.swipeToSlide === true) {
	            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
	                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
	                    swipedSlide = slide;
	                    return false;
	                }
	            });

	            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

	            return slidesTraversed;

	        } else {
	            return _.options.slidesToScroll;
	        }

	    };

	    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

	        var _ = this;

	        _.changeSlide({
	            data: {
	                message: 'index',
	                index: parseInt(slide)
	            }
	        }, dontAnimate);

	    };

	    Slick.prototype.init = function(creation) {

	        var _ = this;

	        if (!$(_.$slider).hasClass('slick-initialized')) {

	            $(_.$slider).addClass('slick-initialized');
	            _.buildRows();
	            _.buildOut();
	            _.setProps();
	            _.startLoad();
	            _.loadSlider();
	            _.initializeEvents();
	            _.updateArrows();
	            _.updateDots();
	        }

	        if (creation) {
	            _.$slider.trigger('init', [_]);
	        }

	    };

	    Slick.prototype.initArrowEvents = function() {

	        var _ = this;

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow.on('click.slick', {
	                message: 'previous'
	            }, _.changeSlide);
	            _.$nextArrow.on('click.slick', {
	                message: 'next'
	            }, _.changeSlide);
	        }

	    };

	    Slick.prototype.initDotEvents = function() {

	        var _ = this;

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	            $('li', _.$dots).on('click.slick', {
	                message: 'index'
	            }, _.changeSlide);
	        }

	        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
	            $('li', _.$dots)
	                .on('mouseenter.slick', $.proxy(_.setPaused, _, true))
	                .on('mouseleave.slick', $.proxy(_.setPaused, _, false));
	        }

	    };

	    Slick.prototype.initializeEvents = function() {

	        var _ = this;

	        _.initArrowEvents();

	        _.initDotEvents();

	        _.$list.on('touchstart.slick mousedown.slick', {
	            action: 'start'
	        }, _.swipeHandler);
	        _.$list.on('touchmove.slick mousemove.slick', {
	            action: 'move'
	        }, _.swipeHandler);
	        _.$list.on('touchend.slick mouseup.slick', {
	            action: 'end'
	        }, _.swipeHandler);
	        _.$list.on('touchcancel.slick mouseleave.slick', {
	            action: 'end'
	        }, _.swipeHandler);

	        _.$list.on('click.slick', _.clickHandler);

	        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

	        _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
	        _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

	        if (_.options.accessibility === true) {
	            _.$list.on('keydown.slick', _.keyHandler);
	        }

	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }

	        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

	        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

	        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

	        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
	        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

	    };

	    Slick.prototype.initUI = function() {

	        var _ = this;

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

	            _.$prevArrow.show();
	            _.$nextArrow.show();

	        }

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

	            _.$dots.show();

	        }

	        if (_.options.autoplay === true) {

	            _.autoPlay();

	        }

	    };

	    Slick.prototype.keyHandler = function(event) {

	        var _ = this;

	        if (event.keyCode === 37 && _.options.accessibility === true) {
	            _.changeSlide({
	                data: {
	                    message: 'previous'
	                }
	            });
	        } else if (event.keyCode === 39 && _.options.accessibility === true) {
	            _.changeSlide({
	                data: {
	                    message: 'next'
	                }
	            });
	        }

	    };

	    Slick.prototype.lazyLoad = function() {

	        var _ = this,
	            loadRange, cloneRange, rangeStart, rangeEnd;

	        function loadImages(imagesScope) {
	            $('img[data-lazy]', imagesScope).each(function() {
	                var image = $(this),
	                    imageSource = $(this).attr('data-lazy'),
	                    imageToLoad = document.createElement('img');

	                imageToLoad.onload = function() {
	                    image.animate({
	                        opacity: 1
	                    }, 200);
	                };
	                imageToLoad.src = imageSource;

	                image
	                    .css({
	                        opacity: 0
	                    })
	                    .attr('src', imageSource)
	                    .removeAttr('data-lazy')
	                    .removeClass('slick-loading');
	            });
	        }

	        if (_.options.centerMode === true) {
	            if (_.options.infinite === true) {
	                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
	                rangeEnd = rangeStart + _.options.slidesToShow + 2;
	            } else {
	                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
	                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
	            }
	        } else {
	            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
	            rangeEnd = rangeStart + _.options.slidesToShow;
	            if (_.options.fade === true) {
	                if (rangeStart > 0) rangeStart--;
	                if (rangeEnd <= _.slideCount) rangeEnd++;
	            }
	        }

	        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
	        loadImages(loadRange);

	        if (_.slideCount <= _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-slide');
	            loadImages(cloneRange);
	        } else
	        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
	            loadImages(cloneRange);
	        } else if (_.currentSlide === 0) {
	            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
	            loadImages(cloneRange);
	        }

	    };

	    Slick.prototype.loadSlider = function() {

	        var _ = this;

	        _.setPosition();

	        _.$slideTrack.css({
	            opacity: 1
	        });

	        _.$slider.removeClass('slick-loading');

	        _.initUI();

	        if (_.options.lazyLoad === 'progressive') {
	            _.progressiveLazyLoad();
	        }

	    };

	    Slick.prototype.next = Slick.prototype.slickNext = function() {

	        var _ = this;

	        _.changeSlide({
	            data: {
	                message: 'next'
	            }
	        });

	    };

	    Slick.prototype.orientationChange = function() {

	        var _ = this;

	        _.checkResponsive();
	        _.setPosition();

	    };

	    Slick.prototype.pause = Slick.prototype.slickPause = function() {

	        var _ = this;

	        _.autoPlayClear();
	        _.paused = true;

	    };

	    Slick.prototype.play = Slick.prototype.slickPlay = function() {

	        var _ = this;

	        _.paused = false;
	        _.autoPlay();

	    };

	    Slick.prototype.postSlide = function(index) {

	        var _ = this;

	        _.$slider.trigger('afterChange', [_, index]);

	        _.animating = false;

	        _.setPosition();

	        _.swipeLeft = null;

	        if (_.options.autoplay === true && _.paused === false) {
	            _.autoPlay();
	        }

	    };

	    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

	        var _ = this;

	        _.changeSlide({
	            data: {
	                message: 'previous'
	            }
	        });

	    };

	    Slick.prototype.preventDefault = function(e) {
	        e.preventDefault();
	    };

	    Slick.prototype.progressiveLazyLoad = function() {

	        var _ = this,
	            imgCount, targetImage;

	        imgCount = $('img[data-lazy]', _.$slider).length;

	        if (imgCount > 0) {
	            targetImage = $('img[data-lazy]', _.$slider).first();
	            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
	                    targetImage.removeAttr('data-lazy');
	                    _.progressiveLazyLoad();

	                    if (_.options.adaptiveHeight === true) {
	                        _.setPosition();
	                    }
	                })
	                .error(function() {
	                    targetImage.removeAttr('data-lazy');
	                    _.progressiveLazyLoad();
	                });
	        }

	    };

	    Slick.prototype.refresh = function() {

	        var _ = this,
	            currentSlide = _.currentSlide;

	        _.destroy();

	        $.extend(_, _.initials);

	        _.init();

	        _.changeSlide({
	            data: {
	                message: 'index',
	                index: currentSlide
	            }
	        }, false);

	    };

	    Slick.prototype.reinit = function() {

	        var _ = this;

	        _.$slides = _.$slideTrack.children(_.options.slide).addClass(
	            'slick-slide');

	        _.slideCount = _.$slides.length;

	        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
	            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
	        }

	        if (_.slideCount <= _.options.slidesToShow) {
	            _.currentSlide = 0;
	        }

	        _.setProps();

	        _.setupInfinite();

	        _.buildArrows();

	        _.updateArrows();

	        _.initArrowEvents();

	        _.buildDots();

	        _.updateDots();

	        _.initDotEvents();

	        if (_.options.focusOnSelect === true) {
	            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	        }

	        _.setSlideClasses(0);

	        _.setPosition();

	        _.$slider.trigger('reInit', [_]);

	    };

	    Slick.prototype.resize = function() {

	        var _ = this;

	        if ($(window).width() !== _.windowWidth) {
	            clearTimeout(_.windowDelay);
	            _.windowDelay = window.setTimeout(function() {
	                _.windowWidth = $(window).width();
	                _.checkResponsive();
	                _.setPosition();
	            }, 50);
	        }
	    };

	    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

	        var _ = this;

	        if (typeof(index) === 'boolean') {
	            removeBefore = index;
	            index = removeBefore === true ? 0 : _.slideCount - 1;
	        } else {
	            index = removeBefore === true ? --index : index;
	        }

	        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
	            return false;
	        }

	        _.unload();

	        if (removeAll === true) {
	            _.$slideTrack.children().remove();
	        } else {
	            _.$slideTrack.children(this.options.slide).eq(index).remove();
	        }

	        _.$slides = _.$slideTrack.children(this.options.slide);

	        _.$slideTrack.children(this.options.slide).detach();

	        _.$slideTrack.append(_.$slides);

	        _.$slidesCache = _.$slides;

	        _.reinit();

	    };

	    Slick.prototype.setCSS = function(position) {

	        var _ = this,
	            positionProps = {},
	            x, y;

	        if (_.options.rtl === true) {
	            position = -position;
	        }
	        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
	        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

	        positionProps[_.positionProp] = position;

	        if (_.transformsEnabled === false) {
	            _.$slideTrack.css(positionProps);
	        } else {
	            positionProps = {};
	            if (_.cssTransitions === false) {
	                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
	                _.$slideTrack.css(positionProps);
	            } else {
	                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
	                _.$slideTrack.css(positionProps);
	            }
	        }

	    };

	    Slick.prototype.setDimensions = function() {

	        var _ = this;

	        if (_.options.vertical === false) {
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: ('0px ' + _.options.centerPadding)
	                });
	            }
	        } else {
	            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
	            if (_.options.centerMode === true) {
	                _.$list.css({
	                    padding: (_.options.centerPadding + ' 0px')
	                });
	            }
	        }

	        _.listWidth = _.$list.width();
	        _.listHeight = _.$list.height();


	        if (_.options.vertical === false && _.options.variableWidth === false) {
	            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
	            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

	        } else if (_.options.variableWidth === true) {
	            _.$slideTrack.width(5000 * _.slideCount);
	        } else {
	            _.slideWidth = Math.ceil(_.listWidth);
	            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
	        }

	        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
	        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

	    };

	    Slick.prototype.setFade = function() {

	        var _ = this,
	            targetLeft;

	        _.$slides.each(function(index, element) {
	            targetLeft = (_.slideWidth * index) * -1;
	            if (_.options.rtl === true) {
	                $(element).css({
	                    position: 'relative',
	                    right: targetLeft,
	                    top: 0,
	                    zIndex: 800,
	                    opacity: 0
	                });
	            } else {
	                $(element).css({
	                    position: 'relative',
	                    left: targetLeft,
	                    top: 0,
	                    zIndex: 800,
	                    opacity: 0
	                });
	            }
	        });

	        _.$slides.eq(_.currentSlide).css({
	            zIndex: 900,
	            opacity: 1
	        });

	    };

	    Slick.prototype.setHeight = function() {

	        var _ = this;

	        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
	            _.$list.css('height', targetHeight);
	        }

	    };

	    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

	        var _ = this;
	        _.options[option] = value;

	        if (refresh === true) {
	            _.unload();
	            _.reinit();
	        }

	    };

	    Slick.prototype.setPosition = function() {

	        var _ = this;

	        _.setDimensions();

	        _.setHeight();

	        if (_.options.fade === false) {
	            _.setCSS(_.getLeft(_.currentSlide));
	        } else {
	            _.setFade();
	        }

	        _.$slider.trigger('setPosition', [_]);

	    };

	    Slick.prototype.setProps = function() {

	        var _ = this,
	            bodyStyle = document.body.style;

	        _.positionProp = _.options.vertical === true ? 'top' : 'left';

	        if (_.positionProp === 'top') {
	            _.$slider.addClass('slick-vertical');
	        } else {
	            _.$slider.removeClass('slick-vertical');
	        }

	        if (bodyStyle.WebkitTransition !== undefined ||
	            bodyStyle.MozTransition !== undefined ||
	            bodyStyle.msTransition !== undefined) {
	            if (_.options.useCSS === true) {
	                _.cssTransitions = true;
	            }
	        }

	        if (bodyStyle.OTransform !== undefined) {
	            _.animType = 'OTransform';
	            _.transformType = '-o-transform';
	            _.transitionType = 'OTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.MozTransform !== undefined) {
	            _.animType = 'MozTransform';
	            _.transformType = '-moz-transform';
	            _.transitionType = 'MozTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.webkitTransform !== undefined) {
	            _.animType = 'webkitTransform';
	            _.transformType = '-webkit-transform';
	            _.transitionType = 'webkitTransition';
	            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	        }
	        if (bodyStyle.msTransform !== undefined) {
	            _.animType = 'msTransform';
	            _.transformType = '-ms-transform';
	            _.transitionType = 'msTransition';
	            if (bodyStyle.msTransform === undefined) _.animType = false;
	        }
	        if (bodyStyle.transform !== undefined && _.animType !== false) {
	            _.animType = 'transform';
	            _.transformType = 'transform';
	            _.transitionType = 'transition';
	        }
	        _.transformsEnabled = (_.animType !== null && _.animType !== false);

	    };


	    Slick.prototype.setSlideClasses = function(index) {

	        var _ = this,
	            centerOffset, allSlides, indexOffset, remainder;

	        _.$slider.find('.slick-slide').removeClass('slick-active').attr('aria-hidden', 'true').removeClass('slick-center');
	        allSlides = _.$slider.find('.slick-slide');

	        if (_.options.centerMode === true) {

	            centerOffset = Math.floor(_.options.slidesToShow / 2);

	            if (_.options.infinite === true) {

	                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
	                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
	                } else {
	                    indexOffset = _.options.slidesToShow + index;
	                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
	                }

	                if (index === 0) {
	                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
	                } else if (index === _.slideCount - 1) {
	                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
	                }

	            }

	            _.$slides.eq(index).addClass('slick-center');

	        } else {

	            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
	                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
	            } else if (allSlides.length <= _.options.slidesToShow) {
	                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
	            } else {
	                remainder = _.slideCount % _.options.slidesToShow;
	                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
	                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
	                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
	                } else {
	                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
	                }
	            }

	        }

	        if (_.options.lazyLoad === 'ondemand') {
	            _.lazyLoad();
	        }

	    };

	    Slick.prototype.setupInfinite = function() {

	        var _ = this,
	            i, slideIndex, infiniteCount;

	        if (_.options.fade === true) {
	            _.options.centerMode = false;
	        }

	        if (_.options.infinite === true && _.options.fade === false) {

	            slideIndex = null;

	            if (_.slideCount > _.options.slidesToShow) {

	                if (_.options.centerMode === true) {
	                    infiniteCount = _.options.slidesToShow + 1;
	                } else {
	                    infiniteCount = _.options.slidesToShow;
	                }

	                for (i = _.slideCount; i > (_.slideCount -
	                        infiniteCount); i -= 1) {
	                    slideIndex = i - 1;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
	                        .attr('data-slick-index', slideIndex - _.slideCount)
	                        .prependTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                for (i = 0; i < infiniteCount; i += 1) {
	                    slideIndex = i;
	                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
	                        .attr('data-slick-index', slideIndex + _.slideCount)
	                        .appendTo(_.$slideTrack).addClass('slick-cloned');
	                }
	                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
	                    $(this).attr('id', '');
	                });

	            }

	        }

	    };

	    Slick.prototype.setPaused = function(paused) {

	        var _ = this;

	        if (_.options.autoplay === true && _.options.pauseOnHover === true) {
	            _.paused = paused;
	            if (!paused) {
	                _.autoPlay();
	            } else {
	                _.autoPlayClear();
	            }
	        }
	    };

	    Slick.prototype.selectHandler = function(event) {

	        var _ = this;

	        var targetElement = $(event.target).is('.slick-slide') ?
	            $(event.target) :
	            $(event.target).parents('.slick-slide');

	        var index = parseInt(targetElement.attr('data-slick-index'));

	        if (!index) index = 0;

	        if (_.slideCount <= _.options.slidesToShow) {
	            _.$slider.find('.slick-slide').removeClass('slick-active').attr('aria-hidden', 'true');
	            _.$slides.eq(index).addClass('slick-active').attr("aria-hidden", "false");
	            if (_.options.centerMode === true) {
	                _.$slider.find('.slick-slide').removeClass('slick-center');
	                _.$slides.eq(index).addClass('slick-center');
	            }
	            _.asNavFor(index);
	            return;
	        }
	        _.slideHandler(index);

	    };

	    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

	        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
	            _ = this;

	        sync = sync || false;

	        if (_.animating === true && _.options.waitForAnimate === true) {
	            return;
	        }

	        if (_.options.fade === true && _.currentSlide === index) {
	            return;
	        }

	        if (_.slideCount <= _.options.slidesToShow) {
	            return;
	        }

	        if (sync === false) {
	            _.asNavFor(index);
	        }

	        targetSlide = index;
	        targetLeft = _.getLeft(targetSlide);
	        slideLeft = _.getLeft(_.currentSlide);

	        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

	        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true) {
	                    _.animateSlide(slideLeft, function() {
	                        _.postSlide(targetSlide);
	                    });
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
	            if (_.options.fade === false) {
	                targetSlide = _.currentSlide;
	                if (dontAnimate !== true) {
	                    _.animateSlide(slideLeft, function() {
	                        _.postSlide(targetSlide);
	                    });
	                } else {
	                    _.postSlide(targetSlide);
	                }
	            }
	            return;
	        }

	        if (_.options.autoplay === true) {
	            clearInterval(_.autoPlayTimer);
	        }

	        if (targetSlide < 0) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
	            } else {
	                animSlide = _.slideCount + targetSlide;
	            }
	        } else if (targetSlide >= _.slideCount) {
	            if (_.slideCount % _.options.slidesToScroll !== 0) {
	                animSlide = 0;
	            } else {
	                animSlide = targetSlide - _.slideCount;
	            }
	        } else {
	            animSlide = targetSlide;
	        }

	        _.animating = true;

	        _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);

	        oldSlide = _.currentSlide;
	        _.currentSlide = animSlide;

	        _.setSlideClasses(_.currentSlide);

	        _.updateDots();
	        _.updateArrows();

	        if (_.options.fade === true) {
	            if (dontAnimate !== true) {
	                _.fadeSlide(animSlide, function() {
	                    _.postSlide(animSlide);
	                });
	            } else {
	                _.postSlide(animSlide);
	            }
	            _.animateHeight();
	            return;
	        }

	        if (dontAnimate !== true) {
	            _.animateSlide(targetLeft, function() {
	                _.postSlide(animSlide);
	            });
	        } else {
	            _.postSlide(animSlide);
	        }

	    };

	    Slick.prototype.startLoad = function() {

	        var _ = this;

	        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

	            _.$prevArrow.hide();
	            _.$nextArrow.hide();

	        }

	        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

	            _.$dots.hide();

	        }

	        _.$slider.addClass('slick-loading');

	    };

	    Slick.prototype.swipeDirection = function() {

	        var xDist, yDist, r, swipeAngle, _ = this;

	        xDist = _.touchObject.startX - _.touchObject.curX;
	        yDist = _.touchObject.startY - _.touchObject.curY;
	        r = Math.atan2(yDist, xDist);

	        swipeAngle = Math.round(r * 180 / Math.PI);
	        if (swipeAngle < 0) {
	            swipeAngle = 360 - Math.abs(swipeAngle);
	        }

	        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
	            return (_.options.rtl === false ? 'left' : 'right');
	        }
	        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
	            return (_.options.rtl === false ? 'left' : 'right');
	        }
	        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
	            return (_.options.rtl === false ? 'right' : 'left');
	        }
	        if (_.options.verticalSwiping === true) {
	            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
	                return 'left';
	            } else {
	                return 'right';
	            }
	        }

	        return 'vertical';

	    };

	    Slick.prototype.swipeEnd = function(event) {

	        var _ = this,
	            slideCount;

	        _.dragging = false;

	        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

	        if (_.touchObject.curX === undefined) {
	            return false;
	        }

	        if (_.touchObject.edgeHit === true) {
	            _.$slider.trigger("edge", [_, _.swipeDirection()]);
	        }

	        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

	            switch (_.swipeDirection()) {
	                case 'left':
	                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
	                    _.slideHandler(slideCount);
	                    _.currentDirection = 0;
	                    _.touchObject = {};
	                    _.$slider.trigger("swipe", [_, "left"]);
	                    break;

	                case 'right':
	                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
	                    _.slideHandler(slideCount);
	                    _.currentDirection = 1;
	                    _.touchObject = {};
	                    _.$slider.trigger("swipe", [_, "right"]);
	                    break;
	            }
	        } else {
	            if (_.touchObject.startX !== _.touchObject.curX) {
	                _.slideHandler(_.currentSlide);
	                _.touchObject = {};
	            }
	        }

	    };

	    Slick.prototype.swipeHandler = function(event) {

	        var _ = this;

	        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
	            return;
	        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
	            return;
	        }

	        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
	            event.originalEvent.touches.length : 1;

	        _.touchObject.minSwipe = _.listWidth / _.options
	            .touchThreshold;

	        if (_.options.verticalSwiping === true) {
	            _.touchObject.minSwipe = _.listHeight / _.options
	                .touchThreshold;
	        }

	        switch (event.data.action) {

	            case 'start':
	                _.swipeStart(event);
	                break;

	            case 'move':
	                _.swipeMove(event);
	                break;

	            case 'end':
	                _.swipeEnd(event);
	                break;

	        }

	    };

	    Slick.prototype.swipeMove = function(event) {

	        var _ = this,
	            edgeWasHit = false,
	            curLeft, swipeDirection, swipeLength, positionOffset, touches;

	        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

	        if (!_.dragging || touches && touches.length !== 1) {
	            return false;
	        }

	        curLeft = _.getLeft(_.currentSlide);

	        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
	        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

	        _.touchObject.swipeLength = Math.round(Math.sqrt(
	            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

	        if (_.options.verticalSwiping === true) {
	            _.touchObject.swipeLength = Math.round(Math.sqrt(
	                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
	        }

	        swipeDirection = _.swipeDirection();

	        if (swipeDirection === 'vertical') {
	            return;
	        }

	        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
	            event.preventDefault();
	        }

	        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
	        if (_.options.verticalSwiping === true) {
	            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
	        }


	        swipeLength = _.touchObject.swipeLength;

	        _.touchObject.edgeHit = false;

	        if (_.options.infinite === false) {
	            if ((_.currentSlide === 0 && swipeDirection === "right") || (_.currentSlide >= _.getDotCount() && swipeDirection === "left")) {
	                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
	                _.touchObject.edgeHit = true;
	            }
	        }

	        if (_.options.vertical === false) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        } else {
	            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
	        }
	        if (_.options.verticalSwiping === true) {
	            _.swipeLeft = curLeft + swipeLength * positionOffset;
	        }

	        if (_.options.fade === true || _.options.touchMove === false) {
	            return false;
	        }

	        if (_.animating === true) {
	            _.swipeLeft = null;
	            return false;
	        }

	        _.setCSS(_.swipeLeft);

	    };

	    Slick.prototype.swipeStart = function(event) {

	        var _ = this,
	            touches;

	        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
	            _.touchObject = {};
	            return false;
	        }

	        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
	            touches = event.originalEvent.touches[0];
	        }

	        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
	        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

	        _.dragging = true;

	    };

	    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

	        var _ = this;

	        if (_.$slidesCache !== null) {

	            _.unload();

	            _.$slideTrack.children(this.options.slide).detach();

	            _.$slidesCache.appendTo(_.$slideTrack);

	            _.reinit();

	        }

	    };

	    Slick.prototype.unload = function() {

	        var _ = this;

	        $('.slick-cloned', _.$slider).remove();
	        if (_.$dots) {
	            _.$dots.remove();
	        }
	        if (_.$prevArrow && (typeof _.options.prevArrow !== 'object')) {
	            _.$prevArrow.remove();
	        }
	        if (_.$nextArrow && (typeof _.options.nextArrow !== 'object')) {
	            _.$nextArrow.remove();
	        }
	        _.$slides.removeClass('slick-slide slick-active slick-visible').attr("aria-hidden", "true").css('width', '');

	    };

	    Slick.prototype.unslick = function(fromBreakpoint) {

	        var _ = this;
	        _.$slider.trigger('unslick', [_, fromBreakpoint]);
	        _.destroy();

	    };

	    Slick.prototype.updateArrows = function() {

	        var _ = this,
	            centerOffset;

	        centerOffset = Math.floor(_.options.slidesToShow / 2);

	        if (_.options.arrows === true && _.options.infinite !==
	            true && _.slideCount > _.options.slidesToShow) {
	            _.$prevArrow.removeClass('slick-disabled');
	            _.$nextArrow.removeClass('slick-disabled');
	            if (_.currentSlide === 0) {
	                _.$prevArrow.addClass('slick-disabled');
	                _.$nextArrow.removeClass('slick-disabled');
	            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
	                _.$nextArrow.addClass('slick-disabled');
	                _.$prevArrow.removeClass('slick-disabled');
	            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
	                _.$nextArrow.addClass('slick-disabled');
	                _.$prevArrow.removeClass('slick-disabled');
	            }
	        }

	    };

	    Slick.prototype.updateDots = function() {

	        var _ = this;

	        if (_.$dots !== null) {

	            _.$dots.find('li').removeClass('slick-active').attr("aria-hidden", "true");
	            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr("aria-hidden", "false");

	        }

	    };

	    Slick.prototype.visibility = function() {

	        var _ = this;

	        if (document[_.hidden]) {
	            _.paused = true;
	            _.autoPlayClear();
	        } else {
	            if (_.options.autoplay === true) {
	                _.paused = false;
	                _.autoPlay();
	            }
	        }

	    };

	    $.fn.slick = function() {
	        var _ = this,
	            opt = arguments[0],
	            args = Array.prototype.slice.call(arguments, 1),
	            l = _.length,
	            i = 0,
	            ret;
	        for (i; i < l; i++) {
	            if (typeof opt == 'object' || typeof opt == 'undefined')
	                _[i].slick = new Slick(_[i], opt);
	            else
	                ret = _[i].slick[opt].apply(_[i].slick, args);
	            if (typeof ret != 'undefined') return ret;
	        }
	        return _;
	    };

	}));


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = angular.module('TM').directive('tmDate', tmDate);

	tmDate.$inject = ['$filter'];

	function tmDate($filter) {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    element.html($filter('date')(new Date(), 'yyyy'));
	  }
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {module.exports = angular.module('TM').directive('tmGoToTop', tmGoToTop);

	tmGoToTop.$inject = ['$window'];

	function tmGoToTop($window) {
	  var directive = {
	    link: link,
	    restrict: 'EA',
	    template: '<a href="#" class="goto-top"></a>',
	    replace: true
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var self = {
	      elems: {
	        $w: $($window),
	        $body: $('html, body')
	      },
	      config:{
	        showAt: attrs.showAt || 800
	      }
	    };

	    self.init = function(){
	      self.checkPosition();

	      self.initEvents();
	    };

	    self.initEvents = function(){
	      
	      // Check position of page on scroll.
	      self.elems.$w.on('scroll', function(e) {
	        self.checkPosition();
	      });

	      // Click on button, now go to top.
	      element.on('click', function(e){
	        e.preventDefault();

	        self.elems.$body.animate({ scrollTop: 0 }, 'slow');
	      });
	    };

	    // Check position of scrollbar.
	    self.checkPosition = function(){
	      if(self.elems.$w.scrollTop() >= self.config.showAt){
	        element.addClass('goto-top_show');
	      } else {
	        element.removeClass('goto-top_show');
	      }
	    };

	    // Init component.
	    self.init();
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Blazy = __webpack_require__(11);

	module.exports = angular.module('TM').directive('tmLazyLoad', tmLazyLoad);

	function tmLazyLoad() {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var bLazy = new Blazy({
	        offset: 600
	    });  

	    // blazy doesn't like {{}} in data-src so we need to add it after.
	    element.attr('data-src', attrs.img);
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  hey, [be]Lazy.js - v1.3.1 - 2015.02.01 
	  A lazy loading and multi-serving image script
	  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
	*/
	;(function(root, blazy) {
		if (true) {
	        // AMD. Register bLazy as an anonymous module
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (blazy), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			// Node. Does not work with strict CommonJS, but
	        // only CommonJS-like environments that support module.exports,
	        // like Node. 
			module.exports = blazy();
		} else {
	        // Browser globals. Register bLazy on window
	        root.Blazy = blazy();
		}
	})(this, function () {
		'use strict';
		
		//vars
		var source, options, viewport, images, count, isRetina, destroyed;
		//throttle vars
		var validateT, saveViewportOffsetT;
		
		// constructor
		function Blazy(settings) {
			//IE7- fallback for missing querySelectorAll support
			if (!document.querySelectorAll) {
				var s=document.createStyleSheet();
				document.querySelectorAll = function(r, c, i, j, a) {
					a=document.all, c=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
					for (i=r.length; i--;) {
						s.addRule(r[i], 'k:v');
						for (j=a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
							s.removeRule(0);
					}
					return c;
				};
			}
			//init vars
			destroyed 				= true;
			images 					= [];
			viewport				= {};
			//options
			options 				= settings 				|| {};
			options.error	 		= options.error 		|| false;
			options.offset			= options.offset 		|| 100;
			options.success			= options.success 		|| false;
		  	options.selector 		= options.selector 		|| '.b-lazy';
			options.separator 		= options.separator 	|| '|';
			options.container		= options.container 	?  document.querySelectorAll(options.container) : false;
			options.errorClass 		= options.errorClass 	|| 'b-error';
			options.breakpoints		= options.breakpoints	|| false;
			options.successClass 	= options.successClass 	|| 'b-loaded';
			options.src = source 	= options.src			|| 'data-src';
			isRetina				= window.devicePixelRatio > 1;
			viewport.top 			= 0 - options.offset;
			viewport.left 			= 0 - options.offset;
			//throttle, ensures that we don't call the functions too often
			validateT				= throttle(validate, 25); 
			saveViewportOffsetT			= throttle(saveViewportOffset, 50);

			saveViewportOffset();	
					
			//handle multi-served image src
			each(options.breakpoints, function(object){
				if(object.width >= window.screen.width) {
					source = object.src;
					return false;
				}
			});
			
			// start lazy load
			initialize();	
	  	}
		
		/* public functions
		************************************/
		Blazy.prototype.revalidate = function() {
	 		initialize();
	   	};
		Blazy.prototype.load = function(element, force){
			if(!isElementLoaded(element)) loadImage(element, force);
		};
		Blazy.prototype.destroy = function(){
			if(options.container){
				each(options.container, function(object){
					unbindEvent(object, 'scroll', validateT);
				});
			}
			unbindEvent(window, 'scroll', validateT);
			unbindEvent(window, 'resize', validateT);
			unbindEvent(window, 'resize', saveViewportOffsetT);
			count = 0;
			images.length = 0;
			destroyed = true;
		};
		
		/* private helper functions
		************************************/
		function initialize(){
			// First we create an array of images to lazy load
			createImageArray(options.selector);
			// Then we bind resize and scroll events if not already binded
			if(destroyed) {
				destroyed = false;
				if(options.container) {
		 			each(options.container, function(object){
		 				bindEvent(object, 'scroll', validateT);
		 			});
		 		}
				bindEvent(window, 'resize', saveViewportOffsetT);
				bindEvent(window, 'resize', validateT);
		 		bindEvent(window, 'scroll', validateT);
			}
			// And finally, we start to lazy load. Should bLazy ensure domready?
			validate();	
		}
		
		function validate() {
			for(var i = 0; i<count; i++){
				var image = images[i];
	 			if(elementInView(image) || isElementLoaded(image)) {
					Blazy.prototype.load(image);
	 				images.splice(i, 1);
	 				count--;
	 				i--;
	 			} 
	 		}
			if(count === 0) {
				Blazy.prototype.destroy();
			}
		}
		
		function loadImage(ele, force){
			// if element is visible
			if(force || (ele.offsetWidth > 0 && ele.offsetHeight > 0)) {
				var dataSrc = ele.getAttribute(source) || ele.getAttribute(options.src); // fallback to default data-src
				if(dataSrc) {
					var dataSrcSplitted = dataSrc.split(options.separator);
					var src = dataSrcSplitted[isRetina && dataSrcSplitted.length > 1 ? 1 : 0];
					var img = new Image();
					// cleanup markup, remove data source attributes
					each(options.breakpoints, function(object){
						ele.removeAttribute(object.src);
					});
					ele.removeAttribute(options.src);
					img.onerror = function() {
						if(options.error) options.error(ele, "invalid");
						ele.className = ele.className + ' ' + options.errorClass;
					}; 
					img.onload = function() {
						// Is element an image or should we add the src as a background image?
				      		ele.nodeName.toLowerCase() === 'img' ? ele.src = src : ele.style.backgroundImage = 'url("' + src + '")';	
						ele.className = ele.className + ' ' + options.successClass;	
						if(options.success) options.success(ele);
					};
					img.src = src; //preload image
				} else {
					if(options.error) options.error(ele, "missing");
					ele.className = ele.className + ' ' + options.errorClass;
				}
			}
		 }
				
		function elementInView(ele) {
			var rect = ele.getBoundingClientRect();
			
			return (
				// Intersection
				rect.right >= viewport.left
				&& rect.bottom >= viewport.top
				&& rect.left <= viewport.right
				&& rect.top <= viewport.bottom
			 );
		 }
		 
		 function isElementLoaded(ele) {
			 return (' ' + ele.className + ' ').indexOf(' ' + options.successClass + ' ') !== -1;
		 }
		 
		 function createImageArray(selector) {
	 		var nodelist 	= document.querySelectorAll(selector);
	 		count 			= nodelist.length;
	 		//converting nodelist to array
	 		for(var i = count; i--; images.unshift(nodelist[i])){}
		 }
		 
		 function saveViewportOffset(){
			 viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + options.offset;
			 viewport.right = (window.innerWidth || document.documentElement.clientWidth) + options.offset;
		 }
		 
		 function bindEvent(ele, type, fn) {
			 if (ele.attachEvent) {
	         		ele.attachEvent && ele.attachEvent('on' + type, fn);
	       	 	} else {
	         	       ele.addEventListener(type, fn, false);
	       		}
		 }
		 
		 function unbindEvent(ele, type, fn) {
			 if (ele.detachEvent) {
	         		ele.detachEvent && ele.detachEvent('on' + type, fn);
	       	 	} else {
	         	       ele.removeEventListener(type, fn, false);
	       		}
		 }
		 
		 function each(object, fn){
	 		if(object && fn) {
	 			var l = object.length;
	 			for(var i = 0; i<l && fn(object[i], i) !== false; i++){}
	 		}
		 }
		 
		 function throttle(fn, minDelay) {
	     		 var lastCall = 0;
			 return function() {
				 var now = +new Date();
	         		 if (now - lastCall < minDelay) {
	           			 return;
				 }
	         		 lastCall = now;
	         		 fn.apply(images, arguments);
	       		 };
		 }
	  	
		 return Blazy;
	});


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = angular.module('TM').directive('tmNavigation', tmNavigation);

	function tmNavigation() {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var $window = angular.element(window),
	        elementFromTop = element.offset().top,
	        showFromBottom = (attrs.showFromBottom) ? attrs.showFromBottom : 50;

	    // Calculate on scroll
	    $window.on('scroll', function(){

	      // We have scrolled to the element, now do your stuff!
	      if($window.scrollTop() >= elementFromTop){
	        element.addClass('navigation-menu-is-sticky');
	      } else {
	        element.removeClass('navigation-menu-is-sticky');
	      }
	    });
	  }
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = angular.module('TM').directive('tmPortfolio', tmPortfolio);

	function tmPortfolio() {
	  var directive = {
	    link: link,
	    templateUrl: 'assets/templates/portfolio.html',
	    restrict: 'EA',
	    controller: portfolioController,
	    controllerAs: 'pf',
	    bindToController: true
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    
	  }
	}

	portfolioController.$inject = ['$scope', 'portfolioService'];

	function portfolioController($scope, portfolioService) {
	  var pf = this;
	      
	  pf.items = [];
	   
	  init();

	  function init() {
	      return portfolioService.get().then(function(data) {
	          pf.items = data;

	          return pf.items;
	      });
	  }
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = angular.module('TM').directive('tmRandomNumbersOnScreen', tmRandomNumbersOnScreen);

	tmRandomNumbersOnScreen.$inject = ['$timeout', '$filter'];

	function tmRandomNumbersOnScreen($timeout, $filter) {
	  var directive = {
	    scope: {},
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var $window = angular.element(window),
	        windowHasScrolled = 0,
	        elementFromScreen = 0,
	        elementHasCounted = false,
	        showFromBottom = (attrs.showFromBottom) ? attrs.showFromBottom : 150;

	    // Set height so element keeps it's height when text dissapears.
	    element.css('height', element.height());

	    // Calculate on scroll
	    $window.on('scroll', function(){
	      windowHasScrolled = $window.scrollTop() + $window.height();
	      elementFromScreen = element.offset().top;

	      // We have scrolled to the element, now do your stuff!
	      if(windowHasScrolled >= (elementFromScreen + showFromBottom) && elementHasCounted === false){
	        countTo();  

	        // We've shuffled once so turn off.
	        elementHasCounted = !elementHasCounted;
	      }
	    });

	    function countTo(){
	      var num = 0,
	          refreshInterval = 30,
	          step = 0,
	          maxCount = (attrs.maxCount) ? attrs.maxCount : 5000,
	          minCount = (attrs.minCount) ? attrs.minCount : 850,
	          appendChar = (attrs.appendCharacter) ? attrs.appendCharacter: '',
	          countTo = Math.floor(Math.random()*(maxCount-minCount+1)+minCount),
	          duration = 5000,
	          startValue = 0,
	          steps,
	          value,
	          increment;

	      var calculate = function () {
	          steps = Math.ceil(duration / refreshInterval);
	          increment = ((countTo - startValue) / steps);
	          num = startValue;
	      };

	      var tick = function () {
	          $timeout(function () {
	            num += increment;
	            step++;

	            if (step >= steps) {
	                num = countTo;

	                element.html($filter('number')(countTo, 0) + appendChar);
	            } else {

	                element.html($filter('number')(num, 0) + appendChar);
	                tick();
	            }
	          }, refreshInterval);
	      };

	      calculate();
	      tick();
	    }
	  }
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = angular.module('TM').directive('tmScrollBlur', tmScrollBlur);

	function tmScrollBlur() {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var $window = angular.element(window),
	        blurFrom = (attrs.blurFrom) ? parseInt(attrs.blurFrom) : 0,
	        blurTo = (attrs.blurTo) ? parseInt(attrs.blurTo) : 10;

	    
	    // Blur on scroll
	    $window.on('scroll', function(e){
	      blur = blurFrom + ( (blurTo - blurFrom) * ($window.scrollTop() / $window.height()));

	      if(blur <= blurTo){
	        element.css({
	          '-webkit-filter': 'blur('+blur+'px)',
	          'filter': 'blur('+blur+'px)'
	        });
	      }
	    });    
	  }
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = angular.module('TM').directive('tmScrollFade', tmScrollFade);

	function tmScrollFade() {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var $window = angular.element(window),
	        opacity;

	    $window.on('scroll', function(e){
	      opacity = 1 - ($window.scrollTop() / $window.height()) * 1.15;

	      if (opacity >= 0){
	        element.css('opacity', opacity);
	      }
	    });    
	  }
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(18);

	module.exports = angular.module('TM').directive('tmShuffleContent', tmShuffleContent);

	tmShuffleContent.$inject = ['$interval'];

	function tmShuffleContent($interval) {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var $elements = element.children(),
	        elementsArray = $elements.toArray(),
	        containerHeight = element.height();

	    // Set height of container.
	    element.height(containerHeight);

	    $interval(function(){
	      $elements.hide();            
	      shuffle();
	    }, 4000);

	    // Shuffle text.
	    function shuffle(){
	      $(elementsArray[0]).show().shuffleLetters();

	      elementsArray.push(elementsArray.shift());
	    }

	    // Init.
	    shuffle(); 
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * @name		Shuffle Letters
	 * @author		Martin Angelov
	 * @version 	1.0
	 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
	 * @license		MIT License
	 */

	(function($){
		
		$.fn.shuffleLetters = function(prop){
			
			var options = $.extend({
				"step"		: 8,			// How many times should the letters be changed
				"fps"		: 25,			// Frames Per Second
				"text"		: "", 			// Use this text instead of the contents
				"callback"	: function(){}	// Run once the animation is complete
			},prop)
			
			return this.each(function(){
				
				var el = $(this),
					str = "";


				// Preventing parallel animations using a flag;

				if(el.data('animated')){
					return true;
				}
				
				el.data('animated',true);
				
				
				if(options.text) {
					str = options.text.split('');
				}
				else {
					str = el.text().split('');
				}
				
				// The types array holds the type for each character;
				// Letters holds the positions of non-space characters;
				
				var types = [],
					letters = [];

				// Looping through all the chars of the string
				
				for(var i=0;i<str.length;i++){
					
					var ch = str[i];
					
					if(ch == " "){
						types[i] = "space";
						continue;
					}
					else if(/[a-z]/.test(ch)){
						types[i] = "lowerLetter";
					}
					else if(/[A-Z]/.test(ch)){
						types[i] = "upperLetter";
					}
					else {
						types[i] = "symbol";
					}
					
					letters.push(i);
				}
				
				el.html("");			

				// Self executing named function expression:
				
				(function shuffle(start){
				
					// This code is run options.fps times per second
					// and updates the contents of the page element
						
					var i,
						len = letters.length, 
						strCopy = str.slice(0);	// Fresh copy of the string
						
					if(start>len){
						
						// The animation is complete. Updating the
						// flag and triggering the callback;
						
						el.data('animated',false);
						options.callback(el);
						return;
					}
					
					// All the work gets done here
					for(i=Math.max(start,0); i < len; i++){

						// The start argument and options.step limit
						// the characters we will be working on at once
						
						if( i < start+options.step){
							// Generate a random character at thsi position
							strCopy[letters[i]] = randomChar(types[letters[i]]);
						}
						else {
							strCopy[letters[i]] = "";
						}
					}
					
					el.text(strCopy.join(""));
					
					setTimeout(function(){
						
						shuffle(start+1);
						
					},1000/options.fps);
					
				})(-options.step);
				

			});
		};
		
		function randomChar(type){
			var pool = "";
			
			if (type == "lowerLetter"){
				pool = "abcdefghijklmnopqrstuvwxyz0123456789";
			}
			else if (type == "upperLetter"){
				pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			}
			else if (type == "symbol"){
				pool = ",.?/\\(^)![]{}*&^%$#'\"";
			}
			
			var arr = pool.split('');
			return arr[Math.floor(Math.random()*arr.length)];
		}
		
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);

	module.exports = angular.module('TM').directive('tmShuffleOnScreen', tmShuffleOnScreen);

	function tmShuffleOnScreen() {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    var $window = angular.element(window),
	        windowHasScrolled = 0,
	        elementFromScreen = 0,
	        elementHasShuffled = false,
	        showFromBottom = (attrs.showFromBottom) ? attrs.showFromBottom : 50;

	    // Set height so element keeps it's height when text dissapears.
	    element.css('height', element.height());

	    // Calculate on scroll
	    $window.on('scroll', function(){
	      windowHasScrolled = $window.scrollTop() + $window.height();
	      elementFromScreen = element.offset().top;

	      // We have scrolled to the element, now do your stuff!
	      if(windowHasScrolled >= (elementFromScreen + showFromBottom) && elementHasShuffled === false){
	        element.shuffleLetters();    

	        // We've shuffled once so turn off.
	        elementHasShuffled = !elementHasShuffled;
	      }
	    });
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = angular.module('TM').directive('tmSocialIcons', tmSocialIcons);

	function tmSocialIcons() {
	  var directive = {
	    link: link,
	    templateUrl: 'assets/templates/social-icons.html',
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);

	module.exports = angular.module('TM').directive('tmWebFonts', tmWebFonts);

	function tmWebFonts() {
	  var directive = {
	    link: link,
	    restrict: 'EA'
	  };
	  return directive;

	  function link(scope, element, attrs) {
	    WebFont.load({
	      google: {
	        families: ['Raleway:700,400']
	      }
	    });     
	  }
	}


/***/ },
/* 22 */
/***/ function(module, exports) {

	/* Web Font Loader v1.5.18 - (c) Adobe Systems, Google. License: Apache 2.0 */
	;(function(window,document,undefined){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function k(a,b,c){k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return k.apply(null,arguments)}var n=Date.now||function(){return+new Date};function q(a,b){this.K=a;this.w=b||a;this.G=this.w.document}q.prototype.createElement=function(a,b,c){a=this.G.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.G.createTextNode(c));return a};function r(a,b,c){a=a.G.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function ca(a,b){function c(){a.G.body?b():setTimeout(c,0)}c()}
	function s(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function t(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
	function u(a){if("string"===typeof a.na)return a.na;var b=a.w.location.protocol;"about:"==b&&(b=a.K.location.protocol);return"https:"==b?"https:":"http:"}function v(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b,media:"all"}),d=!1;c.onload=function(){d||(d=!0)};c.onerror=function(){d||(d=!0)};r(a,"head",c)}
	function w(a,b,c,d){var e=a.G.getElementsByTagName("head")[0];if(e){var f=a.createElement("script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);window.setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function x(a,b){this.Y=a;this.ga=b};function y(a,b,c,d){this.c=null!=a?a:null;this.g=null!=b?b:null;this.D=null!=c?c:null;this.e=null!=d?d:null}var da=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;y.prototype.compare=function(a){return this.c>a.c||this.c===a.c&&this.g>a.g||this.c===a.c&&this.g===a.g&&this.D>a.D?1:this.c<a.c||this.c===a.c&&this.g<a.g||this.c===a.c&&this.g===a.g&&this.D<a.D?-1:0};y.prototype.toString=function(){return[this.c,this.g||"",this.D||"",this.e||""].join("")};
	function z(a){a=da.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new y(b,c,d,e)};function A(a,b,c,d,e,f,g,h){this.N=a;this.m=h}A.prototype.getName=function(){return this.N};function B(a){this.a=a}var ea=new A("Unknown",0,0,0,0,0,0,new x(!1,!1));
	B.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){a=C(this);var b=z(D(this)),c=null,d=E(this.a,/Trident\/([\d\w\.]+)/,1),c=-1!=this.a.indexOf("MSIE")?z(E(this.a,/MSIE ([\d\w\.]+)/,1)):z(E(this.a,/rv:([\d\w\.]+)/,1));""!=d&&z(d);a=new A("MSIE",0,0,0,0,0,0,new x("Windows"==a&&6<=c.c||"Windows Phone"==a&&8<=b.c,!1))}else if(-1!=this.a.indexOf("Opera"))a:if(a=z(E(this.a,/Presto\/([\d\w\.]+)/,1)),z(D(this)),null!==a.c||z(E(this.a,/rv:([^\)]+)/,1)),-1!=this.a.indexOf("Opera Mini/"))a=
	z(E(this.a,/Opera Mini\/([\d\.]+)/,1)),a=new A("OperaMini",0,0,0,C(this),0,0,new x(!1,!1));else{if(-1!=this.a.indexOf("Version/")&&(a=z(E(this.a,/Version\/([\d\.]+)/,1)),null!==a.c)){a=new A("Opera",0,0,0,C(this),0,0,new x(10<=a.c,!1));break a}a=z(E(this.a,/Opera[\/ ]([\d\.]+)/,1));a=null!==a.c?new A("Opera",0,0,0,C(this),0,0,new x(10<=a.c,!1)):new A("Opera",0,0,0,C(this),0,0,new x(!1,!1))}else/OPR\/[\d.]+/.test(this.a)?a=F(this):/AppleWeb(K|k)it/.test(this.a)?a=F(this):-1!=this.a.indexOf("Gecko")?
	(a="Unknown",b=new y,z(D(this)),b=!1,-1!=this.a.indexOf("Firefox")?(a="Firefox",b=z(E(this.a,/Firefox\/([\d\w\.]+)/,1)),b=3<=b.c&&5<=b.g):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),c=z(E(this.a,/rv:([^\)]+)/,1)),b||(b=1<c.c||1==c.c&&9<c.g||1==c.c&&9==c.g&&2<=c.D),a=new A(a,0,0,0,C(this),0,0,new x(b,!1))):a=ea;return a};
	function C(a){var b=E(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=E(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
	function D(a){var b=E(a.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=E(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=E(a.a,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=E(a.a,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=E(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
	function F(a){var b=C(a),c=z(D(a)),d=z(E(a.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new y,f="Unknown",g=!1;/OPR\/[\d.]+/.test(a.a)?e="Opera":-1!=a.a.indexOf("Chrome")||-1!=a.a.indexOf("CrMo")||-1!=a.a.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.a)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.a.indexOf("PhantomJS")?e="PhantomJS":-1!=a.a.indexOf("Safari")?e="Safari":-1!=a.a.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.a.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
	e?f="Unknown":"Silk"==e?f=E(a.a,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=E(a.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.a.indexOf("Version/")?f=E(a.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=E(a.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=E(a.a,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=E(a.a,/PhantomJS\/([\d.]+)/,1));f=z(f);g="AdobeAIR"==e?2<f.c||2==f.c&&5<=f.g:"BlackBerry"==b?10<=c.c:"Android"==b?2<c.c||2==c.c&&1<c.g:526<=d.c||525<=d.c&&13<=d.g;return new A(e,0,0,0,0,0,0,new x(g,536>d.c||536==d.c&&11>d.g))}
	function E(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""};function G(a){this.ma=a||"-"}G.prototype.e=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ma)};function H(a,b){this.N=a;this.Z=4;this.O="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.O=c[1],this.Z=parseInt(c[2],10))}H.prototype.getName=function(){return this.N};function I(a){return a.O+a.Z}function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.d=a;this.q=a.w.document.documentElement;this.Q=b;this.j="wf";this.h=new G("-");this.ha=!1!==b.events;this.F=!1!==b.classes}function J(a){if(a.F){var b=t(a.q,a.h.e(a.j,"active")),c=[],d=[a.h.e(a.j,"loading")];b||c.push(a.h.e(a.j,"inactive"));s(a.q,c,d)}K(a,"inactive")}function K(a,b,c){if(a.ha&&a.Q[b])if(c)a.Q[b](c.getName(),I(c));else a.Q[b]()};function ia(){this.C={}};function L(a,b){this.d=a;this.I=b;this.k=this.d.createElement("span",{"aria-hidden":"true"},this.I)}function M(a){r(a.d,"body",a.k)}
	function N(a){var b;b=[];for(var c=a.N.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.O?c="oblique":"i"===a.O&&(c="italic");return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.Z+"00")+";")}
	L.prototype.remove=function(){var a=this.k;a.parentNode&&a.parentNode.removeChild(a)};function O(a,b,c,d,e,f,g,h){this.$=a;this.ka=b;this.d=c;this.o=d;this.m=e;this.I=h||"BESbswy";this.v={};this.X=f||3E3;this.ca=g||null;this.H=this.u=this.t=null;this.t=new L(this.d,this.I);this.u=new L(this.d,this.I);this.H=new L(this.d,this.I);a=new H("serif",I(this.o));a=N(a);this.t.k.style.cssText=a;a=new H("sans-serif",I(this.o));a=N(a);this.u.k.style.cssText=a;a=new H("monospace",I(this.o));a=N(a);this.H.k.style.cssText=a;M(this.t);M(this.u);M(this.H);this.v.serif=this.t.k.offsetWidth;this.v["sans-serif"]=
	this.u.k.offsetWidth;this.v.monospace=this.H.k.offsetWidth}var P={sa:"serif",ra:"sans-serif",qa:"monospace"};O.prototype.start=function(){this.oa=n();var a=new H(this.o.getName()+",serif",I(this.o)),a=N(a);this.t.k.style.cssText=a;a=new H(this.o.getName()+",sans-serif",I(this.o));a=N(a);this.u.k.style.cssText=a;Q(this)};function R(a,b,c){for(var d in P)if(P.hasOwnProperty(d)&&b===a.v[P[d]]&&c===a.v[P[d]])return!0;return!1}
	function Q(a){var b=a.t.k.offsetWidth,c=a.u.k.offsetWidth;b===a.v.serif&&c===a.v["sans-serif"]||a.m.ga&&R(a,b,c)?n()-a.oa>=a.X?a.m.ga&&R(a,b,c)&&(null===a.ca||a.ca.hasOwnProperty(a.o.getName()))?S(a,a.$):S(a,a.ka):ja(a):S(a,a.$)}function ja(a){setTimeout(k(function(){Q(this)},a),50)}function S(a,b){a.t.remove();a.u.remove();a.H.remove();b(a.o)};function T(a,b,c,d){this.d=b;this.A=c;this.S=0;this.ea=this.ba=!1;this.X=d;this.m=a.m}function ka(a,b,c,d,e){c=c||{};if(0===b.length&&e)J(a.A);else for(a.S+=b.length,e&&(a.ba=e),e=0;e<b.length;e++){var f=b[e],g=c[f.getName()],h=a.A,m=f;h.F&&s(h.q,[h.h.e(h.j,m.getName(),I(m).toString(),"loading")]);K(h,"fontloading",m);h=null;h=new O(k(a.ia,a),k(a.ja,a),a.d,f,a.m,a.X,d,g);h.start()}}
	T.prototype.ia=function(a){var b=this.A;b.F&&s(b.q,[b.h.e(b.j,a.getName(),I(a).toString(),"active")],[b.h.e(b.j,a.getName(),I(a).toString(),"loading"),b.h.e(b.j,a.getName(),I(a).toString(),"inactive")]);K(b,"fontactive",a);this.ea=!0;la(this)};
	T.prototype.ja=function(a){var b=this.A;if(b.F){var c=t(b.q,b.h.e(b.j,a.getName(),I(a).toString(),"active")),d=[],e=[b.h.e(b.j,a.getName(),I(a).toString(),"loading")];c||d.push(b.h.e(b.j,a.getName(),I(a).toString(),"inactive"));s(b.q,d,e)}K(b,"fontinactive",a);la(this)};function la(a){0==--a.S&&a.ba&&(a.ea?(a=a.A,a.F&&s(a.q,[a.h.e(a.j,"active")],[a.h.e(a.j,"loading"),a.h.e(a.j,"inactive")]),K(a,"active")):J(a.A))};function U(a){this.K=a;this.B=new ia;this.pa=new B(a.navigator.userAgent);this.a=this.pa.parse();this.U=this.V=0;this.R=this.T=!0}
	U.prototype.load=function(a){this.d=new q(this.K,a.context||this.K);this.T=!1!==a.events;this.R=!1!==a.classes;var b=new ha(this.d,a),c=[],d=a.timeout;b.F&&s(b.q,[b.h.e(b.j,"loading")]);K(b,"loading");var c=this.B,e=this.d,f=[],g;for(g in a)if(a.hasOwnProperty(g)){var h=c.C[g];h&&f.push(h(a[g],e))}c=f;this.U=this.V=c.length;a=new T(this.a,this.d,b,d);d=0;for(g=c.length;d<g;d++)e=c[d],e.L(this.a,k(this.la,this,e,b,a))};
	U.prototype.la=function(a,b,c,d){var e=this;d?a.load(function(a,b,d){ma(e,c,a,b,d)}):(a=0==--this.V,this.U--,a&&0==this.U?J(b):(this.R||this.T)&&ka(c,[],{},null,a))};function ma(a,b,c,d,e){var f=0==--a.V;(a.R||a.T)&&setTimeout(function(){ka(b,c,d||null,e||null,f)},0)};function na(a,b,c){this.P=a?a:b+oa;this.s=[];this.W=[];this.fa=c||""}var oa="//fonts.googleapis.com/css";na.prototype.e=function(){if(0==this.s.length)throw Error("No fonts to load!");if(-1!=this.P.indexOf("kit="))return this.P;for(var a=this.s.length,b=[],c=0;c<a;c++)b.push(this.s[c].replace(/ /g,"+"));a=this.P+"?family="+b.join("%7C");0<this.W.length&&(a+="&subset="+this.W.join(","));0<this.fa.length&&(a+="&text="+encodeURIComponent(this.fa));return a};function pa(a){this.s=a;this.da=[];this.M={}}
	var qa={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},ra={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},sa={i:"i",italic:"i",n:"n",normal:"n"},ta=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
	pa.prototype.parse=function(){for(var a=this.s.length,b=0;b<a;b++){var c=this.s[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var f;var g=c[1];f=[];if(g)for(var g=g.split(","),h=g.length,m=0;m<h;m++){var l;l=g[m];if(l.match(/^[\w-]+$/)){l=ta.exec(l.toLowerCase());var p=void 0;if(null==l)p="";else{p=void 0;p=l[1];if(null==p||""==p)p="4";else var fa=ra[p],p=fa?fa:isNaN(p)?"4":p.substr(0,1);l=l[2];p=[null==l||""==l?"n":sa[l],p].join("")}l=p}else l="";l&&f.push(l)}0<f.length&&(e=f);
	3==c.length&&(c=c[2],f=[],c=c?c.split(","):f,0<c.length&&(c=qa[c[0]])&&(this.M[d]=c))}this.M[d]||(c=qa[d])&&(this.M[d]=c);for(c=0;c<e.length;c+=1)this.da.push(new H(d,e[c]))}};function V(a,b){this.a=(new B(navigator.userAgent)).parse();this.d=a;this.f=b}var ua={Arimo:!0,Cousine:!0,Tinos:!0};V.prototype.L=function(a,b){b(a.m.Y)};V.prototype.load=function(a){var b=this.d;"MSIE"==this.a.getName()&&1!=this.f.blocking?ca(b,k(this.aa,this,a)):this.aa(a)};
	V.prototype.aa=function(a){for(var b=this.d,c=new na(this.f.api,u(b),this.f.text),d=this.f.families,e=d.length,f=0;f<e;f++){var g=d[f].split(":");3==g.length&&c.W.push(g.pop());var h="";2==g.length&&""!=g[1]&&(h=":");c.s.push(g.join(h))}d=new pa(d);d.parse();v(b,c.e());a(d.da,d.M,ua)};function W(a,b){this.d=a;this.f=b;this.p=[]}W.prototype.J=function(a){var b=this.d;return u(this.d)+(this.f.api||"//f.fontdeck.com/s/css/js/")+(b.w.location.hostname||b.K.location.hostname)+"/"+a+".js"};
	W.prototype.L=function(a,b){var c=this.f.id,d=this.d.w,e=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,m=c.fonts.length;d<m;++d){var l=c.fonts[d];e.p.push(new H(l.name,ga("font-weight:"+l.weight+";font-style:"+l.style)))}b(a)},w(this.d,this.J(c),function(a){a&&b(!1)})):b(!1)};W.prototype.load=function(a){a(this.p)};function X(a,b){this.d=a;this.f=b;this.p=[]}X.prototype.J=function(a){var b=u(this.d);return(this.f.api||b+"//use.typekit.net")+"/"+a+".js"};X.prototype.L=function(a,b){var c=this.f.id,d=this.d.w,e=this;c?w(this.d,this.J(c),function(a){if(a)b(!1);else{if(d.Typekit&&d.Typekit.config&&d.Typekit.config.fn){a=d.Typekit.config.fn;for(var c=0;c<a.length;c+=2)for(var h=a[c],m=a[c+1],l=0;l<m.length;l++)e.p.push(new H(h,m[l]));try{d.Typekit.load({events:!1,classes:!1})}catch(p){}}b(!0)}},2E3):b(!1)};
	X.prototype.load=function(a){a(this.p)};function Y(a,b){this.d=a;this.f=b;this.p=[]}Y.prototype.L=function(a,b){var c=this,d=c.f.projectId,e=c.f.version;if(d){var f=c.d.w;w(this.d,c.J(d,e),function(e){if(e)b(!1);else{if(f["__mti_fntLst"+d]&&(e=f["__mti_fntLst"+d]()))for(var h=0;h<e.length;h++)c.p.push(new H(e[h].fontfamily));b(a.m.Y)}}).id="__MonotypeAPIScript__"+d}else b(!1)};Y.prototype.J=function(a,b){var c=u(this.d),d=(this.f.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};
	Y.prototype.load=function(a){a(this.p)};function Z(a,b){this.d=a;this.f=b}Z.prototype.load=function(a){var b,c,d=this.f.urls||[],e=this.f.families||[],f=this.f.testStrings||{};b=0;for(c=d.length;b<c;b++)v(this.d,d[b]);d=[];b=0;for(c=e.length;b<c;b++){var g=e[b].split(":");if(g[1])for(var h=g[1].split(","),m=0;m<h.length;m+=1)d.push(new H(g[0],h[m]));else d.push(new H(g[0]))}a(d,f)};Z.prototype.L=function(a,b){return b(a.m.Y)};var $=new U(this);$.B.C.custom=function(a,b){return new Z(b,a)};$.B.C.fontdeck=function(a,b){return new W(b,a)};$.B.C.monotype=function(a,b){return new Y(b,a)};$.B.C.typekit=function(a,b){return new X(b,a)};$.B.C.google=function(a,b){return new V(b,a)};this.WebFont||(this.WebFont={},this.WebFont.load=k($.load,$),this.WebFontConfig&&$.load(this.WebFontConfig));})(this,document);



/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = angular.module('TM').factory('portfolioService', portfolioService);

	portfolioService.$inject = ['$http'];

	function portfolioService($http) {
	    var service = {
	        get: get
	    };

	    return service;

	    function get(){
	    	return $http.get('assets/json/portfolio.json')
	            .then(success)
	            .catch(failed);

	        function success(response) {
	            return response.data;
	        }

	        function failed(error) {
	            //logger.error('XHR Failed for getAvengers.' + error.data);
	        }
	    }
	}


/***/ }
]);