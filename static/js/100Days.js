/*!
 * Start Bootstrap - Freelancer v3.3.7+1 (http://startbootstrap.com/template-overviews/freelancer)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
! function(o) {
    "use strict";
    o(".page-scroll a").bind("click", function(t) {
        var l = o(this);
        o("html, body").stop().animate({
            scrollTop: o(l.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), t.preventDefault()
    }), o("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), o(".navbar-collapse ul li a").click(function() {
        o(".navbar-toggle:visible").click()
    }), o("#mainNav").affix({
        offset: {
            top: 395
        }
    }), o(function() {
        o("body").on("input propertychange", ".floating-label-form-group", function(t) {
            o(this).toggleClass("floating-label-form-group-with-value", !!o(t.target).val())
        }).on("focus", ".floating-label-form-group", function() {
            o(this).addClass("floating-label-form-group-with-focus")
        }).on("blur", ".floating-label-form-group", function() {
            o(this).removeClass("floating-label-form-group-with-focus")
        })
    })
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
    });

    $(document).ready(function() {
      $('.progress .progress-bar').progressbar({display_text: 'fill'});
    });

    (function() {

      'use strict';

      /* define variables */
      var items = document.querySelectorAll(".timeline li");

      /* check if an element is in viewport
        http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport */
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }

      /* listen for events */
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);

    })();
}(jQuery);