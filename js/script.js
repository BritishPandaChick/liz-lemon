//Modal
const modalContainer = document.querySelector("#modal-container");

const hideModal = function() {
  modalContainer.hide();
};

const showModal = function() {
  modalContainer.show();
};

const modalShowButton = $("#modal-show");
modalShowButton.on("click", showModal);

const modalCloseButton = $('#modal-hide');
modalCloseButton.on("click", hideModal);

$(document).on("keyup", function(evt) {
  evt = evt || window.event;
  if (evt.keycode === 27) {
    hideModal();
  }
});

const handleNewsletterSignup = function(evt) {
  evt.preventDefault();

  const newsletterHeader = $("#newsletter-header");
  const newsletterForm = $("#newsletter-signup");
  newsletterForm.hide();
  newsletterHeader.text("Thank you for signing up!");
  setTimeout(hideModal, 2000);
};

const newsletterForm = $("#newsletter-signup");
newsletterForm.on("submit", handleNewsletterSignup);

/* Begin the clock code */
const clockTime = function() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours <= 11) {
    let period = "AM";
  } else {
    let period = "PM";
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

  let time = hours + ':' + minutes + ':' + seconds + ' ' + period;
    return time;
  }

  let clock = $("#clock");

  setInterval(function() {
    clock.text(clockTime());
  }, 1000);
