$(document).ready(function () {

    //Timeline animation
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    var timelineItems = document.querySelectorAll(".timeline li.timeitem");
    var skillList = document.getElementById("skills-list");

    // code for the isElementInViewport function
    function callbackFunc() {
        for (var i = 0; i < timelineItems.length; i++) {
            if (isElementInViewport(timelineItems[i])) {
                timelineItems[i].classList.add("in-view");
            }
        }

        if (isElementInViewport(skillList)) {
            $('.loader-bar').each(function () {
                $(this).addClass("loaded").css("width", $(this).attr("data-percent"));
            });
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    var offset = 250;
    var duration = 300;
    jQuery(".back").css({"display": "none"});
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".back").fadeIn(duration);
        } else {
            jQuery(".back").fadeOut(duration);
        }

    });
    jQuery(".back").click(function(event) {
        event.preventDefault();
        jQuery(".back").animate({scrollTop: 0}, duration);
        return false;
    })

});


//Mobile menu toggle
function mobileMenuAction() {
    document.getElementsByClassName("top-menu")[0].classList.toggle("responsive");
}

//Smooth anchor transition on jquery
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});