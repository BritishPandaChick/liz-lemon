/*  Modal code */
var modalContainer = document.querySelector("#modal-container");

// Hides Modal
var hideModal = function() {
  modalContainer.hide();
};

// Shows modal 
var showModal = function() {
  modalContainer.show();
};

var modalShowButton = $("#modal-show");
modalShowButton.on("click", showModal());

var modalCloseButton = $('#modal-hide');
modalCloseButton.on("click", hideModal());

$(document).on("keyup", function(evt) {
  evt = evt || window.event;
  if (evt.keycode === 27) {
    hideModal();
  }
});

/* === Newsletter Sign up === */
var handleNewsletterSignup = function(evt) {
  evt.preventDefault();
  var newsletterHeader = $("#newsletter-header");
  var newsletterForm = $("#newsletter-signup");

  newsletterForm.hide();
  newsletterHeader.text("Thank you for signing up!");
  setTimeout(hideModal, 2000);
};

var newsletterForm = $("#newsletter-signup");
newsletterForm.on("submit", handleNewsletterSignup());

/* === Begin the clock code === */
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


