import{s as _,o as M}from"../chunks/scheduler.BDfStAzi.js";import{S as y,i as h,c as u,s as S,a as p,b,m as l,d as B,t as $,e as d,f as v,g}from"../chunks/index.CFbGN5lA.js";import{M as k,a as D,l as F}from"../chunks/Menu.CUyupdng.js";function q(m){let s,r,n,o;return s=new k({props:{preloadFont:m[1]}}),n=new D({props:{web:!1,items:m[0]}}),{c(){u(s.$$.fragment),r=S(),u(n.$$.fragment)},l(e){p(s.$$.fragment,e),r=b(e),p(n.$$.fragment,e)},m(e,a){l(s,e,a),B(e,r,a),l(n,e,a),o=!0},p(e,[a]){const t={};a&1&&(t.items=e[0]),n.$set(t)},i(e){o||($(s.$$.fragment,e),$(n.$$.fragment,e),o=!0)},o(e){d(s.$$.fragment,e),d(n.$$.fragment,e),o=!1},d(e){e&&v(r),g(s,e),g(n,e)}}}function x(m,s,r){let n,o=[];const e=["../assets/fonts/LondrinaSolid-Black.woff2","../assets/fonts/SometypeMono-Medium.woff2","../assets/fonts/SometypeMono-Bold.woff2"];async function a(){try{const{data:t,backup:C,error:E}=await F();if(t!=null&&t.items){n=t.updated;const f=new Date().getHours(),w=new Date().getMinutes(),c=f<15||f===15&&w<30?"brunch":"dinner";r(0,o=t.items.filter(i=>i.item&&i.service===c)),o.length||r(0,o=t.items.filter(i=>i.item&&i.service!==c))}else throw new Error("no data")}catch(t){error=t==null?void 0:t.message}finally{setTimeout(a,3e4)}}return M(async()=>{await a()}),[o,e]}class j extends y{constructor(s){super(),h(this,s,x,q,_,{})}}export{j as component};