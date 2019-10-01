(function (z) {
    var bS = function () {
        z.R.call(this)
    };
    var cS = function () {
        (0, window.$)("body").on("click", ".org-tip a", function (a) {
            a.preventDefault();
            z.X.alert({title: "申请注册机构帐号", modal: !0, content: (0, window.$)("#org-tip").html(), buttons: {kC: "确认"}})
        })
    };
    var dS = function () {
        var a = (0, window.$)(".QRCode-card"), b = (0, window.$)(".QRCode-toggleButton"),
            c = (0, window.$)(".QRCode-toggleButtonText", b);
        (0, window.$)("body").on("click", function (d) {
            a.is(":visible") ? Boolean((0, window.$)(d.target).closest(a).length) || (a.addClass("fadeOutDown").onTransitionEnd(function () {
                a.hide().removeClass("fadeOutDown")
            }, 200), c.text("下载知乎 App")) : Boolean((0, window.$)(d.target).closest(b).length) && (a.addClass("fadeInUp").show().onTransitionEnd(function () {
                    a.removeClass("fadeInUp")
                },
                200), c.text("关闭二维码"))
        })
    };
    var eS = function () {
        var a = (0, window.$)(".sign-flow");
        if (a.length) {
            var b = new fS;
            b.w(a[0]);
            b.g("trackRequested", function (a) {
                a.preventDefault();
                a.label = "home_default";
                z.xi(a)
            })
        }
    };
    var gS = function () {
        function a() {
            var a = window.particlesJS;
            a && ((0, window.$)("\x3cdiv\x3e", {id: "particles"}).appendTo("body"), a("particles", c))
        }

        var b = !!window.HTMLCanvasElement, c = {
            particles: {
                number: {value: 20, density: {enable: !0, value_area: 1E3}},
                color: {value: "#e1e1e1"},
                shape: {
                    type: "circle",
                    stroke: {width: 0, color: "#000000"},
                    polygon: {nb_sides: 5},
                    image: {src: "img/github.svg", width: 100, height: 100}
                },
                opacity: {value: .5, random: !1, anim: {enable: !1, speed: 1, opacity_min: .1, sync: !1}},
                size: {
                    value: 15, random: !0, anim: {
                        enable: !1,
                        speed: 180, size_min: .1, sync: !1
                    }
                },
                line_linked: {enable: !0, distance: 650, color: "#cfcfcf", opacity: .26, width: 1},
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !0,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {enable: !1, rotateX: 600, rotateY: 1200}
                }
            }, interactivity: {
                detect_on: "canvas",
                events: {onhover: {enable: !1, mode: "repulse"}, onclick: {enable: !1, mode: "push"}, resize: !0},
                modes: {
                    grab: {distance: 400, line_linked: {opacity: 1}},
                    bubble: {distance: 400, size: 40, duration: 2, opacity: 8, speed: 3},
                    repulse: {distance: 200, duration: .4},
                    push: {particles_nb: 4},
                    remove: {particles_nb: 2}
                }
            }, retina_detect: !0
        };
        (0, window.$)(function () {
            b && window.$.ajax({
                url: "/static/revved/components/particles.js/particles.min.00debcf6.js",
                dataType: "script",
                cache: !0
            }).then(a)
        })
    };
    var fS = function () {
        z.R.call(this)
    };
    var hS = function (a) {
        return !/^\+?[0-9]+$/.test(a)
    };
    var iS = function (a, b) {
        a.account && (a[b] = a.account, delete a.account)
    };
    var jS = function (a) {
        var b = (0, window.$)(".index-tab-navs a", a.m()), c = (0, z.q)(function () {
            var a = window.location.hash || b.filter(".active").attr("href"), c = b.filter(function () {
                return (0, window.$)(this).attr("href") === a
            });
            c.addClass("active").siblings().removeClass("active");
            c.parent().attr("data-active-index", c.index());
            "#signin" === a ? this.Mk.is(":visible") || (this.Kf.hide(), this.Mk.show(), this.sl()) : "#signup" !== a || this.Kf.is(":visible") || (this.Mk.hide(), this.Kf.show(), this.sl())
        }, a);
        a.v().g(window, "hashchange",
            c);
        c()
    };
    var kS = function (a) {
        a.Mk = (0, window.$)(".view-signin", a.m());
        var b = (0, window.$)("form", a.Mk), c = (0, window.$)("button.submit", b);
        b.validate(window.$.extend({}, z.Xm, {submitHandler: z.uk(c, window.$.proxy(a.bA, a))}));
        var d = (0, window.$)('input[name\x3d"account"]', b);
        (0, window.$)(".unable-login", a.Mk).click(function () {
            (new z.Fk(d.val())).show()
        });
        b = (0, window.$)(".captcha-module, .Captcha", b).get(0);
        a.rt = new z.dk("login");
        a.rt.w(b);
        z.hk(a.rt)
    };
    var lS = function (a) {
        a.Kf = (0, window.$)(".view-signup", a.m());
        var b = (0, window.$)("form", a.Kf);
        a.xh = !(0, window.$)('input[name\x3d"phone_num"]', b).length;
        var c = (0, window.$)("button.submit", b);
        b.validate(window.$.extend({}, z.Xm, {submitHandler: z.uk(c, window.$.proxy(a.lp, a))}));
        var d = (0, window.$)('input[name\x3d"account"]', b);
        a.Kf.on("click", ".switch-to-login", function () {
            window.location.hash = "#signin";
            var b = d.val();
            b && (0, window.$)('input[name\x3d"account"]', a.fX).val(b)
        }).on("change", ".agreement input", function () {
            var a =
                (0, window.$)(this);
            a.is(":checked") && a.parents(".agreement").find(".error").remove()
        });
        c = (0, window.$)(".input-wrapper[data-type]", b).get(0);
        a.xp = new z.dk;
        a.xp.w(c);
        z.hk(a.xp);
        a.Mm = new z.Sk(b);
        a.Mm.start()
    };
    var mS = function () {
        var a = z.aj.get("accountcallback");
        z.aj.remove("accountcallback");
        if (a) {
            a = (0, window.decodeURIComponent)(a);
            try {
                var b = JSON.parse(a);
                z.Y.dispatchEvent(new z.Zj("accountcallback", b))
            } catch (c) {
            }
        }
    };
    z.x(bS, z.R);
    bS.prototype.init = function () {
        this.w(window.document.body)
    };
    bS.prototype.C = function (a) {
        bS.o.C.call(this, a);
        eS();
        gS();
        dS();
        cS();
        z.xi({category: "view_home", action: "visit_home"})
    };
    z.x(fS, z.R);
    z.e = fS.prototype;
    z.e.C = function () {
        fS.o.C.call(this);
        this.Vy()
    };
    z.e.na = function (a) {
        this.dispatchEvent(window.$.extend({type: "trackRequested"}, a))
    };
    z.e.Vy = function () {
        function a(a, b) {
            (0, window.$)(":submit", a).click(function () {
                return b(a)
            });
            (0, window.$)("keydown", a).click(function (c) {
                if (13 === c.keyCode) return b(a)
            })
        }

        kS(this);
        lS(this);
        this.so();
        mS();
        this.sl();
        jS(this);
        var b = this, c = this.m();
        a((0, window.$)(".view-signin form", c), function (a) {
            a = a.ie().account;
            var c = hS(a);
            b.na({
                category: "sign_in",
                action: a ? "click_sign_in_submit_" + (c ? "email" : "phone") : "click_sign_in_submit_no_channel"
            })
        });
        a((0, window.$)(".view-signup form", c), function (a) {
            a = a.ie();
            a = a.phone_num ||
                a.account;
            var c = b.xh ? hS(a) : !1;
            b.na({
                category: "sign_up",
                action: a ? b.xh ? "click_sign_up_submit_" + (c ? "email" : "phone") : "click_sign_up_submit_phone" : "click_sign_up_submit_no_channel"
            })
        });
        (0, window.$)(".js-bindweibo", c).click(function () {
            b.na({category: "sign_in_or_sign_up", action: "click_sign_with_weibo_start"});
            z.ak("sina")
        });
        (0, window.$)(".js-bindqq", c).click(function () {
            b.na({category: "sign_in_or_sign_up", action: "click_sign_with_qq_start"});
            z.ak("qq")
        });
        (0, window.$)(".js-bindwechat", c).click(function () {
            b.na({
                category: "sign_in_or_sign_up",
                action: "click_sign_with_wechat_start"
            });
            z.ak("wechat")
        });
        (0, window.$)(".js-toggle-sns-buttons").click(function () {
            var a = (0, window.$)(".sns-buttons");
            a.hasClass("is-visible") ? a.onTransitionEnd(function () {
                a.css("visibility", "hidden")
            }, 250).removeClass("is-visible") : a.css("visibility", "visible").addClass("is-visible")
        })
    };
    z.e.bA = function (a) {
        var b = this, c = (0, window.$)(a), d = c.ie(), f = hS(d.account);
        this.na({category: "sign_in", action: "sign_in_front_end_pass_" + (f ? "email" : "phone")});
        a = f ? "/login/email" : "/login/phone_num";
        z.Hk && (d.is_org_page = 1);
        f ? iS(d, "email") : iS(d, "phone_num");
        var g = this.rt.info();
        return window.$.post(a, d, function (a) {
            var k = a && !a.r,
                m = Object.assign({}, {status: {result: k ? "Success" : a.data && a.data.captcha ? "BadCaptcha" : "Fail"}}, g);
            k ? (b.na({wc: !0, category: "sign_in", action: "sign_in_success_" + (f ? "email" : "phone")}),
                b.Od()) : (k = a.errcode, 1991831 === k ? (a = new z.Dk({
                data: {
                    phone_num: d.phone_num,
                    password: d.password
                }, hT: function (a) {
                    c.data("validator").showErrors(a)
                }
            }), a.Db(b), a.G(!0)) : 200001 === k ? (a = '机构帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/org/signin"\x3e点此登录\x3c/a\x3e', z.Hk && (a = '个人帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/signin"\x3e点此登录\x3c/a\x3e'), c.data("validator").showErrors({account: a})) : (z.hk(b.rt), c.data("validator").showErrors(a.data)));
            b.trackEvent(b.Mk.get(0), "SignIn", "Button", m)
        })
    };
    z.e.lp = function (a) {
        var b = this;
        a = (0, window.$)(a);
        var c = a.ie(), d = b.xh ? hS(c.account) : !1;
        b.na({wc: !0, category: "sign_up", action: "sign_up_front_end_pass_" + (d ? "email" : "phone")});
        var f = d ? "/register/email" : "/register/phone_num/validation";
        z.Hk && (d = !0, f = "/register/org");
        d ? iS(c, "email") : iS(c, "phone_num");
        var g = this.Mm.stop();
        c.userInfo = JSON.stringify(g);
        var h = a.data("validator"), k = b.xp.info();
        return window.$.post(f, c, function (a) {
            var f = a && !a.r, g = Object.assign({}, {
                status: {
                    result: f ? "Success" : a.data && a.data.captcha ?
                        "BadCaptcha" : "Fail"
                }
            }, k);
            d ? f ? (b.na({
                wc: !0,
                category: "sign_up",
                action: "sign_up_success_email"
            }), b.Od()) : (z.hk(b.xp), h.showErrors(a.data)) : f ? (a = new z.hw(c), a.Db(b), a.G(!0)) : (z.hk(b.xp), b.xh || iS(a.data, "phone_num"), h.showErrors(a.data));
            b.trackEvent(b.Kf.get(0), "SignUp", "Button", g)
        })
    };
    z.e.sl = function () {
        if (!z.xk) {
            var a = this.m();
            (0, window.setTimeout)(function () {
                (0, window.$)("input[placeholder]:visible", a).placeholder()
            }, 10)
        }
    };
    z.e.so = function () {
        z.ck(this.v(), this.uS)
    };
    z.e.uS = function (a) {
        a = a.xf;
        var b = {qqconn: "qq", wechat: "wechat", sina: "weibo"}[a.type];
        1 === a.login ? (this.na({
            wc: !0,
            category: "sign_in",
            action: "sign_in_success_" + b
        }), this.Od()) : (a = new z.Kk(a), a.Db(this), a.show())
    };
    z.e.Od = function () {
        var a = (new z.ph(window.location.href)).ze().get("next");
        a ? window.location.href = a : window.location.reload()
    };
    z.e.trackEvent = function (a, b, c, d) {
        (0, z.Gi)(a, {action: b, element: c}, d)
    };
    z.v("ZH.entrySignPage", function () {
        (new bS).init()
    });
    z.jg("page-index");
}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/page-index.d7b54ac7.js