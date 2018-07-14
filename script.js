$(document).ready(function(){
  /*
  console.log('Our JavaScript is working!');
  console.warn('A dire warning!');
  console.error('ERMAGERD AN ERROR!');

  var modalContainer = $("#modal-container");
  var hideModal = function(){
    modalContainer.hide();
  };

  var showModal = function() {
    modalContainer.show();
  };

  var modalShowButton = $("#modal-show");
  modalShowButton.on("click", showModal);
  var modalCloseButton = $('#modal-hide');
  modalCloseButton.on("click", hideModal);

  $(document).on("keyup", function(evt) {
    evt = evt || window.event;
    if (evt.keycode === 27) {
      hideModal();
    }
  });

  var handleNewsletterSignup = function(evt) {
    evt.preventDefault();
    var newsletterHeader = $("#newsletter-header");
    var newsletterForm = $("#newsletter-signup");
    newsletterForm.hide();
    newsletterHeader.text("Thank you for signing up!");
    setTimeout(hideModal, 2000);
  };

  var newsletterForm = $("#newsletter-signup");
  newsletterForm.on("submit", handleNewsletterSignup);
  
  /* Begin the clock code */
  var clockTime = function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (hours <= 11) {
      var period = "AM";
    } else {
      var period = "PM";
    }

    if (hours > 12) {
       hours = hours - 12;
     } else if (hours === 0) {
       hours = 12;
     }

     if (minutes < 10) {
       minutes = "0" + String(minutes);
     }

     if (seconds < 10) {
       seconds = "0" + String(seconds);
     }

     var time = hours + ':' + minutes + ':' + seconds + ' ' + period;
     return time;
   }

   var clock = $("#clock");

   setInterval(function() {
     clock.text(clockTime());
   }, 1000);

   /*jQuery plugin code */
   $('#slider').anythingSlider({
     //Appearance
     //Theme name; choose from: minimalist-round, minimalist-square, metallic, construction, cs-portfolio
     theme: 'default',
     //(only first letter needed);
     replaces vertical option
     mode: 'horizontal',
     expand: false,
     resizeContents: true,
     showMultiple: false,
     easing: "swing",
     buildArrows: true,
     buildNavigation: true,
     buildStartStop: true,
     //(jQuery Object, selector or HTMLNode), if not null
     appendForwardTo: null,
     //(jQuery Object, selector or HTMLNode), if not null
     appendBackTo: null,
     //(jQuery Object, a selector or HTMLNode), if not null
     appendControlsTo: null,
     //(jQuery Object, selector or HTMLNode), if not null
     appendNavigationTo: null,
     //(jQuery Object, selector or HTMLNode), if not null
     appendStartStopTo: null,
     toggleArrows: false,
     //on hover and slide change, hide @ other times
     toggleControls: false,
     startText: "Start",
     stopText: "Stop",
     forwardText: "&raquo;",
     //Link text used to move the slider back (hidden by CSS, replace with arrow image)
     backText = "&laquo;",
     tooltipClass: 'tooltip',
     enableArrows: true,
     enableNavigation: true,
     enableStartStop: true,
     enableKeyboard: true,
     startPanel: 1,
     changeBy: 1,
     hashTags: true,
     infiniteSlides: true,
     navigationFormatter: function(index, panel){
       return "" + index;
     },
     //false to disable
     navigationSize: false,
     //If true, the slide show will start running; replaces "startStopped" option
     autoPlay: false,
     autoPlayLocked: false,
     autoPlayDelayed: false,
     pauseOnHover: true,
     stopAtEnd: false,
     playRtl: false,
     delay: 3000,
     resumeDelay: 15000,
     animationTime: 600,
     delayBeforeAnimate: 0,
     //Callback before the plugin initializes
     onBeforeInitialize: function(e, slider) {},
     onInitialized: function(e, slider) {},
     onShowStart: function(e, slider) {},
     onShowStop: function(e, slider) {},
     onShowPause: function(e, slider) {},
     onShowUnpause: function(e, slider) {},
     onSlideInit: function(e, slider) {},
     onSlideBegin: function(e, slider) {},
     onSlideComplete: function(slider) {},
     onSliderResize: function(e, slider) {},
     //Event used to activiate forward arrow functionality (e.g. add jQuery mobile's "swiperright")
     clickForwardArrow: "click",
     clickBackArrow: "click",
     clickControls: "click focusin",
     clickSlideshow: "click",
     //If true & slideshow is activite & a YouTube Video is playing, it will pause the autoplay until video is completes
     resumeOnVideoEnd: true,
     resumeOnVisible: true,
     addWmodeToObject: "opaque",
     isVideoPlaying: function(base) {
       return false;
     }
   });
 