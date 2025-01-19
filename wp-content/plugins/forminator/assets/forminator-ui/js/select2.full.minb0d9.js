function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ,
    _typeof(e)
    /*!
 * Select2 4.1.0-rc.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 *
 * Modified logic/function,etc besides formatting should be marked with //FUI-SELECT2
 * For easy debugging process or update upstream of select
 */
}
!function(e) {
    e(jQuery)
}((function(e) {
    var t = function() {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
            var t = e.fn.select2.amd;
        return function() {
            /**
         * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
         * Released under MIT license, http://github.com/requirejs/almond/LICENSE
         */
            var e, n, i;
            t && t.requirejs || (t ? n = t : t = {},
            function(t) {
                var r, s, o, a, l = {}, c = {}, u = {}, d = {}, p = Object.prototype.hasOwnProperty, h = [].slice, f = /\.js$/;
                function g(e, t) {
                    return p.call(e, t)
                }
                function m(e, t) {
                    var n, i, r, s, o, a, l, c, d, p, h, g = t && t.split("/"), m = u.map, v = m && m["*"] || {};
                    if (e) {
                        for (o = (e = e.split("/")).length - 1,
                        u.nodeIdCompat && f.test(e[o]) && (e[o] = e[o].replace(f, "")),
                        "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)),
                        d = 0; d < e.length; d++)
                            if ("." === (h = e[d]))
                                e.splice(d, 1),
                                d -= 1;
                            else if (".." === h) {
                                if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1])
                                    continue;
                                d > 0 && (e.splice(d - 1, 2),
                                d -= 2)
                            }
                        e = e.join("/")
                    }
                    if ((g || v) && m) {
                        for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                            if (i = n.slice(0, d).join("/"),
                            g)
                                for (p = g.length; p > 0; p -= 1)
                                    if ((r = m[g.slice(0, p).join("/")]) && (r = r[i])) {
                                        s = r,
                                        a = d;
                                        break
                                    }
                            if (s)
                                break;
                            !l && v && v[i] && (l = v[i],
                            c = d)
                        }
                        !s && l && (s = l,
                        a = c),
                        s && (n.splice(0, a, s),
                        e = n.join("/"))
                    }
                    return e
                }
                function v(e, n) {
                    return function() {
                        var i = h.call(arguments, 0);
                        return "string" != typeof i[0] && 1 === i.length && i.push(null),
                        s.apply(t, i.concat([e, n]))
                    }
                }
                function y(e) {
                    return function(t) {
                        l[e] = t
                    }
                }
                function _(e) {
                    if (g(c, e)) {
                        var n = c[e];
                        delete c[e],
                        d[e] = !0,
                        r.apply(t, n)
                    }
                    if (!g(l, e) && !g(d, e))
                        throw new Error("No " + e);
                    return l[e]
                }
                function b(e) {
                    var t, n = e ? e.indexOf("!") : -1;
                    return n > -1 && (t = e.substring(0, n),
                    e = e.substring(n + 1, e.length)),
                    [t, e]
                }
                function $(e) {
                    return e ? b(e) : []
                }
                function w(e) {
                    return function() {
                        return u && u.config && u.config[e] || {}
                    }
                }
                o = function(e, t) {
                    var n, i, r = b(e), s = r[0], o = t[1];
                    return e = r[1],
                    s && (n = _(s = m(s, o))),
                    s ? e = n && n.normalize ? n.normalize(e, (i = o,
                    function(e) {
                        return m(e, i)
                    }
                    )) : m(e, o) : (s = (r = b(e = m(e, o)))[0],
                    e = r[1],
                    s && (n = _(s))),
                    {
                        f: s ? s + "!" + e : e,
                        n: e,
                        pr: s,
                        p: n
                    }
                }
                ,
                a = {
                    require: function(e) {
                        return v(e)
                    },
                    exports: function(e) {
                        var t = l[e];
                        return void 0 !== t ? t : l[e] = {}
                    },
                    module: function(e) {
                        return {
                            id: e,
                            uri: "",
                            exports: l[e],
                            config: w(e)
                        }
                    }
                },
                r = function(e, n, i, r) {
                    var s, u, p, h, f, m, b, w = [], x = _typeof(i);
                    if (m = $(r = r || e),
                    "undefined" === x || "function" === x) {
                        for (n = !n.length && i.length ? ["require", "exports", "module"] : n,
                        f = 0; f < n.length; f += 1)
                            if ("require" === (u = (h = o(n[f], m)).f))
                                w[f] = a.require(e);
                            else if ("exports" === u)
                                w[f] = a.exports(e),
                                b = !0;
                            else if ("module" === u)
                                s = w[f] = a.module(e);
                            else if (g(l, u) || g(c, u) || g(d, u))
                                w[f] = _(u);
                            else {
                                if (!h.p)
                                    throw new Error(e + " missing " + u);
                                h.p.load(h.n, v(r, !0), y(u), {}),
                                w[f] = l[u]
                            }
                        p = i ? i.apply(l[e], w) : void 0,
                        e && (s && s.exports !== t && s.exports !== l[e] ? l[e] = s.exports : p === t && b || (l[e] = p))
                    } else
                        e && (l[e] = i)
                }
                ,
                e = n = s = function(e, n, i, l, c) {
                    if ("string" == typeof e)
                        return a[e] ? a[e](n) : _(o(e, $(n)).f);
                    if (!e.splice) {
                        if ((u = e).deps && s(u.deps, u.callback),
                        !n)
                            return;
                        n.splice ? (e = n,
                        n = i,
                        i = null) : e = t
                    }
                    return n = n || function() {}
                    ,
                    "function" == typeof i && (i = l,
                    l = c),
                    l ? r(t, e, n, i) : setTimeout((function() {
                        r(t, e, n, i)
                    }
                    ), 4),
                    s
                }
                ,
                s.config = function(e) {
                    return s(e)
                }
                ,
                e._defined = l,
                (i = function(e, t, n) {
                    if ("string" != typeof e)
                        throw new Error("See almond README: incorrect module build, no module name");
                    t.splice || (n = t,
                    t = []),
                    g(l, e) || g(c, e) || (c[e] = [e, t, n])
                }
                ).amd = {
                    jQuery: !0
                }
            }(),
            t.requirejs = e,
            t.require = n,
            t.define = i)
        }(),
        t.define("almond", (function() {}
        )),
        t.define("jquery", [], (function() {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            t
        }
        )),
        t.define("select2/utils", ["jquery"], (function(e) {
            var t = {};
            function n(e) {
                var t = e.prototype
                  , n = [];
                for (var i in t) {
                    "function" == typeof t[i] && ("constructor" !== i && n.push(i))
                }
                return n
            }
            t.Extend = function(e, t) {
                var n = {}.hasOwnProperty;
                function i() {
                    this.constructor = e
                }
                for (var r in t)
                    n.call(t, r) && (e[r] = t[r]);
                return i.prototype = t.prototype,
                e.prototype = new i,
                e.__super__ = t.prototype,
                e
            }
            ,
            t.Decorate = function(e, t) {
                var i = n(t)
                  , r = n(e);
                function s() {
                    var n = Array.prototype.unshift
                      , i = t.prototype.constructor.length
                      , r = e.prototype.constructor;
                    i > 0 && (n.call(arguments, e.prototype.constructor),
                    r = t.prototype.constructor),
                    r.apply(this, arguments)
                }
                t.displayName = e.displayName,
                s.prototype = new function() {
                    this.constructor = s
                }
                ;
                for (var o = 0; o < r.length; o++) {
                    var a = r[o];
                    s.prototype[a] = e.prototype[a]
                }
                for (var l = function(e) {
                    var n = function() {};
                    e in s.prototype && (n = s.prototype[e]);
                    var i = t.prototype[e];
                    return function() {
                        return Array.prototype.unshift.call(arguments, n),
                        i.apply(this, arguments)
                    }
                }, c = 0; c < i.length; c++) {
                    var u = i[c];
                    s.prototype[u] = l(u)
                }
                return s
            }
            ;
            var i = function() {
                this.listeners = {}
            };
            i.prototype.on = function(e, t) {
                this.listeners = this.listeners || {},
                e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }
            ,
            i.prototype.trigger = function(e) {
                var t = Array.prototype.slice
                  , n = t.call(arguments, 1);
                this.listeners = this.listeners || {},
                null == n && (n = []),
                0 === n.length && n.push({}),
                n[0]._type = e,
                e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }
            ,
            i.prototype.invoke = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    e[n].apply(this, t)
            }
            ,
            t.Observable = i,
            t.generateChars = function(e) {
                for (var t = "", n = 0; n < e; n++) {
                    t += Math.floor(36 * Math.random()).toString(36)
                }
                return t
            }
            ,
            t.bind = function(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            ,
            t._convertData = function(e) {
                for (var t in e) {
                    var n = t.split("-")
                      , i = e;
                    if (1 !== n.length) {
                        for (var r = 0; r < n.length; r++) {
                            var s = n[r];
                            (s = s.substring(0, 1).toLowerCase() + s.substring(1))in i || (i[s] = {}),
                            r == n.length - 1 && (i[s] = e[t]),
                            i = i[s]
                        }
                        delete e[t]
                    }
                }
                return e
            }
            ,
            t.hasScroll = function(t, n) {
                var i = e(n)
                  , r = n.style.overflowX
                  , s = n.style.overflowY;
                return (r !== s || "hidden" !== s && "visible" !== s) && ("scroll" === r || "scroll" === s || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
            }
            ,
            t.escapeMarkup = function(e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                    return t[e]
                }
                ))
            }
            ,
            t.__cache = {};
            var r = 0;
            return t.GetUniqueElementId = function(e) {
                var n = e.getAttribute("data-select2-id");
                return null != n || (n = e.id ? "select2-data-" + e.id : "select2-data-" + (++r).toString() + "-" + t.generateChars(4),
                e.setAttribute("data-select2-id", n)),
                n
            }
            ,
            t.StoreData = function(e, n, i) {
                var r = t.GetUniqueElementId(e);
                t.__cache[r] || (t.__cache[r] = {}),
                t.__cache[r][n] = i
            }
            ,
            t.GetData = function(n, i) {
                var r = t.GetUniqueElementId(n);
                return i ? t.__cache[r] && null != t.__cache[r][i] ? t.__cache[r][i] : e(n).data(i) : t.__cache[r]
            }
            ,
            t.RemoveData = function(e) {
                var n = t.GetUniqueElementId(e);
                null != t.__cache[n] && delete t.__cache[n],
                e.removeAttribute("data-select2-id")
            }
            ,
            t.copyNonInternalCssClasses = function(e, t) {
                var n = e.getAttribute("class").trim().split(/\s+/);
                n = n.filter((function(e) {
                    return 0 === e.indexOf("select2-")
                }
                ));
                var i = t.getAttribute("class").trim().split(/\s+/);
                i = i.filter((function(e) {
                    return 0 !== e.indexOf("select2-")
                }
                ));
                var r = n.concat(i);
                e.setAttribute("class", r.join(" "))
            }
            ,
            t
        }
        )),
        t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
            function n(e, t, i) {
                this.$element = e,
                this.data = i,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                this.$results = t,
                t
            }
            ,
            n.prototype.clear = function() {
                this.$results.empty()
            }
            ,
            n.prototype.displayMessage = function(t) {
                var n = this.options.get("escapeMarkup");
                this.clear(),
                this.hideLoading();
                var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>')
                  , r = this.options.get("translations").get(t.message);
                i.append(n(r(t.args))),
                i[0].className += " select2-results__message",
                this.$results.append(i)
            }
            ,
            n.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }
            ,
            n.prototype.append = function(e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var i = e.results[n]
                          , r = this.option(i);
                        t.push(r)
                    }
                    this.$results.append(t)
                } else
                    0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
            }
            ,
            n.prototype.position = function(e, t) {
                t.find(".select2-results").append(e)
            }
            ,
            n.prototype.sort = function(e) {
                return this.options.get("sorter")(e)
            }
            ,
            n.prototype.highlightFirstItem = function() {
                var e = this.$results.find(".select2-results__option--selectable")
                  , t = e.filter(".select2-results__option--selected");
                t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"),
                this.ensureHighlightVisible()
            }
            ,
            n.prototype.setClasses = function() {
                var n = this;
                this.data.current((function(i) {
                    var r = i.map((function(e) {
                        return e.id.toString()
                    }
                    ));
                    n.$results.find(".select2-results__option--selectable").each((function() {
                        var n = e(this)
                          , i = t.GetData(this, "data")
                          , s = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && r.indexOf(s) > -1 ? (this.classList.add("select2-results__option--selected"),
                        n.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"),
                        n.attr("aria-selected", "false"))
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.showLoading = function(e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e)
                }
                  , n = this.option(t);
                n.className += " loading-results",
                this.$results.prepend(n)
            }
            ,
            n.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }
            ,
            n.prototype.option = function(n) {
                var i = document.createElement("li");
                i.classList.add("select2-results__option"),
                i.classList.add("select2-results__option--selectable");
                var r = {
                    role: "option"
                }
                  , s = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                for (var o in (null != n.element && s.call(n.element, ":disabled") || null == n.element && n.disabled) && (r["aria-disabled"] = "true",
                i.classList.remove("select2-results__option--selectable"),
                i.classList.add("select2-results__option--disabled")),
                null == n.id && i.classList.remove("select2-results__option--selectable"),
                null != n._resultId && (i.id = n._resultId),
                n.title && (i.title = n.title),
                n.children && (r.role = "group",
                r["aria-label"] = n.text,
                i.classList.remove("select2-results__option--selectable"),
                i.classList.add("select2-results__option--group")),
                r) {
                    var a = r[o];
                    i.setAttribute(o, a)
                }
                if (n.children) {
                    var l = e(i)
                      , c = document.createElement("strong");
                    c.className = "select2-results__group",
                    this.template(n, c);
                    for (var u = [], d = 0; d < n.children.length; d++) {
                        var p = n.children[d]
                          , h = this.option(p);
                        u.push(h)
                    }
                    var f = e("<ul></ul>", {
                        class: "select2-results__options select2-results__options--nested",
                        role: "none"
                    });
                    f.append(u),
                    l.append(c),
                    l.append(f)
                } else
                    this.template(n, i);
                return t.StoreData(i, "data", n),
                i
            }
            ,
            n.prototype.bind = function(n, i) {
                var r = this
                  , s = n.id + "-results";
                this.$results.attr("id", s),
                n.on("results:all", (function(e) {
                    r.clear(),
                    r.append(e.data),
                    n.isOpen() && (r.setClasses(),
                    r.highlightFirstItem())
                }
                )),
                n.on("results:append", (function(e) {
                    r.append(e.data),
                    n.isOpen() && r.setClasses()
                }
                )),
                n.on("query", (function(e) {
                    r.hideMessages(),
                    r.showLoading(e)
                }
                )),
                n.on("select", (function() {
                    n.isOpen() && (r.setClasses(),
                    r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                }
                )),
                n.on("unselect", (function() {
                    n.isOpen() && (r.setClasses(),
                    r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                }
                )),
                n.on("open", (function() {
                    r.$results.attr("aria-expanded", "true"),
                    r.$results.attr("aria-hidden", "false"),
                    r.setClasses(),
                    r.ensureHighlightVisible()
                }
                )),
                n.on("close", (function() {
                    r.$results.attr("aria-expanded", "false"),
                    r.$results.attr("aria-hidden", "true"),
                    r.$results.removeAttr("aria-activedescendant")
                }
                )),
                n.on("results:toggle", (function() {
                    var e = r.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }
                )),
                n.on("results:select", (function() {
                    var e = r.getHighlightedResults();
                    if (0 !== e.length) {
                        var n = t.GetData(e[0], "data");
                        e.hasClass("select2-results__option--selected") ? r.trigger("close", {}) : r.trigger("select", {
                            data: n
                        })
                    }
                }
                )),
                n.on("results:previous", (function() {
                    var e = r.getHighlightedResults()
                      , t = r.$results.find(".select2-results__option--selectable")
                      , n = t.index(e);
                    if (!(n <= 0)) {
                        var i = n - 1;
                        0 === e.length && (i = 0);
                        var s = t.eq(i);
                        s.trigger("mouseenter");
                        var o = r.$results.offset().top
                          , a = s.offset().top
                          , l = r.$results.scrollTop() + (a - o);
                        0 === i ? r.$results.scrollTop(0) : a - o < 0 && r.$results.scrollTop(l)
                    }
                }
                )),
                n.on("results:next", (function() {
                    var e = r.getHighlightedResults()
                      , t = r.$results.find(".select2-results__option--selectable")
                      , n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                        var i = t.eq(n);
                        i.trigger("mouseenter");
                        var s = r.$results.offset().top + r.$results.outerHeight(!1)
                          , o = i.offset().top + i.outerHeight(!1)
                          , a = r.$results.scrollTop() + o - s;
                        0 === n ? r.$results.scrollTop(0) : o > s && r.$results.scrollTop(a)
                    }
                }
                )),
                n.on("results:focus", (function(e) {
                    e.element[0].classList.add("select2-results__option--highlighted"),
                    e.element[0].setAttribute("aria-selected", "true")
                }
                )),
                n.on("results:message", (function(e) {
                    r.displayMessage(e)
                }
                )),
                e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                    var t = r.$results.scrollTop()
                      , n = r.$results.get(0).scrollHeight - t + e.deltaY
                      , i = e.deltaY > 0 && t - e.deltaY <= 0
                      , s = e.deltaY < 0 && n <= r.$results.height();
                    i ? (r.$results.scrollTop(0),
                    e.preventDefault(),
                    e.stopPropagation()) : s && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()),
                    e.preventDefault(),
                    e.stopPropagation())
                }
                )),
                this.$results.on("mouseup", ".select2-results__option--selectable", (function(n) {
                    var i = e(this)
                      , s = t.GetData(this, "data");
                    i.hasClass("select2-results__option--selected") ? r.options.get("multiple") ? r.trigger("unselect", {
                        originalEvent: n,
                        data: s
                    }) : r.trigger("close", {}) : r.trigger("select", {
                        originalEvent: n,
                        data: s
                    })
                }
                )),
                this.$results.on("mouseenter", ".select2-results__option--selectable", (function(n) {
                    var i = t.GetData(this, "data");
                    r.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"),
                    r.trigger("results:focus", {
                        data: i,
                        element: e(this)
                    })
                }
                ))
            }
            ,
            n.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted")
            }
            ,
            n.prototype.destroy = function() {
                this.$results.remove()
            }
            ,
            n.prototype.ensureHighlightVisible = function() {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find(".select2-results__option--selectable").index(e)
                      , n = this.$results.offset().top
                      , i = e.offset().top
                      , r = this.$results.scrollTop() + (i - n)
                      , s = i - n;
                    r -= 2 * e.outerHeight(!1),
                    t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r)
                }
            }
            ,
            n.prototype.template = function(t, n) {
                var i = this.options.get("templateResult")
                  , r = this.options.get("escapeMarkup")
                  , s = i(t, n);
                null == s ? n.style.display = "none" : "string" == typeof s ? n.innerHTML = r(s) : e(n).append(s)
            }
            ,
            n
        }
        )),
        t.define("select2/keys", [], (function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }
        )),
        t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, n) {
            function i(e, t) {
                this.$element = e,
                this.options = t,
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                this._tabindex = 0,
                null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                n.attr("title", this.$element.attr("title")),
                n.attr("tabindex", this._tabindex),
                n.attr("aria-disabled", "false");
                var i = this.$element.attr("aria-describedby");
                return null !== i && "" !== i && n.attr("aria-describedby", i),
                this.$selection = n,
                n
            }
            ,
            i.prototype.bind = function(e, t) {
                var i = this
                  , r = e.id + "-results";
                this.container = e,
                this.$selection.on("focus", (function(e) {
                    i.trigger("focus", e)
                }
                )),
                this.$selection.on("blur", (function(e) {
                    i._handleBlur(e)
                }
                )),
                this.$selection.on("keydown", (function(e) {
                    i.trigger("keypress", e),
                    e.which === n.SPACE && e.preventDefault()
                }
                )),
                e.on("results:focus", (function(e) {
                    i.$selection.attr("aria-activedescendant", e.data._resultId)
                }
                )),
                e.on("selection:update", (function(e) {
                    i.update(e.data)
                }
                )),
                e.on("open", (function() {
                    i.$selection.attr("aria-expanded", "true"),
                    i.$selection.attr("aria-owns", r),
                    i._attachCloseHandler(e)
                }
                )),
                e.on("close", (function() {
                    i.$selection.attr("aria-expanded", "false"),
                    i.$selection.removeAttr("aria-activedescendant"),
                    i.$selection.removeAttr("aria-owns"),
                    i.$selection.trigger("focus"),
                    i._detachCloseHandler(e)
                }
                )),
                e.on("enable", (function() {
                    i.$selection.attr("tabindex", i._tabindex),
                    i.$selection.attr("aria-disabled", "false")
                }
                )),
                e.on("disable", (function() {
                    i.$selection.attr("tabindex", "-1"),
                    i.$selection.attr("aria-disabled", "true")
                }
                ))
            }
            ,
            i.prototype._handleBlur = function(t) {
                var n = this;
                window.setTimeout((function() {
                    document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                }
                ), 1)
            }
            ,
            i.prototype._attachCloseHandler = function(n) {
                e(document.body).on("mousedown.select2." + n.id, (function(n) {
                    var i = e(n.target).closest(".select2");
                    e(".select2.select2-container--open").each((function() {
                        this != i[0] && t.GetData(this, "element").FUIselect2("close")
                    }
                    ))
                }
                ))
            }
            ,
            i.prototype._detachCloseHandler = function(t) {
                e(document.body).off("mousedown.select2." + t.id)
            }
            ,
            i.prototype.position = function(e, t) {
                t.find(".selection").append(e)
            }
            ,
            i.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }
            ,
            i.prototype.update = function(e) {
                throw new Error("The `update` method must be defined in child classes.")
            }
            ,
            i.prototype.isEnabled = function() {
                return !this.isDisabled()
            }
            ,
            i.prototype.isDisabled = function() {
                return this.options.get("disabled")
            }
            ,
            i
        }
        )),
        t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, n, i) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(r, t),
            r.prototype.render = function() {
                var e = r.__super__.render.call(this);
                return e[0].classList.add("select2-selection--single"),
                e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><span class="forminator-icon-chevron-down" aria-hidden="true"></span></span>'),
                e
            }
            ,
            r.prototype.bind = function(e, t) {
                var n = this;
                r.__super__.bind.apply(this, arguments);
                var i = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"),
                this.$selection.attr("aria-labelledby", i),
                this.$selection.attr("aria-controls", i),
                this.$selection.on("mousedown", (function(e) {
                    1 === e.which && n.trigger("toggle", {
                        originalEvent: e
                    })
                }
                )),
                this.$selection.on("focus", (function(e) {}
                )),
                this.$selection.on("blur", (function(e) {}
                )),
                e.on("focus", (function(t) {
                    e.isOpen() || n.$selection.trigger("focus")
                }
                ))
            }
            ,
            r.prototype.clear = function() {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(),
                e.removeAttr("title")
            }
            ,
            r.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }
            ,
            r.prototype.selectionContainer = function() {
                return e("<span></span>")
            }
            ,
            r.prototype.update = function(e) {
                if (0 === e.length)
                    return this.clear(),
                    void ("vars" === this.options.get("theme") && this.$selection.find(".select2-selection__rendered").html('<span class="forminator-icon-plus-circle" aria-hidden="true"></span>'));
                var t = e[0]
                  , n = this.$selection.find(".select2-selection__rendered")
                  , i = this.display(t, n);
                n.empty().append(i);
                var r = t.title || t.text;
                r ? n.attr("title", r) : n.removeAttr("title")
            }
            ,
            r
        }
        )),
        t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, n) {
            function i(e, t) {
                i.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(i, t),
            i.prototype.render = function() {
                var e = i.__super__.render.call(this);
                return e[0].classList.add("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul><span class="select2-selection__arrow" role="presentation"><span class="forminator-icon-chevron-down" aria-hidden="true"></span></span>'),
                e
            }
            ,
            i.prototype.bind = function(t, r) {
                var s = this;
                i.__super__.bind.apply(this, arguments);
                var o = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", o),
                this.$selection.on("click", (function(e) {
                    s.trigger("toggle", {
                        originalEvent: e
                    })
                }
                )),
                this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                    if (!s.isDisabled()) {
                        var i = e(this).parent()
                          , r = n.GetData(i[0], "data");
                        s.trigger("unselect", {
                            originalEvent: t,
                            data: r
                        })
                    }
                }
                )),
                this.$selection.on("keydown", ".select2-selection__choice__remove", (function(e) {
                    s.isDisabled() || e.stopPropagation()
                }
                ))
            }
            ,
            i.prototype.clear = function() {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(),
                e.removeAttr("title"),
                e.removeClass("forminator-select2-selections")
            }
            ,
            i.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }
            ,
            i.prototype.selectionContainer = function() {
                return e('<li class="select2-selection__choice"><span class="select2-selection__choice__display"></span><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button></li>')
            }
            ,
            i.prototype.update = function(e) {
                var t = e.length;
                if (this.clear(),
                0 !== t) {
                    for (var i = [], r = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", s = 0; s < t; s++) {
                        var o = e[s]
                          , a = this.selectionContainer()
                          , l = this.display(o, a)
                          , c = r + n.generateChars(4) + "-";
                        o.id ? c += o.id : c += n.generateChars(4),
                        a.find(".select2-selection__choice__display").append(l).attr("id", c);
                        var u = o.title || o.text;
                        u && a.attr("title", u);
                        var d = this.options.get("translations").get("removeItem")
                          , p = a.find(".select2-selection__choice__remove");
                        p.attr("title", d()),
                        p.attr("aria-label", d()),
                        p.attr("aria-describedby", c),
                        n.StoreData(a[0], "data", o),
                        i.push(a)
                    }
                    var h = this.$selection.find(".select2-selection__rendered");
                    h.addClass("forminator-select2-selections"),
                    h.append(i)
                }
            }
            ,
            i
        }
        )),
        t.define("select2/selection/placeholder", [], (function() {
            function e(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                e.call(this, t, n)
            }
            return e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            e.prototype.createPlaceholder = function(e, t) {
                var n = this.selectionContainer();
                n.html(this.display(t)),
                n[0].classList.add("select2-selection__placeholder"),
                n[0].classList.remove("select2-selection__choice");
                var i = t.title || t.text || n.text();
                return this.$selection.find(".select2-selection__rendered").attr("title", i),
                n
            }
            ,
            e.prototype.update = function(e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || n)
                    return e.call(this, t);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i)
            }
            ,
            e
        }
        )),
        t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, n) {
            function i() {}
            return i.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                    i._handleClear(e)
                }
                )),
                t.on("keypress", (function(e) {
                    i._handleKeyboardClear(e, t)
                }
                ))
            }
            ,
            i.prototype._handleClear = function(e, t) {
                if (!this.isDisabled()) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        t.stopPropagation();
                        var r = n.GetData(i[0], "data")
                          , s = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var o = {
                            data: r
                        };
                        if (this.trigger("clear", o),
                        o.prevented)
                            this.$element.val(s);
                        else {
                            for (var a = r.length, l = 0; l < a; l++)
                                if (o = {
                                    data: r[l]
                                },
                                this.trigger("unselect", o),
                                o.prevented)
                                    return void this.$element.val(s);
                            this.$element.trigger("input").trigger("change"),
                            this.trigger("toggle", {})
                        }
                    }
                }
            }
            ,
            i.prototype._handleKeyboardClear = function(e, n, i) {
                i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
            }
            ,
            i.prototype.update = function(t, i) {
                if (t.call(this, i),
                this.$selection.find(".select2-selection__clear").remove(),
                this.$selection[0].classList.remove("select2-selection--clearable"),
                !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                    var r = this.$selection.find(".select2-selection__rendered").attr("id")
                      , s = this.options.get("translations").get("removeAllItems")
                      , o = e('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
                    o.attr("title", s()),
                    o.attr("aria-label", s()),
                    o.attr("aria-describedby", r),
                    n.StoreData(o[0], "data", i),
                    this.$selection.prepend(o),
                    this.$selection[0].classList.add("select2-selection--clearable")
                }
            }
            ,
            i
        }
        )),
        t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, n) {
            function i(e, t, n) {
                e.call(this, t, n)
            }
            return i.prototype.render = function(t) {
                var n = this.options.get("translations").get("search")
                  , i = e('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');
                this.$searchContainer = i,
                this.$search = i.find("textarea"),
                this.$search.prop("autocomplete", this.options.get("autocomplete")),
                this.$search.attr("aria-label", n());
                var r = t.call(this);
                return this._transferTabIndex(),
                r.append(this.$searchContainer),
                r
            }
            ,
            i.prototype.bind = function(e, i, r) {
                var s = this
                  , o = i.id + "-results"
                  , a = i.id + "-container";
                e.call(this, i, r),
                s.$search.attr("aria-describedby", a),
                i.on("open", (function() {
                    s.$search.attr("aria-controls", o),
                    s.$search.trigger("focus")
                }
                )),
                i.on("close", (function() {
                    s.$search.val(""),
                    s.resizeSearch(),
                    s.$search.removeAttr("aria-controls"),
                    s.$search.removeAttr("aria-activedescendant"),
                    s.$search.trigger("focus")
                }
                )),
                i.on("enable", (function() {
                    s.$search.prop("disabled", !1),
                    s._transferTabIndex()
                }
                )),
                i.on("disable", (function() {
                    s.$search.prop("disabled", !0)
                }
                )),
                i.on("focus", (function(e) {
                    s.$search.trigger("focus")
                }
                )),
                i.on("results:focus", (function(e) {
                    e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant")
                }
                )),
                this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                    s.trigger("focus", e)
                }
                )),
                this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                    s._handleBlur(e)
                }
                )),
                this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                    if (e.stopPropagation(),
                    s.trigger("keypress", e),
                    s._keyUpPrevented = e.isDefaultPrevented(),
                    e.which === n.BACKSPACE && "" === s.$search.val()) {
                        var i = s.$selection.find(".select2-selection__choice").last();
                        if (i.length > 0) {
                            var r = t.GetData(i[0], "data");
                            s.searchRemoveChoice(r),
                            e.preventDefault()
                        }
                    }
                }
                )),
                this.$selection.on("click", ".select2-search--inline", (function(e) {
                    s.$search.val() && e.stopPropagation()
                }
                ));
                var l = document.documentMode
                  , c = l && l <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                    c ? s.$selection.off("input.search input.searchcheck") : s.$selection.off("keyup.search")
                }
                )),
                this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                    if (c && "input" === e.type)
                        s.$selection.off("input.search input.searchcheck");
                    else {
                        var t = e.which;
                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && s.handleSearch(e)
                    }
                }
                ))
            }
            ,
            i.prototype._transferTabIndex = function(e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1")
            }
            ,
            i.prototype.createPlaceholder = function(e, t) {
                this.$search.attr("placeholder", t.text)
            }
            ,
            i.prototype.update = function(e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.resizeSearch(),
                n && this.$search.trigger("focus")
            }
            ,
            i.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            i.prototype.searchRemoveChoice = function(e, t) {
                this.trigger("unselect", {
                    data: t
                }),
                this.$search.val(t.text),
                this.handleSearch()
            }
            ,
            i.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var e = "100%";
                "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em");
                this.$search.css("width", e)
            }
            ,
            i
        }
        )),
        t.define("select2/selection/selectionCss", ["../utils"], (function(e) {
            function t() {}
            return t.prototype.render = function(t) {
                var n = t.call(this)
                  , i = this.options.get("selectionCssClass") || "";
                return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""),
                e.copyNonInternalCssClasses(n[0], this.$element[0])),
                n.addClass(i),
                n
            }
            ,
            t
        }
        )),
        t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
            function t() {}
            return t.prototype.bind = function(t, n, i) {
                var r = this
                  , s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
                  , o = ["opening", "closing", "selecting", "unselecting", "clearing"];
                t.call(this, n, i),
                n.on("*", (function(t, n) {
                    if (-1 !== s.indexOf(t)) {
                        n = n || {};
                        var i = e.Event("select2:" + t, {
                            params: n
                        });
                        r.$element.trigger(i),
                        -1 !== o.indexOf(t) && (n.prevented = i.isDefaultPrevented())
                    }
                }
                ))
            }
            ,
            t
        }
        )),
        t.define("select2/translation", ["jquery", "require"], (function(e, t) {
            function n(e) {
                this.dict = e || {}
            }
            return n.prototype.all = function() {
                return this.dict
            }
            ,
            n.prototype.get = function(e) {
                return this.dict[e]
            }
            ,
            n.prototype.extend = function(t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }
            ,
            n._cache = {},
            n.loadPath = function(e) {
                if (!(e in n._cache)) {
                    var i = t(e);
                    n._cache[e] = i
                }
                return new n(n._cache[e])
            }
            ,
            n
        }
        )),
        t.define("select2/diacritics", [], (function() {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Œ": "OE",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "œ": "oe",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ώ": "ω",
                "ς": "σ",
                "’": "'"
            }
        }
        )),
        t.define("select2/data/base", ["../utils"], (function(e) {
            function t(e, n) {
                t.__super__.constructor.call(this)
            }
            return e.Extend(t, e.Observable),
            t.prototype.current = function(e) {
                throw new Error("The `current` method must be defined in child classes.")
            }
            ,
            t.prototype.query = function(e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }
            ,
            t.prototype.bind = function(e, t) {}
            ,
            t.prototype.destroy = function() {}
            ,
            t.prototype.generateResultId = function(t, n) {
                var i = t.id + "-result-";
                return i += e.generateChars(4),
                null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4),
                i
            }
            ,
            t
        }
        )),
        t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, n) {
            function i(e, t) {
                this.$element = e,
                this.options = t,
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, e),
            i.prototype.current = function(e) {
                var t = this;
                e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), (function(e) {
                    return t.item(n(e))
                }
                )))
            }
            ,
            i.prototype.select = function(e) {
                var t = this;
                if (e.selected = !0,
                null != e.element && "option" === e.element.tagName.toLowerCase())
                    return e.element.selected = !0,
                    void this.$element.trigger("input").trigger("change");
                if (this.$element.prop("multiple"))
                    this.current((function(n) {
                        var i = [];
                        (e = [e]).push.apply(e, n);
                        for (var r = 0; r < e.length; r++) {
                            var s = e[r].id;
                            -1 === i.indexOf(s) && i.push(s)
                        }
                        t.$element.val(i),
                        t.$element.trigger("input").trigger("change")
                    }
                    ));
                else {
                    var n = e.id;
                    this.$element.val(n),
                    this.$element.trigger("input").trigger("change")
                }
            }
            ,
            i.prototype.unselect = function(e) {
                var t = this;
                if (this.$element.prop("multiple")) {
                    if (e.selected = !1,
                    null != e.element && "option" === e.element.tagName.toLowerCase())
                        return e.element.selected = !1,
                        void this.$element.trigger("input").trigger("change");
                    this.current((function(n) {
                        for (var i = [], r = 0; r < n.length; r++) {
                            var s = n[r].id;
                            s !== e.id && -1 === i.indexOf(s) && i.push(s)
                        }
                        t.$element.val(i),
                        t.$element.trigger("input").trigger("change")
                    }
                    ))
                }
            }
            ,
            i.prototype.bind = function(e, t) {
                var n = this;
                this.container = e,
                e.on("select", (function(e) {
                    n.select(e.data)
                }
                )),
                e.on("unselect", (function(e) {
                    n.unselect(e.data)
                }
                ))
            }
            ,
            i.prototype.destroy = function() {
                this.$element.find("*").each((function() {
                    t.RemoveData(this)
                }
                ))
            }
            ,
            i.prototype.query = function(e, t) {
                var i = []
                  , r = this;
                this.$element.children().each((function() {
                    if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
                        var t = n(this)
                          , s = r.item(t)
                          , o = r.matches(e, s);
                        null !== o && i.push(o)
                    }
                }
                )),
                t({
                    results: i
                })
            }
            ,
            i.prototype.addOptions = function(e) {
                this.$element.append(e)
            }
            ,
            i.prototype.option = function(e) {
                var i;
                e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text,
                void 0 !== e.id && (i.value = e.id),
                e.disabled && (i.disabled = !0),
                e.selected && (i.selected = !0),
                e.title && (i.title = e.title);
                var r = this._normalizeItem(e);
                return r.element = i,
                t.StoreData(i, "data", r),
                n(i)
            }
            ,
            i.prototype.item = function(e) {
                var i = {};
                if (null != (i = t.GetData(e[0], "data")))
                    return i;
                var r = e[0];
                if ("option" === r.tagName.toLowerCase())
                    i = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                else if ("optgroup" === r.tagName.toLowerCase()) {
                    i = {
                        text: e.prop("label"),
                        children: [],
                        title: e.prop("title")
                    };
                    for (var s = e.children("option"), o = [], a = 0; a < s.length; a++) {
                        var l = n(s[a])
                          , c = this.item(l);
                        o.push(c)
                    }
                    i.children = o
                }
                return (i = this._normalizeItem(i)).element = e[0],
                t.StoreData(e[0], "data", i),
                i
            }
            ,
            i.prototype._normalizeItem = function(e) {
                e !== Object(e) && (e = {
                    id: e,
                    text: e
                });
                return null != (e = n.extend({}, {
                    text: ""
                }, e)).id && (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                n.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e)
            }
            ,
            i.prototype.matches = function(e, t) {
                return this.options.get("matcher")(e, t)
            }
            ,
            i
        }
        )),
        t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, n) {
            function i(e, t) {
                this._dataToConvert = t.get("data") || [],
                i.__super__.constructor.call(this, e, t)
            }
            return t.Extend(i, e),
            i.prototype.bind = function(e, t) {
                i.__super__.bind.call(this, e, t),
                this.addOptions(this.convertToOptions(this._dataToConvert))
            }
            ,
            i.prototype.select = function(e) {
                var t = this.$element.find("option").filter((function(t, n) {
                    return n.value == e.id.toString()
                }
                ));
                0 === t.length && (t = this.option(e),
                this.addOptions(t)),
                i.__super__.select.call(this, e)
            }
            ,
            i.prototype.convertToOptions = function(e) {
                var t = this
                  , i = this.$element.find("option")
                  , r = i.map((function() {
                    return t.item(n(this)).id
                }
                )).get()
                  , s = [];
                function o(e) {
                    return function() {
                        return n(this).val() == e.id
                    }
                }
                for (var a = 0; a < e.length; a++) {
                    var l = this._normalizeItem(e[a]);
                    if (r.indexOf(l.id) >= 0) {
                        var c = i.filter(o(l))
                          , u = this.item(c)
                          , d = n.extend(!0, {}, l, u)
                          , p = this.option(d);
                        c.replaceWith(p)
                    } else {
                        var h = this.option(l);
                        if (l.children) {
                            var f = this.convertToOptions(l.children);
                            h.append(f)
                        }
                        s.push(h)
                    }
                }
                return s
            }
            ,
            i
        }
        )),
        t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, n) {
            function i(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")),
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                i.__super__.constructor.call(this, e, t)
            }
            return t.Extend(i, e),
            i.prototype._applyDefaults = function(e) {
                var t = {
                    data: function(e) {
                        return n.extend({}, e, {
                            q: e.term
                        })
                    },
                    transport: function(e, t, i) {
                        var r = n.ajax(e);
                        return r.then(t),
                        r.fail(i),
                        r
                    }
                };
                return n.extend({}, t, e, !0)
            }
            ,
            i.prototype.processResults = function(e) {
                return e
            }
            ,
            i.prototype.query = function(e, t) {
                var i = this;
                null != this._request && ("function" == typeof this._request.abort && this._request.abort(),
                this._request = null);
                var r = n.extend({
                    type: "GET"
                }, this.ajaxOptions);
                function s() {
                    var n = r.transport(r, (function(n) {
                        var r = i.processResults(n, e);
                        i.options.get("debug") && window.console && console.error && (r && r.results && Array.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                        t(r)
                    }
                    ), (function() {
                        (!("status"in n) || 0 !== n.status && "0" !== n.status) && i.trigger("results:message", {
                            message: "errorLoading"
                        })
                    }
                    ));
                    i._request = n
                }
                "function" == typeof r.url && (r.url = r.url.call(this.$element, e)),
                "function" == typeof r.data && (r.data = r.data.call(this.$element, e)),
                this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(s, this.ajaxOptions.delay)) : s()
            }
            ,
            i
        }
        )),
        t.define("select2/data/tags", ["jquery"], (function(e) {
            function t(e, t, n) {
                var i = n.get("tags")
                  , r = n.get("createTag");
                void 0 !== r && (this.createTag = r);
                var s = n.get("insertTag");
                void 0 !== s && (this.insertTag = s),
                e.call(this, t, n);
                var o = i.length;
                if (Array.isArray(i))
                    for (var a = 0; a < o; a++) {
                        var l = i[a]
                          , c = this._normalizeItem(l)
                          , u = this.option(c);
                        this.$element.append(u)
                    }
            }
            return t.prototype.query = function(e, t, n) {
                var i = this;
                this._removeOldTags(),
                null != t.term && null == t.page ? e.call(this, t, (function e(r, s) {
                    for (var o = r.results, a = o.length, l = 0; l < a; l++) {
                        var c = o[l]
                          , u = null != c.children && !e({
                            results: c.children
                        }, !0);
                        if ((c.text || "").toUpperCase() === (t.term || "").toUpperCase() || u)
                            return !s && (r.data = o,
                            void n(r))
                    }
                    if (s)
                        return !0;
                    var d = i.createTag(t);
                    if (null != d) {
                        var p = i.option(d);
                        p.attr("data-select2-tag", "true"),
                        i.addOptions([p]),
                        i.insertTag(o, d)
                    }
                    r.results = o,
                    n(r)
                }
                )) : e.call(this, t, n)
            }
            ,
            t.prototype.createTag = function(e, t) {
                if (null == t.term)
                    return null;
                var n = t.term.trim();
                return "" === n ? null : {
                    id: n,
                    text: n
                }
            }
            ,
            t.prototype.insertTag = function(e, t, n) {
                t.unshift(n)
            }
            ,
            t.prototype._removeOldTags = function(t) {
                this.$element.find("option[data-select2-tag]").each((function() {
                    this.selected || e(this).remove()
                }
                ))
            }
            ,
            t
        }
        )),
        t.define("select2/data/tokenizer", ["jquery"], (function(e) {
            function t(e, t, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i),
                e.call(this, t, n)
            }
            return t.prototype.bind = function(e, t, n) {
                e.call(this, t, n),
                this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }
            ,
            t.prototype.query = function(t, n, i) {
                var r = this;
                n.term = n.term || "";
                var s = this.tokenizer(n, this.options, (function(t) {
                    var n = r._normalizeItem(t);
                    if (!r.$element.find("option").filter((function() {
                        return e(this).val() === n.id
                    }
                    )).length) {
                        var i = r.option(n);
                        i.attr("data-select2-tag", !0),
                        r._removeOldTags(),
                        r.addOptions([i])
                    }
                    !function(e) {
                        r.trigger("select", {
                            data: e
                        })
                    }(n)
                }
                ));
                s.term !== n.term && (this.$search.length && (this.$search.val(s.term),
                this.$search.trigger("focus")),
                n.term = s.term),
                t.call(this, n, i)
            }
            ,
            t.prototype.tokenizer = function(t, n, i, r) {
                for (var s = i.get("tokenSeparators") || [], o = n.term, a = 0, l = this.createTag || function(e) {
                    return {
                        id: e.term,
                        text: e.term
                    }
                }
                ; a < o.length; ) {
                    var c = o[a];
                    if (-1 !== s.indexOf(c)) {
                        var u = o.substr(0, a)
                          , d = l(e.extend({}, n, {
                            term: u
                        }));
                        null != d ? (r(d),
                        o = o.substr(a + 1) || "",
                        a = 0) : a++
                    } else
                        a++
                }
                return {
                    term: o
                }
            }
            ,
            t
        }
        )),
        t.define("select2/data/minimumInputLength", [], (function() {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                t.term = t.term || "",
                t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : e.call(this, t, n)
            }
            ,
            e
        }
        )),
        t.define("select2/data/maximumInputLength", [], (function() {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                t.term = t.term || "",
                this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : e.call(this, t, n)
            }
            ,
            e
        }
        )),
        t.define("select2/data/maximumSelectionLength", [], (function() {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"),
                e.call(this, t, n)
            }
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("select", (function() {
                    i._checkIfMaximumSelected()
                }
                ))
            }
            ,
            e.prototype.query = function(e, t, n) {
                var i = this;
                this._checkIfMaximumSelected((function() {
                    e.call(i, t, n)
                }
                ))
            }
            ,
            e.prototype._checkIfMaximumSelected = function(e, t) {
                var n = this;
                this.current((function(e) {
                    var i = null != e ? e.length : 0;
                    n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: n.maximumSelectionLength
                        }
                    }) : t && t()
                }
                ))
            }
            ,
            e
        }
        )),
        t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
            function n(e, t) {
                this.$element = e,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<span class="forminator-select-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$dropdown = t,
                t
            }
            ,
            n.prototype.bind = function() {}
            ,
            n.prototype.position = function(e, t) {}
            ,
            n.prototype.destroy = function() {
                this.$dropdown.remove()
            }
            ,
            n
        }
        )),
        t.define("select2/dropdown/search", ["jquery"], (function(e) {
            function t() {}
            return t.prototype.render = function(t) {
                var n = t.call(this)
                  , i = this.options.get("translations").get("search")
                  , r = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                return this.$searchContainer = r,
                this.$search = r.find("input"),
                this.$search.prop("autocomplete", this.options.get("autocomplete")),
                this.$search.attr("aria-label", i()),
                n.prepend(r),
                n
            }
            ,
            t.prototype.bind = function(t, n, i) {
                var r = this
                  , s = n.id + "-results";
                t.call(this, n, i),
                this.$search.on("keydown", (function(e) {
                    r.trigger("keypress", e),
                    r._keyUpPrevented = e.isDefaultPrevented()
                }
                )),
                this.$search.on("input", (function(t) {
                    e(this).off("keyup")
                }
                )),
                this.$search.on("keyup input", (function(e) {
                    r.handleSearch(e)
                }
                )),
                n.on("open", (function() {
                    r.$search.attr("tabindex", 0),
                    r.$search.attr("aria-controls", s),
                    r.$search.trigger("focus"),
                    window.setTimeout((function() {
                        r.$search.trigger("focus")
                    }
                    ), 0)
                }
                )),
                n.on("close", (function() {
                    r.$search.attr("tabindex", -1),
                    r.$search.removeAttr("aria-controls"),
                    r.$search.removeAttr("aria-activedescendant"),
                    r.$search.val(""),
                    r.$search.trigger("blur")
                }
                )),
                n.on("focus", (function() {
                    n.isOpen() || r.$search.trigger("focus")
                }
                )),
                n.on("results:all", (function(e) {
                    null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer[0].classList.remove("select2-search--hide") : r.$searchContainer[0].classList.add("select2-search--hide"))
                }
                )),
                n.on("results:focus", (function(e) {
                    e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
                }
                ))
            }
            ,
            t.prototype.handleSearch = function(e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {
                        term: t
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            t.prototype.showSearch = function(e, t) {
                return !0
            }
            ,
            t
        }
        )),
        t.define("select2/dropdown/hidePlaceholder", [], (function() {
            function e(e, t, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                e.call(this, t, n, i)
            }
            return e.prototype.append = function(e, t) {
                t.results = this.removePlaceholder(t.results),
                e.call(this, t)
            }
            ,
            e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            e.prototype.removePlaceholder = function(e, t) {
                for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                    var r = t[i];
                    this.placeholder.id === r.id && n.splice(i, 1)
                }
                return n
            }
            ,
            e
        }
        )),
        t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
            function t(e, t, n, i) {
                this.lastParams = {},
                e.call(this, t, n, i),
                this.$loadingMore = this.createLoadingMore(),
                this.loading = !1
            }
            return t.prototype.append = function(e, t) {
                this.$loadingMore.remove(),
                this.loading = !1,
                e.call(this, t),
                this.showLoadingMore(t) && (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded())
            }
            ,
            t.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("query", (function(e) {
                    i.lastParams = e,
                    i.loading = !0
                }
                )),
                t.on("query:append", (function(e) {
                    i.lastParams = e,
                    i.loading = !0
                }
                )),
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
            }
            ,
            t.prototype.loadMoreIfNeeded = function() {
                var t = e.contains(document.documentElement, this.$loadingMore[0]);
                !this.loading && t && (this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore())
            }
            ,
            t.prototype.loadMore = function() {
                this.loading = !0;
                var t = e.extend({}, {
                    page: 1
                }, this.lastParams);
                t.page++,
                this.trigger("query:append", t)
            }
            ,
            t.prototype.showLoadingMore = function(e, t) {
                return t.pagination && t.pagination.more
            }
            ,
            t.prototype.createLoadingMore = function() {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>')
                  , n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)),
                t
            }
            ,
            t
        }
        )),
        t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
            function n(t, n, i) {
                this.$dropdownParent = e(i.get("dropdownParent") || document.body),
                t.call(this, n, i)
            }
            return n.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("open", (function() {
                    i._showDropdown(),
                    i._attachPositioningHandler(t),
                    i._bindContainerResultHandlers(t)
                }
                )),
                t.on("close", (function() {
                    i._hideDropdown(),
                    i._detachPositioningHandler(t)
                }
                )),
                this.$dropdownContainer.on("mousedown", (function(e) {
                    e.stopPropagation()
                }
                ))
            }
            ,
            n.prototype.destroy = function(e) {
                e.call(this),
                this.$dropdownContainer.remove()
            }
            ,
            n.prototype.position = function(e, t, n) {
                t.attr("class", n.attr("class")),
                t.removeClass("select2"),
                t.addClass("forminator-select-dropdown-container--open"),
                t.attr("tabindex", "-1"),
                t[0].classList.remove("select2"),
                t[0].classList.add("select2-container--open"),
                t.css({
                    position: "absolute",
                    top: -999999
                }),
                this.$container = n
            }
            ,
            n.prototype.render = function(t) {
                var n = e("<span></span>")
                  , i = t.call(this);
                return n.append(i),
                this.$dropdownContainer = n,
                n
            }
            ,
            n.prototype._hideDropdown = function(e) {
                this.$dropdownContainer.detach()
            }
            ,
            n.prototype._bindContainerResultHandlers = function(e, t) {
                if (!this._containerResultsHandlersBound) {
                    var n = this;
                    t.on("results:all", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("results:append", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("results:message", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("select", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("unselect", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    this._containerResultsHandlersBound = !0
                }
            }
            ,
            n.prototype._attachPositioningHandler = function(n, i) {
                var r = this
                  , s = "scroll.select2." + i.id
                  , o = "resize.select2." + i.id
                  , a = "orientationchange.select2." + i.id
                  , l = this.$container.parents().filter(t.hasScroll);
                l.each((function() {
                    t.StoreData(this, "select2-scroll-position", {
                        x: e(this).scrollLeft(),
                        y: e(this).scrollTop()
                    })
                }
                )),
                l.on(s, (function(n) {
                    var i = t.GetData(this, "select2-scroll-position");
                    e(this).scrollTop(i.y)
                }
                )),
                e(window).on(s + " " + o + " " + a, (function(e) {
                    r._positionDropdown(),
                    r._resizeDropdown()
                }
                ))
            }
            ,
            n.prototype._detachPositioningHandler = function(n, i) {
                var r = "scroll.select2." + i.id
                  , s = "resize.select2." + i.id
                  , o = "orientationchange.select2." + i.id;
                this.$container.parents().filter(t.hasScroll).off(r),
                e(window).off(r + " " + s + " " + o)
            }
            ,
            n.prototype._positionDropdown = function() {
                var t = e(window)
                  , n = this.$dropdown[0].classList.contains("forminator-select-dropdown--above")
                  , i = this.$dropdown[0].classList.contains("forminator-select-dropdown--below")
                  , r = null
                  , s = this.$container.offset();
                s.bottom = s.top + this.$container.outerHeight(!1);
                var o = {
                    height: this.$container.outerHeight(!1)
                };
                o.top = s.top,
                o.bottom = s.top + o.height;
                var a = this.$dropdown.outerHeight(!1)
                  , l = t.scrollTop()
                  , c = t.scrollTop() + t.height()
                  , u = l < s.top - a
                  , d = c > s.bottom + a
                  , p = {
                    left: s.left,
                    top: o.bottom
                }
                  , h = this.$dropdownParent;
                "static" === h.css("position") && (h = h.offsetParent());
                var f = {
                    top: 0,
                    left: 0
                };
                (e.contains(document.body, h[0]) || h[0].isConnected) && (f = h.offset()),
                p.top -= f.top,
                p.left -= f.left,
                n || i || (r = "below"),
                d || !u || n ? !u && d && n && (r = "below") : r = "above",
                ("above" == r || n && "below" !== r) && (p.top = o.top - f.top - a),
                null != r && (this.$dropdown[0].classList.remove("forminator-select-dropdown--below"),
                this.$dropdown[0].classList.remove("forminator-select-dropdown--above"),
                this.$dropdown[0].classList.add("forminator-select-dropdown--" + r),
                this.$container[0].classList.remove("forminator-select-container--below"),
                this.$container[0].classList.remove("forminator-select-container--above"),
                this.$container[0].classList.add("forminator-select-dropdown-container--" + r)),
                this.$dropdownContainer.css(p)
            }
            ,
            n.prototype._resizeDropdown = function() {
                var e = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
                e.position = "relative",
                e.width = "auto"),
                this.$dropdown.css(e)
            }
            ,
            n.prototype._showDropdown = function(e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown()
            }
            ,
            n
        }
        )),
        t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
            function e(t) {
                for (var n = 0, i = t.length, r = 0; r < i; r++) {
                    var s = t[r];
                    s.children ? n += e(s.children) : n++
                }
                return n
            }
            function t(e, t, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, n, i)
            }
            return t.prototype.showSearch = function(t, n) {
                return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
            }
            ,
            t
        }
        )),
        t.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
            function t() {}
            return t.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("close", (function(e) {
                    i._handleSelectOnClose(e)
                }
                ))
            }
            ,
            t.prototype._handleSelectOnClose = function(t, n) {
                if (n && null != n.originalSelect2Event) {
                    var i = n.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type)
                        return
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                    var s = e.GetData(r[0], "data");
                    null != s.element && s.element.selected || null == s.element && s.selected || this.trigger("select", {
                        data: s
                    })
                }
            }
            ,
            t
        }
        )),
        t.define("select2/dropdown/closeOnSelect", [], (function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("select", (function(e) {
                    i._selectTriggered(e)
                }
                )),
                t.on("unselect", (function(e) {
                    i._selectTriggered(e)
                }
                ))
            }
            ,
            e.prototype._selectTriggered = function(e, t) {
                var n = t.originalEvent;
                n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t
                })
            }
            ,
            e
        }
        )),
        t.define("select2/dropdown/dropdownCss", ["../utils"], (function(e) {
            function t() {}
            return t.prototype.render = function(t) {
                var n = t.call(this)
                  , i = this.options.get("dropdownCssClass") || "";
                return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""),
                e.copyNonInternalCssClasses(n[0], this.$element[0])),
                n.addClass("forminator-select-dropdown"),
                n.addClass(i),
                n
            }
            ,
            t
        }
        )),
        t.define("select2/dropdown/tagsSearchHighlight", ["../utils"], (function(e) {
            function t() {}
            return t.prototype.highlightFirstItem = function(t) {
                var n = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");
                if (n.length > 0) {
                    var i = n.first()
                      , r = e.GetData(i[0], "data").element;
                    if (r && r.getAttribute && "true" === r.getAttribute("data-select2-tag"))
                        return void i.trigger("mouseenter")
                }
                t.call(this)
            }
            ,
            t
        }
        )),
        t.define("select2/i18n/en", [], (function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(e) {
                    var t = e.input.length - e.maximum
                      , n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"),
                    n
                },
                inputTooShort: function(e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                },
                loadingMore: function() {
                    return "Loading more results…"
                },
                maximumSelected: function(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"),
                    t
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching…"
                },
                removeAllItems: function() {
                    return "Remove all items"
                },
                removeItem: function() {
                    return "Remove item"
                },
                search: function() {
                    return "Search"
                }
            }
        }
        )),
        t.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en"], (function(e, t, n, i, r, s, o, a, l, c, u, d, p, h, f, g, m, v, y, _, b, $, w, x, A, D, S, C, L, O, E) {
            function T() {
                this.reset()
            }
            return T.prototype.apply = function(o) {
                if (null == (o = e.extend(!0, {}, this.defaults, o)).dataAdapter && (null != o.ajax ? o.dataAdapter = f : null != o.data ? o.dataAdapter = h : o.dataAdapter = p,
                o.minimumInputLength > 0 && (o.dataAdapter = c.Decorate(o.dataAdapter, v)),
                o.maximumInputLength > 0 && (o.dataAdapter = c.Decorate(o.dataAdapter, y)),
                o.maximumSelectionLength > 0 && (o.dataAdapter = c.Decorate(o.dataAdapter, _)),
                o.tags && (o.dataAdapter = c.Decorate(o.dataAdapter, g)),
                null == o.tokenSeparators && null == o.tokenizer || (o.dataAdapter = c.Decorate(o.dataAdapter, m))),
                null == o.resultsAdapter && (o.resultsAdapter = t,
                null != o.ajax && (o.resultsAdapter = c.Decorate(o.resultsAdapter, x)),
                null != o.placeholder && (o.resultsAdapter = c.Decorate(o.resultsAdapter, w)),
                o.selectOnClose && (o.resultsAdapter = c.Decorate(o.resultsAdapter, S)),
                o.tags && (o.resultsAdapter = c.Decorate(o.resultsAdapter, O))),
                null == o.dropdownAdapter) {
                    if (o.multiple)
                        o.dropdownAdapter = c.Decorate(b, $);
                    else {
                        var u = c.Decorate(b, $);
                        o.dropdownAdapter = u
                    }
                    0 !== o.minimumResultsForSearch && (o.dropdownAdapter = c.Decorate(o.dropdownAdapter, D)),
                    o.closeOnSelect && (o.dropdownAdapter = c.Decorate(o.dropdownAdapter, C)),
                    null != o.dropdownCssClass && (o.dropdownAdapter = c.Decorate(o.dropdownAdapter, L)),
                    o.dropdownAdapter = c.Decorate(o.dropdownAdapter, A)
                }
                null == o.selectionAdapter && (o.multiple ? o.selectionAdapter = i : o.selectionAdapter = n,
                null != o.placeholder && (o.selectionAdapter = c.Decorate(o.selectionAdapter, r)),
                o.allowClear && (o.selectionAdapter = c.Decorate(o.selectionAdapter, s)),
                null != o.selectionCssClass && (o.selectionAdapter = c.Decorate(o.selectionAdapter, a)),
                o.selectionAdapter = c.Decorate(o.selectionAdapter, l)),
                o.language = this._resolveLanguage(o.language),
                o.language.push("en");
                for (var d = [], E = 0; E < o.language.length; E++) {
                    var T = o.language[E];
                    -1 === d.indexOf(T) && d.push(T)
                }
                return o.language = d,
                o.translations = this._processTranslations(o.language, o.debug),
                o
            }
            ,
            T.prototype.reset = function() {
                function t(e) {
                    return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                        return d[e] || e
                    }
                    ))
                }
                this.defaults = {
                    amdLanguageBase: "./i18n/",
                    autocomplete: "off",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: {},
                    matcher: function n(i, r) {
                        if (null == i.term || "" === i.term.trim())
                            return r;
                        if (r.children && r.children.length > 0) {
                            for (var s = e.extend(!0, {}, r), o = r.children.length - 1; o >= 0; o--) {
                                null == n(i, r.children[o]) && s.children.splice(o, 1)
                            }
                            return s.children.length > 0 ? s : n(i, s)
                        }
                        var a = t(r.text).toUpperCase()
                          , l = t(i.term).toUpperCase();
                        return a.indexOf(l) > -1 ? r : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function(e) {
                        return e
                    },
                    templateResult: function(e) {
                        return e.text
                    },
                    templateSelection: function(e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }
            ,
            T.prototype.applyFromElement = function(e, t) {
                var n = e.language
                  , i = this.defaults.language
                  , r = t.prop("lang")
                  , s = t.closest("[lang]").prop("lang")
                  , o = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(s));
                return e.language = o,
                e
            }
            ,
            T.prototype._resolveLanguage = function(t) {
                if (!t)
                    return [];
                if (e.isEmptyObject(t))
                    return [];
                if (e.isPlainObject(t))
                    return [t];
                var n;
                n = Array.isArray(t) ? t : [t];
                for (var i = [], r = 0; r < n.length; r++)
                    if (i.push(n[r]),
                    "string" == typeof n[r] && n[r].indexOf("-") > 0) {
                        var s = n[r].split("-")[0];
                        i.push(s)
                    }
                return i
            }
            ,
            T.prototype._processTranslations = function(t, n) {
                for (var i = new u, r = 0; r < t.length; r++) {
                    var s = new u
                      , o = t[r];
                    if ("string" == typeof o)
                        try {
                            s = u.loadPath(o)
                        } catch (e) {
                            try {
                                o = this.defaults.amdLanguageBase + o,
                                s = u.loadPath(o)
                            } catch (e) {
                                n && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.')
                            }
                        }
                    else
                        s = e.isPlainObject(o) ? new u(o) : o;
                    i.extend(s)
                }
                return i
            }
            ,
            T.prototype.set = function(t, n) {
                var i = {};
                i[e.camelCase(t)] = n;
                var r = c._convertData(i);
                e.extend(!0, this.defaults, r)
            }
            ,
            new T
        }
        )),
        t.define("select2/options", ["jquery", "./defaults", "./utils"], (function(e, t, n) {
            function i(e, n) {
                this.options = e,
                null != n && this.fromElement(n),
                null != n && (this.options = t.applyFromElement(this.options, n)),
                this.options = t.apply(this.options)
            }
            return i.prototype.fromElement = function(t) {
                var i = ["select2"];
                null == this.options.multiple && (this.options.multiple = t.prop("multiple")),
                null == this.options.disabled && (this.options.disabled = t.prop("disabled")),
                null == this.options.autocomplete && t.prop("autocomplete") && (this.options.autocomplete = t.prop("autocomplete")),
                null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                t.prop("disabled", this.options.disabled),
                t.prop("multiple", this.options.multiple),
                n.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                n.StoreData(t[0], "data", n.GetData(t[0], "select2Tags")),
                n.StoreData(t[0], "tags", !0)),
                n.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                t.attr("ajax--url", n.GetData(t[0], "ajaxUrl")),
                n.StoreData(t[0], "ajax-Url", n.GetData(t[0], "ajaxUrl")));
                var r = {};
                function s(e, t) {
                    return t.toUpperCase()
                }
                for (var o = 0; o < t[0].attributes.length; o++) {
                    var a = t[0].attributes[o].name
                      , l = "data-";
                    if (a.substr(0, 5) == l) {
                        var c = a.substring(5)
                          , u = n.GetData(t[0], c);
                        r[c.replace(/-([a-z])/g, s)] = u
                    }
                }
                e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset && (r = e.extend(!0, {}, t[0].dataset, r));
                var d = e.extend(!0, {}, n.GetData(t[0]), r);
                for (var p in d = n._convertData(d))
                    i.indexOf(p) > -1 || (e.isPlainObject(this.options[p]) ? e.extend(this.options[p], d[p]) : this.options[p] = d[p]);
                return this
            }
            ,
            i.prototype.get = function(e) {
                return this.options[e]
            }
            ,
            i.prototype.set = function(e, t) {
                this.options[e] = t
            }
            ,
            i
        }
        )),
        t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, n, i) {
            var r = function(e, i) {
                null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(),
                this.$element = e,
                this.id = this._generateId(e),
                i = i || {},
                this.options = new t(i,e),
                r.__super__.constructor.call(this);
                var s = e.attr("tabindex") || 0;
                n.StoreData(e[0], "old-tabindex", s),
                e.attr("tabindex", "-1");
                var o = this.options.get("dataAdapter");
                this.dataAdapter = new o(e,this.options);
                var a = this.render();
                this._placeContainer(a);
                var l = this.options.get("selectionAdapter");
                this.selection = new l(e,this.options),
                this.$selection = this.selection.render(),
                this.selection.position(this.$selection, a);
                var c = this.options.get("dropdownAdapter");
                this.dropdown = new c(e,this.options),
                this.$dropdown = this.dropdown.render(),
                this.dropdown.position(this.$dropdown, a);
                var u = this.options.get("resultsAdapter");
                this.results = new u(e,this.options,this.dataAdapter),
                this.$results = this.results.render(),
                this.results.position(this.$results, this.$dropdown);
                var d = this;
                this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current((function(e) {
                    d.trigger("selection:update", {
                        data: e
                    })
                }
                )),
                e[0].classList.add("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                e.addClass("forminator-screen-reader-only"),
                this._syncAttributes(),
                n.StoreData(e[0], "select2", this),
                e.data("select2", this)
            };
            return n.Extend(r, n.Observable),
            r.prototype._generateId = function(e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }
            ,
            r.prototype._placeContainer = function(e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }
            ,
            r.prototype._resolveWidth = function(e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var r = e.outerWidth(!1);
                    return r <= 0 ? "auto" : r + "px"
                }
                if ("style" == t) {
                    var s = e.attr("style");
                    if ("string" != typeof s)
                        return null;
                    for (var o = s.split(";"), a = 0, l = o.length; a < l; a += 1) {
                        var c = o[a].replace(/\s/g, "").match(n);
                        if (null !== c && c.length >= 1)
                            return c[1]
                    }
                    return null
                }
                return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t
            }
            ,
            r.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container)
            }
            ,
            r.prototype._registerDomEvents = function() {
                var e = this;
                this.$element.on("change.select2", (function() {
                    e.dataAdapter.current((function(t) {
                        e.trigger("selection:update", {
                            data: t
                        })
                    }
                    ))
                }
                )),
                this.$element.on("focus.select2", (function(t) {
                    e.trigger("focus", t)
                }
                )),
                this._syncA = n.bind(this._syncAttributes, this),
                this._syncS = n.bind(this._syncSubtree, this),
                this._observer = new window.MutationObserver((function(t) {
                    e._syncA(),
                    e._syncS(t)
                }
                )),
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })
            }
            ,
            r.prototype._registerDataEvents = function() {
                var e = this;
                this.dataAdapter.on("*", (function(t, n) {
                    e.trigger(t, n)
                }
                ))
            }
            ,
            r.prototype._registerSelectionEvents = function() {
                var e = this
                  , t = ["toggle", "focus"];
                this.selection.on("toggle", (function() {
                    e.toggleDropdown()
                }
                )),
                this.selection.on("focus", (function(t) {
                    e.focus(t)
                }
                )),
                this.selection.on("*", (function(n, i) {
                    -1 === t.indexOf(n) && e.trigger(n, i)
                }
                ))
            }
            ,
            r.prototype._registerDropdownEvents = function() {
                var e = this;
                this.dropdown.on("*", (function(t, n) {
                    e.trigger(t, n)
                }
                ))
            }
            ,
            r.prototype._registerResultsEvents = function() {
                var e = this;
                this.results.on("*", (function(t, n) {
                    e.trigger(t, n)
                }
                ))
            }
            ,
            r.prototype._registerEvents = function() {
                var t = this;
                this.on("open", (function() {
                    t.$container[0].classList.add("select2-container--open")
                }
                )),
                this.on("close", (function() {
                    t.$container[0].classList.remove("select2-container--open")
                }
                )),
                this.on("enable", (function() {
                    t.$container[0].classList.remove("select2-container--disabled")
                }
                )),
                this.on("disable", (function() {
                    t.$container[0].classList.add("select2-container--disabled")
                }
                )),
                this.on("blur", (function() {
                    t.$container[0].classList.remove("select2-container--focus")
                }
                )),
                this.on("query", (function(e) {
                    t.isOpen() || t.trigger("open", {}),
                    this.dataAdapter.query(e, (function(n) {
                        t.trigger("results:all", {
                            data: n,
                            query: e
                        })
                    }
                    ))
                }
                )),
                this.on("query:append", (function(e) {
                    this.dataAdapter.query(e, (function(n) {
                        t.trigger("results:append", {
                            data: n,
                            query: e
                        })
                    }
                    ))
                }
                )),
                this.on("keypress", (function(n) {
                    var r = n.which;
                    if (t.isOpen())
                        r === i.ENTER ? (t.trigger("results:select"),
                        n.preventDefault()) : r === i.SPACE && n.ctrlKey ? (t.trigger("results:toggle"),
                        n.preventDefault()) : r === i.UP ? (t.trigger("results:previous"),
                        n.preventDefault()) : r === i.DOWN ? (t.trigger("results:next"),
                        n.preventDefault()) : r !== i.ESC && r !== i.TAB || (t.close(),
                        n.preventDefault());
                    else if (r === i.ENTER || r === i.SPACE || r === i.DOWN)
                        t.open(),
                        n.preventDefault();
                    else if (r === i.DOWN)
                        null != this.$element.find("option:selected").next().val() && (this.$element.val(this.$element.find("option:selected").next().val()),
                        this.$element.trigger("change")),
                        n.preventDefault();
                    else if (r === i.UP)
                        null != this.$element.find("option:selected").prev().val() && (this.$element.val(this.$element.find("option:selected").prev().val()),
                        this.$element.trigger("change")),
                        n.preventDefault();
                    else {
                        var s = this.$element.find("option:selected").text()
                          , o = String.fromCharCode(r).toLowerCase()
                          , a = this.$element.find("option").filter((function() {
                            var t;
                            return null === (t = e(this).text()) || void 0 === t ? void 0 : t.toLowerCase().startsWith(o)
                        }
                        ))
                          , l = a.length - 1
                          , c = s;
                        a.each((function(t) {
                            return console.log(s),
                            "" !== s && s[0].toLowerCase() === o ? e(this).text() === s && t !== l ? (c = e(a[t + 1]).val(),
                            !1) : void 0 : (c = e(this).val(),
                            !1)
                        }
                        )),
                        c !== s && (t.$element.val(c),
                        t.$element.trigger("change"))
                    }
                }
                ))
            }
            ,
            r.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")),
                this.isDisabled() ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {})
            }
            ,
            r.prototype._isChangeMutation = function(e) {
                var t = this;
                if (e.addedNodes && e.addedNodes.length > 0)
                    for (var n = 0; n < e.addedNodes.length; n++) {
                        if (e.addedNodes[n].selected)
                            return !0
                    }
                else {
                    if (e.removedNodes && e.removedNodes.length > 0)
                        return !0;
                    if (Array.isArray(e))
                        return e.some((function(e) {
                            return t._isChangeMutation(e)
                        }
                        ))
                }
                return !1
            }
            ,
            r.prototype._syncSubtree = function(e) {
                var t = this._isChangeMutation(e)
                  , n = this;
                t && this.dataAdapter.current((function(e) {
                    n.trigger("selection:update", {
                        data: e
                    })
                }
                ))
            }
            ,
            r.prototype.trigger = function(e, t) {
                var n = r.__super__.trigger
                  , i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === t && (t = {}),
                e in i) {
                    var s = i[e]
                      , o = {
                        prevented: !1,
                        name: e,
                        args: t
                    };
                    if (n.call(this, s, o),
                    o.prevented)
                        return void (t.prevented = !0)
                }
                n.call(this, e, t)
            }
            ,
            r.prototype.toggleDropdown = function() {
                this.isDisabled() || (this.isOpen() ? this.close() : this.open())
            }
            ,
            r.prototype.open = function() {
                this.isOpen() || this.isDisabled() || this.trigger("query", {})
            }
            ,
            r.prototype.close = function(e) {
                this.isOpen() && this.trigger("close", {
                    originalEvent: e
                })
            }
            ,
            r.prototype.isEnabled = function() {
                return !this.isDisabled()
            }
            ,
            r.prototype.isDisabled = function() {
                return this.options.get("disabled")
            }
            ,
            r.prototype.isOpen = function() {
                return this.$container[0].classList.contains("select2-container--open")
            }
            ,
            r.prototype.hasFocus = function() {
                return this.$container[0].classList.contains("select2-container--focus")
            }
            ,
            r.prototype.focus = function(e) {
                this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"),
                this.trigger("focus", {}))
            }
            ,
            r.prototype.enable = function(e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                null != e && 0 !== e.length || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }
            ,
            r.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current((function(t) {
                    e = t
                }
                )),
                e
            }
            ,
            r.prototype.val = function(e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                null == e || 0 === e.length)
                    return this.$element.val();
                var t = e[0];
                Array.isArray(t) && (t = t.map((function(e) {
                    return e.toString()
                }
                ))),
                this.$element.val(t).trigger("input").trigger("change")
            }
            ,
            r.prototype.destroy = function() {
                n.RemoveData(this.$container[0]),
                this.$container.remove(),
                this._observer.disconnect(),
                this._observer = null,
                this._syncA = null,
                this._syncS = null,
                this.$element.off(".select2"),
                this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")),
                this.$element.removeClass("forminator-screen-reader-only"),
                this.$element[0].classList.remove("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                n.RemoveData(this.$element[0]),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                this.dataAdapter = null,
                this.selection = null,
                this.dropdown = null,
                this.results = null
            }
            ,
            r.prototype.render = function() {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$container = t,
                this.$container[0].classList.add("forminator-select"),
                "default" !== this.options.get("theme") && this.$container[0].classList.add("forminator-select-theme--" + this.options.get("theme")),
                n.StoreData(t[0], "element", this.$element),
                t
            }
            ,
            r
        }
        )),
        t.define("jquery-mousewheel", ["jquery"], (function(e) {
            return e
        }
        )),
        t.define("fui.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, n, i, r) {
            if (null == e.fn.FUIselect2) {
                var s = ["open", "close", "destroy"];
                e.fn.FUIselect2 = function(t) {
                    if ("object" === _typeof(t = t || {}))
                        return this.each((function() {
                            var i = e.extend(!0, {}, t);
                            new n(e(this),i)
                        }
                        )),
                        this;
                    if ("string" == typeof t) {
                        var i, o = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            var e = r.GetData(this, "select2");
                            null == e && window.console && console.error && console.error("The FUIselect2('" + t + "') method was called on an element that is not using Select2."),
                            i = e[t].apply(e, o)
                        }
                        )),
                        s.indexOf(t) > -1 ? this : i
                    }
                    throw new Error("Invalid arguments for FUIselect2: " + t)
                }
            }
            return null == e.fn.FUIselect2.defaults && (e.fn.FUIselect2.defaults = i),
            n
        }
        )),
        {
            define: t.define,
            require: t.require
        }
    }();
    return t.require("fui.select2")
}
));
