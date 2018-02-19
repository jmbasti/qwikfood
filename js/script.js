
/*----------------------------------------jQuery FOR button SCROLLING---------------------------------------------------------*/

$('.js--scroll-to-plan').click(function(){  
  $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
});



$('.js--scroll-to-start').click(function(){ 
  $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});


/*----------------------------------------jQuery FOR Navigation (https://css-tricks.com/snippets/jquery/smooth-scrolling/)---------------------------------------------------------*/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 2500, function() {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) { // Checking if the target was focused
      return false;
      } else {
      $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
      $target.focus(); // Set focus again
      };
    });
    }
  }
  });


/*-------------------------mobile navigation-----------------------------------------------------------------------------*/


$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav'); 
  var icon = $('.js--nav-icon i');
  
  
  nav.slideToggle(200);
  
  if(icon.hasClass('ion-navicon-round')) {
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round');
  } else {
    
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round');
  }
  
  
});

/*--------------------------------------MODAL-ABOUT----------------------------------------------------------------*/
var elementaryBox = document.getElementById('elem-box');
  elementaryBox.addEventListener('click', function(e){
    e.preventDefault();
    var modalBox = document.getElementById('container-modal-box');
    fadeIn(modalBox, 30);
  });			

  var closeButton = document.querySelector('.btn-close-modal-1');
  closeButton.addEventListener('click', function(e){
    e.preventDefault();
    var modalBox = document.getElementById('container-modal-box');
    fadeOut(modalBox, 30);
  });


//ffade in function
function fadeIn(element, time) {
  var fadingFrom = 0;
  element.style.opacity = 0;
  var fading = setInterval(function () {
    var fade = fadingFrom / time;
    element.style.display = "block";
    element.style.opacity = fade;
    fadingFrom++;
    if (fadingFrom == time) {
      element.style.opacity = 1;
      clearInterval(fading);
      fadingFrom = 0;
      return false;
    }
  }, time);
}

//fade out function
function fadeOut(element, time) {
  var fadingFrom = 10;
  var fading = setInterval(function () {
    var fade = fadingFrom / time;
    element.style.opacity = fade;
    fadingFrom--;
    if (fadingFrom == 0) {
      element.style.opacity = 0;
      element.style.display = "none";
      clearInterval(fading);
      fadingFrom = 10;
      return false;
    }
  }, time);
}

/*--------------------------------------MODAL-VISION----------------------------------------------------------------*/
var elementaryBox = document.getElementById('commitment');
  elementaryBox.addEventListener('click', function(e){
    e.preventDefault();
    var modalBox = document.getElementById('container-modal-box-mission');
    fadeIn(modalBox, 30);
  });			

  var closeButton = document.querySelector('.btn-close-modal-2');
  closeButton.addEventListener('click', function(e){
    e.preventDefault();
    var modalBox = document.getElementById('container-modal-box-mission');
    fadeOut(modalBox, 30);
  });


//ffade in function
function fadeIn(element, time) {
  var fadingFrom = 0;
  element.style.opacity = 0;
  var fading = setInterval(function () {
    var fade = fadingFrom / time;
    element.style.display = "block";
    element.style.opacity = fade;
    fadingFrom++;
    if (fadingFrom == time) {
      element.style.opacity = 1;
      clearInterval(fading);
      fadingFrom = 0;
      return false;
    }
  }, time);
}

//fade out function
function fadeOut(element, time) {
  var fadingFrom = 10;
  var fading = setInterval(function () {
    var fade = fadingFrom / time;
    element.style.opacity = fade;
    fadingFrom--;
    if (fadingFrom == 0) {
      element.style.opacity = 0;
      element.style.display = "none";
      clearInterval(fading);
      fadingFrom = 10;
      return false;
    }
  }, time);
}

/*-----------------------------------------------------GMAPS---------------------------------------------------------------------*/
function initMap() {
  var malaysia = {lat: 3.139003, lng: 101.68685499999992};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: malaysia
  });
  /*var marker = new google.maps.Marker({
    position: malaysia,
    map: map
    
  });*/
  }

  