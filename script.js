$(document).ready(function(){
  /*  alert('Our JavaScript is working!');
  console.log('Our JavaScript is working!');
  console.warn('A dire warning!');
  console.error('ERMAGERD AN ERROR!');  */

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
     theme: 'default',    //set mode to "horizontal","vertical", or "fade"
     //(only first letter needed);
     replaces vertical option
     mode: 'horizontal',    //If true, the entire slider will expand to fit the parent element
     expand: false,    //If true, solitary images/objects in the panel wille xpand to fit the viewport
     resizeContents: true,    //Set this value to a number and it will show that many slides at once
     showMultiple: false,    //Anything other than "linear" or "swing" requires the easing plugin
     easing: "swing",    //If true, builds the forwards and backwards buttons
     buildArrows: true,    //If true, builds a list of anchor links to link to each panel
     buildNavigation: true,    //If true, builds the start/stop button
     buildStartStop: true,    //Append forwards arrow to an HTML element
     //(jQuery Object, selector or HTMLNode), if not null
     appendForwardTo: null,    //Appen back arrow to a HTML element
     //(jQuery Object, selector or HTMLNode), if not null
     appendBackTo: null,    //Append controls (navigation + start-stop) to a HTML element
     //(jQuery Object, a selector or HTMLNode), if not null
     appendControlsTo: null,    //Append navigation buttons to a HTML element
     //(jQuery Object, selector or HTMLNode), if not null
     appendNavigationTo: null,    //Append start-stop button to HTML element
     //(jQuery Object, selector or HTMLNode), if not null
     appendStartStopTo: null,    //If true, side navigation arrows will slide out on hovering & hide @ other times
     toggleArrows: false,    //If true, slide in controls (navigation + play/stop button)
     //on hover and slide change, hide @ other times
     toggleControls: false,    //Start button text
     startText: "Start",    //Stop button text
     stopText: "Stop",    //Link text used to move the slider forward (hidden by CSS, replaced with arrow image)
     forwardText: "&raquo;",
     //Link text used to move the slider back (hidden by CSS, replace with arrow image)
     backText = "&laquo;",    //Class added to navigation & start/stop button (text copied to title if it is hidden by a negative text indent)
     tooltipClass: 'tooltip',    //if false, arrows will be visible, but not clickable
     enableArrows: true,    //if false, navigation links will still be visible, but not clickable.
     enableNavigation: true,    //if false, the play/stop button will still be visible, but not clickable. Previously "enablePlay"
     enableStartStop: true,    //if false, keyboard arrow keys will not work for this slider
     enableKeyboard: true,    //navigation    //This sets the initial panel
     startPanel: 1,    //Amount to go foward or back when changing panels
     changeBy: 1,    //Should links change the hashtag in the URL?
     hashTags: true,    //if false, the slider will not wrap
     infiniteSlides: true,    //Details at the top of the file on this use (advanced use)
     navigationFormatter: function(index, panel){      //This is the default format (show just the panel index number)
       return "" + index;
     },    //Set this to the maximum number of visible navigation tabs;
     //false to disable
     navigationSize: false,    //Slide show options
     //If true, the slide show will start running; replaces "startStopped" option
     autoPlay: false,    //if true, user changing slides will not stop the slideshow
     autoPlayLocked: false,    //if true, starting a slideshow will delay advancing slides; if false, the slider will immeidately advance to the next slide when a slideshow starts
     autoPlayDelayed: false,    //if true & the slideshow is active, the slideshow will pause on hover
     pauseOnHover: true,    //if true & the slideshow is active, the slideshow will stop on the last page. This also stops the rewind effect when inifiteSlides is false
     stopAtEnd: false,    //If true, the slideshow will move right-to-left
     playRtl: false,    //times    //How long between slideshow transition in AutoPlay mode (in milliseconds)
     delay: 3000,    //Resume slideshow after user interaction, only if autoplayLocked is true (in milliseconds)
     resumeDelay: 15000,    //How long the slideshow transition takes (in milliseconds)
     animationTime: 600,    //How long to pause slide animation before going to the desired slide (used if you want your "out" FX to show)
     delayBeforeAnimate: 0,    //Callbacks
     //Callback before the plugin initializes
     onBeforeInitialize: function(e, slider) {},    //Callback when the plugin finished initializing
     onInitialized: function(e, slider) {},    //Callback on slideshow start
     onShowStart: function(e, slider) {},    //Callback after slideshow stops
     onShowStop: function(e, slider) {},    //Callback when slideshow pauses
     onShowPause: function(e, slider) {},    //Callback when slideshow unpauses - may not trigger properly if user clicks on any controls
     onShowUnpause: function(e, slider) {},    //Callback when slide initiates, before control animationTime
     onSlideInit: function(e, slider) {},    //Callback before slide animates
     onSlideBegin: function(e, slider) {},    //Callback when slide completes - no event variable!
     onSlideComplete: function(slider) {},    //Callback when slider resizeContents
     onSliderResize: function(e, slider) {},    //Interactivity
     //Event used to activiate forward arrow functionality (e.g. add jQuery mobile's "swiperright")
     clickForwardArrow: "click",    //Event used to activiate back arrow functionality(e.g. add jQuery mobile's "swipeleft")
     clickBackArrow: "click",    //Event used to activiate navigation control functionality
     clickControls: "click focusin",    //Event used to activate slideshow play/stop button
     clickSlideshow: "click",    //Video
     //If true & slideshow is activite & a YouTube Video is playing, it will pause the autoplay until video is completes
     resumeOnVideoEnd: true,    //if true the video will resume playing (if previously paused, except for YouTube iframe - known issue); If false, the video remains paused
     resumeOnVisible: true,    //If your slider has an embedded object, the script will automatically add a wmode parameter with this setting
     addWmodeToObject: "opaque",    //return true if video is playing or false if not - used by video extension
     isVideoPlaying: function(base) {
       return false;
     }
   });
 });
