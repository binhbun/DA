(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    0: function(e, t, n) {
        "use strict";
        n.d(t, "k", (function() {
            return w
        }
        )),
        n.d(t, "m", (function() {
            return v
        }
        )),
        n.d(t, "l", (function() {
            return k
        }
        )),
        n.d(t, "e", (function() {
            return P
        }
        )),
        n.d(t, "b", (function() {
            return T
        }
        )),
        n.d(t, "s", (function() {
            return S
        }
        )),
        n.d(t, "g", (function() {
            return C
        }
        )),
        n.d(t, "h", (function() {
            return O
        }
        )),
        n.d(t, "d", (function() {
            return x
        }
        )),
        n.d(t, "r", (function() {
            return E
        }
        )),
        n.d(t, "j", (function() {
            return N
        }
        )),
        n.d(t, "t", (function() {
            return A
        }
        )),
        n.d(t, "o", (function() {
            return I
        }
        )),
        n.d(t, "q", (function() {
            return j
        }
        )),
        n.d(t, "f", (function() {
            return D
        }
        )),
        n.d(t, "c", (function() {
            return M
        }
        )),
        n.d(t, "i", (function() {
            return F
        }
        )),
        n.d(t, "p", (function() {
            return U
        }
        )),
        n.d(t, "a", (function() {
            return V
        }
        )),
        n.d(t, "v", (function() {
            return z
        }
        )),
        n.d(t, "n", (function() {
            return Q
        }
        )),
        n.d(t, "u", (function() {
            return K
        }
        ));
        n(47),
        n(27),
        n(44),
        n(48),
        n(45),
        n(30),
        n(46);
        var o = n(18)
          , r = n(4)
          , c = n(15)
          , l = n(11)
          , d = (n(38),
        n(13),
        n(35),
        n(132),
        n(29),
        n(55),
        n(49),
        n(31),
        n(32),
        n(33),
        n(39),
        n(24),
        n(65),
        n(156),
        n(199),
        n(166),
        n(80),
        n(98),
        n(285),
        n(42),
        n(43),
        n(1))
          , h = n(53);
        function m(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function f(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? m(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        function _(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return y(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    r = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        }
        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function w(e) {
            d.a.config.errorHandler && d.a.config.errorHandler(e)
        }
        function v(e) {
            return e.then((function(e) {
                return e.default || e
            }
            ))
        }
        function k(e) {
            return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
        }
        function P(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], o = e.$children || [], r = _(o);
            try {
                for (r.s(); !(t = r.n()).done; ) {
                    var c = t.value;
                    c.$fetch ? n.push(c) : c.$children && P(c, n)
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return n
        }
        function T(e, t) {
            if (t || !e.options.__hasNuxtData) {
                var n = e.options._originDataFn || e.options.data || function() {
                    return {}
                }
                ;
                e.options._originDataFn = n,
                e.options.data = function() {
                    var data = n.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
                    f(f({}, data), t)
                }
                ,
                e.options.__hasNuxtData = !0,
                e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }
        function S(e) {
            return e.options && e._Ctor === e || (e.options ? (e._Ctor = e,
            e.extendOptions = e.options) : (e = d.a.extend(e))._Ctor = e,
            !e.options.name && e.options.__file && (e.options.name = e.options.__file)),
            e
        }
        function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map((function(e, o) {
                return Object.keys(e[n]).map((function(r) {
                    return t && t.push(o),
                    e[n][r]
                }
                ))
            }
            )))
        }
        function O(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return C(e, t, "instances")
        }
        function x(e, t) {
            return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                return Object.keys(e.components).reduce((function(o, r) {
                    return e.components[r] ? o.push(t(e.components[r], e.instances[r], e, r, n)) : delete e.components[r],
                    o
                }
                ), [])
            }
            )))
        }
        function E(e, t) {
            return Promise.all(x(e, function() {
                var e = Object(r.a)(regeneratorRuntime.mark((function e(n, o, r, c) {
                    var l, d;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof n || n.options) {
                                    e.next = 11;
                                    break
                                }
                                return e.prev = 1,
                                e.next = 4,
                                n();
                            case 4:
                                n = e.sent,
                                e.next = 11;
                                break;
                            case 7:
                                throw e.prev = 7,
                                e.t0 = e.catch(1),
                                e.t0 && "ChunkLoadError" === e.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(),
                                (!(d = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || d + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l),
                                window.location.reload(!0))),
                                e.t0;
                            case 11:
                                return r.components[c] = n = S(n),
                                e.abrupt("return", "function" == typeof t ? t(n, o, r, c) : n);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 7]])
                }
                )));
                return function(t, n, o, r) {
                    return e.apply(this, arguments)
                }
            }()))
        }
        function N(e) {
            return R.apply(this, arguments)
        }
        function R() {
            return (R = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4,
                            E(t);
                        case 4:
                            return e.abrupt("return", f(f({}, t), {}, {
                                meta: C(t).map((function(e, n) {
                                    return f(f({}, e.options.meta), (t.matched[n] || {}).meta)
                                }
                                ))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function A(e, t) {
            return L.apply(this, arguments)
        }
        function L() {
            return (L = Object(r.a)(regeneratorRuntime.mark((function e(t, n) {
                var r, c, d, m;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t.context || (t.context = {
                                isStatic: !1,
                                isDev: !1,
                                isHMR: !1,
                                app: t,
                                store: t.store,
                                payload: n.payload,
                                error: n.error,
                                base: t.router.options.base,
                                env: {
                                    baseUrl: "https://trafficdownload1s.com"
                                }
                            },
                            n.req && (t.context.req = n.req),
                            n.res && (t.context.res = n.res),
                            n.ssrContext && (t.context.ssrContext = n.ssrContext),
                            t.context.redirect = function(e, path, n) {
                                if (e) {
                                    t.context._redirected = !0;
                                    var r = Object(o.a)(path);
                                    if ("number" == typeof e || "undefined" !== r && "object" !== r || (n = path || {},
                                    path = e,
                                    r = Object(o.a)(path),
                                    e = 302),
                                    "object" === r && (path = t.router.resolve(path).route.fullPath),
                                    !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                                        throw path = Object(h.d)(path, n),
                                        window.location.replace(path),
                                        new Error("ERR_REDIRECT");
                                    t.context.next({
                                        path: path,
                                        query: n,
                                        status: e
                                    })
                                }
                            }
                            ,
                            t.context.nuxtState = window.__NUXT__),
                            e.next = 3,
                            Promise.all([N(n.route), N(n.from)]);
                        case 3:
                            r = e.sent,
                            c = Object(l.a)(r, 2),
                            d = c[0],
                            m = c[1],
                            n.route && (t.context.route = d),
                            n.from && (t.context.from = m),
                            t.context.next = n.next,
                            t.context._redirected = !1,
                            t.context._errored = !1,
                            t.context.isHMR = !1,
                            t.context.params = t.context.route.params || {},
                            t.context.query = t.context.route.query || {};
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function I(e, t) {
            return !e.length || t._redirected || t._errored ? Promise.resolve() : j(e[0], t).then((function() {
                return I(e.slice(1), t)
            }
            ))
        }
        function j(e, t) {
            var n;
            return (n = 2 === e.length ? new Promise((function(n) {
                e(t, (function(e, data) {
                    e && t.error(e),
                    n(data = data || {})
                }
                ))
            }
            )) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }
        function D(base, e) {
            if ("hash" === e)
                return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var t = (path || "/") + window.location.search + window.location.hash;
            return Object(h.c)(t)
        }
        function M(e, t) {
            return function(e, t) {
                for (var n = new Array(e.length), i = 0; i < e.length; i++)
                    "object" === Object(o.a)(e[i]) && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$",Y(t)));
                return function(t, o) {
                    for (var path = "", data = t || {}, r = (o || {}).pretty ? G : encodeURIComponent, c = 0; c < e.length; c++) {
                        var l = e[c];
                        if ("string" != typeof l) {
                            var d = data[l.name || "pathMatch"]
                              , h = void 0;
                            if (null == d) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(d)) {
                                if (!l.repeat)
                                    throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                if (0 === d.length) {
                                    if (l.optional)
                                        continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var m = 0; m < d.length; m++) {
                                    if (h = r(d[m]),
                                    !n[c].test(h))
                                        throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(h) + "`");
                                    path += (0 === m ? l.prefix : l.delimiter) + h
                                }
                            } else {
                                if (h = l.asterisk ? B(d) : r(d),
                                !n[c].test(h))
                                    throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + h + '"');
                                path += l.prefix + h
                            }
                        } else
                            path += l
                    }
                    return path
                }
            }(function(e, t) {
                var n, o = [], r = 0, c = 0, path = "", l = t && t.delimiter || "/";
                for (; null != (n = W.exec(e)); ) {
                    var d = n[0]
                      , h = n[1]
                      , m = n.index;
                    if (path += e.slice(c, m),
                    c = m + d.length,
                    h)
                        path += h[1];
                    else {
                        var f = e[c]
                          , _ = n[2]
                          , y = n[3]
                          , w = n[4]
                          , v = n[5]
                          , k = n[6]
                          , P = n[7];
                        path && (o.push(path),
                        path = "");
                        var T = null != _ && null != f && f !== _
                          , S = "+" === k || "*" === k
                          , C = "?" === k || "*" === k
                          , O = n[2] || l
                          , pattern = w || v;
                        o.push({
                            name: y || r++,
                            prefix: _ || "",
                            delimiter: O,
                            optional: C,
                            repeat: S,
                            partial: T,
                            asterisk: Boolean(P),
                            pattern: pattern ? H(pattern) : P ? ".*" : "[^" + $(O) + "]+?"
                        })
                    }
                }
                c < e.length && (path += e.substr(c));
                path && o.push(path);
                return o
            }(e, t), t)
        }
        function F(e, t) {
            var n = {}
              , o = f(f({}, e), t);
            for (var r in o)
                String(e[r]) !== String(t[r]) && (n[r] = !0);
            return n
        }
        function U(e) {
            var t;
            if (e.message || "string" == typeof e)
                t = e.message || e;
            else
                try {
                    t = JSON.stringify(e, null, 2)
                } catch (n) {
                    t = "[".concat(e.constructor.name, "]")
                }
            return f(f({}, e), {}, {
                message: t,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [],
        window.onNuxtReady = function(e) {
            window.onNuxtReadyCbs.push(e)
        }
        ;
        var W = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function G(e, t) {
            var n = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(n, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function B(e) {
            return G(e, !0)
        }
        function $(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }
        function H(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }
        function Y(e) {
            return e && e.sensitive ? "" : "i"
        }
        function V(e, t, n) {
            e.$options[t] || (e.$options[t] = []),
            e.$options[t].includes(n) || e.$options[t].push(n)
        }
        var z = h.b
          , Q = (h.e,
        h.a);
        function K(e) {
            try {
                window.history.scrollRestoration = e
            } catch (e) {}
        }
    },
    131: function(e, t, n) {
        "use strict";
        n(97),
        n(13),
        n(30),
        n(42),
        n(43),
        n(49),
        n(35),
        n(39),
        n(29),
        n(47),
        n(32),
        n(24),
        n(27),
        n(44),
        n(48),
        n(33);
        var o = n(1);
        function r(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return c(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0, d = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return l = e.done,
                    e
                },
                e: function(e) {
                    d = !0,
                    r = e
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (d)
                            throw r
                    }
                }
            }
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        var l = window.requestIdleCallback || function(e) {
            var t = Date.now();
            return setTimeout((function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }
            ), 1)
        }
          , d = window.cancelIdleCallback || function(e) {
            clearTimeout(e)
        }
          , h = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
            e.forEach((function(e) {
                var t = e.intersectionRatio
                  , link = e.target;
                t <= 0 || !link.__prefetch || link.__prefetch()
            }
            ))
        }
        ));
        t.a = {
            name: "NuxtLink",
            extends: o.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                d(this.handleId),
                this.__observed && (h.unobserve(this.$el),
                delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    h && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this),
                    h.observe(this.$el),
                    this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                        return e.components.default
                    }
                    )).filter((function(e) {
                        return "function" == typeof e && !e.options && !e.__prefetched
                    }
                    ))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        h.unobserve(this.$el);
                        var e, t = r(this.getPrefetchComponents());
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                var n = e.value
                                  , o = n();
                                o instanceof Promise && o.catch((function() {}
                                )),
                                n.__prefetched = !0
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }
            }
        }
    },
    205: function(e, t, n) {
        var content = n(292);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        n(163).default)("3d8de15e", content, !0, {
            sourceMap: !1
        })
    },
    206: function(e, t, n) {
        var content = n(294);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
        (0,
        n(163).default)("6439d180", content, !0, {
            sourceMap: !1
        })
    },
    221: function(e, t, n) {
        "use strict";
        var o = n(4)
          , r = (n(38),
        n(13),
        n(97),
        n(1))
          , c = n(0)
          , l = window.__NUXT__;
        function d() {
            if (!this._hydrated)
                return this.$fetch()
        }
        function h() {
            if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                var e;
                this._hydrated = !0,
                this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = l.fetch[this._fetchKey];
                if (data && data._error)
                    this.$fetchState.error = data._error;
                else
                    for (var t in data)
                        r.a.set(this.$data, t, data[t])
            }
        }
        function m() {
            var e = this;
            return this._fetchPromise || (this._fetchPromise = f.call(this).then((function() {
                delete e._fetchPromise
            }
            ))),
            this._fetchPromise
        }
        function f() {
            return _.apply(this, arguments)
        }
        function _() {
            return (_ = Object(o.a)(regeneratorRuntime.mark((function e() {
                var t, n, o, r = this;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return this.$nuxt.nbFetching++,
                            this.$fetchState.pending = !0,
                            this.$fetchState.error = null,
                            this._hydrated = !1,
                            t = null,
                            n = Date.now(),
                            e.prev = 6,
                            e.next = 9,
                            this.$options.fetch.call(this);
                        case 9:
                            e.next = 15;
                            break;
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(6),
                            t = Object(c.p)(e.t0);
                        case 15:
                            if (!((o = this._fetchDelay - (Date.now() - n)) > 0)) {
                                e.next = 19;
                                break
                            }
                            return e.next = 19,
                            new Promise((function(e) {
                                return setTimeout(e, o)
                            }
                            ));
                        case 19:
                            this.$fetchState.error = t,
                            this.$fetchState.pending = !1,
                            this.$fetchState.timestamp = Date.now(),
                            this.$nextTick((function() {
                                return r.$nuxt.nbFetching--
                            }
                            ));
                        case 23:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[6, 11]])
            }
            )))).apply(this, arguments)
        }
        t.a = {
            beforeCreate: function() {
                Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200,
                r.a.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }),
                this.$fetch = m.bind(this),
                Object(c.a)(this, "created", h),
                Object(c.a)(this, "beforeMount", d))
            }
        }
    },
    244: function(e, t, n) {
        n(245),
        e.exports = n(246)
    },
    246: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n(39),
            n(47),
            n(27),
            n(44),
            n(48);
            var t = n(18)
              , o = n(4)
              , r = (n(143),
            n(261),
            n(275),
            n(276),
            n(38),
            n(29),
            n(13),
            n(30),
            n(35),
            n(31),
            n(42),
            n(43),
            n(55),
            n(49),
            n(24),
            n(32),
            n(33),
            n(97),
            n(1))
              , c = n(216)
              , l = n(94)
              , d = n(0)
              , h = n(54)
              , m = n(221)
              , f = n(131);
            function _(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                        if (!e)
                            return;
                        if ("string" == typeof e)
                            return y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return y(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0
                          , o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, c = !0, l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done,
                        e
                    },
                    e: function(e) {
                        l = !0,
                        r = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw r
                        }
                    }
                }
            }
            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++)
                    n[i] = e[i];
                return n
            }
            r.a.__nuxt__fetch__mixin__ || (r.a.mixin(m.a),
            r.a.__nuxt__fetch__mixin__ = !0),
            r.a.component(f.a.name, f.a),
            r.a.component("NLink", f.a),
            e.fetch || (e.fetch = c.a);
            var w, v, k = [], P = window.__NUXT__ || {}, T = P.config || {};
            T._app && (n.p = Object(d.v)(T._app.cdnURL, T._app.assetsPath)),
            Object.assign(r.a.config, {
                silent: !0,
                performance: !1
            });
            var S = r.a.config.errorHandler || console.error;
            function C(e, t, n) {
                for (var o = function(component) {
                    var e = function(component, e) {
                        if (!component || !component.options || !component.options[e])
                            return {};
                        var option = component.options[e];
                        if ("function" == typeof option) {
                            for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++)
                                n[o - 2] = arguments[o];
                            return option.apply(void 0, n)
                        }
                        return option
                    }(component, "transition", t, n) || {};
                    return "string" == typeof e ? {
                        name: e
                    } : e
                }, r = n ? Object(d.g)(n) : [], c = Math.max(e.length, r.length), l = [], h = function(i) {
                    var t = Object.assign({}, o(e[i]))
                      , n = Object.assign({}, o(r[i]));
                    Object.keys(t).filter((function(e) {
                        return void 0 !== t[e] && !e.toLowerCase().includes("leave")
                    }
                    )).forEach((function(e) {
                        n[e] = t[e]
                    }
                    )),
                    l.push(n)
                }, i = 0; i < c; i++)
                    h(i);
                return l
            }
            function O(e, t, n) {
                return x.apply(this, arguments)
            }
            function x() {
                return (x = Object(o.a)(regeneratorRuntime.mark((function e(t, n, o) {
                    var r, c, l, h, m = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this._routeChanged = Boolean(w.nuxt.err) || n.name !== t.name,
                                this._paramChanged = !this._routeChanged && n.path !== t.path,
                                this._queryChanged = !this._paramChanged && n.fullPath !== t.fullPath,
                                this._diffQuery = this._queryChanged ? Object(d.i)(t.query, n.query) : [],
                                (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                                e.prev = 5,
                                !this._queryChanged) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 9,
                                Object(d.r)(t, (function(e, t) {
                                    return {
                                        Component: e,
                                        instance: t
                                    }
                                }
                                ));
                            case 9:
                                r = e.sent,
                                r.some((function(e) {
                                    var o = e.Component
                                      , r = e.instance
                                      , c = o.options.watchQuery;
                                    return !0 === c || (Array.isArray(c) ? c.some((function(e) {
                                        return m._diffQuery[e]
                                    }
                                    )) : "function" == typeof c && c.apply(r, [t.query, n.query]))
                                }
                                )) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                            case 12:
                                o(),
                                e.next = 26;
                                break;
                            case 15:
                                if (e.prev = 15,
                                e.t0 = e.catch(5),
                                c = e.t0 || {},
                                l = c.statusCode || c.status || c.response && c.response.status || 500,
                                h = c.message || "",
                                !/^Loading( CSS)? chunk (\d)+ failed\./.test(h)) {
                                    e.next = 23;
                                    break
                                }
                                return window.location.reload(!0),
                                e.abrupt("return");
                            case 23:
                                this.error({
                                    statusCode: l,
                                    message: h
                                }),
                                this.$nuxt.$emit("routeChanged", t, n, c),
                                o();
                            case 26:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[5, 15]])
                }
                )))).apply(this, arguments)
            }
            function E(e, t) {
                return P.serverRendered && t && Object(d.b)(e, t),
                e._Ctor = e,
                e
            }
            function N(e) {
                return Object(d.d)(e, function() {
                    var e = Object(o.a)(regeneratorRuntime.mark((function e(t, n, o, r, c) {
                        var l;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("function" != typeof t || t.options) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3,
                                    t();
                                case 3:
                                    t = e.sent;
                                case 4:
                                    return l = E(Object(d.s)(t), P.data ? P.data[c] : null),
                                    o.components[r] = l,
                                    e.abrupt("return", l);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n, o, r, c) {
                        return e.apply(this, arguments)
                    }
                }())
            }
            function R(e, t, n) {
                var o = this
                  , r = ["nuxti18n"]
                  , c = !1;
                if (void 0 !== n && (r = [],
                (n = Object(d.s)(n)).options.middleware && (r = r.concat(n.options.middleware)),
                e.forEach((function(e) {
                    e.options.middleware && (r = r.concat(e.options.middleware))
                }
                ))),
                r = r.map((function(e) {
                    return "function" == typeof e ? e : ("function" != typeof l.a[e] && (c = !0,
                    o.error({
                        statusCode: 500,
                        message: "Unknown middleware " + e
                    })),
                    l.a[e])
                }
                )),
                !c)
                    return Object(d.o)(r, t)
            }
            function A(e, t, n) {
                return L.apply(this, arguments)
            }
            function L() {
                return L = Object(o.a)(regeneratorRuntime.mark((function e(t, n, r) {
                    var c, l, m, f, y, v, P, T, S, O, x, E, N, A, L, I = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", r());
                            case 2:
                                return !1,
                                t === n ? (k = [],
                                !0) : (c = [],
                                k = Object(d.g)(n, c).map((function(e, i) {
                                    return Object(d.c)(n.matched[c[i]].path)(n.params)
                                }
                                ))),
                                l = !1,
                                m = function(path) {
                                    n.path === path.path && I.$loading.finish && I.$loading.finish(),
                                    n.path !== path.path && I.$loading.pause && I.$loading.pause(),
                                    l || (l = !0,
                                    r(path))
                                }
                                ,
                                e.next = 8,
                                Object(d.t)(w, {
                                    route: t,
                                    from: n,
                                    next: m.bind(this)
                                });
                            case 8:
                                if (this._dateLastError = w.nuxt.dateErr,
                                this._hadError = Boolean(w.nuxt.err),
                                f = [],
                                (y = Object(d.g)(t, f)).length) {
                                    e.next = 27;
                                    break
                                }
                                return e.next = 15,
                                R.call(this, y, w.context);
                            case 15:
                                if (!l) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return");
                            case 17:
                                return v = (h.a.options || h.a).layout,
                                e.next = 20,
                                this.loadLayout("function" == typeof v ? v.call(h.a, w.context) : v);
                            case 20:
                                return P = e.sent,
                                e.next = 23,
                                R.call(this, y, w.context, P);
                            case 23:
                                if (!l) {
                                    e.next = 25;
                                    break
                                }
                                return e.abrupt("return");
                            case 25:
                                return w.context.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                e.abrupt("return", r());
                            case 27:
                                return y.forEach((function(e) {
                                    e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData,
                                    e.options.fetch = e._Ctor.options.fetch)
                                }
                                )),
                                this.setTransitions(C(y, t, n)),
                                e.prev = 29,
                                e.next = 32,
                                R.call(this, y, w.context);
                            case 32:
                                if (!l) {
                                    e.next = 34;
                                    break
                                }
                                return e.abrupt("return");
                            case 34:
                                if (!w.context._errored) {
                                    e.next = 36;
                                    break
                                }
                                return e.abrupt("return", r());
                            case 36:
                                return "function" == typeof (T = y[0].options.layout) && (T = T(w.context)),
                                e.next = 40,
                                this.loadLayout(T);
                            case 40:
                                return T = e.sent,
                                e.next = 43,
                                R.call(this, y, w.context, T);
                            case 43:
                                if (!l) {
                                    e.next = 45;
                                    break
                                }
                                return e.abrupt("return");
                            case 45:
                                if (!w.context._errored) {
                                    e.next = 47;
                                    break
                                }
                                return e.abrupt("return", r());
                            case 47:
                                S = !0,
                                e.prev = 48,
                                O = _(y),
                                e.prev = 50,
                                O.s();
                            case 52:
                                if ((x = O.n()).done) {
                                    e.next = 63;
                                    break
                                }
                                if ("function" == typeof (E = x.value).options.validate) {
                                    e.next = 56;
                                    break
                                }
                                return e.abrupt("continue", 61);
                            case 56:
                                return e.next = 58,
                                E.options.validate(w.context);
                            case 58:
                                if (S = e.sent) {
                                    e.next = 61;
                                    break
                                }
                                return e.abrupt("break", 63);
                            case 61:
                                e.next = 52;
                                break;
                            case 63:
                                e.next = 68;
                                break;
                            case 65:
                                e.prev = 65,
                                e.t0 = e.catch(50),
                                O.e(e.t0);
                            case 68:
                                return e.prev = 68,
                                O.f(),
                                e.finish(68);
                            case 71:
                                e.next = 77;
                                break;
                            case 73:
                                return e.prev = 73,
                                e.t1 = e.catch(48),
                                this.error({
                                    statusCode: e.t1.statusCode || "500",
                                    message: e.t1.message
                                }),
                                e.abrupt("return", r());
                            case 77:
                                if (S) {
                                    e.next = 80;
                                    break
                                }
                                return this.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                e.abrupt("return", r());
                            case 80:
                                return e.next = 82,
                                Promise.all(y.map(function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(o, i) {
                                        var r, c, l, h, m, _, y, v, p;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (o._path = Object(d.c)(t.matched[f[i]].path)(t.params),
                                                    o._dataRefresh = !1,
                                                    r = o._path !== k[i],
                                                    I._routeChanged && r ? o._dataRefresh = !0 : I._paramChanged && r ? (c = o.options.watchParam,
                                                    o._dataRefresh = !1 !== c) : I._queryChanged && (!0 === (l = o.options.watchQuery) ? o._dataRefresh = !0 : Array.isArray(l) ? o._dataRefresh = l.some((function(e) {
                                                        return I._diffQuery[e]
                                                    }
                                                    )) : "function" == typeof l && (N || (N = Object(d.h)(t)),
                                                    o._dataRefresh = l.apply(N[i], [t.query, n.query]))),
                                                    I._hadError || !I._isMounted || o._dataRefresh) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 6:
                                                    return h = [],
                                                    m = o.options.asyncData && "function" == typeof o.options.asyncData,
                                                    _ = Boolean(o.options.fetch) && o.options.fetch.length,
                                                    y = m && _ ? 30 : 45,
                                                    m && ((v = Object(d.q)(o.options.asyncData, w.context)).then((function(e) {
                                                        Object(d.b)(o, e),
                                                        I.$loading.increase && I.$loading.increase(y)
                                                    }
                                                    )),
                                                    h.push(v)),
                                                    I.$loading.manual = !1 === o.options.loading,
                                                    _ && ((p = o.options.fetch(w.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)),
                                                    p.then((function(e) {
                                                        I.$loading.increase && I.$loading.increase(y)
                                                    }
                                                    )),
                                                    h.push(p)),
                                                    e.abrupt("return", Promise.all(h));
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, n) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 82:
                                l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                                r()),
                                e.next = 99;
                                break;
                            case 85:
                                if (e.prev = 85,
                                e.t2 = e.catch(29),
                                "ERR_REDIRECT" !== (A = e.t2 || {}).message) {
                                    e.next = 90;
                                    break
                                }
                                return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, n, A));
                            case 90:
                                return k = [],
                                Object(d.k)(A),
                                "function" == typeof (L = (h.a.options || h.a).layout) && (L = L(w.context)),
                                e.next = 96,
                                this.loadLayout(L);
                            case 96:
                                this.error(A),
                                this.$nuxt.$emit("routeChanged", t, n, A),
                                r();
                            case 99:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[29, 85], [48, 73], [50, 65, 68, 71]])
                }
                ))),
                L.apply(this, arguments)
            }
            function I(e, n) {
                Object(d.d)(e, (function(e, n, o, c) {
                    return "object" !== Object(t.a)(e) || e.options || ((e = r.a.extend(e))._Ctor = e,
                    o.components[c] = e),
                    e
                }
                ))
            }
            function j(e) {
                var t = Boolean(this.$options.nuxt.err);
                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                var n = t ? (h.a.options || h.a).layout : e.matched[0].components.default.options.layout;
                "function" == typeof n && (n = n(w.context)),
                this.setLayout(n)
            }
            function D(e) {
                e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
            }
            function M(e, t) {
                var n = this;
                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                    var o = Object(d.h)(e)
                      , c = Object(d.g)(e)
                      , l = !1;
                    r.a.nextTick((function() {
                        o.forEach((function(e, i) {
                            if (e && !e._isDestroyed && e.constructor._dataRefresh && c[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                var t = e.constructor.options.data.call(e);
                                for (var n in t)
                                    r.a.set(e.$data, n, t[n]);
                                l = !0
                            }
                        }
                        )),
                        l && window.$nuxt.$nextTick((function() {
                            window.$nuxt.$emit("triggerScroll")
                        }
                        )),
                        D(n)
                    }
                    ))
                }
            }
            function F(e) {
                window.onNuxtReadyCbs.forEach((function(t) {
                    "function" == typeof t && t(e)
                }
                )),
                "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e),
                v.afterEach((function(t, n) {
                    r.a.nextTick((function() {
                        return e.$nuxt.$emit("routeChanged", t, n)
                    }
                    ))
                }
                ))
            }
            function U() {
                return (U = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    var n, o, c, l, h;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return w = t.app,
                                v = t.router,
                                t.store,
                                n = new r.a(w),
                                o = P.layout || "default",
                                e.next = 7,
                                n.loadLayout(o);
                            case 7:
                                return n.setLayout(o),
                                c = function() {
                                    n.$mount("#__nuxt"),
                                    v.afterEach(I),
                                    v.afterEach(j.bind(n)),
                                    v.afterEach(M.bind(n)),
                                    r.a.nextTick((function() {
                                        F(n)
                                    }
                                    ))
                                }
                                ,
                                e.next = 11,
                                Promise.all(N(w.context.route));
                            case 11:
                                if (l = e.sent,
                                n.setTransitions = n.$options.nuxt.setTransitions.bind(n),
                                l.length && (n.setTransitions(C(l, v.currentRoute)),
                                k = v.currentRoute.matched.map((function(e) {
                                    return Object(d.c)(e.path)(v.currentRoute.params)
                                }
                                ))),
                                n.$loading = {},
                                P.error && n.error(P.error),
                                v.beforeEach(O.bind(n)),
                                v.beforeEach(A.bind(n)),
                                !P.serverRendered || !Object(d.n)(P.routePath, n.context.route.path)) {
                                    e.next = 20;
                                    break
                                }
                                return e.abrupt("return", c());
                            case 20:
                                return h = function() {
                                    I(v.currentRoute, v.currentRoute),
                                    j.call(n, v.currentRoute),
                                    D(n),
                                    c()
                                }
                                ,
                                e.next = 23,
                                new Promise((function(e) {
                                    return setTimeout(e, 0)
                                }
                                ));
                            case 23:
                                A.call(n, v.currentRoute, v.currentRoute, (function(path) {
                                    if (path) {
                                        var e = v.afterEach((function(t, n) {
                                            e(),
                                            h()
                                        }
                                        ));
                                        v.push(path, void 0, (function(e) {
                                            e && S(e)
                                        }
                                        ))
                                    } else
                                        h()
                                }
                                ));
                            case 24:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            Object(h.b)(null, P.config).then((function(e) {
                return U.apply(this, arguments)
            }
            )).catch(S)
        }
        .call(this, n(56))
    },
    291: function(e, t, n) {
        "use strict";
        n(205)
    },
    292: function(e, t, n) {
        var o = n(162)(!1);
        o.push([e.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]),
        e.exports = o
    },
    293: function(e, t, n) {
        "use strict";
        n(206)
    },
    294: function(e, t, n) {
        var o = n(162)(!1);
        o.push([e.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]),
        e.exports = o
    },
    295: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "state", (function() {
            return h
        }
        )),
        n.d(t, "getters", (function() {
            return m
        }
        )),
        n.d(t, "actions", (function() {
            return f
        }
        )),
        n.d(t, "mutations", (function() {
            return _
        }
        ));
        var o = n(4)
          , r = (n(38),
        n(99))
          , c = n.n(r)
          , l = n(77)
          , d = n.n(l)
          , h = function() {
            return {
                user: null,
                balance: {},
                err: ""
            }
        }
          , m = {
            isAuthenticated: function(e) {
                return !!e.user
            },
            StateUser: function(e) {
                return e.user
            }
        }
          , f = {
            Register: function(e, form) {
                var t = this;
                return Object(o.a)(regeneratorRuntime.mark((function n() {
                    var o, r, l, d;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return o = e.dispatch,
                                form.client_id = "encodelink",
                                form.realms = "encodelink",
                                n.next = 5,
                                c.a.post("https://sso.trafficdownload1s.com/api/identity/create-user", form);
                            case 5:
                                if (!(r = n.sent) || 201 != r.data.Status) {
                                    n.next = 13;
                                    break
                                }
                                return l = {
                                    user_name: form.user_name,
                                    password: form.password
                                },
                                n.next = 10,
                                o("LogIn", l);
                            case 10:
                                return n.abrupt("return", n.sent);
                            case 13:
                                return d = r.data.MesageStatus ? JSON.parse(r.data.MesageStatus).errorMessage : r.data.Message,
                                t.$toast.error(d),
                                n.abrupt("return", !1);
                            case 16:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            LogIn: function(e, t) {
                var n = this;
                return Object(o.a)(regeneratorRuntime.mark((function o() {
                    var r, l, h;
                    return regeneratorRuntime.wrap((function(o) {
                        for (; ; )
                            switch (o.prev = o.next) {
                            case 0:
                                return r = e.commit,
                                t.client_id = "encodelink",
                                t.realms = "encodelink",
                                o.next = 5,
                                c.a.post("https://sso.trafficdownload1s.com/api/identity/Login", t).catch((function(e) {
                                    return n.$toast.error(e),
                                    !1
                                }
                                ));
                            case 5:
                                if (!(l = o.sent) || !l.data.ResultData) {
                                    o.next = 14;
                                    break
                                }
                                return l.data.ResultData.access_token = "Bearer " + l.data.ResultData.access_token,
                                d.a.set("s", l.data.ResultData.access_token),
                                o.next = 11,
                                r("setUser", l.data.ResultData);
                            case 11:
                                return o.abrupt("return", !0);
                            case 14:
                                return h = l.data.MesageStatus ? JSON.parse(l.data.MesageStatus).errorMessage : l.data.Message,
                                n.$toast.error(h),
                                o.abrupt("return", !1);
                            case 17:
                            case "end":
                                return o.stop()
                            }
                    }
                    ), o)
                }
                )))()
            },
            LogOut: function(e, t) {
                var n = this;
                return Object(o.a)(regeneratorRuntime.mark((function o() {
                    var r;
                    return regeneratorRuntime.wrap((function(o) {
                        for (; ; )
                            switch (o.prev = o.next) {
                            case 0:
                                return r = e.commit,
                                t.client_id = "encodelink",
                                t.realms = "encodelink",
                                o.next = 5,
                                c.a.post("https://sso.trafficdownload1s.com/api/identity/logout", t).catch((function(e) {
                                    return n.$toast.error(e),
                                    !1
                                }
                                ));
                            case 5:
                                return null,
                                r("logout", null),
                                d.a.remove("s"),
                                o.abrupt("return", !0);
                            case 9:
                            case "end":
                                return o.stop()
                            }
                    }
                    ), o)
                }
                )))()
            }
        }
          , _ = {
            setUser: function(e, t) {
                e.user = t
            },
            setBalance: function(e, data) {
                e.balance = data
            },
            logout: function(e, t) {
                e.user = t
            },
            updateError: function(e, t) {
                e.err = t
            }
        }
    },
    54: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return $t
        }
        )),
        n.d(t, "a", (function() {
            return ee
        }
        ));
        var o = {};
        n.r(o),
        n.d(o, "FooterAdmin", (function() {
            return he
        }
        )),
        n.d(o, "Footer", (function() {
            return pe
        }
        )),
        n.d(o, "Geochart", (function() {
            return me
        }
        )),
        n.d(o, "HeaderAdmin", (function() {
            return ge
        }
        )),
        n.d(o, "Header", (function() {
            return fe
        }
        )),
        n.d(o, "Linechart", (function() {
            return _e
        }
        )),
        n.d(o, "Loading", (function() {
            return ye
        }
        )),
        n.d(o, "Menu", (function() {
            return we
        }
        )),
        n.d(o, "ModalConfirm", (function() {
            return be
        }
        )),
        n.d(o, "Pagination", (function() {
            return ve
        }
        ));
        n(31),
        n(27),
        n(35),
        n(45),
        n(30),
        n(46);
        var r = n(4)
          , c = n(15)
          , l = (n(38),
        n(29),
        n(13),
        n(49),
        n(24),
        n(65),
        n(1))
          , d = n(81)
          , h = n(96)
          , m = n(159)
          , f = n.n(m)
          , _ = n(78)
          , y = n.n(_)
          , w = (n(32),
        n(33),
        n(160))
          , v = n(53)
          , k = n(0);
        "scrollRestoration"in window.history && (Object(k.u)("manual"),
        window.addEventListener("beforeunload", (function() {
            Object(k.u)("auto")
        }
        )),
        window.addEventListener("load", (function() {
            Object(k.u)("manual")
        }
        )));
        function P(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function T(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? P(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : P(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var S = function() {
            return Object(k.m)(Promise.all([n.e(0), n.e(15)]).then(n.bind(null, 554)))
        }
          , C = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(19)]).then(n.bind(null, 555)))
        }
          , O = function() {
            return Object(k.m)(Promise.all([n.e(0), n.e(17)]).then(n.bind(null, 556)))
        }
          , x = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(18)]).then(n.bind(null, 557)))
        }
          , E = function() {
            return Object(k.m)(Promise.all([n.e(0), n.e(20)]).then(n.bind(null, 558)))
        }
          , N = function() {
            return Object(k.m)(Promise.all([n.e(0), n.e(21)]).then(n.bind(null, 559)))
        }
          , R = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(22)]).then(n.bind(null, 560)))
        }
          , A = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(2), n.e(29)]).then(n.bind(null, 561)))
        }
          , L = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(2), n.e(23)]).then(n.bind(null, 562)))
        }
          , I = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(24)]).then(n.bind(null, 563)))
        }
          , j = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(25)]).then(n.bind(null, 564)))
        }
          , D = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(26)]).then(n.bind(null, 565)))
        }
          , M = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(2), n.e(27)]).then(n.bind(null, 566)))
        }
          , F = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(28)]).then(n.bind(null, 567)))
        }
          , U = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(2), n.e(30)]).then(n.bind(null, 568)))
        }
          , W = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(31)]).then(n.bind(null, 553)))
        }
          , G = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(32)]).then(n.bind(null, 569)))
        }
          , B = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(2), n.e(33)]).then(n.bind(null, 570)))
        }
          , $ = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(2), n.e(34)]).then(n.bind(null, 571)))
        }
          , H = function() {
            return Object(k.m)(Promise.all([n.e(1), n.e(0), n.e(16)]).then(n.bind(null, 552)))
        }
          , Y = function() {};
        l.a.use(w.a);
        var V = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(e, t, n) {
                var o = !1
                  , r = e !== t;
                n ? o = n : r && function(e) {
                    var t = Object(k.g)(e);
                    if (1 === t.length) {
                        var n = t[0].options;
                        return !1 !== (void 0 === n ? {} : n).scrollToTop
                    }
                    return t.some((function(e) {
                        var t = e.options;
                        return t && t.scrollToTop
                    }
                    ))
                }(e) && (o = {
                    x: 0,
                    y: 0
                });
                var c = window.$nuxt;
                return (!r || e.path === t.path && e.hash !== t.hash) && c.$nextTick((function() {
                    return c.$emit("triggerScroll")
                }
                )),
                new Promise((function(t) {
                    c.$once("triggerScroll", (function() {
                        if (e.hash) {
                            var n = e.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                            try {
                                document.querySelector(n) && (o = {
                                    selector: n
                                })
                            } catch (e) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        t(o)
                    }
                    ))
                }
                ))
            },
            routes: [{
                path: "/404",
                component: S,
                name: "404___vi___default"
            }, {
                path: "/ar",
                component: C,
                name: "index___ar"
            }, {
                path: "/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___vi___default"
            }, {
                path: "/de",
                component: C,
                name: "index___de"
            }, {
                path: "/en",
                component: C,
                name: "index___en"
            }, {
                path: "/es",
                component: C,
                name: "index___es"
            }, {
                path: "/forgot-password",
                component: x,
                name: "forgot-password___vi___default"
            }, {
                path: "/fr",
                component: C,
                name: "index___fr"
            }, {
                path: "/hi",
                component: C,
                name: "index___hi"
            }, {
                path: "/ja",
                component: C,
                name: "index___ja"
            }, {
                path: "/ko",
                component: C,
                name: "index___ko"
            }, {
                path: "/login",
                component: E,
                name: "login___vi___default"
            }, {
                path: "/pt",
                component: C,
                name: "index___pt"
            }, {
                path: "/register",
                component: N,
                name: "register___vi___default"
            }, {
                path: "/ru",
                component: C,
                name: "index___ru"
            }, {
                path: "/st",
                component: R,
                name: "st___vi___default"
            }, {
                path: "/th",
                component: C,
                name: "index___th"
            }, {
                path: "/user",
                component: A,
                name: "user___vi___default"
            }, {
                path: "/vi",
                component: C,
                name: "index___vi"
            }, {
                path: "/zh",
                component: C,
                name: "index___zh"
            }, {
                path: "/ar/404",
                component: S,
                name: "404___ar"
            }, {
                path: "/ar/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___ar"
            }, {
                path: "/ar/forgot-password",
                component: x,
                name: "forgot-password___ar"
            }, {
                path: "/ar/login",
                component: E,
                name: "login___ar"
            }, {
                path: "/ar/register",
                component: N,
                name: "register___ar"
            }, {
                path: "/ar/st",
                component: R,
                name: "st___ar"
            }, {
                path: "/ar/user",
                component: A,
                name: "user___ar"
            }, {
                path: "/de/404",
                component: S,
                name: "404___de"
            }, {
                path: "/de/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___de"
            }, {
                path: "/de/forgot-password",
                component: x,
                name: "forgot-password___de"
            }, {
                path: "/de/login",
                component: E,
                name: "login___de"
            }, {
                path: "/de/register",
                component: N,
                name: "register___de"
            }, {
                path: "/de/st",
                component: R,
                name: "st___de"
            }, {
                path: "/de/user",
                component: A,
                name: "user___de"
            }, {
                path: "/en/404",
                component: S,
                name: "404___en"
            }, {
                path: "/en/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___en"
            }, {
                path: "/en/forgot-password",
                component: x,
                name: "forgot-password___en"
            }, {
                path: "/en/login",
                component: E,
                name: "login___en"
            }, {
                path: "/en/register",
                component: N,
                name: "register___en"
            }, {
                path: "/en/st",
                component: R,
                name: "st___en"
            }, {
                path: "/en/user",
                component: A,
                name: "user___en"
            }, {
                path: "/es/404",
                component: S,
                name: "404___es"
            }, {
                path: "/es/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___es"
            }, {
                path: "/es/forgot-password",
                component: x,
                name: "forgot-password___es"
            }, {
                path: "/es/login",
                component: E,
                name: "login___es"
            }, {
                path: "/es/register",
                component: N,
                name: "register___es"
            }, {
                path: "/es/st",
                component: R,
                name: "st___es"
            }, {
                path: "/es/user",
                component: A,
                name: "user___es"
            }, {
                path: "/fr/404",
                component: S,
                name: "404___fr"
            }, {
                path: "/fr/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___fr"
            }, {
                path: "/fr/forgot-password",
                component: x,
                name: "forgot-password___fr"
            }, {
                path: "/fr/login",
                component: E,
                name: "login___fr"
            }, {
                path: "/fr/register",
                component: N,
                name: "register___fr"
            }, {
                path: "/fr/st",
                component: R,
                name: "st___fr"
            }, {
                path: "/fr/user",
                component: A,
                name: "user___fr"
            }, {
                path: "/hi/404",
                component: S,
                name: "404___hi"
            }, {
                path: "/hi/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___hi"
            }, {
                path: "/hi/forgot-password",
                component: x,
                name: "forgot-password___hi"
            }, {
                path: "/hi/login",
                component: E,
                name: "login___hi"
            }, {
                path: "/hi/register",
                component: N,
                name: "register___hi"
            }, {
                path: "/hi/st",
                component: R,
                name: "st___hi"
            }, {
                path: "/hi/user",
                component: A,
                name: "user___hi"
            }, {
                path: "/ja/404",
                component: S,
                name: "404___ja"
            }, {
                path: "/ja/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___ja"
            }, {
                path: "/ja/forgot-password",
                component: x,
                name: "forgot-password___ja"
            }, {
                path: "/ja/login",
                component: E,
                name: "login___ja"
            }, {
                path: "/ja/register",
                component: N,
                name: "register___ja"
            }, {
                path: "/ja/st",
                component: R,
                name: "st___ja"
            }, {
                path: "/ja/user",
                component: A,
                name: "user___ja"
            }, {
                path: "/ko/404",
                component: S,
                name: "404___ko"
            }, {
                path: "/ko/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___ko"
            }, {
                path: "/ko/forgot-password",
                component: x,
                name: "forgot-password___ko"
            }, {
                path: "/ko/login",
                component: E,
                name: "login___ko"
            }, {
                path: "/ko/register",
                component: N,
                name: "register___ko"
            }, {
                path: "/ko/st",
                component: R,
                name: "st___ko"
            }, {
                path: "/ko/user",
                component: A,
                name: "user___ko"
            }, {
                path: "/pt/404",
                component: S,
                name: "404___pt"
            }, {
                path: "/pt/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___pt"
            }, {
                path: "/pt/forgot-password",
                component: x,
                name: "forgot-password___pt"
            }, {
                path: "/pt/login",
                component: E,
                name: "login___pt"
            }, {
                path: "/pt/register",
                component: N,
                name: "register___pt"
            }, {
                path: "/pt/st",
                component: R,
                name: "st___pt"
            }, {
                path: "/pt/user",
                component: A,
                name: "user___pt"
            }, {
                path: "/ru/404",
                component: S,
                name: "404___ru"
            }, {
                path: "/ru/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___ru"
            }, {
                path: "/ru/forgot-password",
                component: x,
                name: "forgot-password___ru"
            }, {
                path: "/ru/login",
                component: E,
                name: "login___ru"
            }, {
                path: "/ru/register",
                component: N,
                name: "register___ru"
            }, {
                path: "/ru/st",
                component: R,
                name: "st___ru"
            }, {
                path: "/ru/user",
                component: A,
                name: "user___ru"
            }, {
                path: "/th/404",
                component: S,
                name: "404___th"
            }, {
                path: "/th/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___th"
            }, {
                path: "/th/forgot-password",
                component: x,
                name: "forgot-password___th"
            }, {
                path: "/th/login",
                component: E,
                name: "login___th"
            }, {
                path: "/th/register",
                component: N,
                name: "register___th"
            }, {
                path: "/th/st",
                component: R,
                name: "st___th"
            }, {
                path: "/th/user",
                component: A,
                name: "user___th"
            }, {
                path: "/user/analysis",
                component: L,
                name: "user-analysis___vi___default"
            }, {
                path: "/user/change-email",
                component: I,
                name: "user-change-email___vi___default"
            }, {
                path: "/user/change-password",
                component: j,
                name: "user-change-password___vi___default"
            }, {
                path: "/user/create",
                component: D,
                name: "user-create___vi___default"
            }, {
                path: "/user/dashboard",
                component: M,
                name: "user-dashboard___vi___default"
            }, {
                path: "/user/developer-api",
                component: F,
                name: "user-developer-api___vi___default"
            }, {
                path: "/user/manager",
                component: U,
                name: "user-manager___vi___default"
            }, {
                path: "/user/profile",
                component: W,
                name: "user-profile___vi___default"
            }, {
                path: "/user/quick",
                component: G,
                name: "user-quick___vi___default"
            }, {
                path: "/user/support",
                component: B,
                name: "user-support___vi___default"
            }, {
                path: "/user/withdraw",
                component: $,
                name: "user-withdraw___vi___default"
            }, {
                path: "/vi/404",
                component: S,
                name: "404___vi"
            }, {
                path: "/vi/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___vi"
            }, {
                path: "/vi/forgot-password",
                component: x,
                name: "forgot-password___vi"
            }, {
                path: "/vi/login",
                component: E,
                name: "login___vi"
            }, {
                path: "/vi/register",
                component: N,
                name: "register___vi"
            }, {
                path: "/vi/st",
                component: R,
                name: "st___vi"
            }, {
                path: "/vi/user",
                component: A,
                name: "user___vi"
            }, {
                path: "/zh/404",
                component: S,
                name: "404___zh"
            }, {
                path: "/zh/dang-ky-admin",
                component: O,
                name: "dang-ky-admin___zh"
            }, {
                path: "/zh/forgot-password",
                component: x,
                name: "forgot-password___zh"
            }, {
                path: "/zh/login",
                component: E,
                name: "login___zh"
            }, {
                path: "/zh/register",
                component: N,
                name: "register___zh"
            }, {
                path: "/zh/st",
                component: R,
                name: "st___zh"
            }, {
                path: "/zh/user",
                component: A,
                name: "user___zh"
            }, {
                path: "/ar/user/analysis",
                component: L,
                name: "user-analysis___ar"
            }, {
                path: "/ar/user/change-email",
                component: I,
                name: "user-change-email___ar"
            }, {
                path: "/ar/user/change-password",
                component: j,
                name: "user-change-password___ar"
            }, {
                path: "/ar/user/create",
                component: D,
                name: "user-create___ar"
            }, {
                path: "/ar/user/dashboard",
                component: M,
                name: "user-dashboard___ar"
            }, {
                path: "/ar/user/developer-api",
                component: F,
                name: "user-developer-api___ar"
            }, {
                path: "/ar/user/manager",
                component: U,
                name: "user-manager___ar"
            }, {
                path: "/ar/user/profile",
                component: W,
                name: "user-profile___ar"
            }, {
                path: "/ar/user/quick",
                component: G,
                name: "user-quick___ar"
            }, {
                path: "/ar/user/support",
                component: B,
                name: "user-support___ar"
            }, {
                path: "/ar/user/withdraw",
                component: $,
                name: "user-withdraw___ar"
            }, {
                path: "/de/user/analysis",
                component: L,
                name: "user-analysis___de"
            }, {
                path: "/de/user/change-email",
                component: I,
                name: "user-change-email___de"
            }, {
                path: "/de/user/change-password",
                component: j,
                name: "user-change-password___de"
            }, {
                path: "/de/user/create",
                component: D,
                name: "user-create___de"
            }, {
                path: "/de/user/dashboard",
                component: M,
                name: "user-dashboard___de"
            }, {
                path: "/de/user/developer-api",
                component: F,
                name: "user-developer-api___de"
            }, {
                path: "/de/user/manager",
                component: U,
                name: "user-manager___de"
            }, {
                path: "/de/user/profile",
                component: W,
                name: "user-profile___de"
            }, {
                path: "/de/user/quick",
                component: G,
                name: "user-quick___de"
            }, {
                path: "/de/user/support",
                component: B,
                name: "user-support___de"
            }, {
                path: "/de/user/withdraw",
                component: $,
                name: "user-withdraw___de"
            }, {
                path: "/en/user/analysis",
                component: L,
                name: "user-analysis___en"
            }, {
                path: "/en/user/change-email",
                component: I,
                name: "user-change-email___en"
            }, {
                path: "/en/user/change-password",
                component: j,
                name: "user-change-password___en"
            }, {
                path: "/en/user/create",
                component: D,
                name: "user-create___en"
            }, {
                path: "/en/user/dashboard",
                component: M,
                name: "user-dashboard___en"
            }, {
                path: "/en/user/developer-api",
                component: F,
                name: "user-developer-api___en"
            }, {
                path: "/en/user/manager",
                component: U,
                name: "user-manager___en"
            }, {
                path: "/en/user/profile",
                component: W,
                name: "user-profile___en"
            }, {
                path: "/en/user/quick",
                component: G,
                name: "user-quick___en"
            }, {
                path: "/en/user/support",
                component: B,
                name: "user-support___en"
            }, {
                path: "/en/user/withdraw",
                component: $,
                name: "user-withdraw___en"
            }, {
                path: "/es/user/analysis",
                component: L,
                name: "user-analysis___es"
            }, {
                path: "/es/user/change-email",
                component: I,
                name: "user-change-email___es"
            }, {
                path: "/es/user/change-password",
                component: j,
                name: "user-change-password___es"
            }, {
                path: "/es/user/create",
                component: D,
                name: "user-create___es"
            }, {
                path: "/es/user/dashboard",
                component: M,
                name: "user-dashboard___es"
            }, {
                path: "/es/user/developer-api",
                component: F,
                name: "user-developer-api___es"
            }, {
                path: "/es/user/manager",
                component: U,
                name: "user-manager___es"
            }, {
                path: "/es/user/profile",
                component: W,
                name: "user-profile___es"
            }, {
                path: "/es/user/quick",
                component: G,
                name: "user-quick___es"
            }, {
                path: "/es/user/support",
                component: B,
                name: "user-support___es"
            }, {
                path: "/es/user/withdraw",
                component: $,
                name: "user-withdraw___es"
            }, {
                path: "/fr/user/analysis",
                component: L,
                name: "user-analysis___fr"
            }, {
                path: "/fr/user/change-email",
                component: I,
                name: "user-change-email___fr"
            }, {
                path: "/fr/user/change-password",
                component: j,
                name: "user-change-password___fr"
            }, {
                path: "/fr/user/create",
                component: D,
                name: "user-create___fr"
            }, {
                path: "/fr/user/dashboard",
                component: M,
                name: "user-dashboard___fr"
            }, {
                path: "/fr/user/developer-api",
                component: F,
                name: "user-developer-api___fr"
            }, {
                path: "/fr/user/manager",
                component: U,
                name: "user-manager___fr"
            }, {
                path: "/fr/user/profile",
                component: W,
                name: "user-profile___fr"
            }, {
                path: "/fr/user/quick",
                component: G,
                name: "user-quick___fr"
            }, {
                path: "/fr/user/support",
                component: B,
                name: "user-support___fr"
            }, {
                path: "/fr/user/withdraw",
                component: $,
                name: "user-withdraw___fr"
            }, {
                path: "/hi/user/analysis",
                component: L,
                name: "user-analysis___hi"
            }, {
                path: "/hi/user/change-email",
                component: I,
                name: "user-change-email___hi"
            }, {
                path: "/hi/user/change-password",
                component: j,
                name: "user-change-password___hi"
            }, {
                path: "/hi/user/create",
                component: D,
                name: "user-create___hi"
            }, {
                path: "/hi/user/dashboard",
                component: M,
                name: "user-dashboard___hi"
            }, {
                path: "/hi/user/developer-api",
                component: F,
                name: "user-developer-api___hi"
            }, {
                path: "/hi/user/manager",
                component: U,
                name: "user-manager___hi"
            }, {
                path: "/hi/user/profile",
                component: W,
                name: "user-profile___hi"
            }, {
                path: "/hi/user/quick",
                component: G,
                name: "user-quick___hi"
            }, {
                path: "/hi/user/support",
                component: B,
                name: "user-support___hi"
            }, {
                path: "/hi/user/withdraw",
                component: $,
                name: "user-withdraw___hi"
            }, {
                path: "/ja/user/analysis",
                component: L,
                name: "user-analysis___ja"
            }, {
                path: "/ja/user/change-email",
                component: I,
                name: "user-change-email___ja"
            }, {
                path: "/ja/user/change-password",
                component: j,
                name: "user-change-password___ja"
            }, {
                path: "/ja/user/create",
                component: D,
                name: "user-create___ja"
            }, {
                path: "/ja/user/dashboard",
                component: M,
                name: "user-dashboard___ja"
            }, {
                path: "/ja/user/developer-api",
                component: F,
                name: "user-developer-api___ja"
            }, {
                path: "/ja/user/manager",
                component: U,
                name: "user-manager___ja"
            }, {
                path: "/ja/user/profile",
                component: W,
                name: "user-profile___ja"
            }, {
                path: "/ja/user/quick",
                component: G,
                name: "user-quick___ja"
            }, {
                path: "/ja/user/support",
                component: B,
                name: "user-support___ja"
            }, {
                path: "/ja/user/withdraw",
                component: $,
                name: "user-withdraw___ja"
            }, {
                path: "/ko/user/analysis",
                component: L,
                name: "user-analysis___ko"
            }, {
                path: "/ko/user/change-email",
                component: I,
                name: "user-change-email___ko"
            }, {
                path: "/ko/user/change-password",
                component: j,
                name: "user-change-password___ko"
            }, {
                path: "/ko/user/create",
                component: D,
                name: "user-create___ko"
            }, {
                path: "/ko/user/dashboard",
                component: M,
                name: "user-dashboard___ko"
            }, {
                path: "/ko/user/developer-api",
                component: F,
                name: "user-developer-api___ko"
            }, {
                path: "/ko/user/manager",
                component: U,
                name: "user-manager___ko"
            }, {
                path: "/ko/user/profile",
                component: W,
                name: "user-profile___ko"
            }, {
                path: "/ko/user/quick",
                component: G,
                name: "user-quick___ko"
            }, {
                path: "/ko/user/support",
                component: B,
                name: "user-support___ko"
            }, {
                path: "/ko/user/withdraw",
                component: $,
                name: "user-withdraw___ko"
            }, {
                path: "/pt/user/analysis",
                component: L,
                name: "user-analysis___pt"
            }, {
                path: "/pt/user/change-email",
                component: I,
                name: "user-change-email___pt"
            }, {
                path: "/pt/user/change-password",
                component: j,
                name: "user-change-password___pt"
            }, {
                path: "/pt/user/create",
                component: D,
                name: "user-create___pt"
            }, {
                path: "/pt/user/dashboard",
                component: M,
                name: "user-dashboard___pt"
            }, {
                path: "/pt/user/developer-api",
                component: F,
                name: "user-developer-api___pt"
            }, {
                path: "/pt/user/manager",
                component: U,
                name: "user-manager___pt"
            }, {
                path: "/pt/user/profile",
                component: W,
                name: "user-profile___pt"
            }, {
                path: "/pt/user/quick",
                component: G,
                name: "user-quick___pt"
            }, {
                path: "/pt/user/support",
                component: B,
                name: "user-support___pt"
            }, {
                path: "/pt/user/withdraw",
                component: $,
                name: "user-withdraw___pt"
            }, {
                path: "/ru/user/analysis",
                component: L,
                name: "user-analysis___ru"
            }, {
                path: "/ru/user/change-email",
                component: I,
                name: "user-change-email___ru"
            }, {
                path: "/ru/user/change-password",
                component: j,
                name: "user-change-password___ru"
            }, {
                path: "/ru/user/create",
                component: D,
                name: "user-create___ru"
            }, {
                path: "/ru/user/dashboard",
                component: M,
                name: "user-dashboard___ru"
            }, {
                path: "/ru/user/developer-api",
                component: F,
                name: "user-developer-api___ru"
            }, {
                path: "/ru/user/manager",
                component: U,
                name: "user-manager___ru"
            }, {
                path: "/ru/user/profile",
                component: W,
                name: "user-profile___ru"
            }, {
                path: "/ru/user/quick",
                component: G,
                name: "user-quick___ru"
            }, {
                path: "/ru/user/support",
                component: B,
                name: "user-support___ru"
            }, {
                path: "/ru/user/withdraw",
                component: $,
                name: "user-withdraw___ru"
            }, {
                path: "/th/user/analysis",
                component: L,
                name: "user-analysis___th"
            }, {
                path: "/th/user/change-email",
                component: I,
                name: "user-change-email___th"
            }, {
                path: "/th/user/change-password",
                component: j,
                name: "user-change-password___th"
            }, {
                path: "/th/user/create",
                component: D,
                name: "user-create___th"
            }, {
                path: "/th/user/dashboard",
                component: M,
                name: "user-dashboard___th"
            }, {
                path: "/th/user/developer-api",
                component: F,
                name: "user-developer-api___th"
            }, {
                path: "/th/user/manager",
                component: U,
                name: "user-manager___th"
            }, {
                path: "/th/user/profile",
                component: W,
                name: "user-profile___th"
            }, {
                path: "/th/user/quick",
                component: G,
                name: "user-quick___th"
            }, {
                path: "/th/user/support",
                component: B,
                name: "user-support___th"
            }, {
                path: "/th/user/withdraw",
                component: $,
                name: "user-withdraw___th"
            }, {
                path: "/vi/user/analysis",
                component: L,
                name: "user-analysis___vi"
            }, {
                path: "/vi/user/change-email",
                component: I,
                name: "user-change-email___vi"
            }, {
                path: "/vi/user/change-password",
                component: j,
                name: "user-change-password___vi"
            }, {
                path: "/vi/user/create",
                component: D,
                name: "user-create___vi"
            }, {
                path: "/vi/user/dashboard",
                component: M,
                name: "user-dashboard___vi"
            }, {
                path: "/vi/user/developer-api",
                component: F,
                name: "user-developer-api___vi"
            }, {
                path: "/vi/user/manager",
                component: U,
                name: "user-manager___vi"
            }, {
                path: "/vi/user/profile",
                component: W,
                name: "user-profile___vi"
            }, {
                path: "/vi/user/quick",
                component: G,
                name: "user-quick___vi"
            }, {
                path: "/vi/user/support",
                component: B,
                name: "user-support___vi"
            }, {
                path: "/vi/user/withdraw",
                component: $,
                name: "user-withdraw___vi"
            }, {
                path: "/zh/user/analysis",
                component: L,
                name: "user-analysis___zh"
            }, {
                path: "/zh/user/change-email",
                component: I,
                name: "user-change-email___zh"
            }, {
                path: "/zh/user/change-password",
                component: j,
                name: "user-change-password___zh"
            }, {
                path: "/zh/user/create",
                component: D,
                name: "user-create___zh"
            }, {
                path: "/zh/user/dashboard",
                component: M,
                name: "user-dashboard___zh"
            }, {
                path: "/zh/user/developer-api",
                component: F,
                name: "user-developer-api___zh"
            }, {
                path: "/zh/user/manager",
                component: U,
                name: "user-manager___zh"
            }, {
                path: "/zh/user/profile",
                component: W,
                name: "user-profile___zh"
            }, {
                path: "/zh/user/quick",
                component: G,
                name: "user-quick___zh"
            }, {
                path: "/zh/user/support",
                component: B,
                name: "user-support___zh"
            }, {
                path: "/zh/user/withdraw",
                component: $,
                name: "user-withdraw___zh"
            }, {
                path: "/ar/:id",
                component: H,
                name: "id___ar"
            }, {
                path: "/de/:id",
                component: H,
                name: "id___de"
            }, {
                path: "/en/:id",
                component: H,
                name: "id___en"
            }, {
                path: "/es/:id",
                component: H,
                name: "id___es"
            }, {
                path: "/fr/:id",
                component: H,
                name: "id___fr"
            }, {
                path: "/hi/:id",
                component: H,
                name: "id___hi"
            }, {
                path: "/ja/:id",
                component: H,
                name: "id___ja"
            }, {
                path: "/ko/:id",
                component: H,
                name: "id___ko"
            }, {
                path: "/pt/:id",
                component: H,
                name: "id___pt"
            }, {
                path: "/ru/:id",
                component: H,
                name: "id___ru"
            }, {
                path: "/th/:id",
                component: H,
                name: "id___th"
            }, {
                path: "/vi/:id",
                component: H,
                name: "id___vi"
            }, {
                path: "/zh/:id",
                component: H,
                name: "id___zh"
            }, {
                path: "/",
                component: C,
                name: "index___vi___default"
            }, {
                path: "/:id",
                component: H,
                name: "id___vi___default"
            }],
            fallback: !1
        };
        function z(e, t) {
            var base = t._app && t._app.basePath || V.base
              , n = new w.a(T(T({}, V), {}, {
                base: base
            }))
              , o = n.push;
            n.push = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                return o.call(this, e, t, n)
            }
            ;
            var r = n.resolve.bind(n);
            return n.resolve = function(e, t, n) {
                return "string" == typeof e && (e = Object(v.c)(e)),
                r(e, t, n)
            }
            ,
            n
        }
        var Q = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {
                    type: String,
                    default: ""
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                }
            },
            render: function(e, t) {
                var n = t.parent
                  , data = t.data
                  , o = t.props
                  , r = n.$createElement;
                data.nuxtChild = !0;
                for (var c = n, l = n.$nuxt.nuxt.transitions, d = n.$nuxt.nuxt.defaultTransition, h = 0; n; )
                    n.$vnode && n.$vnode.data.nuxtChild && h++,
                    n = n.$parent;
                data.nuxtChildDepth = h;
                var m = l[h] || d
                  , f = {};
                K.forEach((function(e) {
                    void 0 !== m[e] && (f[e] = m[e])
                }
                ));
                var _ = {};
                J.forEach((function(e) {
                    "function" == typeof m[e] && (_[e] = m[e].bind(c))
                }
                ));
                var y = _.beforeEnter;
                if (_.beforeEnter = function(e) {
                    if (window.$nuxt.$nextTick((function() {
                        window.$nuxt.$emit("triggerScroll")
                    }
                    )),
                    y)
                        return y.call(c, e)
                }
                ,
                !1 === m.css) {
                    var w = _.leave;
                    (!w || w.length < 2) && (_.leave = function(e, t) {
                        w && w.call(c, e),
                        c.$nextTick(t)
                    }
                    )
                }
                var v = r("routerView", data);
                return o.keepAlive && (v = r("keep-alive", {
                    props: o.keepAliveProps
                }, [v])),
                r("transition", {
                    props: f,
                    on: _
                }, [v])
            }
        }
          , K = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
          , J = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
          , X = {
            name: "NuxtError",
            props: {
                error: {
                    type: Object,
                    default: null
                }
            },
            computed: {
                statusCode: function() {
                    return this.error && this.error.statusCode || 500
                },
                message: function() {
                    return this.error.message || "Error"
                }
            },
            head: function() {
                return {
                    title: this.message,
                    meta: [{
                        name: "viewport",
                        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                    }]
                }
            }
        }
          , Z = (n(291),
        n(64))
          , ee = Object(Z.a)(X, (function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "__nuxt-error-page"
            }, [t("div", {
                staticClass: "error"
            }, [t("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "90",
                    height: "90",
                    fill: "#DBE1EC",
                    viewBox: "0 0 48 48"
                }
            }, [t("path", {
                attrs: {
                    d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                }
            })]), e._v(" "), t("div", {
                staticClass: "title"
            }, [e._v(e._s(e.message))]), e._v(" "), 404 === e.statusCode ? t("p", {
                staticClass: "description"
            }, [void 0 === e.$route ? t("a", {
                staticClass: "error-link",
                attrs: {
                    href: "/"
                }
            }) : t("NuxtLink", {
                staticClass: "error-link",
                attrs: {
                    to: "/"
                }
            }, [e._v("Back to the home page")])], 1) : e._e(), e._v(" "), e._m(0)])])
        }
        ), [function() {
            var e = this._self._c;
            return e("div", {
                staticClass: "logo"
            }, [e("a", {
                attrs: {
                    href: "https://nuxtjs.org",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [this._v("Nuxt")])])
        }
        ], !1, null, null, null).exports
          , te = n(11)
          , ne = (n(80),
        {
            name: "Nuxt",
            components: {
                NuxtChild: Q,
                NuxtError: ee
            },
            props: {
                nuxtChildKey: {
                    type: String,
                    default: void 0
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                },
                name: {
                    type: String,
                    default: "default"
                }
            },
            errorCaptured: function(e) {
                this.displayingNuxtError && (this.errorFromNuxtError = e,
                this.$forceUpdate())
            },
            computed: {
                routerViewKey: function() {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                        return this.nuxtChildKey || Object(k.c)(this.$route.matched[0].path)(this.$route.params);
                    var e = Object(te.a)(this.$route.matched, 1)[0];
                    if (!e)
                        return this.$route.path;
                    var t = e.components.default;
                    if (t && t.options) {
                        var n = t.options;
                        if (n.key)
                            return "function" == typeof n.key ? n.key(this.$route) : n.key
                    }
                    return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                }
            },
            beforeCreate: function() {
                l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            render: function(e) {
                var t = this;
                return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                    return t.errorFromNuxtError = !1
                }
                )),
                e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                    props: {
                        to: "/"
                    }
                }, "Go back to home")])) : (this.displayingNuxtError = !0,
                this.$nextTick((function() {
                    return t.displayingNuxtError = !1
                }
                )),
                e(ee, {
                    props: {
                        error: this.nuxt.err
                    }
                })) : e("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props
                })
            }
        })
          , oe = (n(39),
        n(47),
        n(44),
        n(48),
        n(97),
        {
            name: "NuxtLoading",
            data: function() {
                return {
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }
            },
            computed: {
                left: function() {
                    return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                }
            },
            beforeDestroy: function() {
                this.clear()
            },
            methods: {
                clear: function() {
                    clearInterval(this._timer),
                    clearTimeout(this._throttle),
                    this._timer = null
                },
                start: function() {
                    var e = this;
                    return this.clear(),
                    this.percent = 0,
                    this.reversed = !1,
                    this.skipTimerCount = 0,
                    this.canSucceed = !0,
                    this.throttle ? this._throttle = setTimeout((function() {
                        return e.startTimer()
                    }
                    ), this.throttle) : this.startTimer(),
                    this
                },
                set: function(e) {
                    return this.show = !0,
                    this.canSucceed = !0,
                    this.percent = Math.min(100, Math.max(0, Math.floor(e))),
                    this
                },
                get: function() {
                    return this.percent
                },
                increase: function(e) {
                    return this.percent = Math.min(100, Math.floor(this.percent + e)),
                    this
                },
                decrease: function(e) {
                    return this.percent = Math.max(0, Math.floor(this.percent - e)),
                    this
                },
                pause: function() {
                    return clearInterval(this._timer),
                    this
                },
                resume: function() {
                    return this.startTimer(),
                    this
                },
                finish: function() {
                    return this.percent = this.reversed ? 0 : 100,
                    this.hide(),
                    this
                },
                hide: function() {
                    var e = this;
                    return this.clear(),
                    setTimeout((function() {
                        e.show = !1,
                        e.$nextTick((function() {
                            e.percent = 0,
                            e.reversed = !1
                        }
                        ))
                    }
                    ), 500),
                    this
                },
                fail: function(e) {
                    return this.canSucceed = !1,
                    this
                },
                startTimer: function() {
                    var e = this;
                    this.show || (this.show = !0),
                    void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                    this._timer = setInterval((function() {
                        e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                        e.continuous && (e.percent >= 100 || e.percent <= 0) && (e.skipTimerCount = 1,
                        e.reversed = !e.reversed))
                    }
                    ), 100)
                }
            },
            render: function(e) {
                var t = e(!1);
                return this.show && (t = e("div", {
                    staticClass: "nuxt-progress",
                    class: {
                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                        "nuxt-progress-failed": !this.canSucceed
                    },
                    style: {
                        width: this.percent + "%",
                        left: this.left
                    }
                })),
                t
            }
        })
          , re = (n(293),
        Object(Z.a)(oe, undefined, undefined, !1, null, null, null).exports)
          , ae = Object(Z.a)({}, (function() {
            return (0,
            this._self._c)("Nuxt")
        }
        ), [], !1, null, null, null).exports;
        function ie(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return se(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return se(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    r = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        }
        function se(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        var ce = {
            _default: Object(k.s)(ae)
        }
          , ue = {
            render: function(e, t) {
                var n = e("NuxtLoading", {
                    ref: "loading"
                })
                  , o = e(this.layout || "nuxt")
                  , r = e("div", {
                    domProps: {
                        id: "__layout"
                    },
                    key: this.layoutName
                }, [o])
                  , c = e("transition", {
                    props: {
                        name: "layout",
                        mode: "out-in"
                    },
                    on: {
                        beforeEnter: function(e) {
                            window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            }
                            ))
                        }
                    }
                }, [r]);
                return e("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [n, c])
            },
            data: function() {
                return {
                    isOnline: !0,
                    layout: null,
                    layoutName: "",
                    nbFetching: 0
                }
            },
            beforeCreate: function() {
                l.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created: function() {
                this.$root.$options.$nuxt = this,
                window.$nuxt = this,
                this.refreshOnlineStatus(),
                window.addEventListener("online", this.refreshOnlineStatus),
                window.addEventListener("offline", this.refreshOnlineStatus),
                this.error = this.nuxt.error,
                this.context = this.$options.context
            },
            mounted: function() {
                var e = this;
                return Object(r.a)(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e.$loading = e.$refs.loading;
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            watch: {
                "nuxt.err": "errorChanged"
            },
            computed: {
                isOffline: function() {
                    return !this.isOnline
                },
                isFetching: function() {
                    return this.nbFetching > 0
                }
            },
            methods: {
                refreshOnlineStatus: function() {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                },
                refresh: function() {
                    var e = this;
                    return Object(r.a)(regeneratorRuntime.mark((function t() {
                        var n, o;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ((n = Object(k.h)(e.$route)).length) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return e.$loading.start(),
                                    o = n.map((function(t) {
                                        var p = [];
                                        if (t.$options.fetch && t.$options.fetch.length && p.push(Object(k.q)(t.$options.fetch, e.context)),
                                        t.$fetch)
                                            p.push(t.$fetch());
                                        else {
                                            var n, o = ie(Object(k.e)(t.$vnode.componentInstance));
                                            try {
                                                for (o.s(); !(n = o.n()).done; ) {
                                                    var component = n.value;
                                                    p.push(component.$fetch())
                                                }
                                            } catch (e) {
                                                o.e(e)
                                            } finally {
                                                o.f()
                                            }
                                        }
                                        return t.$options.asyncData && p.push(Object(k.q)(t.$options.asyncData, e.context).then((function(e) {
                                            for (var n in e)
                                                l.a.set(t.$data, n, e[n])
                                        }
                                        ))),
                                        Promise.all(p)
                                    }
                                    )),
                                    t.prev = 5,
                                    t.next = 8,
                                    Promise.all(o);
                                case 8:
                                    t.next = 15;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(5),
                                    e.$loading.fail(t.t0),
                                    Object(k.k)(t.t0),
                                    e.error(t.t0);
                                case 15:
                                    e.$loading.finish();
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[5, 10]])
                    }
                    )))()
                },
                errorChanged: function() {
                    if (this.nuxt.err) {
                        this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                        this.$loading.finish && this.$loading.finish());
                        var e = (ee.options || ee).layout;
                        "function" == typeof e && (e = e(this.context)),
                        this.setLayout(e)
                    }
                },
                setLayout: function(e) {
                    return e && ce["_" + e] || (e = "default"),
                    this.layoutName = e,
                    this.layout = ce["_" + e],
                    this.layout
                },
                loadLayout: function(e) {
                    return e && ce["_" + e] || (e = "default"),
                    Promise.resolve(ce["_" + e])
                }
            },
            components: {
                NuxtLoading: re
            }
        };
        l.a.use(d.a);
        var le = {};
        (le = function(e, t) {
            if ((e = e.default || e).commit)
                throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
            return "function" != typeof e && (e = Object.assign({}, e)),
            function(e, t) {
                if (e.state && "function" != typeof e.state) {
                    console.warn("'state' should be a method that returns an object in ".concat(t));
                    var n = Object.assign({}, e.state);
                    e = Object.assign({}, e, {
                        state: function() {
                            return n
                        }
                    })
                }
                return e
            }(e, t)
        }(n(295), "store/index.js")).modules = le.modules || {};
        var de = le instanceof Function ? le : function() {
            return new d.a.Store(Object.assign({
                strict: !1
            }, le))
        }
        ;
        n(42),
        n(43);
        var he = function() {
            return n.e(6).then(n.bind(null, 335)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , pe = function() {
            return n.e(5).then(n.bind(null, 329)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , me = function() {
            return n.e(7).then(n.bind(null, 386)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , ge = function() {
            return Promise.all([n.e(1), n.e(9)]).then(n.bind(null, 334)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , fe = function() {
            return n.e(8).then(n.bind(null, 328)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , _e = function() {
            return n.e(10).then(n.bind(null, 365)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , ye = function() {
            return n.e(11).then(n.bind(null, 363)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , we = function() {
            return n.e(12).then(n.bind(null, 333)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , be = function() {
            return n.e(13).then(n.bind(null, 367)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        }
          , ve = function() {
            return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 361)).then((function(e) {
                return ke(e.default || e)
            }
            ))
        };
        function ke(e) {
            if (!e || !e.functional)
                return e;
            var t = Array.isArray(e.props) ? e.props : Object.keys(e.props || {});
            return {
                render: function(n) {
                    var o = {}
                      , r = {};
                    for (var c in this.$attrs)
                        t.includes(c) ? r[c] = this.$attrs[c] : o[c] = this.$attrs[c];
                    return n(e, {
                        on: this.$listeners,
                        attrs: o,
                        props: r,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
            }
        }
        for (var Pe in o)
            l.a.component(Pe, o[Pe]),
            l.a.component("Lazy" + Pe, o[Pe]);
        var Te = n(105)
          , Se = n(128)
          , Ce = n(129)
          , Oe = (n(98),
        n(218));
        function xe(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function Ee(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? xe(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : xe(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var Ne = function() {
            function e(t) {
                var n = t.hideBadge
                  , o = t.language
                  , r = t.mode
                  , c = t.siteKey
                  , l = t.version
                  , d = t.size;
                if (Object(Se.a)(this, e),
                !c)
                    throw new Error("ReCaptcha error: No key provided");
                if (!l)
                    throw new Error("ReCaptcha error: No version provided");
                this._elements = {},
                this._grecaptcha = null,
                this._eventBus = null,
                this._ready = !1,
                this.hideBadge = n,
                this.language = o,
                this.siteKey = c,
                this.version = l,
                this.size = d,
                this.mode = r
            }
            var t;
            return Object(Ce.a)(e, [{
                key: "destroy",
                value: function() {
                    if (this._ready) {
                        this._ready = !1;
                        var head = document.head
                          , style = this._elements.style
                          , e = Object(Te.a)(document.head.querySelectorAll("script")).filter((function(script) {
                            return script.src.includes("recaptcha")
                        }
                        ));
                        e.length && e.forEach((function(script) {
                            return head.removeChild(script)
                        }
                        )),
                        head.contains(style) && head.removeChild(style);
                        var t = document.querySelector(".grecaptcha-badge");
                        t && t.remove()
                    }
                }
            }, {
                key: "execute",
                value: (t = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                this.init();
                            case 3:
                                if (!("grecaptcha"in window)) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", this._grecaptcha.execute(this.siteKey, {
                                    action: t
                                }));
                            case 5:
                                e.next = 10;
                                break;
                            case 7:
                                throw e.prev = 7,
                                e.t0 = e.catch(0),
                                new Error("ReCaptcha error: Failed to execute ".concat(e.t0));
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[0, 7]])
                }
                ))),
                function(e) {
                    return t.apply(this, arguments)
                }
                )
            }, {
                key: "getResponse",
                value: function(e) {
                    var t = this;
                    return new Promise((function(n, o) {
                        if ("grecaptcha"in window)
                            if ("invisible" == t.size)
                                t._grecaptcha.execute(e),
                                window.recaptchaSuccessCallback = function(e) {
                                    t._eventBus.emit("recaptcha-success", e),
                                    n(e)
                                }
                                ,
                                window.recaptchaErrorCallback = function(e) {
                                    t._eventBus.emit("recaptcha-error", e),
                                    o(e)
                                }
                                ;
                            else {
                                var r = t._grecaptcha.getResponse(e);
                                if (r)
                                    t._eventBus.emit("recaptcha-success", r),
                                    n(r);
                                else {
                                    var c = "Failed to execute";
                                    t._eventBus.emit("recaptcha-error", c),
                                    o(c)
                                }
                            }
                    }
                    ))
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    if (this._ready)
                        return this._ready;
                    this._eventBus = new Oe.EventEmitter,
                    this._elements = {
                        script: document.createElement("script"),
                        style: document.createElement("style")
                    };
                    var t = this._elements
                      , script = t.script
                      , style = t.style;
                    script.setAttribute("async", ""),
                    script.setAttribute("defer", "");
                    var n = [];
                    3 === this.version && n.push("render=" + this.siteKey),
                    this.language && n.push("hl=" + this.language);
                    var o = "https://www.recaptcha.net/recaptcha/api.js";
                    return "enterprise" === this.mode && (o = o.replace("api.js", "enterprise.js"),
                    n.push("render=" + this.siteKey)),
                    script.setAttribute("src", o + "?" + n.join("&")),
                    window.recaptchaSuccessCallback = function(t) {
                        return e._eventBus.emit("recaptcha-success", t)
                    }
                    ,
                    window.recaptchaExpiredCallback = function() {
                        return e._eventBus.emit("recaptcha-expired")
                    }
                    ,
                    window.recaptchaErrorCallback = function() {
                        return e._eventBus.emit("recaptcha-error", "Failed to execute")
                    }
                    ,
                    this._ready = new Promise((function(t, n) {
                        script.addEventListener("load", (function() {
                            3 === e.version && e.hideBadge ? (style.innerHTML = ".grecaptcha-badge { display: none }",
                            document.head.appendChild(style)) : 2 === e.version && e.hideBadge && (style.innerHTML = ".grecaptcha-badge { visibility: hidden; }",
                            document.head.appendChild(style)),
                            e._grecaptcha = window.grecaptcha.enterprise || window.grecaptcha,
                            e._grecaptcha.ready(t)
                        }
                        )),
                        script.addEventListener("error", (function() {
                            document.head.removeChild(script),
                            n("ReCaptcha error: Failed to load script"),
                            e._ready = null
                        }
                        )),
                        document.head.appendChild(script)
                    }
                    )),
                    this._ready
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return this._eventBus.on(e, t)
                }
            }, {
                key: "reset",
                value: function(e) {
                    2 !== this.version && void 0 === e || this._grecaptcha.reset(e)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = t.sitekey
                      , o = t.theme;
                    return this._grecaptcha.render(e.$el || e, {
                        sitekey: n,
                        theme: o
                    })
                }
            }]),
            e
        }()
          , Re = function(e, t) {
            var o = (e.$config || {}).recaptcha
              , r = void 0 === o ? {} : o
              , c = Ee(Ee({}, {
                hideBadge: !1,
                siteKey: "6LelXeIlAAAAAGIXv5032LDy8LJJhV4DiF-7rROW",
                version: 3
            }), r);
            l.a.component("Recaptcha", (function() {
                return n.e(37).then(n.bind(null, 572))
            }
            )),
            t("recaptcha", new Ne(c))
        }
          , Ae = n(219)
          , Le = n.n(Ae);
        l.a.use(Le.a, {
            position: "top-right",
            keepOnHover: !0,
            duration: 2e3
        });
        var Ie = [{
            name: "my-error",
            message: "Oops...Something went wrong",
            options: {
                type: "error"
            }
        }];
        Ie && Ie.forEach((function(e) {
            l.a.toasted.register(e.name, e.message, e.options)
        }
        ));
        var je = function(e, t) {
            t("toast", l.a.toasted)
        }
          , De = n(18)
          , Me = (n(157),
        n(55),
        n(132),
        n(59))
          , Fe = {
            COMPONENT_OPTIONS_KEY: "nuxtI18n",
            STRATEGIES: {
                PREFIX: "prefix",
                PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
                PREFIX_AND_DEFAULT: "prefix_and_default",
                NO_PREFIX: "no_prefix"
            },
            REDIRECT_ON_OPTIONS: {
                ALL: "all",
                ROOT: "root",
                NO_PREFIX: "no prefix"
            }
        }
          , qe = void 0
          , Ue = {
            vueI18n: {
                fallbackLocale: "vi",
                messages: {
                    de: {
                        404: {
                            results: "Không tìm thấy kết quả cho"
                        },
                        header: {
                            home: "Trang chủ",
                            dashboard: "Dashboard",
                            login: "Đăng nhập",
                            sign_up: "Đăng kí"
                        },
                        footer: {
                            sologan: "trafficdownload1s là một công cụ hoàn toàn miễn phí, nơi bạn có thể rút gọn liên kết miễn phí và kiếm thu nhập từ việc chia sẻ liên kết rút gọn đó của mình.",
                            pages: "Pages",
                            about: "Về chúng tôi",
                            contact: "Liên hệ",
                            help: "Trợ giúp",
                            faq: "Câu hỏi thường gặp",
                            privacy: "Chính sách bảo mật",
                            terms: "Điều khoản dịch vụ",
                            service: "Dịch vụ",
                            content: "Content Writing",
                            document: "Tài liệu",
                            account: "Tài khoản",
                            job: "Nghề nghiệp",
                            address: "Địa chỉ của chúng tôi",
                            add: "59 W Kendrick Ave, Hamilton, Tiểu bang New York",
                            policies: "Chính sách hỗ trợ"
                        },
                        home: {
                            title: "trafficdownload1s | Công cụ rút gọn link miễn phí",
                            description: "Công cụ hỗ trợ rút gọn link, thu gọn link, làm ngắn link, thống kê lượt truy cập, short link, hoàn toàn miễn phí mà lại còn kiếm thêm thu nhập.",
                            sologan1: "Rút gọn liên kết",
                            sologan2: "Công cụ hỗ trợ rút gọn link, thu gọn link, làm ngắn link, thống kê lượt truy cập, short link, hoàn toàn miễn phí",
                            not_found: "Đường dẫn không tồn tại",
                            placeholder: "Nhập liên kết bạn cần rút gọn tại đây",
                            shorten: "Rút gọn",
                            click_copy: "Nhấn để copy",
                            number_user: "Số người tin dùng",
                            url: "Liên kết",
                            access: "Truy cập",
                            customer: "Khách hàng",
                            copy_success: "Sao chép thành công!"
                        },
                        detail: {
                            ready: "Liên kết của bạn gần như đã sẵn sàng.",
                            second: "Giây",
                            loading: "Đang phân tích, bạn chờ trong giây lát ...",
                            get_link: "Lấy link",
                            accessing: "Bạn đang truy cập link rút gọn",
                            please_enter: "VUI LÒNG NHẬP MÃ ĐỂ TIẾP TỤC TỚI TRANG ĐÍCH",
                            confirm_code: "Nhập mã xác nhận",
                            guide: "HƯỚNG DẪN CÁCH LẤY MÃ",
                            step1: "Bước 1: Vào",
                            step12: "và gõ từ",
                            google1: "Tìm trên Google",
                            google2: "Xem trang đầu tiên tìm được",
                            copy: "Sao chép",
                            step2: "Bước 2: Cuộn xuống dưới tìm và truy cập website như trong ",
                            step22: "hình ảnh bên dưới ở trang 1",
                            step23: " (Nếu trang 1 không có hãy tìm ở trang 2, 3 hoặc 4 nhé)",
                            title_img: "Hướng dẫn cách lấy mã",
                            step3: "Bước 3: Cuộn xuống cuối trang nhấn nút lấy mã như thế này:",
                            step4: "Bước 4: Nhập mã xác nhận vào ô bên dưới.",
                            enter_code: "Nhập mã xác nhận",
                            code_fail: "Mã xác nhận không đúng, vui lòng kiểm tra lại!",
                            continue: "Tiếp tục",
                            note: "Lưu ý:",
                            content_note: "Khi website bị lỗi hoặc không tìm thấy mã. Bạn hãy nhấn vào nút bên dưới để đổi từ khóa khác nha",
                            change_keyword: "Đổi từ khóa mới",
                            video_guide: "VIDEO HƯỚNG DẪN CÁCH LẤY MÃ",
                            title_video: "Video hướng dẫn cách lấy mã",
                            warring: "Gợi ý: Bấm vào ảnh để có thể xem chi tiết hơn",
                            note_vpn: "LƯU Ý: KHÔNG SỬ DỤNG VPN HOẶC 1.1.1.1 KHI VƯỢT LINK"
                        },
                        login: {
                            login: "Đăng nhập",
                            username: "Tên đăng nhập",
                            password: "Mật khẩu",
                            err: "Tài khoản hoặc mật khẩu không chính xác",
                            forgot: "Quên mật khẩu?",
                            register: "Bạn chưa có tài khoản?",
                            register2: "Đăng ký ngay"
                        },
                        register: {
                            register: "Đăng ký",
                            first_name: "Họ",
                            first_name_invalid: "Họ không được để trống",
                            last_name: "Tên",
                            last_name_invalid: "Tên không được để trống",
                            username: "Tên đăng nhập",
                            username_invalid: "Tên đăng nhập không hợp lệ",
                            email: "Email",
                            email_invalid: "Email không hợp lệ",
                            phone_number: "Số điện thoại",
                            phone_number_invalid: "Số điện thoại không hợp lệ",
                            password: "Mật khẩu",
                            password_invalid: "Mật khẩu không hợp lệ",
                            pass_confirm: "Nhập lại mật khẩu",
                            pass_confirm_invalid: "Mật khẩu không trùng khớp",
                            login: "Bạn đã có tài khoản?",
                            login2: "Đăng nhập",
                            register_success: "Đăng ký người dùng thành công",
                            register_error: "Đăng ký người dùng thất bại"
                        },
                        errNoti: {
                            err_enter: "Thông tin điền chưa chính xác. Vui lòng kiểm tra lại!",
                            err_data: "Có lỗi xảy ra, không thể tải dữ liệu!"
                        },
                        header_admin: {
                            available: "Số dư khả dụng:",
                            hi: "Chào,",
                            profile: "Hồ sơ",
                            withdraw: "Rút tiền",
                            logout: "Đăng xuất"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Quản lý",
                            withdraw: "Rút tiền",
                            profile: "Hồ sơ",
                            change_password: "Đổi mật khẩu",
                            support: "Hỗ trợ",
                            create: "Tạo link rút gọn",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "Tháng 1",
                            month2: "Tháng 2",
                            month3: "Tháng 3",
                            month4: "Tháng 4",
                            month5: "Tháng 5",
                            month6: "Tháng 6",
                            month7: "Tháng 7",
                            month8: "Tháng 8",
                            month9: "Tháng 9",
                            month10: "Tháng 10",
                            month11: "Tháng 11",
                            month12: "Tháng 12",
                            view: "Tổng số lượng truy cập",
                            earn: "Tổng thu nhập",
                            referral: "Hoa hồng",
                            cpm: "CPM trung bình",
                            announcements: "Thông báo",
                            statistics: "Thống kê",
                            statistics_table: "Thống kê dạng bảng",
                            day: "Ngày",
                            value: "Lượt xem",
                            affiliate_income: "Thu nhập liên kết",
                            cmp_daily: "CPM hàng ngày"
                        },
                        manage: {
                            manage: "Quản lý",
                            list: "Danh sách liên kết",
                            no: "STT",
                            link: "Link trang đích",
                            code: "Link rút gọn",
                            created_date: "Ngày tạo",
                            action: "Thao tác",
                            detail: "Xem thống kê",
                            copy: "Sao chép link rút gọn",
                            remove: "Xóa",
                            remove_success: "Xóa bản ghi thành công!",
                            remove_fail: "Xóa bản ghi thất bại!",
                            showLink: "Hiển thị những liên kết đã xoá"
                        },
                        withdraw: {
                            withdraw_title: "Rút tiền",
                            withdraw: "Rút tiền",
                            available: "Số dư khả dụng",
                            withdraw_pending: "Thanh toán đang chờ",
                            total: "Tổng tiền đã rút",
                            sources: "Nguồn lưu lượng?, Bạn đã chia sẻ các liên kết ở đâu? Vui lòng ghi rõ để nhóm thanh toán duyệt lệnh và thanh toán cho bạn nhanh nhất. (Ví dụ link kênh youtube, địa chỉ website, link nhóm facebook, link nhóm telegram...)",
                            example: "Ví dụ",
                            note1: "- Khi tài khoản của bạn đạt đến số tiền tối thiểu trở lên, bạn có thể yêu cầu thu nhập của mình bằng cách nhấp vào nút ở trên. Khoản thanh toán sau đó sẽ được gửi đến tài khoản rút tiền của bạn trong những ngày làm việc không quá 1 ngày sau khi yêu cầu. Vui lòng không liên hệ với chúng tôi về các khoản thanh toán trước ngày đáo hạn.",
                            note2: "- Để nhận thanh toán của bạn, bạn cần phải điền vào phương thức thanh toán và ID thanh toán đây nếu bạn chưa làm như vậy. Bạn cũng được yêu cầu điền vào tất cả các trường bắt buộc trong phần Chi tiết Tài khoản với dữ liệu chính xác.",
                            history: "Lịch sử giao dịch",
                            no: "STT",
                            created_date: "Ngày tạo",
                            status: "Trạng thái",
                            referral: "Hoa hồng",
                            amount: "Số tiền",
                            total_amount: "Tổng cộng",
                            withdrawal_method: "Phương thức thanh toán",
                            withdrawal_account: "Tài khoản thanh toán",
                            transaction_code: "Mã giao dịch",
                            reason_reject: "Lý do từ chối",
                            pending: "Đang giải quyết",
                            approved: "Đang được duyệt",
                            cancelled: "Hủy bỏ",
                            complete: "Hoàn thành",
                            returned: "Trả lại",
                            pending_detail: "Thanh toán đang được kiểm tra bởi nhóm của chúng tôi.",
                            approved_detail: " Khoản thanh toán đã được phê duyệt và đang chờ gửi.",
                            complete_detail: "Thanh toán đã được gửi thành công đến tài khoản thanh toán của bạn.",
                            cancelled_detail: "Thanh toán đã bị hủy bỏ.",
                            returned_detail: "Thanh toán đã được trả lại cho tài khoản của bạn.",
                            not_write: "Không phải ghi",
                            warring: "Số dư của bạn chưa đủ để thực hiện thao tác này!",
                            err: "Nguồn lưu lượng không được để trống!",
                            success: "Yêu cầu rút tiền thành công!"
                        },
                        profile: {
                            404: "Đi tới trang 404",
                            profile: "Thông tin cá nhân",
                            billing_address: "Địa chỉ thanh toán",
                            name: "Họ và tên",
                            first_name: "Họ",
                            last_name: "Tên",
                            phone_number: "Số điện thoại",
                            district: "Quận huyện",
                            province: "Tỉnh / Thành phố",
                            country: "Quốc gia",
                            postal_code: "Mã bưu chính",
                            address: "Địa chỉ",
                            billing_infor: "Thông tin thanh toán",
                            withdraw_method: "Phương thức thanh toán",
                            minimum: "Số tiền rút tối thiểu",
                            withdrawal_account: "Tài khoản thanh toán",
                            note1: "Với Bank Transfer, thêm số tài khoản, tên của bạn, tên ngân hàng.",
                            note2: "Với MoMo, thêm số điện thoại đăng ký MoMo và tên của bạn trên MoMo.",
                            note3: "Với PayPal, thêm email đăng ký của bạn trên PayPal.",
                            note4: "Với Payeer, thêm số tài khoản, email và số điện thoại đăng ký của bạn trên Payeer.",
                            note5: "Với Web Money, thêm ví của bạn.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "Với ZaloPay, thêm số điện thoại, tên của bạn trên ZaloPay",
                            note8: "Với ViettelPay, thêm số điện thoại, tên của bạn trên ViettelPay",
                            note9: "Với Payoneer, thêm mail đăng ký của bạn trên Payoneer",
                            confirm: "Xác nhận",
                            update_success: "Cập nhật thông tin người dùng thành công!",
                            required: " không được để trống!",
                            status: "Điều hướng khi hết mã",
                            original: "Đi tới liên kết gốc",
                            out: "BẠN THOÁT RA VÀ VÀO LẠI LINK NHÉ!!!"
                        },
                        change_pass: {
                            title: "Mật khẩu",
                            change_pass: "Thay đổi mật khẩu",
                            old_password: "Mật khẩu hiện tại",
                            old_password_invalid: "Mật khẩu hiện tại không hợp lệ",
                            new_password: "Mật khẩu mới",
                            new_password_invalid: "Mật khẩu mới không hợp lệ",
                            confirm_new_password: "Nhập lại mật khẩu mới",
                            send: "Gửi",
                            success: "Đổi mật khẩu thành công!"
                        },
                        support: {
                            support: "Hỗ trợ",
                            title: "Tiêu đề",
                            title_invalid: "Tiêu đề không được để trống",
                            content: "Nội dung",
                            content_invalid: "Nội dung không được để trống",
                            send: "Gửi",
                            history: "Lịch sử hỗ trợ",
                            no: "STT",
                            created_date: "Ngày tạo",
                            status: "Trạng thái",
                            answer: "Câu trả lời",
                            pending: "Tiếp nhận hỗ trợ",
                            pending_detail: "Câu hỏi của bạn đã được bộ phận hỗ trợ tiếp nhận.",
                            approved: "Đã trả lời",
                            approved_detail: "Câu hỏi của bạn đã được trả lời.",
                            cancel: "Từ chối trả lời",
                            cancel_detail: "Câu hỏi của bạn bị từ chối trả lời.",
                            waring: "Bạn cần điền đẩy đủ thông tin trước khi gửi!",
                            success: "Gửi câu hỏi thành công!"
                        },
                        forgot_pass: {
                            title: "Quên mật khẩu",
                            please: "Vui lòng nhập lại email để đặt lại mật khẩu của bạn.",
                            error: "Email không chính xác",
                            submit: "Gửi",
                            success: "Thành công",
                            content: "Yêu cầu thay đổi mật khẩu thành công. Vui lòng kiểm tra mail để tiếp tục",
                            expired: "Hmm...Có lỗi rồi, bạn vui lòng ",
                            expired2: "thử lại",
                            expired3: " nha!"
                        },
                        analysis: {
                            title: "Thống kê liên kết",
                            date: "Ngày",
                            cid: "Số lần nhập chuột trong ngày"
                        },
                        api: {
                            title: "Developers API",
                            token: "Mã Token của bạn:",
                            note1: "Dành cho nhà phát triển sử dụng",
                            note2: "API",
                            note3: "sẽ trả về phản hồi trong định dạng",
                            note4: "JSON.",
                            note5: "Tất cả những gì bạn cần làm là gửi yêu cầu",
                            note6: "GET",
                            note7: "với mã token và URL rút gọn của bạn giống như sau:",
                            note8: "Bạn sẽ nhận được phản hồi giống như ví dụ bên dưới.",
                            note9: "Lưu ý",
                            note10: "Mã token và URL rút gọn của bạn là bắt buộc",
                            note11: "Nếu có lỗi xảy ra, thì chúng tôi sẽ thông báo nội dung lỗi đính kèm.",
                            note12: "Mỗi ngày được sử dụng tối đa 1000 link.",
                            note13: "Cách kiểm tra giới hạn hàng ngày còn lại của bạn:",
                            note14: "Sử dụng API trong PHP",
                            note15: "Để sử dụng API trong ứng dụng PHP của bạn, bạn cần gửi một yêu cầu GET qua file_get_contents hoặc cURL. Vui lòng kiểm tra ví dụ mẫu bên dưới:",
                            note16: "Trong đó:",
                            note17: "id: Mã rút gọn của bạn, thêm domain trafficdownload1s.com phía trước để tạo thành link rút gọn",
                            note18: "url: Đường dẫn bạn muốn rút gọn",
                            note19: "remaining: Số lượt rút gọn con lại của bạn trong ngày"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Mọi người có thể sử dụng cách rút gọn liên kết đơn giản, nhanh nhất với trafficdownload1s.com",
                            note2: "Chỉ cần sao chép liên kết bên dưới vào thanh địa chỉ vào trình duyệt web của bạn, thay đổi phần cuối cùng thành liên kết đích cần rút gọn và nhấn ENTER. trafficdownload1s sẽ sẽ chuyển hướng đến liên kết rút gọn của bạn. Sao chép nó bất cứ nơi nào bạn muốn và được trả tiền."
                        }
                    },
                    en: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    fr: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    es: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    hi: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    pt: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    ru: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    th: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    ar: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    ko: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    ja: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    zh: {
                        404: {
                            results: "No results found for"
                        },
                        header: {
                            home: "Home",
                            dashboard: "Dashboard",
                            login: "Login",
                            sign_up: "Signup"
                        },
                        footer: {
                            sologan: "trafficdownload1s is a completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            pages: "Pages",
                            about: "About us",
                            contact: "Contact",
                            help: "Help",
                            faq: "FAQs",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            service: "Service",
                            content: "Content Writing",
                            document: "Document",
                            account: "Account",
                            job: "Job",
                            address: "Our address",
                            add: "59 W Kendrick Ave, Hamilton, New York State",
                            policies: "Supporting Policies"
                        },
                        home: {
                            title: "trafficdownload1s | Free link shortener",
                            description: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            sologan1: "Shorten URLs",
                            sologan2: "Completely free tool where you can shorten your link for free and earn income from sharing your shortened link.",
                            not_found: "Url does not exist",
                            placeholder: "Enter the link you need to shorten here",
                            shorten: "Shorten",
                            click_copy: "Click to copy",
                            number_user: "Number of people who trust",
                            url: "Url",
                            access: "Access",
                            customer: "Customer",
                            copy_success: "Copy success!"
                        },
                        detail: {
                            ready: "Your link is almost ready.",
                            second: "second",
                            loading: "Analyzing, you wait a moment ...",
                            get_link: "Get link",
                            accessing: "You are accessing the shortened link",
                            please_enter: "PLEASE ENTER CODE TO GET TO ORIGINAL PAGE",
                            confirm_code: "Enter the confirmation code",
                            guide: "INSTRUCTIONS FOR GET CODE",
                            step1: "Step 1: Open",
                            step12: "and search keywords",
                            google1: "Google Search",
                            google2: "I'm Feeling Lucky'",
                            copy: "Copy",
                            step2: "Step 2: Scroll down to find and access the website as shown in ",
                            step22: "the image below on page 1",
                            step23: " (If page 1 is not available, please search on page 2, 3 or 4)",
                            title_img: "Instructions for get code",
                            step3: "Step 3: Scroll to the bottom of the page and press the get code button like this:",
                            step4: "Step 4: Enter the confirmation code in the box below.",
                            enter_code: "Enter the code",
                            code_fail: "Verification code is incorrect, please check again!",
                            continue: "Continue",
                            note: "Note:",
                            content_note: "When the website has an error or the code cannot be found. Please click the button below to change another keyword",
                            change_keyword: "Change keywords",
                            video_guide: "VIDEO INSTRUCTIONS FOR GET CODE",
                            title_video: "Video instructions for get code",
                            warring: "Hint: Click on the photo to see more details",
                            note_vpn: "NOTE: DO NOT USE VPN OR 1.1.1.1 WHEN GETTING LINKS"
                        },
                        login: {
                            login: "Login",
                            username: "Username",
                            password: "Password",
                            err: "Incorrect username or password",
                            forgot: "Forgot Password?",
                            register: "Don't have an account?",
                            register2: "Register now"
                        },
                        register: {
                            register: "Register",
                            first_name: "First name",
                            first_name_invalid: "First name invalid",
                            last_name: "Last name",
                            last_name_invalid: "Last name invalid",
                            username: "Username",
                            username_invalid: "Username invalid",
                            email: "Email",
                            email_invalid: "Email invalid",
                            phone_number: "Phone number",
                            phone_number_invalid: "Phone number invalid",
                            password: "Password",
                            password_invalid: "Password invalid",
                            pass_confirm: "Confirm password",
                            pass_confirm_invalid: "Password does not match",
                            login: "I already have an account?",
                            login2: "Login",
                            register_success: "Register succsess",
                            register_error: "Register error"
                        },
                        errNoti: {
                            err_enter: "The information entered isn't correct. Please check again!",
                            err_data: "An error occurred, data could not be loaded!"
                        },
                        header_admin: {
                            available: "Available balances:",
                            hi: "Hi,",
                            profile: "Profile",
                            withdraw: "Withdraw",
                            logout: "Logout"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Manage",
                            withdraw: "Withdraw",
                            profile: "Profile",
                            change_password: "Change password",
                            support: "Support",
                            create: "New shorten link",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "January",
                            month2: "February",
                            month3: "March",
                            month4: "April",
                            month5: "May",
                            month6: "June",
                            month7: "July",
                            month8: "August",
                            month9: "September",
                            month10: "October",
                            month11: "November",
                            month12: "December",
                            view: "Total Views",
                            earn: "Total Earnings",
                            referral: "Referral Earnings",
                            cpm: "Average CPM",
                            announcements: "Announcements",
                            statistics: "Statistics",
                            statistics_table: "Table Statistics",
                            day: "Date",
                            value: "View",
                            affiliate_income: "Link Earnings",
                            cmp_daily: "Daily CPM"
                        },
                        manage: {
                            manage: "Manage",
                            list: "List link shorten",
                            no: "No.",
                            link: "Source page link",
                            code: "Shorten link",
                            created_date: "Created date",
                            action: "Action",
                            detail: "Detail",
                            copy: "Copy link",
                            remove: "Remove",
                            remove_success: "Remove successful!",
                            remove_fail: "Remove failed!",
                            showLink: "Show removed links"
                        },
                        withdraw: {
                            withdraw_title: "Withdraw Funds",
                            withdraw: "Withdraw",
                            available: "Available Balance",
                            withdraw_pending: "Pending Withdrawn",
                            total: "Total Withdraw",
                            sources: "Traffic Sources?, Where did you share the link? Please specify for the payment team to approve and pay you the fastest. (Example link youtube channel, website address, facebook group link, telegram group link ...)",
                            example: "Example",
                            note1: "- When your account reaches the minimum amount or more, you may request your earnings by clicking the above button. The payment is then sent to your withdraw account during business days no longer than 14 days after requesting. Please do not contact us regarding payments before due dates.",
                            note2: "- In order to receive your payments you need to fill your payment method and payment ID here if you haven't done so. You are also requested to fill all the required fields in the Account Details section with accurate data.",
                            history: "Transaction history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            referral: "Referral Earnings",
                            amount: "Amount",
                            total_amount: "Total Amount",
                            withdrawal_method: "Withdrawal Method",
                            withdrawal_account: "Withdrawal Account",
                            transaction_code: "Transaction Code",
                            reason_reject: "Reason Reject",
                            pending: "Pending",
                            approved: "Approved",
                            cancelled: "Cancelled",
                            complete: "Complete",
                            returned: "Returned",
                            pending_detail: "The payment is being checked by our team.",
                            approved_detail: "The payment has been approved and is waiting to be sent.",
                            complete_detail: "The payment has been successfully sent to your payment account.",
                            cancelled_detail: "The payment has been cancelled.",
                            returned_detail: "The payment has been returned to your account.",
                            not_write: "Don't write",
                            warring: "Your balance isn't enough to perform this action!",
                            err: "Traffic sources must not be empty!",
                            success: "Withdrawal request successful!"
                        },
                        profile: {
                            404: "Go to page 404",
                            profile: "Profile",
                            billing_address: "Billing Address",
                            name: "Name",
                            first_name: "First name",
                            last_name: "Last name",
                            phone_number: "Phone number",
                            district: "District",
                            province: "Province",
                            country: "Country",
                            postal_code: "Zip code",
                            address: "Address",
                            billing_infor: "Billing Infor",
                            withdraw_method: "Withdraw Method",
                            minimum: "Minimum Withdrawal Amount",
                            withdrawal_account: "Withdrawal Account",
                            note1: "For Bank Transfer, add account number, your name, bank name.",
                            note2: "For MoMo, add your phone number and name registered on MoMo.",
                            note3: "For PayPal, add your registration email on PayPal.",
                            note4: "For Payeer, add your account number, email and registered phone number on Payeer.",
                            note5: "For Web Money, add your wallet.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "For ZaloPay, add your phone number, name on ZaloPay",
                            note8: "For ViettelPay, add your phone number, name on ViettelPay",
                            note9: "For Payoneer, add your registered email on Payoneer",
                            confirm: "Confirm",
                            update_success: "User information update successful!",
                            required: " invalid",
                            status: "Navigate when out of code",
                            original: "Go to original link",
                            out: "YOU GET OUT AND RE-enter the LINK!!!"
                        },
                        change_pass: {
                            title: "Password",
                            change_pass: "Change Password",
                            old_password: "Current Password",
                            old_password_invalid: "Current password invalid",
                            new_password: "New Password",
                            new_password_invalid: "New password invalid",
                            confirm_new_password: "Re-enter New Password",
                            send: "Submit",
                            success: "Password update successful!"
                        },
                        support: {
                            support: "Support",
                            title: "Title",
                            title_invalid: "Title invalid",
                            content: "Question",
                            content_invalid: "Question invalid",
                            send: "Send",
                            history: "Support history",
                            no: "No.",
                            created_date: "Created date",
                            status: "Status",
                            answer: "Answer",
                            pending: "Receive",
                            pending_detail: "Your question has been received by support.",
                            approved: "Answered",
                            approved_detail: "Your question has been answered.",
                            cancel: "Reject",
                            cancel_detail: "Your question has been denied.",
                            waring: "You need to fill in all the information before submitting!",
                            success: "Question submitted successfully!"
                        },
                        forgot_pass: {
                            title: "Forgot Password",
                            please: "Please re-enter your email to reset your password.",
                            error: "Email is incorrect",
                            submit: "Submit",
                            success: "Success",
                            content: "Request to change password successfully. Please check your email to continue",
                            expired: "Hmm...There's an error, please ",
                            expired2: "try again",
                            expired3: " !"
                        },
                        analysis: {
                            title: "Link Statistics",
                            date: "Date",
                            cid: "Number of clicks per day"
                        },
                        api: {
                            title: "Developers API",
                            token: "Your Tokens:",
                            note1: "For developers using an",
                            note2: "API",
                            note3: "that will return responses in",
                            note4: "JSON format.",
                            note5: "All you have to do is to send a ",
                            note6: "GET",
                            note7: "request with your token and shortened URL like this:",
                            note8: "You will get a response like the example below.",
                            note9: "Note",
                            note10: "Your token and shortened URL are required",
                            note11: "If an error occurs, we will report the error content attached.",
                            note12: "You can use up to 1000 links per day.",
                            note13: "How to check your remaining daily limit:",
                            note14: "Using APIs in PHP",
                            note15: "To use the API in your PHP application, you need to send a GET request via file_get_contents or cURL. Please check the sample example below:",
                            note16: "In there:",
                            note17: "id: Your shortcode, add the domain trafficdownload1s.com in front to create a shortened link",
                            note18: "url: The path you want to shorten",
                            note19: "remaining: Number of times to shorten your child in a day"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Everyone can use the simplest, fastest way to shorten links with trafficdownload1s.com",
                            note2: "Just copy the link below into the address bar into your web browser, change the last part to the target link to shorten, and press ENTER. trafficdownload1s will redirect to your shortened link. Copy it anywhere you want and get paid."
                        }
                    },
                    vi: {
                        404: {
                            results: "Không tìm thấy kết quả cho"
                        },
                        header: {
                            home: "Trang chủ",
                            dashboard: "Dashboard",
                            login: "Đăng nhập",
                            sign_up: "Đăng kí"
                        },
                        footer: {
                            sologan: "trafficdownload1s là một công cụ hoàn toàn miễn phí, nơi bạn có thể rút gọn liên kết miễn phí và kiếm thu nhập từ việc chia sẻ liên kết rút gọn đó của mình.",
                            pages: "Pages",
                            about: "Về chúng tôi",
                            contact: "Liên hệ",
                            help: "Trợ giúp",
                            faq: "Câu hỏi thường gặp",
                            privacy: "Chính sách bảo mật",
                            terms: "Điều khoản dịch vụ",
                            service: "Dịch vụ",
                            content: "Content Writing",
                            document: "Tài liệu",
                            account: "Tài khoản",
                            job: "Nghề nghiệp",
                            address: "Địa chỉ của chúng tôi",
                            add: "59 W Kendrick Ave, Hamilton, Tiểu bang New York",
                            policies: "Chính sách hỗ trợ"
                        },
                        home: {
                            title: "trafficdownload1s | Công cụ rút gọn link miễn phí",
                            description: "Công cụ hỗ trợ rút gọn link, thu gọn link, làm ngắn link, thống kê lượt truy cập, short link, hoàn toàn miễn phí mà lại còn kiếm thêm thu nhập.",
                            sologan1: "Rút gọn liên kết",
                            sologan2: "Công cụ hỗ trợ rút gọn link, thu gọn link, làm ngắn link, thống kê lượt truy cập, short link, hoàn toàn miễn phí và kiếm thu nhập từ việc chia sẻ liên kết rút gọn đó của mình",
                            not_found: "Đường dẫn không tồn tại",
                            placeholder: "Nhập liên kết bạn cần rút gọn tại đây",
                            shorten: "Rút gọn",
                            click_copy: "Nhấn để copy",
                            number_user: "Số người tin dùng",
                            url: "Liên kết",
                            access: "Truy cập",
                            customer: "Khách hàng",
                            copy_success: "Sao chép thành công!"
                        },
                        detail: {
                            ready: "Liên kết của bạn gần như đã sẵn sàng.",
                            second: "Giây",
                            loading: "Đang phân tích, bạn chờ trong giây lát ...",
                            get_link: "Lấy link",
                            accessing: "Bạn đang truy cập link rút gọn",
                            please_enter: "VUI LÒNG NHẬP MÃ ĐỂ TIẾP TỤC TỚI TRANG ĐÍCH",
                            confirm_code: "Nhập mã xác nhận",
                            guide: "HƯỚNG DẪN CÁCH LẤY MÃ",
                            step1: "Bước 1: Vào",
                            step12: "và gõ từ",
                            google1: "Tìm trên Google",
                            google2: "Xem trang đầu tiên tìm được",
                            copy: "Sao chép",
                            step2: "Bước 2: Cuộn xuống dưới tìm và truy cập website như trong ",
                            step22: "hình ảnh bên dưới ở trang 1",
                            step23: " (Nếu trang 1 không có hãy tìm ở trang 2, 3 hoặc 4 nhé)",
                            title_img: "Hướng dẫn cách lấy mã",
                            step3: "Bước 3: Cuộn xuống cuối trang nhấn nút lấy mã như thế này:",
                            step4: "Bước 4: Nhập mã xác nhận vào ô bên dưới.",
                            enter_code: "Nhập mã xác nhận",
                            code_fail: "Mã xác nhận không đúng, vui lòng kiểm tra lại!",
                            continue: "Tiếp tục",
                            note: "Lưu ý:",
                            content_note: "Khi website bị lỗi hoặc không tìm thấy mã. Bạn hãy nhấn vào nút bên dưới để đổi từ khóa khác nha",
                            change_keyword: "Đổi từ khóa mới",
                            video_guide: "VIDEO HƯỚNG DẪN CÁCH LẤY MÃ",
                            title_video: "Video hướng dẫn cách lấy mã",
                            warring: "Gợi ý: Bấm vào ảnh để có thể xem chi tiết hơn",
                            note_vpn: "LƯU Ý: KHÔNG SỬ DỤNG VPN HOẶC 1.1.1.1 KHI VƯỢT LINK"
                        },
                        login: {
                            login: "Đăng nhập",
                            username: "Tên đăng nhập",
                            password: "Mật khẩu",
                            err: "Tài khoản hoặc mật khẩu không chính xác",
                            forgot: "Quên mật khẩu",
                            register: "Bạn chưa có tài khoản?",
                            register2: "Đăng ký ngay"
                        },
                        register: {
                            register: "Đăng ký",
                            first_name: "Họ",
                            first_name_invalid: "Họ không được để trống",
                            last_name: "Tên",
                            last_name_invalid: "Tên không được để trống",
                            username: "Tên đăng nhập",
                            username_invalid: "Tên đăng nhập không hợp lệ",
                            email: "Email",
                            email_invalid: "Email không hợp lệ",
                            phone_number: "Số điện thoại",
                            phone_number_invalid: "Số điện thoại không hợp lệ",
                            password: "Mật khẩu",
                            password_invalid: "Mật khẩu không hợp lệ",
                            pass_confirm: "Nhập lại mật khẩu",
                            pass_confirm_invalid: "Mật khẩu không trùng khớp",
                            login: "Bạn đã có tài khoản?",
                            login2: "Đăng nhập",
                            register_success: "Đăng ký người dùng thành công",
                            register_error: "Đăng ký người dùng thất bại"
                        },
                        errNoti: {
                            err_enter: "Thông tin điền chưa chính xác. Vui lòng kiểm tra lại!",
                            err_data: "Có lỗi xảy ra, không thể tải dữ liệu!"
                        },
                        header_admin: {
                            available: "Số dư khả dụng:",
                            hi: "Chào,",
                            profile: "Hồ sơ",
                            withdraw: "Rút tiền",
                            logout: "Đăng xuất"
                        },
                        menu: {
                            dashboard: "Dashboard",
                            manager: "Quản lý",
                            withdraw: "Rút tiền",
                            profile: "Hồ sơ",
                            change_password: "Đổi mật khẩu",
                            support: "Hỗ trợ",
                            create: "Tạo link rút gọn",
                            api: "Developers API",
                            quick: "Quick link"
                        },
                        dashboard: {
                            dashboard: "Dashboard",
                            month1: "Tháng 1",
                            month2: "Tháng 2",
                            month3: "Tháng 3",
                            month4: "Tháng 4",
                            month5: "Tháng 5",
                            month6: "Tháng 6",
                            month7: "Tháng 7",
                            month8: "Tháng 8",
                            month9: "Tháng 9",
                            month10: "Tháng 10",
                            month11: "Tháng 11",
                            month12: "Tháng 12",
                            view: "Tổng số lượng truy cập",
                            earn: "Tổng thu nhập",
                            referral: "Hoa hồng",
                            cpm: "CPM trung bình",
                            announcements: "Thông báo",
                            statistics: "Thống kê",
                            statistics_table: "Thống kê dạng bảng",
                            day: "Ngày",
                            value: "Lượt xem",
                            affiliate_income: "Thu nhập liên kết",
                            cmp_daily: "CPM hàng ngày"
                        },
                        manage: {
                            manage: "Quản lý",
                            list: "Danh sách liên kết",
                            no: "STT",
                            link: "Link trang đích",
                            code: "Link rút gọn",
                            created_date: "Ngày tạo",
                            action: "Thao tác",
                            detail: "Xem thống kê",
                            copy: "Sao chép link rút gọn",
                            remove: "Xóa",
                            remove_success: "Xóa bản ghi thành công!",
                            remove_fail: "Xóa bản ghi thất bại!",
                            showLink: "Hiển thị những liên kết đã xoá"
                        },
                        withdraw: {
                            withdraw_title: "Rút tiền",
                            withdraw: "Rút tiền",
                            available: "Số dư khả dụng",
                            withdraw_pending: "Thanh toán đang chờ",
                            total: "Tổng tiền đã rút",
                            sources: "Nguồn lưu lượng?, Bạn đã chia sẻ các liên kết ở đâu? Vui lòng ghi rõ để nhóm thanh toán duyệt lệnh và thanh toán cho bạn nhanh nhất. (Ví dụ link kênh youtube, địa chỉ website, link nhóm facebook, link nhóm telegram...)",
                            example: "Ví dụ",
                            note1: "- Khi tài khoản của bạn đạt đến số tiền tối thiểu trở lên, bạn có thể yêu cầu thu nhập của mình bằng cách nhấp vào nút ở trên. Khoản thanh toán sau đó sẽ được gửi đến tài khoản rút tiền của bạn trong những ngày làm việc không quá 1 ngày sau khi yêu cầu. Vui lòng không liên hệ với chúng tôi về các khoản thanh toán trước ngày đáo hạn.",
                            note2: "- Để nhận thanh toán của bạn, bạn cần phải điền vào phương thức thanh toán và ID thanh toán đây nếu bạn chưa làm như vậy. Bạn cũng được yêu cầu điền vào tất cả các trường bắt buộc trong phần Chi tiết Tài khoản với dữ liệu chính xác.",
                            history: "Lịch sử giao dịch",
                            no: "STT",
                            created_date: "Ngày tạo",
                            status: "Trạng thái",
                            referral: "Hoa hồng",
                            amount: "Số tiền",
                            total_amount: "Tổng cộng",
                            withdrawal_method: "Phương thức thanh toán",
                            withdrawal_account: "Tài khoản thanh toán",
                            transaction_code: "Mã giao dịch",
                            reason_reject: "Lý do từ chối",
                            pending: "Đang giải quyết",
                            approved: "Đang được duyệt",
                            cancelled: "Hủy bỏ",
                            complete: "Hoàn thành",
                            returned: "Trả lại",
                            pending_detail: "Thanh toán đang được kiểm tra bởi nhóm của chúng tôi.",
                            approved_detail: " Khoản thanh toán đã được phê duyệt và đang chờ gửi.",
                            complete_detail: "Thanh toán đã được gửi thành công đến tài khoản thanh toán của bạn.",
                            cancelled_detail: "Thanh toán đã bị hủy bỏ.",
                            returned_detail: "Thanh toán đã được trả lại cho tài khoản của bạn.",
                            not_write: "Không phải ghi",
                            warring: "Số dư của bạn chưa đủ để thực hiện thao tác này!",
                            err: "Nguồn lưu lượng không được để trống!",
                            success: "Yêu cầu rút tiền thành công!"
                        },
                        profile: {
                            404: "Đi tới trang 404",
                            profile: "Thông tin cá nhân",
                            billing_address: "Địa chỉ thanh toán",
                            name: "Họ và tên",
                            first_name: "Họ",
                            last_name: "Tên",
                            phone_number: "Số điện thoại",
                            district: "Quận huyện",
                            province: "Tỉnh / Thành phố",
                            country: "Quốc gia",
                            postal_code: "Mã bưu chính",
                            address: "Địa chỉ",
                            billing_infor: "Thông tin thanh toán",
                            withdraw_method: "Phương thức thanh toán",
                            minimum: "Số tiền rút tối thiểu",
                            withdrawal_account: "Tài khoản thanh toán",
                            note1: "Với Bank Transfer, thêm số tài khoản, tên của bạn, tên ngân hàng.",
                            note2: "Với MoMo, thêm số điện thoại đăng ký MoMo và tên của bạn trên MoMo.",
                            note3: "Với PayPal, thêm email đăng ký của bạn trên PayPal.",
                            note4: "Với Payeer, thêm số tài khoản, email và số điện thoại đăng ký của bạn trên Payeer.",
                            note5: "Với Web Money, thêm ví của bạn.",
                            note6: "Với thẻ cào điện thoại, Game, thêm loại thẻ cần nhận (ví dụ game, card điện thoại), nhà mạng, nhà phát hành game. Mệnh giá của thẻ cần nhận. Số điện thoại hoặc Mail để nhận thông tin thẻ cào.",
                            note7: "Với ZaloPay, thêm số điện thoại, tên của bạn trên ZaloPay",
                            note8: "Với ViettelPay, thêm số điện thoại, tên của bạn trên ViettelPay",
                            note9: "Với Payoneer, thêm mail đăng ký của bạn trên Payoneer",
                            confirm: "Xác nhận",
                            update_success: "Cập nhật thông tin người dùng thành công!",
                            required: " không được để trống!",
                            status: "Điều hướng khi hết mã",
                            original: "Đi tới liên kết gốc",
                            out: "BẠN THOÁT RA VÀ VÀO LẠI LINK NHÉ!!!"
                        },
                        change_pass: {
                            title: "Mật khẩu",
                            change_pass: "Thay đổi mật khẩu",
                            old_password: "Mật khẩu hiện tại",
                            old_password_invalid: "Mật khẩu hiện tại không hợp lệ",
                            new_password: "Mật khẩu mới",
                            new_password_invalid: "Mật khẩu mới không hợp lệ",
                            confirm_new_password: "Nhập lại mật khẩu mới",
                            send: "Gửi",
                            success: "Đổi mật khẩu thành công!"
                        },
                        support: {
                            support: "Hỗ trợ",
                            title: "Tiêu đề",
                            title_invalid: "Tiêu đề không được để trống",
                            content: "Nội dung",
                            content_invalid: "Nội dung không được để trống",
                            send: "Gửi",
                            history: "Lịch sử hỗ trợ",
                            no: "STT",
                            created_date: "Ngày tạo",
                            status: "Trạng thái",
                            answer: "Câu trả lời",
                            pending: "Tiếp nhận hỗ trợ",
                            pending_detail: "Câu hỏi của bạn đã được bộ phận hỗ trợ tiếp nhận.",
                            approved: "Đã trả lời",
                            approved_detail: "Câu hỏi của bạn đã được trả lời.",
                            cancel: "Từ chối trả lời",
                            cancel_detail: "Câu hỏi của bạn bị từ chối trả lời.",
                            waring: "Bạn cần điền đẩy đủ thông tin trước khi gửi!",
                            success: "Gửi câu hỏi thành công!"
                        },
                        forgot_pass: {
                            title: "Quên mật khẩu",
                            please: "Vui lòng nhập lại email để đặt lại mật khẩu của bạn.",
                            error: "Email không chính xác",
                            submit: "Gửi",
                            success: "Thành công",
                            content: "Yêu cầu thay đổi mật khẩu thành công. Vui lòng kiểm tra mail để tiếp tục",
                            expired: "Hmm...Có lỗi rồi, bạn vui lòng ",
                            expired2: "thử lại",
                            expired3: " nha!"
                        },
                        analysis: {
                            title: "Thống kê liên kết",
                            date: "Ngày",
                            cid: "Số lần nhập chuột trong ngày"
                        },
                        api: {
                            title: "Developers API",
                            token: "Mã Token của bạn:",
                            note1: "Dành cho nhà phát triển sử dụng",
                            note2: "API",
                            note3: "sẽ trả về phản hồi trong định dạng",
                            note4: "JSON.",
                            note5: "Tất cả những gì bạn cần làm là gửi yêu cầu",
                            note6: "GET",
                            note7: "với mã token và URL rút gọn của bạn giống như sau:",
                            note8: "Bạn sẽ nhận được phản hồi giống như ví dụ bên dưới.",
                            note9: "Lưu ý",
                            note10: "Mã token và URL rút gọn của bạn là bắt buộc",
                            note11: "Nếu có lỗi xảy ra, thì chúng tôi sẽ thông báo nội dung lỗi đính kèm.",
                            note12: "Mỗi ngày được sử dụng tối đa 1000 link.",
                            note13: "Cách kiểm tra giới hạn hàng ngày còn lại của bạn:",
                            note14: "Sử dụng API trong PHP",
                            note15: "Để sử dụng API trong ứng dụng PHP của bạn, bạn cần gửi một yêu cầu GET qua file_get_contents hoặc cURL. Vui lòng kiểm tra ví dụ mẫu bên dưới:",
                            note16: "Trong đó:",
                            note17: "id: Mã rút gọn của bạn, thêm domain trafficdownload1s.com phía trước để tạo thành link rút gọn",
                            note18: "url: Đường dẫn bạn muốn rút gọn",
                            note19: "remaining: Số lượt rút gọn con lại của bạn trong ngày"
                        },
                        quick: {
                            title: "Quick link",
                            note1: "Mọi người có thể sử dụng cách rút gọn liên kết đơn giản, nhanh nhất với trafficdownload1s.com",
                            note2: "Chỉ cần sao chép liên kết bên dưới vào thanh địa chỉ vào trình duyệt web của bạn, thay đổi phần cuối cùng thành liên kết đích cần rút gọn và nhấn ENTER. trafficdownload1s sẽ sẽ chuyển hướng đến liên kết rút gọn của bạn. Sao chép nó bất cứ nơi nào bạn muốn và được trả tiền."
                        }
                    }
                }
            },
            vueI18nLoader: !1,
            locales: ["en", "vi", "fr", "es", "hi", "pt", "ru", "th", "ar", "ko", "ja", "zh", "de"],
            defaultLocale: "vi",
            defaultDirection: "ltr",
            routesNameSeparator: "___",
            defaultLocaleRouteNameSuffix: "default",
            sortRoutes: !0,
            strategy: "prefix_and_default",
            lazy: !1,
            langDir: null,
            rootRedirect: null,
            detectBrowserLanguage: {
                alwaysRedirect: !1,
                cookieAge: 365,
                cookieCrossOrigin: !1,
                cookieDomain: null,
                cookieKey: "i18n_redirected",
                cookieSecure: !1,
                fallbackLocale: "",
                redirectOn: "root",
                useCookie: !0
            },
            differentDomains: !1,
            baseUrl: "",
            vuex: {
                moduleName: "i18n",
                syncRouteParams: !0
            },
            parsePages: !0,
            pages: {},
            skipSettingLocaleOnNavigate: !1,
            onBeforeLanguageSwitch: function() {},
            onLanguageSwitched: function() {
                return null
            },
            normalizedLocales: [{
                code: "en"
            }, {
                code: "vi"
            }, {
                code: "fr"
            }, {
                code: "es"
            }, {
                code: "hi"
            }, {
                code: "pt"
            }, {
                code: "ru"
            }, {
                code: "th"
            }, {
                code: "ar"
            }, {
                code: "ko"
            }, {
                code: "ja"
            }, {
                code: "zh"
            }, {
                code: "de"
            }],
            localeCodes: ["en", "vi", "fr", "es", "hi", "pt", "ru", "th", "ar", "ko", "ja", "zh", "de"],
            additionalMessages: []
        }
          , We = (n(313),
        n(166),
        n(103),
        n(317),
        n(77))
          , Ge = n.n(We);
        function Be(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function $e(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return He(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return He(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    r = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        }
        function He(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function Ye(text) {
            return "[@nuxtjs/i18n] ".concat(text)
        }
        function Ve(e, t) {
            var n, o = [], r = [], c = $e(e);
            try {
                for (c.s(); !(n = c.n()).done; ) {
                    var l = n.value
                      , code = l.code
                      , d = l.iso || code;
                    r.push({
                        code: code,
                        iso: d
                    })
                }
            } catch (e) {
                c.e(e)
            } finally {
                c.f()
            }
            var h, m = $e(t.entries());
            try {
                var f = function() {
                    var e = Object(te.a)(h.value, 2)
                      , n = e[0]
                      , c = e[1]
                      , l = r.find((function(e) {
                        return e.iso.toLowerCase() === c.toLowerCase()
                    }
                    ));
                    if (l)
                        return o.push({
                            code: l.code,
                            score: 1 - n / t.length
                        }),
                        "break"
                };
                for (m.s(); !(h = m.n()).done; ) {
                    if ("break" === f())
                        break
                }
            } catch (e) {
                m.e(e)
            } finally {
                m.f()
            }
            var _, y = $e(t.entries());
            try {
                var w = function() {
                    var e = Object(te.a)(_.value, 2)
                      , n = e[0]
                      , c = e[1].split("-")[0].toLowerCase()
                      , l = r.find((function(e) {
                        return e.iso.split("-")[0].toLowerCase() === c
                    }
                    ));
                    if (l)
                        return o.push({
                            code: l.code,
                            score: .999 - n / t.length
                        }),
                        "break"
                };
                for (y.s(); !(_ = y.n()).done; ) {
                    if ("break" === w())
                        break
                }
            } catch (e) {
                y.e(e)
            } finally {
                y.f()
            }
            return o.length > 1 && o.sort((function(e, t) {
                return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
            }
            )),
            o.length ? o[0].code : void 0
        }
        function ze(e, t) {
            var n;
            if (n = window.location.host) {
                var o = e.find((function(e) {
                    return e.domain === n
                }
                ));
                if (o)
                    return o.code
            }
            return ""
        }
        function Qe(e) {
            return new RegExp("^/(".concat(e.join("|"), ")(?:/|$)"))
        }
        function Ke(e, t) {
            var n = t.routesNameSeparator
              , o = t.defaultLocaleRouteNameSuffix
              , r = "(".concat(e.join("|"), ")")
              , c = "(?:".concat(n).concat(o, ")?")
              , l = new RegExp("".concat(n).concat(r).concat(c, "$"))
              , d = Qe(e);
            return function(e) {
                if (e.name) {
                    var t = e.name.match(l);
                    if (t && t.length > 1)
                        return t[1]
                } else if (e.path) {
                    var n = e.path.match(d);
                    if (n && n.length > 1)
                        return n[1]
                }
                return ""
            }
        }
        function Je(e, t) {
            var n, o = t.useCookie, r = t.cookieKey, c = t.localeCodes;
            if (o && ((n = Ge.a.get(r)) && c.includes(n)))
                return n
        }
        function Xe(e, t, n) {
            var o = n.useCookie
              , r = n.cookieAge
              , l = n.cookieDomain
              , d = n.cookieKey
              , h = n.cookieSecure
              , m = n.cookieCrossOrigin;
            if (o) {
                var f = function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? Be(Object(source), !0).forEach((function(t) {
                            Object(c.a)(e, t, source[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Be(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }
                        ))
                    }
                    return e
                }({
                    expires: r,
                    path: "/",
                    sameSite: m ? "none" : "lax",
                    secure: m || h
                }, l ? {
                    domain: l
                } : {});
                Ge.a.set(d, e, f)
            }
        }
        function Ze(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return et(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return et(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    r = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        }
        function et(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function tt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function nt(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? tt(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : tt(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        function ot(e, t) {
            return at.apply(this, arguments)
        }
        function at() {
            return (at = Object(r.a)(regeneratorRuntime.mark((function e(t, n) {
                var o, r, c;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            o = t.app,
                            (r = o.i18n).loadedLanguages || (r.loadedLanguages = []),
                            r.loadedLanguages.includes(n) || ((c = Ue.normalizedLocales.find((function(e) {
                                return e.code === n
                            }
                            ))) ? c.file || console.warn(Ye("Could not find lang file for locale ".concat(n))) : console.warn(Ye('Attempted to load messages for non-existant locale code "'.concat(n, '"'))));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function it(e, t, n, o) {
            var r = o.differentDomains
              , c = o.normalizedLocales;
            if ("function" == typeof e)
                return e(t);
            if (r && n) {
                var l = st(n, t.req, {
                    normalizedLocales: c
                });
                if (l)
                    return l
            }
            return e
        }
        function st(e, t, n) {
            var o, r = n.normalizedLocales.find((function(t) {
                return t.code === e
            }
            ));
            if (r && r.domain)
                return Object(Me.hasProtocol)(r.domain) ? r.domain : (o = window.location.protocol.split(":")[0],
                "".concat(o, "://").concat(r.domain));
            console.warn(Ye("Could not find domain name for locale ".concat(e)))
        }
        function ct(e, t, n) {
            var o = {
                namespaced: !0,
                state: function() {
                    return nt({}, t.syncRouteParams ? {
                        routeParams: {}
                    } : {})
                },
                actions: nt({}, t.syncRouteParams ? {
                    setRouteParams: function(e, t) {
                        (0,
                        e.commit)("setRouteParams", t)
                    }
                } : {}),
                mutations: nt({}, t.syncRouteParams ? {
                    setRouteParams: function(e, t) {
                        e.routeParams = t
                    }
                } : {}),
                getters: nt({}, t.syncRouteParams ? {
                    localeRouteParams: function(e) {
                        var t = e.routeParams;
                        return function(e) {
                            return t && t[e] || {}
                        }
                    }
                } : {})
            };
            e.registerModule(t.moduleName, o, {
                preserveState: !!e.state[t.moduleName]
            })
        }
        function ut(e, t, n, o) {
            var r, c = o || n, l = Ze(t);
            try {
                for (l.s(); !(r = l.n()).done; ) {
                    var d, h = r.value, m = Ze(c);
                    try {
                        for (m.s(); !(d = m.n()).done; ) {
                            var f = d.value
                              , _ = e.getLocaleMessage(f);
                            e.mergeLocaleMessage(f, h[f]),
                            e.mergeLocaleMessage(f, _)
                        }
                    } catch (e) {
                        m.e(e)
                    } finally {
                        m.f()
                    }
                }
            } catch (e) {
                l.e(e)
            } finally {
                l.f()
            }
        }
        var lt = n(222)
          , ht = (n(318),
        n(94))
          , pt = function() {
            var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var n, o, r, c, l, d, h;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = t.app,
                            !t.isHMR) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.next = 5,
                            n.i18n.__onNavigate(t.route);
                        case 5:
                            o = e.sent,
                            r = Object(te.a)(o, 3),
                            c = r[0],
                            l = r[1],
                            d = r[2],
                            c && l && (h = d ? t.route.query : void 0,
                            t.redirect(c, l, h));
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        ht.a.nuxti18n = pt;
        var mt = ["params"];
        function gt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function ft(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? gt(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : gt(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        function _t(e, t) {
            var n = bt.call(this, e, t);
            return n ? n.route.redirectedFrom || n.route.fullPath : ""
        }
        function yt(e, t) {
            var n = bt.call(this, e, t);
            return n ? n.route : void 0
        }
        function wt(e, t) {
            var n = bt.call(this, e, t);
            return n ? n.location : void 0
        }
        function bt(e, t) {
            if (e) {
                var n = this.i18n;
                if (t = t || n.locale) {
                    "string" == typeof e && (e = "/" === e[0] ? {
                        path: e
                    } : {
                        name: e
                    });
                    var o = Object.assign({}, e);
                    if (o.path && !o.name) {
                        var r = this.router.resolve(o).route
                          , c = this.getRouteBaseName(r);
                        if (c)
                            o = {
                                name: Pt(c, t),
                                params: r.params,
                                query: r.query,
                                hash: r.hash
                            };
                        else
                            !(t === Ue.defaultLocale && [Fe.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Fe.STRATEGIES.PREFIX_AND_DEFAULT].includes(Ue.strategy) || Ue.strategy === Fe.STRATEGIES.NO_PREFIX || n.differentDomains) && (o.path = "/".concat(t).concat(o.path)),
                            o.path = qe ? Object(Me.withTrailingSlash)(o.path, !0) : Object(Me.withoutTrailingSlash)(o.path, !0)
                    } else {
                        o.name || o.path || (o.name = this.getRouteBaseName()),
                        o.name = Pt(o.name, t);
                        var l = o.params;
                        l && void 0 === l[0] && l.pathMatch && (l[0] = l.pathMatch)
                    }
                    var d = this.router.resolve(o);
                    return d.route.name ? d : this.router.resolve(e)
                }
            }
        }
        function vt(e) {
            var t = this.getRouteBaseName();
            if (!t)
                return "";
            var n = this.i18n
              , o = this.route
              , r = this.store
              , c = o.params
              , l = Object(lt.a)(o, mt)
              , d = {};
            Ue.vuex && Ue.vuex.syncRouteParams && r && (d = r.getters["".concat(Ue.vuex.moduleName, "/localeRouteParams")](e));
            var h = Object.assign({}, l, {
                name: t,
                params: ft(ft(ft({}, c), d), {}, {
                    0: c.pathMatch
                })
            })
              , path = this.localePath(h, e);
            if (n.differentDomains) {
                var m = {
                    differentDomains: n.differentDomains,
                    normalizedLocales: Ue.normalizedLocales
                }
                  , f = st(e, this.req, m);
                f && (path = f + path)
            }
            return path
        }
        function kt(e) {
            var t = void 0 !== e ? e : this.route;
            if (t && t.name)
                return t.name.split(Ue.routesNameSeparator)[0]
        }
        function Pt(e, t) {
            var n = e + (Ue.strategy === Fe.STRATEGIES.NO_PREFIX ? "" : Ue.routesNameSeparator + t);
            return t === Ue.defaultLocale && Ue.strategy === Fe.STRATEGIES.PREFIX_AND_DEFAULT && (n += Ue.routesNameSeparator + Ue.defaultLocaleRouteNameSuffix),
            n
        }
        var Tt = function(e) {
            return function() {
                var t = {
                    getRouteBaseName: this.getRouteBaseName,
                    i18n: this.$i18n,
                    localePath: this.localePath,
                    localeRoute: this.localeRoute,
                    localeLocation: this.localeLocation,
                    req: null,
                    route: this.$route,
                    router: this.$router,
                    store: this.$store
                };
                return e.call.apply(e, [t].concat(Array.prototype.slice.call(arguments)))
            }
        }
          , St = function(e, t) {
            return function() {
                var n = e.app
                  , o = (e.req,
                e.route)
                  , r = e.store
                  , c = {
                    getRouteBaseName: n.getRouteBaseName,
                    i18n: n.i18n,
                    localePath: n.localePath,
                    localeLocation: n.localeLocation,
                    localeRoute: n.localeRoute,
                    req: null,
                    route: o,
                    router: n.router,
                    store: r
                };
                return t.call.apply(t, [c].concat(Array.prototype.slice.call(arguments)))
            }
        }
          , Ct = {
            install: function(e) {
                e.mixin({
                    methods: {
                        localePath: Tt(_t),
                        localeRoute: Tt(yt),
                        localeLocation: Tt(wt),
                        switchLocalePath: Tt(vt),
                        getRouteBaseName: Tt(kt)
                    }
                })
            }
        }
          , Ot = function(e) {
            l.a.use(Ct);
            var t = e.app
              , n = e.store;
            t.localePath = e.localePath = St(e, _t),
            t.localeRoute = e.localeRoute = St(e, yt),
            t.localeLocation = e.localeLocation = St(e, wt),
            t.switchLocalePath = e.switchLocalePath = St(e, vt),
            t.getRouteBaseName = e.getRouteBaseName = St(e, kt),
            n && (n.localePath = t.localePath,
            n.localeRoute = t.localeRoute,
            n.localeLocation = t.localeLocation,
            n.switchLocalePath = t.switchLocalePath,
            n.getRouteBaseName = t.getRouteBaseName)
        }
          , xt = (n(156),
        n(161))
          , Et = n(79);
        n(224),
        n(225),
        n(226),
        n(227),
        n(228),
        n(229),
        n(230),
        n(231),
        n(232),
        n(233),
        n(234),
        n(235),
        n(236),
        n(237),
        n(164);
        function Nt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function Rt(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Nt(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Nt(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        function At(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return Lt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Lt(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    r = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        }
        function Lt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function It() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.addDirAttribute
              , n = void 0 !== t && t
              , o = e.addSeoAttributes
              , r = void 0 !== o && o;
            if (!this.$i18n)
                return {};
            var c = {
                htmlAttrs: {},
                link: [],
                meta: []
            }
              , l = this.$i18n.localeProperties
              , d = l.iso
              , m = l.dir || Ue.defaultDirection;
            if (n && (c.htmlAttrs.dir = m),
            r && (h.a.hasMetaInfo ? h.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales) {
                d && (c.htmlAttrs.lang = d);
                var f = this.$i18n.locales;
                _.bind(this)(f, this.$i18n.__baseUrl, c.link),
                y.bind(this)(this.$i18n.__baseUrl, c.link, r),
                w.bind(this)(l, d, c.meta),
                v.bind(this)(f, d, c.meta)
            }
            function _(e, t, link) {
                if (Ue.strategy !== Fe.STRATEGIES.NO_PREFIX) {
                    var n, o = new Map, r = At(e);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var c = n.value
                              , l = c.iso;
                            if (l) {
                                var d = l.split("-")
                                  , h = Object(te.a)(d, 2)
                                  , m = h[0]
                                  , f = h[1];
                                m && f && (c.isCatchallLocale || !o.has(m)) && o.set(m, c),
                                o.set(l, c)
                            } else
                                console.warn(Ye("Locale ISO code is required to generate alternate link"))
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    var _, y = At(o.entries());
                    try {
                        for (y.s(); !(_ = y.n()).done; ) {
                            var w = Object(te.a)(_.value, 2)
                              , v = w[0]
                              , k = w[1]
                              , T = this.switchLocalePath(k.code);
                            T && link.push({
                                hid: "i18n-alt-".concat(v),
                                rel: "alternate",
                                href: P(T, t),
                                hreflang: v
                            })
                        }
                    } catch (e) {
                        y.e(e)
                    } finally {
                        y.f()
                    }
                    if (Ue.defaultLocale) {
                        var S = this.switchLocalePath(Ue.defaultLocale);
                        S && link.push({
                            hid: "i18n-xd",
                            rel: "alternate",
                            href: P(S, t),
                            hreflang: "x-default"
                        })
                    }
                }
            }
            function y(e, link, t) {
                var n = this.localeRoute(Rt(Rt({}, this.$route), {}, {
                    name: this.getRouteBaseName()
                }));
                if (n) {
                    var o = P(n.path, e)
                      , r = "boolean" != typeof t && t.canonicalQueries || [];
                    r.length && function() {
                        var e, t = n.query, c = new URLSearchParams, l = At(r);
                        try {
                            var d = function() {
                                var n = e.value;
                                if (n in t) {
                                    var o = t[n];
                                    Array.isArray(o) ? o.forEach((function(e) {
                                        return c.append(n, e || "")
                                    }
                                    )) : c.append(n, o || "")
                                }
                            };
                            for (l.s(); !(e = l.n()).done; )
                                d()
                        } catch (e) {
                            l.e(e)
                        } finally {
                            l.f()
                        }
                        var h = c.toString();
                        h && (o = "".concat(o, "?").concat(h))
                    }(),
                    link.push({
                        hid: "i18n-can",
                        rel: "canonical",
                        href: o
                    })
                }
            }
            function w(e, t, meta) {
                e && t && meta.push({
                    hid: "i18n-og",
                    property: "og:locale",
                    content: k(t)
                })
            }
            function v(e, t, meta) {
                var n = e.filter((function(e) {
                    var n = e.iso;
                    return n && n !== t
                }
                ));
                if (n.length) {
                    var o = n.map((function(e) {
                        return {
                            hid: "i18n-og-alt-".concat(e.iso),
                            property: "og:locale:alternate",
                            content: k(e.iso)
                        }
                    }
                    ));
                    meta.push.apply(meta, Object(Te.a)(o))
                }
            }
            function k(e) {
                return (e || "").replace(/-/g, "_")
            }
            function P(e, t) {
                return e.match(/^https?:\/\//) ? e : t + e
            }
            return c
        }
        function jt(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return Dt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Dt(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    r = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw r
                    }
                }
            }
        }
        function Dt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        l.a.use(xt.a);
        var Mt = function() {
            var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var n, o, c, d, h, m, f, _, y, w, v, k, P, T, S, C, O, x, E, N, R, A, L, I, j, D, M, F, U, W, G, B, $, H, Y, V, z, Q, K, J;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            n = t.app,
                            o = t.route,
                            c = t.store,
                            d = t.req,
                            t.res,
                            h = t.redirect,
                            Ue.vuex && c && ct(c, Ue.vuex, Ue.localeCodes),
                            m = Ue.lazy,
                            m && (!0 === m || !0 !== m.skipNuxtState),
                            e.next = 9;
                            break;
                        case 7:
                            f = e.sent.default,
                            t.beforeNuxtRender((function(e) {
                                var t = e.nuxtState
                                  , o = {}
                                  , r = n.i18n
                                  , c = r.fallbackLocale
                                  , l = r.locale;
                                if (l && l !== c) {
                                    var d = n.i18n._getMessages()[l];
                                    if (d)
                                        try {
                                            f(d),
                                            o[l] = d
                                        } catch (e) {}
                                }
                                t.__i18n = {
                                    langs: o
                                }
                            }
                            ));
                        case 9:
                            if (_ = Ue.detectBrowserLanguage,
                            y = _.alwaysRedirect,
                            w = _.fallbackLocale,
                            v = _.redirectOn,
                            k = _.useCookie,
                            P = _.cookieAge,
                            T = _.cookieKey,
                            S = _.cookieDomain,
                            C = _.cookieSecure,
                            O = _.cookieCrossOrigin,
                            x = Ke(Ue.localeCodes, {
                                routesNameSeparator: Ue.routesNameSeparator,
                                defaultLocaleRouteNameSuffix: Ue.defaultLocaleRouteNameSuffix
                            }),
                            E = function() {
                                var e = Object(r.a)(regeneratorRuntime.mark((function e(o) {
                                    var r, c, d, m, f, _, y, w, v, P, T, S, C, O, E, N, R, A, L, I = arguments;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if (r = I.length > 1 && void 0 !== I[1] ? I[1] : {},
                                                c = r.initialSetup,
                                                d = void 0 !== c && c,
                                                o) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 3:
                                                if (d || !n.i18n.differentDomains) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 5:
                                                if (m = n.i18n.locale,
                                                o !== m) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 8:
                                                if (!(f = n.i18n.onBeforeLanguageSwitch(m, o, d, t)) || !n.i18n.localeCodes.includes(f)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                if (f !== m) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 12:
                                                o = f;
                                            case 13:
                                                if (k && n.i18n.setLocaleCookie(o),
                                                !Ue.langDir) {
                                                    e.next = 30;
                                                    break
                                                }
                                                if (_ = n.i18n.fallbackLocale,
                                                !Ue.lazy) {
                                                    e.next = 26;
                                                    break
                                                }
                                                if (!_) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return y = [],
                                                Array.isArray(_) ? y = _.map((function(e) {
                                                    return ot(t, e)
                                                }
                                                )) : "object" === Object(De.a)(_) ? (_[o] && (y = y.concat(_[o].map((function(e) {
                                                    return ot(t, e)
                                                }
                                                )))),
                                                _.default && (y = y.concat(_.default.map((function(e) {
                                                    return ot(t, e)
                                                }
                                                ))))) : o !== _ && y.push(ot(t, _)),
                                                e.next = 22,
                                                Promise.all(y);
                                            case 22:
                                                return e.next = 24,
                                                ot(t, o);
                                            case 24:
                                                e.next = 28;
                                                break;
                                            case 26:
                                                return e.next = 28,
                                                Promise.all(Ue.localeCodes.map((function(e) {
                                                    return ot(t, e)
                                                }
                                                )));
                                            case 28:
                                                e.next = 31;
                                                break;
                                            case 30:
                                                ut(n.i18n, Ue.additionalMessages, Ue.localeCodes);
                                            case 31:
                                                for (n.i18n.locale = o,
                                                w = Ue.normalizedLocales.find((function(e) {
                                                    return e.code === o
                                                }
                                                )) || {
                                                    code: o
                                                },
                                                v = 0,
                                                P = Object.keys(n.i18n.localeProperties); v < P.length; v++)
                                                    T = P[v],
                                                    n.i18n.localeProperties[T] = void 0;
                                                for (S = 0,
                                                C = Object.entries(w); S < C.length; S++)
                                                    O = Object(te.a)(C[S], 2),
                                                    E = O[0],
                                                    N = O[1],
                                                    l.a.set(n.i18n.localeProperties, E, Object(Et.a)(N));
                                                R = t.route,
                                                A = "",
                                                !1 || n.i18n.differentDomains || Ue.strategy === Fe.STRATEGIES.NO_PREFIX || x(R) === o && (Ue.strategy !== Fe.STRATEGIES.PREFIX_AND_DEFAULT || o !== Ue.defaultLocale) || !(L = n.switchLocalePath(o) || n.localePath(R.fullPath, o)) || Object(Me.isEqual)(L, R.fullPath) || L.startsWith("//") || (A = L),
                                                d ? n.i18n.__redirect = A : (n.i18n.onLanguageSwitched(m, o),
                                                A && h(A));
                                            case 40:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            N = function() {
                                var e = Object(r.a)(regeneratorRuntime.mark((function e(o) {
                                    var r, path, c, l, d;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if ("/" !== o.path || !Ue.rootRedirect) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return r = 302,
                                                path = Ue.rootRedirect,
                                                "string" != typeof Ue.rootRedirect && (r = Ue.rootRedirect.statusCode,
                                                path = Ue.rootRedirect.path),
                                                e.abrupt("return", [r, "/".concat(path), !0]);
                                            case 5:
                                                if (!(c = n.i18n.__redirect)) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return n.i18n.__redirect = null,
                                                e.abrupt("return", [302, c]);
                                            case 9:
                                                if (l = {
                                                    differentDomains: Ue.differentDomains,
                                                    normalizedLocales: Ue.normalizedLocales
                                                },
                                                n.i18n.__baseUrl = it(Ue.baseUrl, t, n.i18n.locale, l),
                                                d = Ue.detectBrowserLanguage && I(o) || !Ue.differentDomains && Ue.strategy !== Fe.STRATEGIES.NO_PREFIX && x(o) || n.i18n.locale || n.i18n.defaultLocale || "",
                                                !Ue.skipSettingLocaleOnNavigate) {
                                                    e.next = 17;
                                                    break
                                                }
                                                n.i18n.__pendingLocale = d,
                                                n.i18n.__pendingLocalePromise = new Promise((function(e) {
                                                    n.i18n.__resolvePendingLocalePromise = e
                                                }
                                                )),
                                                e.next = 19;
                                                break;
                                            case 17:
                                                return e.next = 19,
                                                n.i18n.setLocale(d);
                                            case 19:
                                                return e.abrupt("return", [null, null]);
                                            case 20:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            R = function() {
                                var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if (n.i18n.__pendingLocale) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return e.next = 4,
                                                n.i18n.setLocale(n.i18n.__pendingLocale);
                                            case 4:
                                                n.i18n.__resolvePendingLocalePromise(""),
                                                n.i18n.__pendingLocale = null;
                                            case 6:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            A = function() {
                                var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if (!n.i18n.__pendingLocale) {
                                                    e.next = 3;
                                                    break
                                                }
                                                return e.next = 3,
                                                n.i18n.__pendingLocalePromise;
                                            case 3:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            L = function() {
                                return "undefined" != typeof navigator && navigator.languages ? Ve(Ue.normalizedLocales, navigator.languages) : d && void 0 !== d.headers["accept-language"] ? Ve(Ue.normalizedLocales, d.headers["accept-language"].split(",").map((function(e) {
                                    return e.split(";")[0]
                                }
                                ))) : void 0
                            }
                            ,
                            I = function(e) {
                                if (Ue.strategy !== Fe.STRATEGIES.NO_PREFIX)
                                    if (v === Fe.REDIRECT_ON_OPTIONS.ROOT) {
                                        if ("/" !== e.path)
                                            return ""
                                    } else if (v === Fe.REDIRECT_ON_OPTIONS.NO_PREFIX && !y && e.path.match(Qe(Ue.localeCodes)))
                                        return "";
                                var t;
                                k && (t = n.i18n.getLocaleCookie()) || (t = L());
                                var o = t || w;
                                return !o || k && !y && n.i18n.getLocaleCookie() || o === n.i18n.locale ? "" : o
                            }
                            ,
                            j = function(e) {
                                e.locales = Object(Et.a)(Ue.locales),
                                e.localeCodes = Object(Et.a)(Ue.localeCodes),
                                e.localeProperties = l.a.observable(Object(Et.a)(Ue.normalizedLocales.find((function(t) {
                                    return t.code === e.locale
                                }
                                )) || {
                                    code: e.locale
                                })),
                                e.defaultLocale = Ue.defaultLocale,
                                e.differentDomains = Ue.differentDomains,
                                e.onBeforeLanguageSwitch = Ue.onBeforeLanguageSwitch,
                                e.onLanguageSwitched = Ue.onLanguageSwitched,
                                e.setLocaleCookie = function(e) {
                                    return Xe(e, 0, {
                                        useCookie: k,
                                        cookieAge: P,
                                        cookieDomain: S,
                                        cookieKey: T,
                                        cookieSecure: C,
                                        cookieCrossOrigin: O
                                    })
                                }
                                ,
                                e.getLocaleCookie = function() {
                                    return Je(0, {
                                        useCookie: k,
                                        cookieKey: T,
                                        localeCodes: Ue.localeCodes
                                    })
                                }
                                ,
                                e.setLocale = function(e) {
                                    return E(e)
                                }
                                ,
                                e.getBrowserLocale = function() {
                                    return L()
                                }
                                ,
                                e.finalizePendingLocaleChange = R,
                                e.waitForPendingLocaleChange = A,
                                e.__baseUrl = n.i18n.__baseUrl,
                                e.__pendingLocale = n.i18n.__pendingLocale,
                                e.__pendingLocalePromise = n.i18n.__pendingLocalePromise,
                                e.__resolvePendingLocalePromise = n.i18n.__resolvePendingLocalePromise
                            }
                            ,
                            "function" != typeof Ue.vueI18n) {
                                e.next = 24;
                                break
                            }
                            return e.next = 21,
                            Ue.vueI18n(t);
                        case 21:
                            e.t0 = e.sent,
                            e.next = 25;
                            break;
                        case 24:
                            e.t0 = Object(Et.a)(Ue.vueI18n);
                        case 25:
                            if ((D = e.t0).componentInstanceCreatedListener = j,
                            n.i18n = t.i18n = new xt.a(D),
                            n.i18n.locale = "",
                            n.i18n.fallbackLocale = D.fallbackLocale || "",
                            c && (c.$i18n = n.i18n,
                            c.state.localeDomains)) {
                                M = jt(Ue.normalizedLocales.entries());
                                try {
                                    for (M.s(); !(F = M.n()).done; )
                                        U = Object(te.a)(F.value, 2),
                                        W = U[0],
                                        G = U[1],
                                        (B = c.state.localeDomains[G.code]) && (G.domain = B,
                                        "string" != typeof ($ = Ue.locales[W]) && ($.domain = B))
                                } catch (e) {
                                    M.e(e)
                                } finally {
                                    M.f()
                                }
                            }
                            return j(n.i18n),
                            H = {
                                differentDomains: Ue.differentDomains,
                                normalizedLocales: Ue.normalizedLocales
                            },
                            n.i18n.__baseUrl = it(Ue.baseUrl, t, "", H),
                            n.i18n.__onNavigate = N,
                            l.a.prototype.$nuxtI18nHead = It,
                            (Y = Ue.detectBrowserLanguage ? I(o) : "") || (n.i18n.differentDomains ? (V = ze(Ue.normalizedLocales),
                            Y = V) : Ue.strategy !== Fe.STRATEGIES.NO_PREFIX && (z = x(o),
                            Y = z)),
                            !Y && k && (Y = n.i18n.getLocaleCookie()),
                            Y || (Y = n.i18n.defaultLocale || ""),
                            e.next = 42,
                            E(Y, {
                                initialSetup: !0
                            });
                        case 42:
                            e.next = 50;
                            break;
                        case 45:
                            Q = e.sent,
                            K = Object(te.a)(Q, 2),
                            K[0],
                            (J = K[1]) && location.assign(Object(Me.joinURL)(t.base, J));
                        case 50:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Ft = n(220)
          , main = function(e) {
            var t = e.store;
            Object(Ft.a)()(t)
        };
        function qt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function Ut(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? qt(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : qt(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        l.a.component(f.a.name, f.a),
        l.a.component(y.a.name, Ut(Ut({}, y.a), {}, {
            render: function(e, t) {
                return y.a._warned || (y.a._warned = !0,
                console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),
                y.a.render(e, t)
            }
        })),
        l.a.component(Q.name, Q),
        l.a.component("NChild", Q),
        l.a.component(ne.name, ne),
        Object.defineProperty(l.a.prototype, "$nuxt", {
            get: function() {
                var e = this.$root.$options.$nuxt;
                return e || "undefined" == typeof window ? e : window.$nuxt
            },
            configurable: !0
        }),
        l.a.use(h.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var Wt = {
            name: "page",
            mode: "out-in",
            appear: !1,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        }
          , Gt = d.a.Store.prototype.registerModule;
        function Bt(path, e) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = Array.isArray(path) ? !!path.reduce((function(e, path) {
                return e && e[path]
            }
            ), this.state) : path in this.state;
            return Gt.call(this, path, e, Ut({
                preserveState: n
            }, t))
        }
        function $t(e) {
            return Ht.apply(this, arguments)
        }
        function Ht() {
            return Ht = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var n, o, c, d, h, m, path, f, _ = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return f = function(e, t) {
                                if (!e)
                                    throw new Error("inject(key, value) has no key provided");
                                if (void 0 === t)
                                    throw new Error("inject('".concat(e, "', value) has no value provided"));
                                d[e = "$" + e] = t,
                                d.context[e] || (d.context[e] = t),
                                c[e] = d[e];
                                var n = "__nuxt_" + e + "_installed__";
                                l.a[n] || (l.a[n] = !0,
                                l.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(l.a.prototype, e) || Object.defineProperty(l.a.prototype, e, {
                                        get: function() {
                                            return this.$root.$options[e]
                                        }
                                    })
                                }
                                )))
                            }
                            ,
                            n = _.length > 1 && void 0 !== _[1] ? _[1] : {},
                            e.next = 4,
                            z(0, n);
                        case 4:
                            return o = e.sent,
                            (c = de(t)).$router = o,
                            c.registerModule = Bt,
                            d = Ut({
                                head: {
                                    title: "trafficdownload1s | Công cụ rút gọn link miễn phí",
                                    htmlAttrs: {
                                        lang: "en"
                                    },
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui, web9_user-scalable=0"
                                    }, {
                                        name: "robots",
                                        content: "index, follow"
                                    }, {
                                        name: "Language",
                                        content: "vi"
                                    }, {
                                        name: "revisit-after",
                                        content: "1 days"
                                    }, {
                                        property: "og:type",
                                        content: "article"
                                    }, {
                                        property: "og:site_name",
                                        content: "trafficdownload1s.com"
                                    }, {
                                        property: "og:locale",
                                        content: "vi_VN"
                                    }, {
                                        name: "Copyright",
                                        content: "copyright © 2022 by trafficdownload1s.com"
                                    }, {
                                        name: "author",
                                        content: "trafficdownload1s.com"
                                    }, {
                                        name: "Generator",
                                        content: "trafficdownload1s.com"
                                    }, {
                                        name: "google-site-verification",
                                        content: "lDkfRVmFlWCaU50KxIHtEO9fQniQLBu9R-cBpRDI84U"
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/favicon.ico"
                                    }, {
                                        rel: "shortcut icon",
                                        href: "https://trafficdownload1s.com/favicon.ico"
                                    }],
                                    __dangerouslyDisableSanitizers: ["script"],
                                    script: [{
                                        src: "https://www.googletagmanager.com/gtag/js?id=G-SXEYGPWE2C",
                                        async: !0
                                    }, {
                                        innerHTML: "\n           window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-SXEYGPWE2C');\n        ",
                                        type: "text/javascript",
                                        charset: "utf-8"
                                    }, {
                                        src: "https://www.googletagmanager.com/gtag/js?id=G-M7NTZ48XT6",
                                        async: !0
                                    }, {
                                        innerHTML: "\n           window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-M7NTZ48XT6');\n        ",
                                        type: "text/javascript",
                                        charset: "utf-8"
                                    }],
                                    style: []
                                },
                                store: c,
                                router: o,
                                nuxt: {
                                    defaultTransition: Wt,
                                    transitions: [Wt],
                                    setTransitions: function(e) {
                                        return Array.isArray(e) || (e = [e]),
                                        e = e.map((function(e) {
                                            return e = e ? "string" == typeof e ? Object.assign({}, Wt, {
                                                name: e
                                            }) : Object.assign({}, Wt, e) : Wt
                                        }
                                        )),
                                        this.$options.nuxt.transitions = e,
                                        e
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(e) {
                                        e = e || null,
                                        d.context._errored = Boolean(e),
                                        e = e ? Object(k.p)(e) : null;
                                        var n = d.nuxt;
                                        return this && (n = this.nuxt || this.$options.nuxt),
                                        n.dateErr = Date.now(),
                                        n.err = e,
                                        t && (t.nuxt.error = e),
                                        e
                                    }
                                }
                            }, ue),
                            c.app = d,
                            h = t ? t.next : function(e) {
                                return d.router.push(e)
                            }
                            ,
                            t ? m = o.resolve(t.url).route : (path = Object(k.f)(o.options.base, o.options.mode),
                            m = o.resolve(path).route),
                            e.next = 14,
                            Object(k.t)(d, {
                                store: c,
                                route: m,
                                next: h,
                                error: d.nuxt.error.bind(d),
                                payload: t ? t.payload : void 0,
                                req: t ? t.req : void 0,
                                res: t ? t.res : void 0,
                                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                ssrContext: t
                            });
                        case 14:
                            f("config", n),
                            window.__NUXT__ && window.__NUXT__.state && c.replaceState(window.__NUXT__.state),
                            e.next = 20;
                            break;
                        case 20:
                            return e.next = 23,
                            Re(d.context, f);
                        case 23:
                            return e.next = 26,
                            je(d.context, f);
                        case 26:
                            e.next = 29;
                            break;
                        case 29:
                            return e.next = 32,
                            Ot(d.context);
                        case 32:
                            if ("function" != typeof Mt) {
                                e.next = 35;
                                break
                            }
                            return e.next = 35,
                            Mt(d.context, f);
                        case 35:
                            return e.next = 38,
                            main(d.context);
                        case 38:
                            return e.next = 41,
                            new Promise((function(e, t) {
                                if (!o.resolve(d.context.route.fullPath).route.matched.length)
                                    return e();
                                o.replace(d.context.route.fullPath, e, (function(n) {
                                    if (!n._isRouter)
                                        return t(n);
                                    if (2 !== n.type)
                                        return e();
                                    var c = o.afterEach(function() {
                                        var t = Object(r.a)(regeneratorRuntime.mark((function t(n, o) {
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 3,
                                                        Object(k.j)(n);
                                                    case 3:
                                                        d.context.route = t.sent,
                                                        d.context.params = n.params || {},
                                                        d.context.query = n.query || {},
                                                        c(),
                                                        e();
                                                    case 8:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e, n) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ))
                            }
                            ));
                        case 41:
                            return e.abrupt("return", {
                                store: c,
                                app: d,
                                router: o
                            });
                        case 42:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Ht.apply(this, arguments)
        }
    },
    94: function(e, t, n) {
        "use strict";
        t.a = {}
    }
}, [[244, 35, 4, 36]]]);
