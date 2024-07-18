import{s as F,q,n as D,c as P,u as Q,v as W,w as X,x as Y}from"../chunks/scheduler.C5382k6v.js";import{S as J,i as K,e as v,s as $,c as h,f as x,a as z,l as V,d as m,m as t,g as T,h as r,w as Z,x as ee,y as te,q as U,o as N,z as ae}from"../chunks/index.CxvEh2yJ.js";import{p as se}from"../chunks/stores.N5pv2t99.js";import{b as le}from"../chunks/paths.CuR15rcF.js";const ce=!0,be=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce},Symbol.toStringTag,{value:"Module"})),re="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%3e%3cpath%20fill='%230078d4'%20d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5%20V37z'%3e%3c/path%3e%3cpath%20d='M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364%20c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274%20L37,37H30z%20M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479%20C18,16.523,16.521,18,14.485,18H18v19H11z'%20opacity='.05'%3e%3c/path%3e%3cpath%20d='M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677%20c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638%20c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z%20M11.5,36.5v-18h6v18H11.5z%20M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001%20c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z'%20opacity='.07'%3e%3c/path%3e%3cpath%20fill='%23fff'%20d='M12,19h5v17h-5V19z%20M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12%20c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z%20M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698%20c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19%20c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z'%3e%3c/path%3e%3c/svg%3e",ne="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20x='0px'%20y='0px'%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%3e%3cpath%20d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051%20c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526%20c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769%20c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098%20c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9%20c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594%20c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734%20c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'%3e%3c/path%3e%3c/svg%3e",ie=""+new URL("../assets/lefthand.lImh6aeS.webp",import.meta.url).href,oe=""+new URL("../assets/righthand.B7pEgJI9.webp",import.meta.url).href;function ue(p){let e,o,n,a,b,w,d,L,l,f,i=`<a href="${le}/" class="svelte-7cbdtv">🏠 Home</a>`,s,c,H='<a href="#blogs" class="svelte-7cbdtv">📝 Blogs</a>',E,y,G=`<img src="${ne}" alt="" class="svelte-7cbdtv"/> <a href="https://github.com/kariyum" target="_blank" class="svelte-7cbdtv">Github</a>`,B,_,I,O,S,C,R="LinkedIn",k;return{c(){e=v("img"),n=$(),a=v("img"),w=$(),d=v("header"),L=v("nav"),l=v("ul"),f=v("li"),f.innerHTML=i,s=$(),c=v("li"),c.innerHTML=H,E=$(),y=v("li"),y.innerHTML=G,B=$(),_=v("li"),I=v("img"),S=$(),C=v("a"),C.textContent=R,this.h()},l(u){e=h(u,"IMG",{class:!0,src:!0,alt:!0}),n=x(u),a=h(u,"IMG",{class:!0,src:!0,alt:!0}),w=x(u),d=h(u,"HEADER",{class:!0});var g=z(d);L=h(g,"NAV",{});var j=z(L);l=h(j,"UL",{class:!0});var M=z(l);f=h(M,"LI",{class:!0,"data-svelte-h":!0}),V(f)!=="svelte-g8lvjn"&&(f.innerHTML=i),s=x(M),c=h(M,"LI",{class:!0,"data-svelte-h":!0}),V(c)!=="svelte-dm426p"&&(c.innerHTML=H),E=x(M),y=h(M,"LI",{class:!0,"data-svelte-h":!0}),V(y)!=="svelte-ceb8as"&&(y.innerHTML=G),B=x(M),_=h(M,"LI",{"aria-current":!0,class:!0});var A=z(_);I=h(A,"IMG",{src:!0,alt:!0,class:!0}),S=x(A),C=h(A,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),V(C)!=="svelte-1h0wsup"&&(C.textContent=R),A.forEach(m),M.forEach(m),j.forEach(m),g.forEach(m),this.h()},h(){t(e,"class","righthand svelte-7cbdtv"),q(e.src,o=oe)||t(e,"src",o),t(e,"alt",""),t(a,"class","lefthand svelte-7cbdtv"),q(a.src,b=ie)||t(a,"src",b),t(a,"alt",""),t(f,"class","svelte-7cbdtv"),t(c,"class","svelte-7cbdtv"),t(y,"class","svelte-7cbdtv"),q(I.src,O=re)||t(I,"src",O),t(I,"alt",""),t(I,"class","svelte-7cbdtv"),t(C,"href","https://www.linkedin.com/in/karim-ben-amara-01282a1ba/"),t(C,"target","_blank"),t(C,"class","svelte-7cbdtv"),t(_,"aria-current",k=p[0].url.pathname==="/about"?"page":void 0),t(_,"class","svelte-7cbdtv"),t(l,"class","svelte-7cbdtv"),t(d,"class","svelte-7cbdtv")},m(u,g){T(u,e,g),T(u,n,g),T(u,a,g),T(u,w,g),T(u,d,g),r(d,L),r(L,l),r(l,f),r(l,s),r(l,c),r(l,E),r(l,y),r(l,B),r(l,_),r(_,I),r(_,S),r(_,C)},p(u,[g]){g&1&&k!==(k=u[0].url.pathname==="/about"?"page":void 0)&&t(_,"aria-current",k)},i:D,o:D,d(u){u&&(m(e),m(n),m(a),m(w),m(d))}}}function ve(p,e,o){let n;return P(p,se,a=>o(0,n=a)),[n]}class he extends J{constructor(e){super(),K(this,e,ve,ue,F,{})}}function de(p){let e,o,n,a,b,w,d,L="<p>Karim Ben Amara</p>",l;a=new he({});const f=p[1].default,i=Q(f,p,p[0],null);return{c(){e=v("div"),o=v("main"),n=v("div"),Z(a.$$.fragment),b=$(),i&&i.c(),w=$(),d=v("footer"),d.innerHTML=L,this.h()},l(s){e=h(s,"DIV",{class:!0});var c=z(e);o=h(c,"MAIN",{class:!0});var H=z(o);n=h(H,"DIV",{class:!0});var E=z(n);ee(a.$$.fragment,E),E.forEach(m),b=x(H),i&&i.l(H),H.forEach(m),w=x(c),d=h(c,"FOOTER",{"data-svelte-h":!0}),V(d)!=="svelte-9159d1"&&(d.innerHTML=L),c.forEach(m),this.h()},h(){t(n,"class","header svelte-1l5sea3"),t(o,"class","svelte-1l5sea3"),t(e,"class","app")},m(s,c){T(s,e,c),r(e,o),r(o,n),te(a,n,null),r(o,b),i&&i.m(o,null),r(e,w),r(e,d),l=!0},p(s,[c]){i&&i.p&&(!l||c&1)&&W(i,f,s,s[0],l?Y(f,s[0],c,null):X(s[0]),null)},i(s){l||(U(a.$$.fragment,s),U(i,s),l=!0)},o(s){N(a.$$.fragment,s),N(i,s),l=!1},d(s){s&&m(e),ae(a),i&&i.d(s)}}}function me(p,e,o){let{$$slots:n={},$$scope:a}=e;return p.$$set=b=>{"$$scope"in b&&o(0,a=b.$$scope)},[a,n]}class Ce extends J{constructor(e){super(),K(this,e,me,de,F,{})}}export{Ce as component,be as universal};
