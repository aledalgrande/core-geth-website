(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4RhW":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("A2+M"),i=(r("f3/d"),r("tUrg"),r("tRbT")),p=(r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("t8Zj")),c=r("k1TG"),u=(r("17x9"),r("2+6g"));var f=function(e,t){return t?Object(u.a)(e,t,{clone:!1}):e};var l=function(e){var t=function(t){var r=e(t);return t.css?Object(c.a)({},f(r,e(Object(c.a)({theme:t.theme},t.css))),{},function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(p.a)(e.filterProps)),t};r("DNiP");var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?f(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},m=(r("LK8F"),r("KKXr"),r("FqMR")),y=r("0QZy"),d={xs:0,sm:600,md:960,lg:1280,xl:1920},h={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(d[e],"px)")}};function g(e,t,r){if(Array.isArray(t)){var n=e.theme.breakpoints||h;return t.reduce((function(e,o,a){return e[n.up(n.keys[a])]=r(t[a]),e}),{})}if("object"===Object(y.a)(t)){var o=e.theme.breakpoints||h;return Object.keys(t).reduce((function(e,n){return e[o.up(n)]=r(t[n]),e}),{})}return r(t)}function b(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var v=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=b(e.theme,o)||{};return g(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=b(i,e)||e,a&&(t=a(t))),!1===n?t:Object(m.a)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function O(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var x=s(v({prop:"border",themeKey:"borders",transform:O}),v({prop:"borderTop",themeKey:"borders",transform:O}),v({prop:"borderRight",themeKey:"borders",transform:O}),v({prop:"borderBottom",themeKey:"borders",transform:O}),v({prop:"borderLeft",themeKey:"borders",transform:O}),v({prop:"borderColor",themeKey:"palette"}),v({prop:"borderRadius",themeKey:"shape"})),j=s(v({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),v({prop:"display"}),v({prop:"overflow"}),v({prop:"textOverflow"}),v({prop:"visibility"}),v({prop:"whiteSpace"})),w=s(v({prop:"flexBasis"}),v({prop:"flexDirection"}),v({prop:"flexWrap"}),v({prop:"justifyContent"}),v({prop:"alignItems"}),v({prop:"alignContent"}),v({prop:"order"}),v({prop:"flex"}),v({prop:"flexGrow"}),v({prop:"flexShrink"}),v({prop:"alignSelf"}),v({prop:"justifyItems"}),v({prop:"justifySelf"})),E=s(v({prop:"position"}),v({prop:"zIndex",themeKey:"zIndex"}),v({prop:"top"}),v({prop:"right"}),v({prop:"bottom"}),v({prop:"left"})),P=s(v({prop:"color",themeKey:"palette"}),v({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),A=v({prop:"boxShadow",themeKey:"shadows"});function K(e){return e<=1?"".concat(100*e,"%"):e}var S=v({prop:"width",transform:K}),R=v({prop:"maxWidth",transform:K}),k=v({prop:"minWidth",transform:K}),I=v({prop:"height",transform:K}),T=v({prop:"maxHeight",transform:K}),X=v({prop:"minHeight",transform:K}),B=(v({prop:"size",cssProperty:"width",transform:K}),v({prop:"size",cssProperty:"height",transform:K}),s(S,R,k,I,T,X)),F=(r("bWfx"),r("YjCJ"));var L=r("SCGU");function M(e,t){return Object(F.a)(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,p=e[Symbol.iterator]();!(n=(i=p.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==p.return||p.return()}finally{if(o)throw a}}return r}}(e,t)||Object(L.a)()}var D,z,C={m:"margin",p:"padding"},W={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},q={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},_=(D=function(e){if(e.length>2){if(!q[e])return[e];e=q[e]}var t=M(e.split(""),2),r=t[0],n=t[1],o=C[r],a=W[n]||"";return Array.isArray(a)?a.map((function(e){return o+e})):[o+a]},z={},function(e){return void 0===z[e]&&(z[e]=D(e)),z[e]}),G=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function H(e,t){return function(r){return e.reduce((function(e,n){return e[n]=function(e,t){if("string"==typeof t)return t;var r=e(Math.abs(t));return t>=0?r:"number"==typeof r?-r:"-".concat(r)}(t,r),e}),{})}}function J(e){var t=function(e){var t=e.spacing||8;return"number"==typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"==typeof t?t:function(){}}(e.theme);return Object.keys(e).map((function(r){if(-1===G.indexOf(r))return null;var n=H(_(r),t),o=e[r];return g(e,o,n)})).reduce(f,{})}J.propTypes={},J.filterProps=G;var V=J,Y=s(v({prop:"fontFamily",themeKey:"typography"}),v({prop:"fontSize",themeKey:"typography"}),v({prop:"fontStyle",themeKey:"typography"}),v({prop:"fontWeight",themeKey:"typography"}),v({prop:"letterSpacing"}),v({prop:"lineHeight"}),v({prop:"textAlign"})),N=r("/P46"),U=r("cNwE"),Z=function(e){var t=Object(N.a)(e);return function(e,r){return t(e,Object(c.a)({defaultTheme:U.a},r))}},Q=l(s(x,j,w,E,P,A,B,V,Y)),$=Z("div")(Q,{name:"MuiBox"}),ee=r("ofer"),te=r("hlie"),re=r("Z3vd"),ne=r("Wbzz"),oe=r("gLOz"),ae=r.n(oe),ie=r("E3hX"),pe=r.n(ie),ce=function(e){return o.a.createElement(i.a,{container:!0,justify:"space-between",style:{paddingTop:"40px",paddingBottom:"40px"}},o.a.createElement($,{style:{visibility:e.prev?"visible":"hidden"}},o.a.createElement(ee.a,{gutterBottom:!0},"Previous"),e.prev&&o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{component:function(t){return o.a.createElement(ne.Link,{to:e.prev.link,style:{textDecoration:"none"}},t.children)}},o.a.createElement(re.a,{startIcon:o.a.createElement(ae.a,null)},e.prev.name)))),o.a.createElement($,{style:{visibility:e.next?"visible":"hidden"}},o.a.createElement(ee.a,{gutterBottom:!0,style:{textAlign:"right"}},"Next"),e.next&&o.a.createElement(o.a.Fragment,null,o.a.createElement(te.a,{component:function(t){return o.a.createElement(ne.Link,{to:e.next.link,style:{textDecoration:"none"}},t.children)}},o.a.createElement(re.a,{endIcon:o.a.createElement(pe.a,null)},e.next.name)))))};r.d(t,"pageQuery",(function(){return ue}));t.default=function(e){e.children;var t=e.pageContext,r=e.data.mdx;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.MDXRenderer,{slug:r.fields.slug},r.body),o.a.createElement(ce,{prev:t.prev,next:t.next}))};var ue="2595679916"},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},E3hX:function(e,t,r){"use strict";r("HAE/");var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");t.default=a},I5cv:function(e,t,r){var n=r("XKFU"),o=r("Kuth"),a=r("2OiF"),i=r("y3w9"),p=r("0/R4"),c=r("eeVq"),u=r("8MEG"),f=(r("dyZX").Reflect||{}).construct,l=c((function(){function e(){}return!(f((function(){}),[],e)instanceof e)})),s=!c((function(){f((function(){}))}));n(n.S+n.F*(l||s),"Reflect",{construct:function(e,t){a(e),i(t);var r=arguments.length<3?e:a(arguments[2]);if(s&&!l)return f(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(u.apply(e,n))}var c=r.prototype,m=o(p(c)?c:Object.prototype),y=Function.apply.call(e,m,t);return p(y)?y:m}})},SCGU:function(e,t,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}r.d(t,"a",(function(){return n}))},X8hv:function(e,t,r){function n(e,t,r){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("/SS/"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("/SS/"),r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var u=r("q1tI"),f=r("7ljp"),l=f.useMDXComponents,s=f.mdx,m=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,o=e.children,i=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["scope","components","children"]),c=l(r),f=m(t),y=u.useMemo((function(){if(!o)return null;var e=p({React:u,mdx:s},f),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(r)))}),[o,t]);return u.createElement(y,p({components:c},i))}},YjCJ:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return n}))},gLOz:function(e,t,r){"use strict";r("HAE/");var n=r("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.default=a}}]);
//# sourceMappingURL=component---node-modules-etclabscore-gatsby-theme-pristine-src-templates-default-tsx-0eed3ca6c69d9e8e0152.js.map