function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function z(){return Object.create(null)}function v(t){t.forEach(j)}function M(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function A(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t){let n;return m(t,e=>n=e)(),n}function F(t,n,e){t.$$.on_destroy.push(m(n,e))}function P(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const i=[],_=Math.max(n.dirty.length,r.length);for(let s=0;s<_;s+=1)i[s]=n.dirty[s]|r[s];return i}return n.dirty|r}return n.dirty}function D(t,n,e,o,r,i){if(r){const _=y(n,e,o,i);t.p(_,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function I(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}let l;function d(t){l=t}function f(){if(!l)throw new Error("Function called outside component initialization");return l}function J(t){f().$$.on_mount.push(t)}function K(t){f().$$.after_update.push(t)}function L(t,n){return f().$$.context.set(t,n),n}function N(t){return f().$$.context.get(t)}const a=[],g=[];let u=[];const b=[],x=Promise.resolve();let p=!1;function E(){p||(p=!0,x.then(O))}function Q(){return E(),x}function C(t){u.push(t)}const h=new Set;let c=0;function O(){if(c!==0)return;const t=l;do{try{for(;c<a.length;){const n=a[c];c++,d(n),q(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function q(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}function R(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{I as A,H as B,B as C,K as a,g as b,F as c,P as d,U as e,z as f,G as g,O as h,M as i,A as j,C as k,R as l,l as m,k as n,J as o,d as p,j as q,v as r,S as s,Q as t,D as u,a as v,E as w,N as x,L as y,w as z};
