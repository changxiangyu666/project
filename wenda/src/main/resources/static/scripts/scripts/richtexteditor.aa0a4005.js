(function (z) {
    var vI = function (a) {
        if (z.C && !(9 <= z.Tg)) {
            var b = !1;
            try {
                b = a.parentNode
            } catch (c) {
            }
            return !!b
        }
        return z.lf(a.ownerDocument.body, a)
    };
    var wI = function (a, b) {
        var c = b.md();
        a.Rb[c] = b;
        for (var d in z.EA) b[z.EA[d]] && a.Qj[d].push(b);
        b.F = a;
        a.uc() && b.enable(a)
    };
    var xI = function (a, b, c, d) {
        return z.gu(a, b, c, d)
    };
    var yI = function (a) {
        return a.Z() && a.la() ? new z.yt(a) : null
    };
    var zI = function (a, b, c) {
        z.Yr.call(this, b, a || z.qE.ba(), c)
    };
    var AI = function (a, b, c) {
        for (var d = (b = 1 == b) ? a.Z() : a.la(), f = b ? a.va() : a.La(), g = a.Qb(); d != g && d != c && !(b && 0 != f || !b && f != z.Ju(d));) var h = d.parentNode, d = z.lb(h.childNodes, d), f = b ? d : d + 1, d = h;
        return xI(b ? d : a.Z(), b ? f : a.va(), b ? a.la() : d, b ? a.La() : f)
    };
    var BI = function (a) {
        z.zo(a, !1);
        if (z.KF) {
            var b = a;
            for (a = a.parentNode; a && "HTML" != a.tagName;) {
                if (z.dm ? "none" == a.style[z.dm].toLowerCase() : (z.C || z.ug) && "on" == a.getAttribute("unselectable")) {
                    z.zo(a, !1, !0);
                    for (var c = 0, d = a.childNodes.length; c < d; c++) {
                        var f = a.childNodes[c];
                        f != b && 1 == f.nodeType && z.zo(a.childNodes[c], !0)
                    }
                }
                b = a;
                a = a.parentNode
            }
        }
    };
    var CI = function (a) {
        var b = a.target.tagName;
        "TEXTAREA" != b && "INPUT" != b && a.preventDefault()
    };
    var DI = function (a) {
        var b = z.Nd(a);
        a = new z.Ld;
        var c = null;
        a.next = function () {
            for (; ;) {
                if (null == c) {
                    var a = b.next();
                    c = z.Nd(a)
                }
                try {
                    return c.next()
                } catch (f) {
                    if (f !== z.Od) throw f;
                    c = null
                }
            }
        };
        return a
    };
    var EI = function (a, b) {
        var c = AI(a, 1, b), c = AI(c, 0, b), d = c.Z(), f = c.la(), g = c.va(), c = c.La();
        if (d == f) {
            for (; f != b && 0 == g && c == z.Ju(f);) d = f.parentNode, g = z.lb(d.childNodes, f), c = g + 1, f = d;
            d = f
        }
        return z.gu(d, g, f, c)
    };
    var FI = function (a, b) {
        z.KF && b.g(a, "mousedown", CI, !0);
        z.zo(a, !0);
        for (var c = a.getElementsByTagName("INPUT"), d = 0, f = c.length; d < f; d++) {
            var g = c[d];
            g.type in GI && BI(g)
        }
        z.y(a.getElementsByTagName("TEXTAREA"), BI)
    };
    var HI = function (a, b, c) {
        for (var d; a != c && (d = a.parentNode);) {
            for (var f = d.cloneNode(!1); a.nextSibling;) f.appendChild(a.nextSibling);
            b && f.insertBefore(b, f.firstChild);
            b = f;
            a = d
        }
        return b
    };
    var II = function (a) {
        return !!JI[a.tagName]
    };
    var KI = function (a, b) {
        var c = z.Nd(a), d = new z.Ld;
        d.next = function () {
            var a = c.next();
            if (b.call(void 0, a, void 0, c)) return a;
            throw z.Od;
        };
        return d
    };
    var LI = function (a, b) {
        var c = z.Nd(a), d = new z.Ld, f = !0;
        d.next = function () {
            for (; ;) {
                var a = c.next();
                if (!f || !b.call(void 0, a, void 0, c)) return f = !1, a
            }
        };
        return d
    };
    var MI = function (a) {
        return DI(arguments)
    };
    var NI = function (a, b) {
        a = z.Nd(a);
        try {
            for (; ;) if (b.call(void 0, a.next(), void 0, a)) return !0
        } catch (c) {
            if (c !== z.Od) throw c;
        }
        return !1
    };
    var OI = function (a) {
        this.re = a;
        this.Ax = []
    };
    var PI = function (a) {
        if (!a.Vw) {
            var b = z.Du(a.re);
            a.Vw = b.tagName && "IMG" == b.tagName ? b.getAttribute("alt") : z.Io(a.re)
        }
        return a.Vw
    };
    var QI = function (a, b, c, d) {
        var f = new OI(a);
        f.re.href = b;
        c && (a.target = c);
        d && (f.Ax = d);
        return f
    };
    var RI = function (a, b) {
        var c = new OI(a), d;
        d = (0, z.ab)(PI(c));
        d = SI(d) ? 0 > d.search(/:/) ? "http://" + z.lp(d) : d : TI.test(d) ? "mailto:" + d : null;
        c.re.href = d ? d : "";
        b && (a.target = b)
    };
    var SI = function (a) {
        if (/\s/.test(a) || TI.test(a)) return !1;
        var b = !1;
        /^[^:\/?#.]+:/.test(a) || (a = "http://" + a, b = !0);
        a = a.match(z.re);
        if (-1 != z.lb(["mailto", "aim"], a[1])) return !0;
        var c = a[3];
        if (!c || b && -1 == c.indexOf(".") || /[^\w\d\-\u0100-\uffff.%]/.test(c)) return !1;
        b = a[5];
        return !b || 0 == b.indexOf("/")
    };
    var UI = function () {
        z.wA.call(this)
    };
    var VI = function (a) {
        return z.xA(a).ua()
    };
    var WI = function (a) {
        if (z.C || z.ug) {
            var b = a.Ae(), c = b.Qb(), d = VI(a);
            XI.lastIndex = 0;
            XI.test(c.innerHTML) && (a = yI(b), "P" == c.tagName ? YI(c, !0) : (b = c.innerHTML.replace(XI, '\x3cp$1 trtempbr\x3d"temp_br"\x3e'), z.Lu(c, b), c = z.vb(c.getElementsByTagName("P")), z.Pd(c, function (a) {
                "temp_br" == a.getAttribute("trtempbr") && (a.removeAttribute("trtempbr"), z.op(z.of(a)) && a.appendChild(z.C ? d.createTextNode(" ") : d.createElement("BR")), YI(a))
            })), a.restore())
        }
    };
    var YI = function (a, b) {
        if (z.C || z.ug) {
            var c = a.outerHTML.replace(/<(\/?)p/gi, "\x3c$1div");
            b && (c = c.replace(XI, "\x3c/div\x3e\x3cdiv$1\x3e"));
            z.ug && !/<\/div>$/i.test(c) && (c += "\x3c/div\x3e");
            a.outerHTML = c
        }
    };
    var ZI = function (a) {
        return 0 == a.indexOf("+") ? a.substring(1) : a
    };
    var $I = function (a) {
        a = z.Ou(a);
        a.align && (a.style.textAlign = a.align, a.removeAttribute("align"))
    };
    var aJ = function (a, b, c, d, f) {
        var g = null;
        d && (g = a.F.queryCommandValue("rtl") ? "rtl" : a.F.queryCommandValue("ltr") ? "ltr" : null);
        b = ZI(b);
        var h, k;
        if (z.C) {
            var m = b;
            k = [];
            d = null;
            var n = a.Ae();
            h = z.xA(a);
            if (m in bJ) {
                var r = n && n.Qb();
                if (r) {
                    for (var w = z.Le(window.document, "BLOCKQUOTE", null, r), H, K = 0; K < w.length; K++) if (n.containsNode(w[K])) {
                        H = w[K];
                        break
                    }
                    if (r = H || z.tf(r, "BLOCKQUOTE")) d = h.B("DIV", {style: "height:0"}), r.appendChild(d), k.push(d), H ? n = z.gu(H, 0, d, 0) : n.containsNode(d) && (n = xI(n.Z(), n.va(), d, 0)), n.select()
                }
            }
            H = a.F;
            !H.nc() &&
            !d && m in cJ && (H = H.m(), n && n.isCollapsed() && !z.gf(H) && (d = n.Be(0).ce(), n = d.duplicate(), n.moveToElementText(H), n.collapse(!1), n.isEqual(d) && (n = h.createTextNode(" "), H.appendChild(n), d.move("character", 1), d.move("character", -1), d.select(), k.push(n))), d = h.B("DIV", {style: "height:0"}), H.appendChild(d), k.push(d));
            h = k[0];
            k = k[1]
        }
        if (z.D) {
            h = b;
            var M;
            dJ[h] && (M = z.xA(a).B("DIV", {style: "height: 0"}, "x"), a.F.m().appendChild(M));
            !z.E(534) && eJ[h] && (h = a.F.m(), M = z.xA(a).B("DIV", {style: "height: 0"}, "x"), h.insertBefore(M,
                h.firstChild));
            h = M
        }
        z.B && (M = b, z.E("1.9") && "formatblock" == M.toLowerCase() && (M = a.Ae(), H = M.Z(), M.isCollapsed() && H && "BODY" == H.tagName && (d = M.va(), (H = H.childNodes[d]) && "BR" == H.tagName && (M = M.ce(), M.setStart(H, 0), M.setEnd(H, 0)))));
        z.YF && "fontsize" == b.toLowerCase() && fJ(a);
        M = VI(a);
        f && z.OF && (M.execCommand("styleWithCSS", !1, !0), z.ug && gJ(a));
        M.execCommand(b, !1, c);
        f && z.OF && M.execCommand("styleWithCSS", !1, !1);
        z.D && !z.E("526") && "formatblock" == b.toLowerCase() && c && /^[<]?h\d[>]?$/i.test(c) && hJ(a);
        /insert(un)?orderedlist/i.test(b) &&
        (z.D && !z.E(534) && iJ(a), z.C && (jJ(a), k && z.P(k)));
        h && z.P(h);
        g && a.F.execCommand(g)
    };
    var kJ = function (a, b, c, d) {
        var f = null, g = [], h = b && b.Qb();
        if (h && "IMG" == h.tagName || !b) return null;
        if (b.isCollapsed()) b = b.Be(0).ce(), z.HF ? (f = z.xA(a).createElement("A"), b.insertNode(f)) : z.GF && (b.pasteHTML("\x3ca id\x3d'newLink'\x3e\x3c/a\x3e"), f = z.xA(a).m("newLink"), f.removeAttribute("id")); else {
            var k = z.jp();
            aJ(a, "CreateLink", k);
            z.y(a.F.m().getElementsByTagName("A"), function (a) {
                z.qp(a.href, k) && g.push(a)
            });
            g.length && (f = g.pop());
            a = function (a) {
                return SI(z.Io(a))
            };
            if (g.length && z.$n(g, a)) {
                for (a = 0; b = g[a]; a++) RI(b,
                    d);
                g = null
            }
        }
        return QI(f, c, d, g)
    };
    var fJ = function (a) {
        var b = EI(z.ZA(a.F), a.F.m());
        z.Pd(z.Yo(b, function (a, d, f) {
            return 1 == f.Ub && b.containsNode(a)
        }), function (a) {
            z.rg(a, "font-size", "");
            z.B && 0 == a.style.length && null != a.getAttribute("style") && a.removeAttribute("style")
        })
    };
    var hJ = function (a) {
        z.Pd(a.Ae(), function (a) {
            "Apple-style-span" == a.className && (a.style.fontSize = "", a.style.fontWeight = "")
        })
    };
    var iJ = function (a) {
        var b = !1;
        z.Pd(a.Ae(), function (a) {
            var d = a.tagName;
            if ("UL" == d || "OL" == d) if (b) {
                if (d = z.No(a)) {
                    var f = a.ownerDocument.createRange();
                    f.setStartAfter(d);
                    f.setEndBefore(a);
                    if (z.pp(f.toString()) && d.nodeName == a.nodeName) {
                        for (; d.lastChild;) a.insertBefore(d.lastChild, a.firstChild);
                        d.parentNode.removeChild(d)
                    }
                }
            } else b = !0
        })
    };
    var jJ = function (a) {
        for (a = (a = a.Ae()) && a.sc(); a && "UL" != a.tagName && "OL" != a.tagName;) a = a.parentNode;
        a && (a = a.parentNode);
        if (a) {
            var b = z.vb(a.getElementsByTagName("UL"));
            z.wb(b, z.vb(a.getElementsByTagName("OL")));
            z.y(b, function (a) {
                var b = a.type;
                b && !("UL" == a.tagName ? lJ : mJ)[b] && (a.type = "")
            })
        }
    };
    var gJ = function (a) {
        var b = [], c = z.ZA(a.F).Qb();
        do b.push(c); while (c = c.parentNode);
        a = MI(z.Nd(z.ZA(a.F)), z.Nd(b));
        a = z.Yo(a, z.Nu);
        z.Pd(a, function (a) {
            var b = a.style.outline;
            a.style.outline = "0px solid red";
            a.style.outline = b
        })
    };
    var nJ = function (a) {
        var b = null;
        z.Pd(a, function (a, d, f) {
            if (-1 != f.Ub) {
                a = z.Ou(a).tagName;
                b = b || a;
                if (b != a) throw b = null, z.Od;
                f.Vp()
            }
        });
        return b
    };
    var oJ = function (a, b) {
        var c = b.replace("+justify", "").toLowerCase();
        "full" == c && (c = "justify");
        var d = a.F.Rb.Bidi;
        if (d) return c == d.AY();
        var f = a.Ae();
        if (!f) return !1;
        for (var g = f.Qb(), d = z.mb(g.childNodes, function (a) {
            return z.Fu(a) && f.containsNode(a, !0)
        }), d = d.length ? d : [g], g = 0; g < d.length; g++) {
            var h = z.Ou(d[g]);
            if (c != pJ(h)) return !1
        }
        return !0
    };
    var pJ = function (a) {
        var b = z.xg(a, "textAlign"), b = b.replace(/^-(moz|webkit)-/, "");
        qJ[b] || (b = a.align || "left");
        return b
    };
    var rJ = function (a, b, c, d, f) {
        d = ZI(d);
        if (f) {
            var g = VI(a);
            g.execCommand("styleWithCSS", !1, !0)
        }
        a = b ? c.queryCommandState(d) : c.queryCommandValue(d);
        f && g.execCommand("styleWithCSS", !1, !1);
        return a
    };
    var sJ = function (a, b) {
        z.xc.call(this);
        this.It = [];
        for (this.Dt = []; a && "BODY" != a.nodeName && a != b;) {
            for (var c = 0, d = a.previousSibling; d;) d = d.previousSibling, ++c;
            this.It.unshift(c);
            this.Dt.unshift(a.nodeName);
            a = a.parentNode
        }
    };
    var tJ = function (a, b) {
        for (var c, d = b, f = 0; c = a.Dt[f]; ++f) if (d = d.childNodes[a.It[f]], !d || d.nodeName != c) return null;
        return d
    };
    var uJ = function () {
        z.wA.call(this)
    };
    var vJ = function (a, b) {
        for (var c = z.ZA(a.F), d = c.sc(), f = a.F.m(), g; d && d != f;) {
            var h = d.nodeName, k;
            (k = "DIV" == h) || !(k = wJ[h]) || (k = !b) || (k = d, k = !(z.Hu(k) && 1 == k.getElementsByTagName("BR").length));
            if (k) {
                if (z.ug && g) {
                    "DIV" == h && g == d.lastChild && z.Hu(g) && (z.bf(g, d), z.yu(g).select());
                    break
                }
                return
            }
            z.ug && b && "P" == h && "DIV" != h && (g = d);
            d = d.parentNode
        }
        if (z.C && !z.E(9)) {
            var m = !1, c = c.ce(), d = c.duplicate();
            d.moveEnd("character", 1);
            d.text.length && (m = d.parentElement(), d = d.duplicate(), d.collapse(!1), d = d.parentElement(), m = m != d && d !=
                c.parentElement()) && (c.move("character", -1), c.select())
        }
        a.F.ib.ua().execCommand("FormatBlock", !1, "\x3cDIV\x3e");
        m && (c.move("character", 1), c.select())
    };
    var xJ = function (a) {
        if (z.HF) {
            if ((a = z.ZA(a.F)) && !a.isCollapsed()) {
                var b = !0;
                if (z.ug) {
                    var c = a.Z(), d = a.va();
                    c == a.la() && c.lastChild && "BR" == c.lastChild.tagName && d == c.childNodes.length - 1 && (b = !1)
                }
                if (b) {
                    var f = a;
                    if (f && !f.isCollapsed()) {
                        var g = !0, b = f.Qb(), c = new sJ(f.Z(), b), d = f.va(), h;
                        h = f;
                        var k = h.Z();
                        z.Nu(k) && (k = k.childNodes[h.va()] || k);
                        var k = z.Ou(k), m = h.la();
                        z.Nu(m) && (m = m.childNodes[h.La()] || m);
                        m = z.Ou(m);
                        h = k == m;
                        if (k = !h) a:{
                            var m = f, k = m.la(), m = m.La(), n = k;
                            if (z.Nu(n)) {
                                var r = n.childNodes[m];
                                if (!r || 1 == r.nodeType && z.Nu(r)) {
                                    k =
                                        !1;
                                    break a
                                }
                            }
                            for (r = z.Ou(n); r != n;) {
                                if (z.Gu(n)) {
                                    k = !0;
                                    break a
                                }
                                n = n.parentNode
                            }
                            k = m != z.Ju(k)
                        }
                        f.yf();
                        (f = tJ(c, b)) ? f = z.zu(f, d) : (f = z.zu(b, b.childNodes.length), g = !1);
                        f.select();
                        h && (h = z.Ou(f.Z()), z.Hu(h, !0) && (g = "\x26nbsp;", z.ug && "LI" == h.tagName && (g = "\x3cbr\x3e"), z.Lu(h, g), z.Pu(h.firstChild), g = !1));
                        k && (f = z.Ou(f.Z()), h = z.Gu(f), f && h && (z.Ze(f, h.childNodes), z.P(h)));
                        g && (f = z.zu(tJ(c, b), d), f.select())
                    }
                }
            }
            a = z.Vu(a, !0)
        } else a = z.xA(a).ua(), b = a.selection.createRange(), c = z.jp(), b.pasteHTML('\x3cspan id\x3d"' + c + '"\x3e\x3c/span\x3e'),
            a = a.getElementById(c), a.id = "";
        return a
    };
    var yJ = function () {
    };
    var zJ = function (a) {
        z.G.call(this);
        this.gv = a || window;
        this.yz = z.F(this.gv, "resize", this.sy, !1, this);
        this.vc = z.Oe(this.gv)
    };
    var AJ = function (a, b) {
        z.G.call(this);
        this.da = z.J(a);
        this.T = new z.xd(this);
        this.iC = new zJ(this.da.Va());
        this.sd = {};
        this.Cd = this.da.B("DIV", {className: BJ});
        z.Q(this.Cd, !1);
        a.appendChild(this.Cd);
        z.rg(this.Cd, "zIndex", b);
        this.nn = this.Cd;
        this.SD = this.da.B("DIV", {className: "tr_bubble_closebox", innerHTML: "\x26nbsp;"});
        this.nn.appendChild(this.SD);
        FI(this.Cd, this.T);
        this.ng = new z.Ln(this.Cd)
    };
    var CJ = function (a, b) {
        return z.Fb(a.sd, function (a) {
            return a.type == b
        })
    };
    var DJ = function (a, b, c, d) {
        var f = null, g;
        for (g in a.sd) {
            var h = a.sd[g].FB;
            if (!f || z.lf(h, f)) f = a.sd[g].FB
        }
        return z.Hs(f, b, a.Cd, c, null, EJ, d, null, a.$O())
    };
    var FJ = function (a, b, c, d, f, g) {
        this.type = c;
        this.FB = f;
        this.pU = g;
        this.element = a.B("DIV", {
            className: "tr_bubble_panel",
            id: b
        }, a.B("DIV", {className: "tr_bubble_panel_title"}, d ? d + ":" : ""), a.B("DIV", {className: "tr_bubble_panel_content"}))
    };
    var GJ = function () {
        z.wA.call(this);
        this.fc = new z.xd(this);
        this.mN = null
    };
    var HJ = function (a, b) {
        return new AJ(a, b)
    };
    var IJ = function (a) {
        var b = a.mY || a.F.Tk.document.body;
        a.da = z.J(b);
        var c = JJ[a.F.id];
        c || (c = (a.mN || HJ).call(null, b, a.F.fN || 0), JJ[a.F.id] = c);
        return c
    };
    var KJ = function (a) {
        if (a.yi) {
            var b = IJ(a), c = a.yi;
            z.P(b.sd[c].element);
            delete b.sd[c];
            c = z.Zn(b.sd);
            1 >= c && z.jj(b.Cd, "tr_multi_bubble");
            0 == c ? b.UD() : b.ha();
            a.aG()
        }
    };
    var LJ = function (a) {
        return a ? z.So("//www.zhihu.com/equation", "tex", a) : ""
    };
    var MJ = function () {
        GJ.call(this)
    };
    var NJ = function (a) {
        this.AO = a
    };
    var OJ = function (a) {
        z.Lc.call(this, "change");
        this.isValid = a
    };
    var PJ = function (a) {
        z.R.call(this, a)
    };
    var QJ = function (a, b, c, d, f, g, h, k) {
        this.Xb = b;
        this.Xm = h || [];
        b = k || RJ.ba();
        k = [];
        c = -c;
        d = -d;
        for (var m = 0; m < h.length; m++) k.push(a.K().B("DIV", {
            "class": b.U() + "-item",
            style: "width:" + f + "px;height:" + g + "px;background-position:" + c + "px " + d + "px;"
        })), c -= f;
        this.lg = a;
        z.jE.call(this, k, b, a.K())
    };
    var SJ = function (a, b, c) {
        z.Lc.call(this, a, c);
        this.bU = b
    };
    var RJ = function () {
    };
    var TJ = function (a, b, c) {
        z.R.call(this, c);
        this.Lj = b;
        this.lg = a.aU
    };
    var UJ = function (a) {
        var b = a.Cl();
        if (b != a.lH) {
            a.lH = b;
            var c = !(1024 < b.length);
            a.dispatchEvent(new OJ(c));
            a = a.tU;
            var d = z.J(a);
            d.zp(a);
            b && (c ? (b = LJ(b), b = d.B("IMG", {src: b})) : (b = z.u("Equation is too long"), b = d.B("DIV", {"class": "ee-warning"}, b)), d.appendChild(a, b))
        }
    };
    var VJ = function (a, b, c) {
        z.R.call(this, c);
        this.eE = a;
        this.Lj = b
    };
    var WJ = function (a, b, c, d) {
        z.OD.call(this, b);
        this.uj = new VJ(a, d, b);
        this.uj.render();
        this.uj.cB(c);
        this.uj.addEventListener("+equation", this.Yz, !1, this)
    };
    var XJ = function (a) {
        QJ.call(this, a, "a", 0, 150, 18, 18, "\\leftarrow \\rightarrow \\leftrightarrow \\Leftarrow \\Rightarrow \\Leftrightarrow \\uparrow \\downarrow \\updownarrow \\Uparrow \\Downarrow \\Updownarrow".split(" "));
        z.lE(this, new z.He(12, 1))
    };
    var YJ = function (a) {
        QJ.call(this, a, "c", 0, 70, 18, 18, "\\leq \\geq \\prec \\succ \\preceq \\succeq \\ll \\gg \\equiv \\sim \\simeq \\asymp \\approx \\ne \\subset \\supset \\subseteq \\supseteq \\in \\ni \\notin".split(" "));
        z.lE(this, new z.He(7, 3))
    };
    var ZJ = function (a) {
        QJ.call(this, a, "g", 0, 30, 18, 18, "\\alpha \\beta \\gamma \\delta \\epsilon \\varepsilon \\zeta \\eta \\theta \\vartheta \\iota \\kappa \\lambda \\mu \\nu \\xi \\pi \\varpi \\rho \\varrho \\sigma \\varsigma \\tau \\upsilon \\phi \\varphi \\chi \\psi \\omega \\Gamma \\Delta \\Theta \\Lambda \\Xi \\Pi \\Sigma \\Upsilon \\Phi \\Psi \\Omega".split(" "));
        z.lE(this, new z.He(7, 6))
    };
    var $J = function (a) {
        QJ.call(this, a, "m", 0, 90, 30, 56, "x_{a};x^{b};x_{a}^{b};\\bar{x};\\tilde{x};\\frac{a}{b};\\sqrt{x};\\sqrt[n]{x};\\bigcap_{a}^{b};\\bigcup_{a}^{b};\\prod_{a}^{b};\\coprod_{a}^{b};\\left( x \\right);\\left[ x \\right];\\left\\{ x \\right\\};\\left| x \\right|;\\int_{a}^{b};\\oint_{a}^{b};\\sum_{a}^{b}{x};\\lim_{a \\rightarrow b}{x}".split(";"));
        z.lE(this, new z.He(10, 2))
    };
    var aK = function (a) {
        QJ.call(this, a, "mn", 0, 0, 46, 18, ["g", "s", "c", "m", "a"], bK.ba());
        z.lE(this, new z.He(5, 1))
    };
    var bK = function () {
    };
    var cK = function (a) {
        QJ.call(this, a, "s", 0, 50, 18, 18, "\\times \\div \\cdot \\pm \\mp \\ast \\star \\circ \\bullet \\oplus \\ominus \\oslash \\otimes \\odot \\dagger \\ddagger \\vee \\wedge \\cap \\cup \\aleph \\Re \\Im \\top \\bot \\infty \\partial \\forall \\exists \\neg \\angle \\triangle \\diamond".split(" "));
        z.lE(this, new z.He(7, 5))
    };
    var dK = function (a) {
        z.G.call(this);
        this.mO = a;
        this.MI = {};
        this.Ym = null;
        this.T = new z.xd(this);
        this.Ww = new z.td(300);
        this.T.g(this.Ww, "tick", this.QF)
    };
    var eK = function (a) {
        this.Lj = a || "";
        z.TD.call(this, "+equation")
    };
    var fK = function () {
        z.wA.call(this)
    };
    var gK = function () {
        z.wA.call(this)
    };
    var hK = function (a, b) {
        var c = z.ZA(a.F);
        return z.tf(c.Qb(), "LI") || NI(c, function (a) {
            return "LI" == a.tagName
        }) ? (a.F.execCommand(b.shiftKey ? "+outdent" : "+indent"), b.preventDefault(), !0) : !1
    };
    var iK = function (a) {
        z.wA.call(this);
        this.iS = a
    };
    var jK = function (a) {
        z.G.call(this);
        this.UM = a
    };
    var kK = function () {
        z.G.call(this);
        this.eS = 100;
        this.Sd = [];
        this.tk = [];
        this.Vt = []
    };
    var lK = function (a, b, c) {
        if (b.length) {
            var d = b.pop();
            c.push(d);
            a.Vt.push({type: b == a.Sd ? "before_undo" : "before_redo", uF: b == a.Sd ? d.WB : d.IA, state: d});
            1 == a.Vt.length && a.Jg();
            0 != b.length && 1 != c.length || a.dispatchEvent("state_change")
        }
    };
    var mK = function (a) {
        z.wA.call(this);
        a = a || new kK;
        this.BH && z.nd(this.BH);
        this.If = a;
        this.BH = z.F(this.If, "state_change", this.iO, !1, this);
        this.vj = {};
        this.Hn = {};
        this.GG = null;
        this.iN = (0, z.q)(this.ZU, this)
    };
    var nK = function (a, b) {
        var c = b.Ug, d, f;
        b.queryCommandValue("usinglorem") ? (d = "", f = null) : (d = b.m().innerHTML, f = new oK(b), f = f.isValid() ? f : null);
        var g = a.Hn[c];
        if (g) {
            if (g.Ni == d) return;
            if ("" == d || "" == g.Ni) {
                var h;
                h = b.iu(8, "", {});
                if (d == h && "" == g.Ni || g.Ni == h && "" == d) return
            }
            g.JA = d;
            g.DU = f;
            h = a.If;
            if (0 == h.Sd.length || !g.equals(h.Sd[h.Sd.length - 1])) {
                h.Sd.push(g);
                h.Sd.length > h.eS && h.Sd.shift();
                var k = h.tk.length;
                h.tk.length = 0;
                h.dispatchEvent({type: "state_added", state: g});
                (1 == h.Sd.length || k) && h.dispatchEvent("state_change")
            }
        }
        a.Hn[c] =
            new pK(c, d, f, a.iN)
    };
    var pK = function (a, b, c, d) {
        jK.call(this, !0);
        this.Pn = a;
        this.tJ = d;
        this.Ni = b;
        this.AK = c
    };
    var oK = function (a) {
        this.$d = a;
        var b = a.ib.Va();
        a = (a = z.ZA(a)) && a.cg() && a.Va() == b ? a : null;
        if (z.HF) {
            if (b = a, this.Zs = !1, b) {
                var c = z.Et(b), d = z.Gt(b);
                if (c && d) {
                    a = z.Ft(b);
                    var c = new sJ(c, this.$d.m()), f = z.Ht(b), d = new sJ(d, this.$d.m());
                    b.$g() ? (this.Ca = d, this.uB = f, this.Ba = c, this.px = a) : (this.Ca = c, this.uB = a, this.Ba = d, this.px = f);
                    this.Zs = !0
                }
            }
        } else z.GF && (b = a, this.Zs = !1, b && (a = b.Be(0).ce(), z.lf(this.$d.m(), a.parentElement()) && (b = this.$d.ib.ua().body.createTextRange(), b.moveToElementText(this.$d.m()), d = a.duplicate(), d.collapse(!0),
            d.setEndPoint("StartToStart", b), this.Ca = qK(d), a = a.duplicate(), a.setEndPoint("StartToStart", b), this.Ba = qK(a), this.Zs = !0)))
    };
    var qK = function (a) {
        var b = a.duplicate(), c = a.text, d = c.length;
        b.collapse(!0);
        b.moveEnd("character", d);
        for (var f, g = 10; (f = b.compareEndPoints("EndToEnd", a)) && (d -= f, b.moveEnd("character", -f), --g, 0 != g);) ;
        a = 0;
        for (b = c.indexOf("\n\r"); -1 != b;) ++a, b = c.indexOf("\n\r", b + 1);
        return d + a
    };
    var rK = function (a, b) {
        z.G.call(this);
        this.ga = new z.xd(this);
        this.$d = a;
        this.Eb = b;
        this.EA = [];
        z.bh(this.Eb, function (a) {
            a.mb && this.EA.push(sK(a.de()))
        }, this);
        this.Eb.Oe(!1);
        this.ga.g(this.$d, "cvc", this.NW).g(this.Eb, "action", this.dP)
    };
    var sK = function (a) {
        return a
    };
    var tK = function (a, b) {
        z.nz.call(this, a || z.pE.ba(), b)
    };
    var uK = function (a) {
        z.wA.call(this);
        this.uq = z.rm.tq + "/upload";
        z.Mb(this.J = {}, this.defaults, a || {})
    };
    var vK = function (a) {
        var b = z.xA(a),
            c = (0, window.$)('\x3cdiv class\x3d"editable-dropzone"\x3e\x3cdiv class\x3d"row"\x3e\x3cdiv class\x3d"cell"\x3e\x3cdiv\x3e拖拽至此处上传\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        b.bz(c[0], a.F.m());
        return c
    };
    var wK = function (a) {
        var b = z.xA(a), c = b.B("IMG", {"class": "", style: "display:block", src: z.rm.wB + "/img/spinner2.gif"}),
            d = z.ZA(a.F);
        d && z.Zu(d) && z.lf(a.F.m(), d.Qb()) ? d.Bi(c) : z.Hu(a.F.Ha) ? z.cf(a.F.m(), c, 0) : a.F.m().appendChild(c);
        z.C || (z.Qu(c, !1), b.Va().focus());
        z.aB(a.F);
        return (0, window.$)(c)
    };
    var xK = function (a, b) {
        var c = [{display: "none"}, {
            display: "table",
            width: a.tC.width(),
            height: a.tC.height(),
            "background-color": "rgba(255, 255, 255, 0.5)"
        }];
        c[2] = window.$.extend({}, c[1], {"background-color": "rgba(245, 245, 245, 0.5)"});
        a.oL.css(c[b])
    };
    var yK = function (a, b) {
        var c = new window.FormData;
        c.append("via", "xhr2");
        c.append("upload_file", b);
        var d;
        d = window.$.ajaxSettings.xhr();
        d.withCredentials = !0;
        var f = window.$.ajax({
            url: a.uq, data: c, processData: !1, contentType: !1, xhr: function () {
                return d
            }, type: "POST"
        }).done(function (a) {
            "string" === window.$.type(a) && (a = JSON.parse(a));
            if (1 === a.code) z.X.message(a.msg); else {
                var b = new window.Image;
                b.src = a.msg[0];
                b.setAttribute("originImgSrc", b.src.replace("_m.jpg", "_r.jpg"));
                b.setAttribute("data-rawWidth", a.msg[1]);
                b.setAttribute("data-rawHeight", a.msg[2]);
                f.DC.after(b)
            }
        }).fail(function () {
            z.X.message("上传失败！\x3e_\x3c")
        }).always(function () {
            f.DC.remove()
        });
        f.DC = wK(a)
    };
    var zK = function () {
        z.wA.call(this)
    };
    var AK = function (a) {
        return a && "BR" === a.tagName
    };
    var BK = function (a, b) {
        function c(a, b) {
            return {iB: a, YH: b}
        }

        z.D && (a.normalize(), b = z.vu());
        var d = CK(b);
        if (!d) return c(!1, null);
        if (z.Hu(a)) return c(!0, a);
        for (var f = d; f !== a;) {
            if (z.Gu(f)) return c(!1, null);
            f = f.parentNode
        }
        if (AK(d) && AK(d.previousSibling)) return c(!0, d);
        d = b.Qb();
        return !d || 1 !== d.nodeType || d.childNodes.length && !z.Hu(d) ? c(!1, null) : c(!0, d)
    };
    var CK = function (a) {
        var b = a.la(), c = a.La();
        a = a.sc();
        var d = a.childNodes.length;
        3 !== b.nodeType && d && (b = a.childNodes[c === d ? d - 1 : c]);
        return b
    };
    var DK = function (a) {
        z.R.call(this);
        z.Mb(this.J = {}, this.defaults, a || {});
        this.me = null
    };
    var EK = function (a) {
        var b = z.ia(a);
        a = b.next().value;
        b = b.next().value;
        return {label: a, value: b, toString: z.ib(a)}
    };
    var FK = function (a) {
        var b = z.qb(GK, function (b) {
            var d = z.ia(b);
            b = d.next().value;
            d = d.next().value;
            return b === a || d === a
        });
        return b && EK(b)
    };
    var HK = function (a, b, c) {
        var d = a.J, f = {}, g = new z.hs(IK, !1), h = new z.Ls(c, f);
        c = new z.ys(null, null, !1);
        g.Ci = function (a) {
            return function (b, c, d) {
                (0, z.ab)(b) ? a.apply(this, arguments) : d(b, IK)
            }
        }(g.Ci);
        f.td = function (b, c, f) {
            b = b.data;
            b.value === a.me && (z.W.add(f, d.PD), f.appendChild(z.O("i", "icon " + d.PD)));
            f.appendChild(window.document.createTextNode(b.toString()))
        };
        f = new z.ks(g, h, c);
        c.aa = f;
        c.Uk(b);
        return f
    };
    var JK = function (a, b, c) {
        var d = a.J, f = a.v(), g = HK(a, b, c);
        g.am = 20;
        f.g(g, "suggestionsupdate", function () {
            g.ag(g.Uc + 0)
        }).g(g, "update", function (a) {
            this.eA(a.Di)
        }).g(g, "dismiss", function () {
            this.Hi(!0)
        });
        b = g.M;
        b.className = d.OR;
        b.ph = d.VT;
        b.Lv = d.Cg;
        a.aa = g
    };
    var KK = function (a) {
        z.wA.call(this);
        z.Mb(this.J = {}, this.defaults, a || {});
        this.xx = this.Eb = null
    };
    var LK = function (a) {
        return "P" === a.tagName
    };
    var MK = function (a) {
        return 3 === a.nodeType
    };
    var NK = function (a) {
        return a && "PRE" === a.tagName
    };
    var OK = function (a) {
        var b, c = new z.xx(NK, !1, null, a), d = z.O("div", {style: "display:none"});
        z.hx(c, new z.pg(4, 0, 0, 0));
        z.ux(c, new z.pg(4, 0, 0, 0));
        c.Sp = 150;
        c.no = 100;
        c.sh(d);
        c.className = "hc-lang-select";
        z.F(c, "beforeshow", function (a) {
            b = a.target.anchor;
            c.setPosition(new z.ex(b, 1));
            if (b.lang) {
                a = f;
                var d = FK(b.lang);
                d && a.Ea(d.value);
                f.Hi(!0)
            } else f.wk("选择语言")
        });
        z.F(c, "beforehide", function (c) {
            b = null;
            f.Ea(null);
            if ((c = c.target) && a.contains(c) && NK(c)) return !1
        });
        var f = new DK;
        f.render(d);
        z.F(f, "change", function (a) {
            b &&
            (b.lang = a.UT.value, c.G(!1))
        });
        return {
            Xx: z.ib(c), yY: z.ib(f), H: function () {
                c.H();
                f.H()
            }
        }
    };
    var PK = function (a) {
        function b(a) {
            return z.A(f, a)
        }

        function c() {
            var a = window.document.createTextNode("\n");
            f.push(a);
            return a
        }

        var d = window.document.createElement("div");
        d.innerHTML = a;
        var f = [], g = z.ep(b);
        a = z.Jo(d, II);
        z.y(a, function (a) {
            a.lastChild && "BR" === a.lastChild.tagName && a.removeChild(a.lastChild);
            a.firstChild || a.appendChild(window.document.createTextNode(""));
            a.insertBefore(c(), a.firstChild);
            a.appendChild(c())
        });
        a = z.vb(d.getElementsByTagName("br"));
        z.y(a, function (a) {
            a !== a.parentNode.lastChild && z.Po(window.document.createTextNode("\n"),
                a)
        });
        d = z.Jo(d, MK);
        d = z.hp(function (a) {
            return z.mb(a, function (c, d) {
                var f = a[d - 1];
                return !f || !(b(f) && b(c))
            })
        }, function (a) {
            var b = z.cp(a, g);
            return -1 !== b ? a.slice(0, b + 1) : a
        }, function (a) {
            var b = z.rb(a, g);
            return -1 !== b ? a.slice(b) : a
        })(d);
        return z.nb(d, function (a) {
            return a.nodeValue
        }).join("").replace(/\xa0/g, " ")
    };
    var QK = function (a, b) {
        a.Eb && a.xx && z.bh(a.Eb, function (a) {
            a instanceof z.sE && a.Wa(!b || z.A(this.xx, a.de()))
        }, a)
    };
    var RK = function (a, b, c) {
        for (a = a.F.Ha; b !== a;) {
            if (c(b)) return b;
            b = b.parentNode
        }
    };
    var SK = function (a) {
        var b, c = z.vu();
        c && a.F.Ha.contains(c.Qb()) ? (b = c.Z(), a = (b = RK(a, b, NK)) ? "1" : "2") : a = "0";
        return {state: a, hu: c, code: b}
    };
    var TK = function (a, b) {
        var c = window.document.createTextNode(b);
        a.Bi(c);
        z.Qu(c)
    };
    var UK = function (a, b, c) {
        a.An("i", function (a, f) {
            b.Bi(a);
            a = f();
            c = z.La(c);
            z.Po(window.document.createTextNode(c), a)
        })
    };
    var VK = function (a, b) {
        for (var c = a, d = []; c && c !== b;) d.push([c.parentNode.childNodes.length, z.lb(c.parentNode.childNodes, c)]), c = c.parentNode;
        return d
    };
    var WK = function (a) {
        var b = SK(a);
        a = b.hu;
        var c = b.code;
        if ("1" === b.state) {
            var b = function (a, b) {
                return b === a.length || XK && b === a.length - 1 && "\n" === a.slice(-1)
            }, d = a.la(), f = VK(d, c), f = !f.length || z.$n(f, function (a) {
                return a[0] === a[1] + 1
            }), g = MK(d);
            f && (!g || g && b(d.nodeValue, a.La())) && YK(c)
        }
    };
    var YK = function (a) {
        z.Gu(a) || z.bf(window.document.createElement("br"), a)
    };
    var ZK = function (a, b) {
        a.An("i", function (a, d) {
            b.Bi(a);
            (0, window.setTimeout)(function () {
                var b = window.document.createTextNode("\r");
                a = d();
                z.Po(b, a);
                z.Qu(b)
            })
        })
    };
    var $K = function (a, b, c) {
        var d = a.J, f;
        b.yf();
        var g = aL(a, b);
        g ? (f = window.document.createElement("PRE"), g.parentNode.insertBefore(f, g)) : a.An("PRE", function (a, c) {
            b.insertNode(a);
            f = c()
        });
        !c && z.C && (c = " ");
        f.lang = d.$N;
        z.mf(f, c);
        z.Hu(f) ? z.Pu(f.firstChild) : z.Qu(f.lastChild);
        YK(f)
    };
    var aL = function (a, b) {
        function c(a) {
            return a.parentNode.insertBefore(window.document.createTextNode(""), a)
        }

        var d = z.Vu(b, !0), f = d.node, g, h = a.F.Ha, k = RK(a, f, z.fp(II, z.ep(LK))) || h;
        if (MK(f)) {
            var m = f.parentNode;
            !f.nodeValue && m !== h && z.Hu(m) ? (g = c(m), f = c(g), m.parentNode.removeChild(m)) : g = z.C && d.offset === f.length ? z.bf(window.document.createTextNode(""), f) : f.splitText(d.offset)
        } else "BR" === f.tagName && (g = f, f = c(f));
        return g ? (d = HI(f, g, k), f = d.firstChild, z.Ze(k, d.childNodes), f) : null
    };
    var bL = function () {
        z.wA.call(this);
        this.ST = null
    };
    var cL = function (a) {
        a.push("\x3cbr\x3e")
    };
    var dL = function (a) {
        if (!z.ZA(a.F).isCollapsed()) {
            var b = a.ST || (0, z.q)(a.lJ, a);
            eL(a, b);
            z.xA(a).ua().execCommand("RemoveFormat", !1, void 0);
            z.SF && eL(a, function (a) {
                var b = z.E("528") ? /&nbsp;/g : /\u00A0/g;
                return a.replace(b, " ")
            })
        }
    };
    var fL = function (a, b) {
        for (var c = a.F.m(); b && b != c;) {
            if ("TABLE" == b.tagName) return b;
            b = b.parentNode
        }
        return null
    };
    var eL = function (a, b) {
        var c = z.ZA(a.F);
        if (!(1 < c.Fj())) {
            if (z.B || z.Gc) {
                var d = EI(c, a.F.m()), f = fL(a, d.Z()), g = fL(a, d.la());
                if (f || g) {
                    if (f == g) return;
                    var h, k = c;
                    h = f;
                    var c = g, d = new z.av(k), m = k.Z(), n = k.va(), r = k.la(), k = k.La(), w = z.xA(a);
                    if (h) {
                        var H = w.createTextNode("");
                        z.bf(H, h);
                        m = H;
                        n = 0
                    }
                    c && (H = w.createTextNode(""), z.af(H, c), r = H, k = 0);
                    z.gu(m, n, r, k).select();
                    h = d;
                    f || (c = z.P(z.zt(h, !0)), a.tB = c);
                    g || (c = z.P(z.zt(h, !1)), a.ox = c);
                    c = z.ZA(a.F);
                    d = EI(c, a.F.m())
                }
                d.select();
                c = d
            }
            m = c;
            c = z.xA(a).B("DIV");
            d = m.ce();
            z.HF ? c.appendChild(d.cloneContents()) :
                z.GF && (n = m.Id(), n = n.replace(/\r\n/g, "\r"), r = n.length, m = r - z.lp(n).length, n = r - z.kp(n).length, d.moveStart("character", m), d.moveEnd("character", -n), m = d.htmlText, "Formatted" == d.queryCommandValue("formatBlock") && (m = z.Ma(d.htmlText)), c.innerHTML = m);
            m = b(c.innerHTML);
            w = z.ZA(a.F);
            c = z.xA(a);
            n = z.jp();
            d = z.jp();
            m = '\x3cspan id\x3d"' + n + '"\x3e\x3c/span\x3e' + m + '\x3cspan id\x3d"' + d + '"\x3e\x3c/span\x3e';
            k = z.jp();
            r = '\x3cspan id\x3d"' + k + '"\x3e\x3c/span\x3e';
            if (z.GF) {
                H = w.Be(0).ce();
                H.pasteHTML(r);
                for (var K; (K = H.parentElement()) &&
                z.Hu(K) && !z.Ku(K);) {
                    w = K.nodeName;
                    if ("TD" == w || "TR" == w || "TH" == w) break;
                    z.P(K)
                }
                H.pasteHTML(m);
                (k = c.m(k)) && z.P(k)
            } else if (z.HF) {
                c.ua().execCommand("insertImage", !1, k);
                w = new RegExp("\x3c[^\x3c]*" + k + "[^\x3e]*\x3e");
                K = z.ZA(a.F).Qb();
                3 == K.nodeType && (K = K.parentNode);
                for (; !w.test(K.innerHTML);) K = K.parentNode;
                if (z.B) z.Lu(K, K.innerHTML.replace(w, m)); else {
                    z.Lu(K, K.innerHTML.replace(w, r));
                    for (K = k = c.m(k); (K = k.parentNode) && z.Hu(K) && !z.Ku(K);) {
                        w = K.nodeName;
                        if ("TD" == w || "TR" == w || "TH" == w) break;
                        z.bf(k, K);
                        z.P(K)
                    }
                    z.Lu(K,
                        K.innerHTML.replace(new RegExp(r, "i"), m))
                }
            }
            K = c.m(n);
            c = c.m(d);
            z.gu(K, 0, c, c.childNodes.length).select();
            z.P(K);
            z.P(c);
            (z.B || z.Gc) && h && (c = z.ZA(a.F), K = a.F.m(), a.tB && (K.insertBefore(a.tB, K.firstChild), a.tB = null), a.ox && (K.appendChild(a.ox), a.ox = null), K = null, d = z.zt(h, !0), m = z.zt(h, !1), d && m && (K = z.gu(d, 0, m, 0)), f = f ? K : c, g = g ? K : c, xI(f.Z(), f.va(), g.la(), g.La()).select(), h.H())
        }
    };
    var gL = function () {
        bL.call(this)
    };
    var hL = function (a) {
        z.OD.call(this, a);
        this.T = new z.xd(this)
    };
    var iL = function (a, b, c, d, f) {
        z.Lc.call(this, "ok");
        this.XW = a;
        this.WW = b;
        this.SK = f;
        this.UV = c;
        this.poster = d
    };
    var jL = function (a, b) {
        b = z.sr(b);
        if (!b) return !1;
        var c = b.match(/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi);
        c || (z.Q(a.gh, !1), a.ff.innerHTML = "我们无法识别你输入的视频页地址", z.Q(a.ff, !0));
        return c
    };
    var kL = function () {
        z.TD.call(this, lL);
        this.T = new z.xd(this)
    };
    var mL = function () {
    };
    var nL = function (a, b) {
        var c = [];
        b.enableFullScreen && c.push("toggleFullScreen");
        c.push("+bold", "+italic", "+underline", new tK, "+blockquote", "+code", "+insertOrderedList", "+insertUnorderedList", "+equation");
        b.canUploadMedia_ && c.push(new tK, "image", lL);
        b.useRemoveFormat_ && c.push(new tK, "+removeFormat");
        for (var d = z.J(a), f = [], g = 0, h; h = c[g]; g++) {
            if (z.pa(h)) {
                var k = void 0;
                if (h = z.kH[h]) {
                    var k = h.factory || z.YE, m = h.Aa, n = h.R, r = h.caption, w = h.Pa, H = d || z.J(),
                        k = k(m, n, r, w, null, H);
                    h.mb && (k.mb = !0)
                }
                h = k
            }
            h && f.push(h)
        }
        c = z.J(a);
        c = new zI(z.qE.ba(), z.zF, c);
        d = z.Mg(a);
        c.uh(d);
        c.Oe(!1);
        for (g = 0; h = f[g]; g++) h.Tb(32, !1), h.uh(d), c.L(h, !0);
        c.render(a);
        return c
    };
    var oL = function (a, b) {
        var c = a.m(), d = new z.vB;
        d.w(c);
        var f = z.O("div", {style: "display:none", className: "tr-spinner spinner-gray"});
        b.m().appendChild(f);
        d.on("willScrape", function () {
            z.Q(f, !0)
        }).on("didScrape", function () {
            z.Q(f, !1)
        });
        z.Ac(a, d)
    };
    z.ix.prototype.Yx = z.Fn(37, function () {
        return this.m().innerHTML
    });
    z.Tt.prototype.cg = z.Fn(35, function () {
        var a = this.Or.body.createTextRange();
        a.moveToElementText(this.Or.body);
        return this.Fg(new z.Tt(a, this.Or), !0)
    });
    z.eu.prototype.cg = z.Fn(34, function () {
        return (!this.xa || vI(this.xa)) && (!this.ta || vI(this.ta)) && (!(z.C && !(9 <= z.Tg)) || z.iu(this).cg())
    });
    z.ku.prototype.cg = z.Fn(33, function () {
        var a = !1;
        try {
            a = z.$n(this.gi(), function (a) {
                return z.C ? !!a.parentNode : z.lf(a.ownerDocument.body, a)
            })
        } catch (b) {
        }
        return a
    });
    z.qu.prototype.cg = z.Fn(32, function () {
        return z.$n(z.Dt(this), function (a) {
            return a.cg()
        })
    });
    z.At.prototype.Vp = z.Fn(31, function () {
        var a = this.Jc ? -1 : 1;
        this.Ub == a && (this.Ub = -1 * a, this.depth += this.Ub * (this.Jc ? -1 : 1))
    });
    z.Kt.prototype.Vp = z.Fn(30, function () {
        z.Kt.o.Vp.apply(this);
        if (z.lf(this.node, this.ta)) throw z.Od;
    });
    z.Sp.prototype.Hi = z.Fn(29, function (a, b) {
        var c = a.qd(), d = this.U() + "-collapse-left", f = this.U() + "-collapse-right";
        a.rj(c ? f : d, !!(b & 1));
        a.rj(c ? d : f, !!(b & 2))
    });
    z.bq.prototype.Hi = z.Fn(28, function (a) {
        this.M.Hi(this, a)
    });
    z.Bj.prototype.gs = z.Fn(24, function () {
        z.Dj(this);
        return this.oc
    });
    z.OD.prototype.gs = z.Fn(23, function (a) {
        return this.cf.pc.kf(a)
    });
    z.$c.prototype.El = z.Fn(2, function (a, b) {
        var c = this.ic[a.toString()], d = [];
        if (c) for (var f = 0; f < c.length; ++f) {
            var g = c[f];
            g.dl == b && d.push(g)
        }
        return d
    });
    z.G.prototype.El = z.Fn(1, function (a, b) {
        return this.Zd.El(String(a), b)
    });
    z.x(zI, z.Yr);
    zI.prototype.ee = function (a) {
        zI.o.ee.call(this, a);
        this.vf || z.bs(this)
    };
    var GI = {text: !0, file: !0, url: !0}, JI = {
        ADDRESS: !0,
        ARTICLE: !0,
        ASIDE: !0,
        BLOCKQUOTE: !0,
        BODY: !0,
        CAPTION: !0,
        CENTER: !0,
        COL: !0,
        COLGROUP: !0,
        DETAILS: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DD: !0,
        DT: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        ISINDEX: !0,
        OL: !0,
        LI: !0,
        MAP: !0,
        MENU: !0,
        NAV: !0,
        OPTGROUP: !0,
        OPTION: !0,
        P: !0,
        PRE: !0,
        SECTION: !0,
        SUMMARY: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TR: !0,
        UL: !0
    }, lL, pL, TI = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
    z.x(UI, z.wA);
    UI.prototype.md = function () {
        return "BTF"
    };
    var qL = {
        IX: "+link",
        qX: "+createLink",
        yX: "+formatBlock",
        CX: "+indent",
        PX: "+outdent",
        WX: "+strikeThrough",
        AX: "+insertHorizontalRule",
        XX: "+subscript",
        YX: "+superscript",
        aY: "+underline",
        mX: "+bold",
        DX: "+italic",
        xX: "+fontSize",
        wX: "+fontName",
        vX: "+foreColor",
        gX: "+backColor",
        OX: "+insertOrderedList",
        eY: "+insertUnorderedList",
        EX: "+justifyCenter",
        FX: "+justifyFull",
        HX: "+justifyRight",
        GX: "+justifyLeft"
    }, rL = z.$o(qL);
    UI.prototype.He = function (a) {
        return a in rL
    };
    var sL = ["+createLink"];
    z.e = UI.prototype;
    z.e.aH = function (a) {
        return z.A(sL, a)
    };
    z.e.Ae = function () {
        return z.ZA(this.F)
    };
    z.e.gf = function (a, b, c, d) {
        var f, g, h, k, m, n = b;
        switch (a) {
            case "+backColor":
                if (null !== n) if (z.PF) {
                    a = n;
                    g = z.ZA(this.F);
                    var r, w;
                    g && g.isCollapsed() && (r = z.xA(this).createTextNode(z.B ? " " : ""), h = g.Z(), w = 1 == h.nodeType ? h : h.parentNode, "" == w.innerHTML ? (w.style.textIndent = "-10000px", w.appendChild(r)) : (w = z.xA(this).B("SPAN", {style: "text-indent:-10000px"}, r), g.Bi(w)), z.yu(r).select());
                    aJ(this, "hiliteColor", a, !1, !0);
                    r && (z.B && (r.data = ""), w.style.textIndent = "")
                } else z.ug ? aJ(this, "hiliteColor", n) : aJ(this, a, n);
                break;
            case "+createLink":
                m =
                    kJ(this, b, c, d);
                break;
            case "+link":
                a:{
                    m = n;
                    this.F.tf || z.xA(this).Va().focus();
                    g = (a = this.Ae()) && a.Qb();
                    if ((g = z.tf(g, "A")) && z.uf(g, z.Ku)) z.df(g); else if (m = kJ(this, a, "/", m)) {
                        if (!this.F.execCommand("link", m)) if (h = this.F.Tk.prompt(z.wG, "http://")) a = PI(m) || h, g = m.re, g.href = h, n = PI(m), a != n && (h = z.Du(g), h.tagName && "IMG" == h.tagName ? h.setAttribute("alt", a ? a : "") : (3 == h.nodeType && (h = h.parentNode), z.Io(h) != n && (h = g), z.$e(h), g = z.J(h), h.appendChild(g.createTextNode(a))), m.Vw = null), a = m.re, z.TF ? (g = a.nextSibling, g && 3 == g.nodeType &&
                        (z.Ja(g.data, " ") || z.Ja(g.data, " ")) || (g = z.J(a).createTextNode(" "), z.bf(g, a)), z.zu(g, 1).select()) : z.Qu(a, !1); else {
                            a = z.yu(m.re);
                            a = new z.av(a);
                            z.df(m.re);
                            for (m.re = null; m.Ax.length;) z.df(m.Ax.pop());
                            a.restore().select();
                            m = null;
                            break a
                        }
                        break a
                    }
                    m = null
                }
                break;
            case "+justifyCenter":
            case "+justifyFull":
            case "+justifyRight":
            case "+justifyLeft":
                aJ(this, a, null, !1, !0);
                z.B && aJ(this, a, null, !1, !0);
                z.OF && z.B || z.Pd(z.ZA(this.F), $I);
                break;
            default:
                z.C && "+formatBlock" == a && n && (n = "\x3c" + n + "\x3e");
                if ("+foreColor" == a && null ===
                    n) break;
                switch (a) {
                    case "+indent":
                    case "+outdent":
                        z.OF && (z.B && (g = !0), z.ug && (g = "+outdent" == a ? !VI(this).queryCommandEnabled("outdent") : !0));
                    case "+insertOrderedList":
                    case "+insertUnorderedList":
                        if (r = z.WF) r = VI(this), r = rJ(this, !0, r, a, void 0);
                        r ? h = "P" != this.F.queryCommandValue("+defaultTag") : z.XF || WI(this);
                        z.B && z.VF && !this.queryCommandValue(a) && (r = this.F.queryCommandValue("+defaultTag"), "P" == r || "DIV" == r ? r = !1 : (r = this.Ae(), r.isCollapsed() && 3 != r.sc().nodeType ? (f = z.xA(this).createTextNode(" "), r.insertNode(f,
                            !1), z.yu(f).select(), r = !0) : r = !1), k |= r);
                    case "+formatBlock":
                        f = !!this.F.Rb.Bidi;
                        break;
                    case "+subscript":
                    case "+superscript":
                        z.UF && !this.queryCommandValue(a) && (r = "+subscript" == a ? "+superscript" : "+subscript", w = ZI(r), this.queryCommandValue(r) || VI(this).execCommand(w, !1, null), VI(this).execCommand(w, !1, null));
                        break;
                    case "+underline":
                    case "+bold":
                    case "+italic":
                        g = z.B && z.OF && this.queryCommandValue(a);
                        break;
                    case "+foreColor":
                    case "+fontName":
                        g = z.OF && z.B
                }
                aJ(this, a, n, f, !!g);
                k && VI(this).execCommand("Delete", !1,
                    !0);
                h && VI(this).execCommand("FormatBlock", !1, "\x3cdiv\x3e")
        }
        z.B && !this.F.Wg && z.xA(this).Va().focus();
        return m
    };
    z.e.queryCommandValue = function (a) {
        var b;
        switch (a) {
            case "+link":
                return a = (a = this.Ae()) && a.Qb(), a = z.tf(a, "A"), !!a && !!z.uf(a, z.Ku);
            case "+justifyCenter":
            case "+justifyFull":
            case "+justifyRight":
            case "+justifyLeft":
                return oJ(this, a);
            case "+formatBlock":
                return nJ(z.ZA(this.F));
            case "+indent":
            case "+outdent":
            case "+insertHorizontalRule":
                return !1;
            case "+fontSize":
            case "+fontName":
            case "+foreColor":
            case "+backColor":
                return this.du(VI(this), a, z.OF && z.B);
            case "+underline":
            case "+bold":
            case "+italic":
                b = z.OF &&
                    z.B;
            default:
                var c = VI(this);
                return rJ(this, !0, c, a, b)
        }
    };
    z.e.TI = function (a) {
        z.MF && a.match(/^\s*<script/i) && (a = "\x26nbsp;" + a);
        z.NF && (a = a.replace(/<(\/?)strong([^\w])/gi, "\x3c$1b$2"), a = a.replace(/<(\/?)em([^\w])/gi, "\x3c$1i$2"));
        return a
    };
    z.e.xN = function (a) {
        a = a.getElementsByTagName("IMG");
        for (var b = 0, c; c = a[b]; b++) if (z.C) {
            c.removeAttribute("tabIndex");
            c.removeAttribute("tabIndexSet");
            var d = c;
            null !== d && "removeAttribute" in d && d.removeAttribute(z.va);
            try {
                delete d[z.va]
            } catch (f) {
            }
            c.tS && (c.tabIndex = c.tS)
        }
    };
    z.e.yN = function (a) {
        if (z.D) {
            for (var b = z.Le(this.F.ib.Ka, "HEAD", void 0, void 0), c = [], d = b.length, f = 1; f < d; ++f) for (var g = b[f].getElementsByTagName("STYLE"), h = g.length, k = 0; k < h; ++k) c.push(g[k].outerHTML);
            return c.join("") + a
        }
        return a
    };
    z.e.vs = function (a, b, c) {
        if (!c) return !1;
        var d;
        switch (b) {
            case "b":
                d = "+bold";
                break;
            case "i":
                d = "+italic";
                break;
            case "u":
                d = "+underline";
                break;
            case "s":
                return !0
        }
        return d ? (this.F.execCommand(d), !0) : !1
    };
    var XI = z.C ? /<br([^\/>]*)\/?>/gi : /<br([^\/>]*)\/?>(?!<\/(div|p)>)/gi, cJ = {
            indent: 1,
            outdent: 1,
            insertOrderedList: 1,
            insertUnorderedList: 1,
            justifyCenter: 1,
            justifyFull: 1,
            justifyRight: 1,
            justifyLeft: 1,
            ltr: 1,
            rtl: 1
        }, bJ = {insertOrderedList: 1, insertUnorderedList: 1}, mJ = {1: 1, a: 1, A: 1, i: 1, I: 1},
        lJ = {disc: 1, circle: 1, square: 1},
        dJ = {justifyCenter: 1, justifyFull: 1, justifyRight: 1, justifyLeft: 1, formatBlock: 1},
        eJ = {insertOrderedList: 1, insertUnorderedList: 1}, qJ = {center: 1, justify: 1, right: 1, left: 1};
    UI.prototype.du = function (a, b, c) {
        return rJ(this, !1, a, b, c)
    };
    z.x(sJ, z.xc);
    sJ.prototype.toString = function () {
        for (var a = [], b, c = 0; b = this.Dt[c]; c++) a.push(this.It[c] + "," + b);
        return a.join("\n")
    };
    sJ.prototype.D = function () {
        delete this.It;
        delete this.Dt
    };
    z.x(uJ, z.wA);
    z.e = uJ.prototype;
    z.e.tag = "DIV";
    z.e.md = function () {
        return "EnterHandler"
    };
    z.e.enable = function (a) {
        uJ.o.enable.call(this, a);
        !z.ZF || "P" != this.tag && "DIV" != this.tag || z.xA(this).ua().execCommand("opera-defaultBlock", !1, this.tag)
    };
    z.e.TI = function (a) {
        return !a || z.op(a) ? z.MF ? this.XO() : "" : a
    };
    z.e.XO = z.ib("\x3cbr\x3e");
    z.e.SP = function (a) {
        if (z.B && this.F.Wg) return !1;
        if (8 == a.keyCode) {
            var b = z.ZA(this.F), c = this.F.m(), b = b && b.Z();
            c.firstChild == b && z.Hu(b) && (a.preventDefault(), a.stopPropagation())
        } else if (13 == a.keyCode) if (z.B) {
            if (!a.shiftKey) {
                var c = z.ZA(this.F), b = !c || c.isCollapsed(), d = xJ(this),
                    f = this.F.execCommand("+splitBlockquote", d);
                f && (a.preventDefault(), a.stopPropagation());
                z.HF || d.removeNode(!0);
                f || this.FP(a, b, c)
            }
        } else {
            this.F.ci();
            c = xJ(this);
            if (b = !!this.F.execCommand("+splitBlockquote", c)) a.preventDefault(), a.stopPropagation();
            z.HF || c.removeNode(!0);
            z.D && this.GP(a);
            if (z.C || z.ug) vJ(this); else if (!b && z.D) {
                if (b = c = z.ZA(this.F)) a:{
                    for (b = c.Qb(); b; b = b.parentNode) if (II(b)) {
                        b = "BLOCKQUOTE" == b.tagName;
                        break a
                    }
                    b = !1
                }
                if (b) {
                    b = z.xA(this);
                    d = b.createElement("BR");
                    c.insertNode(d, !0);
                    if (c = II(d.parentNode)) {
                        for (c = d.nextSibling; c && 3 == c.nodeType && !c.nodeValue;) c = c.nextSibling;
                        c = !c
                    }
                    c && z.af(b.createElement("BR"), d);
                    z.Qu(d, !1);
                    a.preventDefault()
                }
            }
            this.F.df()
        } else z.B && 46 == a.keyCode && (b = z.ZA(this.F), b.isCollapsed() && (c = b.la(), 1 == c.nodeType && (b = c.childNodes[b.La()]) &&
        "BR" == b.tagName && (d = z.Eu(z.Yo(new z.Bu(b, !1, !0), z.Fu)), f = b.nextSibling, c.removeChild(b), a.preventDefault(), f && II(f) && (d && "BR" != d.tagName && !II(d) ? z.zu(d, z.Ju(d)).select() : (a = z.Du(f), z.zu(a, 0).select())))));
        return !1
    };
    z.e.us = function (a) {
        if (z.B && this.F.Wg) return !1;
        (z.C || z.ug) && 13 == a.keyCode && vJ(this, !0);
        return !1
    };
    z.e.GP = z.p;
    z.e.FP = z.p;
    var wJ = {LI: !0, DIV: !0, H1: !0, H2: !0, H3: !0, H4: !0, H5: !0, H6: !0};
    var tL = new yJ, uL = ["click", z.B ? "keypress" : "keydown", "keyup"];
    yJ.prototype.g = function (a, b, c, d, f) {
        function g(a) {
            var c = z.cd(b), f = z.jf(a.target) ? a.target.getAttribute("role") || null : null;
            "click" == a.type && z.Tc(a) ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != f && "tab" != f || (c.call(d, a), a.preventDefault()) : (a.type = "keypress", c.call(d, a))
        }

        g.$j = b;
        g.vu = d;
        f ? f.g(a, uL, g, c) : z.F(a, uL, g, c)
    };
    yJ.prototype.qa = function (a, b, c, d, f) {
        for (var g, h = 0; g = uL[h]; h++) {
            var k;
            var m = a;
            k = g;
            var n = !!c;
            k = z.Vc(m) ? m.El(k, n) : m ? (m = z.ed(m)) ? m.El(k, n) : [] : [];
            for (m = 0; n = k[m]; m++) if (n.listener.$j == b && n.listener.vu == d) {
                f ? f.qa(a, g, n.listener, c, d) : z.md(a, g, n.listener, c, d);
                break
            }
        }
    };
    z.x(zJ, z.G);
    zJ.prototype.Rg = function () {
        return this.vc ? this.vc.clone() : null
    };
    zJ.prototype.D = function () {
        zJ.o.D.call(this);
        this.yz && (z.nd(this.yz), this.yz = null);
        this.vc = this.gv = null
    };
    zJ.prototype.sy = function () {
        var a = z.Oe(this.gv);
        z.Ro(a, this.vc) || (this.vc = a, this.dispatchEvent("resize"))
    };
    z.x(AJ, z.G);
    var BJ = "tr_bubble";
    z.e = AJ.prototype;
    z.e.D = function () {
        AJ.o.D.call(this);
        z.P(this.Cd);
        this.Cd = null;
        this.T.H();
        this.T = null;
        this.iC.H();
        this.iC = null
    };
    z.e.S = function () {
        return this.nn
    };
    z.e.Qb = function () {
        return this.Cd
    };
    z.e.AQ = function () {
        this.V() && this.ha()
    };
    z.e.vm = function (a) {
        this.ng.vm(a)
    };
    z.e.UD = function () {
        this.ng.G(!1)
    };
    z.e.iQ = function () {
        for (var a in this.sd) z.P(this.sd[a].element);
        this.sd = {};
        z.jj(this.Cd, "tr_multi_bubble");
        this.T.removeAll();
        this.dispatchEvent("hide")
    };
    z.e.V = function () {
        return this.ng.V()
    };
    var vL = z.C ? 4 : 2, EJ = new z.pg(vL, 0, vL, 0);
    AJ.prototype.ha = function () {
        var a = null, b = !0, c;
        for (c in this.sd) var d = this.sd[c], a = d.FB, b = b && d.pU;
        c = 496;
        a = z.Mg(this.Cd) != z.Mg(a);
        b && (c = DJ(this, a ? 7 : 5, 4, 9));
        c & 496 && (c = DJ(this, a ? 6 : 4, 5, 9));
        c & 496 && DJ(this, a ? 7 : 5, 4, 5)
    };
    AJ.prototype.$O = z.Gl;
    FJ.prototype.S = function () {
        return this.element.lastChild
    };
    z.x(GJ, z.wA);
    var JJ = {};
    z.e = GJ.prototype;
    z.e.yi = null;
    z.e.oz = !1;
    z.e.md = z.ib("AbstractBubblePlugin");
    z.e.us = function () {
        this.V() && this.Kj();
        return !1
    };
    z.e.Kj = function (a, b) {
        var c;
        if (a) c = a.target; else if (b) c = b; else {
            var d = z.ZA(this.F);
            if (d) {
                var f = d.Z(), g = d.la(), h = d.va(), k = d.La();
                z.C && d.isCollapsed() && f != g && (d = z.zu(f, h));
                1 == f.nodeType && f == g && h == k - 1 && (f = f.childNodes[h], 1 == f.nodeType && (c = f))
            }
            c = c || d && d.Qb()
        }
        var m;
        a:{
            if (c) {
                if (d = c) d = "IMG" == c.nodeName && (!!c.getAttribute("eeimg") || z.gj(c, "ee_img"));
                if (h = d ? c : null) {
                    if (h != this.Pu || !this.yi) if (this.yi && KJ(this), c = IJ(this), !CJ(c, this.Qx())) {
                        this.Pu = h;
                        var f = this.Qx(), k = this.xF(), g = (0, z.q)(this.PN, this), n = this.JV(),
                            d = z.jp(), h = new FJ(c.da, d, f, k, h, !n);
                        c.sd[d] = h;
                        k = 0;
                        for (n = c.nn.childNodes.length - 1; k < n; k++) {
                            var r = c.nn.childNodes[k];
                            if (c.sd[r.id].type > f) {
                                m = r;
                                break
                            }
                        }
                        z.af(h.element, m || c.nn.lastChild);
                        g(h.S());
                        FI(h.element, c.T);
                        m = z.Zn(c.sd);
                        1 == m ? (c.T.g(c.SD, "click", c.UD).g(c.iC, "resize", c.AQ).g(c.ng, "hide", c.iQ), c.ng.G(!0), c.ha()) : 2 == m && z.hj(c.Cd, "tr_multi_bubble");
                        c.ha();
                        this.yi = d;
                        this.fc.g(c, "hide", this.aG);
                        this.jg();
                        this.oz && this.fc.g(c.S(), "keydown", this.FS)
                    }
                    m = !1;
                    break a
                }
            }
            this.yi && KJ(this);
            m = !1
        }
        return m
    };
    z.e.disable = function (a) {
        if (a.$l == z.KA) {
            var b = JJ[a.id];
            b && (a == this.F && KJ(this), b.H(), delete JJ[a.id])
        }
    };
    z.e.Qx = function () {
        return ""
    };
    z.e.xF = function () {
        return ""
    };
    z.e.JV = z.El;
    z.e.jg = z.p;
    z.e.zN = z.p;
    z.e.aG = function () {
        this.yi = this.Pu = null;
        this.fc.removeAll();
        this.zN()
    };
    z.e.py = function (a) {
        if (this.oz && this.V() && 9 == a.keyCode && !a.shiftKey) {
            var b = IJ(this).S();
            if (b = z.N("tr_bubble_tabbable", b)) return b.focus(), a.preventDefault(), !0
        }
        return !1
    };
    z.e.FS = function (a) {
        if (this.V() && 9 == a.keyCode) {
            var b = IJ(this).S(), b = z.Qo("tr_bubble_tabbable", b);
            (a.shiftKey ? b[0] : z.kb(b)) == a.target && (this.F.focus(), a.preventDefault())
        }
    };
    z.e.V = function () {
        return !!this.yi
    };
    z.e.ha = function () {
        var a = IJ(this);
        a && a.ha()
    };
    z.e.Cr = function (a, b, c, d) {
        b = this.da.B("SPAN", {className: "tr_bubble_link"}, b);
        this.oz && (b.hasAttribute("tabindex") || b.setAttribute("tabindex", 0), z.hj(b, "tr_bubble_tabbable"));
        b.setAttribute("role", "link");
        d ? d.appendChild(b) : (d = this.da.m(a)) && z.Po(b, d);
        b.id = a;
        FI(b, this.fc);
        c && (a = this.fc, tL.g(b, c, void 0, a.ga || a, a));
        return b
    };
    z.x(MJ, GJ);
    var wL = z.u("Equation:"), xL = z.u("Edit"), yL = z.u("Remove");
    z.e = MJ.prototype;
    z.e.md = function () {
        return "EquationBubble"
    };
    z.e.PN = function (a) {
        a.appendChild(a.ownerDocument.createTextNode(wL + " "));
        this.Cr("ee_bubble_edit", xL, this.oO, a);
        a.appendChild(a.ownerDocument.createTextNode(wL + " - "));
        this.Cr("ee_remove_remove", yL, this.JU, a)
    };
    z.e.Qx = function () {
        return "IMG"
    };
    z.e.xF = function () {
        return z.u("Equation")
    };
    z.e.JU = function () {
        this.F.ci();
        z.P(this.Pu);
        KJ(this);
        this.F.df()
    };
    z.e.oO = function () {
        var a = this.Pu;
        KJ(this);
        this.F.execCommand("+equation", a)
    };
    z.x(NJ, z.Lc);
    NJ.prototype.type = "ok";
    z.x(OJ, z.Lc);
    z.x(PJ, z.R);
    PJ.prototype.Lj = "";
    PJ.prototype.G = function (a) {
        z.Q(this.m(), a)
    };
    z.x(QJ, z.jE);
    z.e = QJ.prototype;
    z.e.li = function () {
        return this.Xb
    };
    z.e.yl = function (a) {
        return 0 <= a && a < this.Xm.length ? this.Xm[a] : null
    };
    z.e.of = function (a) {
        QJ.o.of.call(this, a);
        this.lg.dispatchEvent(new SJ(zL, this))
    };
    z.e.Kl = function (a) {
        QJ.o.Kl.call(this, a);
        a.relatedTarget && !z.lf(this.m(), a.relatedTarget) && this.lg.Gr()
    };
    z.e.nd = function (a) {
        QJ.o.nd.call(this, a);
        a.relatedTarget && !z.lf(this.m(), a.relatedTarget) && this.lg.Ww.stop()
    };
    var zL = "a";
    SJ.prototype.Zx = function () {
        return this.bU
    };
    z.x(RJ, z.bE);
    z.la(RJ);
    RJ.prototype.U = function () {
        return "ee-palette"
    };
    z.x(TJ, PJ);
    z.e = TJ.prototype;
    z.e.lH = "";
    z.e.zw = 0;
    z.e.B = function () {
        var a = z.u("TeX 公式"), b = z.u("预览"), c = z.u("了解更多"), d = this.da,
            c = d.B("DIV", {style: "display: none;"}, d.B("SPAN", {"class": "ee-section-title ee-section-title-floating"}, a), this.Lj ? d.B("A", {
                id: "ee-section-learn-more",
                target: "_blank",
                href: this.Lj
            }, c) : null, d.B("DIV", {style: "clear: both;"}), a = this.cR = d.B("DIV", {style: "position: relative"}));
        this.lg.setActive("mn").render(a);
        a.appendChild(d.B("DIV", {style: "clear:both"}));
        var f = this.Ah = d.B("textarea", {"class": "ee-tex", dir: "ltr"});
        a.appendChild(f);
        a.appendChild(d.B("DIV", {"class": "ee-section-title"}, b));
        b = this.tU = d.B("DIV", {"class": "ee-preview-container"});
        a.appendChild(b);
        this.h = c
    };
    z.e.C = function () {
        this.jK = new z.vD(this.Ah);
        z.F(this.jK, "input", this.cG, !1, this);
        this.v().g(this.Ah, "keydown", this.cG);
        this.v().g(this.lg, zL, this.hQ)
    };
    z.e.G = function (a) {
        TJ.o.G.call(this, a);
        a && z.vd(this.KO, 0, this)
    };
    z.e.KO = function () {
        this.Ah.focus();
        z.ws(this.Ah, this.Ah.value.length)
    };
    z.e.cG = function () {
        this.zw++;
        z.vd((0, z.q)(this.pQ, this, this.zw), 500)
    };
    z.e.pQ = function (a) {
        a == this.zw && UJ(this)
    };
    z.e.hQ = function (a) {
        var b = a.Zx(), c = this.lg, d = c.Ym;
        a = this.Ah;
        if ("mn" == b.li()) {
            var f = b.Ta, f = -1 != f ? b.yl(f) : null;
            if (d != b && d.li() == f) {
                c.QF();
                return
            }
            f && (b = this.lg.setActive(f), b.m() || b.render(this.cR), b = b.m(), z.zg(b, 0, -b.clientHeight))
        } else {
            d = this.lg.Ym;
            f = d.yl(d.Ta);
            if (!f) return;
            z.vd((0, z.q)(this.lR, this, f + " "), 0)
        }
        a.focus()
    };
    z.e.lR = function (a) {
        var b = this.Ah, c = z.ts(b)[0], d = b.value, d = d.substring(0, c) + a + d.substring(c);
        b.value = d;
        z.ws(b, c + a.length);
        UJ(this)
    };
    z.e.Cl = function () {
        return this.Ah.value
    };
    z.e.cB = function (a) {
        this.Ah.value = a;
        UJ(this)
    };
    z.e.D = function () {
        this.jK.H();
        this.lg = null;
        TJ.o.D.call(this)
    };
    z.x(VJ, z.R);
    z.e = VJ.prototype;
    z.e.Bh = null;
    z.e.B = function () {
        VJ.o.B.call(this);
        this.Ar()
    };
    z.e.Ar = function () {
        var a = this.m();
        this.Bh = new TJ(this.eE, this.Lj, this.da);
        this.L(this.Bh);
        this.Bh.render(a);
        this.Bh.G(!0)
    };
    z.e.Y = function (a) {
        this.h = a;
        this.Ar()
    };
    z.e.Cl = function () {
        return this.Bh.Cl()
    };
    z.e.cB = function (a) {
        this.Bh.cB(a)
    };
    z.e.Yx = function () {
        var a = this.Cl(), b = LJ(a);
        return b ? '\x3cimg src\x3d"' + b + '" alt\x3d"' + z.Na(a) + '" class\x3d"ee_img tr_noresize" eeimg\x3d"1" style\x3d"vertical-align: middle"\x3e' : ""
    };
    z.e.isValid = function () {
        return 1024 < this.Cl().length
    };
    z.e.G = function (a) {
        this.Bh.G(a)
    };
    z.e.D = function () {
        this.Bh && this.Bh.H();
        this.eE = null;
        VJ.o.D.call(this)
    };
    z.x(WJ, z.OD);
    WJ.prototype.Lw = function () {
        var a = new z.PD(this), b = z.u("公式编辑器"), c = z.u("插入公式"), d = z.u("保存修改"), f = z.u("取消"),
            c = this.uj.Cl() ? d : c;
        z.QD(z.RD(a.Na(b).ia(this.uj.m()), f), c);
        return z.SD(a)
    };
    WJ.prototype.Cn = function () {
        if (this.uj.isValid()) return null;
        var a = this.uj.Yx();
        return new NJ(a)
    };
    WJ.prototype.Yz = function (a) {
        this.cI || (this.cI = this.gs("ok"));
        this.cI.disabled = !a.isValid
    };
    z.x(XJ, QJ);
    z.x(YJ, QJ);
    z.x(ZJ, QJ);
    z.x($J, QJ);
    z.x(aK, QJ);
    aK.prototype.G = function (a, b) {
        return aK.o.G.call(this, !0, b)
    };
    z.x(bK, RJ);
    z.la(bK);
    bK.prototype.U = function () {
        return "ee-menu-palette"
    };
    z.x(cK, QJ);
    z.x(dK, z.G);
    z.e = dK.prototype;
    z.e.Zx = function (a) {
        var b = this.MI, c = b[a];
        if (!c) {
            switch (a) {
                case "mn":
                    c = new aK(this);
                    break;
                case "g":
                    c = new ZJ(this);
                    break;
                case "s":
                    c = new cK(this);
                    break;
                case "c":
                    c = new YJ(this);
                    break;
                case "m":
                    c = new $J(this);
                    break;
                case "a":
                    c = new XJ(this);
                    break;
                default:
                    throw Error("Invalid palette type!");
            }
            b[a] = c
        }
        return c
    };
    z.e.setActive = function (a) {
        var b = this.Ym;
        b && b.G(!1);
        this.Ym = b = this.Zx(a);
        b.G(!0);
        return b
    };
    z.e.Gr = function () {
        this.Ww.start()
    };
    z.e.QF = function () {
        this.setActive("mn")
    };
    z.e.K = function () {
        return this.mO
    };
    z.e.D = function () {
        dK.o.D.call(this);
        this.MI = this.Ym = null
    };
    z.x(eK, z.TD);
    z.e = eK.prototype;
    z.e.md = z.ib("EquationEditorPlugin");
    z.e.Kw = function (a, b) {
        var c = b || null, d;
        c ? (d = c.getAttribute("alt"), d || (d = (d = c.getAttribute("src")) ? z.be(d, "tex") || "" : "")) : d = "";
        this.JI = c;
        c = {};
        c.aU = new dK(a);
        c = new WJ(c, a, d, this.Lj);
        c.addEventListener("ok", this.jo, !1, this);
        return c
    };
    z.e.enable = function (a) {
        eK.o.enable.call(this, a);
        this.isEnabled(a) && (this.ZN = z.F(a.m(), "dblclick", (0, z.q)(this.uP, this), !1, this))
    };
    z.e.disable = function (a) {
        eK.o.disable.call(this, a);
        this.isEnabled(a) || z.nd(this.ZN)
    };
    z.e.uP = function (a) {
        (a = a.target) && "IMG" === a.nodeName && a.getAttribute("eeimg") && this.execCommand("+equation", a)
    };
    z.e.jo = function (a) {
        z.UD(this);
        this.F.ci();
        a = z.Xe(z.xA(this).Ka, a.AO);
        if (this.JI) z.Po(a, this.JI); else {
            var b = z.ZA(this.F);
            b.isCollapsed() || b.yf();
            a = b.insertNode(a, !1)
        }
        z.Qu(a, !1);
        this.F.df()
    };
    z.x(fK, z.wA);
    fK.prototype.vs = function (a) {
        return z.B && this.F.Wg ? !1 : 9 != a.keyCode || a.metaKey || a.ctrlKey ? !1 : hK(this, a)
    };
    z.x(gK, fK);
    gK.prototype.md = function () {
        return "ListTabHandler"
    };
    z.x(iK, z.wA);
    z.e = iK.prototype;
    z.e.md = z.ib("LoremIpsum");
    z.e.Oq = z.Fl;
    z.e.wq = !1;
    z.e.queryCommandValue = function (a) {
        return "usinglorem" == a && this.wq
    };
    z.e.execCommand = function (a, b) {
        if ("clearlorem" == a) {
            var c = !!b, d = this.F;
            if (this.wq && !d.Wg) {
                var f = d.m();
                f || (f = d.Ic);
                this.wq = !1;
                f.style.fontStyle = this.sS;
                d.Pd(!0, null, !0);
                c && d.uc() && (z.D ? (z.Je(d.m()).body.focus(), d.Wf()) : z.ug && z.eB(d))
            }
        } else "updatelorem" == a && (c = this.F, this.wq || c.Wg || z.oG == c.id || ((d = c.m()) || (d = c.Ic), z.Hu(d) && (this.wq = !0, this.sS = d.style.fontStyle, d.style.fontStyle = "italic", c.Pd(!0, this.iS, !0))))
    };
    z.e.He = function (a) {
        return "clearlorem" == a || "updatelorem" == a || "usinglorem" == a
    };
    z.x(jK, z.G);
    z.x(kK, z.G);
    z.e = kK.prototype;
    z.e.Ks = null;
    z.e.WB = function () {
        lK(this, this.Sd, this.tk)
    };
    z.e.IA = function () {
        lK(this, this.tk, this.Sd)
    };
    z.e.Jg = function () {
        if (!this.Ks && 0 != this.Vt.length) {
            var a = this.Vt.shift();
            this.dispatchEvent({
                type: a.type,
                state: a.state
            }) && (a.state.UM ? (this.Ks = z.F(a.state, "action_completed", this.FO, !1, this), a.uF.call(a.state)) : (a.uF.call(a.state), this.Jg()))
        }
    };
    z.e.FO = function () {
        z.nd(this.Ks);
        this.Ks = null;
        this.Jg()
    };
    z.x(mK, z.wA);
    mK.prototype.ro = null;
    var AL = z.$o({cY: "+undo", RX: "+redo"});
    z.e = mK.prototype;
    z.e.He = function (a) {
        return a in AL
    };
    z.e.DK = function (a) {
        this.disable(a);
        this.F = null
    };
    z.e.enable = function (a) {
        if (!this.isEnabled(a)) {
            z.bB(a);
            var b = new z.xd(this);
            z.B || b.g(a, "beforechange", this.iP);
            b.g(a, z.GA, this.pP);
            b.g(a, "blur", this.ey);
            this.vj[a.Ug] = b;
            nK(this, a)
        }
    };
    z.e.disable = function (a) {
        z.bB(a);
        var b = this.vj[a.Ug];
        b && (b.H(), delete this.vj[a.Ug]);
        this.Hn[a.Ug] && delete this.Hn[a.Ug]
    };
    z.e.isEnabled = function (a) {
        return !!this.vj[a.Ug]
    };
    z.e.D = function () {
        mK.o.D.call(this);
        for (var a in this.vj) this.vj[a].H(), delete this.vj[a];
        this.F = null;
        this.If && (this.If.H(), delete this.If)
    };
    z.e.md = function () {
        return "UndoRedo"
    };
    z.e.execCommand = function (a) {
        "+undo" == a ? this.If.WB() : "+redo" == a && this.If.IA()
    };
    z.e.queryCommandValue = function (a) {
        var b = null;
        "+undo" == a ? b = 0 < this.If.Sd.length : "+redo" == a && (b = 0 < this.If.tk.length);
        return b
    };
    z.e.iO = function () {
        this.F.dispatchEvent({type: "cvc", HN: ["+redo", "+undo"]})
    };
    z.e.ZU = function (a, b, c) {
        var d = this.F;
        if (d) {
            z.aB(d, !0, !0);
            try {
                d.ci();
                d.execCommand("clearlorem", !0);
                z.Lu(d.m(), b);
                c && c.select();
                var f = this.F;
                d.focus();
                f && f.Ug != a.Pn && f.execCommand("updatelorem");
                var g = this.Hn[a.Pn];
                g.Ni = b;
                g.AK = c
            } catch (h) {
            } finally {
                this.ro = a, d.df(), z.$A(d)
            }
        }
    };
    z.e.vs = function (a, b, c) {
        if (c) {
            var d;
            "z" == b ? d = a.shiftKey ? "+redo" : "+undo" : "y" == b && (d = "+redo");
            if (d) return "+undo" == d ? (a = this.If, a = a.Sd[a.Sd.length - 1]) : (a = this.If, a = a.tk[a.tk.length - 1]), a && a.Pn ? this.F.execCommand(d) : this.execCommand(d), !0
        }
        return !1
    };
    z.e.iP = function (a) {
        if (!this.ro) {
            a = a.target;
            var b = a.Ug;
            this.GG != b && (this.GG = b, nK(this, a))
        }
    };
    z.e.pP = function (a) {
        this.ro ? (a = this.ro, this.ro = null, a.dispatchEvent("action_completed")) : nK(this, a.target)
    };
    z.e.ey = function (a) {
        (a = a.target) && z.bB(a)
    };
    z.x(pK, jK);
    pK.prototype.WB = function () {
        this.tJ(this, this.Ni, this.AK)
    };
    pK.prototype.IA = function () {
        this.tJ(this, this.JA, this.DU)
    };
    pK.prototype.equals = function (a) {
        return this.Pn == a.Pn && this.Ni == a.Ni && this.JA == a.JA
    };
    oK.prototype.isValid = function () {
        return this.Zs
    };
    oK.prototype.toString = function () {
        return z.HF ? "W3C:" + this.Ca.toString() + "\n" + this.uB + ":" + this.Ba.toString() + "\n" + this.px : "IE:" + this.Ca + "," + this.Ba
    };
    oK.prototype.select = function () {
        var a = this.Ae(this.$d.m());
        a && (z.GF && this.$d.m().focus(), z.xu(a).select())
    };
    oK.prototype.Ae = function (a) {
        if (z.HF) {
            var b = tJ(this.Ca, a);
            a = tJ(this.Ba, a);
            return b && a ? z.gu(b, this.uB, a, this.px).ce() : null
        }
        b = a.ownerDocument.body.createTextRange();
        b.moveToElementText(a);
        b.collapse(!0);
        b.moveEnd("character", this.Ba);
        b.moveStart("character", this.Ca);
        return b
    };
    z.x(rK, z.G);
    z.e = rK.prototype;
    z.e.v = function () {
        return this.ga
    };
    z.e.Ux = function () {
        return this.$d
    };
    z.e.V = function () {
        return this.Eb.V()
    };
    z.e.G = function (a) {
        this.Eb.G(a)
    };
    z.e.isEnabled = function () {
        return this.Eb.isEnabled()
    };
    z.e.Wa = function (a) {
        this.Eb.Wa(a)
    };
    z.e.blur = function () {
        this.Eb.Xc(null)
    };
    z.e.D = function () {
        rK.o.D.call(this);
        this.ga && (this.ga.H(), delete this.ga);
        this.Eb && (this.Eb.H(), delete this.Eb);
        delete this.$d;
        delete this.EA
    };
    z.e.NW = function (a) {
        if (this.Eb.isEnabled() && this.dispatchEvent("change")) {
            var b;
            try {
                b = this.$d.queryCommandValue(a.HN || this.EA)
            } catch (f) {
                b = {}
            }
            a = b;
            for (var c in a) if (b = z.Zg(this.Eb, c)) {
                var d = a[c];
                b.Pi ? b.Pi(d) : b.Kc(!!d)
            }
        }
    };
    z.e.dP = function (a) {
        var b = a.target.de();
        this.$d.execCommand(b, a.target.X())
    };
    z.x(tK, z.nz);
    z.Tp("goog-toolbar-separator", function () {
        return new tK
    });
    z.x(uK, z.wA);
    z.e = uK.prototype;
    z.e.defaults = {KY: z.p};
    z.e.md = z.ib("FastUpload");
    z.e.enable = function (a) {
        if (!this.isEnabled(a) && (window.URL || window.webkitURL) && window.FileReader && window.FormData && window.document.addEventListener) {
            window.$.fn.draghover = function () {
                return this.each(function () {
                    var a = (0, window.$)(), b = (0, window.$)(this), f = !0;
                    b.on("dragenter", function (g) {
                        g = g.originalEvent;
                        0 === a.size() && f && z.A(g.dataTransfer.types, "Files") && b.trigger("draghoverstart", g);
                        a = a.add(g.target)
                    });
                    b.on("dragleave", function (g) {
                        (0, window.setTimeout)(function () {
                            a = a.not(g.target);
                            0 === a.size() && f &&
                            b.trigger("draghoverend", g)
                        }, 1)
                    });
                    b.on("dragstart", function () {
                        f = !1
                    });
                    b.on("drop dragend", function () {
                        a = (0, window.$)();
                        b.trigger("draghoverend");
                        f = !0
                    })
                })
            };
            this.tC = (0, window.$)(this.F.m());
            var b = this.oL = vK(this);
            new z.xd(this);
            a.m().addEventListener("paste", (0, z.q)(this.ry, this));
            window.document.addEventListener("dragover", (0, z.q)(this.DP, this), !1);
            b.on("dragover", (0, z.q)(this.CP, this));
            b.get(0).addEventListener("drop", (0, z.q)(this.ss, this), !1);
            (0, window.$)(window).draghover().on({
                draghoverstart: (0, z.q)(this.SF,
                    this), draghoverend: (0, z.q)(this.EP, this)
            });
            b.draghover().on({draghoverstart: (0, z.q)(this.wP, this), draghoverend: (0, z.q)(this.SF, this)})
        }
    };
    z.e.DP = function (a) {
        z.A(a.dataTransfer.types, "Files") && (a.dataTransfer.dropEffect = "none", a.preventDefault())
    };
    z.e.CP = function (a) {
        a = a.originalEvent;
        a.dataTransfer.dropEffect = "copy";
        a.preventDefault();
        a.stopPropagation()
    };
    z.e.SF = function (a) {
        a.preventDefault();
        a.stopPropagation();
        xK(this, 1)
    };
    z.e.wP = function (a) {
        xK(this, 2);
        a.stopPropagation()
    };
    z.e.EP = function (a) {
        a.preventDefault();
        xK(this, 0)
    };
    z.e.ry = function (a) {
        var b = this;
        a.clipboardData && z.A(a.clipboardData.types, "Files") && 1 === a.clipboardData.items.length && z.y(a.clipboardData.items, function (c) {
            -1 < c.type.indexOf("image") && (yK(b, c.getAsFile()), a.preventDefault())
        })
    };
    z.e.ss = function (a) {
        var b = this;
        b.F.execCommand("clearlorem");
        var c = a.dataTransfer.files;
        a.preventDefault();
        var d = [];
        z.y(c, function (a) {
            -1 < a.type.indexOf("image") ? (yK(b, a), d.push(!0)) : d.push(!1)
        });
        z.$n(d, function (a) {
            return !a
        }) && z.X.message("文件类型不支持！");
        xK(b, 0)
    };
    var BL = {};
    (function () {
        function a(a, c, d) {
            function r(a) {
                z.df(a)
            }

            function ca(b, c) {
                for (; b !== a;) {
                    if (c(b)) return b;
                    b = b.parentNode
                }
                return null
            }

            function Xa(a) {
                return a.tagName && a.tagName === c
            }

            if (!a) throw"Missing Editable Container";
            c || (c = "blockquote");
            c = c.toUpperCase();
            var cb = z.vu();
            if (function (b) {
                return b && g(a, z.Et(b)) && g(a, z.Gt(b))
            }(cb)) {
                var Ha = h(cb), xa = k(cb), Dd = cb.Qb(), hi = ca(Dd, Xa), le = z.ob(xa, function (a, b) {
                    1 === b.nodeType && (Xa(b) ? a.push(b) : a.push.apply(a, z.vb(b.getElementsByTagName(c))));
                    return a
                }, []), Md;
                if (hi) {
                    if (d) return n.Gv;
                    z.df(hi)
                } else if (le.length) {
                    if (d) return n.Gv;
                    z.y(le, r)
                } else {
                    if (d) return n.LC;
                    if (d = ca(Dd, function (a) {
                        return z.A(m, a.tagName.toLowerCase())
                    })) Md = window.document.createElement(c), d.parentNode.insertBefore(Md, d), Md.appendChild(d); else if (cb.Z() !== cb.la()) Md = window.document.createElement(c), xa[0].parentNode.insertBefore(Md, xa[0]), z.y(xa, function (a) {
                        Md.appendChild(a)
                    }); else return f(a, c)
                }
                b(a, Ha)
            } else if (d) return n.LC
        }

        function b(a, b) {
            if (b) {
                var c = function (b, c) {
                    return b && g(a, b) && z.Ju(b) >= c
                };
                c(b.Z(), b.va()) &&
                c(b.la(), b.La()) && b.select()
            }
        }

        function c(a) {
            return a && "BR" === a.tagName || II(a) || z.Nu(a)
        }

        function d(a) {
            a = z.uf(a, function (a) {
                a = a.parentNode;
                return II(a) || z.Nu(a)
            }, !0);
            var b = KI(new z.Bu(a, !0, !0), z.ep(c));
            a = KI(new z.Bu(a, !1, !1), z.ep(c));
            return z.Qd(b).reverse().concat(z.Qd(a))
        }

        function f(a, b) {
            if (r.gM) window.document.execCommand("formatBlock", !1, b); else {
                var c = z.vu(), f = c.sc();
                if (z.jf(f) && z.Hu(f)) c = window.document.createElement(b), f === a ? f.appendChild(c) : z.Po(c, f), (z.D || z.B) && c.appendChild(window.document.createElement("br")),
                    z.Pu(c); else if (f = c.la(), f = d(f), f.length) {
                    var c = window.document.createElement(b), g = z.kb(f), h = g.nextSibling;
                    h && h && "BR" === h.tagName && z.P(h);
                    z.bf(c, g);
                    z.Ze(c, f);
                    (z.D || z.B) && c.appendChild(window.document.createElement("br"));
                    z.Qu(c.lastChild)
                }
            }
        }

        function g(a, b) {
            return 3 === a.nodeType ? a === b : a.contains(3 === b.nodeType ? b.parentNode : b)
        }

        function h(a) {
            return xI(a.Z(), a.va(), a.la(), a.La())
        }

        function k(a) {
            function b(a) {
                return !(a.previousSibling && g(a.previousSibling, h))
            }

            function c(a) {
                return f !== d && !g(a, f)
            }

            if (a.isCollapsed()) return [];
            var d = a.sc(), f = a.Z(), h = a.la();
            a = d.childNodes;
            return z.Qd(1 === a.length ? a : KI(LI(a, c), b))
        }

        var m = ["ul", "ol", "dl", "table"], n = {Gv: 1, LC: 0}, r = BL;
        r.gM = !z.C;
        r.toggle = a;
        r.getState = function (b, c) {
            return a(b, c, !0)
        };
        r.bM = n
    })();
    z.x(zK, z.wA);
    z.e = zK.prototype;
    z.e.md = z.ib("Blockquote");
    z.e.He = function (a) {
        return "+blockquote" === a
    };
    z.e.gf = function (a) {
        this.He(a) && BL.toggle(this.F.m())
    };
    z.e.queryCommandValue = function () {
        return BL.bM.Gv === BL.getState(this.F.m())
    };
    z.e.py = function (a) {
        if (13 === a.keyCode) return this.ly(a)
    };
    z.e.iB = function (a, b) {
        return BK(a, b).iB
    };
    z.e.ly = function (a) {
        var b = z.ZA(this.F);
        if (b.isCollapsed()) {
            var c;
            a:{
                c = b.la();
                for (var d = this.F.Ha; c !== d;) {
                    if ("BLOCKQUOTE" === c.tagName) break a;
                    c = c.parentNode
                }
                c = void 0
            }
            if (c && (b = BK(c, b), b.iB)) {
                a.preventDefault();
                a = window.document.createElement("div");
                z.bf(a, c);
                if (z.D || z.B) c = c.nextSibling, (c = AK(c) && c) || (c = window.document.createElement("br")), a.appendChild(c);
                z.zu(a, 0).select();
                b.YH && z.P(b.YH)
            }
        }
    };
    z.kH["+blockquote"] = {mb: !0, R: "引用内容", Aa: "+blockquote", Pa: "tr-icon tr-blockquote", factory: z.YE};
    z.x(DK, z.R);
    var GK = [["ABAP", "abap"], ["ABNF", "abnf"], ["ActionScript 3", "as3"], ["ActionScript", "as"], ["Ada", "ada"], ["ADL", "adl"], ["Agda", "agda"], ["Alloy", "alloy"], ["AmbientTalk", "at"], ["ANTLR", "antlr"], ["ApacheConf", "apacheconf"], ["APL", "apl"], ["AppleScript", "applescript"], ["Arduino", "arduino"], ["AspectJ", "aspectj"], ["aspx-cs", "aspx-cs"], ["aspx-vb", "aspx-vb"], ["Asymptote", "asy"], ["autohotkey", "ahk"], ["AutoIt", "autoit"], ["Awk", "awk"], ["Base Makefile", "basemake"], ["Bash Session", "console"], ["Bash", "bash"], ["Batchfile",
            "bat"], ["BBCode", "bbcode"], ["BC", "bc"], ["Befunge", "befunge"], ["BlitzBasic", "blitzbasic"], ["BlitzMax", "blitzmax"], ["BNF", "bnf"], ["Boo", "boo"], ["Boogie", "boogie"], ["Brainfuck", "brainfuck"], ["Bro", "bro"], ["BUGS", "bugs"], ["C", "c"], ["C#", "csharp"], ["C++", "cpp"], ["c-objdump", "c-objdump"], ["ca65 assembler", "ca65"], ["cADL", "cadl"], ["CAmkES", "camkes"], ["CBM BASIC V2", "cbmbas"], ["Ceylon", "ceylon"], ["CFEngine3", "cfengine3"], ["cfstatement", "cfs"], ["ChaiScript", "chai"], ["Chapel", "chapel"], ["Cheetah", "cheetah"],
            ["Cirru", "cirru"], ["Clay", "clay"], ["Clojure", "clojure"], ["ClojureScript", "clojurescript"], ["CMake", "cmake"], ["COBOL", "cobol"], ["COBOLFree", "cobolfree"], ["CoffeeScript", "coffee-script"], ["Coldfusion CFC", "cfc"], ["Coldfusion HTML", "cfm"], ["Common Lisp", "common-lisp"], ["Component Pascal", "componentpascal"], ["Coq", "coq"], ["cpp-objdump", "cpp-objdump"], ["CPSA", "cpsa"], ["Crmsh", "crmsh"], ["Croc", "croc"], ["Cryptol", "cryptol"], ["Csound Document", "csound-document"], ["Csound Orchestra", "csound"], ["Csound Score",
                "csound-score"], ["CSS", "css"], ["CUDA", "cuda"], ["Cypher", "cypher"], ["Cython", "cython"], ["D", "d"], ["d-objdump", "d-objdump"], ["Darcs Patch", "dpatch"], ["Dart", "dart"], ["Debian Control file", "control"], ["Debian Sourcelist", "sourceslist"], ["Delphi", "delphi"], ["dg", "dg"], ["Diff", "diff"], ["Django/Jinja", "django"], ["Docker", "docker"], ["DTD", "dtd"], ["Duel", "duel"], ["Dylan session", "dylan-console"], ["Dylan", "dylan"], ["DylanLID", "dylan-lid"], ["Earl Grey", "earl-grey"], ["Easytrieve", "easytrieve"], ["EBNF", "ebnf"],
            ["eC", "ec"], ["ECL", "ecl"], ["Eiffel", "eiffel"], ["Elixir iex session", "iex"], ["Elixir", "elixir"], ["Elm", "elm"], ["EmacsLisp", "emacs"], ["Embedded Ragel", "ragel-em"], ["ERB", "erb"], ["Erlang erl session", "erl"], ["Erlang", "erlang"], ["Evoque", "evoque"], ["Ezhil", "ezhil"], ["Factor", "factor"], ["Fancy", "fancy"], ["Fantom", "fan"], ["Felix", "felix"], ["Fish", "fish"], ["Fortran", "fortran"], ["FortranFixed", "fortranfixed"], ["FoxPro", "foxpro"], ["FSharp", "fsharp"], ["GAP", "gap"], ["GAS", "gas"], ["Genshi Text", "genshitext"],
            ["Genshi", "genshi"], ["Gettext Catalog", "pot"], ["Gherkin", "cucumber"], ["GLSL", "glsl"], ["Gnuplot", "gnuplot"], ["Go", "go"], ["Golo", "golo"], ["GoodData-CL", "gooddata-cl"], ["Gosu Template", "gst"], ["Gosu", "gosu"], ["Groff", "groff"], ["Groovy", "groovy"], ["Haml", "haml"], ["Handlebars", "handlebars"], ["Haskell", "haskell"], ["Haxe", "hx"], ["Hexdump", "hexdump"], ["HTML", "html"], ["HTML+Django/Jinja", "html+django"], ["HTML+Handlebars", "html+handlebars"], ["HTTP", "http"], ["Hxml", "haxeml"], ["Hy", "hylang"], ["Hybris", "hybris"],
            ["IDL", "idl"], ["Idris", "idris"], ["Igor", "igor"], ["Inform 6 template", "i6t"], ["Inform 6", "inform6"], ["Inform 7", "inform7"], ["INI", "ini"], ["Io", "io"], ["Ioke", "ioke"], ["IRC logs", "irc"], ["Isabelle", "isabelle"], ["J", "j"], ["Jade", "jade"], ["JAGS", "jags"], ["Jasmin", "jasmin"], ["Java Server Page", "jsp"], ["Java", "java"], ["JavaScript", "js"], ["JCL", "jcl"], ["JSON", "json"], ["JSON-LD", "jsonld"], ["Julia console", "jlcon"], ["Julia", "julia"], ["Kal", "kal"], ["Kconfig", "kconfig"], ["Koka", "koka"], ["Kotlin", "kotlin"], ["Lasso",
                "lasso"], ["Lean", "lean"], ["LessCss", "less"], ["Lighttpd configuration file", "lighty"], ["Limbo", "limbo"], ["liquid", "liquid"], ["Literate Agda", "lagda"], ["Literate Cryptol", "lcry"], ["Literate Haskell", "lhs"], ["Literate Idris", "lidr"], ["LiveScript", "live-script"], ["LLVM", "llvm"], ["Logos", "logos"], ["Logtalk", "logtalk"], ["LSL", "lsl"], ["Lua", "lua"], ["Makefile", "make"], ["Mako", "mako"], ["MAQL", "maql"], ["Mask", "mask"], ["Mason", "mason"], ["Mathematica", "mathematica"], ["Matlab session", "matlabsession"], ["Matlab",
                "matlab"], ["MiniD", "minid"], ["Modelica", "modelica"], ["Modula-2", "modula2"], ["MoinMoin/Trac Wiki markup", "trac-wiki"], ["Monkey", "monkey"], ["MOOCode", "moocode"], ["MoonScript", "moon"], ["mozhashpreproc", "mozhashpreproc"], ["mozpercentpreproc", "mozpercentpreproc"], ["MQL", "mql"], ["Mscgen", "mscgen"], ["MSDOS Session", "doscon"], ["MuPAD", "mupad"], ["MXML", "mxml"], ["Myghty", "myghty"], ["MySQL", "mysql"], ["NASM", "nasm"], ["Nemerle", "nemerle"], ["nesC", "nesc"], ["NewLisp", "newlisp"], ["Newspeak", "newspeak"], ["Nginx configuration file",
                "nginx"], ["Nimrod", "nimrod"], ["Nit", "nit"], ["Nix", "nixos"], ["NSIS", "nsis"], ["NumPy", "numpy"], ["objdump", "objdump"], ["objdump-nasm", "objdump-nasm"], ["Objective-C", "objective-c"], ["Objective-C++", "objective-c++"], ["Objective-J", "objective-j"], ["OCaml", "ocaml"], ["Octave", "octave"], ["ODIN", "odin"], ["Ooc", "ooc"], ["Opa", "opa"], ["OpenEdge ABL", "openedge"], ["PacmanConf", "pacmanconf"], ["Pan", "pan"], ["ParaSail", "parasail"], ["Pawn", "pawn"], ["Perl", "perl"], ["Perl6", "perl6"], ["PHP", "php"], ["Pig", "pig"], ["Pike",
                "pike"], ["PkgConfig", "pkgconfig"], ["PL/pgSQL", "plpgsql"], ["PostgreSQL console (psql)", "psql"], ["PostgreSQL SQL dialect", "postgresql"], ["PostScript", "postscript"], ["POVRay", "pov"], ["PowerShell Session", "ps1con"], ["PowerShell", "powershell"], ["Praat", "praat"], ["Prolog", "prolog"], ["Properties", "properties"], ["Protocol Buffer", "protobuf"], ["Puppet", "puppet"], ["PyPy Log", "pypylog"], ["Python 3", "python3"], ["Python 3.0 Traceback", "py3tb"], ["Python console session", "pycon"], ["Python Traceback", "pytb"], ["Python",
                "python"], ["QBasic", "qbasic"], ["QML", "qml"], ["QVTO", "qvto"], ["Racket", "racket"], ["Ragel", "ragel"], ["RConsole", "rconsole"], ["Rd", "rd"], ["REBOL", "rebol"], ["Red", "red"], ["Redcode", "redcode"], ["reg", "registry"], ["ResourceBundle", "resource"], ["reStructuredText", "rst"], ["Rexx", "rexx"], ["RHTML", "rhtml"], ["Roboconf Graph", "roboconf-graph"], ["Roboconf Instances", "roboconf-instances"], ["RobotFramework", "robotframework"], ["RPMSpec", "spec"], ["RQL", "rql"], ["RSL", "rsl"], ["Ruby irb session", "rbcon"], ["Ruby", "rb"],
            ["Rust", "rust"], ["S", "splus"], ["Sass", "sass"], ["Scala", "scala"], ["Scalate Server Page", "ssp"], ["Scaml", "scaml"], ["Scheme", "scheme"], ["Scilab", "scilab"], ["SCSS", "scss"], ["Shen", "shen"], ["Slim", "slim"], ["Smali", "smali"], ["Smalltalk", "smalltalk"], ["Smarty", "smarty"], ["Snobol", "snobol"], ["SourcePawn", "sp"], ["SPARQL", "sparql"], ["SQL", "sql"], ["sqlite3con", "sqlite3"], ["SquidConf", "squidconf"], ["Stan", "stan"], ["Standard ML", "sml"], ["SuperCollider", "sc"], ["Swift", "swift"], ["SWIG", "swig"], ["systemverilog",
                "systemverilog"], ["TADS 3", "tads3"], ["TAP", "tap"], ["Tcl", "tcl"], ["Tcsh Session", "tcshcon"], ["Tcsh", "tcsh"], ["Tea", "tea"], ["Termcap", "termcap"], ["Terminfo", "terminfo"], ["Terraform", "terraform"], ["TeX", "tex"], ["Text only", "text"], ["Thrift", "thrift"], ["Todotxt", "todotxt"], ["TrafficScript", "rts"], ["Treetop", "treetop"], ["Turtle", "turtle"], ["Twig", "twig"], ["TypeScript", "ts"], ["UrbiScript", "urbiscript"], ["Vala", "vala"], ["VB.net", "vb.net"], ["VCTreeStatus", "vctreestatus"], ["Velocity", "velocity"], ["verilog",
                "verilog"], ["VGL", "vgl"], ["vhdl", "vhdl"], ["VimL", "vim"], ["X10", "x10"], ["XML", "xml"], ["XQuery", "xquery"], ["XSLT", "xslt"], ["Xtend", "xtend"], ["XUL+mozpreproc", "xul+mozpreproc"], ["YAML", "yaml"], ["YAML+Jinja", "yaml+jinja"], ["Zephir", "zephir"]],
        IK = z.nb(GK, EK);
    z.e = DK.prototype;
    z.e.defaults = {
        tV: "lang-select",
        tr: "collapsed",
        OR: "lang-list",
        VT: "lang-option",
        Cg: "active",
        PD: "checked"
    };
    z.e.D = function () {
        DK.o.D.call(this);
        this.v().H();
        this.aa.H();
        z.P(this.h);
        this.bs = this.Tu = this.h = null
    };
    z.e.B = function () {
        var a = this.J;
        this.h = z.O("div", {innerHTML: this.template, className: [a.tV, a.tr].join(" ")})
    };
    z.e.template = '\x3cdiv class\x3d"title-button"\x3e选择语言\x3c/div\x3e\x3ci class\x3d"zg-icon zg-icon-double-arrow"\x3e\x3c/i\x3e\x3cdiv class\x3d"input-wrapper"\x3e\x3cinput class\x3d"filter-input zg-form-text-input" placeholder\x3d"搜索语言"\x3e\x3c/div\x3e';
    z.e.C = function () {
        DK.o.C.call(this);
        this.Tu = z.N("title-button", this.h);
        this.bs = z.N("filter-input", this.h);
        z.zo(this.Tu, !0);
        JK(this, this.bs, this.h);
        this.v().g(this.h, "click", this.Hl).g(this.Tu, "click", this.qQ)
    };
    z.e.X = function () {
        return this.me
    };
    z.e.Ea = function (a) {
        var b = a && z.qb(IK, function (b) {
            return b.value === a
        });
        b && (this.wk(b.label), this.dispatchEvent({type: "change", UT: b}));
        this.me = a
    };
    z.e.Hl = function (a) {
        var b = this.aa, c = b.M.m();
        c && window.document.activeElement !== this.bs && !c.contains(a.target) && (a.preventDefault(), a.stopPropagation(), z.rs(b))
    };
    z.e.qQ = function () {
        this.isCollapsed() && this.Hi(!1)
    };
    z.e.fs = function () {
        return this.aa
    };
    z.e.isCollapsed = function () {
        return z.W.has(this.h, this.J.tr)
    };
    z.e.Hi = function (a) {
        if (this.isCollapsed() !== a) {
            var b = this.bs, c = this.J;
            a ? z.W.add(this.h, c.tr) : (z.W.remove(this.h, c.tr), a = this.aa, c = a.M, a.qm(IK), c.m().scrollTop = 0, c.show(), b.value = "", b.focus())
        }
    };
    z.e.wk = function (a) {
        var b = this.Tu;
        b.title = a;
        z.mf(b, a)
    };
    z.e.eA = function (a) {
        this.Ea(a.value);
        this.aa.Cc()
    };
    z.x(KK, z.wA);
    var XK = z.D || z.ug || z.B;
    z.e = KK.prototype;
    z.e.md = z.ib("CodePlugin");
    z.e.He = function (a) {
        return "+code" === a
    };
    z.e.gf = function (a) {
        this.He(a) && this.trigger()
    };
    z.e.queryCommandValue = function () {
        var a = "1" === SK(this).state, b = this.F.Rb.EnterHandler;
        b && (a ? b.disable(this.F) : b.enable(this.F));
        QK(this, a);
        return a
    };
    z.e.defaults = {$N: ""};
    z.e.EV = function (a) {
        this.Eb = a;
        this.xx = ["toggleFullScreen"].concat("+code")
    };
    z.e.D = function () {
        KK.o.D.call(this);
        this.Eb = null
    };
    z.e.trigger = function () {
        var a = SK(this), b = a.hu, c = a.code;
        switch (a.state) {
            case "1":
                var d = !(0, z.ab)(z.Io(c)), a = z.Gu(c);
                d ? (c.parentNode.removeChild(c), a && z.Qu(a, !0)) : (b = yI(b), d = z.Ma(c.innerHTML), z.Eu(z.Yo(new z.Bu(c, !1, !0), z.Fu)) && (d = "\x3cbr\x3e" + d), a && "BR" !== a.tagName && (d += "\x3cbr\x3e"), a = z.We(d), c.parentNode.replaceChild(a, c), b.restore());
                break;
            case "2":
                c = $K, a = (0, z.ab)(b.Id()) ? PK(b.$f()) : XK ? "\n" : "", c(this, b, a)
        }
    };
    z.e.An = function (a, b) {
        var c = window.document.createElement(a);
        c.id = z.Wg(z.Vg.ba());
        return b(c, function () {
            c = z.L(c.id);
            c.removeAttribute("id");
            return c
        })
    };
    z.e.Bg = function () {
        var a = this.F;
        this.Wm = OK(this.F.Ha);
        z.Ac(a, this.Wm);
        z.F(a, "delayedchange", this.UU, !1, this);
        z.F(a.Ha, "paste", this.ry, !1, this)
    };
    z.e.UU = function () {
        var a = this.Wm && this.Wm.Xx();
        a && a.V() && a.anchor && a.ha()
    };
    z.e.ry = function (a) {
        var b = SK(this), c = b.hu, d = b.code;
        if ("1" === b.state) if (b = a.gc.clipboardData) b.types && z.A(b.types, "text/plain") && (a.preventDefault(), b = b.getData("text/plain"), TK(c, b)); else if (window.clipboardData) {
            if (b = window.clipboardData.getData("Text")) a.preventDefault(), UK(this, c, b)
        } else {
            var f = c.va();
            a = c.Id().length;
            var g = (d.firstChild ? z.Ju(d.firstChild) : 0) - f - a;
            (0, window.setTimeout)(function () {
                var a = PK(d.innerHTML);
                z.mf(d, a);
                a = (d.firstChild ? z.Ju(d.firstChild) : 0) - g;
                d.firstChild && z.zu(d.firstChild,
                    Math.max(f, a)).select()
            })
        }
    };
    z.e.py = function (a) {
        if (13 === a.keyCode) return this.ly(a);
        if (40 === a.keyCode) return WK(this)
    };
    z.e.ly = function (a) {
        var b = SK(this), c = b.hu;
        if ("1" === b.state) return a.preventDefault(), z.C ? ZK(this, c) : window.document.queryCommandSupported("insertLineBreak") ? window.document.execCommand("insertLineBreak") : (a = window.document.createTextNode("\n"), c.insertNode(a), z.Qu(a)), this.F.df(), !0
    };
    z.kH["+code"] = {mb: !0, R: "插入代码", Aa: "+code", Pa: "tr-icon tr-code", factory: z.YE};
    z.x(bL, z.wA);
    var CL = /^(DIV|TR|LI|BLOCKQUOTE|H\d|PRE|XMP)/;
    z.e = bL.prototype;
    z.e.md = function () {
        return "RemoveFormatting"
    };
    z.e.He = function (a) {
        return "+removeFormat" == a
    };
    z.e.gf = function (a) {
        "+removeFormat" == a && dL(this)
    };
    z.e.vs = function (a, b, c) {
        return c ? " " == b ? (this.F.execCommand("+removeFormat"), !0) : !1 : !1
    };
    z.e.lJ = function (a) {
        var b = window.document.createElement("DIV");
        b.innerHTML = a;
        a = [];
        for (var b = [b.childNodes, 0], c = [], d = 0, f = [], g = 0, h = 0; 0 <= h; h -= 2) {
            for (var k = !1; 0 < g && h <= f[g - 1];) g--, k = !0;
            k && cL(a);
            for (k = !1; 0 < d && h <= c[d - 1];) d--, k = !0;
            k && cL(a);
            for (var k = b[h], m = b[h + 1]; m < k.length;) {
                var n = k[m++], r = n.nodeName, w = this.KF(n);
                if (null != w) a.push(w); else {
                    switch (r) {
                        case "#text":
                            n = 0 < d ? n.nodeValue : z.np(n.nodeValue);
                            n = z.Na(n);
                            a.push(n);
                            continue;
                        case "P":
                            cL(a);
                            cL(a);
                            break;
                        case "BR":
                            cL(a);
                            continue;
                        case "TABLE":
                            cL(a);
                            f[g++] = h;
                            break;
                        case "PRE":
                        case "XMP":
                            c[d++] = h;
                            break;
                        case "STYLE":
                        case "SCRIPT":
                        case "SELECT":
                            continue;
                        case "A":
                            if (n.href && "" != n.href) {
                                a.push("\x3ca href\x3d'");
                                a.push(n.href);
                                a.push("'\x3e");
                                a.push(this.lJ(n.innerHTML));
                                a.push("\x3c/a\x3e");
                                continue
                            } else break;
                        case "IMG":
                            a.push("\x3cimg src\x3d'");
                            a.push(n.src);
                            a.push("'");
                            "0" == n.border && a.push(" border\x3d'0'");
                            a.push("\x3e");
                            continue;
                        case "TD":
                            n.previousSibling && a.push(" ");
                            break;
                        case "TR":
                            n.previousSibling && cL(a);
                            break;
                        case "DIV":
                            if (w = n.parentNode, w.firstChild ==
                            n && CL.test(w.tagName)) break;
                        default:
                            CL.test(r) && cL(a)
                    }
                    n = n.childNodes;
                    0 < n.length && (b[h++] = k, b[h++] = m, k = n, m = 0)
                }
            }
        }
        return a.join("").replace(/\xa0|[ \t]+/g, " ")
    };
    z.e.KF = function () {
        return null
    };
    z.x(gL, bL);
    gL.prototype.KF = function (a) {
        var b;
        if ("IMG" !== a.nodeName) return null;
        b = [];
        b.push('\x3cimg src\x3d"');
        b.push(z.Na(a.src));
        b.push('"');
        a.getAttribute("eeimg") && a.getAttribute("alt") && b.push(' eeimg\x3d"' + z.Na(a.getAttribute("eeimg")) + '" alt\x3d"' + z.Na(a.getAttribute("alt")) + '"');
        b.push("\x3e");
        return b.join("")
    };
    z.x(hL, z.OD);
    z.x(iL, z.Lc);
    z.e = hL.prototype;
    z.e.show = function () {
        hL.o.show.call(this);
        this.dv.focus()
    };
    z.e.hide = function () {
        hL.o.hide.call(this)
    };
    z.e.Lw = function () {
        var a = z.rm.tq + "/upload_video",
            a = this.kd.B("div", "zm-img-uploader zm-img-uploader-upload-tab-selected", [this.kd.B("div", "zg-section", this.kd.B("strong", null, "输入视频页地址：")), this.kd.B("iframe", {
                id: "video_up_frame",
                src: "about:_blank",
                name: "video_up_frame",
                style: "visible:hidden;position:absolute;height:0;width:0;left:-9000px"
            }), this.qF = this.kd.B("form", {
                "class": "zg-section-title",
                target: "video_up_frame",
                method: "post",
                enctype: "multipart/form-data",
                action: a
            }, [this.dv = this.kd.B("input", {
                type: "text",
                "class": "zg-form-text-input", name: "upload_file_url", autocomplete: "off"
            }), this.yn = this.kd.B("a", {
                "class": "zg-btn-blue zm-uploader-button-fix",
                name: "save",
                href: "javascript:;"
            }, "确定"), this.kd.B("div", "zm-video-uploader-info", [this.gh = this.kd.B("span", {
                style: "display:none",
                "class": "zm-img-uploader-loading"
            }, "正在上传"), this.ff = this.kd.B("span", {
                style: "display:none",
                "class": "zm-img-uploader-error"
            }, "插入视频失败，请稍后重试")])]), this.VQ = this.kd.B("div", "zg-gray"), this.wn = this.kd.B("div", "zm-command", [this.xw = this.kd.B("a",
                {href: "javascript:;"}, "取消")])]);
        this.VQ.innerHTML = '我们目前支持\x3ca class\x3d"zg-link-gray" target\x3d"_blank" href\x3d"http://youku.com"\x3e优酷\x3c/a\x3e、\x3ca class\x3d"zg-link-gray" target\x3d"_blank" href\x3d"http://tudou.com"\x3e土豆\x3c/a\x3e、\x3ca href\x3d"http://video.sina.com.cn/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e新浪\x3c/a\x3e、\x3ca href\x3d"http://v.qq.com/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e腾讯\x3c/a\x3e、\x3ca href\x3d"http://www.56.com/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e56\x3c/a\x3e、\x3ca href\x3d"http://tv.sohu.com/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e搜狐\x3c/a\x3e、\x3ca href\x3d"http://www.iqiyi.com/" class\x3d"zg-link-gray" target\x3d"_blank"\x3e爱奇艺\x3c/a\x3e视频服务。\x3cbr /\x3e请不要上传与回答问题无关的视频，详细请看 \x3ca href\x3d"http://www.zhihu.com/question/20118966" target\x3d"_blank"\x3e知乎视频使用规范\x3c/a\x3e';
        this.T.g(this.xw, "click", function () {
            this.eo();
            this.hide()
        }).g(this.yn, "click", this.SI).g(this.wn, "click", this.Qa).g(this.qF, "submit", function () {
            return jL(this, this.dv.value)
        }).g(z.Y, "iframe_data", this.Uv);
        this.cE = a;
        var b = new z.PD(this);
        b.Na("插入视频").ia(a);
        a = z.SD(b);
        z.Lj(a, null);
        return a
    };
    z.e.SI = function () {
        if (this.dv.value) {
            var a = z.sr(this.dv.value);
            a && jL(this, a) && (z.Q(this.gh, !0), z.Q(this.ff, !1), this.qF.submit())
        }
    };
    z.e.Qa = function (a) {
        "save" === (a.target && a.target.name) && this.SI()
    };
    z.e.Uv = function (a) {
        z.Q(this.gh, !1);
        this.ym(a.xf)
    };
    z.e.ym = function (a) {
        a && !a.r ? (this.dispatchEvent(this.Cn(a.msg[0], a.msg[1], a.msg[2], a.msg[3], a.msg[4])), this.hide()) : (a = a.msg, z.Q(this.gh, !1), this.ff.innerHTML = a, z.Q(this.ff, !0))
    };
    z.e.Cn = function (a, b, c, d, f) {
        return new iL(a, b, c, d, f)
    };
    z.e.D = function () {
        this.T.H();
        this.T = null;
        hL.o.D.call(this)
    };
    z.x(kL, z.TD);
    z.e = kL.prototype;
    z.e.md = z.ib("VideoDialogPlugin");
    z.e.gf = function (a, b) {
        var c = this.F;
        return c.tf || (c.Wf(), c.tf) ? kL.o.gf.call(this, a, b) : !1
    };
    z.e.co = function (a) {
        kL.o.co.call(this, a)
    };
    z.e.Kw = function (a) {
        a = new hL(a);
        this.T.g(a, "ok", this.jo).g(a, "cancel", this.fy);
        return a
    };
    z.e.D = function () {
        kL.o.D.call(this);
        this.T.H()
    };
    z.e.jo = function (a) {
        z.UD(this);
        var b = z.xA(this), c = b.B("a", {
            "class": "video-link",
            href: a.UV,
            "data-src": a.XW,
            "data-name": a.SK,
            "data-poster": a.poster,
            "data-videoid": a.WW
        });
        z.mf(c, a.SK);
        a = z.Ko(c);
        a = z.We(a + " ");
        var c = a.firstChild, d = z.ZA(this.F);
        if (z.Zu(d)) d.Bi(a), z.C ? window.document.selection && (b = window.document.selection.createRange(), b.move("character", -1), b.select()) : (z.Qu(c), b.Va().focus()), z.$A(this.F), this.F.df(); else return null;
        this.T.removeAll()
    };
    z.e.fy = function () {
        this.T.removeAll()
    };
    z.CA = !0;
    (function (a) {
        z.wA.prototype.execCommand = function (b) {
            var c = this.F;
            return z.Yn(qL, b) && !c.tf ? (c.Wf(), !1) : a.apply(this, arguments)
        }
    })(z.wA.prototype.execCommand);
    (function (a, b) {
        z.TD.prototype.execCommand = function (c) {
            var d = this.F;
            return !z.A(b, c) || d.tf || (d.Wf(), d.tf) ? a.apply(this, arguments) : !1
        }
    })(z.TD.prototype.execCommand, ["+equation"]);
    lL = "video";
    pL = z.Uc ? "⌘" : "ctrl";
    z.kH[lL] = {Aa: lL, R: "插入视频", Pa: "tr-icon tr-video", factory: z.WE};
    z.kH["+equation"] = {Aa: "+equation", R: {}.MX, Pa: "tr-icon tr-equation", factory: z.WE};
    z.kH["+bold"].R = "粗体 (" + pL + "+b)";
    z.kH["+italic"].R = "斜体 (" + pL + "+i)";
    z.kH["+underline"].R = "下划线 (" + pL + "+u)";
    z.kH["+superscript"].R = "引用内容";
    z.kH["+insertOrderedList"].R = "有序列表";
    z.kH["+insertUnorderedList"].R = "无序列表";
    z.kH["+removeFormat"].R = "清除格式";
    z.kH.image.R = "插入图片";
    z.kH[lL].R = "插入视频";
    z.kH["+equation"].R = "插入公式";
    z.la(mL);
    mL.prototype.$e = function (a, b) {
        this.config = b;
        var c, d, f;
        d = z.N("zm-editable-toolbar-container", a);
        c = z.N("zm-editable-editor-outer", a);
        f = z.N("zm-editable-editor-field-element", a);
        var g = new z.gB(f.id);
        g.fN = 89;
        var h = nL(d, b);
        new rK(g, h);
        z.Ac(g, h);
        wI(g, new UI);
        wI(g, new gK);
        if (b.loremIpsum_ && (wI(g, new iK(b.loremIpsum_)), z.B)) g.on("load", function () {
            z.ld(g.m(), "focus", function () {
                g.execCommand("clearlorem", !0)
            })
        });
        wI(g, new uJ);
        wI(g, new gL);
        wI(g, new mK);
        d = new KK;
        wI(g, d);
        wI(g, new z.$D);
        wI(g, new kL);
        wI(g, new uK);
        wI(g, new eK);
        wI(g, new MJ);
        wI(g, new zK);
        b.enableFullScreen && (c = new z.fF({title: "写作模式", Ek: c}), wI(g, c));
        g.on("load", function () {
            b.useScraper_ && oL(g, h)
        }, !1, this);
        return [g, h]
    };
    z.v("ZH.createRichTextEditor", function (a, b) {
        return mL.ba().$e(a, b)
    });
    z.jg("richtexteditor");
}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/richtexteditor.aa0a4005.js