(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},ISCN:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.r(e),n.d(e,"default",(function(){return w}));var o=n("1OyB"),i=n("vuIU"),a=n("JX7q"),c=n("Ji7U"),s=n("md7G"),u=n("foSv"),f=n("rePB"),l=n("MX0m"),p=n.n(l),b=n("q1tI"),d=n.n(b),m=(n("i8i4"),n("YFqc"),n("p46w")),x=n.n(m),y=d.a.createElement;function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var w=function(t){Object(c.a)(n,t);var e=j(n);function n(t){var i;Object(o.a)(this,n),i=e.call(this,t),Object(f.a)(Object(a.a)(i),"state",{}),Object(f.a)(Object(a.a)(i),"mySubmitHandler",(function(t){t.preventDefault(),alert("You are submitting")})),Object(f.a)(Object(a.a)(i),"renderForm",(function(){console.log("TOP");var t=i.props.model,e=(t.title,x.a.get("data"));console.log(e);var n="";e&&(n=JSON.parse(e));var o=[],a=t.formFields.map((function(t){console.log("IN LOOP");var e=t.key,a=t.label;o.push(a);var c=t.type||"text",s=t.props||{};return y("div",{key:e,className:"row"},y("div",{className:"col-25"},y("label",{className:"form-label",key:"l"+t.key,htmlFor:t.key},a)),y("div",{className:"col-75"},y("input",r({},s,{ref:function(e){i[t.key]=e},className:"form-input",type:c,key:"i"+t.key,onChange:function(t){i.onChange(t,e)},value:n[e]}))))}));return x.a.set("credentialLabel",o),x.a.set("data",""),a})),Object(f.a)(Object(a.a)(i),"onSubmit",(function(t){t.preventDefault(),i.props.onSubmit&&i.props.onSubmit(i.state)})),Object(f.a)(Object(a.a)(i),"onChange",(function(t,e){i.setState(Object(f.a)({},e,i[e].value))}));var c=x.a.get("data");if(c)var s=JSON.parse(c);for(var u in s){var l=s[u];i.state[u]=l}return i}return Object(i.a)(n,[{key:"render",value:function(){var t=this;this.props.title;return y("div",{className:"jsx-2048005163 "+(this.props.className||"")},y("link",{href:"https://fonts.googleapis.com/css?family=Quicksand:300,500",rel:"stylesheet",className:"jsx-2048005163"}),y("form",{onSubmit:function(e){t.onSubmit(e)},className:"jsx-2048005163 dynamic-form"},y("div",{className:"jsx-2048005163 containerOuter"},y("div",{className:"jsx-2048005163 containerForm"},this.renderForm())),y("div",{className:"jsx-2048005163 grid"},y("button",{type:"submit",className:"jsx-2048005163 cardSubmit"},y("h3",{className:"jsx-2048005163"},"Submit")))),y(p.a,{id:"2048005163"},["*.jsx-2048005163{box-sizing:border-box;}",".grid.jsx-2048005163{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:0rem;}","input[type=text].jsx-2048005163,select.jsx-2048005163,textarea.jsx-2048005163{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;resize:vertical;}","label.jsx-2048005163{padding:12px 12px 12px 0;display:inline-block;}",'.row.jsx-2048005163:after{content:"";display:table;clear:both;}',".card.jsx-2048005163:hover,.card.jsx-2048005163:focus,.card.jsx-2048005163:active{color:#0070f3;border-color:#0070f3;}",".cardSubmit.jsx-2048005163 h3.jsx-2048005163{margin:0 0 0rem 0;font-size:1.2rem;}",".cardSubmit.jsx-2048005163{margin:0.2rem;width:100%;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1rem;text-align:center;color:black;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;background-color:white;font-family:'Montserrat',sans-serif;}",".cardSubmit.jsx-2048005163:hover,.cardSubmit.jsx-2048005163:focus,.cardSubmit.jsx-2048005163:active{color:#0070f3;border-color:#0070f3;}",".containerForm.jsx-2048005163{border-radius:5px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:right;-webkit-justify-content:right;-ms-flex-pack:right;justify-content:right;padding:20px;}",".containerOuter.jsx-2048005163{padding:25px;}",".center.jsx-2048005163{margin:0;position:absolute;left:50%;-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}","button.jsx-2048005163{font-family:'Montserrat',sans-serif;background-color:#DCFFEB;}",".col-25.jsx-2048005163{float:left;width:25%;margin-top:6px;}",".col-75.jsx-2048005163{float:left;width:75%;margin-top:6px;}","@media screen and (max-width:10000px){.col-25.jsx-2048005163,.col-75.jsx-2048005163,input[type=submit].jsx-2048005163{width:100%;margin-top:0;}}"]))}}]),n}(d.a.Component)},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return a}));var i=n("JX7q");function a(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(i.a)(t):e}},p46w:function(t,e,n){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(e,n,e,t):r)||(t.exports=o),!0,t.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(e,n,i){if("undefined"!==typeof document){"number"===typeof(i=t({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(u){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in i)i[s]&&(c+="; "+s,!0!==i[s]&&(c+="="+i[s].split(";")[0]));return document.cookie=e+"="+n+c}}function a(t,n){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=e(c[0]);if(s=(r.read||r)(s,u)||e(s),n)try{s=JSON.parse(s)}catch(f){}if(o[u]=s,t===u)break}catch(f){}}return t?o[t]:o}}return o.set=i,o.get=function(t){return a(t,!1)},o.getJSON=function(t){return a(t,!0)},o.remove=function(e,n){i(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},pfQL:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/credentials/components/DynamicForm",function(){return n("ISCN")}])},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["pfQL",0,2,1,3]]]);