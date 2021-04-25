var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function s(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function u(e,t,n,o,r,s,l){const i=function(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}(t,o,r,s);if(i){const r=c(t,n,o,l);e.p(r,i)}}const a="undefined"!=typeof window;let d=a?()=>window.performance.now():()=>Date.now(),f=a?e=>requestAnimationFrame(e):e;const h=new Set;function p(e){h.forEach(t=>{t.c(e)||(h.delete(t),t.f())}),0!==h.size&&f(p)}function y(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function w(){return $(" ")}function k(){return $("")}function b(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function x(e){return function(t){return t.preventDefault(),e.call(this,t)}}function C(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function O(e,t){e.value=null==t?"":t}function B(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}const S=new Set;let E,W=0;function M(e,t,n,o,r,s,l,i=0){const c=16.666/o;let u="{\n";for(let e=0;e<=1;e+=c){const o=t+(n-t)*s(e);u+=100*e+`%{${l(o,1-o)}}\n`}const a=u+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(a)}_${i}`,f=e.ownerDocument;S.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(v("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${a}`,h.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${d} ${o}ms linear ${r}ms 1 both`,W+=1,d}function P(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length;r&&(e.style.animation=o.join(", "),(W-=r)||f(()=>{W||(S.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),S.clear())}))}function T(e){E=e}function q(){if(!E)throw new Error("Function called outside component initialization");return E}function A(e,t){q().$$.context.set(e,t)}const F=[],j=[],L=[],K=[],U=Promise.resolve();let I=!1;function N(e){L.push(e)}let D=!1;const H=new Set;function R(){if(!D){D=!0;do{for(let e=0;e<F.length;e+=1){const t=F[e];T(t),z(t.$$)}for(T(null),F.length=0;j.length;)j.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];H.has(t)||(H.add(t),t())}L.length=0}while(F.length);for(;K.length;)K.pop()();I=!1,D=!1,H.clear()}}function z(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}let G;function Y(e,t,n){e.dispatchEvent(B(`${t?"intro":"outro"}${n}`))}const J=new Set;let V;function Z(){V={r:0,c:[],p:V}}function Q(){V.r||r(V.c),V=V.p}function X(e,t){e&&e.i&&(J.delete(e),e.i(t))}function ee(e,t,n,o){if(e&&e.o){if(J.has(e))return;J.add(e),V.c.push(()=>{J.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}const te={duration:0};function ne(n,o,l,i){let c=o(n,l),u=i?0:1,a=null,y=null,g=null;function m(){g&&P(n,g)}function v(e,t){const n=e.b-u;return t*=Math.abs(n),{a:u,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function $(o){const{delay:s=0,duration:l=300,easing:i=t,tick:$=e,css:w}=c||te,k={start:d()+s,b:o};o||(k.group=V,V.r+=1),a||y?y=k:(w&&(m(),g=M(n,u,o,l,s,i,w)),o&&$(0,1),a=v(k,l),N(()=>Y(n,o,"start")),function(e){let t;0===h.size&&f(p),new Promise(n=>{h.add(t={c:e,f:n})})}(e=>{if(y&&e>y.start&&(a=v(y,l),y=null,Y(n,a.b,"start"),w&&(m(),g=M(n,u,a.b,a.duration,0,i,c.css))),a)if(e>=a.end)$(u=a.b,1-u),Y(n,a.b,"end"),y||(a.b?m():--a.group.r||r(a.group.c)),a=null;else if(e>=a.start){const t=e-a.start;u=a.a+a.d*i(t/a.duration),$(u,1-u)}return!(!a&&!y)}))}return{run(e){s(c)?(G||(G=Promise.resolve()).then(()=>{G=null}),G).then(()=>{c=c(),$(e)}):$(e)},end(){m(),a=y=null}}}const oe="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function re(e,t){e.d(1),t.delete(e.key)}function se(e,t,n,o,r,s,l,i,c,u,a,d){let f=e.length,h=s.length,p=f;const y={};for(;p--;)y[e[p].key]=p;const g=[],m=new Map,v=new Map;for(p=h;p--;){const e=d(r,s,p),i=n(e);let c=l.get(i);c?o&&c.p(e,t):(c=u(i,e)).c(),m.set(i,g[p]=c),i in y&&v.set(i,Math.abs(p-y[i]))}const $=new Set,w=new Set;function k(e){X(e,1),e.m(i,a),l.set(e.key,e),a=e.first,h--}for(;f&&h;){const t=g[h-1],n=e[f-1],o=t.key,r=n.key;t===n?(a=t.first,f--,h--):m.has(r)?!l.has(o)||$.has(o)?k(t):w.has(r)?f--:v.get(o)>v.get(r)?(w.add(o),k(t)):($.add(r),f--):(c(n,l),f--)}for(;f--;){const t=e[f];m.has(t.key)||c(t,l)}for(;h;)k(g[h-1]);return g}function le(e){e&&e.c()}function ie(e,t,o,l){const{fragment:i,on_mount:c,on_destroy:u,after_update:a}=e.$$;i&&i.m(t,o),l||N(()=>{const t=c.map(n).filter(s);u?u.push(...t):r(t),e.$$.on_mount=[]}),a.forEach(N)}function ce(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){-1===e.$$.dirty[0]&&(F.push(e),I||(I=!0,U.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(t,n,s,l,i,c,u=[-1]){const a=E;T(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:n.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let f=!1;if(d.ctx=s?s(t,n.props||{},(e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),f&&ue(t,e)),n}):[],d.update(),f=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const e=(h=n.target,Array.from(h.childNodes));d.fragment&&d.fragment.l(e),e.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&X(t.$$.fragment),ie(t,n.target,n.anchor,n.customElement),R()}var h;T(a)}class de{$destroy(){ce(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function fe(e,{delay:n=0,duration:o=400,easing:r=t}={}){const s=+getComputedStyle(e).opacity;return{delay:n,duration:o,easing:r,css:e=>`opacity: ${e*s}`}}const{window:he}=oe;function pe(e){let t,n,o,l,i,c,u,a,d,f,h,p=e[0].closeButton&&ye(e);var $=e[1];return $&&(c=new $({})),{c(){t=v("div"),n=v("div"),o=v("div"),p&&p.c(),l=w(),i=v("div"),c&&le(c.$$.fragment),C(i,"class","content svelte-2wx9ab"),C(i,"style",e[8]),C(o,"class","window svelte-2wx9ab"),C(o,"role","dialog"),C(o,"aria-modal","true"),C(o,"style",e[7]),C(n,"class","window-wrap svelte-2wx9ab"),C(n,"style",e[6]),C(t,"class","bg svelte-2wx9ab"),C(t,"style",e[5])},m(r,u){g(r,t,u),y(t,n),y(n,o),p&&p.m(o,null),y(o,l),y(o,i),c&&ie(c,i,null),e[37](o),e[38](n),e[39](t),d=!0,f||(h=[b(o,"introstart",function(){s(e[12])&&e[12].apply(this,arguments)}),b(o,"outrostart",function(){s(e[13])&&e[13].apply(this,arguments)}),b(o,"introend",function(){s(e[14])&&e[14].apply(this,arguments)}),b(o,"outroend",function(){s(e[15])&&e[15].apply(this,arguments)}),b(t,"click",e[19])],f=!0)},p(r,s){if((e=r)[0].closeButton?p?(p.p(e,s),1&s[0]&&X(p,1)):((p=ye(e)).c(),X(p,1),p.m(o,l)):p&&(Z(),ee(p,1,1,()=>{p=null}),Q()),$!==($=e[1])){if(c){Z();const e=c;ee(e.$$.fragment,1,0,()=>{ce(e,1)}),Q()}$?(le((c=new $({})).$$.fragment),X(c.$$.fragment,1),ie(c,i,null)):c=null}(!d||256&s[0])&&C(i,"style",e[8]),(!d||128&s[0])&&C(o,"style",e[7]),(!d||64&s[0])&&C(n,"style",e[6]),(!d||32&s[0])&&C(t,"style",e[5])},i(n){d||(X(p),c&&X(c.$$.fragment,n),N(()=>{u||(u=ne(o,e[11],e[0].transitionWindowProps,!0)),u.run(1)}),N(()=>{a||(a=ne(t,e[10],e[0].transitionBgProps,!0)),a.run(1)}),d=!0)},o(n){ee(p),c&&ee(c.$$.fragment,n),u||(u=ne(o,e[11],e[0].transitionWindowProps,!1)),u.run(0),a||(a=ne(t,e[10],e[0].transitionBgProps,!1)),a.run(0),d=!1},d(n){n&&m(t),p&&p.d(),c&&ce(c),e[37](null),n&&u&&u.end(),e[38](null),e[39](null),n&&a&&a.end(),f=!1,r(h)}}}function ye(e){let t,n,o,r,s;const l=[me,ge],i=[];function c(e,n){return 1&n[0]&&(t=!!e[16](e[0].closeButton)),t?0:1}return n=c(e,[-1]),o=i[n]=l[n](e),{c(){o.c(),r=k()},m(e,t){i[n].m(e,t),g(e,r,t),s=!0},p(e,t){let s=n;(n=c(e,t))===s?i[n].p(e,t):(Z(),ee(i[s],1,1,()=>{i[s]=null}),Q(),(o=i[n])?o.p(e,t):(o=i[n]=l[n](e)).c(),X(o,1),o.m(r.parentNode,r))},i(e){s||(X(o),s=!0)},o(e){ee(o),s=!1},d(e){i[n].d(e),e&&m(r)}}}function ge(t){let n,o,r;return{c(){C(n=v("button"),"class","close svelte-2wx9ab"),C(n,"style",t[9])},m(e,s){g(e,n,s),o||(r=b(n,"click",t[17]),o=!0)},p(e,t){512&t[0]&&C(n,"style",e[9])},i:e,o:e,d(e){e&&m(n),o=!1,r()}}}function me(e){let t,n,o;var r=e[0].closeButton;function s(e){return{props:{onClose:e[17]}}}return r&&(t=new r(s(e))),{c(){t&&le(t.$$.fragment),n=k()},m(e,r){t&&ie(t,e,r),g(e,n,r),o=!0},p(e,o){if(r!==(r=e[0].closeButton)){if(t){Z();const e=t;ee(e.$$.fragment,1,0,()=>{ce(e,1)}),Q()}r?(le((t=new r(s(e))).$$.fragment),X(t.$$.fragment,1),ie(t,n.parentNode,n)):t=null}},i(e){o||(t&&X(t.$$.fragment,e),o=!0)},o(e){t&&ee(t.$$.fragment,e),o=!1},d(e){e&&m(n),t&&ce(t,e)}}}function ve(e){let t,n,o,r,s=e[1]&&pe(e);const l=e[36].default,i=function(e,t,n,o){if(e){const r=c(e,t,n,o);return e[0](r)}}(l,e,e[35],null);return{c(){s&&s.c(),t=w(),i&&i.c()},m(l,c){s&&s.m(l,c),g(l,t,c),i&&i.m(l,c),n=!0,o||(r=b(he,"keydown",e[18]),o=!0)},p(e,n){e[1]?s?(s.p(e,n),2&n[0]&&X(s,1)):((s=pe(e)).c(),X(s,1),s.m(t.parentNode,t)):s&&(Z(),ee(s,1,1,()=>{s=null}),Q()),i&&i.p&&16&n[1]&&u(i,l,e,e[35],n,null,null)},i(e){n||(X(s),X(i,e),n=!0)},o(e){ee(s),ee(i,e),n=!1},d(e){s&&s.d(e),e&&m(t),i&&i.d(e),o=!1,r()}}}function $e(e,t={}){return function(n){return new e({...n,props:{...t,...n.props}})}}function we(e,t,n){let{$$slots:o={},$$scope:r}=t;const s=function(){const e=q();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const r=B(t,n);o.slice().forEach(t=>{t.call(e,r)})}}}(),l=A;let{show:i=null}=t,{key:c="simple-modal"}=t,{closeButton:u=!0}=t,{closeOnEsc:a=!0}=t,{closeOnOuterClick:d=!0}=t,{styleBg:f={}}=t,{styleWindowWrap:h={}}=t,{styleWindow:p={}}=t,{styleContent:y={}}=t,{styleCloseButton:g={}}=t,{setContext:m=l}=t,{transitionBg:v=fe}=t,{transitionBgProps:$={duration:250}}=t,{transitionWindow:w=v}=t,{transitionWindowProps:k=$}=t;const b={closeButton:u,closeOnEsc:a,closeOnOuterClick:d,styleBg:f,styleWindowWrap:h,styleWindow:p,styleContent:y,styleCloseButton:g,transitionBg:v,transitionBgProps:$,transitionWindow:w,transitionWindowProps:k};let x,C,_,O,S,E,W,M,P,T,F,L,K,U={...b},I=null;const N=e=>Object.keys(e).reduce((t,n)=>`${t}; ${(e=>e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(n)}: ${e[n]}`,""),D=e=>!!(e&&e.constructor&&e.call&&e.apply),H=()=>{};let R=H,z=H,G=H,Y=H;const J=(e,t={},o={},r={})=>{n(1,I=$e(e,t)),n(0,U={...b,...o}),n(5,S=N(U.styleBg)),n(6,E=N(U.styleWindowWrap)),n(7,W=N(U.styleWindow)),n(8,M=N(U.styleContent)),n(9,P=N(U.styleCloseButton)),n(10,T=U.transitionBg),n(11,F=U.transitionWindow),Z(),n(12,R=(e=>{r.onOpen&&r.onOpen(e),s("opening")})),n(13,z=(e=>{r.onClose&&r.onClose(e),s("closing")})),n(14,G=(e=>{r.onOpened&&r.onOpened(e),s("opened")})),n(15,Y=(e=>{r.onClosed&&r.onClosed(e),s("closed")}))},V=(e={})=>{n(13,z=e.onClose||z),n(15,Y=e.onClosed||Y),n(1,I=null),Q()},Z=()=>{O=window.scrollY,L=document.body.style.position,K=document.body.style.overflow,document.body.style.position="fixed",document.body.style.top=`-${O}px`,document.body.style.overflow="hidden"},Q=()=>{document.body.style.position=L||"",document.body.style.top="",document.body.style.overflow=K||"",window.scrollTo(0,O)};var X;return m(c,{open:J,close:V}),X=(()=>{V()}),q().$$.on_destroy.push(X),e.$$set=(e=>{"show"in e&&n(20,i=e.show),"key"in e&&n(21,c=e.key),"closeButton"in e&&n(22,u=e.closeButton),"closeOnEsc"in e&&n(23,a=e.closeOnEsc),"closeOnOuterClick"in e&&n(24,d=e.closeOnOuterClick),"styleBg"in e&&n(25,f=e.styleBg),"styleWindowWrap"in e&&n(26,h=e.styleWindowWrap),"styleWindow"in e&&n(27,p=e.styleWindow),"styleContent"in e&&n(28,y=e.styleContent),"styleCloseButton"in e&&n(29,g=e.styleCloseButton),"setContext"in e&&n(30,m=e.setContext),"transitionBg"in e&&n(31,v=e.transitionBg),"transitionBgProps"in e&&n(32,$=e.transitionBgProps),"transitionWindow"in e&&n(33,w=e.transitionWindow),"transitionWindowProps"in e&&n(34,k=e.transitionWindowProps),"$$scope"in e&&n(35,r=e.$$scope)}),e.$$.update=(()=>{1048576&e.$$.dirty[0]&&(D(i)?J(i):V())}),[U,I,x,C,_,S,E,W,M,P,T,F,R,z,G,Y,D,V,e=>{if(U.closeOnEsc&&I&&"Escape"===e.key&&(e.preventDefault(),V()),I&&"Tab"===e.key){const t=_.querySelectorAll("*"),n=Array.from(t).filter(e=>e.tabIndex>=0);let o=n.indexOf(document.activeElement);-1===o&&e.shiftKey&&(o=0),o+=n.length+(e.shiftKey?-1:1),n[o%=n.length].focus(),e.preventDefault()}},e=>{!U.closeOnOuterClick||e.target!==x&&e.target!==C||(e.preventDefault(),V())},i,c,u,a,d,f,h,p,y,g,m,v,$,w,k,r,o,function(e){j[e?"unshift":"push"](()=>{n(4,_=e)})},function(e){j[e?"unshift":"push"](()=>{n(3,C=e)})},function(e){j[e?"unshift":"push"](()=>{n(2,x=e)})}]}class ke extends de{constructor(e){super(),ae(this,e,we,ve,l,{show:20,key:21,closeButton:22,closeOnEsc:23,closeOnOuterClick:24,styleBg:25,styleWindowWrap:26,styleWindow:27,styleContent:28,styleCloseButton:29,setContext:30,transitionBg:31,transitionBgProps:32,transitionWindow:33,transitionWindowProps:34},[-1,-1])}}function be(e){let t,n,o;return{c(){(t=v("li")).innerHTML="<strong>Do NOT make advanced payments unless you are 100% sure about their authenticity</strong>",n=w(),(o=v("li")).textContent="Check for replies under the tweets"},m(e,r){g(e,t,r),g(e,n,r),g(e,o,r)},d(e){e&&m(t),e&&m(n),e&&m(o)}}}function xe(t){let n,o,r,s,l,i,c=t[0]&&be();return{c(){n=v("div"),(o=v("h2")).textContent="Tips",r=w(),s=v("ol"),c&&c.c(),l=w(),(i=v("li")).innerHTML='Make sure search results are sorted by &quot;Latest&quot;\n      <br/> \n      <img src="sort-click-here.jpg" alt=""/>'},m(e,t){g(e,n,t),y(n,o),y(n,r),y(n,s),c&&c.m(s,null),y(s,l),y(s,i)},p(e,[t]){e[0]?c||((c=be()).c(),c.m(s,l)):c&&(c.d(1),c=null)},i:e,o:e,d(e){e&&m(n),c&&c.d()}}}function Ce(e,t,n){let{large:o=!0}=t;return e.$$set=(e=>{"large"in e&&n(0,o=e.large)}),[o]}class _e extends de{constructor(e){super(),ae(this,e,Ce,xe,l,{large:0})}}function Oe(t){let n;return{c(){(n=v("div")).innerHTML='<div><a href="https://twitter.com/umanghome/status/1383759182495588355" target="_blank" rel="noopener noreferrer">Got feedback?</a></div> \n  <div><a href="https://github.com/umanghome/twitter-search-covid19" target="_blank" rel="noopener noreferrer">Source code</a></div> \n  <div>Made by <a href="https://twitter.com/umanghome" target="_blank" rel="noopener noreferrer">Umang</a> with ideas from a lot of folks on the Internet</div>',C(n,"class","feedback svelte-1y2wvnt")},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}class Be extends de{constructor(e){super(),ae(this,e,null,Oe,l,{})}}function Se(t){let n;return{c(){(n=v("div")).innerHTML='<h2>Other Resources</h2> \n  <ul><li><a href="https://covidfacts.in/" target="_blank" rel="noopener noreferrer">covidfacts.in</a></li></ul>'},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}class Ee extends de{constructor(e){super(),ae(this,e,null,Se,l,{})}}function We(t){let n;return{c(){(n=v("div")).innerHTML='<h2>[VOLUNTARY] Places you can Donate to</h2> \n  <ul><li><a href="https://hemkuntfoundation.com/donate-now/" target="_blank" rel="noopener noreferrer">Hemkunt Foundation</a> has been helping out with Oxygen Cylinders. 80G donation receipts available.</li></ul>'},m(e,t){g(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}class Me extends de{constructor(e){super(),ae(this,e,null,We,l,{})}}const Pe=["delhi","pune","mumbai","bangalore","thane","hyderabad","nagpur","lucknow","ahmedabad","chennai","kolkata","goa","jaipur"];function Te(e){return e?e[0].toUpperCase()+e.slice(1):e}const qe={generated_links:"generated_links"},Ae={setItem:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(e){}return t},getItem:(e,t)=>{try{const n=localStorage.getItem(e);return null==n?t:JSON.parse(n)}catch(e){}return t},removeItem:e=>{try{localStorage.removeItem(e)}catch(e){}}};function Fe(e,t,n){const o=e.slice();return o[1]=t[n],o}function je(t){let n;return{c(){(n=v("p")).textContent="Please enter a city name to generate links",C(n,"class","svelte-10c14at")},m(e,t){g(e,n,t)},p:e,d(e){e&&m(n)}}}function Le(e){let t,n=[],o=new Map,r=e[0];const s=e=>e[1].href;for(let t=0;t<r.length;t+=1){let l=Fe(e,r,t),i=s(l);o.set(i,n[t]=Ke(i,l))}return{c(){t=v("ol");for(let e=0;e<n.length;e+=1)n[e].c();C(t,"id","city-links"),C(t,"class","svelte-10c14at")},m(e,o){g(e,t,o);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,l){1&l&&(r=e[0],n=se(n,l,s,1,e,r,o,t,re,Ke,null,Fe))},d(e){e&&m(t);for(let e=0;e<n.length;e+=1)n[e].d()}}}function Ke(e,t){let n,o,r,s,l=Te(t[1].city)+"";return{key:e,first:null,c(){n=v("li"),o=v("a"),r=$(l),C(o,"href",s=t[1].href),C(o,"target","_blank"),C(o,"rel","noopener noreferrer"),this.first=n},m(e,t){g(e,n,t),y(n,o),y(o,r)},p(e,n){t=e,1&n&&l!==(l=Te(t[1].city)+"")&&_(r,l),1&n&&s!==(s=t[1].href)&&C(o,"href",s)},d(e){e&&m(n)}}}function Ue(t){let n,o,r;function s(e,t){return e[0].length>0?Le:je}let l=s(t),i=l(t);return{c(){n=v("div"),(o=v("h3")).textContent="Your Generated Links",r=w(),i.c(),C(o,"class","svelte-10c14at")},m(e,t){g(e,n,t),y(n,o),y(n,r),i.m(n,null)},p(e,[t]){l===(l=s(e))&&i?i.p(e,t):(i.d(1),(i=l(e))&&(i.c(),i.m(n,null)))},i:e,o:e,d(e){e&&m(n),i.d()}}}function Ie(e,t,n){let{links:o=[]}=t;return e.$$set=(e=>{"links"in e&&n(0,o=e.links)}),[o]}class Ne extends de{constructor(e){super(),ae(this,e,Ie,Ue,l,{links:0})}}function De(e){let t,n,o,r;return t=new _e({props:{large:!1}}),o=new Ne({props:{links:e[0]}}),{c(){le(t.$$.fragment),n=w(),le(o.$$.fragment)},m(e,s){ie(t,e,s),g(e,n,s),ie(o,e,s),r=!0},p(e,[t]){const n={};1&t&&(n.links=e[0]),o.$set(n)},i(e){r||(X(t.$$.fragment,e),X(o.$$.fragment,e),r=!0)},o(e){ee(t.$$.fragment,e),ee(o.$$.fragment,e),r=!1},d(e){ce(t,e),e&&m(n),ce(o,e)}}}function He(e,t,n){let{links:o}=t;return e.$$set=(e=>{"links"in e&&n(0,o=e.links)}),[o]}class Re extends de{constructor(e){super(),ae(this,e,He,De,l,{links:0})}}const ze=[];const Ge=function(t,n=e){let o;const r=[];function s(e){if(l(t,e)&&(t=e,o)){const e=!ze.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),ze.push(n,t)}if(e){for(let e=0;e<ze.length;e+=2)ze[e][0](ze[e+1]);ze.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(l,i=e){const c=[l,i];return r.push(c),1===r.length&&(o=n(s)||e),l(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(o(),o=null)}}}}(null);function Ye(e,t,n){const o=e.slice();return o[24]=t[n],o}function Je(e,t,n){const o=e.slice();return o[24]=t[n],o}function Ve(e,t,n){const o=e.slice();return o[29]=t[n],o[30]=t,o[31]=n,o}function Ze(e,t,n){const o=e.slice();return o[29]=t[n],o[32]=t,o[33]=n,o}function Qe(e){let t;return{c(){(t=v("a")).textContent="Previous Searches",C(t,"href","#previous-searches")},m(e,n){g(e,t,n)},d(e){e&&m(t)}}}function Xe(e,t){let n,o,r,s,l,i,c,u,a,d,f=Te(t[29])+"";function h(){t[10].call(o,t[29])}return{key:e,first:null,c(){n=v("div"),o=v("input"),s=w(),l=v("label"),i=$(f),u=w(),C(o,"type","checkbox"),C(o,"id",r=`alsoSearchFor-${t[29]}`),C(o,"class","svelte-3urpvt"),C(l,"for",c=`alsoSearchFor-${t[29]}`),C(l,"class","svelte-3urpvt"),C(n,"class","svelte-3urpvt"),this.first=n},m(e,r){g(e,n,r),y(n,o),o.checked=t[2][t[29]].checked,y(n,s),y(n,l),y(l,i),y(n,u),a||(d=b(o,"change",h),a=!0)},p(e,n){t=e,4&n[0]&&r!==(r=`alsoSearchFor-${t[29]}`)&&C(o,"id",r),4&n[0]&&(o.checked=t[2][t[29]].checked),4&n[0]&&f!==(f=Te(t[29])+"")&&_(i,f),4&n[0]&&c!==(c=`alsoSearchFor-${t[29]}`)&&C(l,"for",c)},d(e){e&&m(n),a=!1,d()}}}function et(e,t){let n,o,r,s,l,i,c,u,a,d,f=t[29]+"";function h(){t[14].call(o,t[29])}return{key:e,first:null,c(){n=v("div"),o=v("input"),s=w(),l=v("label"),i=$(f),c=$(" (and its variants)"),C(o,"type","checkbox"),C(o,"id",r=`excludeKeywords-${t[29]}`),C(o,"class","svelte-3urpvt"),C(l,"for",u=`excludeKeywords-${t[29]}`),this.first=n},m(e,r){g(e,n,r),y(n,o),o.checked=t[3][t[29]].checked,y(n,s),y(n,l),y(l,i),y(l,c),a||(d=b(o,"change",h),a=!0)},p(e,n){t=e,8&n[0]&&r!==(r=`excludeKeywords-${t[29]}`)&&C(o,"id",r),8&n[0]&&(o.checked=t[3][t[29]].checked),8&n[0]&&f!==(f=t[29]+"")&&_(i,f),8&n[0]&&u!==(u=`excludeKeywords-${t[29]}`)&&C(l,"for",u)},d(e){e&&m(n),a=!1,d()}}}function tt(e,t){let n,o,r,s,l=Te(t[24].city)+"";return{key:e,first:null,c(){n=v("li"),o=v("a"),r=$(l),C(o,"href",s=t[24].href),C(o,"target","_blank"),C(o,"rel","noopener noreferrer"),this.first=n},m(e,t){g(e,n,t),y(n,o),y(o,r)},p(e,n){t=e,32&n[0]&&l!==(l=Te(t[24].city)+"")&&_(r,l),32&n[0]&&s!==(s=t[24].href)&&C(o,"href",s)},d(e){e&&m(n)}}}function nt(e){let t,n,o,r,s,l,i,c,u,a,d=[],f=new Map,h=e[4];const p=e=>e[24].href;for(let t=0;t<h.length;t+=1){let n=Ye(e,h,t),o=p(n);f.set(o,d[t]=ot(o,n))}return{c(){t=v("div"),(n=v("h2")).textContent="Previous Searches",o=w(),r=v("ol");for(let e=0;e<d.length;e+=1)d[e].c();s=w(),(l=v("button")).textContent="Clear Previous Searches",i=w(),c=v("hr"),C(r,"class","split-three-two svelte-3urpvt"),C(l,"id","clear"),C(l,"class","svelte-3urpvt"),C(t,"id","previous-searches"),C(c,"class","svelte-3urpvt")},m(f,h){g(f,t,h),y(t,n),y(t,o),y(t,r);for(let e=0;e<d.length;e+=1)d[e].m(r,null);y(t,s),y(t,l),g(f,i,h),g(f,c,h),u||(a=b(l,"click",x(e[8])),u=!0)},p(e,t){16&t[0]&&(h=e[4],d=se(d,t,p,1,e,h,f,r,re,ot,null,Ye))},d(e){e&&m(t);for(let e=0;e<d.length;e+=1)d[e].d();e&&m(i),e&&m(c),u=!1,a()}}}function ot(e,t){let n,o,r,s,l=Te(t[24].city)+"";return{key:e,first:null,c(){n=v("li"),o=v("a"),r=$(l),C(o,"href",s=t[24].href),C(o,"target","_blank"),C(o,"rel","noopener noreferrer"),this.first=n},m(e,t){g(e,n,t),y(n,o),y(o,r)},p(e,n){t=e,16&n[0]&&l!==(l=Te(t[24].city)+"")&&_(r,l),16&n[0]&&s!==(s=t[24].href)&&C(o,"href",s)},d(e){e&&m(n)}}}function rt(e){let t,n,o,s,l,i,c,u,a,d,f,h,p,k,_,B,S,E,W,M,P,T,q,A,F,j,L,K,U,I,N,D,H,R,z,G,Y,J,V,Z,Q,te,ne,oe,ue,ae,de,fe,he,pe,ye,ge,me,ve,$e,we,be,xe,Ce,Oe,Se,We,Pe,Te,qe,Ae,Fe,je,Le,Ke,Ue,Ie,Ne,De,He,Re,ze,Ge,Ye,ot,rt,st,lt,it,ct,ut,at,dt,ft=[],ht=new Map,pt=[],yt=new Map,gt=[],mt=new Map,vt=e[4].length>0&&Qe();h=new _e({});let $t=Object.keys(e[2]);const wt=e=>e[29];for(let t=0;t<$t.length;t+=1){let n=Ze(e,$t,t),o=wt(n);ht.set(o,ft[t]=Xe(o,n))}let kt=Object.keys(e[3]);const bt=e=>e[29];for(let t=0;t<kt.length;t+=1){let n=Ve(e,kt,t),o=bt(n);yt.set(o,pt[t]=et(o,n))}qe=new ke({props:{show:e[6],transitionBgProps:{duration:0},transitionWindowProps:{duration:0}}});let xt=e[5];const Ct=e=>e[24].href;for(let t=0;t<xt.length;t+=1){let n=Je(e,xt,t),o=Ct(n);mt.set(o,gt[t]=tt(o,n))}let _t=e[4].length>0&&nt(e);return ze=new Ee({}),rt=new Me({}),ct=new Be({}),{c(){t=v("main"),(n=v("h1")).textContent="Twitter Search for COVID",o=w(),s=v("hr"),l=w(),i=v("nav"),(c=v("a")).textContent="Frequently Searched Cities",u=w(),vt&&vt.c(),a=w(),d=v("hr"),f=w(),le(h.$$.fragment),p=w(),k=v("hr"),_=w(),B=v("div"),(S=v("h2")).textContent="Search",E=w(),W=v("form"),M=v("div"),(P=v("label")).textContent="Name of city",T=w(),q=v("br"),A=w(),F=v("input"),j=w(),L=v("div");for(let e=0;e<ft.length;e+=1)ft[e].c();K=w(),U=v("div"),(I=v("label")).textContent="Other:",N=w(),D=v("input"),H=w(),(R=v("div")).innerHTML="<button>Generate Links</button>",z=w(),G=v("hr"),Y=w(),J=v("div"),V=v("div"),Z=v("div"),Q=v("input"),te=w(),(ne=v("label")).innerHTML="Show verified tweets only\n              <br/> \n              <strong>Uncheck this for smaller cities</strong> \n              <br/>\n              (Tweet should contain &quot;verified&quot;)",oe=w(),ue=v("div"),ae=v("input"),de=w(),(fe=v("label")).innerHTML="Exclude unverified tweets\n              <br/>\n              (Tweet should not contain &quot;not verified&quot; and &quot;unverified&quot;)",he=w(),pe=v("div"),ye=$("Tweets should "),(ge=v("strong")).textContent="NOT",me=$(" have these words:\n      \n            ");for(let e=0;e<pt.length;e+=1)pt[e].c();ve=w(),$e=v("div"),(we=v("label")).textContent="Other:",be=w(),xe=v("input"),Ce=w(),Oe=v("div"),Se=v("input"),We=w(),(Pe=v("label")).textContent="Show Tweets near me",Te=w(),le(qe.$$.fragment),Ae=w(),Fe=v("hr"),je=w(),Le=v("div"),(Ke=v("h2")).textContent="Frequently Searched Cities",Ue=w(),Ie=v("ol");for(let e=0;e<gt.length;e+=1)gt[e].c();Ne=w(),De=v("hr"),He=w(),_t&&_t.c(),Re=w(),le(ze.$$.fragment),Ge=w(),Ye=v("hr"),ot=w(),le(rt.$$.fragment),st=w(),lt=v("hr"),it=w(),le(ct.$$.fragment),C(s,"class","svelte-3urpvt"),C(c,"href","#frequent-searches"),C(i,"class","split-two-one svelte-3urpvt"),C(d,"class","svelte-3urpvt"),C(k,"class","svelte-3urpvt"),C(P,"for","cities"),C(F,"type","text"),C(F,"id","cities"),C(F,"placeholder","Enter city name here"),C(F,"class","svelte-3urpvt"),C(L,"class","split-three-two checkbox-fields svelte-3urpvt"),C(I,"for","alsoSearchFor-other"),C(D,"type","text"),C(D,"id","alsoSearchFor-other"),C(U,"class","other-input svelte-3urpvt"),C(R,"id","generate-button-container"),C(R,"class","svelte-3urpvt"),C(G,"class","svelte-3urpvt"),C(Q,"type","checkbox"),C(Q,"id","verifiedOnly"),C(ne,"for","verifiedOnly"),C(Z,"class","svelte-3urpvt"),C(ae,"type","checkbox"),C(ae,"id","excludeUnverified"),C(fe,"for","excludeUnverified"),C(ue,"class","svelte-3urpvt"),C(we,"for","excludeKeywords-other"),C(xe,"type","text"),C(xe,"id","excludeKeywords-other"),C($e,"class","other-input svelte-3urpvt"),C(pe,"class","svelte-3urpvt"),C(Se,"type","checkbox"),C(Se,"id","nearMe"),C(Pe,"for","nearMe"),C(Oe,"class","svelte-3urpvt"),C(V,"class","split-two-one spaced svelte-3urpvt"),C(J,"id","options"),C(J,"class","svelte-3urpvt"),C(Fe,"class","svelte-3urpvt"),C(Ie,"class","split-three-two svelte-3urpvt"),C(Le,"id","frequent-searches"),C(De,"class","svelte-3urpvt"),C(Ye,"class","svelte-3urpvt"),C(lt,"class","svelte-3urpvt")},m(r,m){g(r,t,m),y(t,n),y(t,o),y(t,s),y(t,l),y(t,i),y(i,c),y(i,u),vt&&vt.m(i,null),y(t,a),y(t,d),y(t,f),ie(h,t,null),y(t,p),y(t,k),y(t,_),y(t,B),y(B,S),y(B,E),y(B,W),y(W,M),y(M,P),y(M,T),y(M,q),y(M,A),y(M,F),O(F,e[0].cities),y(W,j),y(W,L);for(let e=0;e<ft.length;e+=1)ft[e].m(L,null);y(W,K),y(W,U),y(U,I),y(U,N),y(U,D),O(D,e[0].otherAlsoSearchFor),y(W,H),y(W,R),y(W,z),y(W,G),y(W,Y),y(W,J),y(J,V),y(V,Z),y(Z,Q),Q.checked=e[1].verifiedOnly,y(Z,te),y(Z,ne),y(V,oe),y(V,ue),y(ue,ae),ae.checked=e[1].excludeUnverified,y(ue,de),y(ue,fe),y(V,he),y(V,pe),y(pe,ye),y(pe,ge),y(pe,me);for(let e=0;e<pt.length;e+=1)pt[e].m(pe,null);y(pe,ve),y(pe,$e),y($e,we),y($e,be),y($e,xe),O(xe,e[0].otherExcludedKeywords),y(V,Ce),y(V,Oe),y(Oe,Se),Se.checked=e[1].nearMe,y(Oe,We),y(Oe,Pe),y(B,Te),ie(qe,B,null),y(t,Ae),y(t,Fe),y(t,je),y(t,Le),y(Le,Ke),y(Le,Ue),y(Le,Ie);for(let e=0;e<gt.length;e+=1)gt[e].m(Ie,null);y(t,Ne),y(t,De),y(t,He),_t&&_t.m(t,null),y(t,Re),ie(ze,t,null),y(t,Ge),y(t,Ye),y(t,ot),ie(rt,t,null),y(t,st),y(t,lt),y(t,it),ie(ct,t,null),ut=!0,at||(dt=[b(F,"input",e[9]),b(D,"input",e[11]),b(Q,"change",e[12]),b(ae,"change",e[13]),b(xe,"input",e[15]),b(Se,"change",e[16]),b(W,"submit",x(e[7]))],at=!0)},p(e,n){e[4].length>0?vt||((vt=Qe()).c(),vt.m(i,null)):vt&&(vt.d(1),vt=null),1&n[0]&&F.value!==e[0].cities&&O(F,e[0].cities),4&n[0]&&($t=Object.keys(e[2]),ft=se(ft,n,wt,1,e,$t,ht,L,re,Xe,null,Ze)),1&n[0]&&D.value!==e[0].otherAlsoSearchFor&&O(D,e[0].otherAlsoSearchFor),2&n[0]&&(Q.checked=e[1].verifiedOnly),2&n[0]&&(ae.checked=e[1].excludeUnverified),8&n[0]&&(kt=Object.keys(e[3]),pt=se(pt,n,bt,1,e,kt,yt,pe,re,et,ve,Ve)),1&n[0]&&xe.value!==e[0].otherExcludedKeywords&&O(xe,e[0].otherExcludedKeywords),2&n[0]&&(Se.checked=e[1].nearMe);const o={};64&n[0]&&(o.show=e[6]),qe.$set(o),32&n[0]&&(xt=e[5],gt=se(gt,n,Ct,1,e,xt,mt,Ie,re,tt,null,Je)),e[4].length>0?_t?_t.p(e,n):((_t=nt(e)).c(),_t.m(t,Re)):_t&&(_t.d(1),_t=null)},i(e){ut||(X(h.$$.fragment,e),X(qe.$$.fragment,e),X(ze.$$.fragment,e),X(rt.$$.fragment,e),X(ct.$$.fragment,e),ut=!0)},o(e){ee(h.$$.fragment,e),ee(qe.$$.fragment,e),ee(ze.$$.fragment,e),ee(rt.$$.fragment,e),ee(ct.$$.fragment,e),ut=!1},d(e){e&&m(t),vt&&vt.d(),ce(h);for(let e=0;e<ft.length;e+=1)ft[e].d();for(let e=0;e<pt.length;e+=1)pt[e].d();ce(qe);for(let e=0;e<gt.length;e+=1)gt[e].d();_t&&_t.d(),ce(ze),ce(rt),ce(ct),at=!1,r(dt)}}}function st(e,t,n){let o;i(e,Ge,e=>n(6,o=e));const r={cities:"",otherAlsoSearchFor:"",otherExcludedKeywords:""},s={nearMe:!1,verifiedOnly:!0,excludeUnverified:!0},l={beds:{keywords:["bed","beds"],checked:!0},ICU:{keywords:["icu"],checked:!0},oxygen:{keywords:["oxygen"],checked:!0},ventilator:{keywords:["ventilator","ventilators"],checked:!0},tests:{keywords:["test","tests","testing"],checked:!1},fabiflu:{keywords:["fabiflu"],checked:!1},remdesivir:{keywords:["remdesivir"],checked:!1},favipiravir:{keywords:["favipiravir"],checked:!1},tocilizumab:{keywords:["tocilizumab"],checked:!1},plasma:{keywords:["plasma"],checked:!1},food:{keywords:["tiffin","food"],checked:!1}},c={needed:{keywords:["needed","need","needs"],checked:!0},required:{keywords:["required","require","requires","requirement","requirements"],checked:!0}};let u=[],a=Ae.getItem(qe.generated_links,[]),d=[];function f(){const e=Object.keys(l).reduce((e,t)=>l[t].checked?e.concat(l[t].keywords):e,[]);return r.otherAlsoSearchFor&&e.push(r.otherAlsoSearchFor),e.length>0?`(${e.join(" OR ")})`:""}function h(){const e=Object.keys(c).reduce((e,t)=>c[t].checked?e.concat(c[t].keywords):e,[]);return r.otherExcludedKeywords&&e.push(r.otherExcludedKeywords),e.map(e=>`-"${e}"`).join(" ")}function p(e){return{city:e,href:y(e)}}function y(e){const t=new URLSearchParams,n=[s.verifiedOnly&&"verified",e.trim(),f(),s.excludeUnverified&&'-"not verified"',s.excludeUnverified&&'-"unverified"',h()].filter(Boolean).join(" ");return t.set("q",n),t.set("f","live"),s.nearMe&&t.set("lf","on"),`https://twitter.com/search?${t.toString()}`}return e.$$.update=(()=>{15&e.$$.dirty[0]&&function(){if(!r.cities)return void(u=[]);const e=r.cities.split(",").map(e=>e.trim()).filter(Boolean);u=e.map(p)}(),15&e.$$.dirty[0]&&n(5,d=Pe.map(p))}),[r,s,l,c,a,d,o,function(){r.cities?(Ge.set($e(Re,{links:u})),Ae.setItem(qe.generated_links,u)):alert("Please enter city name")},function(){n(4,a=[]),Ae.removeItem(qe.generated_links)},function(){r.cities=this.value,n(0,r)},function(e){l[e].checked=this.checked,n(2,l)},function(){r.otherAlsoSearchFor=this.value,n(0,r)},function(){s.verifiedOnly=this.checked,n(1,s)},function(){s.excludeUnverified=this.checked,n(1,s)},function(e){c[e].checked=this.checked,n(3,c)},function(){r.otherExcludedKeywords=this.value,n(0,r)},function(){s.nearMe=this.checked,n(1,s)}]}return new class extends de{constructor(e){super(),ae(this,e,st,rt,l,{},[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
