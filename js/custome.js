jQuery(document).ready(function ($) {
    // Hamburgers
    var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("is-active");
            }, false);
        });
    }
    // Hamburgers

    //Nav fixed top
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery("header").addClass("topmines");
        } else {
            jQuery("header").removeClass("topmines");
        }
        if (jQuery(this).scrollTop() > 250) {
            jQuery("header").addClass("nav-active");
        } else {
            jQuery("header").removeClass("nav-active");
        }

    });

    //scroll top
    jQuery(window).scroll(function () {

        if (jQuery(this).scrollTop() > 100) {
            jQuery(".scrollup").addClass("active");
        } else {
            jQuery(".scrollup").removeClass("active");
        }
    });
    jQuery(".scrollup").click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    //scroll top
    // Counter
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 8000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
    });
    // Counter
    //   Slider
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    //machheight
    jQuery(".matchHeight").matchHeight();

    AOS.init();
});
//GALLERY
// baguetteBox.run('.tz-gallery');



