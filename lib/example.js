!function(n){var e={};function t(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)t.d(r,u,function(e){return n[e]}.bind(null,u));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return r});class r{constructor(n,e,t,r,u=!1){this.searchInput=document.querySelector(n),null!==this.searchInput?(this.inputOnFocus=u,this.events={onChange:e,onFocus:t,onBlur:r},window.addEventListener("keypress",this.onWindowKeyPress.bind(this)),null!=e&&this.searchInput.addEventListener("change",e),this.searchInput.addEventListener("focus",this.onSearchInputFocus.bind(this)),this.searchInput.addEventListener("blur",this.onSearchInputBlur.bind(this)),u&&this.searchInput.focus()):console.warn(`No search input found by selector ${n}!`)}onWindowKeyPress(n){this.inputOnFocus||this.searchInput.focus(),console.log(n)}onSearchInputFocus(n){this.inputOnFocus=!0,null!==this.events.onFocus&&void 0!==this.events.onFocus&&this.events.onFocus(n)}onSearchInputBlur(n){this.inputOnFocus=!1,null!==this.events.onBlur&&void 0!==this.events.onBlur&&this.events.onBlur(n)}}},function(n,e,t){"use strict";t.r(e);new(t(0).default)("#searchinput")}]);