function scrollForFixedColumn() {
    var e = $(".application-footer");
    if (e.length > 0) {
      if ($('.split-layout-secondary').css('display') !== "none") {
        var t = e.offset().top,
            n = $(window).height(),
            i = $(".split-layout--fixed-left").height(),
            r = $(".split-layout-secondary"),
            a = "split-layout-secondary--fixed";
        r.css("max-height", i), $(window).on("scroll", function() {
            var e = $(window).scrollTop();
            total = n + e - t - 1;
            total >= 0 ? r.removeClass(a) : r.addClass(a)
        })
      }
    }
}

window.App = {},
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = pe.type(e);
            return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            if (pe.isFunction(t)) return pe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return pe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (De.test(t)) return pe.filter(t, e, n);
                t = pe.filter(t, e)
            }
            return pe.grep(e, function(e) {
                return pe.inArray(e, t) > -1 !== n
            })
        }

        function r(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function a(e) {
            var t = {};
            return pe.each(e.match(Ee) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function o() {
            ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (o(), pe.ready())
        }

        function l(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace(Pe, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : je.test(n) ? pe.parseJSON(n) : n)
                    } catch (e) {}
                    pe.data(e, t, n)
                } else n = undefined
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)
                if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c(e, t, n, i) {
            if (Ae(e)) {
                var r, a, o = pe.expando,
                    s = e.nodeType,
                    l = s ? pe.cache : e,
                    u = s ? e[o] : e[o] && o;
                if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof t) return u || (u = s ? e[o] = ne.pop() || pe.guid++ : o), l[u] || (l[u] = s ? {} : {
                    toJSON: pe.noop
                }), "object" != typeof t && "function" != typeof t || (i ? l[u] = pe.extend(l[u], t) : l[u].data = pe.extend(l[u].data, t)), a = l[u], i || (a.data || (a.data = {}), a = a.data), n !== undefined && (a[pe.camelCase(t)] = n), "string" == typeof t ? null == (r = a[t]) && (r = a[pe.camelCase(t)]) : r = a, r
            }
        }

        function d(e, t, n) {
            if (Ae(e)) {
                var i, r, a = e.nodeType,
                    o = a ? pe.cache : e,
                    s = a ? e[pe.expando] : pe.expando;
                if (o[s]) {
                    if (t && (i = n ? o[s] : o[s].data)) {
                        pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !u(i) : !pe.isEmptyObject(i)) return
                    }(n || (delete o[s].data, u(o[s]))) && (a ? pe.cleanData([e], !0) : de.deleteExpando || o != o.window ? delete o[s] : o[s] = undefined)
                }
            }
        }

        function f(e, t, n, i) {
            var r, a = 1,
                o = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return pe.css(e, t, "")
                },
                l = s(),
                u = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                c = (pe.cssNumber[t] || "px" !== u && +l) && Fe.exec(pe.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do {
                    a = a || ".5", c /= a, pe.style(e, t, c + u)
                } while (a !== (a = s() / l) && 1 !== a && --o)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function p(e) {
            var t = Ve.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function h(e, t) {
            var n, i, r = 0,
                a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
            if (!a)
                for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || pe.nodeName(i, t) ? a.push(i) : pe.merge(a, h(i, t));
            return t === undefined || t && pe.nodeName(e, t) ? pe.merge([e], a) : a
        }

        function g(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
        }

        function m(e) {
            He.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t, n, i, r) {
            for (var a, o, s, l, u, c, d, f = e.length, y = p(t), v = [], b = 0; b < f; b++)
                if ((o = e[b]) || 0 === o)
                    if ("object" === pe.type(o)) pe.merge(v, o.nodeType ? [o] : o);
                    else if (Be.test(o)) {
                for (l = l || y.appendChild(t.createElement("div")), u = (Re.exec(o) || ["", ""])[1].toLowerCase(), d = Xe[u] || Xe._default, l.innerHTML = d[1] + pe.htmlPrefilter(o) + d[2], a = d[0]; a--;) l = l.lastChild;
                if (!de.leadingWhitespace && $e.test(o) && v.push(t.createTextNode($e.exec(o)[0])), !de.tbody)
                    for (o = "table" !== u || ze.test(o) ? "<table>" !== d[1] || ze.test(o) ? 0 : l : l.firstChild, a = o && o.childNodes.length; a--;) pe.nodeName(c = o.childNodes[a], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (pe.merge(v, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = y.lastChild
            } else v.push(t.createTextNode(o));
            for (l && y.removeChild(l), de.appendChecked || pe.grep(h(v, "input"), m), b = 0; o = v[b++];)
                if (i && pe.inArray(o, i) > -1) r && r.push(o);
                else if (s = pe.contains(o.ownerDocument, o), l = h(y.appendChild(o), "script"), s && g(l), n)
                for (a = 0; o = l[a++];) qe.test(o.type || "") && n.push(o);
            return l = null, y
        }

        function v() {
            return !0
        }

        function b() {
            return !1
        }

        function x() {
            try {
                return ie.activeElement
            } catch (e) {}
        }

        function k(e, t, n, i, r, a) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = undefined);
                for (s in t) k(e, s, n, i, t[s], a);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = b;
            else if (!r) return e;
            return 1 === a && (o = r, r = function(e) {
                return pe().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = pe.guid++)), e.each(function() {
                pe.event.add(this, t, r, i, n)
            })
        }

        function w(e, t) {
            return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function D(e) {
            return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
        }

        function C(e) {
            var t = it.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function _(e, t) {
            if (1 === t.nodeType && pe.hasData(e)) {
                var n, i, r, a = pe._data(e),
                    o = pe._data(t, a),
                    s = a.events;
                if (s) {
                    delete o.handle, o.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; i < r; i++) pe.event.add(t, n, s[n][i])
                }
                o.data && (o.data = pe.extend({}, o.data))
            }
        }

        function S(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                    r = pe._data(t);
                    for (i in r.events) pe.removeEvent(t, i, r.handle);
                    t.removeAttribute(pe.expando)
                }
                "script" === n && t.text !== e.text ? (D(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && He.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function T(e, t, n, i) {
            t = ae.apply([], t);
            var r, a, o, s, l, u, c = 0,
                d = e.length,
                f = d - 1,
                p = t[0],
                g = pe.isFunction(p);
            if (g || d > 1 && "string" == typeof p && !de.checkClone && nt.test(p)) return e.each(function(r) {
                var a = e.eq(r);
                g && (t[0] = p.call(this, r, a.html())), T(a, t, n, i)
            });
            if (d && (u = y(t, e[0].ownerDocument, !1, e, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                for (s = pe.map(h(u, "script"), D), o = s.length; c < d; c++) a = u, c !== f && (a = pe.clone(a, !0, !0), o && pe.merge(s, h(a, "script"))), n.call(e[c], a, c);
                if (o)
                    for (l = s[s.length - 1].ownerDocument, pe.map(s, C), c = 0; c < o; c++) a = s[c], qe.test(a.type || "") && !pe._data(a, "globalEval") && pe.contains(l, a) && (a.src ? pe._evalUrl && pe._evalUrl(a.src) : pe.globalEval((a.text || a.textContent || a.innerHTML || "").replace(rt, "")));
                u = r = null
            }
            return e
        }

        function E(e, t, n) {
            for (var i, r = t ? pe.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || pe.cleanData(h(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && g(h(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function N(e, t) {
            var n = pe(t.createElement(e)).appendTo(t.body),
                i = pe.css(n[0], "display");
            return n.detach(), i
        }

        function M(e) {
            var t = ie,
                n = lt[e];
            return n || (n = N(e, t), "none" !== n && n || (st = (st || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (st[0].contentWindow || st[0].contentDocument).document, t.write(), t.close(), n = N(e, t), st.detach()), lt[e] = n), n
        }

        function A(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function j(e) {
            if (e in Dt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = wt.length; n--;)
                if ((e = wt[n] + t) in Dt) return e
        }

        function P(e, t) {
            for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (a[o] = pe._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (a[o] = pe._data(i, "olddisplay", M(i.nodeName)))) : (r = Le(i), (n && "none" !== n || !r) && pe._data(i, "olddisplay", r ? n : pe.css(i, "display"))));
            for (o = 0; o < s; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
            return e
        }

        function I(e, t, n) {
            var i = bt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function F(e, t, n, i, r) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += pe.css(e, n + Oe[a], !0, r)), i ? ("content" === n && (o -= pe.css(e, "padding" + Oe[a], !0, r)), "margin" !== n && (o -= pe.css(e, "border" + Oe[a] + "Width", !0, r))) : (o += pe.css(e, "padding" + Oe[a], !0, r), "padding" !== n && (o += pe.css(e, "border" + Oe[a] + "Width", !0, r)));
            return o
        }

        function O(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = pt(e),
                o = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, a);
            if (r <= 0 || null == r) {
                if (r = ht(e, t, a), (r < 0 || null == r) && (r = e.style[t]), ct.test(r)) return r;
                i = o && (de.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + F(e, t, n || (o ? "border" : "content"), i, a) + "px"
        }

        function L(e, t, n, i, r) {
            return new L.prototype.init(e, t, n, i, r)
        }

        function Y() {
            return e.setTimeout(function() {
                Ct = undefined
            }), Ct = pe.now()
        }

        function H(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Oe[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function R(e, t, n) {
            for (var i, r = (V.tweeners[t] || []).concat(V.tweeners["*"]), a = 0, o = r.length; a < o; a++)
                if (i = r[a].call(n, t, e)) return i
        }

        function q(e, t, n) {
            var i, r, a, o, s, l, u, c = this,
                d = {},
                f = e.style,
                p = e.nodeType && Le(e),
                h = pe._data(e, "fxshow");
            n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = pe.css(e, "display"), "inline" === ("none" === u ? pe._data(e, "olddisplay") || M(e.nodeName) : u) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== M(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], St.exec(r)) {
                    if (delete t[i], a = a || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !h || h[i] === undefined) continue;
                        p = !0
                    }
                    d[i] = h && h[i] || pe.style(e, i)
                } else u = undefined;
            if (pe.isEmptyObject(d)) "inline" === ("none" === u ? M(e.nodeName) : u) && (f.display = u);
            else {
                h ? "hidden" in h && (p = h.hidden) : h = pe._data(e, "fxshow", {}), a && (h.hidden = !p), p ? pe(e).show() : c.done(function() {
                    pe(e).hide()
                }), c.done(function() {
                    var t;
                    pe._removeData(e, "fxshow");
                    for (t in d) pe.style(e, t, d[t])
                });
                for (i in d) o = R(p ? h[i] : 0, i, c), i in h || (h[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function $(e, t) {
            var n, i, r, a, o;
            for (n in e)
                if (i = pe.camelCase(n), r = t[i], a = e[n], pe.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = pe.cssHooks[i]) && "expand" in o) {
                    a = o.expand(a), delete e[i];
                    for (n in a) n in e || (e[n] = a[n], t[n] = r)
                } else t[i] = r
        }

        function V(e, t, n) {
            var i, r, a = 0,
                o = V.prefilters.length,
                s = pe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = Ct || Y(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(a);
                    return s.notifyWith(e, [u, a, n]), a < 1 && l ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, {
                        specialEasing: {},
                        easing: pe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ct || Y(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for ($(c, u.opts.specialEasing); a < o; a++)
                if (i = V.prefilters[a].call(u, e, c, u.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)), i;
            return pe.map(c, R, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), pe.fx.timer(pe.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function X(e) {
            return pe.attr(e, "class") || ""
        }

        function B(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    a = t.toLowerCase().match(Ee) || [];
                if (pe.isFunction(n))
                    for (; i = a[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function z(e, t, n, i) {
            function r(s) {
                var l;
                return a[s] = !0, pe.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var a = {},
                o = e === Qt;
            return r(t.dataTypes[0]) || !a["*"] && r("*")
        }

        function W(e, t) {
            var n, i, r = pe.ajaxSettings.flatOptions || {};
            for (i in t) t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && pe.extend(!0, e, n), e
        }

        function U(e, t, n) {
            for (var i, r, a, o, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (o in s)
                    if (s[o] && s[o].test(r)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) a = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        a = o;
                        break
                    }
                    i || (i = o)
                }
                a = a || i
            }
            if (a) return a !== l[0] && l.unshift(a), n[a]
        }

        function K(e, t, n, i) {
            var r, a, o, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
            for (a = c.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (!(o = u[l + " " + a] || u["* " + a]))
                    for (r in u)
                        if (s = r.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === o ? o = u[r] : !0 !== u[r] && (a = s[0], c.unshift(s[1]));
                            break
                        }
                if (!0 !== o)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: o ? e : "No conversion from " + l + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function Z(e) {
            return e.style && e.style.display || pe.css(e, "display")
        }

        function Q(e) {
            if (!pe.contains(e.ownerDocument || ie, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === Z(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function G(e, t, n, i) {
            var r;
            if (pe.isArray(t)) pe.each(t, function(t, r) {
                n || nn.test(e) ? i(e, r) : G(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== pe.type(t)) i(e, t);
            else
                for (r in t) G(e + "[" + r + "]", t[r], n, i)
        }

        function J() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }

        function ee() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function te(e) {
            return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ne = [],
            ie = e.document,
            re = ne.slice,
            ae = ne.concat,
            oe = ne.push,
            se = ne.indexOf,
            le = {},
            ue = le.toString,
            ce = le.hasOwnProperty,
            de = {},
            fe = "1.12.4",
            pe = function(e, t) {
                return new pe.fn.init(e, t)
            },
            he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ge = /^-ms-/,
            me = /-([\da-z])/gi,
            ye = function(e, t) {
                return t.toUpperCase()
            };
        pe.fn = pe.prototype = {
            jquery: fe,
            constructor: pe,
            selector: "",
            length: 0,
            toArray: function() {
                return re.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : re.call(this)
            },
            pushStack: function(e) {
                var t = pe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return pe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(pe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(re.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: oe,
            sort: ne.sort,
            splice: ne.splice
        }, pe.extend = pe.fn.extend = function() {
            var e, t, n, i, r, a, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || pe.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = o[i], n = r[i], o !== n && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, a = e && pe.isArray(e) ? e : []) : a = e && pe.isPlainObject(e) ? e : {}, o[i] = pe.extend(u, a, n)) : n !== undefined && (o[i] = n));
            return o
        }, pe.extend({
            expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === pe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === pe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (!de.ownFirst)
                    for (t in e) return ce.call(e, t);
                for (t in e);
                return t === undefined || ce.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && pe.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ge, "ms-").replace(me, ye)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, r = 0;
                if (n(e))
                    for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(he, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : oe.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (se) return se.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                if (n !== n)
                    for (; t[i] !== undefined;) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
                return i
            },
            map: function(e, t, i) {
                var r, a, o = 0,
                    s = [];
                if (n(e))
                    for (r = e.length; o < r; o++) null != (a = t(e[o], o, i)) && s.push(a);
                else
                    for (o in e) null != (a = t(e[o], o, i)) && s.push(a);
                return ae.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), pe.isFunction(e) ? (n = re.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(re.call(arguments)))
                }, i.guid = e.guid = e.guid || pe.guid++, i) : undefined
            },
            now: function() {
                return +new Date
            },
            support: de
        }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            le["[object " + t + "]"] = t.toLowerCase()
        });
        var ve = function(e) {
            function t(e, t, n, i) {
                var r, a, o, s, l, u, d, p, h = t && t.ownerDocument,
                    g = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                if (!i && ((t ? t.ownerDocument || t : R) !== j && A(t), t = t || j, I)) {
                    if (11 !== g && (u = ye.exec(e)))
                        if (r = u[1]) {
                            if (9 === g) {
                                if (!(o = t.getElementById(r))) return n;
                                if (o.id === r) return n.push(o), n
                            } else if (h && (o = h.getElementById(r)) && Y(t, o) && o.id === r) return n.push(o), n
                        } else {
                            if (u[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = u[3]) && k.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (k.qsa && !B[e + " "] && (!F || !F.test(e))) {
                        if (1 !== g) h = t, p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = H), d = _(e), a = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; a--;) d[a] = l + " " + f(d[a]);
                            p = d.join(","), h = ve.test(e) && c(t.parentNode) || t
                        }
                        if (p) try {
                            return G.apply(n, h.querySelectorAll(p)), n
                        } catch (e) {} finally {
                            s === H && t.removeAttribute("id")
                        }
                    }
                }
                return T(e.replace(se, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function r(e) {
                var t = j.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function a(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
            }

            function o(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function f(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    a = $++;
                return t.first ? function(t, n, a) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, a)
                } : function(t, n, o) {
                    var s, l, u, c = [q, a];
                    if (o) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, o)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (u = t[H] || (t[H] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === q && s[1] === a) return c[2] = s[2];
                                if (l[i] = c, c[2] = e(t, n, o)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
                return i
            }

            function m(e, t, n, i, r) {
                for (var a, o = [], s = 0, l = e.length, u = null != t; s < l; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), u && t.push(s)));
                return o
            }

            function y(e, t, n, r, a, o) {
                return r && !r[H] && (r = y(r)), a && !a[H] && (a = y(a, o)), i(function(i, o, s, l) {
                    var u, c, d, f = [],
                        p = [],
                        h = o.length,
                        y = i || g(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !i && t ? y : m(y, f, e, s, l),
                        b = n ? a || (i ? e : h || r) ? [] : o : v;
                    if (n && n(v, b, s, l), r)
                        for (u = m(b, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(v[p[c]] = d));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(v[c] = d);
                                a(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = a ? ee(i, d) : f[c]) > -1 && (i[u] = !(o[u] = d))
                        }
                    } else b = m(b === o ? b.splice(h, b.length) : b), a ? a(null, o, b, l) : G.apply(o, b)
                })
            }

            function v(e) {
                for (var t, n, i, r = e.length, a = w.relative[e[0].type], o = a || w.relative[" "], s = a ? 1 : 0, l = p(function(e) {
                        return e === t
                    }, o, !0), u = p(function(e) {
                        return ee(t, e) > -1
                    }, o, !0), c = [function(e, n, i) {
                        var r = !a && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, r
                    }]; s < r; s++)
                    if (n = w.relative[e[s].type]) c = [p(h(c), n)];
                    else {
                        if (n = w.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                            for (i = ++s; i < r && !w.relative[e[i].type]; i++);
                            return y(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(e, n) {
                var r = n.length > 0,
                    a = e.length > 0,
                    o = function(i, o, s, l, u) {
                        var c, d, f, p = 0,
                            h = "0",
                            g = i && [],
                            y = [],
                            v = E,
                            b = i || a && w.find.TAG("*", u),
                            x = q += null == v ? 1 : Math.random() || .1,
                            k = b.length;
                        for (u && (E = o === j || o || u); h !== k && null != (c = b[h]); h++) {
                            if (a && c) {
                                for (d = 0, o || c.ownerDocument === j || (A(c), s = !I); f = e[d++];)
                                    if (f(c, o || j, s)) {
                                        l.push(c);
                                        break
                                    }
                                u && (q = x)
                            }
                            r && ((c = !f && c) && p--, i && g.push(c))
                        }
                        if (p += h, r && h !== p) {
                            for (d = 0; f = n[d++];) f(g, y, o, s);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) g[h] || y[h] || (y[h] = Z.call(l));
                                y = m(y)
                            }
                            G.apply(l, y), u && !i && y.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (q = x, E = v), g
                    };
                return r ? i(o) : o
            }
            var x, k, w, D, C, _, S, T, E, N, M, A, j, P, I, F, O, L, Y, H = "sizzle" + 1 * new Date,
                R = e.document,
                q = 0,
                $ = 0,
                V = n(),
                X = n(),
                B = n(),
                z = function(e, t) {
                    return e === t && (M = !0), 0
                },
                W = 1 << 31,
                U = {}.hasOwnProperty,
                K = [],
                Z = K.pop,
                Q = K.push,
                G = K.push,
                J = K.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                oe = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(ae),
                fe = new RegExp("^" + ie + "$"),
                pe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                me = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ve = /[+~]/,
                be = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                ke = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                we = function() {
                    A()
                };
            try {
                G.apply(K = J.call(R.childNodes), R.childNodes), K[R.childNodes.length].nodeType
            } catch (e) {
                G = {
                    apply: K.length ? function(e, t) {
                        Q.apply(e, J.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            k = t.support = {}, C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, A = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : R;
                return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, P = j.documentElement, I = !C(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), k.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), k.getElementsByTagName = r(function(e) {
                    return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                }), k.getElementsByClassName = me.test(j.getElementsByClassName), k.getById = r(function(e) {
                    return P.appendChild(e).id = H, !j.getElementsByName || !j.getElementsByName(H).length
                }), k.getById ? (w.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && I) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, w.filter.ID = function(e) {
                    var t = e.replace(xe, ke);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete w.find.ID, w.filter.ID = function(e) {
                    var t = e.replace(xe, ke);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), w.find.TAG = k.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, w.find.CLASS = k.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && I) return t.getElementsByClassName(e)
                }, O = [], F = [], (k.qsa = me.test(j.querySelectorAll)) && (r(function(e) {
                    P.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || F.push(".#.+[+~]")
                }), r(function(e) {
                    var t = j.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (k.matchesSelector = me.test(L = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
                    k.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), O.push("!=", ae)
                }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = me.test(P.compareDocumentPosition), Y = t || me.test(P.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, z = t ? function(e, t) {
                    if (e === t) return M = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                        1 & n || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === R && Y(R, e) ? -1 : t === j || t.ownerDocument === R && Y(R, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return M = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!r || !a) return e === j ? -1 : t === j ? 1 : r ? -1 : a ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                    if (r === a) return o(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? o(s[i], l[i]) : s[i] === R ? -1 : l[i] === R ? 1 : 0
                }, j) : j
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== j && A(e), n = n.replace(ce, "='$1']"), k.matchesSelector && I && !B[n + " "] && (!O || !O.test(n)) && (!F || !F.test(n))) try {
                    var i = L.call(e, n);
                    if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, j, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== j && A(e), Y(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== j && A(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !I) : undefined;
                return i !== undefined ? i : k.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (M = !k.detectDuplicates, N = !k.sortStable && e.slice(0), e.sort(z), M) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return N = null, e
            }, D = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += D(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += D(t);
                return n
            }, w = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, ke).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = V[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && V(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var a = t.attr(r, e);
                            return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var a = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, d, f, p, h, g = a !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s,
                                b = !1;
                            if (m) {
                                if (a) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? m.firstChild : m.lastChild], o && v) {
                                    for (f = m, d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === q && u[1], b = p && u[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++b && f === t) {
                                            c[e] = [q, p, b];
                                            break
                                        }
                                } else if (v && (f = t, d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === q && u[1], b = p), !1 === b)
                                    for (;
                                        (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++b || (v && (d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [q, b]), f !== t)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[H] ? a(n) : a.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = a(e, n), o = r.length; o--;) i = ee(e, r[o]), e[i] = !(t[i] = r[o])
                        }) : function(e) {
                            return a(e, 0, r)
                        }) : a
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(se, "$1"));
                        return r[H] ? i(function(e, t, n, i) {
                            for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                        }) : function(e, i, a) {
                            return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(xe, ke),
                            function(t) {
                                return (t.textContent || t.innerText || D(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, ke).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === P
                    },
                    focus: function(e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[x] = l(x);
            return d.prototype = w.filters = w.pseudos, w.setFilters = new d, _ = t.tokenize = function(e, n) {
                var i, r, a, o, s, l, u, c = X[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = w.preFilter; s;) {
                    i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), a.push({
                        value: i,
                        type: r[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (o in w.filter) !(r = pe[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(), a.push({
                        value: i,
                        type: o,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : X(e, l).slice(0)
            }, S = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    a = B[e + " "];
                if (!a) {
                    for (t || (t = _(e)), n = t.length; n--;) a = v(t[n]), a[H] ? i.push(a) : r.push(a);
                    a = B(e, b(r, i)), a.selector = e
                }
                return a
            }, T = t.select = function(e, t, n, i) {
                var r, a, o, s, l, u = "function" == typeof e && e,
                    d = !i && _(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && k.getById && 9 === t.nodeType && I && w.relative[a[1].type]) {
                        if (!(t = (w.find.ID(o.matches[0].replace(xe, ke), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                    }
                    for (r = pe.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !w.relative[s = o.type]);)
                        if ((l = w.find[s]) && (i = l(o.matches[0].replace(xe, ke), ve.test(a[0].type) && c(t.parentNode) || t))) {
                            if (a.splice(r, 1), !(e = i.length && f(a))) return G.apply(n, i), n;
                            break
                        }
                }
                return (u || S(e, d))(i, t, !I, n, !t || ve.test(e) && c(t.parentNode) || t), n
            }, k.sortStable = H.split("").sort(z).join("") === H, k.detectDuplicates = !!M, A(), k.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(j.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), k.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || a("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || a(te, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;
        var be = function(e, t, n) {
                for (var i = [], r = n !== undefined;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && pe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            xe = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            ke = pe.expr.match.needsContext,
            we = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            De = /^.[^:#\[\.,]*$/;
        pe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, pe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (pe.contains(i[t], this)) return !0
                }));
                for (t = 0; t < r; t++) pe.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && ke.test(e) ? pe(e) : e || [], !1).length
            }
        });
        var Ce, _e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (pe.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Ce, "string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : _e.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), we.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((r = ie.getElementById(i[2])) && r.parentNode) {
                    if (r.id !== i[2]) return Ce.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        }).prototype = pe.fn, Ce = pe(ie);
        var Se = /^(?:parents|prev(?:Until|All))/,
            Te = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pe.fn.extend({
            has: function(e) {
                var t, n = pe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (pe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, a = [], o = ke.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
                return this.pushStack(a.length > 1 ? pe.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), pe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return be(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return be(e, "nextSibling")
            },
            prevAll: function(e) {
                return be(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function(e) {
                return xe((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return xe(e.firstChild)
            },
            contents: function(e) {
                return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
            }
        }, function(e, t) {
            pe.fn[e] = function(n, i) {
                var r = pe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Te[e] || (r = pe.uniqueSort(r)), Se.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var Ee = /\S+/g;
        pe.Callbacks = function(e) {
            e = "string" == typeof e ? a(e) : pe.extend({}, e);
            var t, n, i, r, o = [],
                s = [],
                l = -1,
                u = function() {
                    for (r = e.once, i = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                },
                c = {
                    add: function() {
                        return o && (n && !t && (l = o.length - 1, s.push(n)), function t(n) {
                            pe.each(n, function(n, i) {
                                pe.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return pe.each(arguments, function(e, t) {
                            for (var n;
                                (n = pe.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? pe.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = s = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = !0, n || c.disable(), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, pe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return pe.Deferred(function(n) {
                                pe.each(t, function(t, a) {
                                    var o = pe.isFunction(e[t]) && e[t];
                                    r[a[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? pe.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, pe.each(t, function(e, a) {
                    var o = a[2],
                        s = a[3];
                    i[a[1]] = o.add, s && o.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function() {
                        return r[a[0] + "With"](this === r ? i : this, arguments), this
                    }, r[a[0] + "With"] = o.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    a = re.call(arguments),
                    o = a.length,
                    s = 1 !== o || e && pe.isFunction(e.promise) ? o : 0,
                    l = 1 === s ? e : pe.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (o > 1)
                    for (t = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) a[r] && pe.isFunction(a[r].promise) ? a[r].promise().progress(u(r, n, t)).done(u(r, i, a)).fail(l.reject) : --s;
                return s || l.resolveWith(i, a), l.promise()
            }
        });
        var Ne;
        pe.fn.ready = function(e) {
            return pe.ready.promise().done(e), this
        }, pe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? pe.readyWait++ : pe.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (Ne.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
            }
        }), pe.ready.promise = function(t) {
            if (!Ne)
                if (Ne = pe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(pe.ready);
                else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
            else {
                ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!pe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        o(), pe.ready()
                    }
                }()
            }
            return Ne.promise(t)
        }, pe.ready.promise();
        var Me;
        for (Me in pe(de)) break;
        de.ownFirst = "0" === Me, de.inlineBlockNeedsLayout = !1, pe(function() {
                var e, t, n, i;
                (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = ie.createElement("div");
                de.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    de.deleteExpando = !1
                }
                e = null
            }();
        var Ae = function(e) {
                var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            },
            je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Pe = /([A-Z])/g;
        pe.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !u(e)
                },
                data: function(e, t, n) {
                    return c(e, t, n)
                },
                removeData: function(e, t) {
                    return d(e, t)
                },
                _data: function(e, t, n) {
                    return c(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return d(e, t, !0)
                }
            }), pe.fn.extend({
                data: function(e, t) {
                    var n, i, r, a = this[0],
                        o = a && a.attributes;
                    if (e === undefined) {
                        if (this.length && (r = pe.data(a), 1 === a.nodeType && !pe._data(a, "parsedAttrs"))) {
                            for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), l(a, i, r[i])));
                            pe._data(a, "parsedAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function() {
                        pe.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        pe.data(this, e, t)
                    }) : a ? l(a, e, pe.data(a, e)) : undefined
                },
                removeData: function(e) {
                    return this.each(function() {
                        pe.removeData(this, e)
                    })
                }
            }), pe.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = pe._data(e, t), n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = pe.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        a = pe._queueHooks(e, t),
                        o = function() {
                            pe.dequeue(e, t)
                        };
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return pe._data(e, n) || pe._data(e, n, {
                        empty: pe.Callbacks("once memory").add(function() {
                            pe._removeData(e, t + "queue"), pe._removeData(e, n)
                        })
                    })
                }
            }), pe.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : t === undefined ? this : this.each(function() {
                        var n = pe.queue(this, e, t);
                        pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        pe.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        r = pe.Deferred(),
                        a = this,
                        o = this.length,
                        s = function() {
                            --i || r.resolveWith(a, [a])
                        };
                    for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; o--;)(n = pe._data(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                    return s(), r.promise(t)
                }
            }),
            function() {
                var e;
                de.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, i;
                    return (n = ie.getElementsByTagName("body")[0]) && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
                }
            }();
        var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Fe = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
            Oe = ["Top", "Right", "Bottom", "Left"],
            Le = function(e, t) {
                return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
            },
            Ye = function(e, t, n, i, r, a, o) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === pe.type(n)) {
                    r = !0;
                    for (s in n) Ye(e, t, s, n[s], !0, a, o)
                } else if (i !== undefined && (r = !0, pe.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(pe(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
            },
            He = /^(?:checkbox|radio)$/i,
            Re = /<([\w:-]+)/,
            qe = /^$|\/(?:java|ecma)script/i,
            $e = /^\s+/,
            Ve = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var e = ie.createElement("div"),
                t = ie.createDocumentFragment(),
                n = ie.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando)
        }();
        var Xe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
        var Be = /<|&#?\w+;/,
            ze = /<tbody/i;
        ! function() {
            var t, n, i = ie.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = !1 === i.attributes[n].expando);
            i = null
        }();
        var We = /^(?:input|select|textarea)$/i,
            Ue = /^key/,
            Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ze = /^(?:focusinfocus|focusoutblur)$/,
            Qe = /^([^.]*)(?:\.(.+)|)/;
        pe.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var a, o, s, l, u, c, d, f, p, h, g, m = pe._data(e);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = pe.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                            return void 0 === pe || e && pe.event.triggered === e.type ? undefined : pe.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), t = (t || "").match(Ee) || [""], s = t.length; s--;) a = Qe.exec(t[s]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (u = pe.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = pe.event.special[p] || {}, d = pe.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && pe.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, l), (f = o[p]) || (f = o[p] = [], f.delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var a, o, s, l, u, c, d, f, p, h, g, m = pe.hasData(e) && pe._data(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(Ee) || [""], u = t.length; u--;)
                        if (s = Qe.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = pe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = f.length; a--;) o = f[a], !r && g !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (f.splice(a, 1), o.selector && f.delegateCount--, d.remove && d.remove.call(e, o));
                            l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || pe.removeEvent(e, p, m.handle), delete c[p])
                        } else
                            for (p in c) pe.event.remove(e, p + t[u], n, i, !0);
                    pe.isEmptyObject(c) && (delete m.handle, pe._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var a, o, s, l, u, c, d, f = [i || ie],
                    p = ce.call(t, "type") ? t.type : t,
                    h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ze.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), o = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), u = pe.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                    if (!r && !u.noBubble && !pe.isWindow(i)) {
                        for (l = u.delegateType || p, Ze.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                        c === (i.ownerDocument || ie) && f.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0;
                        (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, a = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), a && a.apply(s, n), (a = o && s[o]) && a.apply && Ae(s) && (t.result = a.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), n)) && Ae(i) && o && i[p] && !pe.isWindow(i)) {
                        c = i[o], c && (i[o] = null), pe.event.triggered = p;
                        try {
                            i[p]()
                        } catch (e) {}
                        pe.event.triggered = undefined, c && (i[o] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = pe.event.fix(e);
                var t, n, i, r, a, o = [],
                    s = re.call(arguments),
                    l = (pe._data(this, "events") || {})[e.type] || [],
                    u = pe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (o = pe.event.handlers.call(this, e, l), t = 0;
                        (r = o[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, (i = ((pe.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, a, o = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < s; n++) a = t[n], r = a.selector + " ", i[r] === undefined && (i[r] = a.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), i[r] && i.push(a);
                            i.length && o.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < t.length && o.push({
                    elem: this,
                    handlers: t.slice(s)
                }), o
            },
            fix: function(e) {
                if (e[pe.expando]) return e;
                var t, n, i, r = e.type,
                    a = e,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Ke.test(r) ? this.mouseHooks : Ue.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new pe.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
                return e.target || (e.target = a.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, a = t.button,
                        o = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || a === undefined || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== x() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === x() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(e) {
                        return pe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = pe.extend(new pe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                pe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, pe.removeEvent = ie.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, pe.Event = function(e, t) {
            if (!(this instanceof pe.Event)) return new pe.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? v : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0
        }, pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    return r && (r === i || pe.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), de.submit || (pe.event.special.submit = {
            setup: function() {
                if (pe.nodeName(this, "form")) return !1;
                pe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : undefined;
                    n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), pe._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                if (pe.nodeName(this, "form")) return !1;
                pe.event.remove(this, "._submit")
            }
        }), de.change || (pe.event.special.change = {
            setup: function() {
                if (We.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), pe.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
                })), !1;
                pe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    We.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                    }), pe._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return pe.event.remove(this, "._change"), !We.test(this.nodeName)
            }
        }), de.focusin || pe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                pe.event.simulate(t, e.target, pe.event.fix(e))
            };
            pe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = pe._data(i, t);
                    r || i.addEventListener(e, n, !0), pe._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = pe._data(i, t) - 1;
                    r ? pe._data(i, t, r) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
                }
            }
        }), pe.fn.extend({
            on: function(e, t, n, i) {
                return k(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return k(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), this.each(function() {
                    pe.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    pe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return pe.event.trigger(e, t, n, !0)
            }
        });
        var Ge = / jQuery\d+="(?:null|\d+)"/g,
            Je = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"),
            et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            tt = /<script|<style|<link/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            it = /^true\/(.*)/,
            rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            at = p(ie),
            ot = at.appendChild(ie.createElement("div"));
        pe.extend({
            htmlPrefilter: function(e) {
                return e.replace(et, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, a, o, s, l = pe.contains(e.ownerDocument, e);
                if (de.html5Clone || pe.isXMLDoc(e) || !Je.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ot.innerHTML = e.outerHTML, ot.removeChild(a = ot.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                    for (i = h(a), s = h(e), o = 0; null != (r = s[o]); ++o) i[o] && S(r, i[o]);
                if (t)
                    if (n)
                        for (s = s || h(e), i = i || h(a), o = 0; null != (r = s[o]); o++) _(r, i[o]);
                    else _(e, a);
                return i = h(a, "script"), i.length > 0 && g(i, !l && h(e, "script")), i = s = r = null, a
            },
            cleanData: function(e, t) {
                for (var n, i, r, a, o = 0, s = pe.expando, l = pe.cache, u = de.attributes, c = pe.event.special; null != (n = e[o]); o++)
                    if ((t || Ae(n)) && (r = n[s], a = r && l[r])) {
                        if (a.events)
                            for (i in a.events) c[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, a.handle);
                        l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(r))
                    }
            }
        }), pe.fn.extend({
            domManip: T,
            detach: function(e) {
                return E(this, e, !0)
            },
            remove: function(e) {
                return E(this, e)
            },
            text: function(e) {
                return Ye(this, function(e) {
                    return e === undefined ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        w(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = w(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && pe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return pe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ye(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(Ge, "") : undefined;
                    if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Je.test(e)) && (de.leadingWhitespace || !$e.test(e)) && !Xe[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pe.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return T(this, arguments, function(t) {
                    var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), pe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            pe.fn[e] = function(e) {
                for (var n, i = 0, r = [], a = pe(e), o = a.length - 1; i <= o; i++) n = i === o ? this : this.clone(!0), pe(a[i])[t](n), oe.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var st, lt = {
                HTML: "block",
                BODY: "block"
            },
            ut = /^margin/,
            ct = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
            dt = function(e, t, n, i) {
                var r, a, o = {};
                for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                r = n.apply(e, i || []);
                for (a in t) e.style[a] = o[a];
                return r
            },
            ft = ie.documentElement;
        ! function() {
            function t() {
                var t, c, d = ie.documentElement;
                d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = o = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, t = u.appendChild(ie.createElement("div")), t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", o = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", a = 0 === u.getClientRects().length, a && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", t = u.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", a = 0 === t[0].offsetHeight)), d.removeChild(l)
            }
            var n, i, r, a, o, s, l = ie.createElement("div"),
                u = ie.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pe.extend(de, {
                reliableHiddenOffsets: function() {
                    return null == n && t(), a
                },
                boxSizingReliable: function() {
                    return null == n && t(), r
                },
                pixelMarginRight: function() {
                    return null == n && t(), i
                },
                pixelPosition: function() {
                    return null == n && t(), n
                },
                reliableMarginRight: function() {
                    return null == n && t(), o
                },
                reliableMarginLeft: function() {
                    return null == n && t(), s
                }
            }))
        }();
        var pt, ht, gt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (pt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, ht = function(e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || pt(e), o = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== o && o !== undefined || pe.contains(e.ownerDocument, e) || (o = pe.style(e, t)), n && !de.pixelMarginRight() && ct.test(o) && ut.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a), o === undefined ? o : o + ""
        }) : ft.currentStyle && (pt = function(e) {
            return e.currentStyle
        }, ht = function(e, t, n) {
            var i, r, a, o, s = e.style;
            return n = n || pt(e), o = n ? n[t] : undefined, null == o && s && s[t] && (o = s[t]), ct.test(o) && !gt.test(t) && (i = s.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), o === undefined ? o : o + "" || "auto"
        });
        var mt = /alpha\([^)]*\)/i,
            yt = /opacity\s*=\s*([^)]*)/i,
            vt = /^(none|table(?!-c[ea]).+)/,
            bt = new RegExp("^(" + Ie + ")(.*)$", "i"),
            xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            wt = ["Webkit", "O", "Moz", "ms"],
            Dt = ie.createElement("div").style;
        pe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = ht(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": de.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, o, s = pe.camelCase(t),
                        l = e.style;
                    if (t = pe.cssProps[s] || (pe.cssProps[s] = j(s) || s), o = pe.cssHooks[t] || pe.cssHooks[s], n === undefined) return o && "get" in o && (r = o.get(e, !1, i)) !== undefined ? r : l[t];
                    if (a = typeof n, "string" === a && (r = Fe.exec(n)) && r[1] && (n = f(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && (n = o.set(e, n, i)) === undefined))) try {
                        l[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, i) {
                var r, a, o, s = pe.camelCase(t);
                return t = pe.cssProps[s] || (pe.cssProps[s] = j(s) || s), o = pe.cssHooks[t] || pe.cssHooks[s], o && "get" in o && (a = o.get(e, !0, n)), a === undefined && (a = ht(e, t, i)), "normal" === a && t in kt && (a = kt[t]), "" === n || n ? (r = parseFloat(a), !0 === n || isFinite(r) ? r || 0 : a) : a
            }
        }), pe.each(["height", "width"], function(e, t) {
            pe.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return vt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, xt, function() {
                        return O(e, t, i)
                    }) : O(e, t, i)
                },
                set: function(e, n, i) {
                    var r = i && pt(e);
                    return I(e, n, i ? F(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), de.opacity || (pe.cssHooks.opacity = {
            get: function(e, t) {
                return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(a.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = mt.test(a) ? a.replace(mt, r) : a + " " + r)
            }
        }), pe.cssHooks.marginRight = A(de.reliableMarginRight, function(e, t) {
            if (t) return dt(e, {
                display: "inline-block"
            }, ht, [e, "marginRight"])
        }), pe.cssHooks.marginLeft = A(de.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(ht(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }), pe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            pe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Oe[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, ut.test(e) || (pe.cssHooks[e + t].set = I)
        }), pe.fn.extend({
            css: function(e, t) {
                return Ye(this, function(e, t, n) {
                    var i, r, a = {},
                        o = 0;
                    if (pe.isArray(t)) {
                        for (i = pt(e), r = t.length; o < r; o++) a[t[o]] = pe.css(e, t[o], !1, i);
                        return a
                    }
                    return n !== undefined ? pe.style(e, t, n) : pe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return P(this, !0)
            },
            hide: function() {
                return P(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Le(this) ? pe(this).show() : pe(this).hide()
                })
            }
        }), pe.Tween = L, L.prototype = {
            constructor: L,
            init: function(e, t, n, i, r, a) {
                this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (pe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = L.propHooks[this.prop];
                return e && e.get ? e.get(this) : L.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, pe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, pe.fx = L.prototype.init, pe.fx.step = {};
        var Ct, _t, St = /^(?:toggle|show|hide)$/,
            Tt = /queueHooks$/;
        pe.Animation = pe.extend(V, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return f(n.elem, e, Fe.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
                    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
                },
                prefilters: [q],
                prefilter: function(e, t) {
                    t ? V.prefilters.unshift(e) : V.prefilters.push(e)
                }
            }), pe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? pe.extend({}, e) : {
                    complete: n || !n && t || pe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !pe.isFunction(t) && t
                };
                return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
                }, i
            }, pe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = pe.isEmptyObject(e),
                        a = pe.speed(t, n, i),
                        o = function() {
                            var t = V(this, pe.extend({}, e), a);
                            (r || pe._data(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            a = pe.timers,
                            o = pe._data(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && Tt.test(r) && i(o[r]);
                        for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                        !t && n || pe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = pe._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            a = pe.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), pe.each(["toggle", "show", "hide"], function(e, t) {
                var n = pe.fn[t];
                pe.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, r)
                }
            }), pe.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                pe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), pe.timers = [], pe.fx.tick = function() {
                var e, t = pe.timers,
                    n = 0;
                for (Ct = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || pe.fx.stop(), Ct = undefined
            }, pe.fx.timer = function(e) {
                pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
            }, pe.fx.interval = 13, pe.fx.start = function() {
                _t || (_t = e.setInterval(pe.fx.tick, pe.fx.interval))
            }, pe.fx.stop = function() {
                e.clearInterval(_t), _t = null
            }, pe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, pe.fn.delay = function(t, n) {
                return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(r)
                    }
                })
            },
            function() {
                var e, t = ie.createElement("input"),
                    n = ie.createElement("div"),
                    i = ie.createElement("select"),
                    r = i.appendChild(ie.createElement("option"));
                n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = r.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
            }();
        var Et = /\r/g,
            Nt = /[\x20\t\r\n\f]+/g;
        pe.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = pe.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, pe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
                    });
                    if (r) return (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : (n = r.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)
                }
            }
        }), pe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = pe.find.attr(e, "value");
                        return null != t ? t : pe.trim(pe.text(e)).replace(Nt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, l = r < 0 ? s : a ? r : 0; l < s; l++)
                            if (n = i[l], (n.selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(), a) return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = pe.makeArray(t), o = r.length; o--;)
                            if (i = r[o], pe.inArray(pe.valHooks.option.get(i), a) > -1) try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), pe.each(["radio", "checkbox"], function() {
            pe.valHooks[this] = {
                set: function(e, t) {
                    if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
                }
            }, de.checkOn || (pe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Mt, At, jt = pe.expr.attrHandle,
            Pt = /^(?:checked|selected)$/i,
            It = de.getSetAttribute,
            Ft = de.input;
        pe.fn.extend({
            attr: function(e, t) {
                return Ye(this, pe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    pe.removeAttr(this, e)
                })
            }
        }), pe.extend({
            attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === a && pe.isXMLDoc(e) || (t = t.toLowerCase(), r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? At : Mt)), n !== undefined ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? undefined : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    a = t && t.match(Ee);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++];) i = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Ft && It || !Pt.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""), e.removeAttribute(It ? n : i)
            }
        }), At = {
            set: function(e, t, n) {
                return !1 === t ? pe.removeAttr(e, n) : Ft && It || !Pt.test(n) ? e.setAttribute(!It && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = jt[t] || pe.find.attr;
            Ft && It || !Pt.test(t) ? jt[t] = function(e, t, i) {
                var r, a;
                return i || (a = jt[t], jt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, jt[t] = a), r
            } : jt[t] = function(e, t, n) {
                if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Ft && It || (pe.attrHooks.value = {
            set: function(e, t, n) {
                if (!pe.nodeName(e, "input")) return Mt && Mt.set(e, t, n);
                e.defaultValue = t
            }
        }), It || (Mt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, jt.id = jt.name = jt.coords = function(e, t, n) {
            var i;
            if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, pe.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: Mt.set
        }, pe.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Mt.set(e, "" !== t && t, n)
            }
        }, pe.each(["width", "height"], function(e, t) {
            pe.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), de.style || (pe.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || undefined
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Ot = /^(?:input|select|textarea|button|object)$/i,
            Lt = /^(?:a|area)$/i;
        pe.fn.extend({
            prop: function(e, t) {
                return Ye(this, pe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = pe.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = undefined, delete this[e]
                    } catch (e) {}
                })
            }
        }), pe.extend({
            prop: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = pe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
            pe.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), de.optSelected || (pe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pe.propFix[this.toLowerCase()] = this
        }), de.enctype || (pe.propFix.enctype = "encoding");
        var Yt = /[\t\r\n\f]/g;
        pe.fn.extend({
            addClass: function(e) {
                var t, n, i, r, a, o, s, l = 0;
                if (pe.isFunction(e)) return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, X(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Ee) || []; n = this[l++];)
                        if (r = X(n), i = 1 === n.nodeType && (" " + r + " ").replace(Yt, " ")) {
                            for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            s = pe.trim(i), r !== s && pe.attr(n, "class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, a, o, s, l = 0;
                if (pe.isFunction(e)) return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, X(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Ee) || []; n = this[l++];)
                        if (r = X(n), i = 1 === n.nodeType && (" " + r + " ").replace(Yt, " ")) {
                            for (o = 0; a = t[o++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            s = pe.trim(i), r !== s && pe.attr(n, "class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                    pe(this).toggleClass(e.call(this, n, X(this), t), t)
                }) : this.each(function() {
                    var t, i, r, a;
                    if ("string" === n)
                        for (i = 0, r = pe(this), a = e.match(Ee) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else e !== undefined && "boolean" !== n || (t = X(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + X(n) + " ").replace(Yt, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            pe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), pe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var Ht = e.location,
            Rt = pe.now(),
            qt = /\?/,
            $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        pe.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = pe.trim(t + "");
            return r && !pe.trim(r.replace($t, function(e, t, r, a) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !a - !r, "")
            })) ? Function("return " + r)() : pe.error("Invalid JSON: " + t)
        }, pe.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (e) {
                n = undefined
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
        };
        var Vt = /#.*$/,
            Xt = /([?&])_=[^&]*/,
            Bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Wt = /^(?:GET|HEAD)$/,
            Ut = /^\/\//,
            Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Zt = {},
            Qt = {},
            Gt = "*/".concat("*"),
            Jt = Ht.href,
            en = Kt.exec(Jt.toLowerCase()) || [];
        pe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Jt,
                type: "GET",
                isLocal: zt.test(en[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Gt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": pe.parseJSON,
                    "text xml": pe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? W(W(e, pe.ajaxSettings), t) : W(pe.ajaxSettings, e)
            },
            ajaxPrefilter: B(Zt),
            ajaxTransport: B(Qt),
            ajax: function(t, n) {
                function i(t, n, i, r) {
                    var a, d, v, b, k, D = n;
                    2 !== x && (x = 2, l && e.clearTimeout(l), c = undefined, s = r || "", w.readyState = t > 0 ? 4 : 0, a = t >= 200 && t < 300 || 304 === t, i && (b = U(f, w, i)), b = K(f, b, w, a), a ? (f.ifModified && (k = w.getResponseHeader("Last-Modified"), k && (pe.lastModified[o] = k), (k = w.getResponseHeader("etag")) && (pe.etag[o] = k)), 204 === t || "HEAD" === f.type ? D = "nocontent" : 304 === t ? D = "notmodified" : (D = b.state, d = b.data, v = b.error, a = !v)) : (v = D, !t && D || (D = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (n || D) + "", a ? g.resolveWith(p, [d, D, w]) : g.rejectWith(p, [w, D, v]), w.statusCode(y), y = undefined, u && h.trigger(a ? "ajaxSuccess" : "ajaxError", [w, f, a ? d : v]), m.fireWith(p, [w, D]), u && (h.trigger("ajaxComplete", [w, f]), --pe.active || pe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = undefined), n = n || {};
                var r, a, o, s, l, u, c, d, f = pe.ajaxSetup({}, n),
                    p = f.context || f,
                    h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                    g = pe.Deferred(),
                    m = pe.Callbacks("once memory"),
                    y = f.statusCode || {},
                    v = {},
                    b = {},
                    x = 0,
                    k = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!d)
                                    for (d = {}; t = Bt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (x < 2)
                                    for (t in e) y[t] = [y[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || k;
                            return c && c.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || Jt) + "").replace(Vt, "").replace(Ut, en[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(Ee) || [""], null == f.crossDomain && (r = Kt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === en[1] && r[2] === en[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), z(Zt, f, n, w), 2 === x) return w;
                u = pe.event && f.global, u && 0 == pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Wt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (qt.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Xt.test(o) ? o.replace(Xt, "$1_=" + Rt++) : o + (qt.test(o) ? "&" : "?") + "_=" + Rt++)), f.ifModified && (pe.lastModified[o] && w.setRequestHeader("If-Modified-Since", pe.lastModified[o]), pe.etag[o] && w.setRequestHeader("If-None-Match", pe.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : f.accepts["*"]);
                for (a in f.headers) w.setRequestHeader(a, f.headers[a]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, w, f) || 2 === x)) return w.abort();
                k = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[a](f[a]);
                if (c = z(Qt, f, n, w)) {
                    if (w.readyState = 1, u && h.trigger("ajaxSend", [w, f]), 2 === x) return w;
                    f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                        w.abort("timeout")
                    }, f.timeout));
                    try {
                        x = 1, c.send(v, i)
                    } catch (e) {
                        if (!(x < 2)) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return pe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return pe.get(e, undefined, t, "script")
            }
        }), pe.each(["get", "post"], function(e, t) {
            pe[t] = function(e, n, i, r) {
                return pe.isFunction(n) && (r = r || i, i = n, n = undefined), pe.ajax(pe.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, pe.isPlainObject(e) && e))
            }
        }), pe._evalUrl = function(e) {
            return pe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, pe.fn.extend({
            wrapAll: function(e) {
                if (pe.isFunction(e)) return this.each(function(t) {
                    pe(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return pe.isFunction(e) ? this.each(function(t) {
                    pe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = pe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = pe.isFunction(e);
                return this.each(function(n) {
                    pe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), pe.expr.filters.hidden = function(e) {
            return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
        }, pe.expr.filters.visible = function(e) {
            return !pe.expr.filters.hidden(e)
        };
        var tn = /%20/g,
            nn = /\[\]$/,
            rn = /\r?\n/g,
            an = /^(?:submit|button|image|reset|file)$/i,
            on = /^(?:input|select|textarea|keygen)/i;
        pe.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = pe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) G(n, e[n], t, r);
            return i.join("&").replace(tn, "+")
        }, pe.fn.extend({
            serialize: function() {
                return pe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = pe.prop(this, "elements");
                    return e ? pe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !pe(this).is(":disabled") && on.test(this.nodeName) && !an.test(e) && (this.checked || !He.test(e))
                }).map(function(e, t) {
                    var n = pe(this).val();
                    return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(rn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(rn, "\r\n")
                    }
                }).get()
            }
        }), pe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
            return this.isLocal ? ee() : ie.documentMode > 8 ? J() : /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || ee()
        } : J;
        var sn = 0,
            ln = {},
            un = pe.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in ln) ln[e](undefined, !0)
        }), de.cors = !!un && "withCredentials" in un, un = de.ajax = !!un, un && pe.ajaxTransport(function(t) {
            if (!t.crossDomain || de.cors) {
                var n;
                return {
                    send: function(i, r) {
                        var a, o = t.xhr(),
                            s = ++sn;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) o[a] = t.xhrFields[a];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) i[a] !== undefined && o.setRequestHeader(a, i[a] + "");
                        o.send(t.hasContent && t.data || null), n = function(e, i) {
                            var a, l, u;
                            if (n && (i || 4 === o.readyState))
                                if (delete ln[s], n = undefined, o.onreadystatechange = pe.noop, i) 4 !== o.readyState && o.abort();
                                else {
                                    u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (e) {
                                        l = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                }
                            u && r(a, l, u, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? e.setTimeout(n) : o.onreadystatechange = ln[s] = n : n()
                    },
                    abort: function() {
                        n && n(undefined, !0)
                    }
                }
            }
        }), pe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return pe.globalEval(e), e
                }
            }
        }), pe.ajaxPrefilter("script", function(e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), pe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ie.head || pe("head")[0] || ie.documentElement;
                return {
                    send: function(i, r) {
                        t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(undefined, !0)
                    }
                }
            }
        });
        var cn = [],
            dn = /(=)\?(?=&|$)|\?\?/;
        pe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = cn.pop() || pe.expando + "_" + Rt++;
                return this[e] = !0, e
            }
        }), pe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, a, o, s = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + r) : !1 !== t.jsonp && (t.url += (qt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return o || pe.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", a = e[r], e[r] = function() {
                o = arguments
            }, i.always(function() {
                a === undefined ? pe(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback,
                    cn.push(r)), o && pe.isFunction(a) && a(o[0]), o = a = undefined
            }), "script"
        }), pe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ie;
            var i = we.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = y([e], t, r), r && r.length && pe(r).remove(), pe.merge([], i.childNodes))
        };
        var fn = pe.fn.load;
        pe.fn.load = function(e, t, n) {
            if ("string" != typeof e && fn) return fn.apply(this, arguments);
            var i, r, a, o = this,
                s = e.indexOf(" ");
            return s > -1 && (i = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), o.length > 0 && pe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                a = arguments, o.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }), this
        }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            pe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), pe.expr.filters.animated = function(e) {
            return pe.grep(pe.timers, function(t) {
                return e === t.elem
            }).length
        }, pe.offset = {
            setOffset: function(e, t, n) {
                var i, r, a, o, s, l, u, c = pe.css(e, "position"),
                    d = pe(e),
                    f = {};
                "static" === c && (e.style.position = "relative"), s = d.offset(), a = pe.css(e, "top"), l = pe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [a, l]) > -1, u ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, pe.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === undefined ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    a = r && r.ownerDocument;
                if (a) return t = a.documentElement, pe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(a), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - pe.css(i, "marginTop", !0),
                        left: t.left - n.left - pe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                    return e || ft
                })
            }
        }), pe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            pe.fn[e] = function(i) {
                return Ye(this, function(e, i, r) {
                    var a = te(e);
                    if (r === undefined) return a ? t in a ? a[t] : a.document.documentElement[i] : e[i];
                    a ? a.scrollTo(n ? pe(a).scrollLeft() : r, n ? r : pe(a).scrollTop()) : e[i] = r
                }, e, i, arguments.length, null)
            }
        }), pe.each(["top", "left"], function(e, t) {
            pe.cssHooks[t] = A(de.pixelPosition, function(e, n) {
                if (n) return n = ht(e, t), ct.test(n) ? pe(e).position()[t] + "px" : n
            })
        }), pe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            pe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                pe.fn[i] = function(i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        o = n || (!0 === i || !0 === r ? "margin" : "border");
                    return Ye(this, function(t, n, i) {
                        var r;
                        return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? pe.css(t, n, o) : pe.style(t, n, i, o)
                    }, t, a ? i : undefined, a, null)
                }
            })
        }), pe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), pe.fn.size = function() {
            return this.length
        }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return pe
        });
        var pn = e.jQuery,
            hn = e.$;
        return pe.noConflict = function(t) {
            return e.$ === pe && (e.$ = hn), t && e.jQuery === pe && (e.jQuery = pn), pe
        }, t || (e.jQuery = e.$ = pe), pe
    }),
    function(e, t) {
        "use strict";
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), !1 !== r.result
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== t && !1 !== e.data("remote")
            },
            handleRemote: function(i) {
                var r, a, o, s, l, u;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.data("ujs:submit-button-formmethod") || i.attr("method"), a = i.data("ujs:submit-button-formaction") || i.attr("action"), o = e(i[0]).serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (o.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", a = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), a = n.href(i), o = i.data("params") || null);
                    return u = {
                        type: r || "GET",
                        data: o,
                        dataType: l,
                        beforeSend: function(e, r) {
                            if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [e, r])) return !1;
                            i.trigger("ajax:send", e)
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(a)
                    }, s && (u.xhrFields = {
                        withCredentials: s
                    }), a && (u.url = a), n.ajax(u)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (e) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var r = n.href(i),
                    a = i.data("method"),
                    o = i.attr("target"),
                    s = n.csrfToken(),
                    l = n.csrfParam(),
                    u = e('<form method="post" action="' + r + '"></form>'),
                    c = '<input name="_method" value="' + a + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(c).appendTo("body"), u.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    r = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        r = n.confirm(i)
                    } catch (e) {
                        (console.error || console.log).call(console, e.stack || e)
                    }
                    t = n.fire(e, "confirm:complete", [r])
                }
                return r && t
            },
            blankInputs: function(t, n, i) {
                var r, a, o, s, l = e(),
                    u = n || "input,textarea",
                    c = t.find(u),
                    d = {};
                return c.each(function() {
                    r = e(this), r.is("input[type=radio]") ? (s = r.attr("name"), d[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (o = t.find('input[type=radio][name="' + s + '"]'), l = l.add(o)), d[s] = s)) : (a = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (l = l.add(r))
                }), !!l.length && l
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), i.on("ajax:complete", n.linkDisableSelector, function() {
            n.enableElement(e(this))
        }), i.on("ajax:complete", n.buttonDisableSelector, function() {
            n.enableFormElement(e(this))
        }), i.on("click.rails", n.linkClickSelector, function(t) {
            var i = e(this),
                r = i.data("method"),
                a = i.data("params"),
                o = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!o && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (o && (!r || "GET" === r) && !a) return !0;
                var s = n.handleRemote(i);
                return !1 === s ? n.enableElement(i) : s.fail(function() {
                    n.enableElement(i)
                }), !1
            }
            return r ? (n.handleMethod(i), !1) : void 0
        }), i.on("click.rails", n.buttonClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return !1 === r ? n.enableFormElement(i) : r.fail(function() {
                n.enableFormElement(i)
            }), !1
        }), i.on("change.rails", n.inputChangeSelector, function(t) {
            var i = e(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.on("submit.rails", n.formSubmitSelector, function(i) {
            var r, a, o = e(this),
                s = n.isRemote(o);
            if (!n.allowAction(o)) return n.stopEverything(i);
            if (o.attr("novalidate") === t)
                if (o.data("ujs:formnovalidate-button") === t) {
                    if ((r = n.blankInputs(o, n.requiredInputSelector, !1)) && n.fire(o, "ajax:aborted:required", [r])) return n.stopEverything(i)
                } else o.data("ujs:formnovalidate-button", t);
            if (s) {
                if (a = n.nonBlankInputs(o, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(o)
                    }, 13);
                    var l = n.fire(o, "ajax:aborted:file", [a]);
                    return l || setTimeout(function() {
                        n.enableFormElements(o)
                    }, 13), l
                }
                return n.handleRemote(o), !1
            }
            setTimeout(function() {
                n.disableFormElements(o)
            }, 13)
        }), i.on("click.rails", n.formInputClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var r = i.attr("name"),
                a = r ? {
                    name: r,
                    value: i.val()
                } : null,
                o = i.closest("form");
            0 === o.length && (o = e("#" + i.attr("form"))), o.data("ujs:submit-button", a), o.data("ujs:formnovalidate-button", i.attr("formnovalidate")), o.data("ujs:submit-button-formaction", i.attr("formaction")), o.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.disableFormElements(e(this))
        }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        return e.ui = e.ui || {}, e.ui.version = "1.12.1"
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return e.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../keycode"], e) : e(jQuery)
    }(function(e) {
        function t(e) {
            for (var t, n; e.length && e[0] !== document;) {
                if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                e = e.parent()
            }
            return 0
        }

        function n() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = i(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function i(t) {
            var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.on("mouseout", n, function() {
                e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", n, r)
        }

        function r() {
            e.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        }

        function a(t, n) {
            e.extend(t, n);
            for (var i in n) null == n[i] && (t[i] = n[i]);
            return t
        }
        e.extend(e.ui, {
            datepicker: {
                version: "1.12.1"
            }
        });
        var o;
        return e.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(e) {
                return a(this._defaults, e || {}), this
            },
            _attachDatepicker: function(t, n) {
                var i, r, a;
                i = t.nodeName.toLowerCase(), r = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), r), a.settings = e.extend({}, n || {}), "input" === i ? this._connectDatepicker(t, a) : r && this._inlineDatepicker(t, a)
            },
            _newInst: function(t, n) {
                return {
                    id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: n,
                    dpDiv: n ? i(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, n) {
                var i = e(t);
                n.append = e([]), n.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, n), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(n), e.data(t, "datepicker", n), n.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, n) {
                var i, r, a, o = this._get(n, "appendText"),
                    s = this._get(n, "isRTL");
                n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[s ? "before" : "after"](n.append)), t.off("focus", this._showDatepicker), n.trigger && n.trigger.remove(), i = this._get(n, "showOn"), "focus" !== i && "both" !== i || t.on("focus", this._showDatepicker), "button" !== i && "both" !== i || (r = this._get(n, "buttonText"), a = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                    src: a,
                    alt: r,
                    title: r
                }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                    src: a,
                    alt: r,
                    title: r
                }) : r)), t[s ? "before" : "after"](n.trigger), n.trigger.on("click", function() {
                    return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function(e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t, n, i, r, a = new Date(2009, 11, 20),
                        o = this._get(e, "dateFormat");
                    o.match(/[DM]/) && (t = function(e) {
                        for (n = 0, i = 0, r = 0; r < e.length; r++) e[r].length > n && (n = e[r].length, i = r);
                        return i
                    }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
                }
            },
            _inlineDatepicker: function(t, n) {
                var i = e(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(n.dpDiv), e.data(t, "datepicker", n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, n, i, r, o) {
                var s, l, u, c, d, f = this._dialogInst;
                return f || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), e("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, e.data(this._dialogInput[0], "datepicker", f)), a(f.settings, r || {}), n = n && n.constructor === Date ? this._formatDate(f, n) : n, this._dialogInput.val(n), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, u / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", f), this
            },
            _destroyDatepicker: function(t) {
                var n, i = e(t),
                    r = e.data(t, "datepicker");
                i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === n ? (r.append.remove(), r.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== n && "span" !== n || i.removeClass(this.markerClassName).empty(), o === r && (o = null))
            },
            _enableDatepicker: function(t) {
                var n, i, r = e(t),
                    a = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !1, a.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : "div" !== n && "span" !== n || (i = r.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }))
            },
            _disableDatepicker: function(t) {
                var n, i, r = e(t),
                    a = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !0, a.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : "div" !== n && "span" !== n || (i = r.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === e) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return e.data(t, "datepicker")
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, n, i) {
                var r, o, s, l, u = this._getInst(t);
                if (2 === arguments.length && "string" == typeof n) return "defaults" === n ? e.extend({}, e.datepicker._defaults) : u ? "all" === n ? e.extend({}, u.settings) : this._get(u, n) : null;
                r = n || {}, "string" == typeof n && (r = {}, r[n] = i), u && (this._curInst === u && this._hideDatepicker(), o = this._getDateDatepicker(t, !0), s = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), a(u.settings, r), null !== s && r.dateFormat !== undefined && r.minDate === undefined && (u.settings.minDate = this._formatDate(u, s)), null !== l && r.dateFormat !== undefined && r.maxDate === undefined && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), u), this._autoSize(u), this._setDate(u, o), this._updateAlternate(u), this._updateDatepicker(u))
            },
            _changeDatepicker: function(e, t, n) {
                this._optionDatepicker(e, t, n)
            },
            _refreshDatepicker: function(e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function(e, t) {
                var n = this._getInst(e);
                n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
            },
            _getDateDatepicker: function(e, t) {
                var n = this._getInst(e);
                return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
            },
            _doKeyDown: function(t) {
                var n, i, r, a = e.datepicker._getInst(t.target),
                    o = !0,
                    s = a.dpDiv.is(".ui-datepicker-rtl");
                if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return r = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), r[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, r[0]), n = e.datepicker._get(a, "onSelect"), n ? (i = e.datepicker._formatDate(a), n.apply(a.input ? a.input[0] : null, [i, a])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var n, i, r = e.datepicker._getInst(t.target);
                if (e.datepicker._get(r, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(r, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !n || n.indexOf(i) > -1
            },
            _doKeyUp: function(t) {
                var n, i = e.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal) try {
                    n = e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)), n && (e.datepicker._setDateFromField(i), e.datepicker._updateAlternate(i), e.datepicker._updateDatepicker(i))
                } catch (e) {}
                return !0
            },
            _showDatepicker: function(n) {
                if (n = n.target || n, "input" !== n.nodeName.toLowerCase() && (n = e("input", n.parentNode)[0]), !e.datepicker._isDisabledDatepicker(n) && e.datepicker._lastInput !== n) {
                    var i, r, o, s, l, u, c;
                    i = e.datepicker._getInst(n), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(i, "beforeShow"), o = r ? r.apply(n, [n, i]) : {}, !1 !== o && (a(i.settings, o), i.lastVal = null, e.datepicker._lastInput = n, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (n.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(n), e.datepicker._pos[1] += n.offsetHeight), s = !1, e(n).parents().each(function() {
                        return !(s |= "fixed" === e(this).css("position"))
                    }), l = {
                        left: e.datepicker._pos[0],
                        top: e.datepicker._pos[1]
                    }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), e.datepicker._updateDatepicker(i), l = e.datepicker._checkOffset(i, l, s), i.dpDiv.css({
                        position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", t(e(n)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), e.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, o = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var n, i = this._getNumberOfMonths(t),
                    a = i[1],
                    s = t.dpDiv.find("." + this._dayOverClass + " a");
                s.length > 0 && r.apply(s.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", 17 * a + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                    n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(e) {
                return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
            },
            _checkOffset: function(t, n, i) {
                var r = t.dpDiv.outerWidth(),
                    a = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    s = t.input ? t.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
                    u = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
                return n.left -= this._get(t, "isRTL") ? r - o : 0, n.left -= i && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= i && n.top === t.input.offset().top + s ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + r > l && l > r ? Math.abs(n.left + r - l) : 0), n.top -= Math.min(n.top, n.top + a > u && u > a ? Math.abs(a + s) : 0), n
            },
            _findPos: function(t) {
                for (var n, i = this._getInst(t), r = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[r ? "previousSibling" : "nextSibling"];
                return n = e(t).offset(), [n.left, n.top]
            },
            _hideDatepicker: function(t) {
                var n, i, r, a, o = this._curInst;
                !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (n = this._get(o, "showAnim"), i = this._get(o, "duration"), r = function() {
                    e.datepicker._tidyDialog(o)
                }, e.effects && (e.effects.effect[n] || e.effects[n]) ? o.dpDiv.hide(n, e.datepicker._get(o, "showOptions"), i, r) : o.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(e) {
                e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (e.datepicker._curInst) {
                    var n = e(t.target),
                        i = e.datepicker._getInst(n[0]);
                    (n[0].id === e.datepicker._mainDivId || 0 !== n.parents("#" + e.datepicker._mainDivId).length || n.hasClass(e.datepicker.markerClassName) || n.closest("." + e.datepicker._triggerClass).length || !e.datepicker._datepickerShowing || e.datepicker._inDialog && e.blockUI) && (!n.hasClass(e.datepicker.markerClassName) || e.datepicker._curInst === i) || e.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, n, i) {
                var r = e(t),
                    a = this._getInst(r[0]);
                this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(a, n + ("M" === i ? this._get(a, "showCurrentAtPos") : 0), i), this._updateDatepicker(a))
            },
            _gotoToday: function(t) {
                var n, i = e(t),
                    r = this._getInst(i[0]);
                this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (n = new Date, r.selectedDay = n.getDate(), r.drawMonth = r.selectedMonth = n.getMonth(), r.drawYear = r.selectedYear = n.getFullYear()), this._notifyChange(r), this._adjustDate(i)
            },
            _selectMonthYear: function(t, n, i) {
                var r = e(t),
                    a = this._getInst(r[0]);
                a["selected" + ("M" === i ? "Month" : "Year")] = a["draw" + ("M" === i ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(r)
            },
            _selectDay: function(t, n, i, r) {
                var a, o = e(t);
                e(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", r).html(), a.selectedMonth = a.currentMonth = n, a.selectedYear = a.currentYear = i, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
            },
            _clearDate: function(t) {
                var n = e(t);
                this._selectDate(n, "")
            },
            _selectDate: function(t, n) {
                var i, r = e(t),
                    a = this._getInst(r[0]);
                n = null != n ? n : this._formatDate(a), a.input && a.input.val(n), this._updateAlternate(a), i = this._get(a, "onSelect"), i ? i.apply(a.input ? a.input[0] : null, [n, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var n, i, r, a = this._get(t, "altField");
                a && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), r = this.formatDate(n, i, this._getFormatConfig(t)), e(a).val(r))
            },
            noWeekends: function(e) {
                var t = e.getDay();
                return [t > 0 && t < 6, ""]
            },
            iso8601Week: function(e) {
                var t, n = new Date(e.getTime());
                return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
            },
            parseDate: function(t, n, i) {
                if (null == t || null == n) throw "Invalid arguments";
                if ("" === (n = "object" == typeof n ? n.toString() : n + "")) return null;
                var r, a, o, s, l = 0,
                    u = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                    d = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    f = (i ? i.dayNames : null) || this._defaults.dayNames,
                    p = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    h = (i ? i.monthNames : null) || this._defaults.monthNames,
                    g = -1,
                    m = -1,
                    y = -1,
                    v = -1,
                    b = !1,
                    x = function(e) {
                        var n = r + 1 < t.length && t.charAt(r + 1) === e;
                        return n && r++, n
                    },
                    k = function(e) {
                        var t = x(e),
                            i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                            r = "y" === e ? i : 1,
                            a = new RegExp("^\\d{" + r + "," + i + "}"),
                            o = n.substring(l).match(a);
                        if (!o) throw "Missing number at position " + l;
                        return l += o[0].length, parseInt(o[0], 10)
                    },
                    w = function(t, i, r) {
                        var a = -1,
                            o = e.map(x(t) ? r : i, function(e, t) {
                                return [
                                    [t, e]
                                ]
                            }).sort(function(e, t) {
                                return -(e[1].length - t[1].length)
                            });
                        if (e.each(o, function(e, t) {
                                var i = t[1];
                                if (n.substr(l, i.length).toLowerCase() === i.toLowerCase()) return a = t[0], l += i.length, !1
                            }), -1 !== a) return a + 1;
                        throw "Unknown name at position " + l
                    },
                    D = function() {
                        if (n.charAt(l) !== t.charAt(r)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (r = 0; r < t.length; r++)
                    if (b) "'" !== t.charAt(r) || x("'") ? D() : b = !1;
                    else switch (t.charAt(r)) {
                        case "d":
                            y = k("d");
                            break;
                        case "D":
                            w("D", d, f);
                            break;
                        case "o":
                            v = k("o");
                            break;
                        case "m":
                            m = k("m");
                            break;
                        case "M":
                            m = w("M", p, h);
                            break;
                        case "y":
                            g = k("y");
                            break;
                        case "@":
                            s = new Date(k("@")), g = s.getFullYear(), m = s.getMonth() + 1, y = s.getDate();
                            break;
                        case "!":
                            s = new Date((k("!") - this._ticksTo1970) / 1e4), g = s.getFullYear(), m = s.getMonth() + 1, y = s.getDate();
                            break;
                        case "'":
                            x("'") ? D() : b = !0;
                            break;
                        default:
                            D()
                    }
                    if (l < n.length && (o = n.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= c ? 0 : -100)), v > -1)
                    for (m = 1, y = v;;) {
                        if (a = this._getDaysInMonth(g, m - 1), y <= a) break;
                        m++, y -= a
                    }
                if (s = this._daylightSavingAdjust(new Date(g, m - 1, y)), s.getFullYear() !== g || s.getMonth() + 1 !== m || s.getDate() !== y) throw "Invalid date";
                return s
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(e, t, n) {
                if (!t) return "";
                var i, r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    a = (n ? n.dayNames : null) || this._defaults.dayNames,
                    o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    s = (n ? n.monthNames : null) || this._defaults.monthNames,
                    l = function(t) {
                        var n = i + 1 < e.length && e.charAt(i + 1) === t;
                        return n && i++, n
                    },
                    u = function(e, t, n) {
                        var i = "" + t;
                        if (l(e))
                            for (; i.length < n;) i = "0" + i;
                        return i
                    },
                    c = function(e, t, n, i) {
                        return l(e) ? i[t] : n[t]
                    },
                    d = "",
                    f = !1;
                if (t)
                    for (i = 0; i < e.length; i++)
                        if (f) "'" !== e.charAt(i) || l("'") ? d += e.charAt(i) : f = !1;
                        else switch (e.charAt(i)) {
                            case "d":
                                d += u("d", t.getDate(), 2);
                                break;
                            case "D":
                                d += c("D", t.getDay(), r, a);
                                break;
                            case "o":
                                d += u("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                d += u("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                d += c("M", t.getMonth(), o, s);
                                break;
                            case "y":
                                d += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                                break;
                            case "@":
                                d += t.getTime();
                                break;
                            case "!":
                                d += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? d += "'" : f = !0;
                                break;
                            default:
                                d += e.charAt(i)
                        }
                        return d
            },
            _possibleChars: function(e) {
                var t, n = "",
                    i = !1,
                    r = function(n) {
                        var i = t + 1 < e.length && e.charAt(t + 1) === n;
                        return i && t++, i
                    };
                for (t = 0; t < e.length; t++)
                    if (i) "'" !== e.charAt(t) || r("'") ? n += e.charAt(t) : i = !1;
                    else switch (e.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            n += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            r("'") ? n += "'" : i = !0;
                            break;
                        default:
                            n += e.charAt(t)
                    }
                    return n
            },
            _get: function(e, t) {
                return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
            },
            _setDateFromField: function(e, t) {
                if (e.input.val() !== e.lastVal) {
                    var n = this._get(e, "dateFormat"),
                        i = e.lastVal = e.input ? e.input.val() : null,
                        r = this._getDefaultDate(e),
                        a = r,
                        o = this._getFormatConfig(e);
                    try {
                        a = this.parseDate(n, i, o) || r
                    } catch (e) {
                        i = t ? "" : i
                    }
                    e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = i ? a.getDate() : 0, e.currentMonth = i ? a.getMonth() : 0, e.currentYear = i ? a.getFullYear() : 0, this._adjustInstDate(e)
                }
            },
            _getDefaultDate: function(e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function(t, n, i) {
                var r = function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    a = function(n) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                        } catch (e) {}
                        for (var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, r = i.getFullYear(), a = i.getMonth(), o = i.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = s.exec(n); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    o += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    o += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    a += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(r, a));
                                    break;
                                case "y":
                                case "Y":
                                    r += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(r, a))
                            }
                            l = s.exec(n)
                        }
                        return new Date(r, a, o)
                    },
                    o = null == n || "" === n ? i : "string" == typeof n ? a(n) : "number" == typeof n ? isNaN(n) ? i : r(n) : new Date(n.getTime());
                return o = o && "Invalid Date" === o.toString() ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function(e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function(e, t, n) {
                var i = !t,
                    r = e.selectedMonth,
                    a = e.selectedYear,
                    o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), r === e.selectedMonth && a === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
            },
            _getDate: function(e) {
                return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
            },
            _attachHandlers: function(t) {
                var n = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            e.datepicker._adjustDate(i, -n, "M")
                        },
                        next: function() {
                            e.datepicker._adjustDate(i, +n, "M")
                        },
                        hide: function() {
                            e.datepicker._hideDatepicker()
                        },
                        today: function() {
                            e.datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return e.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return e.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(e) {
                var t, n, i, r, a, o, s, l, u, c, d, f, p, h, g, m, y, v, b, x, k, w, D, C, _, S, T, E, N, M, A, j, P, I, F, O, L, Y, H, R = new Date,
                    q = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                    $ = this._get(e, "isRTL"),
                    V = this._get(e, "showButtonPanel"),
                    X = this._get(e, "hideIfNoPrevNext"),
                    B = this._get(e, "navigationAsDateFormat"),
                    z = this._getNumberOfMonths(e),
                    W = this._get(e, "showCurrentAtPos"),
                    U = this._get(e, "stepMonths"),
                    K = 1 !== z[0] || 1 !== z[1],
                    Z = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(e, "min"),
                    G = this._getMinMaxDate(e, "max"),
                    J = e.drawMonth - W,
                    ee = e.drawYear;
                if (J < 0 && (J += 12, ee--), G)
                    for (t = this._daylightSavingAdjust(new Date(G.getFullYear(), G.getMonth() - z[0] * z[1] + 1, G.getDate())), t = Q && t < Q ? Q : t; this._daylightSavingAdjust(new Date(ee, J, 1)) > t;) --J < 0 && (J = 11, ee--);
                for (e.drawMonth = J, e.drawYear = ee, n = this._get(e, "prevText"), n = B ? this.formatDate(n, this._daylightSavingAdjust(new Date(ee, J - U, 1)), this._getFormatConfig(e)) : n, i = this._canAdjustMonth(e, -1, ee, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "e" : "w") + "'>" + n + "</span></a>" : X ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(e, "nextText"), r = B ? this.formatDate(r, this._daylightSavingAdjust(new Date(ee, J + U, 1)), this._getFormatConfig(e)) : r, a = this._canAdjustMonth(e, 1, ee, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "w" : "e") + "'>" + r + "</span></a>" : X ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "w" : "e") + "'>" + r + "</span></a>", o = this._get(e, "currentText"), s = this._get(e, "gotoCurrent") && e.currentDay ? Z : q, o = B ? this.formatDate(o, s, this._getFormatConfig(e)) : o, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", u = V ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ($ ? l : "") + (this._isInRange(e, s) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + ($ ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(e, "showWeek"), f = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), h = this._get(e, "monthNames"), g = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), y = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), x = "", w = 0; w < z[0]; w++) {
                    for (D = "", this.maxRows = 4, C = 0; C < z[1]; C++) {
                        if (_ = this._daylightSavingAdjust(new Date(ee, J, e.selectedDay)), S = " ui-corner-all", T = "", K) {
                            if (T += "<div class='ui-datepicker-group", z[1] > 1) switch (C) {
                                case 0:
                                    T += " ui-datepicker-group-first", S = " ui-corner-" + ($ ? "right" : "left");
                                    break;
                                case z[1] - 1:
                                    T += " ui-datepicker-group-last", S = " ui-corner-" + ($ ? "left" : "right");
                                    break;
                                default:
                                    T += " ui-datepicker-group-middle", S = ""
                            }
                            T += "'>"
                        }
                        for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? $ ? a : i : "") + (/all|right/.test(S) && 0 === w ? $ ? i : a : "") + this._generateMonthYearHeader(e, J, ee, Q, G, w > 0 || C > 0, h, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", k = 0; k < 7; k++) N = (k + c) % 7, E += "<th scope='col'" + ((k + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + f[N] + "'>" + p[N] + "</span></th>";
                        for (T += E + "</tr></thead><tbody>", M = this._getDaysInMonth(ee, J), ee === e.selectedYear && J === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, M)), A = (this._getFirstDayOfMonth(ee, J) - c + 7) % 7, j = Math.ceil((A + M) / 7), P = K && this.maxRows > j ? this.maxRows : j, this.maxRows = P, I = this._daylightSavingAdjust(new Date(ee, J, 1 - A)), F = 0; F < P; F++) {
                            for (T += "<tr>", O = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(I) + "</td>" : "", k = 0; k < 7; k++) L = m ? m.apply(e.input ? e.input[0] : null, [I]) : [!0, ""], Y = I.getMonth() !== J, H = Y && !v || !L[0] || Q && I < Q || G && I > G, O += "<td class='" + ((k + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Y ? " ui-datepicker-other-month" : "") + (I.getTime() === _.getTime() && J === e.selectedMonth && e._keyEvent || b.getTime() === I.getTime() && b.getTime() === _.getTime() ? " " + this._dayOverClass : "") + (H ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Y && !y ? "" : " " + L[1] + (I.getTime() === Z.getTime() ? " " + this._currentClass : "") + (I.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (Y && !y || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (H ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (Y && !y ? "&#xa0;" : H ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === q.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Z.getTime() ? " ui-state-active" : "") + (Y ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                            T += O + "</tr>"
                        }
                        J++, J > 11 && (J = 0, ee++), T += "</tbody></table>" + (K ? "</div>" + (z[0] > 0 && C === z[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), D += T
                    }
                    x += D
                }
                return x += u, e._keyEvent = !1, x
            },
            _generateMonthYearHeader: function(e, t, n, i, r, a, o, s) {
                var l, u, c, d, f, p, h, g, m = this._get(e, "changeMonth"),
                    y = this._get(e, "changeYear"),
                    v = this._get(e, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    x = "";
                if (a || !m) x += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                else {
                    for (l = i && i.getFullYear() === n, u = r && r.getFullYear() === n, x += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!l || c >= i.getMonth()) && (!u || c <= r.getMonth()) && (x += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + s[c] + "</option>");
                    x += "</select>"
                }
                if (v || (b += x + (!a && m && y ? "" : "&#xa0;")), !e.yearshtml)
                    if (e.yearshtml = "", a || !y) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                    else {
                        for (d = this._get(e, "yearRange").split(":"), f = (new Date).getFullYear(), p = function(e) {
                                var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? f + parseInt(e, 10) : parseInt(e, 10);
                                return isNaN(t) ? f : t
                            }, h = p(d[0]), g = Math.max(h, p(d[1] || "")), h = i ? Math.max(h, i.getFullYear()) : h, g = r ? Math.min(g, r.getFullYear()) : g, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; h <= g; h++) e.yearshtml += "<option value='" + h + "'" + (h === n ? " selected='selected'" : "") + ">" + h + "</option>";
                        e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                    }
                return b += this._get(e, "yearSuffix"), v && (b += (!a && m && y ? "" : "&#xa0;") + x), b += "</div>"
            },
            _adjustInstDate: function(e, t, n) {
                var i = e.selectedYear + ("Y" === n ? t : 0),
                    r = e.selectedMonth + ("M" === n ? t : 0),
                    a = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? t : 0),
                    o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, a)));
                e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), "M" !== n && "Y" !== n || this._notifyChange(e)
            },
            _restrictMinMax: function(e, t) {
                var n = this._getMinMaxDate(e, "min"),
                    i = this._getMinMaxDate(e, "max"),
                    r = n && t < n ? n : t;
                return i && r > i ? i : r
            },
            _notifyChange: function(e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function(e) {
                var t = this._get(e, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function(e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function(e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(e, t) {
                return new Date(e, t, 1).getDay()
            },
            _canAdjustMonth: function(e, t, n, i) {
                var r = this._getNumberOfMonths(e),
                    a = this._daylightSavingAdjust(new Date(n, i + (t < 0 ? t : r[0] * r[1]), 1));
                return t < 0 && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
            },
            _isInRange: function(e, t) {
                var n, i, r = this._getMinMaxDate(e, "min"),
                    a = this._getMinMaxDate(e, "max"),
                    o = null,
                    s = null,
                    l = this._get(e, "yearRange");
                return l && (n = l.split(":"), i = (new Date).getFullYear(), o = parseInt(n[0], 10), s = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += i), n[1].match(/[+\-].*/) && (s += i)), (!r || t.getTime() >= r.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!s || t.getFullYear() <= s)
            },
            _getFormatConfig: function(e) {
                var t = this._get(e, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function(e, t, n, i) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
            }
        }), e.fn.datepicker = function(t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
            var n = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
                "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
            }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
        }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.12.1", e.datepicker
    }),
    function(e) {
        function t(e) {
            var t = e.length,
                i = n.type(e);
            return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var n = function(e, t) {
                return new n.fn.init(e, t)
            };
            n.isWindow = function(e) {
                return null != e && e == e.window
            }, n.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
            }, n.isArray = Array.isArray || function(e) {
                return "array" === n.type(e)
            }, n.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                try {
                    if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || a.call(e, t)
            }, n.each = function(e, n, i) {
                var r = 0,
                    a = e.length,
                    o = t(e);
                if (i) {
                    if (o)
                        for (; a > r && !1 !== n.apply(e[r], i); r++);
                    else
                        for (r in e)
                            if (!1 === n.apply(e[r], i)) break
                } else if (o)
                    for (; a > r && !1 !== n.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === n.call(e[r], r, e[r])) break; return e
            }, n.data = function(e, t, r) {
                if (void 0 === r) {
                    var a = e[n.expando],
                        o = a && i[a];
                    if (void 0 === t) return o;
                    if (o && t in o) return o[t]
                } else if (void 0 !== t) {
                    var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                    return i[a] = i[a] || {}, i[a][t] = r, r
                }
            }, n.removeData = function(e, t) {
                var r = e[n.expando],
                    a = r && i[r];
                a && n.each(t, function(e, t) {
                    delete a[t]
                })
            }, n.extend = function() {
                var e, t, i, r, a, o, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (a = arguments[l]))
                        for (r in a) e = s[r], i = a[r], s !== i && (c && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, o = e && n.isArray(e) ? e : []) : o = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(c, o, i)) : void 0 !== i && (s[r] = i));
                return s
            }, n.queue = function(e, i, r) {
                function a(e, n) {
                    var i = n || [];
                    return null != e && (t(Object(e)) ? function(e, t) {
                        for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                        if (n !== n)
                            for (; void 0 !== t[i];) e[r++] = t[i++];
                        e.length = r
                    }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                }
                if (e) {
                    i = (i || "fx") + "queue";
                    var o = n.data(e, i);
                    return r ? (!o || n.isArray(r) ? o = n.data(e, i, a(r)) : o.push(r), o) : o || []
                }
            }, n.dequeue = function(e, t) {
                n.each(e.nodeType ? [e] : e, function(e, i) {
                    t = t || "fx";
                    var r = n.queue(i, t),
                        a = r.shift();
                    "inprogress" === a && (a = r.shift()), a && ("fx" === t && r.unshift("inprogress"), a.call(i, function() {
                        n.dequeue(i, t)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        i = this.offset(),
                        r = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(e).offset();
                    return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: i.top - r.top,
                        left: i.left - r.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var r = {}, a = r.hasOwnProperty, o = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, e.Velocity = {
                Utilities: n
            }
        }
    }(window),
    function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, n, i) {
            function r(e) {
                for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                    var r = e[t];
                    r && i.push(r)
                }
                return i
            }

            function a(e) {
                return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
            }

            function o(e) {
                var t = f.data(e, "velocity");
                return null === t ? i : t
            }

            function s(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function l(e, n, i, r) {
                function a(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function o(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, n) {
                    return ((a(t, n) * e + o(t, n)) * e + s(t)) * e
                }

                function u(e, t, n) {
                    return 3 * a(t, n) * e * e + 2 * o(t, n) * e + s(t)
                }

                function c(t, n) {
                    for (var r = 0; g > r; ++r) {
                        var a = u(n, e, i);
                        if (0 === a) return n;
                        n -= (l(n, e, i) - t) / a
                    }
                    return n
                }

                function d() {
                    for (var t = 0; b > t; ++t) D[t] = l(t * x, e, i)
                }

                function f(t, n, r) {
                    var a, o, s = 0;
                    do {
                        o = n + (r - n) / 2, a = l(o, e, i) - t, a > 0 ? r = o : n = o
                    } while (Math.abs(a) > y && ++s < v);
                    return o
                }

                function p(t) {
                    for (var n = 0, r = 1, a = b - 1; r != a && D[r] <= t; ++r) n += x;
                    --r;
                    var o = (t - D[r]) / (D[r + 1] - D[r]),
                        s = n + o * x,
                        l = u(s, e, i);
                    return l >= m ? c(t, s) : 0 == l ? s : f(t, n, n + x)
                }

                function h() {
                    C = !0, (e != n || i != r) && d()
                }
                var g = 4,
                    m = .001,
                    y = 1e-7,
                    v = 10,
                    b = 11,
                    x = 1 / (b - 1),
                    k = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
                var D = k ? new Float32Array(b) : new Array(b),
                    C = !1,
                    _ = function(t) {
                        return C || h(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), n, r)
                    };
                _.getControlPoints = function() {
                    return [{
                        x: e,
                        y: n
                    }, {
                        x: i,
                        y: r
                    }]
                };
                var S = "generateBezier(" + [e, n, i, r] + ")";
                return _.toString = function() {
                    return S
                }, _
            }

            function u(e, t) {
                var n = e;
                return g.isString(e) ? b.Easings[e] || (n = !1) : n = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : !(!g.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === n && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : v), n
            }

            function c(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        n = b.State.calls.length;
                    n > 1e4 && (b.State.calls = r(b.State.calls));
                    for (var a = 0; n > a; a++)
                        if (b.State.calls[a]) {
                            var s = b.State.calls[a],
                                l = s[0],
                                u = s[2],
                                p = s[3],
                                h = !!p,
                                m = null;
                            p || (p = b.State.calls[a][3] = t - 16);
                            for (var y = Math.min((t - p) / u.duration, 1), v = 0, x = l.length; x > v; v++) {
                                var w = l[v],
                                    C = w.element;
                                if (o(C)) {
                                    var _ = !1;
                                    if (u.display !== i && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            f.each(S, function(e, t) {
                                                k.setPropertyValue(C, "display", t)
                                            })
                                        }
                                        k.setPropertyValue(C, "display", u.display)
                                    }
                                    u.visibility !== i && "hidden" !== u.visibility && k.setPropertyValue(C, "visibility", u.visibility);
                                    for (var T in w)
                                        if ("element" !== T) {
                                            var E, N = w[T],
                                                M = g.isString(N.easing) ? b.Easings[N.easing] : N.easing;
                                            if (1 === y) E = N.endValue;
                                            else {
                                                var A = N.endValue - N.startValue;
                                                if (E = N.startValue + A * M(y, u, A), !h && E === N.currentValue) continue
                                            }
                                            if (N.currentValue = E, "tween" === T) m = E;
                                            else {
                                                if (k.Hooks.registered[T]) {
                                                    var j = k.Hooks.getRoot(T),
                                                        P = o(C).rootPropertyValueCache[j];
                                                    P && (N.rootPropertyValue = P)
                                                }
                                                var I = k.setPropertyValue(C, T, N.currentValue + (0 === parseFloat(E) ? "" : N.unitType), N.rootPropertyValue, N.scrollData);
                                                k.Hooks.registered[T] && (o(C).rootPropertyValueCache[j] = k.Normalizations.registered[j] ? k.Normalizations.registered[j]("extract", null, I[1]) : I[1]), "transform" === I[0] && (_ = !0)
                                            }
                                        }
                                    u.mobileHA && o(C).transformCache.translate3d === i && (o(C).transformCache.translate3d = "(0px, 0px, 0px)", _ = !0), _ && k.flushTransformCache(C)
                                }
                            }
                            u.display !== i && "none" !== u.display && (b.State.calls[a][2].display = !1), u.visibility !== i && "hidden" !== u.visibility && (b.State.calls[a][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], y, Math.max(0, p + u.duration - t), p, m), 1 === y && d(a)
                        }
                }
                b.State.isTicking && D(c)
            }

            function d(e, t) {
                if (!b.State.calls[e]) return !1;
                for (var n = b.State.calls[e][0], r = b.State.calls[e][1], a = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = n.length; c > u; u++) {
                    var d = n[u].element;
                    if (t || a.loop || ("none" === a.display && k.setPropertyValue(d, "display", a.display), "hidden" === a.visibility && k.setPropertyValue(d, "visibility", a.visibility)), !0 !== a.loop && (f.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(f.queue(d)[1])) && o(d)) {
                        o(d).isAnimating = !1, o(d).rootPropertyValueCache = {};
                        var p = !1;
                        f.each(k.Lists.transforms3D, function(e, t) {
                            var n = /^scale/.test(t) ? 1 : 0,
                                r = o(d).transformCache[t];
                            o(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (p = !0, delete o(d).transformCache[t])
                        }), a.mobileHA && (p = !0, delete o(d).transformCache.translate3d), p && k.flushTransformCache(d), k.Values.removeClass(d, "velocity-animating")
                    }
                    if (!t && a.complete && !a.loop && u === c - 1) try {
                        a.complete.call(r, r)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    s && !0 !== a.loop && s(r), o(d) && !0 === a.loop && !t && (f.each(o(d).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), b(d, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), !1 !== a.queue && f.dequeue(d, a.queue)
                }
                b.State.calls[e] = !1;
                for (var h = 0, g = b.State.calls.length; g > h; h++)
                    if (!1 !== b.State.calls[h]) {
                        l = !0;
                        break
                    }!1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var f, p = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = n.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return i
                }(),
                h = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                            t(i + n)
                        }, n)
                    }
                }(),
                g = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                m = !1;
            if (e.fn && e.fn.jquery ? (f = e, m = !0) : f = t.Velocity.Utilities, 8 >= p && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var y = 400,
                v = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: f,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: y,
                        easing: v,
                        begin: i,
                        complete: i,
                        progress: i,
                        display: i,
                        visibility: i,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(e) {
                        f.data(e, "velocity", {
                            isSVG: g.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            t.pageYOffset !== i ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var x = function() {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, n, i) {
                    var r = {
                        x: t.x + i.dx * n,
                        v: t.v + i.dv * n,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: r.v,
                        dv: e(r)
                    }
                }

                function n(n, i) {
                    var r = {
                            dx: n.v,
                            dv: e(n)
                        },
                        a = t(n, .5 * i, r),
                        o = t(n, .5 * i, a),
                        s = t(n, i, o),
                        l = 1 / 6 * (r.dx + 2 * (a.dx + o.dx) + s.dx),
                        u = 1 / 6 * (r.dv + 2 * (a.dv + o.dv) + s.dv);
                    return n.x = n.x + l * i, n.v = n.v + u * i, n
                }
                return function e(t, i, r) {
                    var a, o, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0,
                        d = 1e-4,
                        f = .016;
                    for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = t, l.friction = i, a = null !== r, a ? (c = e(t, i), o = c / r * f) : o = f; s = n(s || l, o), u.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
                    return a ? function(e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            b.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, f.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(e, t) {
                b.Easings[t[0]] = l.apply(null, t[1])
            });
            var k = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < k.Lists.colors.length; e++) {
                            var t = "color" === k.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            k.Hooks.templates[k.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var n, i, r;
                        if (p)
                            for (n in k.Hooks.templates) {
                                i = k.Hooks.templates[n], r = i[0].split(" ");
                                var a = i[1].match(k.RegEx.valueSplit);
                                "Color" === r[0] && (r.push(r.shift()), a.push(a.shift()), k.Hooks.templates[n] = [r.join(" "), a.join(" ")])
                            }
                        for (n in k.Hooks.templates) {
                            i = k.Hooks.templates[n], r = i[0].split(" ");
                            for (var e in r) {
                                var o = n + r[e],
                                    s = e;
                                k.Hooks.registered[o] = [n, s]
                            }
                        }
                    },
                    getRoot: function(e) {
                        var t = k.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return k.RegEx.valueUnwrap.test(t) && (t = t.match(k.RegEx.valueUnwrap)[1]), k.Values.isCSSNullValue(t) && (t = k.Hooks.templates[e][1]), t
                    },
                    extractValue: function(e, t) {
                        var n = k.Hooks.registered[e];
                        if (n) {
                            var i = n[0],
                                r = n[1];
                            return t = k.Hooks.cleanRootPropertyValue(i, t), t.toString().match(k.RegEx.valueSplit)[r]
                        }
                        return t
                    },
                    injectValue: function(e, t, n) {
                        var i = k.Hooks.registered[e];
                        if (i) {
                            var r, a = i[0],
                                o = i[1];
                            return n = k.Hooks.cleanRootPropertyValue(a, n), r = n.toString().match(k.RegEx.valueSplit), r[o] = t, r.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, n) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var i;
                                    return k.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(k.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                                case "inject":
                                    return "rect(" + n + ")"
                            }
                        },
                        blur: function(e, t, n) {
                            switch (e) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(n);
                                    if (!i && 0 !== i) {
                                        var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = r ? r[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function(e, t, n) {
                            if (8 >= p) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n = i ? i[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return n
                            }
                        }
                    },
                    register: function() {
                        9 >= p || b.State.isGingerbread || (k.Lists.transformsBase = k.Lists.transformsBase.concat(k.Lists.transforms3D));
                        for (var e = 0; e < k.Lists.transformsBase.length; e++) ! function() {
                            var t = k.Lists.transformsBase[e];
                            k.Normalizations.registered[t] = function(e, n, r) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return o(n) === i || o(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : o(n).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var a = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && o(n).transformCache[t] === i && 1 > r && (r = 1), a = !/(\d)$/i.test(r);
                                                break;
                                            case "skew":
                                                a = !/(deg|\d)$/i.test(r);
                                                break;
                                            case "rotate":
                                                a = !/(deg|\d)$/i.test(r)
                                        }
                                        return a || (o(n).transformCache[t] = "(" + r + ")"), o(n).transformCache[t]
                                }
                            }
                        }();
                        for (var e = 0; e < k.Lists.colors.length; e++) ! function() {
                            var t = k.Lists.colors[e];
                            k.Normalizations.registered[t] = function(e, n, r) {
                                switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var a;
                                        if (k.RegEx.wrappedValueAlreadyExtracted.test(r)) a = r;
                                        else {
                                            var o, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? o = s[r] !== i ? s[r] : s.black : k.RegEx.isHex.test(r) ? o = "rgb(" + k.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (o = s.black), a = (o || r).toString().match(k.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= p || 3 !== a.split(" ").length || (a += " 1"), a;
                                    case "inject":
                                        return 8 >= p ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (p || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                            var r;
                            if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                    return e.toUpperCase()
                                }), g.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[e] = r, [r, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(n, function(e, t, n, i) {
                            return t + t + n + n + i + i
                        }), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(e, n, r, a) {
                    function s(e, n) {
                        function r() {
                            u && k.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= p) l = f.css(e, n);
                        else {
                            var u = !1;
                            if (/^(width|height)$/.test(n) && 0 === k.getPropertyValue(e, "display") && (u = !0, k.setPropertyValue(e, "display", k.Values.getDisplayType(e))), !a) {
                                if ("height" === n && "border-box" !== k.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(k.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(k.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(k.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(k.getPropertyValue(e, "paddingBottom")) || 0);
                                    return r(), c
                                }
                                if ("width" === n && "border-box" !== k.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var d = e.offsetWidth - (parseFloat(k.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(k.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(k.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(k.getPropertyValue(e, "paddingRight")) || 0);
                                    return r(), d
                                }
                            }
                            var h;
                            h = o(e) === i ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === p && "filter" === n ? h.getPropertyValue(n) : h[n], ("" === l || null === l) && (l = e.style[n]), r()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                            var g = s(e, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = f(e).position()[n] + "px")
                        }
                        return l
                    }
                    var l;
                    if (k.Hooks.registered[n]) {
                        var u = n,
                            c = k.Hooks.getRoot(u);
                        r === i && (r = k.getPropertyValue(e, k.Names.prefixCheck(c)[0])), k.Normalizations.registered[c] && (r = k.Normalizations.registered[c]("extract", e, r)), l = k.Hooks.extractValue(u, r)
                    } else if (k.Normalizations.registered[n]) {
                        var d, h;
                        d = k.Normalizations.registered[n]("name", e), "transform" !== d && (h = s(e, k.Names.prefixCheck(d)[0]), k.Values.isCSSNullValue(h) && k.Hooks.templates[n] && (h = k.Hooks.templates[n][1])), l = k.Normalizations.registered[n]("extract", e, h)
                    }
                    if (!/^[\d-]/.test(l))
                        if (o(e) && o(e).isSVG && k.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n)) try {
                                l = e.getBBox()[n]
                            } catch (e) {
                                l = 0
                            } else l = e.getAttribute(n);
                            else l = s(e, k.Names.prefixCheck(n)[0]);
                    return k.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
                },
                setPropertyValue: function(e, n, i, r, a) {
                    var s = n;
                    if ("scroll" === n) a.container ? a.container["scroll" + a.direction] = i : "Left" === a.direction ? t.scrollTo(i, a.alternateValue) : t.scrollTo(a.alternateValue, i);
                    else if (k.Normalizations.registered[n] && "transform" === k.Normalizations.registered[n]("name", e)) k.Normalizations.registered[n]("inject", e, i), s = "transform", i = o(e).transformCache[n];
                    else {
                        if (k.Hooks.registered[n]) {
                            var l = n,
                                u = k.Hooks.getRoot(n);
                            r = r || k.getPropertyValue(e, u), i = k.Hooks.injectValue(l, i, r), n = u
                        }
                        if (k.Normalizations.registered[n] && (i = k.Normalizations.registered[n]("inject", e, i), n = k.Normalizations.registered[n]("name", e)), s = k.Names.prefixCheck(n)[0], 8 >= p) try {
                            e.style[s] = i
                        } catch (e) {
                            b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                        } else o(e) && o(e).isSVG && k.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                        b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                    }
                    return [s, i]
                },
                flushTransformCache: function(e) {
                    function t(t) {
                        return parseFloat(k.getPropertyValue(e, t))
                    }
                    var n = "";
                    if ((p || b.State.isAndroid && !b.State.isChrome) && o(e).isSVG) {
                        var i = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        f.each(o(e).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                        })
                    } else {
                        var r, a;
                        f.each(o(e).transformCache, function(t) {
                            return r = o(e).transformCache[t], "transformPerspective" === t ? (a = r, !0) : (9 === p && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
                        }), a && (n = "perspective" + a + " " + n)
                    }
                    k.setPropertyValue(e, "transform", n)
                }
            };
            k.Hooks.register(), k.Normalizations.register(), b.hook = function(e, t, n) {
                var r = i;
                return e = a(e), f.each(e, function(e, a) {
                    if (o(a) === i && b.init(a), n === i) r === i && (r = b.CSS.getPropertyValue(a, t));
                    else {
                        var s = b.CSS.setPropertyValue(a, t, n);
                        "transform" === s[0] && b.CSS.flushTransformCache(a), r = s
                    }
                }), r
            };
            var w = function() {
                function e() {
                    return s ? T.promise || null : l
                }

                function r() {
                    function e() {
                        function e(e, t) {
                            var n = i,
                                r = i,
                                o = i;
                            return g.isArray(e) ? (n = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || k.RegEx.isHex.test(e[1]) ? o = e[1] : (g.isString(e[1]) && !k.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (r = t ? e[1] : u(e[1], s.duration), e[2] !== i && (o = e[2]))) : n = e, t || (r = r || s.easing), g.isFunction(n) && (n = n.call(a, C, D)), g.isFunction(o) && (o = o.call(a, C, D)), [n || 0, r, o]
                        }

                        function d(e, t) {
                            var n, i;
                            return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                return n = e, ""
                            }), n || (n = k.Values.getUnitType(e)), [i, n]
                        }

                        function p() {
                            var e = {
                                    myParent: a.parentNode || n.body,
                                    position: k.getPropertyValue(a, "position"),
                                    fontSize: k.getPropertyValue(a, "fontSize")
                                },
                                i = e.position === I.lastPosition && e.myParent === I.lastParent,
                                r = e.fontSize === I.lastFontSize;
                            I.lastParent = e.myParent, I.lastPosition = e.position, I.lastFontSize = e.fontSize;
                            var s = 100,
                                l = {};
                            if (r && i) l.emToPx = I.lastEmToPx, l.percentToPxWidth = I.lastPercentToPxWidth, l.percentToPxHeight = I.lastPercentToPxHeight;
                            else {
                                var u = o(a).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                    b.CSS.setPropertyValue(u, t, "hidden")
                                }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                    b.CSS.setPropertyValue(u, t, s + "%")
                                }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(k.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(k.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = I.lastEmToPx = (parseFloat(k.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                            }
                            return null === I.remToPx && (I.remToPx = parseFloat(k.getPropertyValue(n.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(t.innerWidth) / 100, I.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = I.remToPx, l.vwToPx = I.vwToPx, l.vhToPx = I.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                        }
                        if (s.begin && 0 === C) try {
                            s.begin.call(h, h)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === E) {
                            var y, x, w, _ = /^x$/i.test(s.axis) ? "Left" : "Top",
                                S = parseFloat(s.offset) || 0;
                            s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, y = s.container["scroll" + _], w = y + f(a).position()[_.toLowerCase()] + S) : s.container = null : (y = b.State.scrollAnchor[b.State["scrollProperty" + _]], x = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === _ ? "Top" : "Left")]], w = f(a).offset()[_.toLowerCase()] + S), l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: y,
                                    currentValue: y,
                                    endValue: w,
                                    unitType: "",
                                    easing: s.easing,
                                    scrollData: {
                                        container: s.container,
                                        direction: _,
                                        alternateValue: x
                                    }
                                },
                                element: a
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                        } else if ("reverse" === E) {
                            if (!o(a).tweensContainer) return void f.dequeue(a, s.queue);
                            "none" === o(a).opts.display && (o(a).opts.display = "auto"), "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"), o(a).opts.loop = !1, o(a).opts.begin = null, o(a).opts.complete = null, v.easing || delete s.easing, v.duration || delete s.duration, s = f.extend({}, o(a).opts, s);
                            var N = f.extend(!0, {}, o(a).tweensContainer);
                            for (var M in N)
                                if ("element" !== M) {
                                    var A = N[M].startValue;
                                    N[M].startValue = N[M].currentValue = N[M].endValue, N[M].endValue = A, g.isEmptyObject(v) || (N[M].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + M + "): " + JSON.stringify(N[M]), a)
                                }
                            l = N
                        } else if ("start" === E) {
                            var N;
                            o(a).tweensContainer && !0 === o(a).isAnimating && (N = o(a).tweensContainer), f.each(m, function(t, n) {
                                if (RegExp("^" + k.Lists.colors.join("$|^") + "$").test(t)) {
                                    var r = e(n, !0),
                                        a = r[0],
                                        o = r[1],
                                        s = r[2];
                                    if (k.RegEx.isHex.test(a)) {
                                        for (var l = ["Red", "Green", "Blue"], u = k.Values.hexToRgb(a), c = s ? k.Values.hexToRgb(s) : i, d = 0; d < l.length; d++) {
                                            var f = [u[d]];
                                            o && f.push(o), c !== i && f.push(c[d]), m[t + l[d]] = f
                                        }
                                        delete m[t]
                                    }
                                }
                            });
                            for (var j in m) {
                                var P = e(m[j]),
                                    O = P[0],
                                    L = P[1],
                                    Y = P[2];
                                j = k.Names.camelCase(j);
                                var H = k.Hooks.getRoot(j),
                                    R = !1;
                                if (o(a).isSVG || "tween" === H || !1 !== k.Names.prefixCheck(H)[1] || k.Normalizations.registered[H] !== i) {
                                    (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(j) && !Y && 0 !== O && (Y = 0), s._cacheValues && N && N[j] ? (Y === i && (Y = N[j].endValue + N[j].unitType), R = o(a).rootPropertyValueCache[H]) : k.Hooks.registered[j] ? Y === i ? (R = k.getPropertyValue(a, H), Y = k.getPropertyValue(a, j, R)) : R = k.Hooks.templates[H][1] : Y === i && (Y = k.getPropertyValue(a, j));
                                    var q, $, V, X = !1;
                                    if (q = d(j, Y), Y = q[0], V = q[1], q = d(j, O), O = q[0].replace(/^([+-\/*])=/, function(e, t) {
                                            return X = t, ""
                                        }), $ = q[1], Y = parseFloat(Y) || 0, O = parseFloat(O) || 0, "%" === $ && (/^(fontSize|lineHeight)$/.test(j) ? (O /= 100, $ = "em") : /^scale/.test(j) ? (O /= 100, $ = "") : /(Red|Green|Blue)$/i.test(j) && (O = O / 100 * 255, $ = "")), /[\/*]/.test(X)) $ = V;
                                    else if (V !== $ && 0 !== Y)
                                        if (0 === O) $ = V;
                                        else {
                                            r = r || p();
                                            var B = /margin|padding|left|right|width|text|word|letter/i.test(j) || /X$/.test(j) || "x" === j ? "x" : "y";
                                            switch (V) {
                                                case "%":
                                                    Y *= "x" === B ? r.percentToPxWidth : r.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    Y *= r[V + "ToPx"]
                                            }
                                            switch ($) {
                                                case "%":
                                                    Y *= 1 / ("x" === B ? r.percentToPxWidth : r.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    Y *= 1 / r[$ + "ToPx"]
                                            }
                                        }
                                    switch (X) {
                                        case "+":
                                            O = Y + O;
                                            break;
                                        case "-":
                                            O = Y - O;
                                            break;
                                        case "*":
                                            O *= Y;
                                            break;
                                        case "/":
                                            O = Y / O
                                    }
                                    l[j] = {
                                        rootPropertyValue: R,
                                        startValue: Y,
                                        currentValue: Y,
                                        endValue: O,
                                        unitType: $,
                                        easing: L
                                    }, b.debug && console.log("tweensContainer (" + j + "): " + JSON.stringify(l[j]), a)
                                } else b.debug && console.log("Skipping [" + H + "] due to a lack of browser support.")
                            }
                            l.element = a
                        }
                        l.element && (k.Values.addClass(a, "velocity-animating"), F.push(l), "" === s.queue && (o(a).tweensContainer = l, o(a).opts = s), o(a).isAnimating = !0, C === D - 1 ? (b.State.calls.push([F, h, s, null, T.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, c())) : C++)
                    }
                    var r, a = this,
                        s = f.extend({}, b.defaults, v),
                        l = {};
                    switch (o(a) === i && b.init(a), parseFloat(s.delay) && !1 !== s.queue && f.queue(a, s.queue, function(e) {
                        b.velocityQueueEntryFlag = !0, o(a).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(s.delay)),
                            next: e
                        }
                    }), s.duration.toString().toLowerCase()) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = y;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1
                    }!1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(a, s.queue, function(t, n) {
                        return !0 === n ? (T.promise && T.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(a)[0] || f.dequeue(a)
                }
                var s, l, p, h, m, v, x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
                if (g.isWrapped(this) ? (s = !1, p = 0, h = this, l = this) : (s = !0, p = 1, h = x ? arguments[0].elements || arguments[0].e : arguments[0]), h = a(h)) {
                    x ? (m = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (m = arguments[p], v = arguments[p + 1]);
                    var D = h.length,
                        C = 0;
                    if (!/^(stop|finish|finishAll)$/i.test(m) && !f.isPlainObject(v)) {
                        var _ = p + 1;
                        v = {};
                        for (var S = _; S < arguments.length; S++) g.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? g.isString(arguments[S]) || g.isArray(arguments[S]) ? v.easing = arguments[S] : g.isFunction(arguments[S]) && (v.complete = arguments[S]) : v.duration = arguments[S]
                    }
                    var T = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    s && b.Promise && (T.promise = new b.Promise(function(e, t) {
                        T.resolver = e, T.rejecter = t
                    }));
                    var E;
                    switch (m) {
                        case "scroll":
                            E = "scroll";
                            break;
                        case "reverse":
                            E = "reverse";
                            break;
                        case "finish":
                        case "finishAll":
                        case "stop":
                            f.each(h, function(e, t) {
                                o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer), "finishAll" !== m || !0 !== v && !g.isString(v) || (f.each(f.queue(t, g.isString(v) ? v : ""), function(e, t) {
                                    g.isFunction(t) && t()
                                }), f.queue(t, g.isString(v) ? v : "", []))
                            });
                            var N = [];
                            return f.each(b.State.calls, function(e, t) {
                                t && f.each(t[1], function(n, r) {
                                    var a = v === i ? "" : v;
                                    return !0 !== a && t[2].queue !== a && (v !== i || !1 !== t[2].queue) || void f.each(h, function(n, i) {
                                        i === r && ((!0 === v || g.isString(v)) && (f.each(f.queue(i, g.isString(v) ? v : ""), function(e, t) {
                                            g.isFunction(t) && t(null, !0)
                                        }), f.queue(i, g.isString(v) ? v : "", [])), "stop" === m ? (o(i) && o(i).tweensContainer && !1 !== a && f.each(o(i).tweensContainer, function(e, t) {
                                            t.endValue = t.currentValue
                                        }), N.push(e)) : ("finish" === m || "finishAll" === m) && (t[2].duration = 1))
                                    })
                                })
                            }), "stop" === m && (f.each(N, function(e, t) {
                                d(t, !0)
                            }), T.promise && T.resolver(h)), e();
                        default:
                            if (!f.isPlainObject(m) || g.isEmptyObject(m)) {
                                if (g.isString(m) && b.Redirects[m]) {
                                    var M = f.extend({}, v),
                                        A = M.duration,
                                        j = M.delay || 0;
                                    return !0 === M.backwards && (h = f.extend(!0, [], h).reverse()), f.each(h, function(e, t) {
                                        parseFloat(M.stagger) ? M.delay = j + parseFloat(M.stagger) * e : g.isFunction(M.stagger) && (M.delay = j + M.stagger.call(t, e, D)), M.drag && (M.duration = parseFloat(A) || (/^(callout|transition)/.test(m) ? 1e3 : y), M.duration = Math.max(M.duration * (M.backwards ? 1 - e / D : (e + 1) / D), .75 * M.duration, 200)), b.Redirects[m].call(t, t, M || {}, e, D, h, T.promise ? T : i)
                                    }), e()
                                }
                                var P = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return T.promise ? T.rejecter(new Error(P)) : console.log(P), e()
                            }
                            E = "start"
                    }
                    var I = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        F = [];
                    f.each(h, function(e, t) {
                        g.isNode(t) && r.call(t)
                    });
                    var O, M = f.extend({}, b.defaults, v);
                    if (M.loop = parseInt(M.loop), O = 2 * M.loop - 1, M.loop)
                        for (var L = 0; O > L; L++) {
                            var Y = {
                                delay: M.delay,
                                progress: M.progress
                            };
                            L === O - 1 && (Y.display = M.display, Y.visibility = M.visibility, Y.complete = M.complete), w(h, "reverse", Y)
                        }
                    return e()
                }
            };
            b = f.extend(w, b), b.animate = w;
            var D = t.requestAnimationFrame || h;
            return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
                n.hidden ? (D = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }, c()) : D = t.requestAnimationFrame || h
            }), e.Velocity = b, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function(e, t) {
                b.Redirects["slide" + t] = function(e, n, r, a, o, s) {
                    var l = f.extend({}, n),
                        u = l.begin,
                        c = l.complete,
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        p = {};
                    l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                        u && u.call(o, o);
                        for (var n in d) {
                            p[n] = e.style[n];
                            var i = b.CSS.getPropertyValue(e, n);
                            d[n] = "Down" === t ? [i, 0] : [0, i]
                        }
                        p.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var t in p) e.style[t] = p[t];
                        c && c.call(o, o), s && s.resolver(o)
                    }, b(e, d, l)
                }
            }), f.each(["In", "Out"], function(e, t) {
                b.Redirects["fade" + t] = function(e, n, r, a, o, s) {
                    var l = f.extend({}, n),
                        u = {
                            opacity: "In" === t ? 1 : 0
                        },
                        c = l.complete;
                    l.complete = r !== a - 1 ? l.begin = null : function() {
                        c && c.call(o, o), s && s.resolver(o)
                    }, l.display === i && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    }),
    function(e) {
        "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
    }(function() {
        return function(e, t, n, i) {
            function r(e, t) {
                var n = [];
                return !(!e || !t) && (o.each([e, t], function(e, t) {
                    var i = [];
                    o.each(t, function(e, t) {
                        for (; t.toString().length < 5;) t = "0" + t;
                        i.push(t)
                    }), n.push(i.join(""))
                }), parseFloat(n[0]) > parseFloat(n[1]))
            }
            if (!e.Velocity || !e.Velocity.Utilities) return void(t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
            var a = e.Velocity,
                o = a.Utilities;
            if (r({
                    major: 1,
                    minor: 1,
                    patch: 0
                }, a.version)) {
                var s = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
                throw alert(s), new Error(s)
            }
            a.RegisterEffect = a.RegisterUI = function(e, t) {
                function n(e, t, n, i) {
                    var r, s = 0;
                    o.each(e.nodeType ? [e] : e, function(e, t) {
                        i && (n += e * i), r = t.parentNode, o.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(e, n) {
                            s += parseFloat(a.CSS.getPropertyValue(t, n))
                        })
                    }), a.animate(r, {
                        height: ("In" === t ? "+" : "-") + "=" + s
                    }, {
                        queue: !1,
                        easing: "ease-in-out",
                        duration: n * ("In" === t ? .6 : 1)
                    })
                }
                return a.Redirects[e] = function(r, s, l, u, c, d) {
                    function f() {
                        s.display !== i && "none" !== s.display || !/Out$/.test(e) || o.each(c.nodeType ? [c] : c, function(e, t) {
                            a.CSS.setPropertyValue(t, "display", "none")
                        }), s.complete && s.complete.call(c, c), d && d.resolver(c || r)
                    }
                    var p = l === u - 1;
                    "function" == typeof t.defaultDuration ? t.defaultDuration = t.defaultDuration.call(c, c) : t.defaultDuration = parseFloat(t.defaultDuration);
                    for (var h = 0; h < t.calls.length; h++) {
                        var g = t.calls[h],
                            m = g[0],
                            y = s.duration || t.defaultDuration || 1e3,
                            v = g[1],
                            b = g[2] || {},
                            x = {};
                        if (x.duration = y * (v || 1), x.queue = s.queue || "", x.easing = b.easing || "ease", x.delay = parseFloat(b.delay) || 0, x._cacheValues = b._cacheValues || !0, 0 === h) {
                            if (x.delay += parseFloat(s.delay) || 0, 0 === l && (x.begin = function() {
                                    s.begin && s.begin.call(c, c);
                                    var t = e.match(/(In|Out)$/);
                                    t && "In" === t[0] && m.opacity !== i && o.each(c.nodeType ? [c] : c, function(e, t) {
                                        a.CSS.setPropertyValue(t, "opacity", 0)
                                    }), s.animateParentHeight && t && n(c, t[0], y + x.delay, s.stagger)
                                }), null !== s.display)
                                if (s.display !== i && "none" !== s.display) x.display = s.display;
                                else if (/In$/.test(e)) {
                                var k = a.CSS.Values.getDisplayType(r);
                                x.display = "inline" === k ? "inline-block" : k
                            }
                            s.visibility && "hidden" !== s.visibility && (x.visibility = s.visibility)
                        }
                        h === t.calls.length - 1 && (x.complete = function() {
                            if (t.reset) {
                                for (var e in t.reset) {
                                    var n = t.reset[e];
                                    a.CSS.Hooks.registered[e] !== i || "string" != typeof n && "number" != typeof n || (t.reset[e] = [t.reset[e], t.reset[e]])
                                }
                                var o = {
                                    duration: 0,
                                    queue: !1
                                };
                                p && (o.complete = f), a.animate(r, t.reset, o)
                            } else p && f()
                        }, "hidden" === s.visibility && (x.visibility = s.visibility)), a.animate(r, m, x)
                    }
                }, a
            }, a.RegisterEffect.packagedEffects = {
                "callout.bounce": {
                    defaultDuration: 550,
                    calls: [
                        [{
                            translateY: -30
                        }, .25],
                        [{
                            translateY: 0
                        }, .125],
                        [{
                            translateY: -15
                        }, .125],
                        [{
                            translateY: 0
                        }, .25]
                    ]
                },
                "callout.shake": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 11
                        }, .125],
                        [{
                            translateX: -11
                        }, .125],
                        [{
                            translateX: 0
                        }, .125]
                    ]
                },
                "callout.flash": {
                    defaultDuration: 1100,
                    calls: [
                        [{
                            opacity: [0, "easeInOutQuad", 1]
                        }, .25],
                        [{
                            opacity: [1, "easeInOutQuad"]
                        }, .25],
                        [{
                            opacity: [0, "easeInOutQuad"]
                        }, .25],
                        [{
                            opacity: [1, "easeInOutQuad"]
                        }, .25]
                    ]
                },
                "callout.pulse": {
                    defaultDuration: 825,
                    calls: [
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1
                        }, .5, {
                            easing: "easeInExpo"
                        }],
                        [{
                            scaleX: 1,
                            scaleY: 1
                        }, .5]
                    ]
                },
                "callout.swing": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            rotateZ: 15
                        }, .2],
                        [{
                            rotateZ: -10
                        }, .2],
                        [{
                            rotateZ: 5
                        }, .2],
                        [{
                            rotateZ: -5
                        }, .2],
                        [{
                            rotateZ: 0
                        }, .2]
                    ]
                },
                "callout.tada": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            scaleX: .9,
                            scaleY: .9,
                            rotateZ: -3
                        }, .1],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            rotateZ: 3
                        }, .1],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            rotateZ: -3
                        }, .1],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        ["reverse", .125],
                        [{
                            scaleX: 1,
                            scaleY: 1,
                            rotateZ: 0
                        }, .2]
                    ]
                },
                "transition.fadeIn": {
                    defaultDuration: 500,
                    calls: [
                        [{
                            opacity: [1, 0]
                        }]
                    ]
                },
                "transition.fadeOut": {
                    defaultDuration: 500,
                    calls: [
                        [{
                            opacity: [0, 1]
                        }]
                    ]
                },
                "transition.flipXIn": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            rotateY: [0, -55]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipXOut": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            rotateY: 55
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateY: 0
                    }
                },
                "transition.flipYIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            rotateX: [0, -45]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipYOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            rotateX: 25
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateX: 0
                    }
                },
                "transition.flipBounceXIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [.725, 0],
                            transformPerspective: [400, 400],
                            rotateY: [-10, 90]
                        }, .5],
                        [{
                            opacity: .8,
                            rotateY: 10
                        }, .25],
                        [{
                            opacity: 1,
                            rotateY: 0
                        }, .25]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipBounceXOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [.9, 1],
                            transformPerspective: [400, 400],
                            rotateY: -10
                        }, .5],
                        [{
                            opacity: 0,
                            rotateY: 90
                        }, .5]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateY: 0
                    }
                },
                "transition.flipBounceYIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [.725, 0],
                            transformPerspective: [400, 400],
                            rotateX: [-10, 90]
                        }, .5],
                        [{
                            opacity: .8,
                            rotateX: 10
                        }, .25],
                        [{
                            opacity: 1,
                            rotateX: 0
                        }, .25]
                    ],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipBounceYOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [.9, 1],
                            transformPerspective: [400, 400],
                            rotateX: -15
                        }, .5],
                        [{
                            opacity: 0,
                            rotateX: 90
                        }, .5]
                    ],
                    reset: {
                        transformPerspective: 0,
                        rotateX: 0
                    }
                },
                "transition.swoopIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["100%", "50%"],
                            transformOriginY: ["100%", "100%"],
                            scaleX: [1, 0],
                            scaleY: [1, 0],
                            translateX: [0, -700],
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.swoopOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "100%"],
                            transformOriginY: ["100%", "100%"],
                            scaleX: 0,
                            scaleY: 0,
                            translateX: -700,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0
                    }
                },
                "transition.whirlIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, 0],
                            scaleY: [1, 0],
                            rotateY: [0, 160]
                        }, 1, {
                            easing: "easeInOutSine"
                        }]
                    ]
                },
                "transition.whirlOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, "easeInOutQuint", 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: 0,
                            scaleY: 0,
                            rotateY: 160
                        }, 1, {
                            easing: "swing"
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1,
                        rotateY: 0
                    }
                },
                "transition.shrinkIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, 1.5],
                            scaleY: [1, 1.5],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.shrinkOut": {
                    defaultDuration: 600,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: 1.3,
                            scaleY: 1.3,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.expandIn": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, .625],
                            scaleY: [1, .625],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.expandOut": {
                    defaultDuration: 700,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: .5,
                            scaleY: .5,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.bounceIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            scaleX: [1.05, .3],
                            scaleY: [1.05, .3]
                        }, .4],
                        [{
                            scaleX: .9,
                            scaleY: .9,
                            translateZ: 0
                        }, .2],
                        [{
                            scaleX: 1,
                            scaleY: 1
                        }, .5]
                    ]
                },
                "transition.bounceOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            scaleX: .95,
                            scaleY: .95
                        }, .35],
                        [{
                            scaleX: 1.1,
                            scaleY: 1.1,
                            translateZ: 0
                        }, .35],
                        [{
                            opacity: [0, 1],
                            scaleX: .3,
                            scaleY: .3
                        }, .3]
                    ],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.bounceUpIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [-30, 1e3]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateY: 10
                        }, .2],
                        [{
                            translateY: 0
                        }, .2]
                    ]
                },
                "transition.bounceUpOut": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            translateY: 20
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateY: -1e3
                        }, .8]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.bounceDownIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [30, -1e3]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateY: -10
                        }, .2],
                        [{
                            translateY: 0
                        }, .2]
                    ]
                },
                "transition.bounceDownOut": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            translateY: -20
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateY: 1e3
                        }, .8]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.bounceLeftIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [30, -1250]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateX: -10
                        }, .2],
                        [{
                            translateX: 0
                        }, .2]
                    ]
                },
                "transition.bounceLeftOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            translateX: 30
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateX: -1250
                        }, .8]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.bounceRightIn": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [-30, 1250]
                        }, .6, {
                            easing: "easeOutCirc"
                        }],
                        [{
                            translateX: 10
                        }, .2],
                        [{
                            translateX: 0
                        }, .2]
                    ]
                },
                "transition.bounceRightOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            translateX: -30
                        }, .2],
                        [{
                            opacity: [0, "easeInCirc", 1],
                            translateX: 1250
                        }, .8]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideUpIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, 20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideUpOut": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: -20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideDownIn": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, -20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideDownOut": {
                    defaultDuration: 900,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: 20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideLeftIn": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, -20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideLeftOut": {
                    defaultDuration: 1050,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: -20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideRightIn": {
                    defaultDuration: 1e3,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, 20],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideRightOut": {
                    defaultDuration: 1050,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: 20,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideUpBigIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, 75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideUpBigOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: -75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideDownBigIn": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateY: [0, -75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideDownBigOut": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateY: 75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideLeftBigIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, -75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideLeftBigOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: -75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideRightBigIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            translateX: [0, 75],
                            translateZ: 0
                        }]
                    ]
                },
                "transition.slideRightBigOut": {
                    defaultDuration: 750,
                    calls: [
                        [{
                            opacity: [0, 1],
                            translateX: 75,
                            translateZ: 0
                        }]
                    ],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.perspectiveUpIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: ["100%", "100%"],
                            rotateX: [0, -180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveUpOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: ["100%", "100%"],
                            rotateX: -180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateX: 0
                    }
                },
                "transition.perspectiveDownIn": {
                    defaultDuration: 800,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateX: [0, 180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveDownOut": {
                    defaultDuration: 850,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [800, 800],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateX: 180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateX: 0
                    }
                },
                "transition.perspectiveLeftIn": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateY: [0, -180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveLeftOut": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: [0, 0],
                            transformOriginY: [0, 0],
                            rotateY: -180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateY: 0
                    }
                },
                "transition.perspectiveRightIn": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [1, 0],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: ["100%", "100%"],
                            transformOriginY: [0, 0],
                            rotateY: [0, 180]
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveRightOut": {
                    defaultDuration: 950,
                    calls: [
                        [{
                            opacity: [0, 1],
                            transformPerspective: [2e3, 2e3],
                            transformOriginX: ["100%", "100%"],
                            transformOriginY: [0, 0],
                            rotateY: 180
                        }]
                    ],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateY: 0
                    }
                }
            };
            for (var l in a.RegisterEffect.packagedEffects) a.RegisterEffect(l, a.RegisterEffect.packagedEffects[l]);
            a.RunSequence = function(e) {
                var t = o.extend(!0, [], e);
                t.length > 1 && (o.each(t.reverse(), function(e, n) {
                    var i = t[e + 1];
                    if (i) {
                        var r = n.o || n.options,
                            s = i.o || i.options,
                            l = r && !1 === r.sequenceQueue ? "begin" : "complete",
                            u = s && s[l],
                            c = {};
                        c[l] = function() {
                            var e = i.e || i.elements,
                                t = e.nodeType ? [e] : e;
                            u && u.call(t, t), a(n)
                        }, i.o ? i.o = o.extend({}, s, c) : i.options = o.extend({}, s, c)
                    }
                }), t.reverse()), a(t[0])
            }
        }(window.jQuery || window.Zepto || window, window, document)
    }), $(document).ready(function() {
        $(".before-after-slider").each(function() {
            var e = $(this),
                t = e.width() + "px";
            e.find(".resize img").css("width", t), drags(e.find(".before-after-handle"), e.find(".resize"), e)
        })
    }), $(window).resize(function() {
        $(".before-after-slider").each(function() {
            var e = $(this),
                t = e.width() + "px";
            e.find(".resize img").css("width", t)
        })
    }), $(function() {
        scrollForFixedColumn()
    }), $(window).on("resize", function() {
        scrollForFixedColumn()
    }),
    function() {
        var e;
        new(e = function() {
            function e() {
                this.applicationHeader = $("[data-application-header]"),
                this.mobileMenuIcon = $("[data-application-nav-mobile-icon]"),
                this.navLinks = $("[data-application-nav-link]"),
                this.lastScrollTop = 0,
                this._fixHeaderIfPastA(),
                this._bindEvents()
            }
            return e.prototype._bindEvents = function() {
                return $(window).scroll(function(e) {
                    return function() {
                        //return e._fixHeaderIfPastA(), e._showHeaderIfPastB()
                    }
                }(this)), this.navLinks.click(function(e) {
                    return function(t) {
                        return e._handleNavLinkClick(t)
                    }
                }(this)), this.mobileMenuIcon.click(function(e) {
                    return function(t) {
                        return e._handleMobileIconClick(t)
                    }
                }(this))
            }, e.prototype._fixHeaderIfPastA = function() {
                return this._isPastPointA() ? this._fixHeader() : this._unfixHeader()
            }, e.prototype._showHeaderIfPastB = function() {
                return this._isPastPointB() ? this._showIfScrollingUp() : this.applicationHeader.removeClass("show")
            }, e.prototype._fixHeader = function() {
                // return this.applicationHeader.addClass("fixed")
            }, e.prototype._unfixHeader = function() {
                // return this.applicationHeader.removeClass("fixed")
            }, e.prototype._isPastPointA = function() {
                return $(window).scrollTop() > 100
            }, e.prototype._isPastPointB = function() {
                return $(window).scrollTop() > 700
            }, e.prototype._showIfScrollingUp = function() {
                var e;
                return e = $(window).scrollTop(), e >= this.lastScrollTop ? this.applicationHeader.removeClass("show").addClass("hide") : this.applicationHeader.removeClass("hide").addClass("show"), this.lastScrollTop = e
            }, e.prototype._handleMobileIconClick = function(e) {
                return e.preventDefault(), this.applicationHeader.toggleClass("mobile-menu")
            }, e.prototype._handleNavLinkClick = function() {
                return this.applicationHeader.removeClass("mobile-menu")
            }, e
        }())
    }.call(this), $(document).ready(function() {
        $(".nav-bar").click(function() {
            $(this).toggleClass("active")
        })
    });
