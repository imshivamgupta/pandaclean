$(window).on("load", function() {
    $("#preloader").fadeOut(1e3)
}), $(function() {
    $("#testimonials .owl-carousel").owlCarousel({
        items: 1,
        dots: !0,
        loop: !0,
        center: !0,
        nav: !0,
        stagePadding: 110,
        margin: 120,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        navSpeed: 700,
        dotsSpeed: 300,
        responsive: {
            0: {
                stagePadding: 0,
                margin: 0
            },
            576: {
                stagePadding: 40,
                margin: 100
            },
            992: {
                stagePadding: 110,
                margin: 120
            }
        }
    }), $(".navbar li:not(.buynow) > a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1e3)
    });
    var a = $(".navbar").offset().top;
    var e = $(".scrAnm"),
        o = $(window);
    o.on("scroll resize", function() {
        var n, t, r;
        n = o.height(), t = o.scrollTop(), r = t + n, $.each(e, function() {
            var a = $(this),
                e = a.outerHeight(),
                o = a.offset().top;
            o + e >= t && o <= r && a.addClass("show")
        }), $(window).scrollTop() > a ? $("#header .navbar").addClass("sticky") : $("#header .navbar").removeClass("sticky")
    }), o.trigger("scroll"), $(".navbar-nav a").click(function(a) {
        $(".navbar-nav li.active").removeClass("active"), $(this).parent().addClass("active")
    }), $("body").scrollspy({
        target: ".navbar"
    })
});