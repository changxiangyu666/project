!function () {
    var a = document.cookie.match(/actioncontinuationhash=([^;]+)/), b = a && a[1];
    b && (location.hash = decodeURIComponent(b))
}(this), function (a, b) {
    function c(a) {
        function b(a, b) {
            var c;
            return window.getComputedStyle ? c = window.getComputedStyle(a, null).getPropertyValue(b) : a.currentStyle && (c = a.currentStyle[b]), c
        }

        for (var c = a.parentNode; "inline" === b(c, "display");) c = c.parentNode;
        return c
    }

    function d(a) {
        var b = +a.getAttribute("data-rawwidth"), d = +a.getAttribute("data-rawheight");
        if (b && d && !a.style.width && !a.style.height) {
            var e = c(a).clientWidth, f = b, g = d;
            b > e && (f = e, g = f * (d / b)), a.style.width = f + "px", a.style.height = g + "px"
        }
    }

    function e() {
        var a = b.querySelectorAll;
        if (a) return a.call(b, "img.lazy");
        var c = [];
        return f(document.images, function (a) {
            /\blazy\b/.test(a.className) && c.push(a)
        }), c
    }

    function f(a, b) {
        for (var c = a.length - 1; c >= 0; c--) b(a[c])
    }

    a.stretchLazyImageHolders = function () {
        f(e(), d)
    }
}(this, document), function (a, b) {
    a.instant = {
        apply: function () {
            for (var a; a = b.shift();) a()
        }
    }
}(this, [function () {
    window.stretchLazyImageHolders()
}]), function () {
    var a = window.document.documentElement, b = window.localStorage;
    if (b) {
        var c = /^\/(signup|signin)?$/.test(location.pathname);
        if ((c || "true" !== b.getItem("hideAppPromotionBar")) && (a.className += " is-AppPromotionBarVisible"), "#showWechatShareTip" === location.hash && "true" !== b.getItem("hideWechatShareTip")) try {
            a.className += " show-wechat-share-tip", b.setItem("hideWechatShareTip", "true")
        } catch (d) {
        }
    }
}(this), function (a, b, c) {
    function d(a, b) {
        return typeof a === b
    }

    function e() {
        var a, b, c, e, f, g, h;
        for (var i in s) if (s.hasOwnProperty(i)) {
            if (a = [], b = s[i], b.name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length)) for (c = 0; c < b.options.aliases.length; c++) a.push(b.options.aliases[c].toLowerCase());
            for (e = d(b.fn, "function") ? b.fn() : b.fn, f = 0; f < a.length; f++) g = a[f], h = g.split("."), 1 === h.length ? u[h[0]] = e : (!u[h[0]] || u[h[0]] instanceof Boolean || (u[h[0]] = new Boolean(u[h[0]])), u[h[0]][h[1]] = e), v.push((e ? "" : "no-") + h.join("-"))
        }
    }

    function f(a) {
        var b = w.className, c = u._config.classPrefix || "";
        if (x && (b = b.baseVal), u._config.enableJSClass) {
            var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");
            b = b.replace(d, "$1" + c + "js$2")
        }
        u._config.enableClasses && (b += " " + c + a.join(" " + c), x ? w.className.baseVal = b : w.className = b)
    }

    function g(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function h() {
        return "function" != typeof b.createElement ? b.createElement(arguments[0]) : x ? b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]) : b.createElement.apply(b, arguments)
    }

    function i() {
        var a = b.body;
        return a || (a = h(x ? "svg" : "body"), a.fake = !0), a
    }

    function j(a, c, d, e) {
        var f, g, j, k, l = "modernizr", m = h("div"), n = i();
        if (parseInt(d, 10)) for (; d--;) j = h("div"), j.id = e ? e[d] : l + (d + 1), m.appendChild(j);
        return f = h("style"), f.type = "text/css", f.id = "s" + l, (n.fake ? n : m).appendChild(f), n.appendChild(m), f.styleSheet ? f.styleSheet.cssText = a : f.appendChild(b.createTextNode(a)), m.id = l, n.fake && (n.style.background = "", n.style.overflow = "hidden", k = w.style.overflow, w.style.overflow = "hidden", w.appendChild(n)), g = c(m, a), n.fake ? (n.parentNode.removeChild(n), w.style.overflow = k, w.offsetHeight) : m.parentNode.removeChild(m), !!g
    }

    function k(a) {
        return a.replace(/([A-Z])/g, function (a, b) {
            return "-" + b.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function l(b, d) {
        var e = b.length;
        if ("CSS" in a && "supports" in a.CSS) {
            for (; e--;) if (a.CSS.supports(k(b[e]), d)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in a) {
            for (var f = []; e--;) f.push("(" + k(b[e]) + ":" + d + ")");
            return f = f.join(" or "), j("@supports (" + f + ") { #modernizr { position: absolute; } }", function (a) {
                return "absolute" == getComputedStyle(a, null).position
            })
        }
        return c
    }

    function m(a) {
        return a.replace(/([a-z])-([a-z])/g, function (a, b, c) {
            return b + c.toUpperCase()
        }).replace(/^-/, "")
    }

    function n(a, b, e, f) {
        function i() {
            k && (delete D.style, delete D.modElem)
        }

        if (f = d(f, "undefined") ? !1 : f, !d(e, "undefined")) {
            var j = l(a, e);
            if (!d(j, "undefined")) return j
        }
        for (var k, n, o, p, q, r = ["modernizr", "tspan"]; !D.style;) k = !0, D.modElem = h(r.shift()), D.style = D.modElem.style;
        for (o = a.length, n = 0; o > n; n++) if (p = a[n], q = D.style[p], g(p, "-") && (p = m(p)), D.style[p] !== c) {
            if (f || d(e, "undefined")) return i(), "pfx" == b ? p : !0;
            try {
                D.style[p] = e
            } catch (s) {
            }
            if (D.style[p] != q) return i(), "pfx" == b ? p : !0
        }
        return i(), !1
    }

    function o(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function p(a, b, c) {
        var e;
        for (var f in a) if (a[f] in b) return c === !1 ? a[f] : (e = b[a[f]], d(e, "function") ? o(e, c || b) : e);
        return !1
    }

    function q(a, b, c, e, f) {
        var g = a.charAt(0).toUpperCase() + a.slice(1), h = (a + " " + B.join(g + " ") + g).split(" ");
        return d(b, "string") || d(b, "undefined") ? n(h, b, e, f) : (h = (a + " " + z.join(g + " ") + g).split(" "), p(h, b, c))
    }

    function r(a, b, d) {
        return q(a, c, c, b, d)
    }

    var s = [], t = {
        _version: "3.3.0",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (a, b) {
            var c = this;
            setTimeout(function () {
                b(c[a])
            }, 0)
        },
        addTest: function (a, b, c) {
            s.push({name: a, fn: b, options: c})
        },
        addAsyncTest: function (a) {
            s.push({name: null, fn: a})
        }
    }, u = function () {
    };
    u.prototype = t, u = new u;
    var v = [], w = b.documentElement, x = "svg" === w.nodeName.toLowerCase(), y = "Moz O ms Webkit",
        z = t._config.usePrefixes ? y.toLowerCase().split(" ") : [];
    t._domPrefixes = z;
    var A = t._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    t._prefixes = A;
    var B = t._config.usePrefixes ? y.split(" ") : [];
    t._cssomPrefixes = B;
    var C = {elem: h("modernizr")};
    u._q.push(function () {
        delete C.elem
    });
    var D = {style: C.elem.style};
    u._q.unshift(function () {
        delete D.style
    }), t.testAllProps = q;
    var E = function (b) {
        var d, e = A.length, f = a.CSSRule;
        if ("undefined" == typeof f) return c;
        if (!b) return !1;
        if (b = b.replace(/^@/, ""), d = b.replace(/-/g, "_").toUpperCase() + "_RULE", d in f) return "@" + b;
        for (var g = 0; e > g; g++) {
            var h = A[g], i = h.toUpperCase() + "_" + d;
            if (i in f) return "@-" + h.toLowerCase() + "-" + b
        }
        return !1
    };
    t.atRule = E;
    t.prefixed = function (a, b, c) {
        return 0 === a.indexOf("@") ? E(a) : (-1 != a.indexOf("-") && (a = m(a)), b ? q(a, b, c) : q(a, "pfx"))
    };
    t.testAllProps = r;
    var F = (t.testProp = function (a, b, d) {
        return n([a], c, b, d)
    }, t.testStyles = j);
    u.addTest("cssanimations", r("animationName", "a", !0)), u.addTest("csstransforms", function () {
        return -1 === navigator.userAgent.indexOf("Android 2.") && r("transform", "scale(1)", !0)
    }), u.addTest("csstransitions", r("transition", "all", !0)), u.addTest("flexbox", r("flexBasis", "1px", !0)), u.addTest("touchevents", function () {
        var c;
        if ("ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch) c = !0; else {
            var d = ["@media (", A.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            F(d, function (a) {
                c = 9 === a.offsetTop
            })
        }
        return c
    }), e(), f(v), delete t.addTest, delete t.addAsyncTest;
    for (var G = 0; G < u._q.length; G++) u._q[G]();
    a.Modernizr = u
}(window, document);