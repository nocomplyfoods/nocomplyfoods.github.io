import{s as g,n as m,c as f}from"../chunks/scheduler.B5RNU3n-.js";import{S as _,i as h,e as v,t as u,c as $,b as E,d as p,f as b,h as S,j as l,k as d}from"../chunks/index.CWAGcz73.js";import{s as x}from"../chunks/entry.BQeUmOIX.js";const j=()=>{const t=x;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},k={subscribe(t){return j().page.subscribe(t)}};function q(t){let e,a=t[0].status+"",n,o,i=t[0].error.message+"",c;return{c(){e=v("h1"),n=u(a),o=u(": "),c=u(i)},l(r){e=$(r,"H1",{});var s=E(e);n=p(s,a),o=p(s,": "),c=p(s,i),s.forEach(b)},m(r,s){S(r,e,s),l(e,n),l(e,o),l(e,c)},p(r,[s]){s&1&&a!==(a=r[0].status+"")&&d(n,a),s&1&&i!==(i=r[0].error.message+"")&&d(c,i)},i:m,o:m,d(r){r&&b(e)}}}function y(t,e,a){let n;return f(t,k,o=>a(0,n=o)),[n]}let z=class extends _{constructor(e){super(),h(this,e,y,q,g,{})}};export{z as component};
