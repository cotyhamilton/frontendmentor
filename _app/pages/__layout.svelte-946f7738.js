import{F as h,S as v,i as y,s as $,G as k,e as f,t as S,c as p,a as d,h as j,d as c,b as u,g as _,H as b,k as q,l as m,m as w,I as C,J as E,K as I,q as A,o as D,L as F}from"../chunks/vendor-8ee07fe2.js";const G=()=>{const a=h("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},H={subscribe(a){return G().page.subscribe(a)}};function g(a){let i,l,r;return{c(){i=f("div"),l=f("a"),r=S("\u{1F3E1} home"),this.h()},l(n){i=p(n,"DIV",{class:!0});var t=d(i);l=p(t,"A",{href:!0,class:!0});var e=d(l);r=j(e,"\u{1F3E1} home"),e.forEach(c),t.forEach(c),this.h()},h(){u(l,"href","/"),u(l,"class","svelte-1c0we2j"),u(i,"class","home-button svelte-1c0we2j")},m(n,t){_(n,i,t),b(i,l),b(l,r)},d(n){n&&c(i)}}}function J(a){let i,l,r;const n=a[2].default,t=k(n,a,a[1],null);let e=a[0].url.pathname!=="/"&&g();return{c(){t&&t.c(),i=q(),e&&e.c(),l=m()},l(s){t&&t.l(s),i=w(s),e&&e.l(s),l=m()},m(s,o){t&&t.m(s,o),_(s,i,o),e&&e.m(s,o),_(s,l,o),r=!0},p(s,[o]){t&&t.p&&(!r||o&2)&&C(t,n,s,s[1],r?I(n,s[1],o,null):E(s[1]),null),s[0].url.pathname!=="/"?e||(e=g(),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i(s){r||(A(t,s),r=!0)},o(s){D(t,s),r=!1},d(s){t&&t.d(s),s&&c(i),e&&e.d(s),s&&c(l)}}}function K(a,i,l){let r;F(a,H,e=>l(0,r=e));let{$$slots:n={},$$scope:t}=i;return a.$$set=e=>{"$$scope"in e&&l(1,t=e.$$scope)},[r,t,n]}class N extends v{constructor(i){super();y(this,i,K,J,$,{})}}export{N as default};