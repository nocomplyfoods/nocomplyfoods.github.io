import{s as de,n as ie,z as Ft,o as kt}from"../chunks/scheduler.DvL4S4Fv.js";import{S as ye,i as Te,e as S,c as w,a as k,d as y,o as F,B as z,f as O,A as Ze,t as R,h as P,H as ze,b as Q,k as q,C as Re,g as C,s as oe,p as De,n as A,l as $,m as Qe,u as je,j as Se,y as Je,v as Xe,w as Be,q as Ge,x as Ke}from"../chunks/index.mEyKcOYa.js";import{e as ce}from"../chunks/transform.BGVe7FNy.js";import{p as Yt}from"../chunks/stores.Nx9J9HuD.js";function we(e,t){let r;if(t===void 0)for(const n of e)n!=null&&(r<n||r===void 0&&n>=n)&&(r=n);else{let n=-1;for(let a of e)(a=t(a,++n,e))!=null&&(r<a||r===void 0&&a>=a)&&(r=a)}return r}const he=new Date,ge=new Date;function V(e,t,r,n){function a(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return a.floor=o=>(e(o=new Date(+o)),o),a.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),a.round=o=>{const u=a(o),l=a.ceil(o);return o-u<l-o?u:l},a.offset=(o,u)=>(t(o=new Date(+o),u==null?1:Math.floor(u)),o),a.range=(o,u,l)=>{const m=[];if(o=a.ceil(o),l=l==null?1:Math.floor(l),!(o<u)||!(l>0))return m;let v;do m.push(v=new Date(+o)),t(o,l),e(o);while(v<o&&o<u);return m},a.filter=o=>V(u=>{if(u>=u)for(;e(u),!o(u);)u.setTime(u-1)},(u,l)=>{if(u>=u)if(l<0)for(;++l<=0;)for(;t(u,-1),!o(u););else for(;--l>=0;)for(;t(u,1),!o(u););}),r&&(a.count=(o,u)=>(he.setTime(+o),ge.setTime(+u),e(he),e(ge),Math.floor(r(he,ge))),a.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?a.filter(n?u=>n(u)%o===0:u=>a.count(0,u)%o===0):a)),a}const bt=1e3,Ce=bt*60,Ht=Ce*60,ue=Ht*24,$e=ue*7,_e=V(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Ce)/ue,e=>e.getDate()-1);_e.range;const Me=V(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/ue,e=>e.getUTCDate()-1);Me.range;const Wt=V(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/ue,e=>Math.floor(e/ue));Wt.range;function X(e){return V(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*Ce)/$e)}const et=X(0),fe=X(1),Lt=X(2),It=X(3),ee=X(4),Nt=X(5),Ot=X(6);et.range;fe.range;Lt.range;It.range;ee.range;Nt.range;Ot.range;function B(e){return V(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/$e)}const tt=B(0),me=B(1),xt=B(2),Et=B(3),te=B(4),Pt=B(5),qt=B(6);tt.range;me.range;xt.range;Et.range;te.range;Pt.range;qt.range;const j=V(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());j.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:V(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});j.range;const J=V(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());J.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:V(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});J.range;function ve(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function pe(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function ne(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function Vt(e){var t=e.dateTime,r=e.date,n=e.time,a=e.periods,o=e.days,u=e.shortDays,l=e.months,m=e.shortMonths,v=re(a),U=ae(a),T=re(o),f=ae(o),c=re(u),h=ae(u),D=re(l),x=ae(l),M=re(m),b=ae(m),I={a:vt,A:pt,b:dt,B:yt,c:null,d:We,e:We,f:fn,g:_n,G:Un,H:sn,I:ln,j:cn,L:nt,m:mn,M:hn,p:Tt,q:Ct,Q:Ne,s:Oe,S:gn,u:vn,U:pn,V:dn,w:yn,W:Tn,x:null,X:null,y:Cn,Y:Mn,Z:Dn,"%":Ie},E={a:_t,A:Mt,b:Ut,B:Dt,c:null,d:Le,e:Le,f:kn,g:En,G:qn,H:Sn,I:wn,j:Fn,L:at,m:Yn,M:bn,p:St,q:wt,Q:Ne,s:Oe,S:Hn,u:Wn,U:Ln,V:In,w:Nn,W:On,x:null,X:null,y:xn,Y:Pn,Z:Vn,"%":Ie},se={a:lt,A:it,b:ct,B:ft,c:mt,d:be,e:be,f:rn,g:Ye,G:ke,H:He,I:He,j:$t,L:nn,m:Kt,M:en,p:st,q:Gt,Q:on,s:un,S:tn,u:Qt,U:jt,V:Jt,w:Rt,W:Xt,x:ht,X:gt,y:Ye,Y:ke,Z:Bt,"%":an};I.x=N(r,I),I.X=N(n,I),I.c=N(t,I),E.x=N(r,E),E.X=N(n,E),E.c=N(t,E);function N(i,g){return function(p){var s=[],H=-1,_=0,W=i.length,L,Z,Ue;for(p instanceof Date||(p=new Date(+p));++H<W;)i.charCodeAt(H)===37&&(s.push(i.slice(_,H)),(Z=Fe[L=i.charAt(++H)])!=null?L=i.charAt(++H):Z=L==="e"?" ":"0",(Ue=g[L])&&(L=Ue(p,Z)),s.push(L),_=H+1);return s.push(i.slice(_,H)),s.join("")}}function G(i,g){return function(p){var s=ne(1900,void 0,1),H=le(s,i,p+="",0),_,W;if(H!=p.length)return null;if("Q"in s)return new Date(s.Q);if("s"in s)return new Date(s.s*1e3+("L"in s?s.L:0));if(g&&!("Z"in s)&&(s.Z=0),"p"in s&&(s.H=s.H%12+s.p*12),s.m===void 0&&(s.m="q"in s?s.q:0),"V"in s){if(s.V<1||s.V>53)return null;"w"in s||(s.w=1),"Z"in s?(_=pe(ne(s.y,0,1)),W=_.getUTCDay(),_=W>4||W===0?me.ceil(_):me(_),_=Me.offset(_,(s.V-1)*7),s.y=_.getUTCFullYear(),s.m=_.getUTCMonth(),s.d=_.getUTCDate()+(s.w+6)%7):(_=ve(ne(s.y,0,1)),W=_.getDay(),_=W>4||W===0?fe.ceil(_):fe(_),_=_e.offset(_,(s.V-1)*7),s.y=_.getFullYear(),s.m=_.getMonth(),s.d=_.getDate()+(s.w+6)%7)}else("W"in s||"U"in s)&&("w"in s||(s.w="u"in s?s.u%7:"W"in s?1:0),W="Z"in s?pe(ne(s.y,0,1)).getUTCDay():ve(ne(s.y,0,1)).getDay(),s.m=0,s.d="W"in s?(s.w+6)%7+s.W*7-(W+5)%7:s.w+s.U*7-(W+6)%7);return"Z"in s?(s.H+=s.Z/100|0,s.M+=s.Z%100,pe(s)):ve(s)}}function le(i,g,p,s){for(var H=0,_=g.length,W=p.length,L,Z;H<_;){if(s>=W)return-1;if(L=g.charCodeAt(H++),L===37){if(L=g.charAt(H++),Z=se[L in Fe?g.charAt(H++):L],!Z||(s=Z(i,p,s))<0)return-1}else if(L!=p.charCodeAt(s++))return-1}return s}function st(i,g,p){var s=v.exec(g.slice(p));return s?(i.p=U.get(s[0].toLowerCase()),p+s[0].length):-1}function lt(i,g,p){var s=c.exec(g.slice(p));return s?(i.w=h.get(s[0].toLowerCase()),p+s[0].length):-1}function it(i,g,p){var s=T.exec(g.slice(p));return s?(i.w=f.get(s[0].toLowerCase()),p+s[0].length):-1}function ct(i,g,p){var s=M.exec(g.slice(p));return s?(i.m=b.get(s[0].toLowerCase()),p+s[0].length):-1}function ft(i,g,p){var s=D.exec(g.slice(p));return s?(i.m=x.get(s[0].toLowerCase()),p+s[0].length):-1}function mt(i,g,p){return le(i,t,g,p)}function ht(i,g,p){return le(i,r,g,p)}function gt(i,g,p){return le(i,n,g,p)}function vt(i){return u[i.getDay()]}function pt(i){return o[i.getDay()]}function dt(i){return m[i.getMonth()]}function yt(i){return l[i.getMonth()]}function Tt(i){return a[+(i.getHours()>=12)]}function Ct(i){return 1+~~(i.getMonth()/3)}function _t(i){return u[i.getUTCDay()]}function Mt(i){return o[i.getUTCDay()]}function Ut(i){return m[i.getUTCMonth()]}function Dt(i){return l[i.getUTCMonth()]}function St(i){return a[+(i.getUTCHours()>=12)]}function wt(i){return 1+~~(i.getUTCMonth()/3)}return{format:function(i){var g=N(i+="",I);return g.toString=function(){return i},g},parse:function(i){var g=G(i+="",!1);return g.toString=function(){return i},g},utcFormat:function(i){var g=N(i+="",E);return g.toString=function(){return i},g},utcParse:function(i){var g=G(i+="",!0);return g.toString=function(){return i},g}}}var Fe={"-":"",_:" ",0:"0"},Y=/^\s*\d+/,At=/^%/,Zt=/[\\^$*+?|[\]().{}]/g;function d(e,t,r){var n=e<0?"-":"",a=(n?-e:e)+"",o=a.length;return n+(o<r?new Array(r-o+1).join(t)+a:a)}function zt(e){return e.replace(Zt,"\\$&")}function re(e){return new RegExp("^(?:"+e.map(zt).join("|")+")","i")}function ae(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function Rt(e,t,r){var n=Y.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function Qt(e,t,r){var n=Y.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function jt(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function Jt(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function Xt(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function ke(e,t,r){var n=Y.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function Ye(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function Bt(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function Gt(e,t,r){var n=Y.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function Kt(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function be(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function $t(e,t,r){var n=Y.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function He(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function en(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function tn(e,t,r){var n=Y.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function nn(e,t,r){var n=Y.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function rn(e,t,r){var n=Y.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function an(e,t,r){var n=At.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function on(e,t,r){var n=Y.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function un(e,t,r){var n=Y.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function We(e,t){return d(e.getDate(),t,2)}function sn(e,t){return d(e.getHours(),t,2)}function ln(e,t){return d(e.getHours()%12||12,t,2)}function cn(e,t){return d(1+_e.count(j(e),e),t,3)}function nt(e,t){return d(e.getMilliseconds(),t,3)}function fn(e,t){return nt(e,t)+"000"}function mn(e,t){return d(e.getMonth()+1,t,2)}function hn(e,t){return d(e.getMinutes(),t,2)}function gn(e,t){return d(e.getSeconds(),t,2)}function vn(e){var t=e.getDay();return t===0?7:t}function pn(e,t){return d(et.count(j(e)-1,e),t,2)}function rt(e){var t=e.getDay();return t>=4||t===0?ee(e):ee.ceil(e)}function dn(e,t){return e=rt(e),d(ee.count(j(e),e)+(j(e).getDay()===4),t,2)}function yn(e){return e.getDay()}function Tn(e,t){return d(fe.count(j(e)-1,e),t,2)}function Cn(e,t){return d(e.getFullYear()%100,t,2)}function _n(e,t){return e=rt(e),d(e.getFullYear()%100,t,2)}function Mn(e,t){return d(e.getFullYear()%1e4,t,4)}function Un(e,t){var r=e.getDay();return e=r>=4||r===0?ee(e):ee.ceil(e),d(e.getFullYear()%1e4,t,4)}function Dn(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+d(t/60|0,"0",2)+d(t%60,"0",2)}function Le(e,t){return d(e.getUTCDate(),t,2)}function Sn(e,t){return d(e.getUTCHours(),t,2)}function wn(e,t){return d(e.getUTCHours()%12||12,t,2)}function Fn(e,t){return d(1+Me.count(J(e),e),t,3)}function at(e,t){return d(e.getUTCMilliseconds(),t,3)}function kn(e,t){return at(e,t)+"000"}function Yn(e,t){return d(e.getUTCMonth()+1,t,2)}function bn(e,t){return d(e.getUTCMinutes(),t,2)}function Hn(e,t){return d(e.getUTCSeconds(),t,2)}function Wn(e){var t=e.getUTCDay();return t===0?7:t}function Ln(e,t){return d(tt.count(J(e)-1,e),t,2)}function ot(e){var t=e.getUTCDay();return t>=4||t===0?te(e):te.ceil(e)}function In(e,t){return e=ot(e),d(te.count(J(e),e)+(J(e).getUTCDay()===4),t,2)}function Nn(e){return e.getUTCDay()}function On(e,t){return d(me.count(J(e)-1,e),t,2)}function xn(e,t){return d(e.getUTCFullYear()%100,t,2)}function En(e,t){return e=ot(e),d(e.getUTCFullYear()%100,t,2)}function Pn(e,t){return d(e.getUTCFullYear()%1e4,t,4)}function qn(e,t){var r=e.getUTCDay();return e=r>=4||r===0?te(e):te.ceil(e),d(e.getUTCFullYear()%1e4,t,4)}function Vn(){return"+0000"}function Ie(){return"%"}function Ne(e){return+e}function Oe(e){return Math.floor(+e/1e3)}var K,ut;An({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function An(e){return K=Vt(e),ut=K.format,K.parse,K.utcFormat,K.utcParse,K}function xe(e,t,r){const n=e.slice();return n[4]=t[r].item,n[5]=t[r].detail,n[6]=t[r].price,n}function Ee(e){let t,r,n,a=e[4]+"",o,u,l,m,v=(e[5]||"&nbsp;")+"",U,T,f,c,h=e[6]+"",D,x;return{c(){t=S("div"),r=S("div"),n=S("p"),o=R(a),u=P(),l=S("p"),m=new ze(!1),U=P(),T=S("div"),f=S("p"),c=R("$"),D=R(h),x=P(),this.h()},l(M){t=w(M,"DIV",{class:!0});var b=k(t);r=w(b,"DIV",{class:!0});var I=k(r);n=w(I,"P",{class:!0});var E=k(n);o=Q(E,a),E.forEach(y),u=q(I),l=w(I,"P",{class:!0});var se=k(l);m=Re(se,!1),se.forEach(y),I.forEach(y),U=q(b),T=w(b,"DIV",{class:!0});var N=k(T);f=w(N,"P",{class:!0});var G=k(f);c=Q(G,"$"),D=Q(G,h),G.forEach(y),N.forEach(y),x=q(b),b.forEach(y),this.h()},h(){F(n,"class","name svelte-v2oqik"),m.a=null,F(l,"class","detail svelte-v2oqik"),F(r,"class","text svelte-v2oqik"),F(f,"class","price svelte-v2oqik"),F(T,"class","amount"),F(t,"class","item svelte-v2oqik")},m(M,b){O(M,t,b),C(t,r),C(r,n),C(n,o),C(r,u),C(r,l),m.m(v,l),C(t,U),C(t,T),C(T,f),C(f,c),C(f,D),C(t,x)},p(M,b){b&1&&a!==(a=M[4]+"")&&oe(o,a),b&1&&v!==(v=(M[5]||"&nbsp;")+"")&&m.p(v),b&1&&h!==(h=M[6]+"")&&oe(D,h)},d(M){M&&y(t)}}}function Zn(e){let t,r=ce(e[0]),n=[];for(let a=0;a<r.length;a+=1)n[a]=Ee(xe(e,r,a));return{c(){t=S("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){t=w(a,"DIV",{class:!0});var o=k(t);for(let u=0;u<n.length;u+=1)n[u].l(o);o.forEach(y),this.h()},h(){F(t,"class","items svelte-v2oqik"),z(t,"split",e[1]),z(t,"tuck",zn)},m(a,o){O(a,t,o);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null)},p(a,[o]){if(o&1){r=ce(a[0]);let u;for(u=0;u<r.length;u+=1){const l=xe(a,r,u);n[u]?n[u].p(l,o):(n[u]=Ee(l),n[u].c(),n[u].m(t,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=r.length}o&2&&z(t,"split",a[1])},i:ie,o:ie,d(a){a&&y(t),Ze(n,a)}}}let zn=!1;function Rn(e,t,r){let{data:n}=t,{split:a}=t,{hasSides:o}=t;function u(){console.log(n),we(n,l=>{var m;return(m=l.item)==null?void 0:m.length}),we(n,l=>{var m;return(m=l.detail)==null?void 0:m.length})}return e.$$set=l=>{"data"in l&&r(0,n=l.data),"split"in l&&r(1,a=l.split),"hasSides"in l&&r(2,o=l.hasSides)},e.$$.update=()=>{e.$$.dirty&1&&u()},[n,a,o]}class Qn extends ye{constructor(t){super(),Te(this,t,Rn,Zn,de,{data:0,split:1,hasSides:2})}}function Pe(e,t,r){const n=e.slice();return n[3]=t[r].item,n[4]=t[r].price,n}function qe(e){let t,r,n,a=e[3]+"",o,u,l,m,v,U=e[1]?"":`$${e[4]}`,T;return{c(){t=S("div"),r=S("div"),n=S("p"),o=R(a),u=P(),l=S("div"),m=S("p"),v=new ze(!1),T=P(),this.h()},l(f){t=w(f,"DIV",{class:!0});var c=k(t);r=w(c,"DIV",{class:!0});var h=k(r);n=w(h,"P",{class:!0});var D=k(n);o=Q(D,a),D.forEach(y),h.forEach(y),u=q(c),l=w(c,"DIV",{class:!0});var x=k(l);m=w(x,"P",{class:!0});var M=k(m);v=Re(M,!1),M.forEach(y),x.forEach(y),T=q(c),c.forEach(y),this.h()},h(){F(n,"class","name svelte-11vzs7a"),F(r,"class","text"),v.a=null,F(m,"class","price svelte-11vzs7a"),F(l,"class","amount"),F(t,"class","item svelte-11vzs7a")},m(f,c){O(f,t,c),C(t,r),C(r,n),C(n,o),C(t,u),C(t,l),C(l,m),v.m(U,m),C(t,T)},p(f,c){c&1&&a!==(a=f[3]+"")&&oe(o,a),c&3&&U!==(U=f[1]?"":`$${f[4]}`)&&v.p(U)},d(f){f&&y(t)}}}function jn(e){let t,r=ce(e[0]),n=[];for(let a=0;a<r.length;a+=1)n[a]=qe(Pe(e,r,a));return{c(){t=S("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){t=w(a,"DIV",{class:!0});var o=k(t);for(let u=0;u<n.length;u+=1)n[u].l(o);o.forEach(y),this.h()},h(){F(t,"class","items svelte-11vzs7a"),z(t,"split",e[2])},m(a,o){O(a,t,o);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null)},p(a,[o]){if(o&3){r=ce(a[0]);let u;for(u=0;u<r.length;u+=1){const l=Pe(a,r,u);n[u]?n[u].p(l,o):(n[u]=qe(l),n[u].c(),n[u].m(t,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=r.length}o&4&&z(t,"split",a[2])},i:ie,o:ie,d(a){a&&y(t),Ze(n,a)}}}function Jn(e,t,r){let{data:n}=t,{uniform:a}=t,{split:o}=t;return e.$$set=u=>{"data"in u&&r(0,n=u.data),"uniform"in u&&r(1,a=u.uniform),"split"in u&&r(2,o=u.split)},[n,a,o]}class Xn extends ye{constructor(t){super(),Te(this,t,Jn,jn,de,{data:0,uniform:1,split:2})}}function Bn(e){const n=Ft(Yt).url.search.split("&").find(a=>a.includes(`${e}=`));if(n)return n.split("=")[1]}function Ve(e){let t,r,n,a,o,u="No<br/>Comply<br/>Foods",l,m,v,U,T;m=new Qn({props:{data:e[3],split:e[7],hasSides:e[2]}});let f=e[2]&&Ae(e);return{c(){t=S("p"),r=R(e[6]),n=P(),a=S("section"),o=S("h1"),o.innerHTML=u,l=P(),je(m.$$.fragment),v=P(),f&&f.c(),U=Se(),this.h()},l(c){t=w(c,"P",{class:!0});var h=k(t);r=Q(h,e[6]),h.forEach(y),n=q(c),a=w(c,"SECTION",{class:!0});var D=k(a);o=w(D,"H1",{class:!0,"data-svelte-h":!0}),Je(o)!=="svelte-u6ggkq"&&(o.innerHTML=u),l=q(D),Xe(m.$$.fragment,D),D.forEach(y),v=q(c),f&&f.l(c),U=Se(),this.h()},h(){F(t,"class","updated svelte-1303hx2"),F(o,"class","svelte-1303hx2"),F(a,"class","mains svelte-1303hx2")},m(c,h){O(c,t,h),C(t,r),O(c,n,h),O(c,a,h),C(a,o),C(a,l),Be(m,a,null),O(c,v,h),f&&f.m(c,h),O(c,U,h),T=!0},p(c,h){(!T||h&64)&&oe(r,c[6]);const D={};h&8&&(D.data=c[3]),h&128&&(D.split=c[7]),h&4&&(D.hasSides=c[2]),m.$set(D),c[2]?f?(f.p(c,h),h&4&&A(f,1)):(f=Ae(c),f.c(),A(f,1),f.m(U.parentNode,U)):f&&(Ge(),$(f,1,1,()=>{f=null}),Qe())},i(c){T||(A(m.$$.fragment,c),A(f),T=!0)},o(c){$(m.$$.fragment,c),$(f),T=!1},d(c){c&&(y(t),y(n),y(a),y(v),y(U)),Ke(m),f&&f.d(c)}}}function Ae(e){let t,r,n,a=e[4]?` $${e[5]}`:"",o,u,l,m,v,U="No<br/>Comply<br/>Foods",T;return l=new Xn({props:{data:e[1],uniform:e[4],split:e[7]}}),{c(){t=S("section"),r=S("p"),n=R("Sides"),o=R(a),u=P(),je(l.$$.fragment),m=P(),v=S("h1"),v.innerHTML=U,this.h()},l(f){t=w(f,"SECTION",{class:!0});var c=k(t);r=w(c,"P",{class:!0});var h=k(r);n=Q(h,"Sides"),o=Q(h,a),h.forEach(y),u=q(c),Xe(l.$$.fragment,c),m=q(c),v=w(c,"H1",{class:!0,"data-svelte-h":!0}),Je(v)!=="svelte-u6ggkq"&&(v.innerHTML=U),c.forEach(y),this.h()},h(){F(r,"class","title svelte-1303hx2"),F(v,"class","svelte-1303hx2"),F(t,"class","sides svelte-1303hx2")},m(f,c){O(f,t,c),C(t,r),C(r,n),C(r,o),C(t,u),Be(l,t,null),C(t,m),C(t,v),T=!0},p(f,c){(!T||c&48)&&a!==(a=f[4]?` $${f[5]}`:"")&&oe(o,a);const h={};c&2&&(h.data=f[1]),c&16&&(h.uniform=f[4]),c&128&&(h.split=f[7]),l.$set(h)},i(f){T||(A(l.$$.fragment,f),T=!0)},o(f){$(l.$$.fragment,f),T=!1},d(f){f&&y(t),Ke(l)}}}function Gn(e){let t,r,n=e[0]&&Ve(e);return{c(){t=S("div"),n&&n.c(),this.h()},l(a){t=w(a,"DIV",{style:!0,class:!0});var o=k(t);n&&n.l(o),o.forEach(y),this.h()},h(){De(t,"--side-width",e[8]),F(t,"class","svelte-1303hx2"),z(t,"split",e[7])},m(a,o){O(a,t,o),n&&n.m(t,null),r=!0},p(a,[o]){a[0]?n?(n.p(a,o),o&1&&A(n,1)):(n=Ve(a),n.c(),A(n,1),n.m(t,null)):n&&(Ge(),$(n,1,1,()=>{n=null}),Qe()),(!r||o&256)&&De(t,"--side-width",a[8]),(!r||o&128)&&z(t,"split",a[7])},i(a){r||(A(n),r=!0)},o(a){$(n),r=!1},d(a){a&&y(t),n&&n.d()}}}function Kn(e,t,r){let n,a,o,u=[],l=[],m=!1,v,U,T;async function f(){try{const h=await(await fetch(`https://data.nocomplyfoods.com/menu.json?version=${Date.now()}`)).json(),D=h.items.filter(M=>M.price&&M.item);r(0,a=D.length>0),r(3,u=D.filter(M=>M.section==="main")),u.sort((M,b)=>b.price-M.price),r(1,l=D.filter(M=>M.section==="side")),r(2,o=l.length>0),o&&(r(5,v=l[0].price),r(4,m=l.every(M=>M.price===v)));const x=new Date(h.updated);r(6,U=ut("%B %d, %I:%M %p")(x))}catch(c){console.log(c)}finally{setTimeout(f,3e4)}}return kt(async()=>{r(7,T=Bn("split")),await f()}),e.$$.update=()=>{e.$$.dirty&3&&r(8,n=a?`${Math.floor(1/Math.ceil(l.length/2)*100)}%`:"none")},[a,l,o,u,m,v,U,T,n]}class rr extends ye{constructor(t){super(),Te(this,t,Kn,Gn,de,{})}}export{rr as component};
