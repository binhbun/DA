(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5,8,11],{328:function(t,e,o){"use strict";o.r(e);var r=o(4),n=(o(38),o(42),o(43),o(29),o(97),{name:"Header",props:{},components:{},watchQuery:function(t){return t},created:function(){this.$route.name.includes("default")?this.lang="vi":this.lang="en",this.urlLang="/"+this.lang,"vi"==this.lang&&(this.urlLang=""),this.$store.state.user&&this.$store.state.user.access_token?this.isLogin=!0:this.isLogin=!1},mounted:function(){var t,header=document.getElementById("header-container"),e=document.getElementById("toggle-menu"),menu=header.querySelector(".navigation"),o=header.querySelector("#language-select"),r=null;null!==(t=window)&&void 0!==t&&t.scrollY&&window.scrollY>10&&header.classList.add("scroll-to"),window.onscroll=function(t){clearTimeout(r),window.scrollY>10?(header.classList.add("topdown"),r=setTimeout((function(){header.classList.add("scroll-to")}),1)):window.scrollY<10&&(header.classList.remove("topdown"),header.classList.remove("scroll-to"))},e.onclick=function(t){menu.classList.toggle("show")},o.onclick=function(t){o.classList.toggle("show")}},data:function(){return{isLogin:!1,lang:"vi",urlLang:""}},watch:{},methods:{changeLang:function(t){},login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("keycloak");case 3:o=e.sent,console.log(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.error="Username or Password not valid";case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},signup:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.sing("keycloak");case 3:o=e.sent,console.log(o),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.error="Username or Password not valid";case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),l=n,c=o(64),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header-container",attrs:{id:"header-container"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"logo_container"},[e("a",{staticClass:"logo",attrs:{href:t.urlLang+"/"}},[e("img",{staticClass:"logo_image",attrs:{src:o(331),alt:"logo"}})])]),t._v(" "),t._m(0),t._v(" "),e("nav",{staticClass:"navigation"},[e("ul",{staticClass:"main_nav"},[e("li",[e("a",{staticClass:"active",attrs:{href:t.urlLang+"/"}},[t._v(t._s(t.$t("header.home")))])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}]},[e("a",{attrs:{href:"/user/dashboard"}},[t._v(t._s(t.$t("header.dashboard")))])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}]},[e("a",{attrs:{href:t.urlLang+"/login"}},[t._v(t._s(t.$t("header.login")))])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}]},[e("a",{attrs:{href:t.urlLang+"/register"}},[t._v(t._s(t.$t("header.sign_up")))])])]),t._v(" "),e("div",{staticClass:"language_container",attrs:{id:"language-select"}},[e("div",{staticClass:"language"},[e("p",{staticClass:"language_selected"},[t._v(t._s("vi"==t.lang?"VI":"EN"))]),e("i",{staticClass:"pv pv-down-arrow language_icon"})]),t._v(" "),e("ul",{staticClass:"language_list"},[e("li",[e("button",{on:{click:function(e){t.lang="en"}}},[e("nuxt-link",{attrs:{to:t.switchLocalePath("en")}},[t._v("English")])],1)]),t._v(" "),e("li",[e("button",{on:{click:function(e){t.lang="vi"}}},[e("nuxt-link",{attrs:{to:t.switchLocalePath("vi")}},[t._v("Tiếng Việt")])],1)])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"toggle-container",attrs:{id:"toggle-menu"}},[t("i",{staticClass:"pv pv-menu-1"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(328).default})},329:function(t,e,o){"use strict";o.r(e);var r={name:"Footer",props:{},created:function(){},mounted:function(){},data:function(){return{}}},n=o(64),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-5 col-xl-4"},[e("img",{staticClass:"footer_image",attrs:{src:o(332),alt:"logo"}}),t._v(" "),e("p",{staticClass:"footer-desc"},[t._v(t._s(t.$t("footer.sologan")))])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-7 col-xl-8"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"footer-title"},[t._v(t._s(t.$t("footer.pages")))]),t._v(" "),e("ul",[e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.about")))])]),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("header.login")))])]),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.help")))])]),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.contact")))])])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"footer-title"},[t._v(t._s(t.$t("footer.service")))]),t._v(" "),e("ul",[e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.content")))])]),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.document")))])]),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.account")))])]),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.job")))])])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"footer-title"},[t._v(t._s(t.$t("footer.address")))]),t._v(" "),e("ul",[e("li",[e("p",{staticClass:"footer-address"},[t._v(t._s(t.$t("footer.add")))])])])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("hr"),t._v(" "),e("ul",{staticClass:"copyright"},[t._m(0),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.terms")))])]),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.privacy"))+" ")])]),t._v(" "),e("li",[e("a",{staticClass:"footer-sub",attrs:{href:"#"}},[t._v(t._s(t.$t("footer.policies")))])])])])])}),[function(){var t=this._self._c;return t("li",[t("a",{staticClass:"footer-sub",attrs:{href:"https://mienphitemplate.com/"}},[this._v("Slide template")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(329).default})},331:function(t,e,o){t.exports=o.p+"img/logo.1e88201.svg"},332:function(t,e,o){t.exports=o.p+"img/logo_white.ffd7b8d.svg"},336:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},338:function(t,e,o){var r=o(6),n=o(36),l=o(16),c=o(336),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t){return function(e){var o=l(n(e));return 1&t&&(o=d(o,v,"")),2&t&&(o=d(o,m,"")),o}};t.exports={start:h(1),end:h(2),trim:h(3)}},341:function(t,e,o){"use strict";var r=o(2),n=o(338).trim;r({target:"String",proto:!0,forced:o(353)("trim")},{trim:function(){return n(this)}})},351:function(t,e,o){var content=o(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(163).default)("7b091ac9",content,!0,{sourceMap:!1})},353:function(t,e,o){var r=o(100).PROPER,n=o(3),l=o(336);t.exports=function(t){return n((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},356:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));o(24),o(65),o(341);var r=[{lang:"vi",locale:"vi"},{lang:"fr",locale:"fr"},{lang:"es",locale:"es"},{lang:"hi",locale:"hi"},{lang:"pt",locale:"pt"},{lang:"ru",locale:"ru"},{lang:"th",locale:"th"},{lang:"ar",locale:"ar"},{lang:"ko",locale:"ko"},{lang:"ja",locale:"ja"},{lang:"zh",locale:"zh"},{lang:"de",locale:"de"},{lang:"en",locale:"en"}]},358:function(t,e,o){"use strict";o(351)},359:function(t,e,o){var r=o(162)(!1);r.push([t.i,'.loading[data-v-56acc8e4]{z-index:999;height:2em;width:2em;overflow:show;margin:auto;bottom:0;right:0}.loading[data-v-56acc8e4],.loading[data-v-56acc8e4]:before{position:fixed;top:0;left:0}.loading[data-v-56acc8e4]:before{content:"";display:block;width:100%;height:100%;background:radial-gradient(rgba(20,20,20,.8),rgba(0,0,0,.8));background:-webkit-radial-gradient(rgba(20,20,20,.8),rgba(0,0,0,.8))}.loading[data-v-56acc8e4]:not(:required){font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.loading[data-v-56acc8e4]:not(:required):after{content:"";display:block;font-size:10px;width:1em;height:1em;margin-top:-.5em;animation:spinner-56acc8e4 .15s linear infinite;border-radius:.5em;box-shadow:1.5em 0 0 0 hsla(0,0%,100%,.75),1.1em 1.1em 0 0 hsla(0,0%,100%,.75),0 1.5em 0 0 hsla(0,0%,100%,.75),-1.1em 1.1em 0 0 hsla(0,0%,100%,.75),-1.5em 0 0 0 hsla(0,0%,100%,.75),-1.1em -1.1em 0 0 hsla(0,0%,100%,.75),0 -1.5em 0 0 hsla(0,0%,100%,.75),1.1em -1.1em 0 0 hsla(0,0%,100%,.75)}@keyframes spinner-56acc8e4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.loader[data-v-56acc8e4]{font-size:18px;font-weight:400;font-style:italic;width:100%;text-align:center;margin:20% auto auto}@media only screen and (max-width:991.98px){.loader[data-v-56acc8e4]{margin-top:0;background-color:#fff}}',""]),t.exports=r},362:function(t,e,o){t.exports=o.p+"img/logo-color.8800121.svg"},363:function(t,e,o){"use strict";o.r(e);var r={name:"Loading"},n=(o(358),o(64)),component=Object(n.a)(r,(function(){return(0,this._self._c)("div",{staticClass:"loading"},[this._v("Loading…")])}),[],!1,null,"56acc8e4",null);e.default=component.exports},373:function(t,e,o){var content=o(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(163).default)("03d9e76c",content,!0,{sourceMap:!1})},512:function(t,e,o){"use strict";o(373)},513:function(t,e,o){var r=o(162)(!1);r.push([t.i,".login-page[data-v-610f511e]{display:flex;justify-content:center;align-items:center;min-height:100vh;background-color:#fcfaf1;background:url(/img/bg-testimonials-large.webp) top/cover}.login-page .result-icon[data-v-610f511e]{font-size:72px}.login-page .result-wrong[data-v-610f511e]{color:#ff4d4f}.login-page .result-success[data-v-610f511e]{color:#52c41a}.login-page .result-warning[data-v-610f511e]{color:#faad14}.login-page .result-title[data-v-610f511e]{color:rgba(0,0,0,.8509803922);font-size:24px;line-height:1.8;text-align:center;margin:16px 0 0}.login-page .result-paragraph[data-v-610f511e]{color:rgba(0,0,0,.4509803922);font-size:18px;line-height:1.6;text-align:center}.login-wrap[data-v-610f511e]{width:100%;padding:48px;margin:70px auto;border-radius:16px;box-shadow:0 10px 34px -15px rgba(0,0,0,.24);background:linear-gradient(135deg,rgba(252,255,226,.4392156863),rgba(255,239,248,.4392156863))}.login-paragraph[data-v-610f511e]{margin-top:32px;margin-bottom:1rem;color:#212121;font-size:16px;line-height:1.8;font-weight:400}.login-logo[data-v-610f511e]{display:block;height:52px;text-decoration:none}.login-logo__image[data-v-610f511e]{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.login-form__field[data-v-610f511e]{margin-bottom:1rem}.login-form__title[data-v-610f511e]{font-size:1.75rem;font-weight:500;margin-bottom:1.5rem;line-height:1.5}.login-form__label[data-v-610f511e]{display:inline-block;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#000;font-weight:700;margin-bottom:.5rem}.login-form__forgot-password[data-v-610f511e]{display:block;margin-top:0;margin-bottom:12px;text-align:right}input.form-control--circle[data-v-610f511e]:-webkit-autofill{-webkit-box-shadow:0 0 0 50px #fff inset;-webkit-text-fill-color:#333}.login-form__password-field[data-v-610f511e]{position:relative;overflow:hidden}.login-form__password-field input[data-v-610f511e]:-webkit-autofill{-webkit-box-shadow:0 0 0 50px #fff inset;-webkit-text-fill-color:#333}.login-form__password-eye[data-v-610f511e]{position:absolute;top:50%;transform:translateY(-50%);right:0;font-size:18px;cursor:pointer;padding:16px;background-color:inherit}@media (min-width:992px){.login-wrap[data-v-610f511e]{width:75%}}@media (min-width:1200px){.login-wrap[data-v-610f511e]{width:60%}}@media (min-width:1400px){.login-wrap[data-v-610f511e]{width:55%}}.form-control--circle[data-v-610f511e]{height:48px;background:#fff;color:#000;font-size:16px;border-radius:50px;box-shadow:none;border:1px solid #aaa;padding-left:20px;padding-right:20px;transition:all .2s ease-in-out}.form-control--wrong[data-v-610f511e]{border-color:tomato;outline-color:tomato}.w-100[data-v-610f511e]{width:100%}",""]),t.exports=r},558:function(t,e,o){"use strict";o.r(e);o(55),o(39);var r=[function(){var t=this._self._c;return t("a",{staticClass:"login-logo",attrs:{href:"javascript:;"}},[t("img",{staticClass:"login-logo__image",attrs:{src:o(362),alt:""}})])}],n=o(15),l=o(4),header=(o(38),o(27),o(44),o(29),o(35),o(13),o(31),o(45),o(30),o(46),o(328)),footer=o(329),c=o(363),d=o(81),f=o(356);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"Login",components:{Header:header.default,Footer:footer.default,LoadingVue:c.default},head:function(){return{title:this.title,meta:[{property:"og:url",content:"https://blitly.io/login"},{name:"title",content:this.title},{name:"description",content:this.description},{property:"og:title",content:this.title},{property:"og:description",content:this.description}],link:[{rel:"canonical",href:"https://blitly.io/login"}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.route.name.split("login___")[1],(r=f.a.filter((function(t){return t.lang==o})))&&r.length>0?t.i18n.locale=r[0].locale:t.i18n.locale="vi",n="/"+o,"vi"!=o&&""!=o&&"vi___default"!=o||(n=""),e.abrupt("return",{urlLang:n,title:t.i18n.t("login.login")+" | Blitly",description:t.i18n.t("login.login")});case 6:case"end":return e.stop()}}),e)})))()},watchQuery:function(t){return t},created:function(){this.$store.state.user&&this.$store.state.user.access_token&&this.$router.push(this.urlLang?this.urlLang:"/")},data:function(){return{username:"",password:"",error:!1,classLableU:"form-control form-control--circle",classLable:"form-control form-control--circle",isShowPassword:!1,isLoading:!1}},methods:m(m({},Object(d.b)(["LogIn"])),{},{login:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,(o=t).username&&""!=o.username||(o.$toast.error(o.$i18n.t("register.username_invalid")),r=!1,o.classLableU="form-control form-control--circle form-control--wrong"),o.password&&""!=o.password||(o.$toast.error(o.$i18n.t("register.password_invalid")),r=!1,o.classLable="form-control form-control--circle form-control--wrong"),r){e.next=6;break}return e.abrupt("return",!1);case 6:return t.isLoading=!0,e.prev=7,n={user_name:o.username,password:o.password},e.next=11,o.LogIn(n);case 11:e.sent?t.$router.push("/user"):(o.error=!0,o.classLableU="form-control form-control--circle form-control--wrong",o.classLable="form-control form-control--circle form-control--wrong"),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(7),o.error=!0,o.classLableU="form-control form-control--circle form-control--wrong",o.classLable="form-control form-control--circle form-control--wrong";case 20:t.isLoading=!1;case 21:case"end":return e.stop()}}),e,null,[[7,15]])})))()},onInput:function(){this.error=!1,this.classLable="form-control form-control--circle"}})},_=(o(337),o(512),o(64)),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}}},[e("Header"),t._v(" "),e("main",{staticClass:"login-page"},[e("div",{staticClass:"container"},[e("div",{staticClass:"login-wrap"},[t._m(0),t._v(" "),e("h1",{staticClass:"login-form__title"},[t._v(t._s(t.$t("login.login")))]),t._v(" "),e("div",{staticClass:"login-form"},[e("div",{staticClass:"login-form__field"},[e("label",{staticClass:"login-form__label",attrs:{for:"username"}},[t._v(t._s(t.$t("login.username")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],class:t.classLableU,attrs:{id:"username",type:"text",name:"username",autofocus:""},domProps:{value:t.username},on:{input:[function(e){e.target.composing||(t.username=e.target.value)},t.onInput]}})]),t._v(" "),e("div",{staticClass:"login-form__field"},[e("label",{staticClass:"login-form__label",attrs:{for:"password"}},[t._v(t._s(t.$t("login.password")))]),t._v(" "),e("div",{staticClass:"login-form__password-field p-0",class:t.classLable},["checkbox"==(t.isShowPassword?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control--hidden",attrs:{id:"password",name:"password",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{input:t.onInput,change:function(e){var o=t.password,r=e.target,n=!!r.checked;if(Array.isArray(o)){var l=t._i(o,null);r.checked?l<0&&(t.password=o.concat([null])):l>-1&&(t.password=o.slice(0,l).concat(o.slice(l+1)))}else t.password=n}}}):"radio"==(t.isShowPassword?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control--hidden",attrs:{id:"password",name:"password",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{input:t.onInput,change:function(e){t.password=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control--hidden",attrs:{id:"password",name:"password",type:t.isShowPassword?"text":"password"},domProps:{value:t.password},on:{input:[function(e){e.target.composing||(t.password=e.target.value)},t.onInput]}}),t._v(" "),t.isShowPassword?e("i",{staticClass:"pv pv-bx-show login-form__password-eye",on:{click:function(e){t.isShowPassword=!1}}}):e("i",{staticClass:"pv pv-bx-hide login-form__password-eye",on:{click:function(e){t.isShowPassword=!0}}})])]),t._v(" "),t.error?e("span",{staticClass:"text-wrong"},[t._v(t._s(t.$t("login.err")))]):t._e(),t._v(" "),e("a",{staticClass:"login-form__forgot-password",attrs:{href:t.urlLang+"/forgot-password"}},[t._v(t._s(t.$t("login.forgot")))]),t._v(" "),e("button",{staticClass:"btn w-100",attrs:{type:"submit",disabled:t.isLoading},on:{click:t.login}},[t._v("\n            "+t._s(t.$t("login.login"))+"\n          ")])]),t._v(" "),e("h6",{staticClass:"login-paragraph"},[t._v(t._s(t.$t("login.register"))+" "),e("a",{attrs:{href:t.urlLang+"/register"}},[t._v(t._s(t.$t("login.register2")))])])])])]),t._v(" "),e("Footer"),t._v(" "),t.isLoading?e("LoadingVue"):t._e()],1)}),r,!1,null,"610f511e",null);e.default=component.exports;installComponents(component,{Header:o(328).default,Footer:o(329).default})}}]);