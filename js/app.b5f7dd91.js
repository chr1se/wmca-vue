(function(e){function t(t){for(var n,a,c=t[0],l=t[1],o=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,o||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("aside",{attrs:{role:"search"}},[r("h2",{attrs:{onclick:"this.nextElementSibling.classList.toggle('reveal')"}},[e._v("Refine")]),r("div",{staticClass:"filters"},[r("div",{staticClass:"label"},[e._v("Name")]),r("div",{ref:"name",staticClass:"input",attrs:{id:"name",contenteditable:"true"},on:{input:function(t){return e.filter()}}}),r("div",{staticClass:"label"},[e._v("Age")]),r("div",{ref:"age",staticClass:"input age",attrs:{id:"age",onclick:"this.nextElementSibling.style.display = 'block'"}}),r("div",{staticClass:"ages"},[r("div",{class:{selected:0===e.selectedAge},on:{click:function(t){return e.selectAge(t.currentTarget,0)}}},[e._v("none")]),r("div",{class:{selected:1===e.selectedAge},on:{click:function(t){return e.selectAge(t.currentTarget,1)}}},[e._v("0 - 10")]),r("div",{class:{selected:2===e.selectedAge},on:{click:function(t){return e.selectAge(t.currentTarget,2)}}},[e._v("10 - 20")]),r("div",{class:{selected:3===e.selectedAge},on:{click:function(t){return e.selectAge(t.currentTarget,3)}}},[e._v("20 - 30")]),r("div",{class:{selected:4===e.selectedAge},on:{click:function(t){return e.selectAge(t.currentTarget,4)}}},[e._v("30 - 40")]),r("div",{class:{selected:5===e.selectedAge},on:{click:function(t){return e.selectAge(t.currentTarget,5)}}},[e._v("40 - 50")])]),r("div",{staticClass:"label"},[e._v("Gender")]),r("div",{staticClass:"radiorow",attrs:{"data-gender":"male"},on:{click:function(t){return e.setGender(t.currentTarget)}}},[r("div",{staticClass:"radio"},[e._v("●")]),r("div",[e._v("Male")])]),r("br"),r("div",{staticClass:"radiorow",attrs:{"data-gender":"female"},on:{click:function(t){return e.setGender(t.currentTarget)}}},[r("div",{staticClass:"radio"},[e._v("●")]),r("div",[e._v("Female")])])])]),r("article",[r("h2",{attrs:{id:"counter"}},[e._v(e._s(e.filtered.length+" result"+(1==e.filtered.length?"":"s")))]),r("div",{attrs:{id:"users"}},e._l(e.current,(function(e){return r("User",{key:e.name.first,attrs:{user:e}})})),1),r("div",{attrs:{id:"pager"}},[r("div",{staticClass:"prev",style:[e.page?{visibility:"visible"}:{visibility:"hidden"}],on:{click:function(t){return e.move(-1)}}},[e._v("Prev")]),e._l(e.pages,(function(t,n){return r("span",{key:n,class:{current:n==e.page},on:{click:function(t){return e.setPageNum(n)}}},[e._v(e._s(n+1))])})),e.pages.length>1&&e.page<e.pages.length-1?r("div",{staticClass:"next",on:{click:function(t){return e.move(1)}}},[e._v("Next")]):e._e()],2)]),e._m(1),e._m(2)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div"),r("h1",[e._v("Find a person")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"speechBox",attrs:{onclick:"toggle(this)"}},[r("div",[e._v("Start speech recognition")]),r("div",{staticClass:"err"},[e._v("Use Chrome")]),r("div",{staticClass:"list"},[r("p",[e._v("Say:")]),r("p",[e._v('" search '),r("span",[e._v("andy")]),e._v(' "')]),r("p",[e._v('" age '),r("span",[e._v("30")]),e._v(' "')]),r("p",[e._v('" gender '),r("span",[e._v("male")]),e._v(' "')]),r("p",[e._v('" select '),r("span",[e._v("andy")]),e._v(' "')]),r("p",[e._v('" clear "')])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("div",[r("a",{attrs:{href:"https://www.wmca.org.uk/careers"}},[e._v("Careers")]),r("a",{attrs:{href:"https://www.wmca.org.uk/documents"}},[e._v("Documents")]),r("a",{attrs:{href:"https://www.wmca.org.uk/policies"}},[e._v("Policies")]),r("a",{attrs:{href:"https://www.governance.wmca.org.uk/"}},[e._v("Committee meetings")]),r("a",{attrs:{href:"https://www.wmca.org.uk/contact-us"}},[e._v("Contact us")]),r("a",{attrs:{href:"https://www.wmca.org.uk/procurement"}},[e._v("Procurement")]),r("a",{attrs:{href:"https://www.wmca.org.uk/media-assets"}},[e._v("Media Assets")]),r("a",{attrs:{href:"https://www.wmca.org.uk/freedom-of-information"}},[e._v("Freedom of Information")])])])}],a=(r("4de4"),r("caad"),r("d81d"),r("fb6a"),r("b0c0"),r("a9e3"),r("d3b7"),r("ac1f"),r("2532"),r("1276"),r("96cf"),r("1da1")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user"},[r("img",{attrs:{src:e.user.picture.large,alt:"pic"}}),r("h2",[e._v(e._s(e.user.name.first+" "+e.user.name.last))]),r("div",{staticClass:"label"},[e._v("Age:")]),r("div",[e._v(e._s(e.user.dob.age))]),r("br"),r("div",{staticClass:"label"},[e._v("Gender:")]),r("div",[e._v(e._s(e.user.gender))]),r("br"),r("div",{staticClass:"label"},[e._v("Email:")]),r("div",[e._v(e._s(e.user.email))])])},l=[],o={name:"User",props:["user"]},u=o,d=(r("97f0"),r("2877")),f=Object(d["a"])(u,c,l,!1,null,"42d79354",null),v=f.exports,p={name:"App",components:{User:v},data:function(){return{selectedAge:0,gender:"",people:[],filtered:[],current:[],pages:[],page:0}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://randomuser.me/api/?seed=2008d0266ae87612&inc=picture,gender,name,dob,email&results=100").then((function(e){return e.json()})).then((function(e){return e.results}));case 2:e.people=t.sent,e.filtered=e.people,e.current=e.filtered.slice(0,6),e.pages=new Array(Math.ceil(e.filtered.length/6));case 6:case"end":return t.stop()}}),t)})))()},methods:{setPageNum:function(e){this.page=e,this.current=this.filtered.slice(6*e,6*e+6)},move:function(e){this.page+=e,this.current=this.filtered.slice(6*this.page,6*this.page+6)},selectAge:function(e,t){"selected"!==e.className&&(this.selectedAge=t,e.parentElement.previousElementSibling.innerText="none"===e.innerText?"":e.innerText,e.parentElement.style.display="none",this.filter(),setTimeout((function(){return e.parentElement.removeAttribute("style")}),100))},setGender:function(e){if(e.classList.contains("selected"))return e.classList.remove("selected"),this.gender="",void this.filter();var t="male"==e.dataset.gender?"next":"previous";e.classList.add("selected"),e[t+"ElementSibling"][t+"ElementSibling"].classList.remove("selected"),this.gender=e.dataset.gender,this.filter()},filter:function(){var e=this,t=this.$refs.name.innerText.toLowerCase(),r=this.$refs.age.innerText.split("-").map((function(e){return Number(e)}));this.filtered=this.people.filter((function(n){var s=[(n.name.first+n.name.last).toLowerCase(),n.dob.age,n.gender],i=s[0],a=s[1],c=s[2];return!(t&&!i.includes(t)||r[1]&&(a<r[0]||a>r[1])||e.gender&&c!==e.gender)})),this.current=this.filtered.slice(6*this.page,6*this.page+6),this.pages=new Array(Math.ceil(this.filtered.length/6))}}},g=p,h=(r("034f"),Object(d["a"])(g,s,i,!1,null,null,null)),m=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,r){},"8fc6":function(e,t,r){},"97f0":function(e,t,r){"use strict";var n=r("8fc6"),s=r.n(n);s.a}});
//# sourceMappingURL=app.b5f7dd91.js.map