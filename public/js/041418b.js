(window.webpackJsonp = window.webpackJsonp || []).push([[19, 5, 8], {
    328: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(4)
          , c = (n(38),
        n(42),
        n(43),
        n(29),
        n(97),
        {
            name: "Header",
            props: {},
            components: {},
            watchQuery: function(t) {
                return t
            },
            created: function() {
                this.$route.name.includes("default") ? this.lang = "vi" : this.lang = "en",
                this.urlLang = "/" + this.lang,
                "vi" == this.lang && (this.urlLang = ""),
                this.$store.state.user && this.$store.state.user.access_token ? this.isLogin = !0 : this.isLogin = !1
            },
            mounted: function() {
                var t, header = document.getElementById("header-container"), e = document.getElementById("toggle-menu"), menu = header.querySelector(".navigation"), n = header.querySelector("#language-select"), r = null;
                null !== (t = window) && void 0 !== t && t.scrollY && window.scrollY > 10 && header.classList.add("scroll-to"),
                window.onscroll = function(t) {
                    clearTimeout(r),
                    window.scrollY > 10 ? (header.classList.add("topdown"),
                    r = setTimeout((function() {
                        header.classList.add("scroll-to")
                    }
                    ), 1)) : window.scrollY < 10 && (header.classList.remove("topdown"),
                    header.classList.remove("scroll-to"))
                }
                ,
                e.onclick = function(t) {
                    menu.classList.toggle("show")
                }
                ,
                n.onclick = function(t) {
                    n.classList.toggle("show")
                }
            },
            data: function() {
                return {
                    isLogin: !1,
                    lang: "vi",
                    urlLang: ""
                }
            },
            watch: {},
            methods: {
                changeLang: function(t) {},
                login: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    t.$auth.loginWith("keycloak");
                                case 3:
                                    n = e.sent,
                                    console.log(n),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(0),
                                    t.error = "Username or Password not valid";
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    )))()
                },
                signup: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    t.$auth.sing("keycloak");
                                case 3:
                                    n = e.sent,
                                    console.log(n),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(0),
                                    t.error = "Username or Password not valid";
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    )))()
                }
            }
        })
          , o = c
          , l = n(64)
          , component = Object(l.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("header", {
                staticClass: "header-container",
                attrs: {
                    id: "header-container"
                }
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "header"
            }, [e("div", {
                staticClass: "logo_container"
            }, [e("a", {
                staticClass: "logo",
                attrs: {
                    href: t.urlLang + "/"
                }
            }, [e("img", {
                staticClass: "logo_image",
                attrs: {
                    src: n(331),
                    alt: "logo"
                }
            })])]), t._v(" "), t._m(0), t._v(" "), e("nav", {
                staticClass: "navigation"
            }, [e("ul", {
                staticClass: "main_nav"
            }, [e("li", [e("a", {
                staticClass: "active",
                attrs: {
                    href: t.urlLang + "/"
                }
            }, [t._v(t._s(t.$t("header.home")))])]), t._v(" "), e("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLogin,
                    expression: "isLogin"
                }]
            }, [e("a", {
                attrs: {
                    href: "/user/dashboard"
                }
            }, [t._v(t._s(t.$t("header.dashboard")))])]), t._v(" "), e("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLogin,
                    expression: "!isLogin"
                }]
            }, [e("a", {
                attrs: {
                    href: t.urlLang + "/login"
                }
            }, [t._v(t._s(t.$t("header.login")))])]), t._v(" "), e("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLogin,
                    expression: "!isLogin"
                }]
            }, [e("a", {
                attrs: {
                    href: t.urlLang + "/register"
                }
            }, [t._v(t._s(t.$t("header.sign_up")))])])]), t._v(" "), e("div", {
                staticClass: "language_container",
                attrs: {
                    id: "language-select"
                }
            }, [e("div", {
                staticClass: "language"
            }, [e("p", {
                staticClass: "language_selected"
            }, [t._v(t._s("vi" == t.lang ? "VI" : "EN"))]), e("i", {
                staticClass: "pv pv-down-arrow language_icon"
            })]), t._v(" "), e("ul", {
                staticClass: "language_list"
            }, [e("li", [e("button", {
                on: {
                    click: function(e) {
                        t.lang = "en"
                    }
                }
            }, [e("nuxt-link", {
                attrs: {
                    to: t.switchLocalePath("en")
                }
            }, [t._v("English")])], 1)]), t._v(" "), e("li", [e("button", {
                on: {
                    click: function(e) {
                        t.lang = "vi"
                    }
                }
            }, [e("nuxt-link", {
                attrs: {
                    to: t.switchLocalePath("vi")
                }
            }, [t._v("Tiếng Việt")])], 1)])])])])])])])
        }
        ), [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "toggle-container",
                attrs: {
                    id: "toggle-menu"
                }
            }, [t("i", {
                staticClass: "pv pv-menu-1"
            })])
        }
        ], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Header: n(328).default
        })
    },
    329: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            name: "Footer",
            props: {},
            created: function() {},
            mounted: function() {},
            data: function() {
                return {}
            }
        }
          , c = n(64)
          , component = Object(c.a)(r, (function() {
            var t = this
              , e = t._self._c;
            return e("footer", {
                staticClass: "footer"
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "row"
            }, [e("div", {
                staticClass: "col-12 col-lg-5 col-xl-4"
            }, [e("img", {
                staticClass: "footer_image",
                attrs: {
                    src: n(332),
                    alt: "logo"
                }
            }), t._v(" "), e("p", {
                staticClass: "footer-desc"
            }, [t._v(t._s(t.$t("footer.sologan")))])]), t._v(" "), e("div", {
                staticClass: "col-12 col-lg-7 col-xl-8"
            }, [e("div", {
                staticClass: "row"
            }, [e("div", {
                staticClass: "col-12 col-sm-4"
            }, [e("div", {
                staticClass: "footer-title"
            }, [t._v(t._s(t.$t("footer.pages")))]), t._v(" "), e("ul", [e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.about")))])]), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("header.login")))])]), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.help")))])]), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.contact")))])])])]), t._v(" "), e("div", {
                staticClass: "col-12 col-sm-4"
            }, [e("div", {
                staticClass: "footer-title"
            }, [t._v(t._s(t.$t("footer.service")))]), t._v(" "), e("ul", [e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.content")))])]), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.document")))])]), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.account")))])]), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.job")))])])])]), t._v(" "), e("div", {
                staticClass: "col-12 col-sm-4"
            }, [e("div", {
                staticClass: "footer-title"
            }, [t._v(t._s(t.$t("footer.address")))]), t._v(" "), e("ul", [e("li", [e("p", {
                staticClass: "footer-address"
            }, [t._v(t._s(t.$t("footer.add")))])])])])])])])]), t._v(" "), e("div", {
                staticClass: "container-fluid"
            }, [e("hr"), t._v(" "), e("ul", {
                staticClass: "copyright"
            }, [t._m(0), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.terms")))])]), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.privacy")) + " ")])]), t._v(" "), e("li", [e("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "#"
                }
            }, [t._v(t._s(t.$t("footer.policies")))])])])])])
        }
        ), [function() {
            var t = this._self._c;
            return t("li", [t("a", {
                staticClass: "footer-sub",
                attrs: {
                    href: "https://mienphitemplate.com/"
                }
            }, [this._v("Slide template")])])
        }
        ], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Footer: n(329).default
        })
    },
    330: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return j
        }
        )),
        n.d(e, "b", (function() {
            return y
        }
        ));
        n(31),
        n(27),
        n(35),
        n(45),
        n(30),
        n(46);
        var r = n(15)
          , c = n(4)
          , o = (n(13),
        n(32),
        n(33),
        n(355),
        n(164),
        n(38),
        n(99))
          , l = n.n(o);
        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        function h(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }
                ))
            }
            return t
        }
        var v, f, m, _, C, x, k, w = "https://apiclient.trafficdownload1s.com/", y = "https://apimanegement.trafficdownload1s.com/", $ = {
            "Cache-Control": "max-age=31536000"
        }, j = {
            get_data_json: (k = Object(c.a)(regeneratorRuntime.mark((function t(e, header) {
                var n, r, c;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return n = w + e,
                            r = h(h({}, $), header),
                            t.next = 4,
                            l.a.get(n, {
                                headers: r
                            });
                        case 4:
                            return c = (c = t.sent).data,
                            t.abrupt("return", c);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return k.apply(this, arguments)
            }
            ),
            get_data_json_login: (x = Object(c.a)(regeneratorRuntime.mark((function t(e, header) {
                var n, r, c;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return n = y + e,
                            r = h(h({}, $), header),
                            t.next = 4,
                            l.a.get(n, {
                                headers: r
                            });
                        case 4:
                            return c = (c = t.sent).data,
                            t.abrupt("return", c);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return x.apply(this, arguments)
            }
            ),
            get_data_json_special: (C = Object(c.a)(regeneratorRuntime.mark((function t(e, header) {
                var n;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            l.a.get(e, {
                                headers: header
                            });
                        case 2:
                            return n = (n = t.sent).data,
                            t.abrupt("return", n);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return C.apply(this, arguments)
            }
            ),
            post_data_json: (_ = Object(c.a)(regeneratorRuntime.mark((function t(e, n, header) {
                var r, c, o;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = w + e,
                            c = h(h({}, $), header),
                            t.next = 4,
                            l.a.post(r, n, {
                                headers: c
                            });
                        case 4:
                            return o = (o = t.sent).data,
                            t.abrupt("return", o);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e, n) {
                return _.apply(this, arguments)
            }
            ),
            post_data_json_login: (m = Object(c.a)(regeneratorRuntime.mark((function t(e, n, header) {
                var r, c, o;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = y + e,
                            c = h(h({}, $), header),
                            t.next = 4,
                            l.a.post(r, n, {
                                headers: c
                            });
                        case 4:
                            return o = (o = t.sent).data,
                            t.abrupt("return", o);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e, n) {
                return m.apply(this, arguments)
            }
            ),
            post_data_json_sso: (f = Object(c.a)(regeneratorRuntime.mark((function t(e, n, header) {
                var r, c, o;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = "https://sso.trafficdownload1s.com/" + e,
                            c = h(h({}, $), header),
                            t.next = 4,
                            l.a.post(r, n, {
                                headers: c
                            });
                        case 4:
                            return o = (o = t.sent).data,
                            t.abrupt("return", o);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e, n) {
                return f.apply(this, arguments)
            }
            ),
            downloadFile: (v = Object(c.a)(regeneratorRuntime.mark((function t(e, label, n) {
                var r, c, o, link;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = w + e,
                            t.next = 3,
                            l.a.get(r, {
                                responseType: "blob"
                            });
                        case 3:
                            c = t.sent,
                            o = new Blob([c.data],{
                                type: n
                            }),
                            (link = document.createElement("a")).href = URL.createObjectURL(o),
                            link.download = label,
                            link.click(),
                            URL.revokeObjectURL(link.href);
                        case 10:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e, n) {
                return v.apply(this, arguments)
            }
            )
        }
    },
    331: function(t, e, n) {
        t.exports = n.p + "img/logo.1e88201.svg"
    },
    332: function(t, e, n) {
        t.exports = n.p + "img/logo_white.ffd7b8d.svg"
    },
    336: function(t, e) {
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    },
    338: function(t, e, n) {
        var r = n(6)
          , c = n(36)
          , o = n(16)
          , l = n(336)
          , d = r("".replace)
          , h = "[" + l + "]"
          , v = RegExp("^" + h + h + "*")
          , f = RegExp(h + h + "*$")
          , m = function(t) {
            return function(e) {
                var n = o(c(e));
                return 1 & t && (n = d(n, v, "")),
                2 & t && (n = d(n, f, "")),
                n
            }
        };
        t.exports = {
            start: m(1),
            end: m(2),
            trim: m(3)
        }
    },
    341: function(t, e, n) {
        "use strict";
        var r = n(2)
          , c = n(338).trim;
        r({
            target: "String",
            proto: !0,
            forced: n(353)("trim")
        }, {
            trim: function() {
                return c(this)
            }
        })
    },
    353: function(t, e, n) {
        var r = n(100).PROPER
          , c = n(3)
          , o = n(336);
        t.exports = function(t) {
            return c((function() {
                return !!o[t]() || "​᠎" !== "​᠎"[t]() || r && o[t].name !== t
            }
            ))
        }
    },
    356: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        n(24),
        n(65),
        n(341);
        var r = [{
            lang: "vi",
            locale: "vi"
        }, {
            lang: "fr",
            locale: "fr"
        }, {
            lang: "es",
            locale: "es"
        }, {
            lang: "hi",
            locale: "hi"
        }, {
            lang: "pt",
            locale: "pt"
        }, {
            lang: "ru",
            locale: "ru"
        }, {
            lang: "th",
            locale: "th"
        }, {
            lang: "ar",
            locale: "ar"
        }, {
            lang: "ko",
            locale: "ko"
        }, {
            lang: "ja",
            locale: "ja"
        }, {
            lang: "zh",
            locale: "zh"
        }, {
            lang: "de",
            locale: "de"
        }, {
            lang: "en",
            locale: "en"
        }]
    },
    369: function(t, e, n) {
        var content = n(505);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(163).default)("72e8898e", content, !0, {
            sourceMap: !1
        })
    },
    500: function(t, e, n) {
        t.exports = n.p + "img/undraw_transfer_money_re_6o1h.79a6ae3.svg"
    },
    504: function(t, e, n) {
        "use strict";
        n(369)
    },
    505: function(t, e, n) {
        var r = n(162)
          , c = n(354)
          , o = n(366)
          , l = r(!1)
          , d = c(o);
        l.push([t.i, ".main[data-v-55d6390f]{min-height:110vh}.search_container[data-v-55d6390f]{background:url(" + d + ') bottom;background-size:cover;background-repeat:no-repeat}.search_wrap[data-v-55d6390f]{padding-top:72px;display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}.search[data-v-55d6390f]{min-height:350px;padding-top:16px;padding-bottom:80px;border-radius:16px}.search_title[data-v-55d6390f]{font-size:35px;letter-spacing:1px;line-height:1.4;font-weight:600;margin-bottom:1rem;text-align:center}.search_desc[data-v-55d6390f]{margin-bottom:3rem;font-size:18px;color:#8492a6;line-height:1.6}.search-form[data-v-55d6390f],.search_desc[data-v-55d6390f]{max-width:600px;margin-left:auto;margin-right:auto}.search-form[data-v-55d6390f]{display:flex;min-width:260px;border-radius:1000px;border:1px solid rgba(60,72,88,.15);box-shadow:0 1px 1px rgba(216,214,187,.6),0 3px 3px rgba(216,214,187,.4),0 8px 16px rgba(215,216,187,.3);background-color:#fff}.search-form[focus-within][data-v-55d6390f]{border-color:#ced104;box-shadow:none;transition:outline-color .15s ease-in-out,box-shadow .15s ease-in-out}.search-form[data-v-55d6390f]:focus-within{border-color:#ced104;box-shadow:none;transition:outline-color .15s ease-in-out,box-shadow .15s ease-in-out}.search-icon[data-v-55d6390f]{display:flex;align-items:center;padding-left:12px}.search-input[data-v-55d6390f]{outline:none;border:none;font-size:18px;padding-top:12px;padding-bottom:12px}.search-input[data-v-55d6390f]:-webkit-autofill{-webkit-background-clip:text!important}.search-wrong[data-v-55d6390f]{position:relative;cursor:pointer;color:tomato;display:flex;align-items:center;padding-left:12px;padding-right:12px;visibility:hidden}.search-wrong.show[data-v-55d6390f]{visibility:visible}.search-wrong:hover .tooltip[data-v-55d6390f]{opacity:1;visibility:visible}.search-button[data-v-55d6390f]{display:flex;align-items:center;padding:12px 24px;border-radius:1000px;border:none;background:linear-gradient(to right top,#ffe261,#ffe261);outline:none;font-weight:600;white-space:nowrap;cursor:pointer}.convert_complete[data-v-55d6390f]{position:relative;max-width:600px;min-width:260px;margin-left:auto;margin-right:auto;visibility:hidden;opacity:0;transition:all .4s ease}.convert_complete.show[data-v-55d6390f]{visibility:visible;opacity:1}.convert_complete.show i[data-v-55d6390f]{transform:translateY(-50%) rotateY(180deg) rotate(-43deg)}.convert_complete i[data-v-55d6390f]{position:absolute;top:30px;right:-3px;left:auto;transform:translateY(-50%) rotateY(180deg) rotate(-10deg);color:#4f5604;font-size:40px;transition:all .4s ease}.search-result-content[data-v-55d6390f]{position:relative}.search-result-content:hover .tooltip[data-v-55d6390f]{opacity:1;visibility:visible}.search-result[data-v-55d6390f]{position:relative;display:flex;max-width:600px;min-width:260px;padding-right:21px;padding-left:21px;border-radius:8px;margin-top:60px;margin-left:auto;margin-right:auto;border:1px solid rgba(60,72,88,.15);box-shadow:0 1px 1px rgba(216,214,187,.6),0 3px 3px rgba(216,214,187,.4),0 8px 16px rgba(215,216,187,.3);overflow:hidden;background-color:#fff;cursor:pointer;transition:all .3s ease}.search-result[data-v-55d6390f]:hover{border:#777849;box-shadow:0 1px 1px rgba(149,144,80,.6),0 3px 3px rgba(115,112,76,.4),0 8px 16px rgba(246,255,0,.3)}.search-result[data-v-55d6390f]:active{border-color:#474904;background-color:hsla(0,0%,93.3%,.1);box-shadow:0 1px 1px rgba(149,144,80,.6),0 2px 2px rgba(115,112,76,.4),0 4px 8px rgba(246,255,0,.3)}.search-result:active .search-text[data-v-55d6390f]{color:#8492a6}.search-result:active .search-text[data-v-55d6390f]:before{display:inline-block;visibility:visible;font-size:inherit;opacity:1;transition:inherit}.search-result[data-v-55d6390f]:after{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:2px;background-color:#d97f36;background:#0064ff;transition:all .3s ease;background:linear-gradient(90deg,#16dcf4,#16f4ed 20%,#16dcf4 40%,#16f4ed 60%,#16dcf4 80%,#16f4ed);animation-name:loading-55d6390f;animation-duration:.2s;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate}@keyframes loading-55d6390f{to{background:linear-gradient(90deg,#16dcf4,#16f4ed 20%,#16dcf4 40%,#16f4ed 60%,#16dcf4 80%,#16f4ed)}0%{background:linear-gradient(90deg,#16f4ed,#16dcf4 20%,#16f4ed 40%,#16dcf4 60%,#16f4ed 80%,#16dcf4)}}.search-text[data-v-55d6390f]{color:#212529;font-size:18px;padding-top:12px;padding-bottom:12px;line-height:1.5}.search-text[data-v-55d6390f]:before{content:"(Copied)";visibility:hidden;font-size:0;margin-left:.25rem;margin-right:.25rem;opacity:0;color:#d3d2c7;transition:opacity .5s ease 1.5s,visibility 2s ease,font 2s ease 2s}.search-iconcopy[data-v-55d6390f]{position:absolute;top:6px;right:18px;color:#7d7979}.loader[data-v-55d6390f]{--loader-width:20px;--loader-height:20px;--loader-color-primary:#eaf944;--loader-color-secondary:#fff;--line-width:3px;--animation-duration:2s;--loader-initial-scale:0.1;margin-right:4px}.loader[data-v-55d6390f],.loader[data-v-55d6390f]:after,.loader[data-v-55d6390f]:before{box-sizing:border-box;flex-grow:0;flex-shrink:0}@keyframes circle-loader-55d6390f{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.loader.simple-circle[data-v-55d6390f]{transform-origin:center center;border:4px solid #fff;border-right-color:#00f;border:var(--line-width,4px) solid var(--loader-color-secondary,#fff);border-right-color:var(--loader-color-primary,#00f);width:100px;width:var(--loader-width,100px);height:100px;height:var(--loader-height,100px);border-radius:50%;animation:circle-loader-55d6390f 1s ease-out infinite;animation:circle-loader-55d6390f var(--animation-duration,1s) infinite ease-out}.counter[data-v-55d6390f]{display:flex;flex-direction:column;align-items:center;margin-bottom:10px}.counter-number[data-v-55d6390f]{color:#f2d03c;font-size:2rem;margin-bottom:.5rem;font-weight:700;line-height:1.3}.counter-desc[data-v-55d6390f]{color:#535353;font-weight:600;font-size:1.125rem}.feature-list[data-v-55d6390f]{justify-content:space-between;margin-top:64px}.feature-item[data-v-55d6390f]{height:100%;padding:3rem;background-color:#fcffe2}.feature-icon[data-v-55d6390f]{font-size:3.5rem;line-height:3.5rem}.feature-content[data-v-55d6390f]{margin-top:1.5rem}.feature-title[data-v-55d6390f]{font-weight:600;font-size:1.25rem;color:#2f2f41;line-height:1.3;margin-bottom:1rem}.feature-desc[data-v-55d6390f]{line-height:1.7;font-size:1rem;font-weight:400;color:#535353}.hero-container[data-v-55d6390f]{background:#fcffe2;background:linear-gradient(to right top,#fcffe2 0,#ffeff8);-webkit-clip-path:ellipse(190% 77% at 50% 22%);clip-path:ellipse(190% 77% at 50% 22%)}.hero-list[data-v-55d6390f]{--spacing-x:16px;--spacing-y:16px;display:grid;grid-template-columns:100%;grid-gap:var(--spacing-x);gap:var(--spacing-x);margin-bottom:64px}.hero-item[data-v-55d6390f]{display:flex;flex-direction:column;width:100%;background:linear-gradient(to right bottom,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,.4));padding:24px;border-radius:36px}.hero-icon[data-v-55d6390f]{display:flex;align-items:center;justify-content:center;height:80px;width:80px;margin-left:auto;margin-right:auto;border-radius:50%;box-shadow:0 10px 25px rgba(60,72,88,.15);color:#aeaeae;font-size:45px;text-align:center}.hero-content[data-v-55d6390f]{padding-top:16px}.hero-title[data-v-55d6390f]{line-height:1.4;font-weight:600;font-size:18px;color:#2f2f41;text-align:center;margin-bottom:.75rem}.hero-desc[data-v-55d6390f]{color:#535353;margin-bottom:0;line-height:1.7;text-align:justify}.service-list[data-v-55d6390f]{--spacing-x:16px;--spacing-y:16px;display:flex;flex-wrap:wrap;margin-top:calc(64px - var(--spacing-y));margin-right:calc(var(--spacing-x)*-0.5);margin-left:calc(var(--spacing-x)*-0.5);margin-bottom:64px}.service-item[data-v-55d6390f]{display:flex;align-items:flex-start;width:100%;margin-top:var(--spacing-y);padding-right:calc(var(--spacing-x)*0.5);padding-left:calc(var(--spacing-x)*0.5)}.service-left[data-v-55d6390f]{background-color:#fcffe2;padding:1rem;margin-right:16px;border-radius:.5rem}.service-left i[data-v-55d6390f]{font-size:2rem;line-height:2rem}.service-title[data-v-55d6390f]{margin-bottom:.5rem;font-weight:600;font-size:1.25rem;color:#2f2f41;line-height:1.3}.service-desc[data-v-55d6390f]{color:#535353;margin-bottom:0;line-height:1.7}.help-item[data-v-55d6390f]{display:flex;margin-bottom:16px;padding-left:10px;padding-right:10px}.help-icon[data-v-55d6390f]{width:20px;height:20px;margin-top:3px;margin-right:6px;border-radius:50%;border:1px solid #c6a200;color:#c6a200;text-align:center;font-size:12px;line-height:20px}.help-title[data-v-55d6390f]{color:#212529;line-height:1.4;font-weight:600;font-size:1.25rem;margin-bottom:.5rem}.help-paragraph[data-v-55d6390f]{margin-bottom:0;color:#8492a6;line-height:1.6}@media (min-width:768px){.search_title[data-v-55d6390f]{font-size:42px}.convert_complete i[data-v-55d6390f]{left:calc(100% + 10px);right:auto}.counter-number[data-v-55d6390f]{font-size:2.25rem}.service-item[data-v-55d6390f]{width:50%}.hero-container[data-v-55d6390f]{-webkit-clip-path:ellipse(140% 77% at 50% 22%);clip-path:ellipse(140% 77% at 50% 22%)}.hero-list[data-v-55d6390f]{grid-template-columns:repeat(2,50%)}}@media (min-width:992px){.hero-container[data-v-55d6390f]{-webkit-clip-path:ellipse(90% 77% at 50% 22%);clip-path:ellipse(90% 77% at 50% 22%)}.hero-list[data-v-55d6390f]{grid-template-columns:repeat(3,33.33333%)}}', ""]),
        t.exports = l
    },
    555: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = [function() {
            var t = this._self._c;
            return t("label", {
                staticClass: "search-icon",
                attrs: {
                    for: "search-input"
                }
            }, [t("i", {
                staticClass: "pv pv-search-interface-symbol"
            })])
        }
        , function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "search-wrong_icon"
            }, [t("i", {
                staticClass: "pv pv-exclamation"
            })])
        }
        , function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "search-iconcopy"
            }, [t("i", {
                staticClass: "pv pv-copy"
            })])
        }
        , function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "feature-container section-container"
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "row feature-list"
            }, [e("div", {
                staticClass: "col-lg-4 mb-16"
            }, [e("div", {
                staticClass: "feature-item"
            }, [e("div", {
                staticClass: "feature-icon"
            }, [e("i", {
                staticClass: "pv pv-connection"
            })]), t._v(" "), e("div", {
                staticClass: "feature-content"
            }, [e("h3", {
                staticClass: "feature-title"
            }, [t._v("Rút gọn link")]), t._v(" "), e("p", {
                staticClass: "feature-desc"
            }, [t._v("\n                  Rút gọn link Blitly là một công cụ hoàn toàn miễn phí, nơi bạn có thể rút gọn\n                  liên kết miễn phí và kiếm thu nhập từ việc chia sẻ liên kết rút gọn đó của mình.\n                ")])])])]), t._v(" "), e("div", {
                staticClass: "col-lg-4 col-md-6 mb-16"
            }, [e("div", {
                staticClass: "feature-item",
                staticStyle: {
                    "background-color": "rgb(255, 239, 248)"
                }
            }, [e("div", {
                staticClass: "feature-icon"
            }, [e("i", {
                staticClass: "pv pv-analysis"
            })]), t._v(" "), e("div", {
                staticClass: "feature-content"
            }, [e("h3", {
                staticClass: "feature-title"
            }, [t._v(" Đo đạt. Tối ưu hóa.")]), t._v(" "), e("p", {
                staticClass: "feature-desc"
            }, [t._v("\n                  Chia sẻ các liên kết của bạn với mạng của bạn và đo lường dữ liệu để tối ưu\n                  hóa hiệu suất chiến dịch tiếp thị của bạn. Tiếp cận đối tượng phù hợp với nhu cầu của bạn.\n                ")])])])]), t._v(" "), e("div", {
                staticClass: "col-lg-4 col-md-6 mb-16"
            }, [e("div", {
                staticClass: "feature-item",
                staticStyle: {
                    "background-color": "rgb(211, 246, 254)"
                }
            }, [e("div", {
                staticClass: "feature-icon"
            }, [e("i", {
                staticClass: "pv pv-customer-service-1"
            })]), t._v(" "), e("div", {
                staticClass: "feature-content"
            }, [e("h3", {
                staticClass: "feature-title"
            }, [t._v("Hoàn hảo cho bán hàng và tiếp thị")]), t._v(" "), e("p", {
                staticClass: "feature-desc"
            }, [t._v("\n                  Hiểu người dùng và khách hàng của bạn sẽ giúp bạn tăng chuyển đổi của mình. Hệ\n                  thống của chúng tôi cho phép bạn theo dõi mọi thứ. Cho dù đó là số lượng nhấp chuột, quốc gia hay\n                  liên kết giới thiệu, dữ liệu ở đó để bạn phân tích.\n                ")])])])])])])])
        }
        , function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "section-container hero-container"
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "row justify-content-center mb-16"
            }, [e("div", {
                staticClass: "col-12 col-md-8"
            }, [e("h2", {
                staticClass: "section-title text-center mb-16"
            }, [t._v("Vì sao bạn nên tham gia ?")]), t._v(" "), e("p", {
                staticClass: "section-desc"
            }, [t._v("\n              Một link rút gọn là một công cụ tiếp thị mạnh mẽ khi bạn sử dụng nó một cách hiệu\n              quả. Nó không chỉ là một liên kết mà là một phương tiện giữa khách hàng của bạn và điểm đến của họ.\n            ")])])]), t._v(" "), e("div", {
                staticClass: "row"
            }, [e("div", {
                staticClass: "col-12"
            }, [e("div", {
                staticClass: "hero-list"
            }, [e("div", {
                staticClass: "hero-item"
            }, [e("div", {
                staticClass: "hero-header"
            }, [e("div", {
                staticClass: "hero-icon",
                staticStyle: {
                    "background-color": "rgb(252 255 226)"
                }
            }, [e("i", {
                staticClass: "pv pv-connection"
            })])]), t._v(" "), e("div", {
                staticClass: "hero-content"
            }, [e("div", {
                staticClass: "hero-title"
            }, [t._v("Tùy chỉnh link rút gọn")]), t._v(" "), e("div", {
                staticClass: "hero-desc"
            }, [t._v("\n                    Tùy chỉnh link rút gọn với mọi thứ: Rút gọn link Website, Landing page,\n                    Facebook, Youtube, Affiliate\n                  ")])])]), t._v(" "), e("div", {
                staticClass: "hero-item"
            }, [e("div", {
                staticClass: "hero-header"
            }, [e("div", {
                staticClass: "hero-icon",
                staticStyle: {
                    "background-color": "rgba(241, 223, 255)"
                }
            }, [e("i", {
                staticClass: "pv pv-loyal-customer"
            })])]), t._v(" "), e("div", {
                staticClass: "hero-content"
            }, [e("div", {
                staticClass: "hero-title"
            }, [t._v("Khách hàng mục tiêu")]), t._v(" "), e("div", {
                staticClass: "hero-desc"
            }, [t._v("\n                    Nhắm mục tiêu người dùng của bạn dựa trên vị trí và thiết bị của họ và chuyển\n                    hướng họ đến các trang chuyên biệt để tăng chuyển đổi của bạn.\n                  ")])])]), t._v(" "), e("div", {
                staticClass: "hero-item"
            }, [e("div", {
                staticClass: "hero-header"
            }, [e("div", {
                staticClass: "hero-icon",
                staticStyle: {
                    "background-color": "rgb(255, 239, 248)"
                }
            }, [e("i", {
                staticClass: "pv pv-save-money"
            })])]), t._v(" "), e("div", {
                staticClass: "hero-content"
            }, [e("div", {
                staticClass: "hero-title"
            }, [t._v("Tôi kiếm tiền bằng cách nào ?")]), t._v(" "), e("div", {
                staticClass: "hero-desc"
            }, [t._v("\n                    Bạn có thể kiếm tiền với chỉ sau 3 bước: tạo một tài khoản, rút gọn liên kết,\n                    chia sẻ liên kết và nhận thu nhập từ chúng tôi. Thật dễ dàng!\n                  ")])])]), t._v(" "), e("div", {
                staticClass: "hero-item"
            }, [e("div", {
                staticClass: "hero-header"
            }, [e("div", {
                staticClass: "hero-icon",
                staticStyle: {
                    "background-color": "rgb(211, 246, 254)"
                }
            }, [e("i", {
                staticClass: "pv pv-collaboration"
            })])]), t._v(" "), e("div", {
                staticClass: "hero-content"
            }, [e("div", {
                staticClass: "hero-title"
            }, [t._v("Kiếm tiền với cộng tác viên")]), t._v(" "), e("div", {
                staticClass: "hero-desc"
            }, [t._v("\n                    Rút gọn Link kiếm tiền chương trình giới thiệu là một cách tuyệt vời để quảng\n                    bá dịch vụ tuyệt vời này và kiếm được nhiều tiền hơn với các liên kết ngắn của bạn! Giới thiệu bạn\n                    bè và nhận % thu nhập của họ!\n                  ")])])]), t._v(" "), e("div", {
                staticClass: "hero-item"
            }, [e("div", {
                staticClass: "hero-header"
            }, [e("div", {
                staticClass: "hero-icon",
                staticStyle: {
                    "background-color": "rgb(208, 250, 236)"
                }
            }, [e("i", {
                staticClass: "pv pv-analysis"
            })])]), t._v(" "), e("div", {
                staticClass: "hero-content"
            }, [e("div", {
                staticClass: "hero-title"
            }, [t._v("Kiểm soát các liên kết của bạn")]), t._v(" "), e("div", {
                staticClass: "hero-desc"
            }, [t._v("\n                    Bạn sẽ có toàn quyền kiểm soát các liên kết của mình. Điều này có nghĩa là\n                    bạn có thể thay đổi điểm đến bất kỳ lúc nào bạn muốn. Thêm, thay đổi hoặc xóa bất kỳ bộ lọc nào,\n                    bất cứ lúc nào.\n                  ")])])]), t._v(" "), e("div", {
                staticClass: "hero-item"
            }, [e("div", {
                staticClass: "hero-header"
            }, [e("div", {
                staticClass: "hero-icon",
                staticStyle: {
                    "background-color": "rgb(250, 200, 200)"
                }
            }, [e("i", {
                staticClass: "pv pv-customer-service-1"
            })])]), t._v(" "), e("div", {
                staticClass: "hero-content"
            }, [e("div", {
                staticClass: "hero-title"
            }, [t._v("API mạnh mẽ")]), t._v(" "), e("div", {
                staticClass: "hero-desc"
            }, [t._v("\n                    Sử dụng API mạnh mẽ của chúng tôi để xây dựng các ứng dụng tùy chỉnh hoặc mở\n                    rộng ứng dụng của riêng bạn bằng các công cụ mạnh mẽ của chúng tôi.\n                  ")])])])])])])])])
        }
        , function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "section-container service-container"
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "row"
            }, [e("div", {
                staticClass: "col-lg-8"
            }, [e("h3", {
                staticClass: "section-title text-center"
            }, [t._v("Nhiều tính năng nâng cao")]), t._v(" "), e("div", {
                staticClass: "service-list"
            }, [e("div", {
                staticClass: "service-item"
            }, [e("div", {
                staticClass: "service-left"
            }, [e("i", {
                staticClass: "pv pv-connection"
            })]), t._v(" "), e("div", {
                staticClass: "service-right"
            }, [e("h4", {
                staticClass: "service-title"
            }, [t._v("Tùy chỉnh link rút gọn")]), t._v(" "), e("p", {
                staticClass: "service-desc"
            }, [t._v("\n                    Tùy chỉnh link rút gọn với mọi thứ: Rút gọn link Website, Landing page,\n                    Facebook, Youtube, Affiliate...\n                  ")])])]), t._v(" "), e("div", {
                staticClass: "service-item"
            }, [e("div", {
                staticClass: "service-left",
                staticStyle: {
                    "background-color": "rgb(255, 239, 248)"
                }
            }, [e("i", {
                staticClass: "pv pv-analysis"
            })]), t._v(" "), e("div", {
                staticClass: "service-right"
            }, [e("h4", {
                staticClass: "service-title"
            }, [t._v("Bảo mật link rút gọn")]), t._v(" "), e("p", {
                staticClass: "service-desc"
            }, [t._v("Các link được bảo mật và hoàn toàn ẩn danh trên các công cụ tìm kiếm.")])])]), t._v(" "), e("div", {
                staticClass: "service-item"
            }, [e("div", {
                staticClass: "service-left",
                staticStyle: {
                    "background-color": "rgb(211, 246, 254)"
                }
            }, [e("i", {
                staticClass: "pv pv-collaboration"
            })]), t._v(" "), e("div", {
                staticClass: "service-right"
            }, [e("h4", {
                staticClass: "service-title"
            }, [t._v("Quản lý nhóm")]), t._v(" "), e("p", {
                staticClass: "service-desc"
            }, [t._v("\n                    Mời các thành viên trong nhóm của bạn và chỉ định cho họ các đặc quyền cụ\n                    thể.\n                  ")])])]), t._v(" "), e("div", {
                staticClass: "service-item"
            }, [e("div", {
                staticClass: "service-left",
                staticStyle: {
                    "background-color": "rgb(208, 250, 236)"
                }
            }, [e("i", {
                staticClass: "pv pv-settings"
            })]), t._v(" "), e("div", {
                staticClass: "service-right"
            }, [e("h4", {
                staticClass: "service-title"
            }, [t._v("Mật khẩu bảo vệ")]), t._v(" "), e("p", {
                staticClass: "service-desc"
            }, [t._v("\n                    Bạn có thể đặt mật khẩu để bảo vệ link rút gọn, hoặc đặt thời gian hết hạn\n                    cho link của mình.\n                  ")])])]), t._v(" "), e("div", {
                staticClass: "service-item"
            }, [e("div", {
                staticClass: "service-left",
                staticStyle: {
                    "background-color": "rgb(250, 200, 200)"
                }
            }, [e("i", {
                staticClass: "pv pv-customer-service-1"
            })]), t._v(" "), e("div", {
                staticClass: "service-right"
            }, [e("h4", {
                staticClass: "service-title"
            }, [t._v("API mạnh mẽ")]), t._v(" "), e("p", {
                staticClass: "service-desc"
            }, [t._v("Sử dụng API mạnh mẽ để tạo các ứng dụng tùy chỉnh.")])])])])]), t._v(" "), e("div", {
                staticClass: "col-lg-4 text-center"
            }, [e("img", {
                staticClass: "w-100 h-100 img-fluid",
                attrs: {
                    src: n(500),
                    alt: "rut gon link kiem tien"
                }
            })])])])])
        }
        , function() {
            var t = this
              , e = t._self._c;
            return e("section", {
                staticClass: "section-container help-container"
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "row justify-content-center mb-64"
            }, [e("div", {
                staticClass: "col-lg-8"
            }, [e("h2", {
                staticClass: "section-title text-center"
            }, [t._v(" Lý do nên chọn rút gọn link bằng "), e("strong", [t._v("Blitly")])])])]), t._v(" "), e("div", {
                staticClass: "row"
            }, [e("div", {
                staticClass: "col-md-6"
            }, [e("div", {
                staticClass: "help-item"
            }, [e("div", {
                staticClass: "help-left"
            }, [e("div", {
                staticClass: "help-icon"
            }, [e("i", {
                staticClass: "pv pv-question"
            })])]), t._v(" "), e("div", {
                staticClass: "help-right"
            }, [e("h3", {
                staticClass: "help-title"
            }, [t._v("Vì sao nên dùng website Blitly để rút gọn link ?")]), t._v(" "), e("p", {
                staticClass: "help-paragraph"
            }, [t._v("\n                  Được trang bị server tốc độ cao và ổn định, rút gọn link với Blitly có tỷ lệ\n                  uptime ~ 99.9%. Điều này giúp cho truy cập tới link rút gọn của bạn luôn hoạt động ổn định. Đồng\n                  thời, web rút gọn link Blitly được hỗ trợ lâu dài bởi Navis Digital Agency. Do đó, bạn hoàn toàn\n                  không cần phải lo lắng khi website dừng hoạt động giữa chừng.\n                ")])])])]), t._v(" "), e("div", {
                staticClass: "col-md-6"
            }, [e("div", {
                staticClass: "help-item"
            }, [e("div", {
                staticClass: "help-left"
            }, [e("div", {
                staticClass: "help-icon"
            }, [e("i", {
                staticClass: "pv pv-question"
            })])]), t._v(" "), e("div", {
                staticClass: "help-right"
            }, [e("h3", {
                staticClass: "help-title"
            }, [t._v("Rút gọn link miễn phí và không có quảng cáo")]), t._v(" "), e("p", {
                staticClass: "help-paragraph"
            }, [t._v("\n                  Rút gọn link được cung cấp bởi Blitly hoàn toàn không có bất kỳ quảng cáo\n                  nào. Bạn cũng không cần phải đăng ký tài khoản rút gọn link. Mặc dù vậy, bạn có thể hoàn toàn có thể\n                  tạo ngay được short link ngắn gọn và chuyên nghiệp. Hơn nữa, chúng tôi cam kết sẽ không có quảng cáo\n                  tại liên kết rút gọn. Ngoài ra, rút gọn link Blitly cũng không yêu cầu bất kỳ phí đăng ký nào.\n                ")])])])]), t._v(" "), e("div", {
                staticClass: "col-md-6"
            }, [e("div", {
                staticClass: "help-item"
            }, [e("div", {
                staticClass: "help-left"
            }, [e("div", {
                staticClass: "help-icon"
            }, [e("i", {
                staticClass: "pv pv-question"
            })])]), t._v(" "), e("div", {
                staticClass: "help-right"
            }, [e("h3", {
                staticClass: "help-title"
            }, [t._v("Chuyển hướng liên kết tốc độ cao")]), t._v(" "), e("p", {
                staticClass: "help-paragraph"
            }, [t._v("\n                  Blitly có tốc độ truy cập nhanh hơn 55% so với các website free url\n                  shortener khác. Với hệ thống caching server cấu hình cao được đặt tại Viettel IDC - Bình Dương. Điều\n                  này giúp cho việc truy cập vào liên kết rút gọn của bạn luôn đảm bảo sự ổn định và tốc độ cao. Điều\n                  này giúp cho kết nối tới link rút gọn luôn đảm bảo, phù hợp ngay cả với các thương hiệu lớn có lượng\n                  truy cập link cao.\n                ")])])])]), t._v(" "), e("div", {
                staticClass: "col-md-6"
            }, [e("div", {
                staticClass: "help-item"
            }, [e("div", {
                staticClass: "help-left"
            }, [e("div", {
                staticClass: "help-icon"
            }, [e("i", {
                staticClass: "pv pv-question"
            })])]), t._v(" "), e("div", {
                staticClass: "help-right"
            }, [e("h3", {
                staticClass: "help-title"
            }, [t._v("Cách thu gọn link tăng tính an toàn cho link gốc")]), t._v(" "), e("p", {
                staticClass: "help-paragraph"
            }, [t._v("\n                  Server rút gọn link có cơ chế kiểm tra những truy cập bất thường trước khi\n                  chuyển qua link gốc. Do đó, giúp hạn chế tình trạng spam hoặc tấn công server có chủ đích. Bạn có\n                  thể đặt mật khẩu để bảo vệ link gốc của mình. Hoặc cũng có thể đặt thời gian hết hạn cho link gốc\n                  của bạn. Ngoài ra, khi muốn ngừng share link gốc, bạn có thể điều chỉnh link đích ở trong phần quản\n                  trị. Lưu ý: tính năng này chỉ sử dụng được khi bạn đã đăng ký tài khoản người dùng.\n                ")])])])]), t._v(" "), e("div", {
                staticClass: "col-md-6"
            }, [e("div", {
                staticClass: "help-item"
            }, [e("div", {
                staticClass: "help-left"
            }, [e("div", {
                staticClass: "help-icon"
            }, [e("i", {
                staticClass: "pv pv-question"
            })])]), t._v(" "), e("div", {
                staticClass: "help-right"
            }, [e("h3", {
                staticClass: "help-title"
            }, [t._v("Thu gọn đường link cho các chiến dịch marketing")]), t._v(" "), e("p", {
                staticClass: "help-paragraph"
            }, [t._v("\n                  Thay vì phải dựa vào công cụ của 1 bên thứ 3 như Google Analytics. Bằng việc\n                  đăng ký tài khoản, cho phép bạn theo dõi, thống kê và phân tích một cách chi tiết các thông số từ\n                  công cụ hỗ trợ thống kê trong trang quản trị. Từ nguồn Blitly, lượt click, thiết bị của khách hàng,\n                  vị trí địa lý... Hãy bắt đầu chiến dịch marketing của bạn bằng 1 đường link rút gọn. Bên cạnh đó hãy\n                  gắn code UTM để theo dõi chi tiết hơn.\n                ")])])])]), t._v(" "), e("div", {
                staticClass: "col-md-6"
            }, [e("div", {
                staticClass: "help-item"
            }, [e("div", {
                staticClass: "help-left"
            }, [e("div", {
                staticClass: "help-icon"
            }, [e("i", {
                staticClass: "pv pv-question"
            })])]), t._v(" "), e("div", {
                staticClass: "help-right"
            }, [e("h3", {
                staticClass: "help-title"
            }, [t._v("Rút gọn liên kết với link tùy chỉnh giúp tăng tỷ lệ chuyển đổi")]), t._v(" "), e("p", {
                staticClass: "help-paragraph"
            }, [t._v("\n                  Một đường link đã được rút gọn kết hợp với chức năng link tùy chỉnh sẵn có\n                  tại Blitly. Điều này giúp bạn thúc đẩy việc chia sẻ một cách dễ dàng. Xin lưu ý rằng, với những\n                  đường link dài ngoằng và không có ngữ nghĩa sẽ thường khó gây ấn tượng và sự chú ý của khách hàng.\n                  Một cách đơn giản để gia tăng sự nhận biết thương hiệu của bạn trong mắt khách hàng, đó là gắn\n                  thương hiệu vào trong link tùy chỉnh. Rút gọn link theo ý muốn cũng là cách để bạn dễ nhớ hơn link\n                  gốc của mình.\n                ")])])])])])])])
        }
        ]
          , c = n(4)
          , o = (n(38),
        n(166),
        n(24),
        n(80),
        n(29),
        n(35),
        n(13),
        n(27),
        n(44),
        n(30),
        n(328))
          , footer = n(329)
          , l = n(330)
          , d = n(356)
          , h = {
            name: "IndexPage",
            components: {
                Header: o.default,
                Footer: footer.default
            },
            asyncData: function(t) {
                return Object(c.a)(regeneratorRuntime.mark((function e() {
                    var n, r, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.route.name.split("index___")[1],
                                (r = d.a.filter((function(t) {
                                    return t.lang == n
                                }
                                ))) && r.length > 0 ? t.i18n.locale = r[0].locale : t.i18n.locale = "vi",
                                c = "/" + n,
                                "vi" != n && "" != n && "vi___default" != n || (c = ""),
                                e.abrupt("return", {
                                    urlLang: c,
                                    title: t.i18n.t("home.title"),
                                    description: t.i18n.t("home.description")
                                });
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            head: function() {
                return {
                    title: this.title,
                    meta: [{
                        property: "og:url",
                        content: "https://trafficdownload1s.com"
                    }, {
                        name: "title",
                        content: this.title
                    }, {
                        name: "description",
                        content: this.description
                    }, {
                        property: "og:title",
                        content: this.title
                    }, {
                        property: "og:description",
                        content: this.description
                    }],
                    link: [{
                        rel: "canonical",
                        href: "https://trafficdownload1s.com"
                    }]
                }
            },
            mounted: function() {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function e() {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return function() {
                                    var t = !0;
                                    if ("IntersectionObserver"in window) {
                                        var e = document.getElementById("feature-counter");
                                        new IntersectionObserver((function(r) {
                                            r.forEach((function(r) {
                                                t && r.isIntersecting && e.contains(r.target) && (t = !1,
                                                n())
                                            }
                                            ))
                                        }
                                        )).observe(e)
                                    }
                                }
                                ,
                                n = function() {
                                    function t(t) {
                                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                                    }
                                    function e(e) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3
                                          , r = arguments.length > 3 ? arguments[3] : void 0
                                          , c = performance.now();
                                        function o(l) {
                                            var d = l - c;
                                            if (d > n)
                                                r(e);
                                            else {
                                                var h = t(1 * d / n)
                                                  , v = Math.round(h * e);
                                                r(v),
                                                requestAnimationFrame(o)
                                            }
                                        }
                                        requestAnimationFrame(o)
                                    }
                                    e(51763, 3e3, 0, (function(t) {
                                        var e = t.toLocaleString();
                                        document.getElementById("links-count").innerText = e + "+"
                                    }
                                    )),
                                    e(308430, 3e3, 0, (function(t) {
                                        var e = t.toLocaleString();
                                        document.getElementById("access-count").innerText = e + "+"
                                    }
                                    )),
                                    e(1e4, 3e3, 0, (function(t) {
                                        var e = t.toLocaleString();
                                        document.getElementById("customer-count").innerText = e + "+"
                                    }
                                    ))
                                }
                                ,
                                e.prev = 2,
                                e.next = 5,
                                t.$recaptcha.init();
                            case 5:
                                e.next = 10;
                                break;
                            case 7:
                                e.prev = 7,
                                e.t0 = e.catch(2),
                                console.error(e.t0);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 7]])
                }
                )))()
            },
            data: function() {
                return {
                    link_website: "",
                    is_error: !1,
                    is_load: !1,
                    is_success: !1,
                    link_short: ""
                }
            },
            methods: {
                onShort: function() {
                    var t = this;
                    return Object(c.a)(regeneratorRuntime.mark((function e() {
                        var n, header, r, o, d, h;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((n = t).is_load = !0,
                                    n.is_error = !1,
                                    n.is_success = !1,
                                    v = n.link_website,
                                    !new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(v)) {
                                        e.next = 33;
                                        break
                                    }
                                    return n.is_load = !1,
                                    n.is_error = !1,
                                    header = {},
                                    r = "",
                                    e.prev = 9,
                                    e.next = 12,
                                    t.$recaptcha.execute("home");
                                case 12:
                                    r = e.sent,
                                    e.next = 17;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(9);
                                case 17:
                                    if (!n.$store.state.user || !n.$store.state.user.access_token) {
                                        e.next = 26;
                                        break
                                    }
                                    return header = {
                                        Authorization: n.$store.state.user.access_token
                                    },
                                    o = "api/shorten-link/gen-shorten-link?url=" + encodeURIComponent(n.link_website) + "&token=" + r,
                                    e.next = 22,
                                    l.a.get_data_json_login(o, header).catch(function() {
                                        var t = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        401 == e.response.status ? (n.$store.commit("logout", null),
                                                        n.$router.push(n.urlLang + "/login")) : (n.$store.commit("updateError", e),
                                                        n.$router.push("/404"));
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
                                        }
                                    }());
                                case 22:
                                    (d = e.sent) && !d.err ? (n.link_short = "https://trafficdownload1s.com" + n.urlLang + "/" + d.id,
                                    n.is_success = !0) : d.err ? n.$toast.error(d.err) : (n.$store.commit("updateError", d.err),
                                    n.$router.push("/404")),
                                    e.next = 31;
                                    break;
                                case 26:
                                    return o = "api/gen-link/gen-shorten-link?url=" + encodeURIComponent(n.link_website) + "&token=" + r,
                                    e.next = 29,
                                    l.a.get_data_json(o, null).catch((function(t) {
                                        n.$store.commit("updateError", t),
                                        n.$router.push("/404")
                                    }
                                    ));
                                case 29:
                                    (h = e.sent) && !h.err ? (n.link_short = "https://trafficdownload1s.com" + n.urlLang + "/" + h.id,
                                    n.is_success = !0) : h.err ? n.$toast.error(h.err) : (n.$store.commit("updateError", h.err),
                                    n.$router.push("/404"));
                                case 31:
                                    e.next = 35;
                                    break;
                                case 33:
                                    t.is_load = !1,
                                    t.is_error = !0;
                                case 35:
                                case "end":
                                    return e.stop()
                                }
                            var v
                        }
                        ), e, null, [[9, 15]])
                    }
                    )))()
                },
                copyUrl: function() {
                    navigator.clipboard.writeText(this.link_short)
                }
            }
        }
          , v = h
          , f = (n(337),
        n(504),
        n(64))
          , component = Object(f.a)(v, (function() {
            var t = this
              , e = t._self._c;
            return e("div", [e("Header"), t._v(" "), e("main", {
                staticClass: "main"
            }, [e("section", {
                staticClass: "search_container"
            }, [e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "search_wrap"
            }, [e("div", {
                staticClass: "search"
            }, [e("h1", {
                staticClass: "search_title"
            }, [t._v(t._s(t.$t("home.sologan1")))]), t._v(" "), e("p", {
                staticClass: "search_desc"
            }, [t._v(t._s(t.$t("home.sologan2")))]), t._v(" "), e("div", {
                staticClass: "search-form"
            }, [t._m(0), t._v(" "), e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.link_website,
                    expression: "link_website"
                }],
                staticClass: "form-control search-input",
                attrs: {
                    id: "search-input",
                    type: "text",
                    placeholder: t.$t("home.placeholder")
                },
                domProps: {
                    value: t.link_website
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.link_website = e.target.value)
                    }
                }
            }), t._v(" "), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.is_error,
                    expression: "is_error"
                }],
                staticClass: "search-wrong show",
                attrs: {
                    for: "search-input"
                }
            }, [t._m(1), t._v(" "), e("div", {
                staticClass: "tooltip"
            }, [e("p", [t._v(t._s(t.$t("home.not_found")))])])]), t._v(" "), e("button", {
                staticClass: "search-button",
                attrs: {
                    type: "submit"
                },
                on: {
                    click: t.onShort
                }
            }, [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.is_load,
                    expression: "is_load"
                }],
                staticClass: "loader simple-circle"
            }), e("span", [t._v(t._s(t.$t("home.shorten")))])])]), t._v(" "), e("div", {
                class: t.is_success ? "convert_complete show" : "convert_complete"
            }, [e("i", {
                staticClass: "pv pv-arrow"
            })]), t._v(" "), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.is_success,
                    expression: "is_success"
                }],
                staticClass: "search-result-content"
            }, [e("div", {
                staticClass: "search-result",
                on: {
                    click: t.copyUrl
                }
            }, [t._m(2), t._v(" "), e("p", {
                staticClass: "search-text",
                attrs: {
                    id: "shortLink"
                }
            }, [t._v(t._s(t.link_short))])]), t._v(" "), e("div", {
                staticClass: "tooltip text-gray"
            }, [e("p", [t._v(t._s(t.$t("home.click_copy")))])])])]), t._v(" "), e("div", {
                staticClass: "row"
            }, [e("div", {
                staticClass: "col-lg-4 mb-16"
            }, [e("h2", {
                staticClass: "section-title"
            }, [t._v(t._s(t.$t("home.number_user")) + " "), e("span", {
                staticClass: "strong-text"
            }, [t._v("Blitly")])])]), t._v(" "), e("div", {
                staticClass: "col-lg-8"
            }, [e("div", {
                staticClass: "row",
                attrs: {
                    id: "feature-counter"
                }
            }, [e("div", {
                staticClass: "col-12 col-sm-4"
            }, [e("div", {
                staticClass: "counter"
            }, [e("p", {
                staticClass: "counter-number",
                attrs: {
                    id: "links-count"
                }
            }, [t._v("51763+")]), t._v(" "), e("p", {
                staticClass: "counter-desc"
            }, [t._v(t._s(t.$t("home.url")))])])]), t._v(" "), e("div", {
                staticClass: "col-12 col-sm-4"
            }, [e("div", {
                staticClass: "counter"
            }, [e("p", {
                staticClass: "counter-number",
                attrs: {
                    id: "access-count"
                }
            }, [t._v("308430+")]), t._v(" "), e("p", {
                staticClass: "counter-desc"
            }, [t._v(t._s(t.$t("home.access")))])])]), t._v(" "), e("div", {
                staticClass: "col-12 col-sm-4"
            }, [e("div", {
                staticClass: "counter"
            }, [e("p", {
                staticClass: "counter-number",
                attrs: {
                    id: "customer-count"
                }
            }, [t._v("10000+")]), t._v(" "), e("p", {
                staticClass: "counter-desc"
            }, [t._v(t._s(t.$t("home.customer")))])])])])])])])])]), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6)]), t._v(" "), e("Footer")], 1)
        }
        ), r, !1, null, "55d6390f", null);
        e.default = component.exports;
        installComponents(component, {
            Header: n(328).default,
            Footer: n(329).default
        })
    }
}]);
