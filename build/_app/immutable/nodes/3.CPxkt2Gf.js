import{s as h,o as k,b as S}from"../chunks/scheduler.37zBBjGX.js";import{S as B,i as C,c as $,s as F,a as g,b as T,m as _,d as q,t as w,e as M,f as v,g as y}from"../chunks/index.DLdBAJEO.js";import{M as D,l as E}from"../chunks/Menu.BZlOr4Zm.js";import{M as H}from"../chunks/transform.Dh1RLYvp.js";function L(i){let n,a,t,r;n=new H({props:{preloadFont:i[2],hide:!0}});let m={web:!1,items:i[0],drinks:!0};return t=new D({props:m}),i[3](t),{c(){$(n.$$.fragment),a=F(),$(t.$$.fragment)},l(e){g(n.$$.fragment,e),a=T(e),g(t.$$.fragment,e)},m(e,s){_(n,e,s),q(e,a,s),_(t,e,s),r=!0},p(e,[s]){const f={};s&1&&(f.items=e[0]),t.$set(f)},i(e){r||(w(n.$$.fragment,e),w(t.$$.fragment,e),r=!0)},o(e){M(n.$$.fragment,e),M(t.$$.fragment,e),r=!1},d(e){e&&v(a),y(n,e),i[3](null),y(t,e)}}}function P(i,n,a){let t,r=[],m;const e=["../assets/fonts/LondrinaSolid-Black.woff2","../assets/fonts/SometypeMono-Medium.woff2","../assets/fonts/SometypeMono-Bold.woff2"];async function s(u){try{const{data:o,backup:j,error:z}=await E();if(o!=null&&o.items){t=o.updated;const b="drinks";a(0,r=o.items.filter(d=>d.name&&d.service===b));const c=new Date,p=c.getHours(),l=c.getMinutes();l===0&&m.egg(),!u&&(p===10||p===16)&&l===0?window.location.reload():setTimeout(s,3e4)}else throw new Error("no data")}catch(o){error=o==null?void 0:o.message}finally{setTimeout(s,3e4)}}k(async()=>{await s(!0)});function f(u){S[u?"unshift":"push"](()=>{m=u,a(1,m)})}return[r,m,e,f]}class K extends B{constructor(n){super(),C(this,n,P,L,h,{})}}export{K as component};
