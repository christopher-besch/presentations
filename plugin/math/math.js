!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealMath=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),n={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=a,u=Function.prototype.call,f=c?u.bind(u):function(){return u.apply(u,arguments)},s={},l={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,h=p&&!l.call({1:2},1);s.f=h?function(t){var e=p(this,t);return!!e&&e.enumerable}:l;var d,v,y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m=a,g=Function.prototype,b=g.bind,w=g.call,j=m&&b.bind(w,w),O=m?function(t){return t&&j(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},x=O,S=x({}.toString),E=x("".slice),T=function(t){return E(S(t),8,-1)},P=O,L=o,k=T,C=r.Object,_=P("".split),M=L((function(){return!C("z").propertyIsEnumerable(0)}))?function(t){return"String"==k(t)?_(t,""):C(t)}:C,R=r.TypeError,N=function(t){if(null==t)throw R("Can't call method on "+t);return t},A=M,I=N,F=function(t){return A(I(t))},G=function(t){return"function"==typeof t},J=G,D=function(t){return"object"==typeof t?null!==t:J(t)},U=r,$=G,H=function(t){return $(t)?t:void 0},z=function(t,e){return arguments.length<2?H(U[t]):U[t]&&U[t][e]},B=O({}.isPrototypeOf),W=z("navigator","userAgent")||"",q=r,X=W,K=q.process,Q=q.Deno,V=K&&K.versions||Q&&Q.version,Y=V&&V.v8;Y&&(v=(d=Y.split("."))[0]>0&&d[0]<4?1:+(d[0]+d[1])),!v&&X&&(!(d=X.match(/Edge\/(\d+)/))||d[1]>=74)&&(d=X.match(/Chrome\/(\d+)/))&&(v=+d[1]);var Z=v,tt=Z,et=o,rt=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&tt&&tt<41})),nt=rt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ot=z,it=G,at=B,ct=nt,ut=r.Object,ft=ct?function(t){return"symbol"==typeof t}:function(t){var e=ot("Symbol");return it(e)&&at(e.prototype,ut(t))},st=r.String,lt=function(t){try{return st(t)}catch(t){return"Object"}},pt=G,ht=lt,dt=r.TypeError,vt=function(t){if(pt(t))return t;throw dt(ht(t)+" is not a function")},yt=vt,mt=function(t,e){var r=t[e];return null==r?void 0:yt(r)},gt=f,bt=G,wt=D,jt=r.TypeError,Ot={exports:{}},xt=r,St=Object.defineProperty,Et=function(t,e){try{St(xt,t,{value:e,configurable:!0,writable:!0})}catch(r){xt[t]=e}return e},Tt=Et,Pt="__core-js_shared__",Lt=r[Pt]||Tt(Pt,{}),kt=Lt;(Ot.exports=function(t,e){return kt[t]||(kt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var Ct=N,_t=r.Object,Mt=function(t){return _t(Ct(t))},Rt=Mt,Nt=O({}.hasOwnProperty),At=Object.hasOwn||function(t,e){return Nt(Rt(t),e)},It=O,Ft=0,Gt=Math.random(),Jt=It(1..toString),Dt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Jt(++Ft+Gt,36)},Ut=r,$t=Ot.exports,Ht=At,zt=Dt,Bt=rt,Wt=nt,qt=$t("wks"),Xt=Ut.Symbol,Kt=Xt&&Xt.for,Qt=Wt?Xt:Xt&&Xt.withoutSetter||zt,Vt=function(t){if(!Ht(qt,t)||!Bt&&"string"!=typeof qt[t]){var e="Symbol."+t;Bt&&Ht(Xt,t)?qt[t]=Xt[t]:qt[t]=Wt&&Kt?Kt(e):Qt(e)}return qt[t]},Yt=f,Zt=D,te=ft,ee=mt,re=function(t,e){var r,n;if("string"===e&&bt(r=t.toString)&&!wt(n=gt(r,t)))return n;if(bt(r=t.valueOf)&&!wt(n=gt(r,t)))return n;if("string"!==e&&bt(r=t.toString)&&!wt(n=gt(r,t)))return n;throw jt("Can't convert object to primitive value")},ne=Vt,oe=r.TypeError,ie=ne("toPrimitive"),ae=function(t,e){if(!Zt(t)||te(t))return t;var r,n=ee(t,ie);if(n){if(void 0===e&&(e="default"),r=Yt(n,t,e),!Zt(r)||te(r))return r;throw oe("Can't convert object to primitive value")}return void 0===e&&(e="number"),re(t,e)},ce=ft,ue=function(t){var e=ae(t,"string");return ce(e)?e:e+""},fe=D,se=r.document,le=fe(se)&&fe(se.createElement),pe=function(t){return le?se.createElement(t):{}},he=pe,de=!i&&!o((function(){return 7!=Object.defineProperty(he("div"),"a",{get:function(){return 7}}).a})),ve=i,ye=f,me=s,ge=y,be=F,we=ue,je=At,Oe=de,xe=Object.getOwnPropertyDescriptor;n.f=ve?xe:function(t,e){if(t=be(t),e=we(e),Oe)try{return xe(t,e)}catch(t){}if(je(t,e))return ge(!ye(me.f,t,e),t[e])};var Se={},Ee=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Te=r,Pe=D,Le=Te.String,ke=Te.TypeError,Ce=function(t){if(Pe(t))return t;throw ke(Le(t)+" is not an object")},_e=i,Me=de,Re=Ee,Ne=Ce,Ae=ue,Ie=r.TypeError,Fe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Je="enumerable",De="configurable",Ue="writable";Se.f=_e?Re?function(t,e,r){if(Ne(t),e=Ae(e),Ne(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Ue in r&&!r.writable){var n=Ge(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:De in r?r.configurable:n.configurable,enumerable:Je in r?r.enumerable:n.enumerable,writable:!1})}return Fe(t,e,r)}:Fe:function(t,e,r){if(Ne(t),e=Ae(e),Ne(r),Me)try{return Fe(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Ie("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var $e=Se,He=y,ze=i?function(t,e,r){return $e.f(t,e,He(1,r))}:function(t,e,r){return t[e]=r,t},Be={exports:{}},We=i,qe=At,Xe=Function.prototype,Ke=We&&Object.getOwnPropertyDescriptor,Qe=qe(Xe,"name"),Ve={EXISTS:Qe,PROPER:Qe&&"something"===function(){}.name,CONFIGURABLE:Qe&&(!We||We&&Ke(Xe,"name").configurable)},Ye=G,Ze=Lt,tr=O(Function.toString);Ye(Ze.inspectSource)||(Ze.inspectSource=function(t){return tr(t)});var er,rr,nr,or=Ze.inspectSource,ir=G,ar=or,cr=r.WeakMap,ur=ir(cr)&&/native code/.test(ar(cr)),fr=Ot.exports,sr=Dt,lr=fr("keys"),pr=function(t){return lr[t]||(lr[t]=sr(t))},hr={},dr=ur,vr=r,yr=O,mr=D,gr=ze,br=At,wr=Lt,jr=pr,Or=hr,xr="Object already initialized",Sr=vr.TypeError,Er=vr.WeakMap;if(dr||wr.state){var Tr=wr.state||(wr.state=new Er),Pr=yr(Tr.get),Lr=yr(Tr.has),kr=yr(Tr.set);er=function(t,e){if(Lr(Tr,t))throw new Sr(xr);return e.facade=t,kr(Tr,t,e),e},rr=function(t){return Pr(Tr,t)||{}},nr=function(t){return Lr(Tr,t)}}else{var Cr=jr("state");Or[Cr]=!0,er=function(t,e){if(br(t,Cr))throw new Sr(xr);return e.facade=t,gr(t,Cr,e),e},rr=function(t){return br(t,Cr)?t[Cr]:{}},nr=function(t){return br(t,Cr)}}var _r={set:er,get:rr,has:nr,enforce:function(t){return nr(t)?rr(t):er(t,{})},getterFor:function(t){return function(e){var r;if(!mr(e)||(r=rr(e)).type!==t)throw Sr("Incompatible receiver, "+t+" required");return r}}},Mr=o,Rr=G,Nr=At,Ar=i,Ir=Ve.CONFIGURABLE,Fr=or,Gr=_r.enforce,Jr=_r.get,Dr=Object.defineProperty,Ur=Ar&&!Mr((function(){return 8!==Dr((function(){}),"length",{value:8}).length})),$r=String(String).split("String"),Hr=Be.exports=function(t,e,r){if("Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Nr(t,"name")||Ir&&t.name!==e)&&Dr(t,"name",{value:e,configurable:!0}),Ur&&r&&Nr(r,"arity")&&t.length!==r.arity&&Dr(t,"length",{value:r.arity}),r&&Nr(r,"constructor")&&r.constructor){if(Ar)try{Dr(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var n=Gr(t);return Nr(n,"source")||(n.source=$r.join("string"==typeof e?e:"")),t};Function.prototype.toString=Hr((function(){return Rr(this)&&Jr(this).source||Fr(this)}),"toString");var zr=r,Br=G,Wr=ze,qr=Be.exports,Xr=Et,Kr=function(t,e,r,n){var o=!!n&&!!n.unsafe,i=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet,c=n&&void 0!==n.name?n.name:e;return Br(r)&&qr(r,c,n),t===zr?(i?t[e]=r:Xr(e,r),t):(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=r:Wr(t,e,r),t)},Qr={},Vr=Math.ceil,Yr=Math.floor,Zr=function(t){var e=+t;return e!=e||0===e?0:(e>0?Yr:Vr)(e)},tn=Zr,en=Math.max,rn=Math.min,nn=Zr,on=Math.min,an=function(t){return t>0?on(nn(t),9007199254740991):0},cn=function(t){return an(t.length)},un=F,fn=function(t,e){var r=tn(t);return r<0?en(r+e,0):rn(r,e)},sn=cn,ln=function(t){return function(e,r,n){var o,i=un(e),a=sn(i),c=fn(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},pn={includes:ln(!0),indexOf:ln(!1)},hn=At,dn=F,vn=pn.indexOf,yn=hr,mn=O([].push),gn=function(t,e){var r,n=dn(t),o=0,i=[];for(r in n)!hn(yn,r)&&hn(n,r)&&mn(i,r);for(;e.length>o;)hn(n,r=e[o++])&&(~vn(i,r)||mn(i,r));return i},bn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],wn=gn,jn=bn.concat("length","prototype");Qr.f=Object.getOwnPropertyNames||function(t){return wn(t,jn)};var On={};On.f=Object.getOwnPropertySymbols;var xn=z,Sn=Qr,En=On,Tn=Ce,Pn=O([].concat),Ln=xn("Reflect","ownKeys")||function(t){var e=Sn.f(Tn(t)),r=En.f;return r?Pn(e,r(t)):e},kn=At,Cn=Ln,_n=n,Mn=Se,Rn=o,Nn=G,An=/#|\.prototype\./,In=function(t,e){var r=Gn[Fn(t)];return r==Dn||r!=Jn&&(Nn(e)?Rn(e):!!e)},Fn=In.normalize=function(t){return String(t).replace(An,".").toLowerCase()},Gn=In.data={},Jn=In.NATIVE="N",Dn=In.POLYFILL="P",Un=In,$n=r,Hn=n.f,zn=ze,Bn=Kr,Wn=Et,qn=function(t,e,r){for(var n=Cn(e),o=Mn.f,i=_n.f,a=0;a<n.length;a++){var c=n[a];kn(t,c)||r&&kn(r,c)||o(t,c,i(e,c))}},Xn=Un,Kn=function(t,e){var r,n,o,i,a,c=t.target,u=t.global,f=t.stat;if(r=u?$n:f?$n[c]||Wn(c,{}):($n[c]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(a=Hn(r,n))&&a.value:r[n],!Xn(u?n:c+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;qn(i,o)}(t.sham||o&&o.sham)&&zn(i,"sham",!0),Bn(r,n,i,t)}},Qn=gn,Vn=bn,Yn=Object.keys||function(t){return Qn(t,Vn)},Zn=i,to=O,eo=f,ro=o,no=Yn,oo=On,io=s,ao=Mt,co=M,uo=Object.assign,fo=Object.defineProperty,so=to([].concat),lo=!uo||ro((function(){if(Zn&&1!==uo({b:1},uo(fo({},"a",{enumerable:!0,get:function(){fo(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=uo({},t)[r]||no(uo({},e)).join("")!=n}))?function(t,e){for(var r=ao(t),n=arguments.length,o=1,i=oo.f,a=io.f;n>o;)for(var c,u=co(arguments[o++]),f=i?so(no(u),i(u)):no(u),s=f.length,l=0;s>l;)c=f[l++],Zn&&!eo(a,u,c)||(r[c]=u[c]);return r}:uo,po=lo;function ho(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function vo(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ho(Object(r),!0).forEach((function(e){bo(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ho(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function yo(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
yo=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function l(){}function p(){}function h(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=h.prototype=l.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=h,c(m,"constructor",h),c(h,"constructor",p),p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,a,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function mo(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function go(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){mo(i,n,o,a,c,"next",t)}function c(t){mo(i,n,o,a,c,"throw",t)}a(void 0)}))}}function bo(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function wo(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function jo(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Oo(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return jo(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?jo(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}Kn({target:"Object",stat:!0,arity:2,forced:Object.assign!==po},{assign:po});var xo={};xo[Vt("toStringTag")]="z";var So="[object z]"===String(xo),Eo=r,To=So,Po=G,Lo=T,ko=Vt("toStringTag"),Co=Eo.Object,_o="Arguments"==Lo(function(){return arguments}()),Mo=To?Lo:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Co(t),ko))?r:_o?Lo(e):"Object"==(n=Lo(e))&&Po(e.callee)?"Arguments":n},Ro=Mo,No=So?{}.toString:function(){return"[object "+Ro(this)+"]"};So||Kr(Object.prototype,"toString",No,{unsafe:!0});var Ao="process"==T(r.process),Io=r,Fo=G,Go=Io.String,Jo=Io.TypeError,Do=O,Uo=Ce,$o=function(t){if("object"==typeof t||Fo(t))return t;throw Jo("Can't set "+Go(t)+" as a prototype")},Ho=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Do(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return Uo(r),$o(n),e?t(r,n):r.__proto__=n,r}}():void 0),zo=Se.f,Bo=At,Wo=Vt("toStringTag"),qo=z,Xo=Se,Ko=i,Qo=Vt("species"),Vo=B,Yo=r.TypeError,Zo=O,ti=o,ei=G,ri=Mo,ni=or,oi=function(){},ii=[],ai=z("Reflect","construct"),ci=/^\s*(?:class|function)\b/,ui=Zo(ci.exec),fi=!ci.exec(oi),si=function(t){if(!ei(t))return!1;try{return ai(oi,ii,t),!0}catch(t){return!1}},li=function(t){if(!ei(t))return!1;switch(ri(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return fi||!!ui(ci,ni(t))}catch(t){return!0}};li.sham=!0;var pi,hi,di,vi,yi=!ai||ti((function(){var t;return si(si.call)||!si(Object)||!si((function(){t=!0}))||t}))?li:si,mi=yi,gi=lt,bi=r.TypeError,wi=Ce,ji=function(t){if(mi(t))return t;throw bi(gi(t)+" is not a constructor")},Oi=Vt("species"),xi=a,Si=Function.prototype,Ei=Si.apply,Ti=Si.call,Pi="object"==typeof Reflect&&Reflect.apply||(xi?Ti.bind(Ei):function(){return Ti.apply(Ei,arguments)}),Li=vt,ki=a,Ci=O(O.bind),_i=function(t,e){return Li(t),void 0===e?t:ki?Ci(t,e):function(){return t.apply(e,arguments)}},Mi=z("document","documentElement"),Ri=O([].slice),Ni=r.TypeError,Ai=/(?:ipad|iphone|ipod).*applewebkit/i.test(W),Ii=r,Fi=Pi,Gi=_i,Ji=G,Di=At,Ui=o,$i=Mi,Hi=Ri,zi=pe,Bi=function(t,e){if(t<e)throw Ni("Not enough arguments");return t},Wi=Ai,qi=Ao,Xi=Ii.setImmediate,Ki=Ii.clearImmediate,Qi=Ii.process,Vi=Ii.Dispatch,Yi=Ii.Function,Zi=Ii.MessageChannel,ta=Ii.String,ea=0,ra={},na="onreadystatechange";try{pi=Ii.location}catch(t){}var oa=function(t){if(Di(ra,t)){var e=ra[t];delete ra[t],e()}},ia=function(t){return function(){oa(t)}},aa=function(t){oa(t.data)},ca=function(t){Ii.postMessage(ta(t),pi.protocol+"//"+pi.host)};Xi&&Ki||(Xi=function(t){Bi(arguments.length,1);var e=Ji(t)?t:Yi(t),r=Hi(arguments,1);return ra[++ea]=function(){Fi(e,void 0,r)},hi(ea),ea},Ki=function(t){delete ra[t]},qi?hi=function(t){Qi.nextTick(ia(t))}:Vi&&Vi.now?hi=function(t){Vi.now(ia(t))}:Zi&&!Wi?(vi=(di=new Zi).port2,di.port1.onmessage=aa,hi=Gi(vi.postMessage,vi)):Ii.addEventListener&&Ji(Ii.postMessage)&&!Ii.importScripts&&pi&&"file:"!==pi.protocol&&!Ui(ca)?(hi=ca,Ii.addEventListener("message",aa,!1)):hi=na in zi("script")?function(t){$i.appendChild(zi("script")).onreadystatechange=function(){$i.removeChild(this),oa(t)}}:function(t){setTimeout(ia(t),0)});var ua,fa,sa,la,pa,ha,da,va,ya={set:Xi,clear:Ki},ma=r,ga=/ipad|iphone|ipod/i.test(W)&&void 0!==ma.Pebble,ba=/web0s(?!.*chrome)/i.test(W),wa=r,ja=_i,Oa=n.f,xa=ya.set,Sa=Ai,Ea=ga,Ta=ba,Pa=Ao,La=wa.MutationObserver||wa.WebKitMutationObserver,ka=wa.document,Ca=wa.process,_a=wa.Promise,Ma=Oa(wa,"queueMicrotask"),Ra=Ma&&Ma.value;Ra||(ua=function(){var t,e;for(Pa&&(t=Ca.domain)&&t.exit();fa;){e=fa.fn,fa=fa.next;try{e()}catch(t){throw fa?la():sa=void 0,t}}sa=void 0,t&&t.enter()},Sa||Pa||Ta||!La||!ka?!Ea&&_a&&_a.resolve?((da=_a.resolve(void 0)).constructor=_a,va=ja(da.then,da),la=function(){va(ua)}):Pa?la=function(){Ca.nextTick(ua)}:(xa=ja(xa,wa),la=function(){xa(ua)}):(pa=!0,ha=ka.createTextNode(""),new La(ua).observe(ha,{characterData:!0}),la=function(){ha.data=pa=!pa}));var Na=Ra||function(t){var e={fn:t,next:void 0};sa&&(sa.next=e),fa||(fa=e,la()),sa=e},Aa=r,Ia=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Fa=function(){this.head=null,this.tail=null};Fa.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}};var Ga=Fa,Ja=r.Promise,Da="object"==typeof window&&"object"!=typeof Deno,Ua=r,$a=Ja,Ha=G,za=Un,Ba=or,Wa=Vt,qa=Da,Xa=Z;$a&&$a.prototype;var Ka=Wa("species"),Qa=!1,Va=Ha(Ua.PromiseRejectionEvent),Ya=za("Promise",(function(){var t=Ba($a),e=t!==String($a);if(!e&&66===Xa)return!0;if(Xa>=51&&/native code/.test(t))return!1;var r=new $a((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(r.constructor={})[Ka]=n,!(Qa=r.then((function(){}))instanceof n)||!e&&qa&&!Va})),Za={CONSTRUCTOR:Ya,REJECTION_EVENT:Va,SUBCLASSING:Qa},tc={},ec=vt,rc=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=ec(e),this.reject=ec(r)};tc.f=function(t){return new rc(t)};var nc,oc,ic,ac=Kn,cc=Ao,uc=r,fc=f,sc=Kr,lc=Ho,pc=function(t,e,r){t&&!r&&(t=t.prototype),t&&!Bo(t,Wo)&&zo(t,Wo,{configurable:!0,value:e})},hc=function(t){var e=qo(t),r=Xo.f;Ko&&e&&!e[Qo]&&r(e,Qo,{configurable:!0,get:function(){return this}})},dc=vt,vc=G,yc=D,mc=function(t,e){if(Vo(e,t))return t;throw Yo("Incorrect invocation")},gc=function(t,e){var r,n=wi(t).constructor;return void 0===n||null==(r=wi(n)[Oi])?e:ji(r)},bc=ya.set,wc=Na,jc=function(t,e){var r=Aa.console;r&&r.error&&(1==arguments.length?r.error(t):r.error(t,e))},Oc=Ia,xc=Ga,Sc=_r,Ec=Ja,Tc=tc,Pc="Promise",Lc=Za.CONSTRUCTOR,kc=Za.REJECTION_EVENT,Cc=Za.SUBCLASSING,_c=Sc.getterFor(Pc),Mc=Sc.set,Rc=Ec&&Ec.prototype,Nc=Ec,Ac=Rc,Ic=uc.TypeError,Fc=uc.document,Gc=uc.process,Jc=Tc.f,Dc=Jc,Uc=!!(Fc&&Fc.createEvent&&uc.dispatchEvent),$c="unhandledrejection",Hc=function(t){var e;return!(!yc(t)||!vc(e=t.then))&&e},zc=function(t,e){var r,n,o,i=e.value,a=1==e.state,c=a?t.ok:t.fail,u=t.resolve,f=t.reject,s=t.domain;try{c?(a||(2===e.rejection&&Kc(e),e.rejection=1),!0===c?r=i:(s&&s.enter(),r=c(i),s&&(s.exit(),o=!0)),r===t.promise?f(Ic("Promise-chain cycle")):(n=Hc(r))?fc(n,r,u,f):u(r)):f(i)}catch(t){s&&!o&&s.exit(),f(t)}},Bc=function(t,e){t.notified||(t.notified=!0,wc((function(){for(var r,n=t.reactions;r=n.get();)zc(r,t);t.notified=!1,e&&!t.rejection&&qc(t)})))},Wc=function(t,e,r){var n,o;Uc?((n=Fc.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),uc.dispatchEvent(n)):n={promise:e,reason:r},!kc&&(o=uc["on"+t])?o(n):t===$c&&jc("Unhandled promise rejection",r)},qc=function(t){fc(bc,uc,(function(){var e,r=t.facade,n=t.value;if(Xc(t)&&(e=Oc((function(){cc?Gc.emit("unhandledRejection",n,r):Wc($c,r,n)})),t.rejection=cc||Xc(t)?2:1,e.error))throw e.value}))},Xc=function(t){return 1!==t.rejection&&!t.parent},Kc=function(t){fc(bc,uc,(function(){var e=t.facade;cc?Gc.emit("rejectionHandled",e):Wc("rejectionhandled",e,t.value)}))},Qc=function(t,e,r){return function(n){t(e,n,r)}},Vc=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,Bc(t,!0))},Yc=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw Ic("Promise can't be resolved itself");var n=Hc(e);n?wc((function(){var r={done:!1};try{fc(n,e,Qc(Yc,r,t),Qc(Vc,r,t))}catch(e){Vc(r,e,t)}})):(t.value=e,t.state=1,Bc(t,!1))}catch(e){Vc({done:!1},e,t)}}};if(Lc&&(Ac=(Nc=function(t){mc(this,Ac),dc(t),fc(nc,this);var e=_c(this);try{t(Qc(Yc,e),Qc(Vc,e))}catch(t){Vc(e,t)}}).prototype,(nc=function(t){Mc(this,{type:Pc,done:!1,notified:!1,parent:!1,reactions:new xc,rejection:!1,state:0,value:void 0})}).prototype=sc(Ac,"then",(function(t,e){var r=_c(this),n=Jc(gc(this,Nc));return r.parent=!0,n.ok=!vc(t)||t,n.fail=vc(e)&&e,n.domain=cc?Gc.domain:void 0,0==r.state?r.reactions.add(n):wc((function(){zc(n,r)})),n.promise})),oc=function(){var t=new nc,e=_c(t);this.promise=t,this.resolve=Qc(Yc,e),this.reject=Qc(Vc,e)},Tc.f=Jc=function(t){return t===Nc||undefined===t?new oc(t):Dc(t)},vc(Ec)&&Rc!==Object.prototype)){ic=Rc.then,Cc||sc(Rc,"then",(function(t,e){var r=this;return new Nc((function(t,e){fc(ic,r,t,e)})).then(t,e)}),{unsafe:!0});try{delete Rc.constructor}catch(t){}lc&&lc(Rc,Ac)}ac({global:!0,constructor:!0,wrap:!0,forced:Lc},{Promise:Nc}),pc(Nc,Pc,!1),hc(Pc);var Zc={},tu=Zc,eu=Vt("iterator"),ru=Array.prototype,nu=Mo,ou=mt,iu=Zc,au=Vt("iterator"),cu=function(t){if(null!=t)return ou(t,au)||ou(t,"@@iterator")||iu[nu(t)]},uu=f,fu=vt,su=Ce,lu=lt,pu=cu,hu=r.TypeError,du=f,vu=Ce,yu=mt,mu=_i,gu=f,bu=Ce,wu=lt,ju=function(t){return void 0!==t&&(tu.Array===t||ru[eu]===t)},Ou=cn,xu=B,Su=function(t,e){var r=arguments.length<2?pu(t):e;if(fu(r))return su(uu(r,t));throw hu(lu(t)+" is not iterable")},Eu=cu,Tu=function(t,e,r){var n,o;vu(t);try{if(!(n=yu(t,"return"))){if("throw"===e)throw r;return r}n=du(n,t)}catch(t){o=!0,n=t}if("throw"===e)throw r;if(o)throw n;return vu(n),r},Pu=r.TypeError,Lu=function(t,e){this.stopped=t,this.result=e},ku=Lu.prototype,Cu=function(t,e,r){var n,o,i,a,c,u,f,s=r&&r.that,l=!(!r||!r.AS_ENTRIES),p=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),d=mu(e,s),v=function(t){return n&&Tu(n,"normal",t),new Lu(!0,t)},y=function(t){return l?(bu(t),h?d(t[0],t[1],v):d(t[0],t[1])):h?d(t,v):d(t)};if(p)n=t;else{if(!(o=Eu(t)))throw Pu(wu(t)+" is not iterable");if(ju(o)){for(i=0,a=Ou(t);a>i;i++)if((c=y(t[i]))&&xu(ku,c))return c;return new Lu(!1)}n=Su(t,o)}for(u=n.next;!(f=gu(u,n)).done;){try{c=y(f.value)}catch(t){Tu(n,"throw",t)}if("object"==typeof c&&c&&xu(ku,c))return c}return new Lu(!1)},_u=Vt("iterator"),Mu=!1;try{var Ru=0,Nu={next:function(){return{done:!!Ru++}},return:function(){Mu=!0}};Nu[_u]=function(){return this},Array.from(Nu,(function(){throw 2}))}catch(t){}var Au=Ja,Iu=function(t,e){if(!e&&!Mu)return!1;var r=!1;try{var n={};n[_u]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},Fu=Za.CONSTRUCTOR||!Iu((function(t){Au.all(t).then(void 0,(function(){}))})),Gu=f,Ju=vt,Du=tc,Uu=Ia,$u=Cu;Kn({target:"Promise",stat:!0,forced:Fu},{all:function(t){var e=this,r=Du.f(e),n=r.resolve,o=r.reject,i=Uu((function(){var r=Ju(e.resolve),i=[],a=0,c=1;$u(t,(function(t){var u=a++,f=!1;c++,Gu(r,e,t).then((function(t){f||(f=!0,i[u]=t,--c||n(i))}),o)})),--c||n(i)}));return i.error&&o(i.value),r.promise}});var Hu=Kn,zu=Za.CONSTRUCTOR,Bu=Ja,Wu=z,qu=G,Xu=Kr,Ku=Bu&&Bu.prototype;if(Hu({target:"Promise",proto:!0,forced:zu,real:!0},{catch:function(t){return this.then(void 0,t)}}),qu(Bu)){var Qu=Wu("Promise").prototype.catch;Ku.catch!==Qu&&Xu(Ku,"catch",Qu,{unsafe:!0})}var Vu=f,Yu=vt,Zu=tc,tf=Ia,ef=Cu;Kn({target:"Promise",stat:!0,forced:Fu},{race:function(t){var e=this,r=Zu.f(e),n=r.reject,o=tf((function(){var o=Yu(e.resolve);ef(t,(function(t){Vu(o,e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}});var rf=f,nf=tc;Kn({target:"Promise",stat:!0,forced:Za.CONSTRUCTOR},{reject:function(t){var e=nf.f(this);return rf(e.reject,void 0,t),e.promise}});var of=Ce,af=D,cf=tc,uf=Kn,ff=Za.CONSTRUCTOR,sf=function(t,e){if(of(t),af(e)&&e.constructor===t)return e;var r=cf.f(t);return(0,r.resolve)(e),r.promise};z("Promise"),uf({target:"Promise",stat:!0,forced:ff},{resolve:function(t){return sf(this,t)}});var lf={},pf=i,hf=Ee,df=Se,vf=Ce,yf=F,mf=Yn;lf.f=pf&&!hf?Object.defineProperties:function(t,e){vf(t);for(var r,n=yf(e),o=mf(e),i=o.length,a=0;i>a;)df.f(t,r=o[a++],n[r]);return t};var gf,bf=Ce,wf=lf,jf=bn,Of=hr,xf=Mi,Sf=pe,Ef=pr("IE_PROTO"),Tf=function(){},Pf=function(t){return"<script>"+t+"</"+"script>"},Lf=function(t){t.write(Pf("")),t.close();var e=t.parentWindow.Object;return t=null,e},kf=function(){try{gf=new ActiveXObject("htmlfile")}catch(t){}var t,e;kf="undefined"!=typeof document?document.domain&&gf?Lf(gf):((e=Sf("iframe")).style.display="none",xf.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Pf("document.F=Object")),t.close(),t.F):Lf(gf);for(var r=jf.length;r--;)delete kf.prototype[jf[r]];return kf()};Of[Ef]=!0;var Cf=Object.create||function(t,e){var r;return null!==t?(Tf.prototype=bf(t),r=new Tf,Tf.prototype=null,r[Ef]=t):r=kf(),void 0===e?r:wf.f(r,e)},_f=Se,Mf=Vt("unscopables"),Rf=Array.prototype;null==Rf[Mf]&&_f.f(Rf,Mf,{configurable:!0,value:Cf(null)});var Nf=pn.includes,Af=function(t){Rf[Mf][t]=!0};Kn({target:"Array",proto:!0,forced:o((function(){return!Array(1).includes()}))},{includes:function(t){return Nf(this,t,arguments.length>1?arguments[1]:void 0)}}),Af("includes");var If=D,Ff=T,Gf=Vt("match"),Jf=function(t){var e;return If(t)&&(void 0!==(e=t[Gf])?!!e:"RegExp"==Ff(t))},Df=r.TypeError,Uf=Mo,$f=r.String,Hf=Vt("match"),zf=Kn,Bf=function(t){if(Jf(t))throw Df("The method doesn't accept regular expressions");return t},Wf=N,qf=function(t){if("Symbol"===Uf(t))throw TypeError("Cannot convert a Symbol value to a string");return $f(t)},Xf=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[Hf]=!1,"/./"[t](e)}catch(t){}}return!1},Kf=O("".indexOf);zf({target:"String",proto:!0,forced:!Xf("includes")},{includes:function(t){return!!~Kf(qf(Wf(this)),qf(Bf(t)),arguments.length>1?arguments[1]:void 0)}});var Qf=["local","version","extensions"],Vf=function(){var t,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(r){var n=(t=r).getConfig().mathjax2||t.getConfig().math||{},o=vo(vo({},e),n),i=(o.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(o.config||"TeX-AMS_HTML-full");o.tex2jax=vo(vo({},e.tex2jax),n.tex2jax),o.mathjax=o.config=null,function(t,e){var r=this,n=document.querySelector("head"),o=document.createElement("script");o.type="text/javascript",o.src=t;var i=function(){"function"==typeof e&&(e.call(),e=null)};o.onload=i,o.onreadystatechange=function(){"loaded"===r.readyState&&i()},n.appendChild(o)}(i,(function(){MathJax.Hub.Config(o),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",(function(t){MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.currentSlide])}))}))}}},Yf=Vf,Zf=Plugin=Object.assign(Yf(),{KaTeX:function(){var t,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]},r=function(t){return new Promise((function(e,r){var n=document.createElement("script");n.type="text/javascript",n.onload=e,n.onerror=r,n.src=t,document.head.append(n)}))};function n(){return(n=go(yo().mark((function t(e){var n,o,i;return yo().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Oo(e),t.prev=1,n.s();case 3:if((o=n.n()).done){t.next=9;break}return i=o.value,t.next=7,r(i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n.e(t.t0);case 14:return t.prev=14,n.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))).apply(this,arguments)}return{id:"katex",init:function(r){var o=this,i=(t=r).getConfig().katex||{},a=vo(vo({},e),i);a.local,a.version,a.extensions;var c=wo(a,Qf),u=a.local||"https://cdn.jsdelivr.net/npm/katex",f=a.local?"":"@"+a.version,s=u+f+"/dist/katex.min.css",l=u+f+"/dist/contrib/mhchem.min.js",p=u+f+"/dist/contrib/auto-render.min.js",h=[u+f+"/dist/katex.min.js"];a.extensions&&a.extensions.includes("mhchem")&&h.push(l),h.push(p);var d,v,y=function(){renderMathInElement(r.getSlidesElement(),c),t.layout()};d=s,(v=document.createElement("link")).rel="stylesheet",v.href=d,document.head.appendChild(v),function(t){return n.apply(this,arguments)}(h).then((function(){t.isReady()?y():t.on("ready",y.bind(o))}))}}},MathJax2:Vf,MathJax3:function(){var t={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:function(){MathJax.startup.defaultReady(),MathJax.startup.promise.then((function(){Reveal.layout()}))}}};return{id:"mathjax3",init:function(e){var r=e.getConfig().mathjax3||{},n=vo(vo({},t),r);n.tex=vo(vo({},t.tex),r.tex),n.options=vo(vo({},t.options),r.options),n.startup=vo(vo({},t.startup),r.startup);var o=n.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";n.mathjax=null,window.MathJax=n,function(t,e){var r=document.createElement("script");r.type="text/javascript",r.id="MathJax-script",r.src=t,r.async=!0,r.onload=function(){"function"==typeof e&&(e.call(),e=null)},document.head.appendChild(r)}(o,(function(){Reveal.addEventListener("slidechanged",(function(t){MathJax.typeset()}))}))}}}});return Zf}));