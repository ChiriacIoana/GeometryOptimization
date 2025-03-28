(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Gf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function YS(){if(j_)return Uo;j_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var Z_;function qS(){return Z_||(Z_=1,Gf.exports=YS()),Gf.exports}var ue=qS(),Vf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function jS(){if(K_)return oe;K_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,w={};function y(L,at,Et){this.props=L,this.context=at,this.refs=w,this.updater=Et||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,at){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,at,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function P(L,at,Et){this.props=L,this.context=at,this.refs=w,this.updater=Et||M}var O=P.prototype=new _;O.constructor=P,C(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function B(L,at,Et,At,j,pt){return Et=pt.ref,{$$typeof:o,type:L,key:at,ref:Et!==void 0?Et:null,props:pt}}function k(L,at){return B(L.type,at,void 0,void 0,void 0,L.props)}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function T(L){var at={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Et){return at[Et]})}var F=/\/+/g;function st(L,at){return typeof L=="object"&&L!==null&&L.key!=null?T(""+L.key):at.toString(36)}function tt(){}function ct(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(tt,tt):(L.status="pending",L.then(function(at){L.status==="pending"&&(L.status="fulfilled",L.value=at)},function(at){L.status==="pending"&&(L.status="rejected",L.reason=at)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ut(L,at,Et,At,j){var pt=typeof L;(pt==="undefined"||pt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(pt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case o:case t:St=!0;break;case g:return St=L._init,ut(St(L._payload),at,Et,At,j)}}if(St)return j=j(L),St=At===""?"."+st(L,0):At,D(j)?(Et="",St!=null&&(Et=St.replace(F,"$&/")+"/"),ut(j,at,Et,"",function(Kt){return Kt})):j!=null&&(R(j)&&(j=k(j,Et+(j.key==null||L&&L.key===j.key?"":(""+j.key).replace(F,"$&/")+"/")+St)),at.push(j)),1;St=0;var Tt=At===""?".":At+":";if(D(L))for(var Rt=0;Rt<L.length;Rt++)At=L[Rt],pt=Tt+st(At,Rt),St+=ut(At,at,Et,pt,j);else if(Rt=x(L),typeof Rt=="function")for(L=Rt.call(L),Rt=0;!(At=L.next()).done;)At=At.value,pt=Tt+st(At,Rt++),St+=ut(At,at,Et,pt,j);else if(pt==="object"){if(typeof L.then=="function")return ut(ct(L),at,Et,At,j);throw at=String(L),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return St}function V(L,at,Et){if(L==null)return L;var At=[],j=0;return ut(L,At,"","",function(pt){return at.call(Et,pt,j++)}),At}function rt(L){if(L._status===-1){var at=L._result;at=at(),at.then(function(Et){(L._status===0||L._status===-1)&&(L._status=1,L._result=Et)},function(Et){(L._status===0||L._status===-1)&&(L._status=2,L._result=Et)}),L._status===-1&&(L._status=0,L._result=at)}if(L._status===1)return L._result.default;throw L._result}var K=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return oe.Children={map:V,forEach:function(L,at,Et){V(L,function(){at.apply(this,arguments)},Et)},count:function(L){var at=0;return V(L,function(){at++}),at},toArray:function(L){return V(L,function(at){return at})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=s,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cloneElement=function(L,at,Et){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=C({},L.props),j=L.key,pt=void 0;if(at!=null)for(St in at.ref!==void 0&&(pt=void 0),at.key!==void 0&&(j=""+at.key),at)!z.call(at,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&at.ref===void 0||(At[St]=at[St]);var St=arguments.length-2;if(St===1)At.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];At.children=Tt}return B(L.type,j,void 0,void 0,pt,At)},oe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},oe.createElement=function(L,at,Et){var At,j={},pt=null;if(at!=null)for(At in at.key!==void 0&&(pt=""+at.key),at)z.call(at,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(j[At]=at[At]);var St=arguments.length-2;if(St===1)j.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];j.children=Tt}if(L&&L.defaultProps)for(At in St=L.defaultProps,St)j[At]===void 0&&(j[At]=St[At]);return B(L,pt,void 0,void 0,null,j)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:d,render:L}},oe.isValidElement=R,oe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:rt}},oe.memo=function(L,at){return{$$typeof:m,type:L,compare:at===void 0?null:at}},oe.startTransition=function(L){var at=I.T,Et={};I.T=Et;try{var At=L(),j=I.S;j!==null&&j(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(xt,K)}catch(pt){K(pt)}finally{I.T=at}},oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(L){return I.H.use(L)},oe.useActionState=function(L,at,Et){return I.H.useActionState(L,at,Et)},oe.useCallback=function(L,at){return I.H.useCallback(L,at)},oe.useContext=function(L){return I.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,at){return I.H.useDeferredValue(L,at)},oe.useEffect=function(L,at){return I.H.useEffect(L,at)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(L,at,Et){return I.H.useImperativeHandle(L,at,Et)},oe.useInsertionEffect=function(L,at){return I.H.useInsertionEffect(L,at)},oe.useLayoutEffect=function(L,at){return I.H.useLayoutEffect(L,at)},oe.useMemo=function(L,at){return I.H.useMemo(L,at)},oe.useOptimistic=function(L,at){return I.H.useOptimistic(L,at)},oe.useReducer=function(L,at,Et){return I.H.useReducer(L,at,Et)},oe.useRef=function(L){return I.H.useRef(L)},oe.useState=function(L){return I.H.useState(L)},oe.useSyncExternalStore=function(L,at,Et){return I.H.useSyncExternalStore(L,at,Et)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.0.0",oe}var Q_;function pd(){return Q_||(Q_=1,Vf.exports=jS()),Vf.exports}var r0=pd(),kf={exports:{}},Lo={},Xf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function ZS(){return J_||(J_=1,function(o){function t(V,rt){var K=V.length;V.push(rt);t:for(;0<K;){var xt=K-1>>>1,L=V[xt];if(0<l(L,rt))V[xt]=rt,V[K]=L,K=xt;else break t}}function i(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var rt=V[0],K=V.pop();if(K!==rt){V[0]=K;t:for(var xt=0,L=V.length,at=L>>>1;xt<at;){var Et=2*(xt+1)-1,At=V[Et],j=Et+1,pt=V[j];if(0>l(At,K))j<L&&0>l(pt,At)?(V[xt]=pt,V[j]=K,xt=j):(V[xt]=At,V[Et]=K,xt=Et);else if(j<L&&0>l(pt,K))V[xt]=pt,V[j]=K,xt=j;else break t}}return rt}function l(V,rt){var K=V.sortIndex-rt.sortIndex;return K!==0?K:V.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,x=3,M=!1,C=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(V){for(var rt=i(m);rt!==null;){if(rt.callback===null)s(m);else if(rt.startTime<=V)s(m),rt.sortIndex=rt.expirationTime,t(p,rt);else break;rt=i(m)}}function D(V){if(w=!1,O(V),!C)if(i(p)!==null)C=!0,ct();else{var rt=i(m);rt!==null&&ut(D,rt.startTime-V)}}var I=!1,z=-1,B=5,k=-1;function R(){return!(o.unstable_now()-k<B)}function T(){if(I){var V=o.unstable_now();k=V;var rt=!0;try{t:{C=!1,w&&(w=!1,_(z),z=-1),M=!0;var K=x;try{e:{for(O(V),v=i(p);v!==null&&!(v.expirationTime>V&&R());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var L=xt(v.expirationTime<=V);if(V=o.unstable_now(),typeof L=="function"){v.callback=L,O(V),rt=!0;break e}v===i(p)&&s(p),O(V)}else s(p);v=i(p)}if(v!==null)rt=!0;else{var at=i(m);at!==null&&ut(D,at.startTime-V),rt=!1}}break t}finally{v=null,x=K,M=!1}rt=void 0}}finally{rt?F():I=!1}}}var F;if(typeof P=="function")F=function(){P(T)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,tt=st.port2;st.port1.onmessage=T,F=function(){tt.postMessage(null)}}else F=function(){y(T,0)};function ct(){I||(I=!0,F())}function ut(V,rt){z=y(function(){V(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){C||M||(C=!0,ct())},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(V){switch(x){case 1:case 2:case 3:var rt=3;break;default:rt=x}var K=x;x=rt;try{return V()}finally{x=K}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,rt){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var K=x;x=V;try{return rt()}finally{x=K}},o.unstable_scheduleCallback=function(V,rt,K){var xt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xt+K:xt):K=xt,V){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=K+L,V={id:g++,callback:rt,priorityLevel:V,startTime:K,expirationTime:L,sortIndex:-1},K>xt?(V.sortIndex=K,t(m,V),i(p)===null&&V===i(m)&&(w?(_(z),z=-1):w=!0,ut(D,K-xt))):(V.sortIndex=L,t(p,V),C||M||(C=!0,ct())),V},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(V){var rt=x;return function(){var K=x;x=rt;try{return V.apply(this,arguments)}finally{x=K}}}}(Wf)),Wf}var $_;function KS(){return $_||($_=1,Xf.exports=ZS()),Xf.exports}var Yf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function QS(){if(tg)return bn;tg=1;var o=pd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},bn.flushSync=function(p){var m=h.T,g=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=g,s.d.f()}},bn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},bn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},bn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},bn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},bn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},bn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},bn.requestFormReset=function(p){s.d.r(p)},bn.unstable_batchedUpdates=function(p,m){return p(m)},bn.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.0.0",bn}var eg;function JS(){if(eg)return Yf.exports;eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Yf.exports=QS(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function $S(){if(ng)return Lo;ng=1;var o=KS(),t=pd(),i=JS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function k(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return n=e.displayName||null,n!==null?n:k(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return k(e(n))}catch{}}return null}var R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,F,st;function tt(e){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+e+st}var ct=!1;function ut(e,n){if(!e||ct)return"";ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var it=lt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(lt){it=lt}e.call(gt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var N=S.split(`
`),X=b.split(`
`);for(c=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;c<X.length&&!X[c].includes("DetermineComponentFrameRoot");)c++;if(r===N.length||c===X.length)for(r=N.length-1,c=X.length-1;1<=r&&0<=c&&N[r]!==X[c];)c--;for(;1<=r&&0<=c;r--,c--)if(N[r]!==X[c]){if(r!==1||c!==1)do if(r--,c--,0>c||N[r]!==X[c]){var ft=`
`+N[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=c);break}}}finally{ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?tt(a):""}function V(e){switch(e.tag){case 26:case 27:case 5:return tt(e.type);case 16:return tt("Lazy");case 13:return tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return e=ut(e.type,!1),e;case 11:return e=ut(e.type.render,!1),e;case 1:return e=ut(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=V(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function K(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function xt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(K(e)!==e)throw Error(s(188))}function at(e){var n=e.alternate;if(!n){if(n=K(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return L(c),e;if(f===r)return L(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var S=!1,b=c.child;b;){if(b===a){S=!0,a=c,r=f;break}if(b===r){S=!0,r=c,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,r=c;break}if(b===r){S=!0,r=f,a=c;break}b=b.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function Et(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Et(e),n!==null)return n;e=e.sibling}return null}var At=Array.isArray,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function Rt(e){return{current:e}}function Kt(e){0>Tt||(e.current=St[Tt],St[Tt]=null,Tt--)}function Pt(e,n){Tt++,St[Tt]=e.current,e.current=n}var Me=Rt(null),we=Rt(null),ae=Rt(null),H=Rt(null);function gn(e,n){switch(Pt(ae,n),Pt(we,e),Pt(Me,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?E_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=E_(e),n=T_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kt(Me),Pt(Me,n)}function re(){Kt(Me),Kt(we),Kt(ae)}function he(e){e.memoizedState!==null&&Pt(H,e);var n=Me.current,a=T_(n,e.type);n!==a&&(Pt(we,e),Pt(Me,a))}function kt(e){we.current===e&&(Kt(Me),Kt(we)),H.current===e&&(Kt(H),Ao._currentValue=pt)}var De=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,E=o.unstable_shouldYield,nt=o.unstable_requestPaint,ht=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,_e=o.unstable_IdlePriority,Mt=o.log,Bt=o.unstable_setDisableYieldValue,Zt=null,Gt=null;function It(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Zt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Mt=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Zt,e)}catch{}}var qt=Math.clz32?Math.clz32:Lt,Ue=Math.log,W=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(Ue(e)/W|0)|0}var ot=128,_t=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var b=a&134217727;return b!==0?(a=b&~c,a!==0?r=Ct(a):(f&=b,f!==0?r=Ct(f):e||(S=b&~S,S!==0&&(r=Ct(S))))):(b=a&~c,b!==0?r=Ct(b):f!==0?r=Ct(f):e||(S=a&~S,S!==0&&(r=Ct(S)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:r}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ke(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(){var e=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),e}function Ee(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Cn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yo(e,n,a,r,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,N=e.expirationTimes,X=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-qt(a),gt=1<<ft;b[ft]=0,N[ft]=-1;var it=X[ft];if(it!==null)for(X[ft]=null,ft=0;ft<it.length;ft++){var lt=it[ft];lt!==null&&(lt.lane&=-536870913)}a&=~gt}r!==0&&zr(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function zr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-qt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194218}function Ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-qt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Br(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:V_(e.type))}function qo(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var kn=Math.random().toString(36).slice(2),an="__reactFiber$"+kn,sn="__reactProps$"+kn,Pi="__reactContainer$"+kn,As="__reactEvents$"+kn,Ic="__reactListeners$"+kn,Fc="__reactHandles$"+kn,jo="__reactResources$"+kn,ka="__reactMarker$"+kn;function Ir(e){delete e[an],delete e[sn],delete e[As],delete e[Ic],delete e[Fc]}function zi(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=R_(e);e!==null;){if(a=e[an])return a;e=R_(e)}return n}e=a,a=e.parentNode}return null}function A(e){if(e=e[an]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function et(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(e){e[ka]=!0}var Z=new Set,yt={};function bt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(yt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Yt={};function ge(e){return De.call(Yt,e)?!0:De.call(ee,e)?!1:te.test(e)?Yt[e]=!0:(ee[e]=!0,!1)}function ve(e,n,a){if(ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ve(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(e){var n=jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){r=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=rn(e))}function Bn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=jt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function hn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Le(e,n,a,r,c,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?En(e,S,ne(n)):a!=null?En(e,S,ne(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ne(b):e.removeAttribute("name")}function Un(e,n,a,r,c,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function En(e,n,a){n==="number"&&hi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qe(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function vn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function Rs(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(At(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function In(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var k0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ud(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||k0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ld(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ud(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ud(e,f,n[f])}function Hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return W0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gc=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,ws=null;function Nd(e){var n=A(e);if(n&&(e=n.stateNode)){var a=e[sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Le(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[sn]||null;if(!c)throw Error(s(90));Le(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Bn(r)}break t;case"textarea":vn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qe(e,!!a.multiple,n,!1)}}}var kc=!1;function Od(e,n,a){if(kc)return e(n,a);kc=!0;try{var r=e(n);return r}finally{if(kc=!1,(Cs!==null||ws!==null)&&(Ll(),Cs&&(n=Cs,e=ws,ws=Cs=null,Nd(n),e)))for(n=0;n<e.length;n++)Nd(e[n])}}function Fr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xc=!1;if(Nt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Xc=!1}var ca=null,Wc=null,Ko=null;function Pd(){if(Ko)return Ko;var e,n=Wc,a=n.length,r,c="value"in ca?ca.value:ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(r=1;r<=S&&n[a-r]===c[f-r];r++);return Ko=c.slice(e,1<r?1-r:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function zd(){return!1}function Fn(e){function n(a,r,c,f,S){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:zd,this.isPropagationStopped=zd,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Fn(Xa),Gr=T({},Xa,{view:0,detail:0}),Y0=Fn(Gr),Yc,qc,Vr,tl=T({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Yc=e.screenX-Vr.screenX,qc=e.screenY-Vr.screenY):qc=Yc=0,Vr=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:qc}}),Bd=Fn(tl),q0=T({},tl,{dataTransfer:0}),j0=Fn(q0),Z0=T({},Gr,{relatedTarget:0}),jc=Fn(Z0),K0=T({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=Fn(K0),J0=T({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$0=Fn(J0),tv=T({},Xa,{data:0}),Id=Fn(tv),ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function av(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iv[e])?!!n[e]:!1}function Zc(){return av}var sv=T({},Gr,{key:function(e){if(e.key){var n=ev[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rv=Fn(sv),ov=T({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=Fn(ov),lv=T({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),cv=Fn(lv),uv=T({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=Fn(uv),hv=T({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dv=Fn(hv),pv=T({},Xa,{newState:0,oldState:0}),mv=Fn(pv),_v=[9,13,27,32],Kc=Nt&&"CompositionEvent"in window,kr=null;Nt&&"documentMode"in document&&(kr=document.documentMode);var gv=Nt&&"TextEvent"in window&&!kr,Hd=Nt&&(!Kc||kr&&8<kr&&11>=kr),Gd=" ",Vd=!1;function kd(e,n){switch(e){case"keyup":return _v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ds=!1;function vv(e,n){switch(e){case"compositionend":return Xd(n);case"keypress":return n.which!==32?null:(Vd=!0,Gd);case"textInput":return e=n.data,e===Gd&&Vd?null:e;default:return null}}function Sv(e,n){if(Ds)return e==="compositionend"||!Kc&&kd(e,n)?(e=Pd(),Ko=Wc=ca=null,Ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hd&&n.locale!=="ko"?null:n.data;default:return null}}var xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xv[e.type]:n==="textarea"}function Yd(e,n,a,r){Cs?ws?ws.push(r):ws=[r]:Cs=r,n=Bl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Xr=null,Wr=null;function yv(e){v_(e,0)}function el(e){var n=Y(e);if(Bn(n))return e}function qd(e,n){if(e==="change")return n}var jd=!1;if(Nt){var Qc;if(Nt){var Jc="oninput"in document;if(!Jc){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),Jc=typeof Zd.oninput=="function"}Qc=Jc}else Qc=!1;jd=Qc&&(!document.documentMode||9<document.documentMode)}function Kd(){Xr&&(Xr.detachEvent("onpropertychange",Qd),Wr=Xr=null)}function Qd(e){if(e.propertyName==="value"&&el(Wr)){var n=[];Yd(n,Wr,e,Vc(e)),Od(yv,n)}}function Mv(e,n,a){e==="focusin"?(Kd(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",Qd)):e==="focusout"&&Kd()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Wr)}function Tv(e,n){if(e==="click")return el(n)}function bv(e,n){if(e==="input"||e==="change")return el(n)}function Av(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Av;function Yr(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!Xn(e[c],n[c]))return!1}return!0}function Jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,n){var a=Jd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jd(a)}}function tp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=hi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=hi(e.document)}return n}function $c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Rv(e,n){var a=ep(n);n=e.focusedElem;var r=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&tp(n.ownerDocument.documentElement,n)){if(r!==null&&$c(n)){if(e=r.start,a=r.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(r.start,c);r=r.end===void 0?f:Math.min(r.end,c),!a.extend&&f>r&&(c=r,r=f,f=c),c=$d(n,f);var S=$d(n,r);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>r?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Cv=Nt&&"documentMode"in document&&11>=document.documentMode,Us=null,tu=null,qr=null,eu=!1;function np(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||Us==null||Us!==hi(r)||(r=Us,"selectionStart"in r&&$c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Yr(qr,r)||(qr=r,r=Bl(tu,"onSelect"),0<r.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Us)))}function Wa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ls={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},nu={},ip={};Nt&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Ya(e){if(nu[e])return nu[e];if(!Ls[e])return e;var n=Ls[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ip)return nu[e]=n[a];return e}var ap=Ya("animationend"),sp=Ya("animationiteration"),rp=Ya("animationstart"),wv=Ya("transitionrun"),Dv=Ya("transitionstart"),Uv=Ya("transitioncancel"),op=Ya("transitionend"),lp=new Map,cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function di(e,n){lp.set(e,n),bt(n,[e])}var $n=[],Ns=0,iu=0;function nl(){for(var e=Ns,n=iu=Ns=0;n<e;){var a=$n[n];$n[n++]=null;var r=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,r!==null&&c!==null){var S=r.pending;S===null?c.next=c:(c.next=S.next,S.next=c),r.pending=c}f!==0&&up(a,c,f)}}function il(e,n,a,r){$n[Ns++]=e,$n[Ns++]=n,$n[Ns++]=a,$n[Ns++]=r,iu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function au(e,n,a,r){return il(e,n,a,r),al(e)}function ua(e,n){return il(e,null,null,n),al(e)}function up(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-qt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function al(e){if(50<So)throw So=0,ff=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Os={},fp=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},fp.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Ps=[],zs=0,sl=null,rl=0,ei=[],ni=0,qa=null,Bi=1,Ii="";function ja(e,n){Ps[zs++]=rl,Ps[zs++]=sl,sl=e,rl=n}function hp(e,n,a){ei[ni++]=Bi,ei[ni++]=Ii,ei[ni++]=qa,qa=e;var r=Bi;e=Ii;var c=32-qt(r)-1;r&=~(1<<c),a+=1;var f=32-qt(n)+c;if(30<f){var S=c-c%5;f=(r&(1<<S)-1).toString(32),r>>=S,c-=S,Bi=1<<32-qt(n)+c|a<<c|r,Ii=f+e}else Bi=1<<f|a<<c|r,Ii=e}function su(e){e.return!==null&&(ja(e,1),hp(e,1,0))}function ru(e){for(;e===sl;)sl=Ps[--zs],Ps[zs]=null,rl=Ps[--zs],Ps[zs]=null;for(;e===qa;)qa=ei[--ni],ei[ni]=null,Ii=ei[--ni],ei[ni]=null,Bi=ei[--ni],ei[ni]=null}var Ln=null,Sn=null,be=!1,pi=null,bi=!1,ou=Error(s(519));function Za(e){var n=Error(s(418,""));throw Kr(ti(n,e)),ou}function dp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[an]=e,n[sn]=r,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)xe(yo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Un(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Se(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Rs(n,r.value,r.defaultValue,r.children),Se(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||M_(n.textContent,a)?(r.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),r.onScroll!=null&&xe("scroll",n),r.onScrollEnd!=null&&xe("scrollend",n),r.onClick!=null&&(n.onclick=Il),n=!0):n=!1,n||Za(e)}function pp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 3:case 27:bi=!0;return;case 5:case 13:bi=!1;return;default:Ln=Ln.return}}function jr(e){if(e!==Ln)return!1;if(!be)return pp(e),be=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&Sn&&Za(e),pp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Sn=_i(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Sn=null}}else Sn=Ln?_i(e.stateNode.nextSibling):null;return!0}function Zr(){Sn=Ln=null,be=!1}function Kr(e){pi===null?pi=[e]:pi.push(e)}var Qr=Error(s(460)),mp=Error(s(474)),lu={then:function(){}};function _p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ol(){}function gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ol,ol),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Qr?Error(s(483)):e;default:if(typeof n.status=="string")n.then(ol,ol);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Qr?Error(s(483)):e}throw Jr=n,Qr}}var Jr=null;function vp(){if(Jr===null)throw Error(s(459));var e=Jr;return Jr=null,e}var Bs=null,$r=0;function ll(e){var n=$r;return $r+=1,Bs===null&&(Bs=[]),gp(Bs,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function cl(e,n){throw n.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Sp(e){var n=e._init;return n(e._payload)}function xp(e){function n(Q,G){if(e){var $=Q.deletions;$===null?(Q.deletions=[G],Q.flags|=16):$.push(G)}}function a(Q,G){if(!e)return null;for(;G!==null;)n(Q,G),G=G.sibling;return null}function r(Q){for(var G=new Map;Q!==null;)Q.key!==null?G.set(Q.key,Q):G.set(Q.index,Q),Q=Q.sibling;return G}function c(Q,G){return Q=Ma(Q,G),Q.index=0,Q.sibling=null,Q}function f(Q,G,$){return Q.index=$,e?($=Q.alternate,$!==null?($=$.index,$<G?(Q.flags|=33554434,G):$):(Q.flags|=33554434,G)):(Q.flags|=1048576,G)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=33554434),Q}function b(Q,G,$,mt){return G===null||G.tag!==6?(G=nf($,Q.mode,mt),G.return=Q,G):(G=c(G,$),G.return=Q,G)}function N(Q,G,$,mt){var Ft=$.type;return Ft===p?ft(Q,G,$.props.children,mt,$.key):G!==null&&(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===P&&Sp(Ft)===G.type)?(G=c(G,$.props),to(G,$),G.return=Q,G):(G=Rl($.type,$.key,$.props,null,Q.mode,mt),to(G,$),G.return=Q,G)}function X(Q,G,$,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=af($,Q.mode,mt),G.return=Q,G):(G=c(G,$.children||[]),G.return=Q,G)}function ft(Q,G,$,mt,Ft){return G===null||G.tag!==7?(G=ss($,Q.mode,mt,Ft),G.return=Q,G):(G=c(G,$),G.return=Q,G)}function gt(Q,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=nf(""+G,Q.mode,$),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return $=Rl(G.type,G.key,G.props,null,Q.mode,$),to($,G),$.return=Q,$;case d:return G=af(G,Q.mode,$),G.return=Q,G;case P:var mt=G._init;return G=mt(G._payload),gt(Q,G,$)}if(At(G)||z(G))return G=ss(G,Q.mode,$,null),G.return=Q,G;if(typeof G.then=="function")return gt(Q,ll(G),$);if(G.$$typeof===M)return gt(Q,Tl(Q,G),$);cl(Q,G)}return null}function it(Q,G,$,mt){var Ft=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ft!==null?null:b(Q,G,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case h:return $.key===Ft?N(Q,G,$,mt):null;case d:return $.key===Ft?X(Q,G,$,mt):null;case P:return Ft=$._init,$=Ft($._payload),it(Q,G,$,mt)}if(At($)||z($))return Ft!==null?null:ft(Q,G,$,mt,null);if(typeof $.then=="function")return it(Q,G,ll($),mt);if($.$$typeof===M)return it(Q,G,Tl(Q,$),mt);cl(Q,$)}return null}function lt(Q,G,$,mt,Ft){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Q=Q.get($)||null,b(G,Q,""+mt,Ft);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case h:return Q=Q.get(mt.key===null?$:mt.key)||null,N(G,Q,mt,Ft);case d:return Q=Q.get(mt.key===null?$:mt.key)||null,X(G,Q,mt,Ft);case P:var de=mt._init;return mt=de(mt._payload),lt(Q,G,$,mt,Ft)}if(At(mt)||z(mt))return Q=Q.get($)||null,ft(G,Q,mt,Ft,null);if(typeof mt.then=="function")return lt(Q,G,$,ll(mt),Ft);if(mt.$$typeof===M)return lt(Q,G,$,Tl(G,mt),Ft);cl(G,mt)}return null}function Vt(Q,G,$,mt){for(var Ft=null,de=null,Wt=G,Qt=G=0,mn=null;Wt!==null&&Qt<$.length;Qt++){Wt.index>Qt?(mn=Wt,Wt=null):mn=Wt.sibling;var Ae=it(Q,Wt,$[Qt],mt);if(Ae===null){Wt===null&&(Wt=mn);break}e&&Wt&&Ae.alternate===null&&n(Q,Wt),G=f(Ae,G,Qt),de===null?Ft=Ae:de.sibling=Ae,de=Ae,Wt=mn}if(Qt===$.length)return a(Q,Wt),be&&ja(Q,Qt),Ft;if(Wt===null){for(;Qt<$.length;Qt++)Wt=gt(Q,$[Qt],mt),Wt!==null&&(G=f(Wt,G,Qt),de===null?Ft=Wt:de.sibling=Wt,de=Wt);return be&&ja(Q,Qt),Ft}for(Wt=r(Wt);Qt<$.length;Qt++)mn=lt(Wt,Q,Qt,$[Qt],mt),mn!==null&&(e&&mn.alternate!==null&&Wt.delete(mn.key===null?Qt:mn.key),G=f(mn,G,Qt),de===null?Ft=mn:de.sibling=mn,de=mn);return e&&Wt.forEach(function(wa){return n(Q,wa)}),be&&ja(Q,Qt),Ft}function ie(Q,G,$,mt){if($==null)throw Error(s(151));for(var Ft=null,de=null,Wt=G,Qt=G=0,mn=null,Ae=$.next();Wt!==null&&!Ae.done;Qt++,Ae=$.next()){Wt.index>Qt?(mn=Wt,Wt=null):mn=Wt.sibling;var wa=it(Q,Wt,Ae.value,mt);if(wa===null){Wt===null&&(Wt=mn);break}e&&Wt&&wa.alternate===null&&n(Q,Wt),G=f(wa,G,Qt),de===null?Ft=wa:de.sibling=wa,de=wa,Wt=mn}if(Ae.done)return a(Q,Wt),be&&ja(Q,Qt),Ft;if(Wt===null){for(;!Ae.done;Qt++,Ae=$.next())Ae=gt(Q,Ae.value,mt),Ae!==null&&(G=f(Ae,G,Qt),de===null?Ft=Ae:de.sibling=Ae,de=Ae);return be&&ja(Q,Qt),Ft}for(Wt=r(Wt);!Ae.done;Qt++,Ae=$.next())Ae=lt(Wt,Q,Qt,Ae.value,mt),Ae!==null&&(e&&Ae.alternate!==null&&Wt.delete(Ae.key===null?Qt:Ae.key),G=f(Ae,G,Qt),de===null?Ft=Ae:de.sibling=Ae,de=Ae);return e&&Wt.forEach(function(WS){return n(Q,WS)}),be&&ja(Q,Qt),Ft}function Ke(Q,G,$,mt){if(typeof $=="object"&&$!==null&&$.type===p&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case h:t:{for(var Ft=$.key;G!==null;){if(G.key===Ft){if(Ft=$.type,Ft===p){if(G.tag===7){a(Q,G.sibling),mt=c(G,$.props.children),mt.return=Q,Q=mt;break t}}else if(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===P&&Sp(Ft)===G.type){a(Q,G.sibling),mt=c(G,$.props),to(mt,$),mt.return=Q,Q=mt;break t}a(Q,G);break}else n(Q,G);G=G.sibling}$.type===p?(mt=ss($.props.children,Q.mode,mt,$.key),mt.return=Q,Q=mt):(mt=Rl($.type,$.key,$.props,null,Q.mode,mt),to(mt,$),mt.return=Q,Q=mt)}return S(Q);case d:t:{for(Ft=$.key;G!==null;){if(G.key===Ft)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(Q,G.sibling),mt=c(G,$.children||[]),mt.return=Q,Q=mt;break t}else{a(Q,G);break}else n(Q,G);G=G.sibling}mt=af($,Q.mode,mt),mt.return=Q,Q=mt}return S(Q);case P:return Ft=$._init,$=Ft($._payload),Ke(Q,G,$,mt)}if(At($))return Vt(Q,G,$,mt);if(z($)){if(Ft=z($),typeof Ft!="function")throw Error(s(150));return $=Ft.call($),ie(Q,G,$,mt)}if(typeof $.then=="function")return Ke(Q,G,ll($),mt);if($.$$typeof===M)return Ke(Q,G,Tl(Q,$),mt);cl(Q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(Q,G.sibling),mt=c(G,$),mt.return=Q,Q=mt):(a(Q,G),mt=nf($,Q.mode,mt),mt.return=Q,Q=mt),S(Q)):a(Q,G)}return function(Q,G,$,mt){try{$r=0;var Ft=Ke(Q,G,$,mt);return Bs=null,Ft}catch(Wt){if(Wt===Qr)throw Wt;var de=ri(29,Wt,null,Q.mode);return de.lanes=mt,de.return=Q,de}finally{}}}var Ka=xp(!0),yp=xp(!1),Is=Rt(null),ul=Rt(0);function Mp(e,n){e=Zi,Pt(ul,e),Pt(Is,n),Zi=e|n.baseLanes}function cu(){Pt(ul,Zi),Pt(Is,Is.current)}function uu(){Zi=ul.current,Kt(Is),Kt(ul)}var ii=Rt(null),Ai=null;function fa(e){var n=e.alternate;Pt(on,on.current&1),Pt(ii,e),Ai===null&&(n===null||Is.current!==null||n.memoizedState!==null)&&(Ai=e)}function Ep(e){if(e.tag===22){if(Pt(on,on.current),Pt(ii,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else ha()}function ha(){Pt(on,on.current),Pt(ii,ii.current)}function Fi(e){Kt(ii),Ai===e&&(Ai=null),Kt(on)}var on=Rt(0);function fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Lv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Nv=o.unstable_scheduleCallback,Ov=o.unstable_NormalPriority,ln={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new Lv,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&Nv(Ov,function(){e.controller.abort()})}var no=null,hu=0,Fs=0,Hs=null;function Pv(e,n){if(no===null){var a=no=[];hu=0,Fs=Sf(),Hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return hu++,n.then(Tp,Tp),n}function Tp(){if(--hu===0&&no!==null){Hs!==null&&(Hs.status="fulfilled");var e=no;no=null,Fs=0,Hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function zv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var bp=R.S;R.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Pv(e,n),bp!==null&&bp(e,n)};var Qa=Rt(null);function du(){var e=Qa.current;return e!==null?e:He.pooledCache}function hl(e,n){n===null?Pt(Qa,Qa.current):Pt(Qa,n.pool)}function Ap(){var e=du();return e===null?null:{parent:ln._currentValue,pool:e}}var da=0,fe=null,Ne=null,Je=null,dl=!1,Gs=!1,Ja=!1,pl=0,io=0,Vs=null,Bv=0;function Qe(){throw Error(s(321))}function pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function mu(e,n,a,r,c,f){return da=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?$a:pa,Ja=!1,f=a(r,c),Ja=!1,Gs&&(f=Cp(n,a,r,c)),Rp(e),f}function Rp(e){R.H=Ri;var n=Ne!==null&&Ne.next!==null;if(da=0,Je=Ne=fe=null,dl=!1,io=0,Vs=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&El(e)&&(dn=!0))}function Cp(e,n,a,r){fe=e;var c=0;do{if(Gs&&(Vs=null),io=0,Gs=!1,25<=c)throw Error(s(301));if(c+=1,Je=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}R.H=ts,f=n(a,r)}while(Gs);return f}function Iv(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(fe.flags|=1024),n}function _u(){var e=pl!==0;return pl=0,e}function gu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function vu(e){if(dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}dl=!1}da=0,Je=Ne=fe=null,Gs=!1,io=pl=0,Vs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?fe.memoizedState=Je=e:Je=Je.next=e,Je}function $e(){if(Ne===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Je===null?fe.memoizedState:Je.next;if(n!==null)Je=n,Ne=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Je===null?fe.memoizedState=Je=e:Je=Je.next=e}return Je}var ml;ml=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ao(e){var n=io;return io+=1,Vs===null&&(Vs=[]),e=gp(Vs,e,n),n=fe,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?$a:pa),e}function _l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===M)return Tn(e)}throw Error(s(438,String(e)))}function Su(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=$e();return xu(n,Ne,e)}function xu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=S=null,N=null,X=n,ft=!1;do{var gt=X.lane&-536870913;if(gt!==X.lane?(ye&gt)===gt:(da&gt)===gt){var it=X.revertLane;if(it===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),gt===Fs&&(ft=!0);else if((da&it)===it){X=X.next,it===Fs&&(ft=!0);continue}else gt={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},N===null?(b=N=gt,S=f):N=N.next=gt,fe.lanes|=it,Ea|=it;gt=X.action,Ja&&a(f,gt),f=X.hasEagerState?X.eagerState:a(f,gt)}else it={lane:gt,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},N===null?(b=N=it,S=f):N=N.next=it,fe.lanes|=gt,Ea|=gt;X=X.next}while(X!==null&&X!==n);if(N===null?S=f:N.next=b,!Xn(f,e.memoizedState)&&(dn=!0,ft&&(a=Hs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=N,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function yu(e){var n=$e(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Xn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function wp(e,n,a){var r=fe,c=$e(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Xn((Ne||c).memoizedState,a);if(S&&(c.memoizedState=a,dn=!0),c=c.queue,Tu(Lp.bind(null,r,c,e),[e]),c.getSnapshot!==n||S||Je!==null&&Je.memoizedState.tag&1){if(r.flags|=2048,ks(9,Up.bind(null,r,c,a,n),{destroy:void 0},null),He===null)throw Error(s(349));f||(da&60)!==0||Dp(r,n,a)}return a}function Dp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=ml(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Up(e,n,a,r){n.value=a,n.getSnapshot=r,Np(n)&&Op(e)}function Lp(e,n,a){return a(function(){Np(n)&&Op(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function Op(e){var n=ua(e,2);n!==null&&Nn(n,e,2)}function Mu(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Ja){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function Pp(e,n,a,r){return e.baseState=a,xu(e,Ne,typeof r=="function"?r:Hi)}function Fv(e,n,a,r,c){if(xl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};R.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function zp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=R.T,S={};R.T=S;try{var b=a(c,r),N=R.S;N!==null&&N(S,b),Bp(e,n,b)}catch(X){Eu(e,n,X)}finally{R.T=f}}else try{f=a(c,r),Bp(e,n,f)}catch(X){Eu(e,n,X)}}function Bp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Ip(e,n,r)},function(r){return Eu(e,n,r)}):Ip(e,n,a)}function Ip(e,n,a){n.status="fulfilled",n.value=a,Fp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,zp(e,a)))}function Eu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Fp(n),n=n.next;while(n!==r)}e.action=null}function Fp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hp(e,n){return n}function Gp(e,n){if(be){var a=He.formState;if(a!==null){t:{var r=fe;if(be){if(Sn){e:{for(var c=Sn,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Sn=_i(c.nextSibling),r=c.data==="F!";break t}}Za(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hp,lastRenderedState:n},a.queue=r,a=sm.bind(null,fe,r),r.dispatch=a,r=Mu(!1),f=wu.bind(null,fe,!1,r.queue),r=Hn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Fv.bind(null,fe,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Vp(e){var n=$e();return kp(n,Ne,e)}function kp(e,n,a){n=xu(e,n,Hp)[0],e=gl(Hi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?ao(n):n;var r=$e(),c=r.queue,f=c.dispatch;return a!==r.memoizedState&&(fe.flags|=2048,ks(9,Hv.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function Hv(e,n){e.action=n}function Xp(e){var n=$e(),a=Ne;if(a!==null)return kp(n,a,e);$e(),n=n.memoizedState,a=$e();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function ks(e,n,a,r){return e={tag:e,create:n,inst:a,deps:r,next:null},n=fe.updateQueue,n===null&&(n=ml(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Wp(){return $e().memoizedState}function vl(e,n,a,r){var c=Hn();fe.flags|=e,c.memoizedState=ks(1|n,a,{destroy:void 0},r===void 0?null:r)}function Sl(e,n,a,r){var c=$e();r=r===void 0?null:r;var f=c.memoizedState.inst;Ne!==null&&r!==null&&pu(r,Ne.memoizedState.deps)?c.memoizedState=ks(n,a,f,r):(fe.flags|=e,c.memoizedState=ks(1|n,a,f,r))}function Yp(e,n){vl(8390656,8,e,n)}function Tu(e,n){Sl(2048,8,e,n)}function qp(e,n){return Sl(4,2,e,n)}function jp(e,n){return Sl(4,4,e,n)}function Zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kp(e,n,a){a=a!=null?a.concat([e]):null,Sl(4,4,Zp.bind(null,n,e),a)}function bu(){}function Qp(e,n){var a=$e();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&pu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Jp(e,n){var a=$e();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&pu(n,r[1]))return r[0];if(r=e(),Ja){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[r,n],r}function Au(e,n,a){return a===void 0||(da&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=t_(),fe.lanes|=e,Ea|=e,a)}function $p(e,n,a,r){return Xn(a,n)?a:Is.current!==null?(e=Au(e,a,r),Xn(e,n)||(dn=!0),e):(da&42)===0?(dn=!0,e.memoizedState=a):(e=t_(),fe.lanes|=e,Ea|=e,n)}function tm(e,n,a,r,c){var f=j.p;j.p=f!==0&&8>f?f:8;var S=R.T,b={};R.T=b,wu(e,!1,n,a);try{var N=c(),X=R.S;if(X!==null&&X(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ft=zv(N,r);so(e,n,ft,jn(e))}else so(e,n,r,jn(e))}catch(gt){so(e,n,{then:function(){},status:"rejected",reason:gt},jn())}finally{j.p=f,R.T=S}}function Gv(){}function Ru(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=em(e).queue;tm(e,c,n,pt,a===null?Gv:function(){return nm(e),a(r)})}function em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function nm(e){var n=em(e).next.queue;so(e,n,{},jn())}function Cu(){return Tn(Ao)}function im(){return $e().memoizedState}function am(){return $e().memoizedState}function Vv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=ga(a);var r=va(n,e,a);r!==null&&(Nn(r,n,a),lo(r,n,a)),n={cache:fu()},e.payload=n;return}n=n.return}}function kv(e,n,a){var r=jn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xl(e)?rm(n,a):(a=au(e,n,a,r),a!==null&&(Nn(a,e,r),om(a,n,r)))}function sm(e,n,a){var r=jn();so(e,n,a,r)}function so(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(e))rm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(c.hasEagerState=!0,c.eagerState=b,Xn(b,S))return il(e,n,c,0),He===null&&nl(),!1}catch{}finally{}if(a=au(e,n,c,r),a!==null)return Nn(a,e,r),om(a,n,r),!0}return!1}function wu(e,n,a,r){if(r={lane:2,revertLane:Sf(),action:r,hasEagerState:!1,eagerState:null,next:null},xl(e)){if(n)throw Error(s(479))}else n=au(e,a,r,2),n!==null&&Nn(n,e,2)}function xl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function rm(e,n){Gs=dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function om(e,n,a){if((a&4194176)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ti(e,a)}}var Ri={readContext:Tn,use:_l,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe};Ri.useCacheRefresh=Qe,Ri.useMemoCache=Qe,Ri.useHostTransitionStatus=Qe,Ri.useFormState=Qe,Ri.useActionState=Qe,Ri.useOptimistic=Qe;var $a={readContext:Tn,use:_l,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Yp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,Zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var r=e();if(Ja){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Hn();if(a!==void 0){var c=a(n);if(Ja){se(!0);try{a(n)}finally{se(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=kv.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Mu(e);var n=e.queue,a=sm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:bu,useDeferredValue:function(e,n){var a=Hn();return Au(a,e,n)},useTransition:function(){var e=Mu(!1);return e=tm.bind(null,fe,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=fe,c=Hn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),He===null)throw Error(s(349));(ye&60)!==0||Dp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Yp(Lp.bind(null,r,f,e),[e]),r.flags|=2048,ks(9,Up.bind(null,r,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Hn(),n=He.identifierPrefix;if(be){var a=Ii,r=Bi;a=(r&~(1<<32-qt(r)-1)).toString(32)+a,n=":"+n+"R"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Bv++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Hn().memoizedState=Vv.bind(null,fe)}};$a.useMemoCache=Su,$a.useHostTransitionStatus=Cu,$a.useFormState=Gp,$a.useActionState=Gp,$a.useOptimistic=function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wu.bind(null,fe,!0,a),a.dispatch=n,[e,n]};var pa={readContext:Tn,use:_l,useCallback:Qp,useContext:Tn,useEffect:Tu,useImperativeHandle:Kp,useInsertionEffect:qp,useLayoutEffect:jp,useMemo:Jp,useReducer:gl,useRef:Wp,useState:function(){return gl(Hi)},useDebugValue:bu,useDeferredValue:function(e,n){var a=$e();return $p(a,Ne.memoizedState,e,n)},useTransition:function(){var e=gl(Hi)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:wp,useId:im};pa.useCacheRefresh=am,pa.useMemoCache=Su,pa.useHostTransitionStatus=Cu,pa.useFormState=Vp,pa.useActionState=Vp,pa.useOptimistic=function(e,n){var a=$e();return Pp(a,Ne,e,n)};var ts={readContext:Tn,use:_l,useCallback:Qp,useContext:Tn,useEffect:Tu,useImperativeHandle:Kp,useInsertionEffect:qp,useLayoutEffect:jp,useMemo:Jp,useReducer:yu,useRef:Wp,useState:function(){return yu(Hi)},useDebugValue:bu,useDeferredValue:function(e,n){var a=$e();return Ne===null?Au(a,e,n):$p(a,Ne.memoizedState,e,n)},useTransition:function(){var e=yu(Hi)[0],n=$e().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:wp,useId:im};ts.useCacheRefresh=am,ts.useMemoCache=Su,ts.useHostTransitionStatus=Cu,ts.useFormState=Xp,ts.useActionState=Xp,ts.useOptimistic=function(e,n){var a=$e();return Ne!==null?Pp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Du(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:T({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uu={isMounted:function(e){return(e=e._reactInternals)?K(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var r=jn(),c=ga(r);c.payload=n,a!=null&&(c.callback=a),n=va(e,c,r),n!==null&&(Nn(n,e,r),lo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=jn(),c=ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(e,c,r),n!==null&&(Nn(n,e,r),lo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),r=ga(a);r.tag=2,n!=null&&(r.callback=n),n=va(e,r,a),n!==null&&(Nn(n,e,a),lo(n,e,a))}};function lm(e,n,a,r,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,S):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,r)||!Yr(c,f):!0}function cm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Uu.enqueueReplaceState(n,n.state,null)}function es(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=T({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function um(e){yl(e)}function fm(e){console.error(e)}function hm(e){yl(e)}function Ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function dm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Lu(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(e,n)},a}function pm(e){return e=ga(e),e.tag=3,e}function mm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){dm(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){dm(n,a,r),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Xv(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&oo(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 13:return Ai===null?pf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),_f(e,r,c)),!1;case 22:return a.flags|=65536,r===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),_f(e,r,c)),!1}throw Error(s(435,a.tag))}return _f(e,r,c),pf(),!1}if(be)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ou&&(e=Error(s(422),{cause:r}),Kr(ti(e,a)))):(r!==ou&&(n=Error(s(423),{cause:r}),Kr(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ti(r,a),c=Lu(e.stateNode,r,c),qu(e,c),Ze!==4&&(Ze=2)),!1;var f=Error(s(520),{cause:r});if(f=ti(f,a),go===null?go=[f]:go.push(f),Ze!==4&&(Ze=2),n===null)return!0;r=ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Lu(a.stateNode,r,e),qu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=pm(c),mm(c,e,a,r),qu(a,c),!1}a=a.return}while(a!==null);return!1}var _m=Error(s(461)),dn=!1;function xn(e,n,a,r){n.child=e===null?yp(n,null,a,r):Ka(n,e.child,a,r)}function gm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var S={};for(var b in r)b!=="ref"&&(S[b]=r[b])}else S=r;return is(n),r=mu(e,n,a,S,f,c),b=_u(),e!==null&&!dn?(gu(e,n,c),Gi(e,n,c)):(be&&b&&su(n),n.flags|=1,xn(e,n,r,c),n.child)}function vm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!ef(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sm(e,n,f,r,c)):(e=Rl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Gu(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(S,r)&&e.ref===n.ref)return Gi(e,n,c)}return n.flags|=1,e=Ma(f,r),e.ref=n.ref,e.return=n,n.child=e}function Sm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Yr(f,r)&&e.ref===n.ref)if(dn=!1,n.pendingProps=r=f,Gu(e,c))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Gi(e,n,c)}return Nu(e,n,a,r,c)}function xm(e,n,a){var r=n.pendingProps,c=r.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(ro(e,n),r.mode==="hidden"||f){if((n.flags&128)!==0){if(r=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return ym(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,S!==null?S.cachePool:null),S!==null?Mp(n,S):cu(),Ep(n);else return n.lanes=n.childLanes=536870912,ym(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(hl(n,S.cachePool),Mp(n,S),ha(),n.memoizedState=null):(e!==null&&hl(n,null),cu(),ha());return xn(e,n,c,a),n.child}function ym(e,n,a,r){var c=du();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&hl(n,null),cu(),Ep(n),e!==null&&oo(e,n,r,!0),null}function ro(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Nu(e,n,a,r,c){return is(n),a=mu(e,n,a,r,void 0,c),r=_u(),e!==null&&!dn?(gu(e,n,c),Gi(e,n,c)):(be&&r&&su(n),n.flags|=1,xn(e,n,a,c),n.child)}function Mm(e,n,a,r,c,f){return is(n),n.updateQueue=null,a=Cp(n,r,a,c),Rp(e),r=_u(),e!==null&&!dn?(gu(e,n,f),Gi(e,n,f)):(be&&r&&su(n),n.flags|=1,xn(e,n,a,f),n.child)}function Em(e,n,a,r,c){if(is(n),n.stateNode===null){var f=Os,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Uu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Wu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):Os,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Du(n,a,S,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Uu.enqueueReplaceState(f,f.state,null),uo(n,r,f,c),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,N=es(a,b);f.props=N;var X=f.context,ft=a.contextType;S=Os,typeof ft=="object"&&ft!==null&&(S=Tn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||X!==S)&&cm(n,f,r,S),_a=!1;var it=n.memoizedState;f.state=it,uo(n,r,f,c),co(),X=n.memoizedState,b||it!==X||_a?(typeof gt=="function"&&(Du(n,a,gt,r),X=n.memoizedState),(N=_a||lm(n,a,N,r,it,X,S))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=X),f.props=r,f.state=X,f.context=S,r=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Yu(e,n),S=n.memoizedProps,ft=es(a,S),f.props=ft,gt=n.pendingProps,it=f.context,X=a.contextType,N=Os,typeof X=="object"&&X!==null&&(N=Tn(X)),b=a.getDerivedStateFromProps,(X=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==gt||it!==N)&&cm(n,f,r,N),_a=!1,it=n.memoizedState,f.state=it,uo(n,r,f,c),co();var lt=n.memoizedState;S!==gt||it!==lt||_a||e!==null&&e.dependencies!==null&&El(e.dependencies)?(typeof b=="function"&&(Du(n,a,b,r),lt=n.memoizedState),(ft=_a||lm(n,a,ft,r,it,lt,N)||e!==null&&e.dependencies!==null&&El(e.dependencies))?(X||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=N,r=ft):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,ro(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ka(n,e.child,null,c),n.child=Ka(n,null,a,c)):xn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Gi(e,n,c),e}function Tm(e,n,a,r){return Zr(),n.flags|=256,xn(e,n,a,r),n.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Pu(e){return{baseLanes:e,cachePool:Ap()}}function zu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function bm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?fa(n):ha(),be){var b=Sn,N;if(N=b){t:{for(N=b,b=bi;N.nodeType!==8;){if(!b){b=null;break t}if(N=_i(N.nextSibling),N===null){b=null;break t}}b=N}b!==null?(n.memoizedState={dehydrated:b,treeContext:qa!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912},N=ri(18,null,null,0),N.stateNode=b,N.return=n,n.child=N,Ln=n,Sn=null,N=!0):N=!1}N||Za(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?n.lanes=16:n.lanes=536870912,null;Fi(n)}return b=r.children,r=r.fallback,c?(ha(),c=n.mode,b=Iu({mode:"hidden",children:b},c),r=ss(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,c=n.child,c.memoizedState=Pu(a),c.childLanes=zu(e,S,a),n.memoizedState=Ou,r):(fa(n),Bu(n,b))}if(N=e.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(f)n.flags&256?(fa(n),n.flags&=-257,n=Fu(e,n,a)):n.memoizedState!==null?(ha(),n.child=e.child,n.flags|=128,n=null):(ha(),c=r.fallback,b=n.mode,r=Iu({mode:"visible",children:r.children},b),c=ss(c,b,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,Ka(n,e.child,null,a),r=n.child,r.memoizedState=Pu(a),r.childLanes=zu(e,S,a),n.memoizedState=Ou,n=c);else if(fa(n),b.data==="$!"){if(S=b.nextSibling&&b.nextSibling.dataset,S)var X=S.dgst;S=X,r=Error(s(419)),r.stack="",r.digest=S,Kr({value:r,source:null,stack:null}),n=Fu(e,n,a)}else if(dn||oo(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=He,S!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(S.suspendedLanes|a))!==0?0:r,r!==0&&r!==N.retryLane)throw N.retryLane=r,ua(e,r),Nn(S,e,r),_m}b.data==="$?"||pf(),n=Fu(e,n,a)}else b.data==="$?"?(n.flags|=128,n.child=e.child,n=sS.bind(null,e),b._reactRetry=n,n=null):(e=N.treeContext,Sn=_i(b.nextSibling),Ln=n,be=!0,pi=null,bi=!1,e!==null&&(ei[ni++]=Bi,ei[ni++]=Ii,ei[ni++]=qa,Bi=e.id,Ii=e.overflow,qa=n),n=Bu(n,r.children),n.flags|=4096);return n}return c?(ha(),c=r.fallback,b=n.mode,N=e.child,X=N.sibling,r=Ma(N,{mode:"hidden",children:r.children}),r.subtreeFlags=N.subtreeFlags&31457280,X!==null?c=Ma(X,c):(c=ss(c,b,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,b=e.child.memoizedState,b===null?b=Pu(a):(N=b.cachePool,N!==null?(X=ln._currentValue,N=N.parent!==X?{parent:X,pool:X}:N):N=Ap(),b={baseLanes:b.baseLanes|a,cachePool:N}),c.memoizedState=b,c.childLanes=zu(e,S,a),n.memoizedState=Ou,r):(fa(n),a=e.child,e=a.sibling,a=Ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Bu(e,n){return n=Iu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Iu(e,n){return Qm(e,n,0,null)}function Fu(e,n,a){return Ka(n,e.child,null,a),e=Bu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Am(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ku(e.return,n,a)}function Hu(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function Rm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(xn(e,n,r.children,a),r=on.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Am(e,a,n);else if(e.tag===19)Am(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Pt(on,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&fl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&fl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Hu(n,!0,a,null,f);break;case"together":Hu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(oo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&El(e)))}function Wv(e,n,a){switch(n.tag){case 3:gn(n,n.stateNode.containerInfo),ma(n,ln,e.memoizedState.cache),Zr();break;case 27:case 5:he(n);break;case 4:gn(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?bm(e,n,a):(fa(n),e=Gi(e,n,a),e!==null?e.sibling:null);fa(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(oo(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Rm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(on,on.current),r)break;return null;case 22:case 23:return n.lanes=0,xm(e,n,a);case 24:ma(n,ln,e.memoizedState.cache)}return Gi(e,n,a)}function Cm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Gu(e,a)&&(n.flags&128)===0)return dn=!1,Wv(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,be&&(n.flags&1048576)!==0&&hp(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")ef(r)?(e=es(r,e),n.tag=1,n=Em(null,n,r,e,a)):(n.tag=0,n=Nu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===C){n.tag=11,n=gm(null,n,r,e,a);break t}else if(c===_){n.tag=14,n=vm(null,n,r,e,a);break t}}throw n=k(r)||r,Error(s(306,n,""))}}return n;case 0:return Nu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=es(r,n.pendingProps),Em(e,n,r,c,a);case 3:t:{if(gn(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var f=n.pendingProps;c=n.memoizedState,r=c.element,Yu(e,n),uo(n,f,null,a);var S=n.memoizedState;if(f=S.cache,ma(n,ln,f),f!==c.cache&&Xu(n,[ln],a,!0),co(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Tm(e,n,f,a);break t}else if(f!==r){r=ti(Error(s(424)),n),Kr(r),n=Tm(e,n,f,a);break t}else for(Sn=_i(n.stateNode.containerInfo.firstChild),Ln=n,be=!0,pi=null,bi=!0,a=yp(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zr(),f===r){n=Gi(e,n,a);break t}xn(e,n,f,a)}n=n.child}return n;case 26:return ro(e,n),e===null?(a=U_(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,r=Fl(ae.current).createElement(a),r[an]=n,r[sn]=e,yn(r,a,e),J(r),n.stateNode=r):n.memoizedState=U_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return he(n),e===null&&be&&(r=n.stateNode=C_(n.type,n.pendingProps,ae.current),Ln=n,bi=!0,Sn=_i(r.firstChild)),r=n.pendingProps.children,e!==null||be?xn(e,n,r,a):n.child=Ka(n,null,r,a),ro(e,n),n.child;case 5:return e===null&&be&&((c=r=Sn)&&(r=yS(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,Ln=n,Sn=_i(r.firstChild),bi=!1,c=!0):c=!1),c||Za(n)),he(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,r=f.children,Cf(c,f)?r=null:S!==null&&Cf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=mu(e,n,Iv,null,null,a),Ao._currentValue=c),ro(e,n),xn(e,n,r,a),n.child;case 6:return e===null&&be&&((e=a=Sn)&&(a=MS(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Ln=n,Sn=null,e=!0):e=!1),e||Za(n)),null;case 13:return bm(e,n,a);case 4:return gn(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ka(n,null,r,a):xn(e,n,r,a),n.child;case 11:return gm(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ma(n,n.type,r.value),xn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,is(n),c=Tn(c),r=r(c),n.flags|=1,xn(e,n,r,a),n.child;case 14:return vm(e,n,n.type,n.pendingProps,a);case 15:return Sm(e,n,n.type,n.pendingProps,a);case 19:return Rm(e,n,a);case 22:return xm(e,n,a);case 24:return is(n),r=Tn(ln),e===null?(c=du(),c===null&&(c=He,f=fu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Wu(n),ma(n,ln,c)):((e.lanes&a)!==0&&(Yu(e,n),uo(n,null,null,a),co()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ma(n,ln,r)):(r=f.cache,ma(n,ln,r),r!==c.cache&&Xu(n,[ln],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var Vu=Rt(null),ns=null,Vi=null;function ma(e,n,a){Pt(Vu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=Vu.current,Kt(Vu)}function ku(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var N=0;N<n.length;N++)if(b.context===n[N]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ku(f.return,a,e),r||(S=null);break t}f=b.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ku(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function oo(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var b=c.type;Xn(c.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(c===H.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&Xu(n,e,a,r),n.flags|=262144}function El(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function is(e){ns=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return wm(ns,e)}function Tl(e,n){return ns===null&&is(e),wm(e,n)}function wm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var _a=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ye&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=al(e),up(e,null,a),n}return il(e,r,n,a),al(e)}function lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ti(e,a)}}function qu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ju=!1;function co(){if(ju){var e=Hs;if(e!==null)throw e}}function uo(e,n,a,r){ju=!1;var c=e.updateQueue;_a=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var N=b,X=N.next;N.next=null,S===null?f=X:S.next=X,S=N;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==S&&(b===null?ft.firstBaseUpdate=X:b.next=X,ft.lastBaseUpdate=N))}if(f!==null){var gt=c.baseState;S=0,ft=X=N=null,b=f;do{var it=b.lane&-536870913,lt=it!==b.lane;if(lt?(ye&it)===it:(r&it)===it){it!==0&&it===Fs&&(ju=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=e,ie=b;it=n;var Ke=a;switch(ie.tag){case 1:if(Vt=ie.payload,typeof Vt=="function"){gt=Vt.call(Ke,gt,it);break t}gt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ie.payload,it=typeof Vt=="function"?Vt.call(Ke,gt,it):Vt,it==null)break t;gt=T({},gt,it);break t;case 2:_a=!0}}it=b.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(X=ft=lt,N=gt):ft=ft.next=lt,S|=it;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ft===null&&(N=gt),c.baseState=N,c.firstBaseUpdate=X,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Ea|=S,e.lanes=S,e.memoizedState=gt}}function Dm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Um(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Dm(a[e],n)}function fo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,S=a.inst;r=f(),S.destroy=r}a=a.next}while(a!==c)}}catch(b){Fe(n,n.return,b)}}function Sa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var S=r.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,c=n;var N=a;try{b()}catch(X){Fe(c,N,X)}}}r=r.next}while(r!==f)}}catch(X){Fe(n,n.return,X)}}function Lm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Um(n,a)}catch(r){Fe(e,e.return,r)}}}function Nm(e,n,a){a.props=es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(e,n,r)}}function as(e,n){try{var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=r;break;default:c=r}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){Fe(e,n,f)}}function Wn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Fe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(e,n,c)}else a.current=null}function Om(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Fe(e,e.return,c)}}function Pm(e,n,a){try{var r=e.stateNode;_S(r,e.type,a,n),r[sn]=n}catch(c){Fe(e,e.return,c)}}function zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Zu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ku(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Il));else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Ku(e,n,a),e=e.sibling;e!==null;)Ku(e,n,a),e=e.sibling}function bl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&r!==27&&(e=e.child,e!==null))for(bl(e,n,a),e=e.sibling;e!==null;)bl(e,n,a),e=e.sibling}var Xi=!1,je=!1,Qu=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,pn=null,Im=!1;function Yv(e,n){if(e=e.containerInfo,Af=Wl,e=ep(e),$c(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,N=-1,X=0,ft=0,gt=e,it=null;e:for(;;){for(var lt;gt!==a||c!==0&&gt.nodeType!==3||(b=S+c),gt!==f||r!==0&&gt.nodeType!==3||(N=S+r),gt.nodeType===3&&(S+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)it=gt,gt=lt;for(;;){if(gt===e)break e;if(it===a&&++X===c&&(b=S),it===f&&++ft===r&&(N=S),(lt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=lt}a=b===-1||N===-1?null:{start:b,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:e,selectionRange:a},Wl=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=es(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Fe(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Uf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}return Vt=Im,Im=!1,Vt}function Fm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(e,a),r&4&&fo(5,a);break;case 1:if(Yi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Fe(a,a.return,b)}else{var c=es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Fe(a,a.return,b)}}r&64&&Lm(a),r&512&&as(a,a.return);break;case 3:if(Yi(e,a),r&64&&(r=a.updateQueue,r!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Um(r,e)}catch(b){Fe(a,a.return,b)}}break;case 26:Yi(e,a),r&512&&as(a,a.return);break;case 27:case 5:Yi(e,a),n===null&&r&4&&Om(a),r&512&&as(a,a.return);break;case 12:Yi(e,a);break;case 13:Yi(e,a),r&4&&Vm(e,a);break;case 22:if(c=a.memoizedState!==null||Xi,!c){n=n!==null&&n.memoizedState!==null||je;var f=Xi,S=je;Xi=c,(je=n)&&!S?xa(e,a,(a.subtreeFlags&8772)!==0):Yi(e,a),Xi=f,je=S}r&512&&(a.memoizedProps.mode==="manual"?as(a,a.return):Wn(a,a.return));break;default:Yi(e,a)}}function Hm(e){var n=e.alternate;n!==null&&(e.alternate=null,Hm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ir(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Yn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Gm(e,n,a),a=a.sibling}function Gm(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:je||Wn(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||Wn(a,n);var r=tn,c=Yn;for(tn=a.stateNode,Wi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Ir(a),tn=r,Yn=c;break;case 5:je||Wn(a,n);case 6:c=tn;var f=Yn;if(tn=null,Wi(e,n,a),tn=c,Yn=f,tn!==null)if(Yn)try{e=tn,r=a.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)}catch(S){Fe(a,n,S)}else try{tn.removeChild(a.stateNode)}catch(S){Fe(a,n,S)}break;case 18:tn!==null&&(Yn?(n=tn,a=a.stateNode,n.nodeType===8?Df(n.parentNode,a):n.nodeType===1&&Df(n,a),Do(n)):Df(tn,a.stateNode));break;case 4:r=tn,c=Yn,tn=a.stateNode.containerInfo,Yn=!0,Wi(e,n,a),tn=r,Yn=c;break;case 0:case 11:case 14:case 15:je||Sa(2,a,n),je||Sa(4,a,n),Wi(e,n,a);break;case 1:je||(Wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Nm(a,n,r)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:je||Wn(a,n),je=(r=je)||a.memoizedState!==null,Wi(e,n,a),je=r;break;default:Wi(e,n,a)}}function Vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Do(e)}catch(a){Fe(n,n.return,a)}}function qv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bm),n;default:throw Error(s(435,e.tag))}}function Ju(e,n){var a=qv(e);n.forEach(function(r){var c=rS.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function ai(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:case 5:tn=b.stateNode,Yn=!1;break t;case 3:tn=b.stateNode.containerInfo,Yn=!0;break t;case 4:tn=b.stateNode.containerInfo,Yn=!0;break t}b=b.return}if(tn===null)throw Error(s(160));Gm(f,S,c),tn=null,Yn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)km(n,e),n=n.sibling}var mi=null;function km(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ai(n,e),si(e),r&4&&(Sa(3,e,e.return),fo(3,e),Sa(5,e,e.return));break;case 1:ai(n,e),si(e),r&512&&(je||a===null||Wn(a,a.return)),r&64&&Xi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=mi;if(ai(n,e),si(e),r&512&&(je||a===null||Wn(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ka]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,r,a),f[an]=e,J(f),r=f;break t;case"link":var S=O_("link","href",c).get(r+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;case"meta":if(S=O_("meta","content",c).get(r+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=c.createElement(r),yn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=e,J(f),r=f}e.stateNode=r}else P_(c,e.type,e.stateNode);else e.stateNode=N_(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?P_(c,e.type,e.stateNode):N_(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Pm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var N=c.firstChild;N;){var X=N.nextSibling,ft=N.nodeName;N[ka]||ft==="HEAD"||ft==="BODY"||ft==="SCRIPT"||ft==="STYLE"||ft==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=X}for(var gt=e.type,it=c.attributes;it.length;)c.removeAttributeNode(it[0]);yn(c,gt,f),c[an]=e,c[sn]=f}catch(Vt){Fe(e,e.return,Vt)}}case 5:if(ai(n,e),si(e),r&512&&(je||a===null||Wn(a,a.return)),e.flags&32){c=e.stateNode;try{In(c,"")}catch(Vt){Fe(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Pm(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Qu=!0);break;case 6:if(ai(n,e),si(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Vt){Fe(e,e.return,Vt)}}break;case 3:if(Vl=null,c=mi,mi=Hl(n.containerInfo),ai(n,e),mi=c,si(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(n.containerInfo)}catch(Vt){Fe(e,e.return,Vt)}Qu&&(Qu=!1,Xm(e));break;case 4:r=mi,mi=Hl(e.stateNode.containerInfo),ai(n,e),si(e),mi=r;break;case 12:ai(n,e),si(e);break;case 13:ai(n,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lf=ht()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ju(e,r)));break;case 22:if(r&512&&(je||a===null||Wn(a,a.return)),N=e.memoizedState!==null,X=a!==null&&a.memoizedState!==null,ft=Xi,gt=je,Xi=ft||N,je=gt||X,ai(n,e),je=gt,Xi=ft,si(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,r&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Xi||je,a===null||X||n||Xs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){X=a=n;try{if(c=X.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=X.stateNode,b=X.memoizedProps.style;var lt=b!=null&&b.hasOwnProperty("display")?b.display:null;S.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Vt){Fe(X,X.return,Vt)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=N?"":X.memoizedProps}catch(Vt){Fe(X,X.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ju(e,a))));break;case 19:ai(n,e),si(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ju(e,r)));break;case 21:break;default:ai(n,e),si(e)}}function si(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(zm(a)){var r=a;break t}a=a.return}throw Error(s(160))}switch(r.tag){case 27:var c=r.stateNode,f=Zu(e);bl(e,f,c);break;case 5:var S=r.stateNode;r.flags&32&&(In(S,""),r.flags&=-33);var b=Zu(e);bl(e,b,S);break;case 3:case 4:var N=r.stateNode.containerInfo,X=Zu(e);Ku(e,X,N);break;default:throw Error(s(161))}}}catch(ft){Fe(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fm(e,n.alternate,n),n=n.sibling}function Xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Xs(n);break;case 1:Wn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),Xs(n);break;case 26:case 27:case 5:Wn(n,n.return),Xs(n);break;case 22:Wn(n,n.return),n.memoizedState===null&&Xs(n);break;default:Xs(n)}e=e.sibling}}function xa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:xa(c,f,a),fo(4,f);break;case 1:if(xa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(X){Fe(r,r.return,X)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)Dm(N[c],b)}catch(X){Fe(r,r.return,X)}}a&&S&64&&Lm(f),as(f,f.return);break;case 26:case 27:case 5:xa(c,f,a),a&&r===null&&S&4&&Om(f),as(f,f.return);break;case 12:xa(c,f,a);break;case 13:xa(c,f,a),a&&S&4&&Vm(c,f);break;case 22:f.memoizedState===null&&xa(c,f,a),as(f,f.return);break;default:xa(c,f,a)}n=n.sibling}}function $u(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function ya(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wm(e,n,a,r),n=n.sibling}function Wm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ya(e,n,a,r),c&2048&&fo(9,n);break;case 3:ya(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(c&2048){ya(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Fe(n,n.return,N)}}else ya(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?ya(e,n,a,r):ho(e,n):f._visibility&4?ya(e,n,a,r):(f._visibility|=4,Ws(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&$u(n.alternate,n);break;case 24:ya(e,n,a,r),c&2048&&tf(n.alternate,n);break;default:ya(e,n,a,r)}}function Ws(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,b=a,N=r,X=S.flags;switch(S.tag){case 0:case 11:case 15:Ws(f,S,b,N,c),fo(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&4?Ws(f,S,b,N,c):ho(f,S):(ft._visibility|=4,Ws(f,S,b,N,c)),c&&X&2048&&$u(S.alternate,S);break;case 24:Ws(f,S,b,N,c),c&&X&2048&&tf(S.alternate,S);break;default:Ws(f,S,b,N,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ho(a,r),c&2048&&$u(r.alternate,r);break;case 24:ho(a,r),c&2048&&tf(r.alternate,r);break;default:ho(a,r)}n=n.sibling}}var po=8192;function Ys(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)Ym(e),e=e.sibling}function Ym(e){switch(e.tag){case 26:Ys(e),e.flags&po&&e.memoizedState!==null&&PS(mi,e.memoizedState,e.memoizedProps);break;case 5:Ys(e);break;case 3:case 4:var n=mi;mi=Hl(e.stateNode.containerInfo),Ys(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,Ys(e),po=n):Ys(e));break;default:Ys(e)}}function qm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Zm(r,e)}qm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Al(e)):mo(e);break;default:mo(e)}}function Al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Zm(r,e)}qm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Al(n));break;default:Al(n)}e=e.sibling}}function Zm(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else t:for(a=e;pn!==null;){r=pn;var c=r.sibling,f=r.return;if(Hm(r),r===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}function jv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,r){return new jv(e,n,a,r)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Km(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Rl(e,n,a,r,c,f){var S=0;if(r=e,typeof e=="function")ef(e)&&(S=1);else if(typeof e=="string")S=NS(e,a,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return ss(a.children,c,f,n);case m:S=8,c|=24;break;case g:return e=ri(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case w:return e=ri(13,a,n,c),e.elementType=w,e.lanes=f,e;case y:return e=ri(19,a,n,c),e.elementType=y,e.lanes=f,e;case O:return Qm(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case M:S=10;break t;case x:S=9;break t;case C:S=11;break t;case _:S=14;break t;case P:S=16,r=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ri(S,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ss(e,n,a,r){return e=ri(7,e,r,n),e.lanes=a,e}function Qm(e,n,a,r){e=ri(22,e,r,n),e.elementType=O,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)===0){var S=ua(f,2);S!==null&&(c._pendingVisibility|=2,Nn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(s(456));if((c._pendingVisibility&2)!==0){var S=ua(f,2);S!==null&&(c._pendingVisibility&=-3,Nn(S,f,2))}}};return e.stateNode=c,e}function nf(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function af(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function qi(e){e.flags|=4}function Jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!z_(n)){if(n=ii.current,n!==null&&((ye&4194176)===ye?Ai!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ai))throw Jr=lu,mp;e.flags|=8192}}function Cl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ee():536870912,e.lanes|=n,js|=n)}function _o(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&31457280,r|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Zv(e,n,a){var r=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ki(ln),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(jr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pi!==null&&(hf(pi),pi=null))),We(n),null;case 26:return a=n.memoizedState,e===null?(qi(n),a!==null?(We(n),Jm(n,a)):(We(n),n.flags&=-16777217)):a?a!==e.memoizedState?(qi(n),We(n),Jm(n,a)):(We(n),n.flags&=-16777217):(e.memoizedProps!==r&&qi(n),We(n),n.flags&=-16777217),null;case 27:kt(n),a=ae.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}e=Me.current,jr(n)?dp(n):(e=C_(c,r,a),n.stateNode=e,qi(n))}return We(n),null;case 5:if(kt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(e=Me.current,jr(n))dp(n);else{switch(c=Fl(ae.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[an]=n,e[sn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(yn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&qi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ae.current,jr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||M_(e.nodeValue,a)),e||Za(n)}else e=Fl(e).createTextNode(r),e[an]=n,n.stateNode=e}return We(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=jr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else Zr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else pi!==null&&(hf(pi),pi=null),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),We(n),null;case 4:return re(),e===null&&Ef(n.stateNode.containerInfo),We(n),null;case 10:return ki(n.type),We(n),null;case 19:if(Kt(on),c=n.memoizedState,c===null)return We(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)_o(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=fl(e),f!==null){for(n.flags|=128,_o(c,!1),e=f.updateQueue,n.updateQueue=e,Cl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Km(a,e),a=a.sibling;return Pt(on,on.current&1|2),n.child}e=e.sibling}c.tail!==null&&ht()>wl&&(n.flags|=128,r=!0,_o(c,!1),n.lanes=4194304)}else{if(!r)if(e=fl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Cl(n,e),_o(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return We(n),null}else 2*ht()-c.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,r=!0,_o(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ht(),n.sibling=null,e=on.current,Pt(on,r?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Fi(n),uu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Kt(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(ln),We(n),null;case 25:return null}throw Error(s(156,n.tag))}function Kv(e,n){switch(ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(ln),re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Zr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Kt(on),null;case 4:return re(),null;case 10:return ki(n.type),null;case 22:case 23:return Fi(n),uu(),e!==null&&Kt(Qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(ln),null;case 25:return null;default:return null}}function $m(e,n){switch(ru(n),n.tag){case 3:ki(ln),re();break;case 26:case 27:case 5:kt(n);break;case 4:re();break;case 13:Fi(n);break;case 19:Kt(on);break;case 10:ki(n.type);break;case 22:case 23:Fi(n),uu(),e!==null&&Kt(Qa);break;case 24:ki(ln)}}var Qv={getCacheForType:function(e){var n=Tn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Jv=typeof WeakMap=="function"?WeakMap:Map,Ye=0,He=null,pe=null,ye=0,Ge=0,qn=null,ji=!1,qs=!1,sf=!1,Zi=0,Ze=0,Ea=0,rs=0,rf=0,oi=0,js=0,go=null,Ci=null,of=!1,lf=0,wl=1/0,Dl=null,Ta=null,Ul=!1,os=null,vo=0,cf=0,uf=null,So=0,ff=null;function jn(){if((Ye&2)!==0&&ye!==0)return ye&-ye;if(R.T!==null){var e=Fs;return e!==0?e:Sf()}return Br()}function t_(){oi===0&&(oi=(ye&536870912)===0||be?nn():536870912);var e=ii.current;return e!==null&&(e.flags|=32),oi}function Nn(e,n,a){(e===He&&Ge===2||e.cancelPendingCommit!==null)&&(Zs(e,0),Ki(e,ye,oi,!1)),wn(e,a),((Ye&2)===0||e!==He)&&(e===He&&((Ye&2)===0&&(rs|=a),Ze===4&&Ki(e,ye,oi,!1)),wi(e))}function e_(e,n,a){if((Ye&6)!==0)throw Error(s(327));var r=!a&&(n&60)===0&&(n&e.expiredLanes)===0||$t(e,n),c=r?eS(e,n):mf(e,n,!0),f=r;do{if(c===0){qs&&!r&&Ki(e,n,0,!1);break}else if(c===6)Ki(e,n,0,!ji);else{if(a=e.current.alternate,f&&!$v(a)){c=mf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;c=go;var N=b.current.memoizedState.isDehydrated;if(N&&(Zs(b,S).flags|=256),S=mf(b,S,!1),S!==2){if(sf&&!N){b.errorRecoveryDisabledLanes|=f,rs|=f,c=4;break t}f=Ci,Ci=c,f!==null&&hf(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){Zs(e,0),Ki(e,n,0,!0);break}t:{switch(r=e,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){Ki(r,n,oi,!ji);break t}break;case 2:Ci=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=a,r.finishedLanes=n,(n&62914560)===n&&(f=lf+300-ht(),10<f)){if(Ki(r,n,oi,!ji),Dt(r,0)!==0)break t;r.timeoutHandle=b_(n_.bind(null,r,a,Ci,Dl,of,n,oi,rs,js,ji,2,-0,0),f);break t}n_(r,a,Ci,Dl,of,n,oi,rs,js,ji,0,-0,0)}}break}while(!0);wi(e)}function hf(e){Ci===null?Ci=e:Ci.push.apply(Ci,e)}function n_(e,n,a,r,c,f,S,b,N,X,ft,gt,it){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:OS},Ym(n),n=zS(),n!==null)){e.cancelPendingCommit=n(c_.bind(null,e,a,r,c,S,b,N,1,gt,it)),Ki(e,f,S,!X);return}c_(e,a,r,c,S,b,N,ft,gt,it)}function $v(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ki(e,n,a,r){n&=~rf,n&=~rs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-qt(c),S=1<<f;r[f]=-1,c&=~S}a!==0&&zr(e,a,n)}function Ll(){return(Ye&6)===0?(xo(0),!1):!0}function df(){if(pe!==null){if(Ge===0)var e=pe.return;else e=pe,Vi=ns=null,vu(e),Bs=null,$r=0,e=pe;for(;e!==null;)$m(e.alternate,e),e=e.return;pe=null}}function Zs(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),df(),He=e,pe=a=Ma(e.current,null),ye=n,Ge=0,qn=null,ji=!1,qs=$t(e,n),sf=!1,js=oi=rf=rs=Ea=Ze=0,Ci=go=null,of=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-qt(r),f=1<<c;n|=e[c],r&=~f}return Zi=n,nl(),a}function i_(e,n){fe=null,R.H=Ri,n===Qr?(n=vp(),Ge=3):n===mp?(n=vp(),Ge=4):Ge=n===_m?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,pe===null&&(Ze=1,Ml(e,ti(n,e.current)))}function a_(){var e=R.H;return R.H=Ri,e===null?Ri:e}function s_(){var e=R.A;return R.A=Qv,e}function pf(){Ze=4,ji||(ye&4194176)!==ye&&ii.current!==null||(qs=!0),(Ea&134217727)===0&&(rs&134217727)===0||He===null||Ki(He,ye,oi,!1)}function mf(e,n,a){var r=Ye;Ye|=2;var c=a_(),f=s_();(He!==e||ye!==n)&&(Dl=null,Zs(e,n)),n=!1;var S=Ze;t:do try{if(Ge!==0&&pe!==null){var b=pe,N=qn;switch(Ge){case 8:df(),S=6;break t;case 3:case 2:case 6:ii.current===null&&(n=!0);var X=Ge;if(Ge=0,qn=null,Ks(e,b,N,X),a&&qs){S=0;break t}break;default:X=Ge,Ge=0,qn=null,Ks(e,b,N,X)}}tS(),S=Ze;break}catch(ft){i_(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Vi=ns=null,Ye=r,R.H=c,R.A=f,pe===null&&(He=null,ye=0,nl()),S}function tS(){for(;pe!==null;)r_(pe)}function eS(e,n){var a=Ye;Ye|=2;var r=a_(),c=s_();He!==e||ye!==n?(Dl=null,wl=ht()+500,Zs(e,n)):qs=$t(e,n);t:do try{if(Ge!==0&&pe!==null){n=pe;var f=qn;e:switch(Ge){case 1:Ge=0,qn=null,Ks(e,n,f,1);break;case 2:if(_p(f)){Ge=0,qn=null,o_(n);break}n=function(){Ge===2&&He===e&&(Ge=7),wi(e)},f.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:_p(f)?(Ge=0,qn=null,o_(n)):(Ge=0,qn=null,Ks(e,n,f,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var b=pe;if(!S||z_(S)){Ge=0,qn=null;var N=b.sibling;if(N!==null)pe=N;else{var X=b.return;X!==null?(pe=X,Nl(X)):pe=null}break e}}Ge=0,qn=null,Ks(e,n,f,5);break;case 6:Ge=0,qn=null,Ks(e,n,f,6);break;case 8:df(),Ze=6;break t;default:throw Error(s(462))}}nS();break}catch(ft){i_(e,ft)}while(!0);return Vi=ns=null,R.H=r,R.A=c,Ye=a,pe!==null?0:(He=null,ye=0,nl(),Ze)}function nS(){for(;pe!==null&&!E();)r_(pe)}function r_(e){var n=Cm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Nl(e):pe=n}function o_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Mm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Mm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:vu(n);default:$m(a,n),n=pe=Km(n,Zi),n=Cm(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Nl(e):pe=n}function Ks(e,n,a,r){Vi=ns=null,vu(n),Bs=null,$r=0;var c=n.return;try{if(Xv(e,c,n,a,ye)){Ze=1,Ml(e,ti(a,e.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Ze=1,Ml(e,ti(a,e.current)),pe=null;return}n.flags&32768?(be||r===1?e=!0:qs||(ye&536870912)!==0?e=!1:(ji=e=!0,(r===2||r===3||r===6)&&(r=ii.current,r!==null&&r.tag===13&&(r.flags|=16384))),l_(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){l_(n,ji);return}e=n.return;var a=Zv(n.alternate,n,Zi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);Ze===0&&(Ze=5)}function l_(e,n){do{var a=Kv(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ze=6,pe=null}function c_(e,n,a,r,c,f,S,b,N,X){var ft=R.T,gt=j.p;try{j.p=2,R.T=null,iS(e,n,a,r,gt,c,f,S,b,N,X)}finally{R.T=ft,j.p=gt}}function iS(e,n,a,r,c,f,S,b){do Qs();while(os!==null);if((Ye&6)!==0)throw Error(s(327));var N=e.finishedWork;if(r=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var X=N.lanes|N.childLanes;if(X|=iu,Yo(e,r,X,f,S,b),e===He&&(pe=He=null,ye=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||Ul||(Ul=!0,cf=X,uf=a,oS(wt,function(){return Qs(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=R.T,R.T=null,f=j.p,j.p=2,S=Ye,Ye|=4,Yv(e,N),km(N,e),Rv(Rf,e.containerInfo),Wl=!!Af,Rf=Af=null,e.current=N,Fm(e,N.alternate,N),nt(),Ye=S,j.p=f,R.T=a):e.current=N,Ul?(Ul=!1,os=e,vo=r):u_(e,X),X=e.pendingLanes,X===0&&(Ta=null),It(N.stateNode),wi(e),n!==null)for(c=e.onRecoverableError,N=0;N<n.length;N++)X=n[N],c(X.value,{componentStack:X.stack});return(vo&3)!==0&&Qs(),X=e.pendingLanes,(r&4194218)!==0&&(X&42)!==0?e===ff?So++:(So=0,ff=e):So=0,xo(0),null}function u_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Qs(){if(os!==null){var e=os,n=cf;cf=0;var a=bs(vo),r=R.T,c=j.p;try{if(j.p=32>a?32:a,R.T=null,os===null)var f=!1;else{a=uf,uf=null;var S=os,b=vo;if(os=null,vo=0,(Ye&6)!==0)throw Error(s(331));var N=Ye;if(Ye|=4,jm(S.current),Wm(S,S.current,b,a),Ye=N,xo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Zt,S)}catch{}f=!0}return f}finally{j.p=c,R.T=r,u_(e,n)}}return!1}function f_(e,n,a){n=ti(a,n),n=Lu(e.stateNode,n,2),e=va(e,n,2),e!==null&&(wn(e,2),wi(e))}function Fe(e,n,a){if(e.tag===3)f_(e,e,a);else for(;n!==null;){if(n.tag===3){f_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ta===null||!Ta.has(r))){e=ti(a,e),a=pm(2),r=va(n,a,2),r!==null&&(mm(a,r,n,e),wn(r,2),wi(r));break}}n=n.return}}function _f(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Jv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(sf=!0,c.add(a),e=aS.bind(null,e,n,a),n.then(e,e))}function aS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(ye&a)===a&&(Ze===4||Ze===3&&(ye&62914560)===ye&&300>ht()-lf?(Ye&2)===0&&Zs(e,0):rf|=a,js===ye&&(js=0)),wi(e)}function h_(e,n){n===0&&(n=Ee()),e=ua(e,n),e!==null&&(wn(e,n),wi(e))}function sS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),h_(e,a)}function rS(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),h_(e,a)}function oS(e,n){return Xt(e,n)}var Ol=null,Js=null,gf=!1,Pl=!1,vf=!1,ls=0;function wi(e){e!==Js&&e.next===null&&(Js===null?Ol=Js=e:Js=Js.next=e),Pl=!0,gf||(gf=!0,cS(lS))}function xo(e,n){if(!vf&&Pl){vf=!0;do for(var a=!1,r=Ol;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var S=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-qt(42|e)+1)-1,f&=c&~(S&~b),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,m_(r,f))}else f=ye,f=Dt(r,r===He?f:0),(f&3)===0||$t(r,f)||(a=!0,m_(r,f));r=r.next}while(a);vf=!1}}function lS(){Pl=gf=!1;var e=0;ls!==0&&(gS()&&(e=ls),ls=0);for(var n=ht(),a=null,r=Ol;r!==null;){var c=r.next,f=d_(r,n);f===0?(r.next=null,a===null?Ol=c:a.next=c,c===null&&(Js=a)):(a=r,(e!==0||(f&3)!==0)&&(Pl=!0)),r=c}xo(e)}function d_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-qt(f),b=1<<S,N=c[S];N===-1?((b&a)===0||(b&r)!==0)&&(c[S]=ke(b,n)):N<=n&&(e.expiredLanes|=b),f&=~b}if(n=He,a=ye,a=Dt(e,e===n?a:0),r=e.callbackNode,a===0||e===n&&Ge===2||e.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&U(r),bs(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=_e;break;default:a=wt}return r=p_.bind(null,e),a=Xt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&U(r),e.callbackPriority=2,e.callbackNode=null,2}function p_(e,n){var a=e.callbackNode;if(Qs()&&e.callbackNode!==a)return null;var r=ye;return r=Dt(e,e===He?r:0),r===0?null:(e_(e,r,n),d_(e,ht()),e.callbackNode!=null&&e.callbackNode===a?p_.bind(null,e):null)}function m_(e,n){if(Qs())return null;e_(e,n,!0)}function cS(e){SS(function(){(Ye&6)!==0?Xt(dt,e):e()})}function Sf(){return ls===0&&(ls=nn()),ls}function __(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function g_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uS(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=__((c[sn]||null).action),S=r.submitter;S&&(n=(n=S[sn]||null)?__(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new $o("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ls!==0){var N=S?g_(c,S):new FormData(c);Ru(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(b.preventDefault(),N=S?g_(c,S):new FormData(c),Ru(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var xf=0;xf<cp.length;xf++){var yf=cp[xf],fS=yf.toLowerCase(),hS=yf[0].toUpperCase()+yf.slice(1);di(fS,"on"+hS)}di(ap,"onAnimationEnd"),di(sp,"onAnimationIteration"),di(rp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(wv,"onTransitionRun"),di(Dv,"onTransitionStart"),di(Uv,"onTransitionCancel"),di(op,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function v_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var S=r.length-1;0<=S;S--){var b=r[S],N=b.instance,X=b.currentTarget;if(b=b.listener,N!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=X;try{f(c)}catch(ft){yl(ft)}c.currentTarget=null,f=N}else for(S=0;S<r.length;S++){if(b=r[S],N=b.instance,X=b.currentTarget,b=b.listener,N!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=X;try{f(c)}catch(ft){yl(ft)}c.currentTarget=null,f=N}}}}function xe(e,n){var a=n[As];a===void 0&&(a=n[As]=new Set);var r=e+"__bubble";a.has(r)||(S_(n,e,2,!1),a.add(r))}function Mf(e,n,a){var r=0;n&&(r|=4),S_(a,e,r,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Ef(e){if(!e[zl]){e[zl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(dS.has(a)||Mf(a,!1,e),Mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zl]||(n[zl]=!0,Mf("selectionchange",!1,n))}}function S_(e,n,a,r){switch(V_(n)){case 2:var c=FS;break;case 8:c=HS;break;default:c=zf}a=c.bind(null,n,a,e),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Tf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var b=r.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(S===4)for(S=r.return;S!==null;){var N=S.tag;if((N===3||N===4)&&(N=S.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;S=S.return}for(;b!==null;){if(S=zi(b),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){r=f=S;continue t}b=b.parentNode}}r=r.return}Od(function(){var X=f,ft=Vc(a),gt=[];t:{var it=lp.get(e);if(it!==void 0){var lt=$o,Vt=e;switch(e){case"keypress":if(Qo(a)===0)break t;case"keydown":case"keyup":lt=rv;break;case"focusin":Vt="focus",lt=jc;break;case"focusout":Vt="blur",lt=jc;break;case"beforeblur":case"afterblur":lt=jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=cv;break;case ap:case sp:case rp:lt=Q0;break;case op:lt=fv;break;case"scroll":case"scrollend":lt=Y0;break;case"wheel":lt=dv;break;case"copy":case"cut":case"paste":lt=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Fd;break;case"toggle":case"beforetoggle":lt=mv}var ie=(n&4)!==0,Ke=!ie&&(e==="scroll"||e==="scrollend"),Q=ie?it!==null?it+"Capture":null:it;ie=[];for(var G=X,$;G!==null;){var mt=G;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||Q===null||(mt=Fr(G,Q),mt!=null&&ie.push(Mo(G,mt,$))),Ke)break;G=G.return}0<ie.length&&(it=new lt(it,Vt,null,a,ft),gt.push({event:it,listeners:ie}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==Gc&&(Vt=a.relatedTarget||a.fromElement)&&(zi(Vt)||Vt[Pi]))break t;if((lt||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Vt=a.relatedTarget||a.toElement,lt=X,Vt=Vt?zi(Vt):null,Vt!==null&&(Ke=K(Vt),ie=Vt.tag,Vt!==Ke||ie!==5&&ie!==27&&ie!==6)&&(Vt=null)):(lt=null,Vt=X),lt!==Vt)){if(ie=Bd,mt="onMouseLeave",Q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Fd,mt="onPointerLeave",Q="onPointerEnter",G="pointer"),Ke=lt==null?it:Y(lt),$=Vt==null?it:Y(Vt),it=new ie(mt,G+"leave",lt,a,ft),it.target=Ke,it.relatedTarget=$,mt=null,zi(ft)===X&&(ie=new ie(Q,G+"enter",Vt,a,ft),ie.target=$,ie.relatedTarget=Ke,mt=ie),Ke=mt,lt&&Vt)e:{for(ie=lt,Q=Vt,G=0,$=ie;$;$=$s($))G++;for($=0,mt=Q;mt;mt=$s(mt))$++;for(;0<G-$;)ie=$s(ie),G--;for(;0<$-G;)Q=$s(Q),$--;for(;G--;){if(ie===Q||Q!==null&&ie===Q.alternate)break e;ie=$s(ie),Q=$s(Q)}ie=null}else ie=null;lt!==null&&x_(gt,it,lt,ie,!1),Vt!==null&&Ke!==null&&x_(gt,Ke,Vt,ie,!0)}}t:{if(it=X?Y(X):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Ft=qd;else if(Wd(it))if(jd)Ft=bv;else{Ft=Ev;var de=Mv}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?X&&Hc(X.elementType)&&(Ft=qd):Ft=Tv;if(Ft&&(Ft=Ft(e,X))){Yd(gt,Ft,a,ft);break t}de&&de(e,it,X),e==="focusout"&&X&&it.type==="number"&&X.memoizedProps.value!=null&&En(it,"number",it.value)}switch(de=X?Y(X):window,e){case"focusin":(Wd(de)||de.contentEditable==="true")&&(Us=de,tu=X,qr=null);break;case"focusout":qr=tu=Us=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,np(gt,a,ft);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":np(gt,a,ft)}var Wt;if(Kc)t:{switch(e){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else Ds?kd(e,a)&&(Qt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(Hd&&a.locale!=="ko"&&(Ds||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&Ds&&(Wt=Pd()):(ca=ft,Wc="value"in ca?ca.value:ca.textContent,Ds=!0)),de=Bl(X,Qt),0<de.length&&(Qt=new Id(Qt,e,null,a,ft),gt.push({event:Qt,listeners:de}),Wt?Qt.data=Wt:(Wt=Xd(a),Wt!==null&&(Qt.data=Wt)))),(Wt=gv?vv(e,a):Sv(e,a))&&(Qt=Bl(X,"onBeforeInput"),0<Qt.length&&(de=new Id("onBeforeInput","beforeinput",null,a,ft),gt.push({event:de,listeners:Qt}),de.data=Wt)),uS(gt,e,X,a,ft)}v_(gt,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Fr(e,a),c!=null&&r.unshift(Mo(e,c,f)),c=Fr(e,n),c!=null&&r.push(Mo(e,c,f))),e=e.return}return r}function $s(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x_(e,n,a,r,c){for(var f=n._reactName,S=[];a!==null&&a!==r;){var b=a,N=b.alternate,X=b.stateNode;if(b=b.tag,N!==null&&N===r)break;b!==5&&b!==26&&b!==27||X===null||(N=X,c?(X=Fr(a,f),X!=null&&S.unshift(Mo(a,X,N))):c||(X=Fr(a,f),X!=null&&S.push(Mo(a,X,N)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function y_(e){return(typeof e=="string"?e:""+e).replace(pS,`
`).replace(mS,"")}function M_(e,n){return n=y_(n),y_(e)===n}function Il(){}function Oe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||In(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&In(e,""+r);break;case"className":Ve(e,"class",r);break;case"tabIndex":Ve(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(e,a,r);break;case"style":Ld(e,r,f);break;case"data":if(n!=="object"){Ve(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Il);break;case"onScroll":r!=null&&xe("scroll",e);break;case"onScrollEnd":r!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ve(e,"popover",r);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ve(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=X0.get(a)||a,ve(e,a,r))}}function bf(e,n,a,r,c,f){switch(a){case"style":Ld(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?In(e,r):(typeof r=="number"||typeof r=="bigint")&&In(e,""+r);break;case"onScroll":r!=null&&xe("scroll",e);break;case"onScrollEnd":r!=null&&xe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Il);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ve(e,a,r)}}}function yn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,S,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),r&&Oe(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var b=f=S=c=null,N=null,X=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":S=ft;break;case"checked":N=ft;break;case"defaultChecked":X=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Oe(e,n,r,ft,a,null)}}Un(e,f,b,N,X,S,c,!1),Se(e);return;case"select":xe("invalid",e),r=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":r=b;default:Oe(e,n,c,b,a,null)}n=f,a=S,e.multiple=!!r,n!=null?qe(e,!!r,n,!1):a!=null&&qe(e,!!r,a,!0);return;case"textarea":xe("invalid",e),f=c=r=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Oe(e,n,S,b,a,null)}Rs(e,r,c,f),Se(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(r=a[N],r!=null))switch(N){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Oe(e,n,N,r,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(r=0;r<yo.length;r++)xe(yo[r],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in a)if(a.hasOwnProperty(X)&&(r=a[X],r!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,X,r,a,null)}return;default:if(Hc(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&bf(e,n,ft,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Oe(e,n,b,r,a,null))}function _S(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,b=null,N=null,X=null,ft=null;for(lt in a){var gt=a[lt];if(a.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":N=gt;default:r.hasOwnProperty(lt)||Oe(e,n,lt,null,r,gt)}}for(var it in r){var lt=r[it];if(gt=a[it],r.hasOwnProperty(it)&&(lt!=null||gt!=null))switch(it){case"type":f=lt;break;case"name":c=lt;break;case"checked":X=lt;break;case"defaultChecked":ft=lt;break;case"value":S=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==gt&&Oe(e,n,it,lt,r,gt)}}Le(e,S,b,N,X,ft,f,c);return;case"select":lt=S=b=it=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":lt=N;default:r.hasOwnProperty(f)||Oe(e,n,f,null,r,N)}for(c in r)if(f=r[c],N=a[c],r.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==N&&Oe(e,n,c,f,r,N)}n=b,a=S,r=lt,it!=null?qe(e,!!a,it,!1):!!r!=!!a&&(n!=null?qe(e,!!a,n,!0):qe(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,n,b,null,r,c)}for(S in r)if(c=r[S],f=a[S],r.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Oe(e,n,S,c,r,f)}vn(e,it,lt);return;case"option":for(var Vt in a)if(it=a[Vt],a.hasOwnProperty(Vt)&&it!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Oe(e,n,Vt,null,r,it)}for(N in r)if(it=r[N],lt=a[N],r.hasOwnProperty(N)&&it!==lt&&(it!=null||lt!=null))switch(N){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,N,it,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!r.hasOwnProperty(ie)&&Oe(e,n,ie,null,r,it);for(X in r)if(it=r[X],lt=a[X],r.hasOwnProperty(X)&&it!==lt&&(it!=null||lt!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Oe(e,n,X,it,r,lt)}return;default:if(Hc(n)){for(var Ke in a)it=a[Ke],a.hasOwnProperty(Ke)&&it!==void 0&&!r.hasOwnProperty(Ke)&&bf(e,n,Ke,void 0,r,it);for(ft in r)it=r[ft],lt=a[ft],!r.hasOwnProperty(ft)||it===lt||it===void 0&&lt===void 0||bf(e,n,ft,it,r,lt);return}}for(var Q in a)it=a[Q],a.hasOwnProperty(Q)&&it!=null&&!r.hasOwnProperty(Q)&&Oe(e,n,Q,null,r,it);for(gt in r)it=r[gt],lt=a[gt],!r.hasOwnProperty(gt)||it===lt||it==null&&lt==null||Oe(e,n,gt,it,r,lt)}var Af=null,Rf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function E_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Cf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===wf?!1:(wf=e,!0):(wf=null,!1)}var b_=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,A_=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof A_<"u"?function(e){return A_.resolve(null).then(e).catch(xS)}:b_;function xS(e){setTimeout(function(){throw e})}function Df(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(r===0){e.removeChild(c),Do(n);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=c}while(a);Do(n)}function Uf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),Ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function yS(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function MS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function R_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function C_(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var li=new Map,w_=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Qi=j.d;j.d={f:ES,r:TS,D:bS,C:AS,L:RS,m:CS,X:DS,S:wS,M:US};function ES(){var e=Qi.f(),n=Ll();return e||n}function TS(e){var n=A(e);n!==null&&n.tag===5&&n.type==="form"?nm(n):Qi.r(e)}var tr=typeof document>"u"?null:document;function D_(e,n,a){var r=tr;if(r&&typeof n=="string"&&n){var c=hn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),w_.has(c)||(w_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),yn(n,"link",e),J(n),r.head.appendChild(n)))}}function bS(e){Qi.D(e),D_("dns-prefetch",e,null)}function AS(e,n){Qi.C(e,n),D_("preconnect",e,n)}function RS(e,n,a){Qi.L(e,n,a);var r=tr;if(r&&e&&n){var c='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hn(a.imageSizes)+'"]')):c+='[href="'+hn(e)+'"]';var f=c;switch(n){case"style":f=er(e);break;case"script":f=nr(e)}li.has(f)||(e=T({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),yn(n,"link",e),J(n),r.head.appendChild(n)))}}function CS(e,n){Qi.m(e,n);var a=tr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hn(r)+'"][href="'+hn(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(e)}if(!li.has(f)&&(e=T({rel:"modulepreload",href:e},n),li.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),yn(r,"link",e),J(r),a.head.appendChild(r)}}}function wS(e,n,a){Qi.S(e,n,a);var r=tr;if(r&&e){var c=et(r).hoistableStyles,f=er(e);n=n||"default";var S=c.get(f);if(!S){var b={loading:0,preload:null};if(S=r.querySelector(Eo(f)))b.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(f))&&Lf(e,a);var N=S=r.createElement("link");J(N),yn(N,"link",e),N._p=new Promise(function(X,ft){N.onload=X,N.onerror=ft}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Gl(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:b},c.set(f,S)}}}function DS(e,n){Qi.X(e,n);var a=tr;if(a&&e){var r=et(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(To(c)),f||(e=T({src:e,async:!0},n),(n=li.get(c))&&Nf(e,n),f=a.createElement("script"),J(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function US(e,n){Qi.M(e,n);var a=tr;if(a&&e){var r=et(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(To(c)),f||(e=T({src:e,async:!0,type:"module"},n),(n=li.get(c))&&Nf(e,n),f=a.createElement("script"),J(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function U_(e,n,a,r){var c=(c=ae.current)?Hl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=et(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=er(a.href);var f=et(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Eo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||LS(c,e,a,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=et(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function er(e){return'href="'+hn(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function LS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),yn(n,"link",a),J(n),e.head.appendChild(n))}function nr(e){return'[src="'+hn(e)+'"]'}function To(e){return"script[async]"+e}function N_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+hn(a.href)+'"]');if(r)return n.instance=r,J(r),r;var c=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),J(r),yn(r,"style",c),Gl(r,a.precedence,e),n.instance=r;case"stylesheet":c=er(a.href);var f=e.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,J(f),f;r=L_(a),(c=li.get(c))&&Lf(r,c),f=(e.ownerDocument||e).createElement("link"),J(f);var S=f;return S._p=new Promise(function(b,N){S.onload=b,S.onerror=N}),yn(f,"link",r),n.state.loading|=4,Gl(f,a.precedence,e),n.instance=f;case"script":return f=nr(a.src),(c=e.querySelector(To(f)))?(n.instance=c,J(c),c):(r=a,(c=li.get(f))&&(r=T({},a),Nf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),J(c),yn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gl(r,a.precedence,e));return n.instance}function Gl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,S=0;S<r.length;S++){var b=r[S];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function O_(e,n,a){if(Vl===null){var r=new Map,c=Vl=new Map;c.set(a,r)}else c=Vl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ka]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=r.get(S);b?b.push(f):r.set(S,[f])}}return r}function P_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function NS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function z_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function OS(){}function PS(e,n,a){if(bo===null)throw Error(s(475));var r=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=er(a.href),f=e.querySelector(Eo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=kl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,J(f);return}f=e.ownerDocument||e,a=L_(a),(c=li.get(c))&&Lf(a,c),f=f.createElement("link"),J(f);var S=f;S._p=new Promise(function(b,N){S.onload=b,S.onerror=N}),yn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=kl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function zS(){if(bo===null)throw Error(s(475));var e=bo;return e.stylesheets&&e.count===0&&Of(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Of(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function kl(){if(this.count--,this.count===0){if(this.stylesheets)Of(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Of(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(BS,e),Xl=null,kl.call(e))}function BS(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var r=a.get(null);else{a=new Map,Xl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||r,f===r&&a.set(null,c),a.set(S,c),this.count++,r=kl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function IS(e,n,a,r,c,f,S,b){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.hiddenUpdates=Cn(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function B_(e,n,a,r,c,f,S,b,N,X,ft,gt){return e=new IS(e,n,a,S,b,N,X,gt),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),e.current=f,f.stateNode=e,n=fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Wu(f),e}function I_(e){return e?(e=Os,e):Os}function F_(e,n,a,r,c,f){c=I_(c),r.context===null?r.context=c:r.pendingContext=c,r=ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=va(e,r,n),a!==null&&(Nn(a,e,n),lo(a,e,n))}function H_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){H_(e,n),(e=e.alternate)&&H_(e,n)}function G_(e){if(e.tag===13){var n=ua(e,67108864);n!==null&&Nn(n,e,67108864),Pf(e,67108864)}}var Wl=!0;function FS(e,n,a,r){var c=R.T;R.T=null;var f=j.p;try{j.p=2,zf(e,n,a,r)}finally{j.p=f,R.T=c}}function HS(e,n,a,r){var c=R.T;R.T=null;var f=j.p;try{j.p=8,zf(e,n,a,r)}finally{j.p=f,R.T=c}}function zf(e,n,a,r){if(Wl){var c=Bf(r);if(c===null)Tf(e,n,r,Yl,a),k_(e,r);else if(VS(c,e,n,a,r))r.stopPropagation();else if(k_(e,r),n&4&&-1<GS.indexOf(e)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ct(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var N=1<<31-qt(S);b.entanglements[1]|=N,S&=~N}wi(f),(Ye&6)===0&&(wl=ht()+500,xo(0))}}break;case 13:b=ua(f,2),b!==null&&Nn(b,f,2),Ll(),Pf(f,2)}if(f=Bf(r),f===null&&Tf(e,n,r,Yl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Tf(e,n,r,null,a)}}function Bf(e){return e=Vc(e),If(e)}var Yl=null;function If(e){if(Yl=null,e=zi(e),e!==null){var n=K(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=xt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function V_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case dt:return 2;case Ht:return 8;case wt:case zt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Ff=!1,ba=null,Aa=null,Ra=null,Ro=new Map,Co=new Map,Ca=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,n){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&G_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function VS(e,n,a,r,c){switch(n){case"focusin":return ba=wo(ba,e,n,a,r,c),!0;case"dragenter":return Aa=wo(Aa,e,n,a,r,c),!0;case"mouseover":return Ra=wo(Ra,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,r,c)),!0}return!1}function X_(e){var n=zi(e.target);if(n!==null){var a=K(n);if(a!==null){if(n=a.tag,n===13){if(n=xt(a),n!==null){e.blockedOn=n,qo(e.priority,function(){if(a.tag===13){var r=jn(),c=ua(a,r);c!==null&&Nn(c,a,r),Pf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Gc=r,a.target.dispatchEvent(r),Gc=null}else return n=A(a),n!==null&&G_(n),e.blockedOn=a,!1;n.shift()}return!0}function W_(e,n,a){ql(e)&&a.delete(n)}function kS(){Ff=!1,ba!==null&&ql(ba)&&(ba=null),Aa!==null&&ql(Aa)&&(Aa=null),Ra!==null&&ql(Ra)&&(Ra=null),Ro.forEach(W_),Co.forEach(W_)}function jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kS)))}var Zl=null;function Y_(e){Zl!==e&&(Zl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===e&&(Zl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(If(r||a)===null)continue;break}var f=A(a);f!==null&&(e.splice(n,3),n-=3,Ru(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Do(e){function n(N){return jl(N,e)}ba!==null&&jl(ba,e),Aa!==null&&jl(Aa,e),Ra!==null&&jl(Ra,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Ca.length;a++){var r=Ca[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)X_(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],S=c[sn]||null;if(typeof f=="function")S||Y_(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[sn]||null)b=S.formAction;else if(If(c)!==null)continue}else b=S.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Y_(a)}}}function Hf(e){this._internalRoot=e}Kl.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=jn();F_(a,r,e,n,null,null)},Kl.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Qs(),F_(e.current,2,null,e,null,null),Ll(),n[Pi]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Br();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&X_(e)}};var q_=t.version;if(q_!=="19.0.0")throw Error(s(527,q_,"19.0.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=at(n),e=e!==null?Et(e):null,e=e===null?null:e.stateNode,e};var XS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:zi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Zt=Ql.inject(XS),Gt=Ql}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=um,f=fm,S=hm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=B_(e,1,!1,null,null,a,r,c,f,S,b,null),e[Pi]=n.current,Ef(e.nodeType===8?e.parentNode:e),new Hf(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=um,S=fm,b=hm,N=null,X=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(X=a.formState)),n=B_(e,1,!0,n,a??null,r,c,f,S,b,N,X),n.context=I_(null),a=n.current,r=jn(),c=ga(r),c.callback=null,va(a,c,r),n.current.lanes=r,wn(n,r),wi(n),e[Pi]=n.current,Ef(e),new Kl(n)},Lo.version="19.0.0",Lo}var ig;function tx(){if(ig)return kf.exports;ig=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kf.exports=$S(),kf.exports}var ex=tx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="174",Er={ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nx=0,ag=1,ix=2,o0=1,ax=2,ia=3,Ga=0,Vn=1,aa=2,Ia=0,Tr=1,sg=2,rg=3,og=4,sx=5,gs=100,rx=101,ox=102,lx=103,cx=104,ux=200,fx=201,hx=202,dx=203,Ah=204,Rh=205,px=206,mx=207,_x=208,gx=209,vx=210,Sx=211,xx=212,yx=213,Mx=214,Ch=0,wh=1,Dh=2,Rr=3,Uh=4,Lh=5,Nh=6,Oh=7,l0=0,Ex=1,Tx=2,Fa=0,bx=1,Ax=2,Rx=3,Cx=4,wx=5,Dx=6,Ux=7,c0=300,Cr=301,wr=302,Ph=303,zh=304,Pc=306,Bh=1e3,Ss=1001,Ih=1002,Mi=1003,Lx=1004,Jl=1005,Li=1006,qf=1007,xs=1008,la=1009,u0=1010,f0=1011,Vo=1012,_d=1013,ys=1014,sa=1015,ko=1016,gd=1017,vd=1018,Dr=1020,h0=35902,d0=1021,p0=1022,xi=1023,m0=1024,_0=1025,br=1026,Ur=1027,g0=1028,Sd=1029,v0=1030,xd=1031,yd=1033,Tc=33776,bc=33777,Ac=33778,Rc=33779,Fh=35840,Hh=35841,Gh=35842,Vh=35843,kh=36196,Xh=37492,Wh=37496,Yh=37808,qh=37809,jh=37810,Zh=37811,Kh=37812,Qh=37813,Jh=37814,$h=37815,td=37816,ed=37817,nd=37818,id=37819,ad=37820,sd=37821,Cc=36492,rd=36494,od=36495,S0=36283,ld=36284,cd=36285,ud=36286,Nx=3200,Ox=3201,x0=0,Px=1,Ba="",ui="srgb",Lr="srgb-linear",Uc="linear",Pe="srgb",ir=7680,lg=519,zx=512,Bx=513,Ix=514,y0=515,Fx=516,Hx=517,Gx=518,Vx=519,fd=35044,cg="300 es",ra=2e3,Lc=2001;class Ts{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,hd=180/Math.PI;function Ha(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function me(o,t,i){return Math.max(t,Math.min(i,o))}function kx(o,t){return(o%t+t)%t}function jf(o,t,i){return(1-i)*o+i*t}function Ui(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ze(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Xx={DEG2RAD:wc};class Jt{constructor(t=0,i=0){Jt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,s,l,u,h,d,p,m){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m)}set(t,i,s,l,u,h,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=s,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],g=s[4],v=s[7],x=s[2],M=s[5],C=s[8],w=l[0],y=l[3],_=l[6],P=l[1],O=l[4],D=l[7],I=l[2],z=l[5],B=l[8];return u[0]=h*w+d*P+p*I,u[3]=h*y+d*O+p*z,u[6]=h*_+d*D+p*B,u[1]=m*w+g*P+v*I,u[4]=m*y+g*O+v*z,u[7]=m*_+g*D+v*B,u[2]=x*w+M*P+C*I,u[5]=x*y+M*O+C*z,u[8]=x*_+M*D+C*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*h*g-i*d*m-s*u*g+s*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],v=g*h-d*m,x=d*p-g*u,M=m*u-h*p,C=i*v+s*x+l*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=v*w,t[1]=(l*m-g*s)*w,t[2]=(d*s-l*h)*w,t[3]=x*w,t[4]=(g*i-l*p)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(s*p-m*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Zf.makeScale(t,i)),this}rotate(t){return this.premultiply(Zf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Zf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new le;function M0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Nc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Wx(){const o=Nc("canvas");return o.style.display="block",o}const ug={};function ms(o){o in ug||(ug[o]=!0,console.warn(o))}function Yx(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function qx(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jx(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fg=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zx(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=Ar(l.r),l.g=Ar(l.g),l.b=Ar(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?Uc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:t,whitePoint:s,transfer:Uc,toXYZ:fg,fromXYZ:hg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:fg,fromXYZ:hg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),o}const Re=Zx();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ar(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ar;class Kx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ar===void 0&&(ar=Nc("canvas")),ar.width=t.width,ar.height=t.height;const s=ar.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ar}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Nc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qx=0;class Md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Ha(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Kf(l[h].image)):u.push(Kf(l[h]))}else u=Kf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Kx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jx=0;class zn extends Ts{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Ss,l=Ss,u=Li,h=xs,d=xi,p=la,m=zn.DEFAULT_ANISOTROPY,g=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Ha(),this.name="",this.source=new Md(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==c0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bh:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bh:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=c0;zn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,i=0,s=0,l=1){Ie.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],g=p[4],v=p[8],x=p[1],M=p[5],C=p[9],w=p[2],y=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-w)<.01&&Math.abs(C-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+w)<.1&&Math.abs(C+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,D=(M+1)/2,I=(_+1)/2,z=(g+x)/4,B=(v+w)/4,k=(C+y)/4;return O>D&&O>I?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=z/s,u=B/s):D>I?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=z/l,u=k/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=B/u,l=k/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-C)*(y-C)+(v-w)*(v-w)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(y-C)/P,this.y=(v-w)/P,this.z=(x-g)/P,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $x extends Ts{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ie(0,0,t,i),this.scissorTest=!1,this.viewport=new Ie(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new zn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Md(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends $x{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class E0 extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ty extends zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],m=s[l+1],g=s[l+2],v=s[l+3];const x=u[h+0],M=u[h+1],C=u[h+2],w=u[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=C,t[i+3]=w;return}if(v!==w||p!==x||m!==M||g!==C){let y=1-d;const _=p*x+m*M+g*C+v*w,P=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const I=Math.sqrt(O),z=Math.atan2(I,_*P);y=Math.sin(y*z)/I,d=Math.sin(d*z)/I}const D=d*P;if(p=p*y+x*D,m=m*y+M*D,g=g*y+C*D,v=v*y+w*D,y===1-d){const I=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=I,m*=I,g*=I,v*=I}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],v=u[h],x=u[h+1],M=u[h+2],C=u[h+3];return t[i]=d*C+g*v+p*M-m*x,t[i+1]=p*C+g*x+m*v-d*M,t[i+2]=m*C+g*M+d*x-p*v,t[i+3]=g*C-d*v-p*x-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),v=d(u/2),x=p(s/2),M=p(l/2),C=p(u/2);switch(h){case"XYZ":this._x=x*g*v+m*M*C,this._y=m*M*v-x*g*C,this._z=m*g*C+x*M*v,this._w=m*g*v-x*M*C;break;case"YXZ":this._x=x*g*v+m*M*C,this._y=m*M*v-x*g*C,this._z=m*g*C-x*M*v,this._w=m*g*v+x*M*C;break;case"ZXY":this._x=x*g*v-m*M*C,this._y=m*M*v+x*g*C,this._z=m*g*C+x*M*v,this._w=m*g*v-x*M*C;break;case"ZYX":this._x=x*g*v-m*M*C,this._y=m*M*v+x*g*C,this._z=m*g*C-x*M*v,this._w=m*g*v+x*M*C;break;case"YZX":this._x=x*g*v+m*M*C,this._y=m*M*v+x*g*C,this._z=m*g*C-x*M*v,this._w=m*g*v-x*M*C;break;case"XZY":this._x=x*g*v-m*M*C,this._y=m*M*v-x*g*C,this._z=m*g*C+x*M*v,this._w=m*g*v+x*M*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-s*m,this._z=u*g+h*m+s*p-l*d,this._w=h*g-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(dg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(dg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),g=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+p*m+h*v-d*g,this.y=s+p*g+d*m-u*v,this.z=l+p*v+u*g-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new q,dg=new Es;class Xo{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,gi):gi.fromBufferAttribute(u,h),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$l.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),$l.copy(s.boundingBox)),$l.applyMatrix4(t.matrixWorld),this.union($l)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),tc.subVectors(this.max,No),sr.subVectors(t.a,No),rr.subVectors(t.b,No),or.subVectors(t.c,No),Da.subVectors(rr,sr),Ua.subVectors(or,rr),cs.subVectors(sr,or);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-cs.z,cs.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,cs.z,0,-cs.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-cs.y,cs.x,0];return!Jf(i,sr,rr,or,tc)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,sr,rr,or,tc))?!1:(ec.crossVectors(Da,Ua),i=[ec.x,ec.y,ec.z],Jf(i,sr,rr,or,tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ji=[new q,new q,new q,new q,new q,new q,new q,new q],gi=new q,$l=new Xo,sr=new q,rr=new q,or=new q,Da=new q,Ua=new q,cs=new q,No=new q,tc=new q,ec=new q,us=new q;function Jf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){us.fromArray(o,u);const d=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),p=t.dot(us),m=i.dot(us),g=s.dot(us);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const ey=new Xo,Oo=new q,$f=new q;class Ed{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ey.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($f.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add($f)),this.expandByPoint(Oo.copy(t.center).sub($f))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new q,th=new q,nc=new q,La=new q,eh=new q,ic=new q,nh=new q;class T0{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){th.copy(t).add(i).multiplyScalar(.5),nc.copy(i).sub(t).normalize(),La.copy(this.origin).sub(th);const u=t.distanceTo(i)*.5,h=-this.direction.dot(nc),d=La.dot(this.direction),p=-La.dot(nc),m=La.lengthSq(),g=Math.abs(1-h*h);let v,x,M,C;if(g>0)if(v=h*p-d,x=h*d-p,C=u*g,v>=0)if(x>=-C)if(x<=C){const w=1/g;v*=w,x*=w,M=v*(v+h*x+2*d)+x*(h*v+x+2*p)+m}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;else x<=-C?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m):x<=C?(v=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),M=-v*v+x*(x+2*p)+m);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(th).addScaledVector(nc,x),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,p=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,p=(t.min.z-x.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,s,l,u){eh.subVectors(i,t),ic.subVectors(s,t),nh.crossVectors(eh,ic);let h=this.direction.dot(nh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,t);const p=d*this.direction.dot(ic.crossVectors(La,ic));if(p<0)return null;const m=d*this.direction.dot(eh.cross(La));if(m<0||p+m>h)return null;const g=-d*La.dot(nh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,i,s,l,u,h,d,p,m,g,v,x,M,C,w,y){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m,g,v,x,M,C,w,y)}set(t,i,s,l,u,h,d,p,m,g,v,x,M,C,w,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=C,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/lr.setFromMatrixColumn(t,0).length(),u=1/lr.setFromMatrixColumn(t,1).length(),h=1/lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*v,C=d*g,w=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=M+C*m,i[5]=x-w*m,i[9]=-d*p,i[2]=w-x*m,i[6]=C+M*m,i[10]=h*p}else if(t.order==="YXZ"){const x=p*g,M=p*v,C=m*g,w=m*v;i[0]=x+w*d,i[4]=C*d-M,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-C,i[6]=w+x*d,i[10]=h*p}else if(t.order==="ZXY"){const x=p*g,M=p*v,C=m*g,w=m*v;i[0]=x-w*d,i[4]=-h*v,i[8]=C+M*d,i[1]=M+C*d,i[5]=h*g,i[9]=w-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const x=h*g,M=h*v,C=d*g,w=d*v;i[0]=p*g,i[4]=C*m-M,i[8]=x*m+w,i[1]=p*v,i[5]=w*m+x,i[9]=M*m-C,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const x=h*p,M=h*m,C=d*p,w=d*m;i[0]=p*g,i[4]=w-x*v,i[8]=C*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*v+C,i[10]=x-w*v}else if(t.order==="XZY"){const x=h*p,M=h*m,C=d*p,w=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+w,i[5]=h*g,i[9]=M*v-C,i[2]=C*v-M,i[6]=d*g,i[10]=w*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ny,t,iy)}lookAt(t,i,s){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Na.crossVectors(s,Zn),Na.lengthSq()===0&&(Math.abs(s.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Na.crossVectors(s,Zn)),Na.normalize(),ac.crossVectors(Zn,Na),l[0]=Na.x,l[4]=ac.x,l[8]=Zn.x,l[1]=Na.y,l[5]=ac.y,l[9]=Zn.y,l[2]=Na.z,l[6]=ac.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],g=s[1],v=s[5],x=s[9],M=s[13],C=s[2],w=s[6],y=s[10],_=s[14],P=s[3],O=s[7],D=s[11],I=s[15],z=l[0],B=l[4],k=l[8],R=l[12],T=l[1],F=l[5],st=l[9],tt=l[13],ct=l[2],ut=l[6],V=l[10],rt=l[14],K=l[3],xt=l[7],L=l[11],at=l[15];return u[0]=h*z+d*T+p*ct+m*K,u[4]=h*B+d*F+p*ut+m*xt,u[8]=h*k+d*st+p*V+m*L,u[12]=h*R+d*tt+p*rt+m*at,u[1]=g*z+v*T+x*ct+M*K,u[5]=g*B+v*F+x*ut+M*xt,u[9]=g*k+v*st+x*V+M*L,u[13]=g*R+v*tt+x*rt+M*at,u[2]=C*z+w*T+y*ct+_*K,u[6]=C*B+w*F+y*ut+_*xt,u[10]=C*k+w*st+y*V+_*L,u[14]=C*R+w*tt+y*rt+_*at,u[3]=P*z+O*T+D*ct+I*K,u[7]=P*B+O*F+D*ut+I*xt,u[11]=P*k+O*st+D*V+I*L,u[15]=P*R+O*tt+D*rt+I*at,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],g=t[2],v=t[6],x=t[10],M=t[14],C=t[3],w=t[7],y=t[11],_=t[15];return C*(+u*p*v-l*m*v-u*d*x+s*m*x+l*d*M-s*p*M)+w*(+i*p*M-i*m*x+u*h*x-l*h*M+l*m*g-u*p*g)+y*(+i*m*v-i*d*M-u*h*v+s*h*M+u*d*g-s*m*g)+_*(-l*d*g-i*p*v+i*d*x+l*h*v-s*h*x+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],v=t[9],x=t[10],M=t[11],C=t[12],w=t[13],y=t[14],_=t[15],P=v*y*m-w*x*m+w*p*M-d*y*M-v*p*_+d*x*_,O=C*x*m-g*y*m-C*p*M+h*y*M+g*p*_-h*x*_,D=g*w*m-C*v*m+C*d*M-h*w*M-g*d*_+h*v*_,I=C*v*p-g*w*p-C*d*x+h*w*x+g*d*y-h*v*y,z=i*P+s*O+l*D+u*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=P*B,t[1]=(w*x*u-v*y*u-w*l*M+s*y*M+v*l*_-s*x*_)*B,t[2]=(d*y*u-w*p*u+w*l*m-s*y*m-d*l*_+s*p*_)*B,t[3]=(v*p*u-d*x*u-v*l*m+s*x*m+d*l*M-s*p*M)*B,t[4]=O*B,t[5]=(g*y*u-C*x*u+C*l*M-i*y*M-g*l*_+i*x*_)*B,t[6]=(C*p*u-h*y*u-C*l*m+i*y*m+h*l*_-i*p*_)*B,t[7]=(h*x*u-g*p*u+g*l*m-i*x*m-h*l*M+i*p*M)*B,t[8]=D*B,t[9]=(C*v*u-g*w*u-C*s*M+i*w*M+g*s*_-i*v*_)*B,t[10]=(h*w*u-C*d*u+C*s*m-i*w*m-h*s*_+i*d*_)*B,t[11]=(g*d*u-h*v*u-g*s*m+i*v*m+h*s*M-i*d*M)*B,t[12]=I*B,t[13]=(g*w*l-C*v*l+C*s*x-i*w*x-g*s*y+i*v*y)*B,t[14]=(C*d*l-h*w*l-C*s*p+i*w*p+h*s*y-i*d*y)*B,t[15]=(h*v*l-g*d*l+g*s*p-i*v*p-h*s*x+i*d*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,m=u*h,g=u*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,v=d+d,x=u*m,M=u*g,C=u*v,w=h*g,y=h*v,_=d*v,P=p*m,O=p*g,D=p*v,I=s.x,z=s.y,B=s.z;return l[0]=(1-(w+_))*I,l[1]=(M+D)*I,l[2]=(C-O)*I,l[3]=0,l[4]=(M-D)*z,l[5]=(1-(x+_))*z,l[6]=(y+P)*z,l[7]=0,l[8]=(C+O)*B,l[9]=(y-P)*B,l[10]=(1-(x+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=lr.set(l[0],l[1],l[2]).length();const h=lr.set(l[4],l[5],l[6]).length(),d=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const m=1/u,g=1/h,v=1/d;return vi.elements[0]*=m,vi.elements[1]*=m,vi.elements[2]*=m,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=v,vi.elements[9]*=v,vi.elements[10]*=v,i.setFromRotationMatrix(vi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ra){const p=this.elements,m=2*u/(i-t),g=2*u/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let M,C;if(d===ra)M=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Lc)M=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ra){const p=this.elements,m=1/(i-t),g=1/(s-l),v=1/(h-u),x=(i+t)*m,M=(s+l)*g;let C,w;if(d===ra)C=(h+u)*v,w=-2*v;else if(d===Lc)C=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const lr=new q,vi=new Xe,ny=new q(0,0,0),iy=new q(1,1,1),Na=new q,ac=new q,Zn=new q,pg=new Xe,mg=new Es;class Ni{constructor(t=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return pg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return mg.setFromEuler(this),this.setFromQuaternion(mg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ay=0;const _g=new q,cr=new Es,ta=new Xe,sc=new q,Po=new q,sy=new q,ry=new Es,gg=new q(1,0,0),vg=new q(0,1,0),Sg=new q(0,0,1),xg={type:"added"},oy={type:"removed"},ur={type:"childadded",child:null},ih={type:"childremoved",child:null};class Mn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new q,i=new Ni,s=new Es,l=new q(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new le}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(gg,t)}rotateY(t){return this.rotateOnAxis(vg,t)}rotateZ(t){return this.rotateOnAxis(Sg,t)}translateOnAxis(t,i){return _g.copy(t).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(gg,t)}translateY(t){return this.translateOnAxis(vg,t)}translateZ(t){return this.translateOnAxis(Sg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?sc.copy(t):sc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Po,sc,this.up):ta.lookAt(sc,Po,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(ta),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xg),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(oy),ih.child=t,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xg),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,sy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,ry,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),C=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),C.length>0&&(s.nodes=C)}return s.object=l,s;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new q,ea=new q,ah=new q,na=new q,fr=new q,hr=new q,yg=new q,sh=new q,rh=new q,oh=new q,lh=new Ie,ch=new Ie,uh=new Ie;class fi{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Si.subVectors(l,i),ea.subVectors(s,i),ah.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(ea),p=Si.dot(ah),m=ea.dot(ea),g=ea.dot(ah),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(m*p-d*g)*x,C=(h*g-d*p)*x;return u.set(1-M-C,C,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,na.x),p.addScaledVector(h,na.y),p.addScaledVector(d,na.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(t,i),ch.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(lh,u.x),h.addScaledVector(ch,u.y),h.addScaledVector(uh,u.z),h}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),ea.subVectors(t,i),Si.cross(ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),Si.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return fi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return fi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;fr.subVectors(l,s),hr.subVectors(u,s),sh.subVectors(t,s);const p=fr.dot(sh),m=hr.dot(sh);if(p<=0&&m<=0)return i.copy(s);rh.subVectors(t,l);const g=fr.dot(rh),v=hr.dot(rh);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(s).addScaledVector(fr,h);oh.subVectors(t,u);const M=fr.dot(oh),C=hr.dot(oh);if(C>=0&&M<=C)return i.copy(u);const w=M*m-p*C;if(w<=0&&m>=0&&C<=0)return d=m/(m-C),i.copy(s).addScaledVector(hr,d);const y=g*C-M*v;if(y<=0&&v-g>=0&&M-C>=0)return yg.subVectors(u,l),d=(v-g)/(v-g+(M-C)),i.copy(l).addScaledVector(yg,d);const _=1/(y+w+x);return h=w*_,d=x*_,i.copy(s).addScaledVector(fr,h).addScaledVector(hr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},rc={h:0,s:0,l:0};function fh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ce{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=kx(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=fh(h,u,t+1/3),this.g=fh(h,u,t),this.b=fh(h,u,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=ui){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const s=A0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Re.fromWorkingColorSpace(Rn.copy(this),t),Math.round(me(Rn.r*255,0,255))*65536+Math.round(me(Rn.g*255,0,255))*256+Math.round(me(Rn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case s:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-s)/v+2;break;case u:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=ui){Re.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,s=Rn.g,l=Rn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Oa),this.setHSL(Oa.h+t,Oa.s+i,Oa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Oa),t.getHSL(rc);const s=jf(Oa.h,rc.h,i),l=jf(Oa.s,rc.s,i),u=jf(Oa.l,rc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ce;Ce.NAMES=A0;let ly=0;class Or extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Tr,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(s.blending=this.blending),this.side!==Ga&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ah&&(s.blendSrc=this.blendSrc),this.blendDst!==Rh&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Td extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new q,oc=new Jt;let cy=0;class Ei{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=fd,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(t),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyMatrix3(t),this.setXYZ(i,en.x,en.y,en.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyMatrix4(t),this.setXYZ(i,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyNormalMatrix(t),this.setXYZ(i,en.x,en.y,en.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.transformDirection(t),this.setXYZ(i,en.x,en.y,en.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ui(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ze(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ui(i,this.array)),i}setX(t,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ui(i,this.array)),i}setY(t,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ui(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ui(i,this.array)),i}setW(t,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array),l=ze(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array),l=ze(l,this.array),u=ze(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fd&&(t.usage=this.usage),t}}class R0 extends Ei{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class C0 extends Ei{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Jn extends Ei{constructor(t,i,s){super(new Float32Array(t),i,s)}}let uy=0;const ci=new Xe,hh=new Mn,dr=new q,Kn=new Xo,zo=new Xo,_n=new q;class Oi extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M0(t)?C0:R0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,s){return ci.makeTranslation(t,i,s),this.applyMatrix4(ci),this}scale(t,i,s){return ci.makeScale(t,i,s),this.applyMatrix4(ci),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Jn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ed);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Kn.min,zo.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,zo.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(zo.min),Kn.expandByPoint(zo.max))}Kn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)_n.fromBufferAttribute(d,m),p&&(dr.fromBufferAttribute(t,m),_n.add(dr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<s.count;k++)d[k]=new q,p[k]=new q;const m=new q,g=new q,v=new q,x=new Jt,M=new Jt,C=new Jt,w=new q,y=new q;function _(k,R,T){m.fromBufferAttribute(s,k),g.fromBufferAttribute(s,R),v.fromBufferAttribute(s,T),x.fromBufferAttribute(u,k),M.fromBufferAttribute(u,R),C.fromBufferAttribute(u,T),g.sub(m),v.sub(m),M.sub(x),C.sub(x);const F=1/(M.x*C.y-C.x*M.y);isFinite(F)&&(w.copy(g).multiplyScalar(C.y).addScaledVector(v,-M.y).multiplyScalar(F),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-C.x).multiplyScalar(F),d[k].add(w),d[R].add(w),d[T].add(w),p[k].add(y),p[R].add(y),p[T].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let k=0,R=P.length;k<R;++k){const T=P[k],F=T.start,st=T.count;for(let tt=F,ct=F+st;tt<ct;tt+=3)_(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const O=new q,D=new q,I=new q,z=new q;function B(k){I.fromBufferAttribute(l,k),z.copy(I);const R=d[k];O.copy(R),O.sub(I.multiplyScalar(I.dot(R))).normalize(),D.crossVectors(z,R);const F=D.dot(p[k])<0?-1:1;h.setXYZW(k,O.x,O.y,O.z,F)}for(let k=0,R=P.length;k<R;++k){const T=P[k],F=T.start,st=T.count;for(let tt=F,ct=F+st;tt<ct;tt+=3)B(t.getX(tt+0)),B(t.getX(tt+1)),B(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new q,u=new q,h=new q,d=new q,p=new q,m=new q,g=new q,v=new q;if(t)for(let x=0,M=t.count;x<M;x+=3){const C=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,y),d.add(g),p.add(g),m.add(g),s.setXYZ(C,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let M=0,C=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*g;for(let _=0;_<g;_++)x[C++]=m[M++]}return new Ei(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],M=t(x,s);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const M=m[v];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],v=u[m];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mg=new Xe,fs=new T0,lc=new Ed,Eg=new q,cc=new q,uc=new q,fc=new q,dh=new q,hc=new q,Tg=new q,dc=new q;class yi extends Mn{constructor(t=new Oi,i=new Td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){hc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(dh.fromBufferAttribute(v,t),h?hc.addScaledVector(dh,g):hc.addScaledVector(dh.sub(i),g))}i.add(hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(u),fs.copy(t.ray).recast(t.near),!(lc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(lc,Eg)===null||fs.origin.distanceToSquared(Eg)>(t.far-t.near)**2))&&(Mg.copy(u).invert(),fs.copy(t.ray).applyMatrix4(Mg),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,fs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let C=0,w=x.length;C<w;C++){const y=x[C],_=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,I=O;D<I;D+=3){const z=d.getX(D),B=d.getX(D+1),k=d.getX(D+2);l=pc(this,_,t,s,m,g,v,z,B,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const C=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=C,_=w;y<_;y+=3){const P=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=pc(this,h,t,s,m,g,v,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let C=0,w=x.length;C<w;C++){const y=x[C],_=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,I=O;D<I;D+=3){const z=D,B=D+1,k=D+2;l=pc(this,_,t,s,m,g,v,z,B,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const C=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=C,_=w;y<_;y+=3){const P=y,O=y+1,D=y+2;l=pc(this,h,t,s,m,g,v,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function fy(o,t,i,s,l,u,h,d){let p;if(t.side===Vn?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===Ga,d),p===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(dc);return m<i.near||m>i.far?null:{distance:m,point:dc.clone(),object:o}}function pc(o,t,i,s,l,u,h,d,p,m){o.getVertexPosition(d,cc),o.getVertexPosition(p,uc),o.getVertexPosition(m,fc);const g=fy(o,t,i,s,cc,uc,fc,Tg);if(g){const v=new q;fi.getBarycoord(Tg,cc,uc,fc,v),l&&(g.uv=fi.getInterpolatedAttribute(l,d,p,m,v,new Jt)),u&&(g.uv1=fi.getInterpolatedAttribute(u,d,p,m,v,new Jt)),h&&(g.normal=fi.getInterpolatedAttribute(h,d,p,m,v,new q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new q,materialIndex:0};fi.getNormal(cc,uc,fc,x.normal),g.face=x,g.barycoord=v}return g}class Wo extends Oi{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],v=[];let x=0,M=0;C("z","y","x",-1,-1,s,i,t,h,u,0),C("z","y","x",1,-1,s,i,-t,h,u,1),C("x","z","y",1,1,t,s,i,l,h,2),C("x","z","y",1,-1,t,s,-i,l,h,3),C("x","y","z",1,-1,t,i,s,l,u,4),C("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Jn(m,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(v,2));function C(w,y,_,P,O,D,I,z,B,k,R){const T=D/B,F=I/k,st=D/2,tt=I/2,ct=z/2,ut=B+1,V=k+1;let rt=0,K=0;const xt=new q;for(let L=0;L<V;L++){const at=L*F-tt;for(let Et=0;Et<ut;Et++){const At=Et*T-st;xt[w]=At*P,xt[y]=at*O,xt[_]=ct,m.push(xt.x,xt.y,xt.z),xt[w]=0,xt[y]=0,xt[_]=z>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(Et/B),v.push(1-L/k),rt+=1}}for(let L=0;L<k;L++)for(let at=0;at<B;at++){const Et=x+at+ut*L,At=x+at+ut*(L+1),j=x+(at+1)+ut*(L+1),pt=x+(at+1)+ut*L;p.push(Et,At,pt),p.push(At,j,pt),K+=6}d.addGroup(M,K,R),M+=K,x+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)t[l]=s[l]}return t}function hy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function w0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const dy={clone:Nr,merge:Pn};var py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,my=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=py,this.fragmentShader=my,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=hy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class D0 extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ra}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new q,bg=new Jt,Ag=new Jt;class Qn extends D0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=hd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z)}getViewSize(t,i){return this.getViewBounds(t,bg,Ag),i.subVectors(Ag,bg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(wc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class _y extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Qn(pr,mr,t,i);l.layers=this.layers,this.add(l);const u=new Qn(pr,mr,t,i);u.layers=this.layers,this.add(u);const h=new Qn(pr,mr,t,i);h.layers=this.layers,this.add(h);const d=new Qn(pr,mr,t,i);d.layers=this.layers,this.add(d);const p=new Qn(pr,mr,t,i);p.layers=this.layers,this.add(p);const m=new Qn(pr,mr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),C=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=C,s.texture.needsPMREMUpdate=!0}}class U0 extends zn{constructor(t,i,s,l,u,h,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:Cr,super(t,i,s,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gy extends Ms{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new U0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wo(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Ia});u.uniforms.tEquirect.value=i;const h=new yi(l,u),d=i.minFilter;return i.minFilter===xs&&(i.minFilter=Li),new _y(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class mc extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vy={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),_=this._getHandJoint(m,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,C=.005;m.inputState.pinching&&x>M+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=M-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new mc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Sy extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class xy{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=fd,this.updateRanges=[],this.version=0,this.uuid=Ha()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ha()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ha()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new q;class Oc{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)On.fromBufferAttribute(this,i),On.applyMatrix4(t),this.setXYZ(i,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)On.fromBufferAttribute(this,i),On.applyNormalMatrix(t),this.setXYZ(i,On.x,On.y,On.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)On.fromBufferAttribute(this,i),On.transformDirection(t),this.setXYZ(i,On.x,On.y,On.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ui(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ze(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ui(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ui(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ui(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ui(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array),l=ze(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=ze(i,this.array),s=ze(s,this.array),l=ze(l,this.array),u=ze(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Ei(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class L0 extends Or{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _r;const Bo=new q,gr=new q,vr=new q,Sr=new Jt,Io=new Jt,N0=new Xe,_c=new q,Fo=new q,gc=new q,Rg=new Jt,mh=new Jt,Cg=new Jt;class yy extends Mn{constructor(t=new L0){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new Oi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new xy(i,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new Oc(s,3,0,!1)),_r.setAttribute("uv",new Oc(s,2,3,!1))}this.geometry=_r,this.material=t,this.center=new Jt(.5,.5)}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),N0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-vr.z);const s=this.material.rotation;let l,u;s!==0&&(u=Math.cos(s),l=Math.sin(s));const h=this.center;vc(_c.set(-.5,-.5,0),vr,h,gr,l,u),vc(Fo.set(.5,-.5,0),vr,h,gr,l,u),vc(gc.set(.5,.5,0),vr,h,gr,l,u),Rg.set(0,0),mh.set(1,0),Cg.set(1,1);let d=t.ray.intersectTriangle(_c,Fo,gc,!1,Bo);if(d===null&&(vc(Fo.set(-.5,.5,0),vr,h,gr,l,u),mh.set(0,1),d=t.ray.intersectTriangle(_c,gc,Fo,!1,Bo),d===null))return;const p=t.ray.origin.distanceTo(Bo);p<t.near||p>t.far||i.push({distance:p,point:Bo.clone(),uv:fi.getInterpolation(Bo,_c,Fo,gc,Rg,mh,Cg,new Jt),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vc(o,t,i,s,l,u){Sr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Io.x=u*Sr.x-l*Sr.y,Io.y=l*Sr.x+u*Sr.y):Io.copy(Sr),o.copy(t),o.x+=Io.x,o.y+=Io.y,o.applyMatrix4(N0)}const _h=new q,My=new q,Ey=new le;class za{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=_h.subVectors(s,i).cross(My.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(_h),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Ey.getNormalMatrix(t),l=this.coplanarPoint(_h).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Ed,Sc=new q;class bd{constructor(t=new za,i=new za,s=new za,l=new za,u=new za,h=new za){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ra){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],x=l[7],M=l[8],C=l[9],w=l[10],y=l[11],_=l[12],P=l[13],O=l[14],D=l[15];if(s[0].setComponents(p-u,x-m,y-M,D-_).normalize(),s[1].setComponents(p+u,x+m,y+M,D+_).normalize(),s[2].setComponents(p+h,x+g,y+C,D+P).normalize(),s[3].setComponents(p-h,x-g,y-C,D-P).normalize(),s[4].setComponents(p-d,x-v,y-w,D-O).normalize(),i===ra)s[5].setComponents(p+d,x+v,y+w,D+O).normalize();else if(i===Lc)s[5].setComponents(d,v,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Sc.x=l.normal.x>0?t.max.x:t.min.x,Sc.y=l.normal.y>0?t.max.y:t.min.y,Sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ty extends zn{constructor(t,i,s,l,u,h,d,p,m){super(t,i,s,l,u,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class O0 extends zn{constructor(t,i,s,l,u,h,d,p,m,g=br){if(g!==br&&g!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===br&&(s=ys),s===void 0&&g===Ur&&(s=Dr),super(null,l,u,h,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Mi,this.minFilter=p!==void 0?p:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ad extends Oi{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const g=[],v=[],x=[],M=[];let C=0;const w=[],y=s/2;let _=0;P(),h===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(g),this.setAttribute("position",new Jn(v,3)),this.setAttribute("normal",new Jn(x,3)),this.setAttribute("uv",new Jn(M,2));function P(){const D=new q,I=new q;let z=0;const B=(i-t)/s;for(let k=0;k<=u;k++){const R=[],T=k/u,F=T*(i-t)+t;for(let st=0;st<=l;st++){const tt=st/l,ct=tt*p+d,ut=Math.sin(ct),V=Math.cos(ct);I.x=F*ut,I.y=-T*s+y,I.z=F*V,v.push(I.x,I.y,I.z),D.set(ut,B,V).normalize(),x.push(D.x,D.y,D.z),M.push(tt,1-T),R.push(C++)}w.push(R)}for(let k=0;k<l;k++)for(let R=0;R<u;R++){const T=w[R][k],F=w[R+1][k],st=w[R+1][k+1],tt=w[R][k+1];(t>0||R!==0)&&(g.push(T,F,tt),z+=3),(i>0||R!==u-1)&&(g.push(F,st,tt),z+=3)}m.addGroup(_,z,0),_+=z}function O(D){const I=C,z=new Jt,B=new q;let k=0;const R=D===!0?t:i,T=D===!0?1:-1;for(let st=1;st<=l;st++)v.push(0,y*T,0),x.push(0,T,0),M.push(.5,.5),C++;const F=C;for(let st=0;st<=l;st++){const ct=st/l*p+d,ut=Math.cos(ct),V=Math.sin(ct);B.x=R*V,B.y=y*T,B.z=R*ut,v.push(B.x,B.y,B.z),x.push(0,T,0),z.x=ut*.5+.5,z.y=V*.5*T+.5,M.push(z.x,z.y),C++}for(let st=0;st<l;st++){const tt=I+st,ct=F+st;D===!0?g.push(ct,ct+1,tt):g.push(ct+1,ct,tt),k+=3}m.addGroup(_,k,D===!0?1:2),_+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ad(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zc extends Oi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,v=t/d,x=i/p,M=[],C=[],w=[],y=[];for(let _=0;_<g;_++){const P=_*x-h;for(let O=0;O<m;O++){const D=O*v-u;C.push(D,-P,0),w.push(0,0,1),y.push(O/d),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<d;P++){const O=P+m*_,D=P+m*(_+1),I=P+1+m*(_+1),z=P+1+m*_;M.push(O,D,z),M.push(D,I,z)}this.setIndex(M),this.setAttribute("position",new Jn(C,3)),this.setAttribute("normal",new Jn(w,3)),this.setAttribute("uv",new Jn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rd extends Oi{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const g=[],v=new q,x=new q,M=[],C=[],w=[],y=[];for(let _=0;_<=s;_++){const P=[],O=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&p===Math.PI&&(D=-.5/i);for(let I=0;I<=i;I++){const z=I/i;v.x=-t*Math.cos(l+z*u)*Math.sin(h+O*d),v.y=t*Math.cos(h+O*d),v.z=t*Math.sin(l+z*u)*Math.sin(h+O*d),C.push(v.x,v.y,v.z),x.copy(v).normalize(),w.push(x.x,x.y,x.z),y.push(z+D,1-O),P.push(m++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<i;P++){const O=g[_][P+1],D=g[_][P],I=g[_+1][P],z=g[_+1][P+1];(_!==0||h>0)&&M.push(O,D,z),(_!==s-1||p<Math.PI)&&M.push(D,I,z)}this.setIndex(M),this.setAttribute("position",new Jn(C,3)),this.setAttribute("normal",new Jn(w,3)),this.setAttribute("uv",new Jn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class by extends Or{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x0,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ay extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ry extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cd extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const gh=new Xe,wg=new q,Dg=new q;class P0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;wg.setFromMatrixPosition(t.matrixWorld),i.position.copy(wg),Dg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Dg),i.updateMatrixWorld(),gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ug=new Xe,Ho=new q,vh=new q;class Cy extends P0{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Jt(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,u=t.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Ho.setFromMatrixPosition(t.matrixWorld),s.position.copy(Ho),vh.copy(s.position),vh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(vh),s.updateMatrixWorld(),l.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Ug.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ug)}}class wy extends Cd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Cy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class z0 extends D0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Dy extends P0{constructor(){super(new z0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uy extends Cd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Dy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ly extends Cd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ny extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Lg{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Oy extends Ts{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ng(o,t,i,s){const l=Py(s);switch(i){case d0:return o*t;case m0:return o*t;case _0:return o*t*2;case g0:return o*t/l.components*l.byteLength;case Sd:return o*t/l.components*l.byteLength;case v0:return o*t*2/l.components*l.byteLength;case xd:return o*t*2/l.components*l.byteLength;case p0:return o*t*3/l.components*l.byteLength;case xi:return o*t*4/l.components*l.byteLength;case yd:return o*t*4/l.components*l.byteLength;case Tc:case bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Vh:return Math.max(o,16)*Math.max(t,8)/4;case Fh:case Gh:return Math.max(o,8)*Math.max(t,8)/2;case kh:case Xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case jh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case $h:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case td:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ed:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case nd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case id:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ad:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case sd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Cc:case rd:case od:return Math.ceil(o/4)*Math.ceil(t/4)*16;case S0:case ld:return Math.ceil(o/4)*Math.ceil(t/4)*8;case cd:case ud:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Py(o){switch(o){case la:case u0:return{byteLength:1,components:1};case Vo:case f0:case ko:return{byteLength:2,components:1};case gd:case vd:return{byteLength:2,components:4};case ys:case _d:case sa:return{byteLength:4,components:1};case h0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function B0(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function zy(o){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const g=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,g);else{v.sort((M,C)=>M.start-C.start);let x=0;for(let M=1;M<v.length;M++){const C=v[x],w=v[M];w.start<=C.start+C.count+1?C.count=Math.max(C.count,w.start+w.count-C.start):(++x,v[x]=w)}v.length=x+1;for(let M=0,C=v.length;M<C;M++){const w=v[M];o.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ky=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ME=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:By,alphahash_pars_fragment:Iy,alphamap_fragment:Fy,alphamap_pars_fragment:Hy,alphatest_fragment:Gy,alphatest_pars_fragment:Vy,aomap_fragment:ky,aomap_pars_fragment:Xy,batching_pars_vertex:Wy,batching_vertex:Yy,begin_vertex:qy,beginnormal_vertex:jy,bsdfs:Zy,iridescence_fragment:Ky,bumpmap_pars_fragment:Qy,clipping_planes_fragment:Jy,clipping_planes_pars_fragment:$y,clipping_planes_pars_vertex:tM,clipping_planes_vertex:eM,color_fragment:nM,color_pars_fragment:iM,color_pars_vertex:aM,color_vertex:sM,common:rM,cube_uv_reflection_fragment:oM,defaultnormal_vertex:lM,displacementmap_pars_vertex:cM,displacementmap_vertex:uM,emissivemap_fragment:fM,emissivemap_pars_fragment:hM,colorspace_fragment:dM,colorspace_pars_fragment:pM,envmap_fragment:mM,envmap_common_pars_fragment:_M,envmap_pars_fragment:gM,envmap_pars_vertex:vM,envmap_physical_pars_fragment:wM,envmap_vertex:SM,fog_vertex:xM,fog_pars_vertex:yM,fog_fragment:MM,fog_pars_fragment:EM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:bM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:RM,lights_pars_begin:CM,lights_toon_fragment:DM,lights_toon_pars_fragment:UM,lights_phong_fragment:LM,lights_phong_pars_fragment:NM,lights_physical_fragment:OM,lights_physical_pars_fragment:PM,lights_fragment_begin:zM,lights_fragment_maps:BM,lights_fragment_end:IM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:VM,map_fragment:kM,map_pars_fragment:XM,map_particle_fragment:WM,map_particle_pars_fragment:YM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:jM,morphinstance_vertex:ZM,morphcolor_vertex:KM,morphnormal_vertex:QM,morphtarget_pars_vertex:JM,morphtarget_vertex:$M,normal_fragment_begin:tE,normal_fragment_maps:eE,normal_pars_fragment:nE,normal_pars_vertex:iE,normal_vertex:aE,normalmap_pars_fragment:sE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:oE,clearcoat_pars_fragment:lE,iridescence_pars_fragment:cE,opaque_fragment:uE,packing:fE,premultiplied_alpha_fragment:hE,project_vertex:dE,dithering_fragment:pE,dithering_pars_fragment:mE,roughnessmap_fragment:_E,roughnessmap_pars_fragment:gE,shadowmap_pars_fragment:vE,shadowmap_pars_vertex:SE,shadowmap_vertex:xE,shadowmask_pars_fragment:yE,skinbase_vertex:ME,skinning_pars_vertex:EE,skinning_vertex:TE,skinnormal_vertex:bE,specularmap_fragment:AE,specularmap_pars_fragment:RE,tonemapping_fragment:CE,tonemapping_pars_fragment:wE,transmission_fragment:DE,transmission_pars_fragment:UE,uv_pars_fragment:LE,uv_pars_vertex:NE,uv_vertex:OE,worldpos_vertex:PE,background_vert:zE,background_frag:BE,backgroundCube_vert:IE,backgroundCube_frag:FE,cube_vert:HE,cube_frag:GE,depth_vert:VE,depth_frag:kE,distanceRGBA_vert:XE,distanceRGBA_frag:WE,equirect_vert:YE,equirect_frag:qE,linedashed_vert:jE,linedashed_frag:ZE,meshbasic_vert:KE,meshbasic_frag:QE,meshlambert_vert:JE,meshlambert_frag:$E,meshmatcap_vert:tT,meshmatcap_frag:eT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:aT,meshphong_frag:sT,meshphysical_vert:rT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:hT,shadow_frag:dT,sprite_vert:pT,sprite_frag:mT},Ut={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Di={basic:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Pn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Pn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Pn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Pn([Ut.points,Ut.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Pn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Pn([Ut.common,Ut.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Pn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Pn([Ut.sprite,Ut.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Pn([Ut.common,Ut.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Pn([Ut.lights,Ut.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Di.physical={uniforms:Pn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const xc={r:0,b:0,g:0},ds=new Ni,_T=new Xe;function gT(o,t,i,s,l,u,h){const d=new Ce(0);let p=u===!0?0:1,m,g,v=null,x=0,M=null;function C(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const I=C(O);I===null?_(d,p):I&&I.isColor&&(_(I,1),D=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,D){const I=C(D);I&&(I.isCubeTexture||I.mapping===Pc)?(g===void 0&&(g=new yi(new Wo(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Nr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ds.copy(D.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(_T.makeRotationFromEuler(ds)),g.material.toneMapped=Re.getTransfer(I.colorSpace)!==Pe,(v!==I||x!==I.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=I,x=I.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new yi(new zc(2,2),new Va({name:"BackgroundMaterial",uniforms:Nr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Re.getTransfer(I.colorSpace)!==Pe,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||x!==I.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,v=I,x=I.version,M=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function _(O,D){O.getRGB(xc,w0(o)),s.buffers.color.setClear(xc.r,xc.g,xc.b,D,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),p=D,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,_(d,p)},render:w,addToRenderList:y,dispose:P}}function vT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(T,F,st,tt,ct){let ut=!1;const V=v(tt,st,F);u!==V&&(u=V,m(u.object)),ut=M(T,tt,st,ct),ut&&C(T,tt,st,ct),ct!==null&&t.update(ct,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,D(T,F,st,tt),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function p(){return o.createVertexArray()}function m(T){return o.bindVertexArray(T)}function g(T){return o.deleteVertexArray(T)}function v(T,F,st){const tt=st.wireframe===!0;let ct=s[T.id];ct===void 0&&(ct={},s[T.id]=ct);let ut=ct[F.id];ut===void 0&&(ut={},ct[F.id]=ut);let V=ut[tt];return V===void 0&&(V=x(p()),ut[tt]=V),V}function x(T){const F=[],st=[],tt=[];for(let ct=0;ct<i;ct++)F[ct]=0,st[ct]=0,tt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:st,attributeDivisors:tt,object:T,attributes:{},index:null}}function M(T,F,st,tt){const ct=u.attributes,ut=F.attributes;let V=0;const rt=st.getAttributes();for(const K in rt)if(rt[K].location>=0){const L=ct[K];let at=ut[K];if(at===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(at=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(at=T.instanceColor)),L===void 0||L.attribute!==at||at&&L.data!==at.data)return!0;V++}return u.attributesNum!==V||u.index!==tt}function C(T,F,st,tt){const ct={},ut=F.attributes;let V=0;const rt=st.getAttributes();for(const K in rt)if(rt[K].location>=0){let L=ut[K];L===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(L=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(L=T.instanceColor));const at={};at.attribute=L,L&&L.data&&(at.data=L.data),ct[K]=at,V++}u.attributes=ct,u.attributesNum=V,u.index=tt}function w(){const T=u.newAttributes;for(let F=0,st=T.length;F<st;F++)T[F]=0}function y(T){_(T,0)}function _(T,F){const st=u.newAttributes,tt=u.enabledAttributes,ct=u.attributeDivisors;st[T]=1,tt[T]===0&&(o.enableVertexAttribArray(T),tt[T]=1),ct[T]!==F&&(o.vertexAttribDivisor(T,F),ct[T]=F)}function P(){const T=u.newAttributes,F=u.enabledAttributes;for(let st=0,tt=F.length;st<tt;st++)F[st]!==T[st]&&(o.disableVertexAttribArray(st),F[st]=0)}function O(T,F,st,tt,ct,ut,V){V===!0?o.vertexAttribIPointer(T,F,st,ct,ut):o.vertexAttribPointer(T,F,st,tt,ct,ut)}function D(T,F,st,tt){w();const ct=tt.attributes,ut=st.getAttributes(),V=F.defaultAttributeValues;for(const rt in ut){const K=ut[rt];if(K.location>=0){let xt=ct[rt];if(xt===void 0&&(rt==="instanceMatrix"&&T.instanceMatrix&&(xt=T.instanceMatrix),rt==="instanceColor"&&T.instanceColor&&(xt=T.instanceColor)),xt!==void 0){const L=xt.normalized,at=xt.itemSize,Et=t.get(xt);if(Et===void 0)continue;const At=Et.buffer,j=Et.type,pt=Et.bytesPerElement,St=j===o.INT||j===o.UNSIGNED_INT||xt.gpuType===_d;if(xt.isInterleavedBufferAttribute){const Tt=xt.data,Rt=Tt.stride,Kt=xt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<K.locationSize;Pt++)_(K.location+Pt,Tt.meshPerAttribute);T.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<K.locationSize;Pt++)y(K.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Pt=0;Pt<K.locationSize;Pt++)O(K.location+Pt,at/K.locationSize,j,L,Rt*pt,(Kt+at/K.locationSize*Pt)*pt,St)}else{if(xt.isInstancedBufferAttribute){for(let Tt=0;Tt<K.locationSize;Tt++)_(K.location+Tt,xt.meshPerAttribute);T.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Tt=0;Tt<K.locationSize;Tt++)y(K.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<K.locationSize;Tt++)O(K.location+Tt,at/K.locationSize,j,L,at*pt,at/K.locationSize*Tt*pt,St)}}else if(V!==void 0){const L=V[rt];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(K.location,L);break;case 3:o.vertexAttrib3fv(K.location,L);break;case 4:o.vertexAttrib4fv(K.location,L);break;default:o.vertexAttrib1fv(K.location,L)}}}}P()}function I(){k();for(const T in s){const F=s[T];for(const st in F){const tt=F[st];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete F[st]}delete s[T]}}function z(T){if(s[T.id]===void 0)return;const F=s[T.id];for(const st in F){const tt=F[st];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete F[st]}delete s[T.id]}function B(T){for(const F in s){const st=s[F];if(st[T.id]===void 0)continue;const tt=st[T.id];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete st[T.id]}}function k(){R(),h=!0,u!==l&&(u=l,m(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function ST(o,t,i){let s;function l(m){s=m}function u(m,g){o.drawArrays(s,m,g),i.update(g,s,1)}function h(m,g,v){v!==0&&(o.drawArraysInstanced(s,m,g,v),i.update(g,s,v))}function d(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let M=0;for(let C=0;C<v;C++)M+=g[C];i.update(M,s,1)}function p(m,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let C=0;C<m.length;C++)h(m[C],g[C],x[C]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,v);let C=0;for(let w=0;w<v;w++)C+=g[w]*x[w];i.update(C,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function xT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==xi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const k=B===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==la&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sa&&!k)}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=C>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:C,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:I,maxSamples:z}}function yT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new za,d=new le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const C=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||C===null||C.length===0||u&&!y)u?g(null):m();else{const P=u?0:s,O=P*4;let D=_.clippingState||null;p.value=D,D=g(C,x,O,M);for(let I=0;I!==O;++I)D[I]=i[I];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,M,C){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=p.value,C!==!0||y===null){const _=M+w*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,D=M;O!==w;++O,D+=4)h.copy(v[O]).applyMatrix4(P,d),h.normal.toArray(y,D),y[D+3]=h.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function MT(o){let t=new WeakMap;function i(h,d){return d===Ph?h.mapping=Cr:d===zh&&(h.mapping=wr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ph||d===zh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new gy(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Mr=4,Og=[.125,.215,.35,.446,.526,.582],vs=20,Sh=new z0,Pg=new Ce;let xh=null,yh=0,Mh=0,Eh=!1;const _s=(1+Math.sqrt(5))/2,xr=1/_s,zg=[new q(-_s,xr,0),new q(_s,xr,0),new q(-xr,0,_s),new q(xr,0,_s),new q(0,_s,-xr),new q(0,_s,xr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],ET=new q;class Bg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=ET}=u;xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xh,yh,Mh),this._renderer.xr.enabled=Eh,t.scissorTest=!1,yc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:ko,format:xi,colorSpace:Lr,depthBuffer:!1},l=Ig(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ig(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TT(u)),this._blurMaterial=bT(u,t,i)}return l}_compileMaterial(t){const i=new yi(this._lodPlanes[0],t);this._renderer.compile(i,Sh)}_sceneToCubeUV(t,i,s,l,u){const p=new Qn(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(Pg),v.toneMapping=Fa,v.autoClear=!1;const C=new Td({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),w=new yi(new Wo,C);let y=!1;const _=t.background;_?_.isColor&&(C.color.copy(_),t.background=null,y=!0):(C.color.copy(Pg),y=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[P],u.y,u.z)):O===1?(p.up.set(0,0,m[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[P],u.z)):(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[P]));const D=this._cubeSize;yc(l,O*D,P>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(w,p),v.render(t,p)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Cr||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new yi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;yc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Sh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=zg[(l-u-1)%zg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new yi(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[s]-1,C=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vs-1),w=u/C,y=isFinite(u)?1+Math.floor(g*w):vs;y>vs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vs}`);const _=[];let P=0;for(let B=0;B<vs;++B){const k=B/w,R=Math.exp(-k*k/2);_.push(R),B===0?P+=R:B<y&&(P+=2*R)}for(let B=0;B<_.length;B++)_[B]=_[B]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=C,x.mipInt.value=O-s;const D=this._sizeLods[l],I=3*D*(l>O-Mr?l-O+Mr:0),z=4*(this._cubeSize-D);yc(i,I,z,3*D,2*D),p.setRenderTarget(i),p.render(v,Sh)}}function TT(o){const t=[],i=[],s=[];let l=o;const u=o-Mr+1+Og.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-Mr?p=Og[h-o+Mr-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,C=6,w=3,y=2,_=1,P=new Float32Array(w*C*M),O=new Float32Array(y*C*M),D=new Float32Array(_*C*M);for(let z=0;z<M;z++){const B=z%3*2/3-1,k=z>2?0:-1,R=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];P.set(R,w*C*z),O.set(x,y*C*z);const T=[z,z,z,z,z,z];D.set(T,_*C*z)}const I=new Oi;I.setAttribute("position",new Ei(P,w)),I.setAttribute("uv",new Ei(O,y)),I.setAttribute("faceIndex",new Ei(D,_)),t.push(I),l>Mr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Ig(o,t,i){const s=new Ms(o,t,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function bT(o,t,i){const s=new Float32Array(vs),l=new q(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Fg(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Hg(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ph||p===zh,g=p===Cr||p===wr;if(m||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Bg(o)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Bg(o)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function RT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ms("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function CT(o,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const C in x.attributes)t.remove(x.attributes[C]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function m(v){const x=[],M=v.index,C=v.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let O=0,D=P.length;O<D;O+=3){const I=P[O+0],z=P[O+1],B=P[O+2];x.push(I,z,z,B,B,I)}}else if(C!==void 0){const P=C.array;w=C.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const I=O+0,z=O+1,B=O+2;x.push(I,z,z,B,B,I)}}else return;const y=new(M0(x)?C0:R0)(x,1);y.version=w;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function wT(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function p(x,M){o.drawElements(s,M,u,x*h),i.update(M,s,1)}function m(x,M,C){C!==0&&(o.drawElementsInstanced(s,M,u,x*h,C),i.update(M,s,C))}function g(x,M,C){if(C===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,C);let y=0;for(let _=0;_<C;_++)y+=M[_];i.update(y,s,1)}function v(x,M,C,w){if(C===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/h,M[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,w,0,C);let _=0;for(let P=0;P<C;P++)_+=M[P]*w[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function DT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function UT(o,t,i){const s=new WeakMap,l=new Ie;function u(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let T=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",T)};var M=T;x!==void 0&&x.texture.dispose();const C=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;C===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let I=d.attributes.position.count*D,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*z*4*v),k=new E0(B,I,z,v);k.type=sa,k.needsUpdate=!0;const R=D*4;for(let F=0;F<v;F++){const st=_[F],tt=P[F],ct=O[F],ut=I*z*4*F;for(let V=0;V<st.count;V++){const rt=V*R;C===!0&&(l.fromBufferAttribute(st,V),B[ut+rt+0]=l.x,B[ut+rt+1]=l.y,B[ut+rt+2]=l.z,B[ut+rt+3]=0),w===!0&&(l.fromBufferAttribute(tt,V),B[ut+rt+4]=l.x,B[ut+rt+5]=l.y,B[ut+rt+6]=l.z,B[ut+rt+7]=0),y===!0&&(l.fromBufferAttribute(ct,V),B[ut+rt+8]=l.x,B[ut+rt+9]=l.y,B[ut+rt+10]=l.z,B[ut+rt+11]=ct.itemSize===4?l.w:1)}}x={count:v,texture:k,size:new Jt(I,z)},s.set(d,x),d.addEventListener("dispose",T)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let C=0;for(let y=0;y<m.length;y++)C+=m[y];const w=d.morphTargetsRelative?1:1-C;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function LT(o,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,g=p.geometry,v=t.get(p,g);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const I0=new zn,Gg=new O0(1,1),F0=new E0,H0=new ty,G0=new U0,Vg=[],kg=[],Xg=new Float32Array(16),Wg=new Float32Array(9),Yg=new Float32Array(4);function Pr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Vg[l];if(u===void 0&&(u=new Float32Array(l),Vg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function un(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function fn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Bc(o,t){let i=kg[t];i===void 0&&(i=new Int32Array(t),kg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function NT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2fv(this.addr,t),fn(i,t)}}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;o.uniform3fv(this.addr,t),fn(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4fv(this.addr,t),fn(i,t)}}function BT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Yg.set(s),o.uniformMatrix2fv(this.addr,!1,Yg),fn(i,s)}}function IT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Wg.set(s),o.uniformMatrix3fv(this.addr,!1,Wg),fn(i,s)}}function FT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Xg.set(s),o.uniformMatrix4fv(this.addr,!1,Xg),fn(i,s)}}function HT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2iv(this.addr,t),fn(i,t)}}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;o.uniform3iv(this.addr,t),fn(i,t)}}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4iv(this.addr,t),fn(i,t)}}function XT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function WT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2uiv(this.addr,t),fn(i,t)}}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;o.uniform3uiv(this.addr,t),fn(i,t)}}function qT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4uiv(this.addr,t),fn(i,t)}}function jT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Gg.compareFunction=y0,u=Gg):u=I0,i.setTexture2D(t||u,l)}function ZT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||H0,l)}function KT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||G0,l)}function QT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||F0,l)}function JT(o){switch(o){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return BT;case 35675:return IT;case 35676:return FT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return kT;case 5125:return XT;case 36294:return WT;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}function $T(o,t){o.uniform1fv(this.addr,t)}function tb(o,t){const i=Pr(t,this.size,2);o.uniform2fv(this.addr,i)}function eb(o,t){const i=Pr(t,this.size,3);o.uniform3fv(this.addr,i)}function nb(o,t){const i=Pr(t,this.size,4);o.uniform4fv(this.addr,i)}function ib(o,t){const i=Pr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ab(o,t){const i=Pr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function sb(o,t){const i=Pr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function rb(o,t){o.uniform1iv(this.addr,t)}function ob(o,t){o.uniform2iv(this.addr,t)}function lb(o,t){o.uniform3iv(this.addr,t)}function cb(o,t){o.uniform4iv(this.addr,t)}function ub(o,t){o.uniform1uiv(this.addr,t)}function fb(o,t){o.uniform2uiv(this.addr,t)}function hb(o,t){o.uniform3uiv(this.addr,t)}function db(o,t){o.uniform4uiv(this.addr,t)}function pb(o,t,i){const s=this.cache,l=t.length,u=Bc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||I0,u[h])}function mb(o,t,i){const s=this.cache,l=t.length,u=Bc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||H0,u[h])}function _b(o,t,i){const s=this.cache,l=t.length,u=Bc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||G0,u[h])}function gb(o,t,i){const s=this.cache,l=t.length,u=Bc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||F0,u[h])}function vb(o){switch(o){case 5126:return $T;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return ab;case 35676:return sb;case 5124:case 35670:return rb;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return fb;case 36295:return hb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return gb}}class Sb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=JT(i.type)}}class xb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vb(i.type)}}class yb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function qg(o,t){o.seq.push(t),o.map[t.id]=t}function Mb(o,t,i){const s=o.name,l=s.length;for(Th.lastIndex=0;;){const u=Th.exec(s),h=Th.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){qg(i,m===void 0?new Sb(d,o,t):new xb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new yb(d),qg(i,v)),i=v}}}class Dc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);Mb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function jg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Eb=37297;let Tb=0;function bb(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Zg=new le;function Ab(o){Re._getMatrix(Zg,Re.workingColorSpace,o);const t=`mat3( ${Zg.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Uc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Kg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+bb(o.getShaderSource(t),h)}else return l}function Rb(o,t){const i=Ab(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Cb(o,t){let i;switch(t){case bx:i="Linear";break;case Ax:i="Reinhard";break;case Rx:i="Cineon";break;case Cx:i="ACESFilmic";break;case Dx:i="AgX";break;case Ux:i="Neutral";break;case wx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mc=new q;function wb(){Re.getLuminanceCoefficients(Mc);const o=Mc.x.toFixed(4),t=Mc.y.toFixed(4),i=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function Ub(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Lb(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Go(o){return o!==""}function Qg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(o){return o.replace(Nb,Pb)}const Ob=new Map;function Pb(o,t){let i=ce[t];if(i===void 0){const s=Ob.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return dd(i)}const zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(o){return o.replace(zb,Bb)}function Bb(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function t0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ib(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===o0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ax?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function Fb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cr:case wr:t="ENVMAP_TYPE_CUBE";break;case Pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function Gb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case l0:t="ENVMAP_BLENDING_MULTIPLY";break;case Ex:t="ENVMAP_BLENDING_MIX";break;case Tx:t="ENVMAP_BLENDING_ADD";break}return t}function Vb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function kb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Ib(i),m=Fb(i),g=Hb(i),v=Gb(i),x=Vb(i),M=Db(i),C=Ub(u),w=l.createProgram();let y,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Go).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Go).join(`
`),_.length>0&&(_+=`
`)):(y=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),_=[t0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?ce.tonemapping_pars_fragment:"",i.toneMapping!==Fa?Cb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Rb("linearToOutputTexel",i.outputColorSpace),wb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=dd(h),h=Qg(h,i),h=Jg(h,i),d=dd(d),d=Qg(d,i),d=Jg(d,i),h=$g(h),d=$g(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=P+y+h,D=P+_+d,I=jg(l,l.VERTEX_SHADER,O),z=jg(l,l.FRAGMENT_SHADER,D);l.attachShader(w,I),l.attachShader(w,z),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(F){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(w).trim(),tt=l.getShaderInfoLog(I).trim(),ct=l.getShaderInfoLog(z).trim();let ut=!0,V=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,I,z);else{const rt=Kg(l,I,"vertex"),K=Kg(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+st+`
`+rt+`
`+K)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(tt===""||ct==="")&&(V=!1);V&&(F.diagnostics={runnable:ut,programLog:st,vertexShader:{log:tt,prefix:y},fragmentShader:{log:ct,prefix:_}})}l.deleteShader(I),l.deleteShader(z),k=new Dc(l,w),R=Lb(l,w)}let k;this.getUniforms=function(){return k===void 0&&B(this),k};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(w,Eb)),T},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Tb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=z,this}let Xb=0;class Wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Yb(t),i.set(t,s)),s}}class Yb{constructor(t){this.id=Xb++,this.code=t,this.usedTimes=0}}function qb(o,t,i,s,l,u,h){const d=new b0,p=new Wb,m=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return m.add(R),R===0?"uv":`uv${R}`}function y(R,T,F,st,tt){const ct=st.fog,ut=tt.geometry,V=R.isMeshStandardMaterial?st.environment:null,rt=(R.isMeshStandardMaterial?i:t).get(R.envMap||V),K=rt&&rt.mapping===Pc?rt.image.height:null,xt=C[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const L=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,at=L!==void 0?L.length:0;let Et=0;ut.morphAttributes.position!==void 0&&(Et=1),ut.morphAttributes.normal!==void 0&&(Et=2),ut.morphAttributes.color!==void 0&&(Et=3);let At,j,pt,St;if(xt){const Ee=Di[xt];At=Ee.vertexShader,j=Ee.fragmentShader}else At=R.vertexShader,j=R.fragmentShader,p.update(R),pt=p.getVertexShaderID(R),St=p.getFragmentShaderID(R);const Tt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Kt=tt.isInstancedMesh===!0,Pt=tt.isBatchedMesh===!0,Me=!!R.map,we=!!R.matcap,ae=!!rt,H=!!R.aoMap,gn=!!R.lightMap,re=!!R.bumpMap,he=!!R.normalMap,kt=!!R.displacementMap,De=!!R.emissiveMap,Xt=!!R.metalnessMap,U=!!R.roughnessMap,E=R.anisotropy>0,nt=R.clearcoat>0,ht=R.dispersion>0,vt=R.iridescence>0,dt=R.sheen>0,Ht=R.transmission>0,wt=E&&!!R.anisotropyMap,zt=nt&&!!R.clearcoatMap,_e=nt&&!!R.clearcoatNormalMap,Mt=nt&&!!R.clearcoatRoughnessMap,Bt=vt&&!!R.iridescenceMap,Zt=vt&&!!R.iridescenceThicknessMap,Gt=dt&&!!R.sheenColorMap,It=dt&&!!R.sheenRoughnessMap,se=!!R.specularMap,qt=!!R.specularColorMap,Ue=!!R.specularIntensityMap,W=Ht&&!!R.transmissionMap,Lt=Ht&&!!R.thicknessMap,ot=!!R.gradientMap,_t=!!R.alphaMap,Ct=R.alphaTest>0,Dt=!!R.alphaHash,$t=!!R.extensions;let ke=Fa;R.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(ke=o.toneMapping);const nn={shaderID:xt,shaderType:R.type,shaderName:R.name,vertexShader:At,fragmentShader:j,defines:R.defines,customVertexShaderID:pt,customFragmentShaderID:St,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Pt,batchingColor:Pt&&tt._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&tt.instanceColor!==null,instancingMorph:Kt&&tt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Lr,alphaToCoverage:!!R.alphaToCoverage,map:Me,matcap:we,envMap:ae,envMapMode:ae&&rt.mapping,envMapCubeUVHeight:K,aoMap:H,lightMap:gn,bumpMap:re,normalMap:he,displacementMap:x&&kt,emissiveMap:De,normalMapObjectSpace:he&&R.normalMapType===Px,normalMapTangentSpace:he&&R.normalMapType===x0,metalnessMap:Xt,roughnessMap:U,anisotropy:E,anisotropyMap:wt,clearcoat:nt,clearcoatMap:zt,clearcoatNormalMap:_e,clearcoatRoughnessMap:Mt,dispersion:ht,iridescence:vt,iridescenceMap:Bt,iridescenceThicknessMap:Zt,sheen:dt,sheenColorMap:Gt,sheenRoughnessMap:It,specularMap:se,specularColorMap:qt,specularIntensityMap:Ue,transmission:Ht,transmissionMap:W,thicknessMap:Lt,gradientMap:ot,opaque:R.transparent===!1&&R.blending===Tr&&R.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:R.combine,mapUv:Me&&w(R.map.channel),aoMapUv:H&&w(R.aoMap.channel),lightMapUv:gn&&w(R.lightMap.channel),bumpMapUv:re&&w(R.bumpMap.channel),normalMapUv:he&&w(R.normalMap.channel),displacementMapUv:kt&&w(R.displacementMap.channel),emissiveMapUv:De&&w(R.emissiveMap.channel),metalnessMapUv:Xt&&w(R.metalnessMap.channel),roughnessMapUv:U&&w(R.roughnessMap.channel),anisotropyMapUv:wt&&w(R.anisotropyMap.channel),clearcoatMapUv:zt&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:It&&w(R.sheenRoughnessMap.channel),specularMapUv:se&&w(R.specularMap.channel),specularColorMapUv:qt&&w(R.specularColorMap.channel),specularIntensityMapUv:Ue&&w(R.specularIntensityMap.channel),transmissionMapUv:W&&w(R.transmissionMap.channel),thicknessMapUv:Lt&&w(R.thicknessMap.channel),alphaMapUv:_t&&w(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(he||E),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ut.attributes.uv&&(Me||_t),fog:!!ct,useFog:R.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Rt,skinning:tt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ke,decodeVideoTexture:Me&&R.map.isVideoTexture===!0&&Re.getTransfer(R.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&R.emissiveMap.isVideoTexture===!0&&Re.getTransfer(R.emissiveMap.colorSpace)===Pe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===aa,flipSided:R.side===Vn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:$t&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&R.extensions.multiDraw===!0||Pt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return nn.vertexUv1s=m.has(1),nn.vertexUv2s=m.has(2),nn.vertexUv3s=m.has(3),m.clear(),nn}function _(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)T.push(F),T.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(P(T,R),O(T,R),T.push(o.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function P(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function O(R,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const T=C[R.type];let F;if(T){const st=Di[T];F=dy.clone(st.uniforms)}else F=R.uniforms;return F}function I(R,T){let F;for(let st=0,tt=g.length;st<tt;st++){const ct=g[st];if(ct.cacheKey===T){F=ct,++F.usedTimes;break}}return F===void 0&&(F=new kb(o,T,R,u),g.push(F)),F}function z(R){if(--R.usedTimes===0){const T=g.indexOf(R);g[T]=g[g.length-1],g.pop(),R.destroy()}}function B(R){p.remove(R)}function k(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:I,releaseProgram:z,releaseShaderCache:B,programs:g,dispose:k}}function jb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Zb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function e0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function n0(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,C,w,y){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:C,renderOrder:v.renderOrder,z:w,group:y},o[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=C,_.renderOrder=v.renderOrder,_.z=w,_.group=y),t++,_}function d(v,x,M,C,w,y){const _=h(v,x,M,C,w,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function p(v,x,M,C,w,y){const _=h(v,x,M,C,w,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,x){i.length>1&&i.sort(v||Zb),s.length>1&&s.sort(x||e0),l.length>1&&l.sort(x||e0)}function g(){for(let v=t,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function Kb(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new n0,o.set(s,[h])):l>=u.length?(h=new n0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Qb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new Ce};break;case"SpotLight":i={position:new q,direction:new q,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new q,halfWidth:new q,halfHeight:new q};break}return o[t.id]=i,i}}}function Jb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let $b=0;function tA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function eA(o){const t=new Qb,i=Jb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new q);const l=new q,u=new Xe,h=new Xe;function d(m){let g=0,v=0,x=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let M=0,C=0,w=0,y=0,_=0,P=0,O=0,D=0,I=0,z=0,B=0;m.sort(tA);for(let R=0,T=m.length;R<T;R++){const F=m[R],st=F.color,tt=F.intensity,ct=F.distance,ut=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=st.r*tt,v+=st.g*tt,x+=st.b*tt;else if(F.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(F.sh.coefficients[V],tt);B++}else if(F.isDirectionalLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const rt=F.shadow,K=i.get(F);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,s.directionalShadow[M]=K,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=F.shadow.matrix,P++}s.directional[M]=V,M++}else if(F.isSpotLight){const V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(st).multiplyScalar(tt),V.distance=ct,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,s.spot[w]=V;const rt=F.shadow;if(F.map&&(s.spotLightMap[I]=F.map,I++,rt.updateMatrices(F),F.castShadow&&z++),s.spotLightMatrix[w]=rt.matrix,F.castShadow){const K=i.get(F);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,s.spotShadow[w]=K,s.spotShadowMap[w]=ut,D++}w++}else if(F.isRectAreaLight){const V=t.get(F);V.color.copy(st).multiplyScalar(tt),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=V,y++}else if(F.isPointLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const rt=F.shadow,K=i.get(F);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,K.shadowCameraNear=rt.camera.near,K.shadowCameraFar=rt.camera.far,s.pointShadow[C]=K,s.pointShadowMap[C]=ut,s.pointShadowMatrix[C]=F.shadow.matrix,O++}s.point[C]=V,C++}else if(F.isHemisphereLight){const V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(tt),V.groundColor.copy(F.groundColor).multiplyScalar(tt),s.hemi[_]=V,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const k=s.hash;(k.directionalLength!==M||k.pointLength!==C||k.spotLength!==w||k.rectAreaLength!==y||k.hemiLength!==_||k.numDirectionalShadows!==P||k.numPointShadows!==O||k.numSpotShadows!==D||k.numSpotMaps!==I||k.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=C,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,k.directionalLength=M,k.pointLength=C,k.spotLength=w,k.rectAreaLength=y,k.hemiLength=_,k.numDirectionalShadows=P,k.numPointShadows=O,k.numSpotShadows=D,k.numSpotMaps=I,k.numLightProbes=B,s.version=$b++)}function p(m,g){let v=0,x=0,M=0,C=0,w=0;const y=g.matrixWorldInverse;for(let _=0,P=m.length;_<P;_++){const O=m[_];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=s.rectArea[C];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),C++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:s}}function i0(o){const t=new eA(o),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function nA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new i0(o),t.set(l,[d])):u>=h.length?(d=new i0(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const iA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sA(o,t,i){let s=new bd;const l=new Jt,u=new Jt,h=new Ie,d=new Ay({depthPacking:Ox}),p=new Ry,m={},g=i.maxTextureSize,v={[Ga]:Vn,[Vn]:Ga,[aa]:aa},x=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:iA,fragmentShader:aA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const C=new Oi;C.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new yi(C,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=o0;let _=this.type;this.render=function(z,B,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const R=o.getRenderTarget(),T=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Ia),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const tt=_!==ia&&this.type===ia,ct=_===ia&&this.type!==ia;for(let ut=0,V=z.length;ut<V;ut++){const rt=z[ut],K=rt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const xt=K.getFrameExtents();if(l.multiply(xt),u.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,K.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,K.mapSize.y=u.y)),K.map===null||tt===!0||ct===!0){const at=this.type!==ia?{minFilter:Mi,magFilter:Mi}:{};K.map!==null&&K.map.dispose(),K.map=new Ms(l.x,l.y,at),K.map.texture.name=rt.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const L=K.getViewportCount();for(let at=0;at<L;at++){const Et=K.getViewport(at);h.set(u.x*Et.x,u.y*Et.y,u.x*Et.z,u.y*Et.w),st.viewport(h),K.updateMatrices(rt,at),s=K.getFrustum(),D(B,k,K.camera,rt,this.type)}K.isPointLightShadow!==!0&&this.type===ia&&P(K,k),K.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(R,T,F)};function P(z,B){const k=t.update(w);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ms(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(B,null,k,x,w,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(B,null,k,M,w,null)}function O(z,B,k,R){let T=null;const F=k.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)T=F;else if(T=k.isPointLight===!0?p:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const st=T.uuid,tt=B.uuid;let ct=m[st];ct===void 0&&(ct={},m[st]=ct);let ut=ct[tt];ut===void 0&&(ut=T.clone(),ct[tt]=ut,B.addEventListener("dispose",I)),T=ut}if(T.visible=B.visible,T.wireframe=B.wireframe,R===ia?T.side=B.shadowSide!==null?B.shadowSide:B.side:T.side=B.shadowSide!==null?B.shadowSide:v[B.side],T.alphaMap=B.alphaMap,T.alphaTest=B.alphaTest,T.map=B.map,T.clipShadows=B.clipShadows,T.clippingPlanes=B.clippingPlanes,T.clipIntersection=B.clipIntersection,T.displacementMap=B.displacementMap,T.displacementScale=B.displacementScale,T.displacementBias=B.displacementBias,T.wireframeLinewidth=B.wireframeLinewidth,T.linewidth=B.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const st=o.properties.get(T);st.light=k}return T}function D(z,B,k,R,T){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&T===ia)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld);const tt=t.update(z),ct=z.material;if(Array.isArray(ct)){const ut=tt.groups;for(let V=0,rt=ut.length;V<rt;V++){const K=ut[V],xt=ct[K.materialIndex];if(xt&&xt.visible){const L=O(z,xt,R,T);z.onBeforeShadow(o,z,B,k,tt,L,K),o.renderBufferDirect(k,null,tt,L,z,K),z.onAfterShadow(o,z,B,k,tt,L,K)}}}else if(ct.visible){const ut=O(z,ct,R,T);z.onBeforeShadow(o,z,B,k,tt,ut,null),o.renderBufferDirect(k,null,tt,ut,z,null),z.onAfterShadow(o,z,B,k,tt,ut,null)}}const st=z.children;for(let tt=0,ct=st.length;tt<ct;tt++)D(st[tt],B,k,R,T)}function I(z){z.target.removeEventListener("dispose",I);for(const k in m){const R=m[k],T=z.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}const rA={[Ch]:wh,[Dh]:Nh,[Uh]:Oh,[Rr]:Lh,[wh]:Ch,[Nh]:Dh,[Oh]:Uh,[Lh]:Rr};function oA(o,t){function i(){let W=!1;const Lt=new Ie;let ot=null;const _t=new Ie(0,0,0,0);return{setMask:function(Ct){ot!==Ct&&!W&&(o.colorMask(Ct,Ct,Ct,Ct),ot=Ct)},setLocked:function(Ct){W=Ct},setClear:function(Ct,Dt,$t,ke,nn){nn===!0&&(Ct*=ke,Dt*=ke,$t*=ke),Lt.set(Ct,Dt,$t,ke),_t.equals(Lt)===!1&&(o.clearColor(Ct,Dt,$t,ke),_t.copy(Lt))},reset:function(){W=!1,ot=null,_t.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,ot=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const $t=t.get("EXT_clip_control");Lt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const ke=Ct;Ct=null,this.setClear(ke)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Tt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Dt){ot!==Dt&&!W&&(o.depthMask(Dt),ot=Dt)},setFunc:function(Dt){if(Lt&&(Dt=rA[Dt]),_t!==Dt){switch(Dt){case Ch:o.depthFunc(o.NEVER);break;case wh:o.depthFunc(o.ALWAYS);break;case Dh:o.depthFunc(o.LESS);break;case Rr:o.depthFunc(o.LEQUAL);break;case Uh:o.depthFunc(o.EQUAL);break;case Lh:o.depthFunc(o.GEQUAL);break;case Nh:o.depthFunc(o.GREATER);break;case Oh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){W=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){W=!1,ot=null,_t=null,Ct=null,Lt=!1}}}function l(){let W=!1,Lt=null,ot=null,_t=null,Ct=null,Dt=null,$t=null,ke=null,nn=null;return{setTest:function(Ee){W||(Ee?Tt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!W&&(o.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,Cn,wn){(ot!==Ee||_t!==Cn||Ct!==wn)&&(o.stencilFunc(Ee,Cn,wn),ot=Ee,_t=Cn,Ct=wn)},setOp:function(Ee,Cn,wn){(Dt!==Ee||$t!==Cn||ke!==wn)&&(o.stencilOp(Ee,Cn,wn),Dt=Ee,$t=Cn,ke=wn)},setLocked:function(Ee){W=Ee},setClear:function(Ee){nn!==Ee&&(o.clearStencil(Ee),nn=Ee)},reset:function(){W=!1,Lt=null,ot=null,_t=null,Ct=null,Dt=null,$t=null,ke=null,nn=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,M=[],C=null,w=!1,y=null,_=null,P=null,O=null,D=null,I=null,z=null,B=new Ce(0,0,0),k=0,R=!1,T=null,F=null,st=null,tt=null,ct=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,rt=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=rt>=2);let xt=null,L={};const at=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),At=new Ie().fromArray(at),j=new Ie().fromArray(Et);function pt(W,Lt,ot,_t){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(W,Dt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ot;$t++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Lt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const St={};St[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),h.setFunc(Rr),re(!1),he(ag),Tt(o.CULL_FACE),H(Ia);function Tt(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Rt(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Kt(W,Lt){return v[W]!==Lt?(o.bindFramebuffer(W,Lt),v[W]=Lt,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(W,Lt){let ot=M,_t=!1;if(W){ot=x.get(Lt),ot===void 0&&(ot=[],x.set(Lt,ot));const Ct=W.textures;if(ot.length!==Ct.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)ot[Dt]=o.COLOR_ATTACHMENT0+Dt;ot.length=Ct.length,_t=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ot)}function Me(W){return C!==W?(o.useProgram(W),C=W,!0):!1}const we={[gs]:o.FUNC_ADD,[rx]:o.FUNC_SUBTRACT,[ox]:o.FUNC_REVERSE_SUBTRACT};we[lx]=o.MIN,we[cx]=o.MAX;const ae={[ux]:o.ZERO,[fx]:o.ONE,[hx]:o.SRC_COLOR,[Ah]:o.SRC_ALPHA,[vx]:o.SRC_ALPHA_SATURATE,[_x]:o.DST_COLOR,[px]:o.DST_ALPHA,[dx]:o.ONE_MINUS_SRC_COLOR,[Rh]:o.ONE_MINUS_SRC_ALPHA,[gx]:o.ONE_MINUS_DST_COLOR,[mx]:o.ONE_MINUS_DST_ALPHA,[Sx]:o.CONSTANT_COLOR,[xx]:o.ONE_MINUS_CONSTANT_COLOR,[yx]:o.CONSTANT_ALPHA,[Mx]:o.ONE_MINUS_CONSTANT_ALPHA};function H(W,Lt,ot,_t,Ct,Dt,$t,ke,nn,Ee){if(W===Ia){w===!0&&(Rt(o.BLEND),w=!1);return}if(w===!1&&(Tt(o.BLEND),w=!0),W!==sx){if(W!==y||Ee!==R){if((_!==gs||D!==gs)&&(o.blendEquation(o.FUNC_ADD),_=gs,D=gs),Ee)switch(W){case Tr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sg:o.blendFunc(o.ONE,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case og:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Tr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case og:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,O=null,I=null,z=null,B.set(0,0,0),k=0,y=W,R=Ee}return}Ct=Ct||Lt,Dt=Dt||ot,$t=$t||_t,(Lt!==_||Ct!==D)&&(o.blendEquationSeparate(we[Lt],we[Ct]),_=Lt,D=Ct),(ot!==P||_t!==O||Dt!==I||$t!==z)&&(o.blendFuncSeparate(ae[ot],ae[_t],ae[Dt],ae[$t]),P=ot,O=_t,I=Dt,z=$t),(ke.equals(B)===!1||nn!==k)&&(o.blendColor(ke.r,ke.g,ke.b,nn),B.copy(ke),k=nn),y=W,R=!1}function gn(W,Lt){W.side===aa?Rt(o.CULL_FACE):Tt(o.CULL_FACE);let ot=W.side===Vn;Lt&&(ot=!ot),re(ot),W.blending===Tr&&W.transparent===!1?H(Ia):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const _t=W.stencilWrite;d.setTest(_t),_t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),De(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){T!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),T=W)}function he(W){W!==nx?(Tt(o.CULL_FACE),W!==F&&(W===ag?o.cullFace(o.BACK):W===ix?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),F=W}function kt(W){W!==st&&(V&&o.lineWidth(W),st=W)}function De(W,Lt,ot){W?(Tt(o.POLYGON_OFFSET_FILL),(tt!==Lt||ct!==ot)&&(o.polygonOffset(Lt,ot),tt=Lt,ct=ot)):Rt(o.POLYGON_OFFSET_FILL)}function Xt(W){W?Tt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function U(W){W===void 0&&(W=o.TEXTURE0+ut-1),xt!==W&&(o.activeTexture(W),xt=W)}function E(W,Lt,ot){ot===void 0&&(xt===null?ot=o.TEXTURE0+ut-1:ot=xt);let _t=L[ot];_t===void 0&&(_t={type:void 0,texture:void 0},L[ot]=_t),(_t.type!==W||_t.texture!==Lt)&&(xt!==ot&&(o.activeTexture(ot),xt=ot),o.bindTexture(W,Lt||St[W]),_t.type=W,_t.texture=Lt)}function nt(){const W=L[xt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ht(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(W){At.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),At.copy(W))}function It(W){j.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function se(W,Lt){let ot=m.get(Lt);ot===void 0&&(ot=new WeakMap,m.set(Lt,ot));let _t=ot.get(W);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,W.name),ot.set(W,_t))}function qt(W,Lt){const _t=m.get(Lt).get(W);p.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,W.__bindingPointIndex),p.set(Lt,_t))}function Ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xt=null,L={},v={},x=new WeakMap,M=[],C=null,w=!1,y=null,_=null,P=null,O=null,D=null,I=null,z=null,B=new Ce(0,0,0),k=0,R=!1,T=null,F=null,st=null,tt=null,ct=null,At.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Tt,disable:Rt,bindFramebuffer:Kt,drawBuffers:Pt,useProgram:Me,setBlending:H,setMaterial:gn,setFlipSided:re,setCullFace:he,setLineWidth:kt,setPolygonOffset:De,setScissorTest:Xt,activeTexture:U,bindTexture:E,unbindTexture:nt,compressedTexImage2D:ht,compressedTexImage3D:vt,texImage2D:Bt,texImage3D:Zt,updateUBOMapping:se,uniformBlockBinding:qt,texStorage2D:_e,texStorage3D:Mt,texSubImage2D:dt,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:It,reset:Ue}}function lA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Jt,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,E){return M?new OffscreenCanvas(U,E):Nc("canvas")}function w(U,E,nt){let ht=1;const vt=Xt(U);if((vt.width>nt||vt.height>nt)&&(ht=nt/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(ht*vt.width),Ht=Math.floor(ht*vt.height);v===void 0&&(v=C(dt,Ht));const wt=E?C(dt,Ht):v;return wt.width=dt,wt.height=Ht,wt.getContext("2d").drawImage(U,0,0,dt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+dt+"x"+Ht+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,E,nt,ht,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=E;if(E===o.RED&&(nt===o.FLOAT&&(dt=o.R32F),nt===o.HALF_FLOAT&&(dt=o.R16F),nt===o.UNSIGNED_BYTE&&(dt=o.R8)),E===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.R8UI),nt===o.UNSIGNED_SHORT&&(dt=o.R16UI),nt===o.UNSIGNED_INT&&(dt=o.R32UI),nt===o.BYTE&&(dt=o.R8I),nt===o.SHORT&&(dt=o.R16I),nt===o.INT&&(dt=o.R32I)),E===o.RG&&(nt===o.FLOAT&&(dt=o.RG32F),nt===o.HALF_FLOAT&&(dt=o.RG16F),nt===o.UNSIGNED_BYTE&&(dt=o.RG8)),E===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RG16UI),nt===o.UNSIGNED_INT&&(dt=o.RG32UI),nt===o.BYTE&&(dt=o.RG8I),nt===o.SHORT&&(dt=o.RG16I),nt===o.INT&&(dt=o.RG32I)),E===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),nt===o.UNSIGNED_INT&&(dt=o.RGB32UI),nt===o.BYTE&&(dt=o.RGB8I),nt===o.SHORT&&(dt=o.RGB16I),nt===o.INT&&(dt=o.RGB32I)),E===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(dt=o.RGBA32UI),nt===o.BYTE&&(dt=o.RGBA8I),nt===o.SHORT&&(dt=o.RGBA16I),nt===o.INT&&(dt=o.RGBA32I)),E===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),E===o.RGBA){const Ht=vt?Uc:Re.getTransfer(ht);nt===o.FLOAT&&(dt=o.RGBA32F),nt===o.HALF_FLOAT&&(dt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(dt=Ht===Pe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(U,E){let nt;return U?E===null||E===ys||E===Dr?nt=o.DEPTH24_STENCIL8:E===sa?nt=o.DEPTH32F_STENCIL8:E===Vo&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ys||E===Dr?nt=o.DEPTH_COMPONENT24:E===sa?nt=o.DEPTH_COMPONENT32F:E===Vo&&(nt=o.DEPTH_COMPONENT16),nt}function I(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Mi&&U.minFilter!==Li?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function z(U){const E=U.target;E.removeEventListener("dispose",z),k(E),E.isVideoTexture&&g.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),T(E)}function k(U){const E=s.get(U);if(E.__webglInit===void 0)return;const nt=U.source,ht=x.get(nt);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(U),Object.keys(ht).length===0&&x.delete(nt)}s.remove(U)}function R(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const nt=U.source,ht=x.get(nt);delete ht[E.__cacheKey],h.memory.textures--}function T(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=U.textures;for(let ht=0,vt=nt.length;ht<vt;ht++){const dt=s.get(nt[ht]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(nt[ht])}s.remove(U)}let F=0;function st(){F=0}function tt(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function ct(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ut(U,E){const nt=s.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(nt,U,E);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+E)}function V(U,E){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){j(nt,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+E)}function rt(U,E){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){j(nt,U,E);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+E)}function K(U,E){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){pt(nt,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+E)}const xt={[Bh]:o.REPEAT,[Ss]:o.CLAMP_TO_EDGE,[Ih]:o.MIRRORED_REPEAT},L={[Mi]:o.NEAREST,[Lx]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[qf]:o.LINEAR_MIPMAP_NEAREST,[xs]:o.LINEAR_MIPMAP_LINEAR},at={[zx]:o.NEVER,[Vx]:o.ALWAYS,[Bx]:o.LESS,[y0]:o.LEQUAL,[Ix]:o.EQUAL,[Gx]:o.GEQUAL,[Fx]:o.GREATER,[Hx]:o.NOTEQUAL};function Et(U,E){if(E.type===sa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Li||E.magFilter===qf||E.magFilter===Jl||E.magFilter===xs||E.minFilter===Li||E.minFilter===qf||E.minFilter===Jl||E.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mi||E.minFilter!==Jl&&E.minFilter!==xs||E.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function At(U,E){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",z));const ht=E.source;let vt=x.get(ht);vt===void 0&&(vt={},x.set(ht,vt));const dt=ct(E);if(dt!==U.__cacheKey){vt[dt]===void 0&&(vt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),vt[dt].usedTimes++;const Ht=vt[U.__cacheKey];Ht!==void 0&&(vt[U.__cacheKey].usedTimes--,Ht.usedTimes===0&&R(E)),U.__cacheKey=dt,U.__webglTexture=vt[dt].texture}return nt}function j(U,E,nt){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=At(U,E),dt=E.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+nt);const Ht=s.get(dt);if(dt.version!==Ht.__version||vt===!0){i.activeTexture(o.TEXTURE0+nt);const wt=Re.getPrimaries(Re.workingColorSpace),zt=E.colorSpace===Ba?null:Re.getPrimaries(E.colorSpace),_e=E.colorSpace===Ba||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Mt=w(E.image,!1,l.maxTextureSize);Mt=De(E,Mt);const Bt=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let Gt=O(E.internalFormat,Bt,Zt,E.colorSpace,E.isVideoTexture);Et(ht,E);let It;const se=E.mipmaps,qt=E.isVideoTexture!==!0,Ue=Ht.__version===void 0||vt===!0,W=dt.dataReady,Lt=I(E,Mt);if(E.isDepthTexture)Gt=D(E.format===Ur,E.type),Ue&&(qt?i.texStorage2D(o.TEXTURE_2D,1,Gt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,Bt,Zt,null));else if(E.isDataTexture)if(se.length>0){qt&&Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,se[0].width,se[0].height);for(let ot=0,_t=se.length;ot<_t;ot++)It=se[ot],qt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Bt,Zt,It.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,It.width,It.height,0,Bt,Zt,It.data);E.generateMipmaps=!1}else qt?(Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Mt.width,Mt.height),W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Bt,Zt,Mt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,Bt,Zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qt&&Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,se[0].width,se[0].height,Mt.depth);for(let ot=0,_t=se.length;ot<_t;ot++)if(It=se[ot],E.format!==xi)if(Bt!==null)if(qt){if(W)if(E.layerUpdates.size>0){const Ct=Ng(It.width,It.height,E.format,E.type);for(const Dt of E.layerUpdates){const $t=It.data.subarray(Dt*Ct/It.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Dt,It.width,It.height,1,Bt,$t)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,Mt.depth,Bt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,It.width,It.height,Mt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,Mt.depth,Bt,Zt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,It.width,It.height,Mt.depth,0,Bt,Zt,It.data)}else{qt&&Ue&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,se[0].width,se[0].height);for(let ot=0,_t=se.length;ot<_t;ot++)It=se[ot],E.format!==xi?Bt!==null?qt?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Bt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Gt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,It.width,It.height,Bt,Zt,It.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,It.width,It.height,0,Bt,Zt,It.data)}else if(E.isDataArrayTexture)if(qt){if(Ue&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,Mt.width,Mt.height,Mt.depth),W)if(E.layerUpdates.size>0){const ot=Ng(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ct=Mt.data.subarray(_t*ot/Mt.data.BYTES_PER_ELEMENT,(_t+1)*ot/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Bt,Zt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Bt,Zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Mt.width,Mt.height,Mt.depth,0,Bt,Zt,Mt.data);else if(E.isData3DTexture)qt?(Ue&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,Mt.width,Mt.height,Mt.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Bt,Zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Mt.width,Mt.height,Mt.depth,0,Bt,Zt,Mt.data);else if(E.isFramebufferTexture){if(Ue)if(qt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Mt.width,Mt.height);else{let ot=Mt.width,_t=Mt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Gt,ot,_t,0,Bt,Zt,null),ot>>=1,_t>>=1}}else if(se.length>0){if(qt&&Ue){const ot=Xt(se[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ot.width,ot.height)}for(let ot=0,_t=se.length;ot<_t;ot++)It=se[ot],qt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Bt,Zt,It):i.texImage2D(o.TEXTURE_2D,ot,Gt,Bt,Zt,It);E.generateMipmaps=!1}else if(qt){if(Ue){const ot=Xt(Mt);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ot.width,ot.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,Zt,Mt);y(E)&&_(ht),Ht.__version=dt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function pt(U,E,nt){if(E.image.length!==6)return;const ht=At(U,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const dt=s.get(vt);if(vt.version!==dt.__version||ht===!0){i.activeTexture(o.TEXTURE0+nt);const Ht=Re.getPrimaries(Re.workingColorSpace),wt=E.colorSpace===Ba?null:Re.getPrimaries(E.colorSpace),zt=E.colorSpace===Ba||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!_e&&!Mt?Bt[_t]=w(E.image[_t],!0,l.maxCubemapSize):Bt[_t]=Mt?E.image[_t].image:E.image[_t],Bt[_t]=De(E,Bt[_t]);const Zt=Bt[0],Gt=u.convert(E.format,E.colorSpace),It=u.convert(E.type),se=O(E.internalFormat,Gt,It,E.colorSpace),qt=E.isVideoTexture!==!0,Ue=dt.__version===void 0||ht===!0,W=vt.dataReady;let Lt=I(E,Zt);Et(o.TEXTURE_CUBE_MAP,E);let ot;if(_e){qt&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,se,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){ot=Bt[_t].mipmaps;for(let Ct=0;Ct<ot.length;Ct++){const Dt=ot[Ct];E.format!==xi?Gt!==null?qt?W&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,se,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,It,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,se,Dt.width,Dt.height,0,Gt,It,Dt.data)}}}else{if(ot=E.mipmaps,qt&&Ue){ot.length>0&&Lt++;const _t=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){qt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Gt,It,Bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Bt[_t].width,Bt[_t].height,0,Gt,It,Bt[_t].data);for(let Ct=0;Ct<ot.length;Ct++){const $t=ot[Ct].image[_t].image;qt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,$t.width,$t.height,Gt,It,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,se,$t.width,$t.height,0,Gt,It,$t.data)}}else{qt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,It,Bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Gt,It,Bt[_t]);for(let Ct=0;Ct<ot.length;Ct++){const Dt=ot[Ct];qt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Gt,It,Dt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,se,Gt,It,Dt.image[_t])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),dt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function St(U,E,nt,ht,vt,dt){const Ht=u.convert(nt.format,nt.colorSpace),wt=u.convert(nt.type),zt=O(nt.internalFormat,Ht,wt,nt.colorSpace),_e=s.get(E),Mt=s.get(nt);if(Mt.__renderTarget=E,!_e.__hasExternalTextures){const Bt=Math.max(1,E.width>>dt),Zt=Math.max(1,E.height>>dt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,dt,zt,Bt,Zt,E.depth,0,Ht,wt,null):i.texImage2D(vt,dt,zt,Bt,Zt,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),he(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,0,re(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(U,E,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,dt=D(E.stencilBuffer,vt),Ht=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=re(E);he(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,dt,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,dt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,U)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const dt=ht[vt],Ht=u.convert(dt.format,dt.colorSpace),wt=u.convert(dt.type),zt=O(dt.internalFormat,Ht,wt,dt.colorSpace),_e=re(E);nt&&he(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,zt,E.width,E.height):he(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const vt=ht.__webglTexture,dt=re(E);if(E.depthTexture.format===br)he(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===Ur)he(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Kt(U){const E=s.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,U)}else if(nt){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Tt(E.__webglDepthbuffer[ht],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Tt(E.__webglDepthbuffer,U,!1);else{const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,vt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(U,E,nt){const ht=s.get(U);E!==void 0&&St(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Kt(U)}function Me(U){const E=U.texture,nt=s.get(U),ht=s.get(E);U.addEventListener("dispose",B);const vt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Ht=vt.length>1;if(Ht||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),dt){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)nt.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else nt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,zt=vt.length;wt<zt;wt++){const _e=s.get(vt[wt]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&he(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const zt=vt[wt];nt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const _e=u.convert(zt.format,zt.colorSpace),Mt=u.convert(zt.type),Bt=O(zt.internalFormat,_e,Mt,zt.colorSpace,U.isXRRenderTarget===!0),Zt=re(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(nt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Et(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(nt.__webglFramebuffer[wt][zt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else St(nt.__webglFramebuffer[wt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=vt.length;wt<zt;wt++){const _e=vt[wt],Mt=s.get(_e);i.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),Et(o.TEXTURE_2D,_e),St(nt.__webglFramebuffer,U,_e,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),y(_e)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ht.__webglTexture),Et(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(nt.__webglFramebuffer[zt],U,E,o.COLOR_ATTACHMENT0,wt,zt);else St(nt.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,wt,0);y(E)&&_(wt),i.unbindTexture()}U.depthBuffer&&Kt(U)}function we(U){const E=U.textures;for(let nt=0,ht=E.length;nt<ht;nt++){const vt=E[nt];if(y(vt)){const dt=P(U),Ht=s.get(vt).__webglTexture;i.bindTexture(dt,Ht),_(dt),i.unbindTexture()}}}const ae=[],H=[];function gn(U){if(U.samples>0){if(he(U)===!1){const E=U.textures,nt=U.width,ht=U.height;let vt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=s.get(U),wt=E.length>1;if(wt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const _e=s.get(E[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_e,0)}o.blitFramebuffer(0,0,nt,ht,0,0,nt,ht,vt,o.NEAREST),p===!0&&(ae.length=0,H.length=0,ae.push(o.COLOR_ATTACHMENT0+zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(dt),H.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,H)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const _e=s.get(E[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,_e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function re(U){return Math.min(l.maxSamples,U.samples)}function he(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(U){const E=h.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function De(U,E){const nt=U.colorSpace,ht=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==Lr&&nt!==Ba&&(Re.getTransfer(nt)===Pe?(ht!==xi||vt!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),E}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=tt,this.resetTextureUnits=st,this.setTexture2D=ut,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=K,this.rebindTextures=Pt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=he}function cA(o,t){function i(s,l=Ba){let u;const h=Re.getTransfer(l);if(s===la)return o.UNSIGNED_BYTE;if(s===gd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===vd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===h0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===u0)return o.BYTE;if(s===f0)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===_d)return o.INT;if(s===ys)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===ko)return o.HALF_FLOAT;if(s===d0)return o.ALPHA;if(s===p0)return o.RGB;if(s===xi)return o.RGBA;if(s===m0)return o.LUMINANCE;if(s===_0)return o.LUMINANCE_ALPHA;if(s===br)return o.DEPTH_COMPONENT;if(s===Ur)return o.DEPTH_STENCIL;if(s===g0)return o.RED;if(s===Sd)return o.RED_INTEGER;if(s===v0)return o.RG;if(s===xd)return o.RG_INTEGER;if(s===yd)return o.RGBA_INTEGER;if(s===Tc||s===bc||s===Ac||s===Rc)if(h===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Tc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Tc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fh||s===Hh||s===Gh||s===Vh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Fh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===Xh||s===Wh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===kh||s===Xh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yh||s===qh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$h)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===td)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ed)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===id)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ad)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sd)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cc||s===rd||s===od)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Cc)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===od)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===S0||s===ld||s===cd||s===ud)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Cc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ld)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ud)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const uA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new zn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Va({vertexShader:uA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yi(new zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dA extends Ts{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,M=null,C=null;const w=new hA,y=i.getContextAttributes();let _=null,P=null;const O=[],D=[],I=new Jt;let z=null;const B=new Qn;B.viewport=new Ie;const k=new Qn;k.viewport=new Ie;const R=[B,k],T=new Ny;let F=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pt=O[j];return pt===void 0&&(pt=new ph,O[j]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(j){let pt=O[j];return pt===void 0&&(pt=new ph,O[j]=pt),pt.getGripSpace()},this.getHand=function(j){let pt=O[j];return pt===void 0&&(pt=new ph,O[j]=pt),pt.getHandSpace()};function tt(j){const pt=D.indexOf(j.inputSource);if(pt===-1)return;const St=O[pt];St!==void 0&&(St.update(j.inputSource,j.frame,m||h),St.dispatchEvent({type:j.type,data:j.inputSource}))}function ct(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",ut);for(let j=0;j<O.length;j++){const pt=D[j];pt!==null&&(D[j]=null,O[j].disconnect(pt))}F=null,st=null,w.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,P=null,At.stop(),s.isPresenting=!1,t.setPixelRatio(z),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return C},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Tt=null,Rt=null;y.depth&&(Rt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=y.stencil?Ur:br,Tt=y.stencil?Dr:ys);const Kt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Kt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new Ms(x.textureWidth,x.textureHeight,{format:xi,type:la,depthTexture:new O0(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const St={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Ms(M.framebufferWidth,M.framebufferHeight,{format:xi,type:la,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ut(j){for(let pt=0;pt<j.removed.length;pt++){const St=j.removed[pt],Tt=D.indexOf(St);Tt>=0&&(D[Tt]=null,O[Tt].disconnect(St))}for(let pt=0;pt<j.added.length;pt++){const St=j.added[pt];let Tt=D.indexOf(St);if(Tt===-1){for(let Kt=0;Kt<O.length;Kt++)if(Kt>=D.length){D.push(St),Tt=Kt;break}else if(D[Kt]===null){D[Kt]=St,Tt=Kt;break}if(Tt===-1)break}const Rt=O[Tt];Rt&&Rt.connect(St)}}const V=new q,rt=new q;function K(j,pt,St){V.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(St.matrixWorld);const Tt=V.distanceTo(rt),Rt=pt.projectionMatrix.elements,Kt=St.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),Me=Rt[14]/(Rt[10]+1),we=(Rt[9]+1)/Rt[5],ae=(Rt[9]-1)/Rt[5],H=(Rt[8]-1)/Rt[0],gn=(Kt[8]+1)/Kt[0],re=Pt*H,he=Pt*gn,kt=Tt/(-H+gn),De=kt*-H;if(pt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(De),j.translateZ(kt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Xt=Pt+kt,U=Me+kt,E=re-De,nt=he+(Tt-De),ht=we*Me/U*Xt,vt=ae*Me/U*Xt;j.projectionMatrix.makePerspective(E,nt,ht,vt,Xt,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,pt){pt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let pt=j.near,St=j.far;w.texture!==null&&(w.depthNear>0&&(pt=w.depthNear),w.depthFar>0&&(St=w.depthFar)),T.near=k.near=B.near=pt,T.far=k.far=B.far=St,(F!==T.near||st!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,st=T.far),B.layers.mask=j.layers.mask|2,k.layers.mask=j.layers.mask|4,T.layers.mask=B.layers.mask|k.layers.mask;const Tt=j.parent,Rt=T.cameras;xt(T,Tt);for(let Kt=0;Kt<Rt.length;Kt++)xt(Rt[Kt],Tt);Rt.length===2?K(T,B,k):T.projectionMatrix.copy(B.projectionMatrix),L(j,T,Tt)};function L(j,pt,St){St===null?j.matrix.copy(pt.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(pt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(j){p=j,x!==null&&(x.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(T)};let at=null;function Et(j,pt){if(g=pt.getViewerPose(m||h),C=pt,g!==null){const St=g.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let Tt=!1;St.length!==T.cameras.length&&(T.cameras.length=0,Tt=!0);for(let Pt=0;Pt<St.length;Pt++){const Me=St[Pt];let we=null;if(M!==null)we=M.getViewport(Me);else{const H=v.getViewSubImage(x,Me);we=H.viewport,Pt===0&&(t.setRenderTargetTextures(P,H.colorTexture,x.ignoreDepthValues?void 0:H.depthStencilTexture),t.setRenderTarget(P))}let ae=R[Pt];ae===void 0&&(ae=new Qn,ae.layers.enable(Pt),ae.viewport=new Ie,R[Pt]=ae),ae.matrix.fromArray(Me.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Me.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(we.x,we.y,we.width,we.height),Pt===0&&(T.matrix.copy(ae.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Tt===!0&&T.cameras.push(ae)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Pt=v.getDepthInformation(St[0]);Pt&&Pt.isValid&&Pt.texture&&w.init(t,Pt,l.renderState)}}for(let St=0;St<O.length;St++){const Tt=D[St],Rt=O[St];Tt!==null&&Rt!==void 0&&Rt.update(Tt,pt,m||h)}at&&at(j,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),C=null}const At=new B0;At.setAnimationLoop(Et),this.setAnimationLoop=function(j){at=j},this.dispose=function(){}}}const ps=new Ni,pA=new Xe;function mA(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,w0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,P,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),C(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?p(y,_,P,O):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=t.get(_),O=P.envMap,D=P.envMapRotation;O&&(y.envMap.value=O,ps.copy(D),ps.x*=-1,ps.y*=-1,ps.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(ps)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,P,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function C(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const P=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function _A(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const D=O.program;s.uniformBlockBinding(P,D)}function m(P,O){let D=l[P.id];D===void 0&&(C(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",y));const I=O.program;s.updateUBOMapping(P,I);const z=t.render.frame;u[P.id]!==z&&(x(P),u[P.id]=z)}function g(P){const O=v();P.__bindingPointIndex=O;const D=o.createBuffer(),I=P.__size,z=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],D=P.uniforms,I=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let z=0,B=D.length;z<B;z++){const k=Array.isArray(D[z])?D[z]:[D[z]];for(let R=0,T=k.length;R<T;R++){const F=k[R];if(M(F,z,R,I)===!0){const st=F.__offset,tt=Array.isArray(F.value)?F.value:[F.value];let ct=0;for(let ut=0;ut<tt.length;ut++){const V=tt[ut],rt=w(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,st+ct,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,ct),ct+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,O,D,I){const z=P.value,B=O+"_"+D;if(I[B]===void 0)return typeof z=="number"||typeof z=="boolean"?I[B]=z:I[B]=z.clone(),!0;{const k=I[B];if(typeof z=="number"||typeof z=="boolean"){if(k!==z)return I[B]=z,!0}else if(k.equals(z)===!1)return k.copy(z),!0}return!1}function C(P){const O=P.uniforms;let D=0;const I=16;for(let B=0,k=O.length;B<k;B++){const R=Array.isArray(O[B])?O[B]:[O[B]];for(let T=0,F=R.length;T<F;T++){const st=R[T],tt=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,ut=tt.length;ct<ut;ct++){const V=tt[ct],rt=w(V),K=D%I,xt=K%rt.boundary,L=K+xt;D+=xt,L!==0&&I-L<rt.storage&&(D+=I-L),st.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=rt.storage}}}const z=D%I;return z>0&&(D+=I-z),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class gA{constructor(t={}){const{canvas:i=Wx(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const C=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Fa,this.toneMappingExposure=1;const D=this;let I=!1,z=0,B=0,k=null,R=-1,T=null;const F=new Ie,st=new Ie;let tt=null;const ct=new Ce(0);let ut=0,V=i.width,rt=i.height,K=1,xt=null,L=null;const at=new Ie(0,0,V,rt),Et=new Ie(0,0,V,rt);let At=!1;const j=new bd;let pt=!1,St=!1;this.transmissionResolutionScale=1;const Tt=new Xe,Rt=new Xe,Kt=new q,Pt=new Ie,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function ae(){return k===null?K:1}let H=s;function gn(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${md}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),H===null){const Y="webgl2";if(H=gn(Y,A),H===null)throw gn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let re,he,kt,De,Xt,U,E,nt,ht,vt,dt,Ht,wt,zt,_e,Mt,Bt,Zt,Gt,It,se,qt,Ue,W;function Lt(){re=new RT(H),re.init(),qt=new cA(H,re),he=new xT(H,re,t,qt),kt=new oA(H,re),he.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),De=new DT(H),Xt=new jb,U=new lA(H,re,kt,Xt,he,qt,De),E=new MT(D),nt=new AT(D),ht=new zy(H),Ue=new vT(H,ht),vt=new CT(H,ht,De,Ue),dt=new LT(H,vt,ht,De),Gt=new UT(H,he,U),Mt=new yT(Xt),Ht=new qb(D,E,nt,re,he,Ue,Mt),wt=new mA(D,Xt),zt=new Kb,_e=new nA(re),Zt=new gT(D,E,nt,kt,dt,M,p),Bt=new sA(D,dt,he),W=new _A(H,De,he,kt),It=new ST(H,re,De),se=new wT(H,re,De),De.programs=Ht.programs,D.capabilities=he,D.extensions=re,D.properties=Xt,D.renderLists=zt,D.shadowMap=Bt,D.state=kt,D.info=De}Lt();const ot=new dA(D,H);this.xr=ot,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(V,rt,!1))},this.getSize=function(A){return A.set(V,rt)},this.setSize=function(A,Y,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,rt=Y,i.width=Math.floor(A*K),i.height=Math.floor(Y*K),et===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(V*K,rt*K).floor()},this.setDrawingBufferSize=function(A,Y,et){V=A,rt=Y,K=et,i.width=Math.floor(A*et),i.height=Math.floor(Y*et),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,Y,et,J){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,Y,et,J),kt.viewport(F.copy(at).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,Y,et,J){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,Y,et,J),kt.scissor(st.copy(Et).multiplyScalar(K).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){kt.setScissorTest(At=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,et=!0){let J=0;if(A){let Z=!1;if(k!==null){const yt=k.texture.format;Z=yt===yd||yt===xd||yt===Sd}if(Z){const yt=k.texture.type,bt=yt===la||yt===ys||yt===Vo||yt===Dr||yt===gd||yt===vd,Ot=Zt.getClearColor(),Nt=Zt.getClearAlpha(),te=Ot.r,ee=Ot.g,Yt=Ot.b;bt?(C[0]=te,C[1]=ee,C[2]=Yt,C[3]=Nt,H.clearBufferuiv(H.COLOR,0,C)):(w[0]=te,w[1]=ee,w[2]=Yt,w[3]=Nt,H.clearBufferiv(H.COLOR,0,w))}else J|=H.COLOR_BUFFER_BIT}Y&&(J|=H.DEPTH_BUFFER_BIT),et&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Zt.dispose(),zt.dispose(),_e.dispose(),Xt.dispose(),E.dispose(),nt.dispose(),dt.dispose(),Ue.dispose(),W.dispose(),Ht.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Yo),ot.removeEventListener("sessionend",zr),Ti.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=De.autoReset,Y=Bt.enabled,et=Bt.autoUpdate,J=Bt.needsUpdate,Z=Bt.type;Lt(),De.autoReset=A,Bt.enabled=Y,Bt.autoUpdate=et,Bt.needsUpdate=J,Bt.type=Z}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const Y=A.target;Y.removeEventListener("dispose",$t),ke(Y)}function ke(A){nn(A),Xt.remove(A)}function nn(A){const Y=Xt.get(A).programs;Y!==void 0&&(Y.forEach(function(et){Ht.releaseProgram(et)}),A.isShaderMaterial&&Ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,et,J,Z,yt){Y===null&&(Y=Me);const bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=Ic(A,Y,et,J,Z);kt.setMaterial(J,bt);let Nt=et.index,te=1;if(J.wireframe===!0){if(Nt=vt.getWireframeAttribute(et),Nt===void 0)return;te=2}const ee=et.drawRange,Yt=et.attributes.position;let ge=ee.start*te,ve=(ee.start+ee.count)*te;yt!==null&&(ge=Math.max(ge,yt.start*te),ve=Math.min(ve,(yt.start+yt.count)*te)),Nt!==null?(ge=Math.max(ge,0),ve=Math.min(ve,Nt.count)):Yt!=null&&(ge=Math.max(ge,0),ve=Math.min(ve,Yt.count));const Ve=ve-ge;if(Ve<0||Ve===1/0)return;Ue.setup(Z,J,Ot,et,Nt);let Te,ne=It;if(Nt!==null&&(Te=ht.get(Nt),ne=se,ne.setIndex(Te)),Z.isMesh)J.wireframe===!0?(kt.setLineWidth(J.wireframeLinewidth*ae()),ne.setMode(H.LINES)):ne.setMode(H.TRIANGLES);else if(Z.isLine){let jt=J.linewidth;jt===void 0&&(jt=1),kt.setLineWidth(jt*ae()),Z.isLineSegments?ne.setMode(H.LINES):Z.isLineLoop?ne.setMode(H.LINE_LOOP):ne.setMode(H.LINE_STRIP)}else Z.isPoints?ne.setMode(H.POINTS):Z.isSprite&&ne.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ne.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const jt=Z._multiDrawStarts,rn=Z._multiDrawCounts,Se=Z._multiDrawCount,Bn=Nt?ht.get(Nt).bytesPerElement:1,hi=Xt.get(J).currentProgram.getUniforms();for(let Dn=0;Dn<Se;Dn++)hi.setValue(H,"_gl_DrawID",Dn),ne.render(jt[Dn]/Bn,rn[Dn])}else if(Z.isInstancedMesh)ne.renderInstances(ge,Ve,Z.count);else if(et.isInstancedBufferGeometry){const jt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,rn=Math.min(et.instanceCount,jt);ne.renderInstances(ge,Ve,rn)}else ne.render(ge,Ve)};function Ee(A,Y,et){A.transparent===!0&&A.side===aa&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,sn(A,Y,et),A.side=Ga,A.needsUpdate=!0,sn(A,Y,et),A.side=aa):sn(A,Y,et)}this.compile=function(A,Y,et=null){et===null&&(et=A),_=_e.get(et),_.init(Y),O.push(_),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),A!==et&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const J=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const yt=Z.material;if(yt)if(Array.isArray(yt))for(let bt=0;bt<yt.length;bt++){const Ot=yt[bt];Ee(Ot,et,Z),J.add(Ot)}else Ee(yt,et,Z),J.add(yt)}),_=O.pop(),J},this.compileAsync=function(A,Y,et=null){const J=this.compile(A,Y,et);return new Promise(Z=>{function yt(){if(J.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&J.delete(bt)}),J.size===0){Z(A);return}setTimeout(yt,10)}re.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Cn=null;function wn(A){Cn&&Cn(A)}function Yo(){Ti.stop()}function zr(){Ti.start()}const Ti=new B0;Ti.setAnimationLoop(wn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){Cn=A,ot.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},ot.addEventListener("sessionstart",Yo),ot.addEventListener("sessionend",zr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(Y),Y=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,Y,k),_=_e.get(A,O.length),_.init(Y),O.push(_),Rt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),j.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,pt=Mt.init(this.clippingPlanes,St),y=zt.get(A,P.length),y.init(),P.push(y),ot.enabled===!0&&ot.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&bs(yt,Y,-1/0,D.sortObjects)}bs(A,Y,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(xt,L),we=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,we&&Zt.addToRenderList(y,A),this.info.render.frame++,pt===!0&&Mt.beginShadows();const et=_.state.shadowsArray;Bt.render(et,A,Y),pt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,Z=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const yt=Y.cameras;if(Z.length>0)for(let bt=0,Ot=yt.length;bt<Ot;bt++){const Nt=yt[bt];qo(J,Z,A,Nt)}we&&Zt.render(A);for(let bt=0,Ot=yt.length;bt<Ot;bt++){const Nt=yt[bt];Br(y,A,Nt,Nt.viewport)}}else Z.length>0&&qo(J,Z,A,Y),we&&Zt.render(A),Br(y,A,Y);k!==null&&B===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,Y),Ue.resetDefaultState(),R=-1,T=null,O.pop(),O.length>0?(_=O[O.length-1],pt===!0&&Mt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function bs(A,Y,et,J){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){J&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const bt=dt.update(A),Ot=A.material;Ot.visible&&y.push(A,bt,Ot,et,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const bt=dt.update(A),Ot=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=bt.groups;for(let te=0,ee=Nt.length;te<ee;te++){const Yt=Nt[te],ge=Ot[Yt.materialIndex];ge&&ge.visible&&y.push(A,bt,ge,et,Pt.z,Yt)}}else Ot.visible&&y.push(A,bt,Ot,et,Pt.z,null)}}const yt=A.children;for(let bt=0,Ot=yt.length;bt<Ot;bt++)bs(yt[bt],Y,et,J)}function Br(A,Y,et,J){const Z=A.opaque,yt=A.transmissive,bt=A.transparent;_.setupLightsView(et),pt===!0&&Mt.setGlobalState(D.clippingPlanes,et),J&&kt.viewport(F.copy(J)),Z.length>0&&kn(Z,Y,et),yt.length>0&&kn(yt,Y,et),bt.length>0&&kn(bt,Y,et),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function qo(A,Y,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[J.id]===void 0&&(_.state.transmissionRenderTarget[J.id]=new Ms(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?ko:la,minFilter:xs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const yt=_.state.transmissionRenderTarget[J.id],bt=J.viewport||F;yt.setSize(bt.z*D.transmissionResolutionScale,bt.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget();D.setRenderTarget(yt),D.getClearColor(ct),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),we&&Zt.render(et);const Nt=D.toneMapping;D.toneMapping=Fa;const te=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),_.setupLightsView(J),pt===!0&&Mt.setGlobalState(D.clippingPlanes,J),kn(A,et,J),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),re.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Yt=0,ge=Y.length;Yt<ge;Yt++){const ve=Y[Yt],Ve=ve.object,Te=ve.geometry,ne=ve.material,jt=ve.group;if(ne.side===aa&&Ve.layers.test(J.layers)){const rn=ne.side;ne.side=Vn,ne.needsUpdate=!0,an(Ve,et,J,Te,ne,jt),ne.side=rn,ne.needsUpdate=!0,ee=!0}}ee===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}D.setRenderTarget(Ot),D.setClearColor(ct,ut),te!==void 0&&(J.viewport=te),D.toneMapping=Nt}function kn(A,Y,et){const J=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,yt=A.length;Z<yt;Z++){const bt=A[Z],Ot=bt.object,Nt=bt.geometry,te=J===null?bt.material:J,ee=bt.group;Ot.layers.test(et.layers)&&an(Ot,Y,et,Nt,te,ee)}}function an(A,Y,et,J,Z,yt){A.onBeforeRender(D,Y,et,J,Z,yt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(D,Y,et,J,A,yt),Z.transparent===!0&&Z.side===aa&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,D.renderBufferDirect(et,Y,J,Z,A,yt),Z.side=Ga,Z.needsUpdate=!0,D.renderBufferDirect(et,Y,J,Z,A,yt),Z.side=aa):D.renderBufferDirect(et,Y,J,Z,A,yt),A.onAfterRender(D,Y,et,J,Z,yt)}function sn(A,Y,et){Y.isScene!==!0&&(Y=Me);const J=Xt.get(A),Z=_.state.lights,yt=_.state.shadowsArray,bt=Z.state.version,Ot=Ht.getParameters(A,Z.state,yt,Y,et),Nt=Ht.getProgramCacheKey(Ot);let te=J.programs;J.environment=A.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(A.isMeshStandardMaterial?nt:E).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",$t),te=new Map,J.programs=te);let ee=te.get(Nt);if(ee!==void 0){if(J.currentProgram===ee&&J.lightsStateVersion===bt)return As(A,Ot),ee}else Ot.uniforms=Ht.getUniforms(A),A.onBeforeCompile(Ot,D),ee=Ht.acquireProgram(Ot,Nt),te.set(Nt,ee),J.uniforms=Ot.uniforms;const Yt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=Mt.uniform),As(A,Ot),J.needsLights=jo(A),J.lightsStateVersion=bt,J.needsLights&&(Yt.ambientLightColor.value=Z.state.ambient,Yt.lightProbe.value=Z.state.probe,Yt.directionalLights.value=Z.state.directional,Yt.directionalLightShadows.value=Z.state.directionalShadow,Yt.spotLights.value=Z.state.spot,Yt.spotLightShadows.value=Z.state.spotShadow,Yt.rectAreaLights.value=Z.state.rectArea,Yt.ltc_1.value=Z.state.rectAreaLTC1,Yt.ltc_2.value=Z.state.rectAreaLTC2,Yt.pointLights.value=Z.state.point,Yt.pointLightShadows.value=Z.state.pointShadow,Yt.hemisphereLights.value=Z.state.hemi,Yt.directionalShadowMap.value=Z.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Yt.spotShadowMap.value=Z.state.spotShadowMap,Yt.spotLightMatrix.value=Z.state.spotLightMatrix,Yt.spotLightMap.value=Z.state.spotLightMap,Yt.pointShadowMap.value=Z.state.pointShadowMap,Yt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=ee,J.uniformsList=null,ee}function Pi(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Dc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function As(A,Y){const et=Xt.get(A);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function Ic(A,Y,et,J,Z){Y.isScene!==!0&&(Y=Me),U.resetTextureUnits();const yt=Y.fog,bt=J.isMeshStandardMaterial?Y.environment:null,Ot=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Lr,Nt=(J.isMeshStandardMaterial?nt:E).get(J.envMap||bt),te=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Yt=!!et.morphAttributes.position,ge=!!et.morphAttributes.normal,ve=!!et.morphAttributes.color;let Ve=Fa;J.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Te=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ne=Te!==void 0?Te.length:0,jt=Xt.get(J),rn=_.state.lights;if(pt===!0&&(St===!0||A!==T)){const qe=A===T&&J.id===R;Mt.setState(J,A,qe)}let Se=!1;J.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==rn.state.version||jt.outputColorSpace!==Ot||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Nt||J.fog===!0&&jt.fog!==yt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Mt.numPlanes||jt.numIntersection!==Mt.numIntersection)||jt.vertexAlphas!==te||jt.vertexTangents!==ee||jt.morphTargets!==Yt||jt.morphNormals!==ge||jt.morphColors!==ve||jt.toneMapping!==Ve||jt.morphTargetsCount!==ne)&&(Se=!0):(Se=!0,jt.__version=J.version);let Bn=jt.currentProgram;Se===!0&&(Bn=sn(J,Y,Z));let hi=!1,Dn=!1,hn=!1;const Le=Bn.getUniforms(),Un=jt.uniforms;if(kt.useProgram(Bn.program)&&(hi=!0,Dn=!0,hn=!0),J.id!==R&&(R=J.id,Dn=!0),hi||T!==A){kt.buffers.depth.getReversed()?(Tt.copy(A.projectionMatrix),qx(Tt),jx(Tt),Le.setValue(H,"projectionMatrix",Tt)):Le.setValue(H,"projectionMatrix",A.projectionMatrix),Le.setValue(H,"viewMatrix",A.matrixWorldInverse);const vn=Le.map.cameraPosition;vn!==void 0&&vn.setValue(H,Kt.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&Le.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Le.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Dn=!0,hn=!0)}if(Z.isSkinnedMesh){Le.setOptional(H,Z,"bindMatrix"),Le.setOptional(H,Z,"bindMatrixInverse");const qe=Z.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Le.setValue(H,"boneTexture",qe.boneTexture,U))}Z.isBatchedMesh&&(Le.setOptional(H,Z,"batchingTexture"),Le.setValue(H,"batchingTexture",Z._matricesTexture,U),Le.setOptional(H,Z,"batchingIdTexture"),Le.setValue(H,"batchingIdTexture",Z._indirectTexture,U),Le.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Le.setValue(H,"batchingColorTexture",Z._colorsTexture,U));const En=et.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Gt.update(Z,et,Bn),(Dn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,Le.setValue(H,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Un.envMap.value=Nt,Un.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(Un.envMapIntensity.value=Y.environmentIntensity),Dn&&(Le.setValue(H,"toneMappingExposure",D.toneMappingExposure),jt.needsLights&&Fc(Un,hn),yt&&J.fog===!0&&wt.refreshFogUniforms(Un,yt),wt.refreshMaterialUniforms(Un,J,K,rt,_.state.transmissionRenderTarget[A.id]),Dc.upload(H,Pi(jt),Un,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Dc.upload(H,Pi(jt),Un,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Le.setValue(H,"center",Z.center),Le.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Le.setValue(H,"normalMatrix",Z.normalMatrix),Le.setValue(H,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const qe=J.uniformsGroups;for(let vn=0,Rs=qe.length;vn<Rs;vn++){const In=qe[vn];W.update(In,Bn),W.bind(In,Bn)}}return Bn}function Fc(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function jo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,Y,et){Xt.get(A.texture).__webglTexture=Y,Xt.get(A.depthTexture).__webglTexture=et;const J=Xt.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=et===void 0,J.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const et=Xt.get(A);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0};const ka=H.createFramebuffer();this.setRenderTarget=function(A,Y=0,et=0){k=A,z=Y,B=et;let J=!0,Z=null,yt=!1,bt=!1;if(A){const Nt=Xt.get(A);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(H.FRAMEBUFFER,null),J=!1;else if(Nt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Nt.__hasExternalTextures)U.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(bt=!0);const ee=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[Y])?Z=ee[Y][et]:Z=ee[Y],yt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?Z=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[et]:Z=ee,F.copy(A.viewport),st.copy(A.scissor),tt=A.scissorTest}else F.copy(at).multiplyScalar(K).floor(),st.copy(Et).multiplyScalar(K).floor(),tt=At;if(et!==0&&(Z=ka),kt.bindFramebuffer(H.FRAMEBUFFER,Z)&&J&&kt.drawBuffers(A,Z),kt.viewport(F),kt.scissor(st),kt.setScissorTest(tt),yt){const Nt=Xt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,et)}else if(bt){const Nt=Xt.get(A.texture),te=Y;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.__webglTexture,et,te)}else if(A!==null&&et!==0){const Nt=Xt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,et)}R=-1},this.readRenderTargetPixels=function(A,Y,et,J,Z,yt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){kt.bindFramebuffer(H.FRAMEBUFFER,Ot);try{const Nt=A.texture,te=Nt.format,ee=Nt.type;if(!he.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-J&&et>=0&&et<=A.height-Z&&H.readPixels(Y,et,J,Z,qt.convert(te),qt.convert(ee),yt)}finally{const Nt=k!==null?Xt.get(k).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,et,J,Z,yt,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){const Nt=A.texture,te=Nt.format,ee=Nt.type;if(!he.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-J&&et>=0&&et<=A.height-Z){kt.bindFramebuffer(H.FRAMEBUFFER,Ot);const Yt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Yt),H.bufferData(H.PIXEL_PACK_BUFFER,yt.byteLength,H.STREAM_READ),H.readPixels(Y,et,J,Z,qt.convert(te),qt.convert(ee),0);const ge=k!==null?Xt.get(k).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,ge);const ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Yx(H,ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Yt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,yt),H.deleteBuffer(Yt),H.deleteSync(ve),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,et=0){A.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-et),Z=Math.floor(A.image.width*J),yt=Math.floor(A.image.height*J),bt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;U.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,et,0,0,bt,Ot,Z,yt),kt.unbindTexture()};const Ir=H.createFramebuffer(),zi=H.createFramebuffer();this.copyTextureToTexture=function(A,Y,et=null,J=null,Z=0,yt=null){A.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],Y=arguments[2],yt=arguments[3]||0,et=null),yt===null&&(Z!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Z,Z=0):yt=0);let bt,Ot,Nt,te,ee,Yt,ge,ve,Ve;const Te=A.isCompressedTexture?A.mipmaps[yt]:A.image;if(et!==null)bt=et.max.x-et.min.x,Ot=et.max.y-et.min.y,Nt=et.isBox3?et.max.z-et.min.z:1,te=et.min.x,ee=et.min.y,Yt=et.isBox3?et.min.z:0;else{const En=Math.pow(2,-Z);bt=Math.floor(Te.width*En),Ot=Math.floor(Te.height*En),A.isDataArrayTexture?Nt=Te.depth:A.isData3DTexture?Nt=Math.floor(Te.depth*En):Nt=1,te=0,ee=0,Yt=0}J!==null?(ge=J.x,ve=J.y,Ve=J.z):(ge=0,ve=0,Ve=0);const ne=qt.convert(Y.format),jt=qt.convert(Y.type);let rn;Y.isData3DTexture?(U.setTexture3D(Y,0),rn=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),rn=H.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),rn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=H.getParameter(H.UNPACK_ROW_LENGTH),Bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),hi=H.getParameter(H.UNPACK_SKIP_PIXELS),Dn=H.getParameter(H.UNPACK_SKIP_ROWS),hn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Te.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,te),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);const Le=A.isDataArrayTexture||A.isData3DTexture,Un=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const En=Xt.get(A),qe=Xt.get(Y),vn=Xt.get(En.__renderTarget),Rs=Xt.get(qe.__renderTarget);kt.bindFramebuffer(H.READ_FRAMEBUFFER,vn.__webglFramebuffer),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let In=0;In<Nt;In++)Le&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,Z,Yt+In),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(Y).__webglTexture,yt,Ve+In)),H.blitFramebuffer(te,ee,bt,Ot,ge,ve,bt,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST);kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Xt.has(A)){const En=Xt.get(A),qe=Xt.get(Y);kt.bindFramebuffer(H.READ_FRAMEBUFFER,Ir),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,zi);for(let vn=0;vn<Nt;vn++)Le?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,En.__webglTexture,Z,Yt+vn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,En.__webglTexture,Z),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.__webglTexture,yt,Ve+vn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qe.__webglTexture,yt),Z!==0?H.blitFramebuffer(te,ee,bt,Ot,ge,ve,bt,Ot,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(rn,yt,ge,ve,Ve+vn,te,ee,bt,Ot):H.copyTexSubImage2D(rn,yt,ge,ve,te,ee,bt,Ot);kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(rn,yt,ge,ve,Ve,bt,Ot,Nt,ne,jt,Te.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(rn,yt,ge,ve,Ve,bt,Ot,Nt,ne,Te.data):H.texSubImage3D(rn,yt,ge,ve,Ve,bt,Ot,Nt,ne,jt,Te):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,yt,ge,ve,bt,Ot,ne,jt,Te.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,yt,ge,ve,Te.width,Te.height,ne,Te.data):H.texSubImage2D(H.TEXTURE_2D,yt,ge,ve,bt,Ot,ne,jt,Te);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,hi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,hn),yt===0&&Y.generateMipmaps&&H.generateMipmap(rn),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,et=null,J=null,Z=0){return A.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,J=arguments[1]||null,A=arguments[2],Y=arguments[3],Z=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,et,J,Z)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){z=0,B=0,k=null,kt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const a0={type:"change"},Dd={type:"start"},V0={type:"end"},Ec=new T0,s0=new za,vA=Math.cos(70*Xx.DEG2RAD),cn=new q,Gn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6;class SA extends Oy{constructor(t,i=null){super(t,i),this.state=Be.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Es,this._lastTargetPosition=new q,this._quat=new Es().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lg,this._sphericalDelta=new Lg,this._scale=1,this._panOffset=new q,this._rotateStart=new Jt,this._rotateEnd=new Jt,this._rotateDelta=new Jt,this._panStart=new Jt,this._panEnd=new Jt,this._panDelta=new Jt,this._dollyStart=new Jt,this._dollyEnd=new Jt,this._dollyDelta=new Jt,this._dollyDirection=new q,this._mouse=new Jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yA.bind(this),this._onPointerDown=xA.bind(this),this._onPointerUp=MA.bind(this),this._onContextMenu=wA.bind(this),this._onMouseWheel=bA.bind(this),this._onKeyDown=AA.bind(this),this._onTouchStart=RA.bind(this),this._onTouchMove=CA.bind(this),this._onMouseDown=EA.bind(this),this._onMouseMove=TA.bind(this),this._interceptControlDown=DA.bind(this),this._interceptControlUp=UA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(a0),this.update(),this.state=Be.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),l<-Math.PI?l+=Gn:l>Math.PI&&(l-=Gn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new q(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ec.origin.copy(this.object.position),Ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ec.direction))<vA?this.object.lookAt(this.target):(s0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ec.intersectPlane(s0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(a0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Gn/60*this.autoRotateSpeed*t:Gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let u=cn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Jt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function xA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function yA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function MA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(V0),this.state=Be.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function EA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Be.DOLLY;break;case Er.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Be.ROTATE}break;case Er.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Dd)}function TA(o){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function bA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(o.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(V0))}function AA(o){this.enabled!==!1&&this._handleKeyDown(o)}function RA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Be.TOUCH_ROTATE;break;case yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Be.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Dd)}function CA(o){switch(this._trackPointer(o),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Be.NONE}}function wA(o){this.enabled!==!1&&o.preventDefault()}function DA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const LA=()=>(r0.useEffect(()=>{const o=new Sy,t=new Qn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new gA;i.setSize(window.innerWidth,window.innerHeight);const s=document.getElementById("molecule-container");s&&s.appendChild(i.domElement),fetch("/trial1.xyz").then(u=>u.text()).then(u=>{const h=u.trim().split(`
`),d=parseInt(h[0]),p=h.slice(2,2+d),m=1.6;for(let y=0;y<p.length;y++){const[_,P,O,D]=p[y].split(/\s+/);for(let I=y+1;I<p.length;I++){const[z,B,k,R]=p[I].split(/\s+/),T=Math.sqrt((B-P)**2+(k-O)**2+(R-D)**2);if(T<=m){const F=new Ad(.05,.05,T,16),st=new Td({color:11184810}),tt=new yi(F,st);tt.position.set((+P+ +B)/2,(+O+ +k)/2,(+D+ +R)/2);const ct=new q(B-P,k-O,R-D).normalize(),ut=new q(0,1,0);tt.quaternion.setFromUnitVectors(ut,ct),o.add(tt)}}}const g=(y,_)=>{const P=document.createElement("canvas"),O=P.getContext("2d");P.width=200,P.height=100,O.font="30px Arial",O.fillStyle="#ffffff",O.fillText(y,50,50);const D=new Ty(P);D.needsUpdate=!0;const I=new L0({map:D,depthTest:!1,depthWrite:!1}),z=new yy(I);z.scale.set(1.5,.75,1),z.position.copy(_.clone().add(new q(0,.3,0))),o.add(z)};p.forEach(y=>{const[_,P,O,D]=y.trim().split(/\s+/),I=_==="C"?65280:_==="H"?16777215:16711680,z=new Rd(.2,32,32),B=new by({color:I}),k=new yi(z,B);k.position.set(parseFloat(P),parseFloat(O),parseFloat(D)),o.add(k),g(_,k.position)});const v=new wy(16777215,1,100);v.position.set(10,10,10),o.add(v);const x=new Ly(16777215,.5);o.add(x);const M=new Uy(16777215,1);M.position.set(1,1,1),o.add(M);const C=new SA(t,i.domElement);C.enableDamping=!0,C.dampingFactor=.05,C.rotateSpeed=.5,t.position.set(0,0,10);const w=()=>{requestAnimationFrame(w),C.update(),i.render(o,t)};w()}).catch(u=>console.error("Error loading molecule file:",u));const l=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l),s&&s.removeChild(i.domElement)}},[]),ue.jsx("div",{id:"molecule-container"})),NA=()=>ue.jsx("div",{className:"space",children:ue.jsx("p",{className:"space-text",children:'Mai jos sunt prezentate structuri chimice între amină și carboxil. Am folosit librăria "ORCA" pentru a efectua optimizări geometrice prin intermediul calculelor chimice. În stanga este structura înainte de efectuarea optimizării geometrice, iar în dreapta este structura după acest proces.'})}),OA=()=>ue.jsxs("div",{className:"media-container",children:[ue.jsxs("div",{className:"media-item",children:[ue.jsxs("video",{controls:!0,children:[ue.jsx("source",{src:"/BeforeStructureEdited.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),ue.jsx("p",{children:"Structura Inițilă"})]}),ue.jsxs("div",{className:"media-item",children:[ue.jsxs("video",{controls:!0,children:[ue.jsx("source",{src:"/OptimizedStructureEdited.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),ue.jsx("p",{children:"Structura Optimizată Geometric"})]})]}),PA=()=>ue.jsxs("div",{class:"yap-container",children:[ue.jsx("div",{class:"page-title",children:"See the Change: Peptide Bond Optimization"}),ue.jsx("div",{class:"title",children:"Ce este o legătură peptidică?"}),ue.jsxs("div",{class:"yap",children:["O legătură peptidică se formează între doi aminoacizi atunci când gruparea carboxil (-COOH) a unui aminoacid reacționează cu gruparea amină (-NH₂) a altui aminoacid, eliberând o moleculă de apă (H₂O) — aceasta este o reacție de condensare.",ue.jsx("div",{class:"yap",children:"De exemplu:"}),ue.jsx("div",{class:"example",children:"Glicină + Alanină → Glicilalanină (dipeptid) + H₂O"}),ue.jsx("div",{class:"yap",children:"Rezultatul este o legătură C-N între cei doi aminoacizi, creând astfel coloana vertebrală a proteinelor."}),ue.jsx("div",{class:"title",children:"Aplicabilitățile acestei reacții în viața reală:"}),ue.jsx("div",{class:"title",children:"1. SinTeza proteinelor în organisme:"}),ue.jsx("div",{class:"yap",children:"Legăturile peptidice sunt esențiale pentru formarea proteinelor — molecule fundamentale pentru structura și funcționarea celulelor, cum ar fi enzimele, hormonii și anticorpii."}),ue.jsx("div",{class:"title",children:"2. Industria farmaceutică: "}),ue.jsx("div",{class:"yap",children:"Peptidele sintetice sunt utilizate pentru a crea medicamente, cum ar fi insulina pentru diabet sau antibioticele peptidice."}),ue.jsx("div",{class:"title",children:"3. Biotehnologie: "}),ue.jsx("div",{class:"yap",children:"Cercetările moderne folosesc peptidele în terapii personalizate, inclusiv în dezvoltarea de vaccinuri și tratamente împotriva cancerului."}),ue.jsx("div",{class:"title",children:"4. Suplimente nutritive și sport: "}),ue.jsx("div",{class:"yap",children:"Proteinele hidrolizate (care conțin lanțuri de peptide scurte) sunt folosite în suplimente pentru o absorbție mai rapidă în mușchi."}),ue.jsx("h1",{class:"main-example",children:"-COOH + -NH₂ → -CO-NH + H₂O"})]})]}),zA=()=>ue.jsx("div",{className:"space",children:ue.jsx("p",{className:"space-text",children:"În continuare este prezentată structura optimizată, sub forma unei animații 3d, astfel încât utilizatorul poate interacționa cu aceasta."})});function BA(){return ue.jsxs("div",{className:"grid-container",children:[ue.jsx(PA,{}),ue.jsx(NA,{}),ue.jsx(OA,{}),ue.jsx(zA,{}),ue.jsx("div",{className:"viewer-container",children:ue.jsx(LA,{})})]})}ex.createRoot(document.getElementById("root")).render(ue.jsx(r0.StrictMode,{children:ue.jsx(BA,{})}));
