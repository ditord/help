! function(e) {
    var o = {};

    function t(r) { if (o[r]) return o[r].exports; var l = o[r] = { i: r, l: !1, exports: {} }; return e[r].call(l.exports, l, l.exports, t), l.l = !0, l.exports }
    t.m = e, t.c = o, t.d = function(e, o, r) { t.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: r }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, o) {
        if (1 & o && (e = t(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & o && "string" != typeof e)
            for (var l in e) t.d(r, l, function(o) { return e[o] }.bind(null, l));
        return r
    }, t.n = function(e) { var o = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(o, "a", o), o }, t.o = function(e, o) { return Object.prototype.hasOwnProperty.call(e, o) }, t.p = "/", t(t.s = 9)
}({
    10: function(e, o) {
        $((function() {
            var e = document.getElementsByClassName("navbar")[0],
                o = e.offsetTop;
            window.pageYOffset > o ? e.classList.add("navbar-scrolled") : e.classList.remove("navbar-scrolled"), window.onscroll = function() { window.pageYOffset > o ? e.classList.add("navbar-scrolled") : e.classList.remove("navbar-scrolled") }, $(".navbar-toggler").click((function(e) { $("body, html").toggleClass("overflow-hide"), $(this).find(".navbar-toggler-icon").toggleClass("_close") })), location.hash && ($("html, body").animate({ scrollTop: 0 }, 0), setTimeout((function() { $("html, body").animate({ scrollTop: $(location.hash).offset().top - 80 }, 1e3), $(".scroll-landing li").removeClass("active"), $(".scroll-landing li").find("a[href='" + location.hash + "']").addClass("active") }), 100)), $(".scroll-landing a").click((function(e) { e.preventDefault(); var o = $(this).attr("href"); "/hy/" == window.location.pathname || "/en/" == window.location.pathname || "/ru/" == window.location.pathname ? $("html, body").animate({ scrollTop: $(o).offset().top - 80 }, 1e3) : (document.location.href = "/" + o, setTimeout((function() { $("html, body").animate({ scrollTop: $(o).offset().top - 80 }, 1e3) }), 4e3)) })), $(".nav-link").on("click", (function() { $(".navbar-collapse").collapse("hide") }));
            var t, r = $(".scroll-landing"),
                l = r.outerHeight() + 15,
                n = r.find("a"),
                a = $(".scroll-landing a").map((function() { var e = $($(this).attr("href")); if (e.length) return e }));
            ($(window).scroll((function() {
                var e = $(this).scrollTop() + l,
                    o = a.map((function() { if ($(this).offset().top - 80 < e) return this })),
                    t = (o = o[o.length - 1]) && o.length ? o[0].id : "";
                n.removeClass("active"), n.parent().end().filter("[href='#" + t + "']").addClass("active")
            })), $(".home-slider").length) && (t = $(".home-slider")).slick({ slidesToShow: 1, slidesToScroll: 1, dots: !1, arrows: !0, prevArrow: $(".carousel-control.home-left"), nextArrow: $(".carousel-control.home-right"), slide: ".item", fade: !0, rows: 0 });
            $(".team-slider").length && ((t = $(".team-slider")).slick({ slidesToShow: 1, slidesToScroll: 1, dots: !1, arrows: !0, prevArrow: $(".carousel-control.team-left"), nextArrow: $(".carousel-control.team-right"), slide: ".item", fade: !0, rows: 0 }), t.on("afterChange", (function(e, o, t, r) {
                var l = $(o.$slides[t]),
                    n = l.find("img").attr("src"),
                    a = l.find("img").attr("alt"),
                    i = l.find("img").attr("title");
                $("._desktop-image-image").attr("src", n), $("._desktop-image-image").attr("alt", a), $("._desktop-image-image").attr("title", i)
            })));
            $(".blog-slider").length && (t = $(".blog-slider")).slick({ slidesToShow: 1, slidesToScroll: 1, dots: !1, arrows: !0, prevArrow: $(".carousel-control.blog-left"), nextArrow: $(".carousel-control.blog-right"), slide: ".blog-item", fade: !0, rows: 0 })
        }))
    },
    9: function(e, o, t) { e.exports = t(10) }
});