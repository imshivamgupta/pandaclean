$(function() {}),
    function() {}(), $(function() {
        "use strict";
        var e = function() {

        }();
        // e && e <= 11 && $("html").addClass("ie");
        var t = $(".navigation"),
            n = 90;

        function a() {
            // $(window).scrollTop() >= n ? t.addClass("navbar-sticky") : t.removeClass("navbar-sticky")
        }
        if ($(window).scroll(function() {
                a();
            }), a(), $("a.scrollto").on("click", function(e) {
                // e.preventDefault();
                // var t = this.hash;
                // $("html, body").stop().animate({
                //     scrollTop: $(t).offset().top
                // }, 1200, "easeInOutExpo", function() {
                //     window.location.hash = t
                // })
            }), $(".navbar-toggler").on("click", function() {
                t.toggleClass("navbar-expanded")
            }), $(".tgl-signup").on("click", function() {
                $("body").toggleClass("signup-visible"), t.removeClass("navbar-expanded")
            }), $(".swiper-container").each(function() {
                var e = $(this),
                    t = e.data("sw-autoplay") || 2500,
                    n = e.data("sw-speed") || 1100,
                    a = e.data("sw-effect") || "slide",
                    i = e.data("sw-show-items") || 1,
                    s = e.data("sw-loop") || !0,
                    o = e.data("sw-centered-slides") || !0,
                    r = i > 1 ? 20 : 0,
                    l = e.data("sw-scroll-items") || 1,
                    d = e.data("sw-navigation"),
                    c = e.data("sw-pagination") || ".swiper-pagination",
                    p = e.data("sw-cover-stretch") || 0,
                    u = e.data("sw-cover-depth") || 0,
                    f = e.data("sw-cover-modifier") || 1,
                    v = {
                        pagination: {
                            el: c,
                            clickable: !0,
                            dynamicBullets: !0
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }
                    };
                // d && (v.onTransitionEnd = function(e) {
                //     $(".active", d).removeClass("active"), $(".nav-item:eq(" + e.realIndex + ")", d).addClass("active")
                // });
                var m = $.extend({
                        loop: s,
                        slidesPerGroup: l,
                        spaceBetween: r,
                        centeredSlides: o,
                        breakpoints: !1,
                        slidesPerView: i,
                        autoplay: {
                            delay: t,
                            disableOnIteration: !1
                        },
                        speed: n,
                        parallax: !0,
                        effect: a,
                        coverflow: {
                            rotate: 0,
                            stretch: p,
                            depth: u,
                            modifier: f,
                            slideShadows: !1
                        }
                    }, v),
                    g = new Swiper(this, m);
                d && $(d).on("click", ".nav-item", function(e) {
                    // e.preventDefault();
                    // var t = $(this);
                    // if (t.hasClass("active")) return !1;
                    // var n = t.index();
                    // return g.slideTo(n + 1), t.siblings(".active").removeClass("active"), t.addClass("active"), !1
                })
            }), document.getElementById("particles") && particlesJS.load("particles", "js/particle.json"), $(".typed").length) new Typed(".typed", {
            strings: ["Easy", "Shine", "Great", "Perfect"],
            typeSpeed: 100,
            backDelay: 600,
            backSpeed: 50,
            loop: !0
        })
    });