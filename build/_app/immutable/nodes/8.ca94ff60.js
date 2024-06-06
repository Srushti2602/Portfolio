import{s as Y,b as k,e as p,h as Z,d as _,f as I,c as g,j as D,g as A,a as f,i as T,l as o,n as B,q as X,t as w,k as H}from"../chunks/scheduler.7542c70c.js";import{e as q}from"../chunks/each.e59479a4.js";import{S as $,i as ee}from"../chunks/index.33c7ca0f.js";import{p as N}from"../chunks/Projects.633f198a.js";function O(d,e,a){const t=d.slice();return t[0]=e[a],t}function Q(d,e,a){const t=d.slice();return t[3]=e[a],t}function R(d){let e,a=d[3]+"",t;return{c(){e=p("div"),t=w(a),this.h()},l(v){e=g(v,"DIV",{class:!0});var y=D(e);t=H(y,a),y.forEach(_),this.h()},h(){f(e,"class","svelte-10h0yr1")},m(v,y){T(v,e,y),o(e,t)},p:B,d(v){v&&_(e)}}}function U(d){let e,a,t,v=d[0].title+"",y,b,u,V,x,j,l,r=d[0].description+"",E,s,c,C,F="Project url =>",M,P=q(d[0].technologies),h=[];for(let i=0;i<P.length;i+=1)h[i]=R(Q(d,P,i));return{c(){e=p("div"),a=p("div"),t=p("h2"),y=w(v),b=k(),u=p("div"),V=w(`Technologies:
                        `),x=p("div");for(let i=0;i<h.length;i+=1)h[i].c();j=k(),l=p("p"),E=w(r),s=k(),c=p("a"),C=p("div"),C.textContent=F,M=k(),this.h()},l(i){e=g(i,"DIV",{class:!0});var m=D(e);a=g(m,"DIV",{class:!0});var n=D(a);t=g(n,"H2",{class:!0});var L=D(t);y=H(L,v),L.forEach(_),b=I(n),u=g(n,"DIV",{class:!0});var S=D(u);V=H(S,`Technologies:
                        `),x=g(S,"DIV",{class:!0});var G=D(x);for(let z=0;z<h.length;z+=1)h[z].l(G);G.forEach(_),S.forEach(_),n.forEach(_),j=I(m),l=g(m,"P",{class:!0});var J=D(l);E=H(J,r),J.forEach(_),s=I(m),c=g(m,"A",{href:!0,target:!0,rel:!0,class:!0});var K=D(c);C=g(K,"DIV",{class:!0,"data-svelte-h":!0}),A(C)!=="svelte-1izmg24"&&(C.textContent=F),K.forEach(_),M=I(m),m.forEach(_),this.h()},h(){f(t,"class","svelte-10h0yr1"),f(x,"class","techs svelte-10h0yr1"),f(u,"class","techsContainer svelte-10h0yr1"),f(a,"class","header"),f(l,"class","svelte-10h0yr1"),f(C,"class","button svelte-10h0yr1"),f(c,"href",d[0].url),f(c,"target","_blank"),f(c,"rel","noreferrer"),f(c,"class","svelte-10h0yr1"),f(e,"class","project svelte-10h0yr1")},m(i,m){T(i,e,m),o(e,a),o(a,t),o(t,y),o(a,b),o(a,u),o(u,V),o(u,x);for(let n=0;n<h.length;n+=1)h[n]&&h[n].m(x,null);o(e,j),o(e,l),o(l,E),o(e,s),o(e,c),o(c,C),o(e,M)},p(i,m){if(m&0){P=q(i[0].technologies);let n;for(n=0;n<P.length;n+=1){const L=Q(i,P,n);h[n]?h[n].p(L,m):(h[n]=R(L),h[n].c(),h[n].m(x,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=P.length}},d(i){i&&_(e),X(h,i)}}}function te(d){let e,a,t,v,y="Deep Learning Projects",b,u,V=`My interest in machine learning and deep learning, coupled with a desire to explore high-performance computing (HPC), architectures, and large language models (LLMs), has driven me to create a series of innovative projects.
            These projects showcase my knowledge and passion in these cutting-edge fields.`,x,j=q(N.filter(W)),l=[];for(let r=0;r<j.length;r+=1)l[r]=U(O(d,j,r));return{c(){e=k(),a=p("div"),t=p("div"),v=p("h1"),v.textContent=y,b=k(),u=p("p"),u.textContent=V,x=k();for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){Z("svelte-byrd0v",document.head).forEach(_),e=I(r),a=g(r,"DIV",{class:!0});var s=D(a);t=g(s,"DIV",{class:!0});var c=D(t);v=g(c,"H1",{class:!0,"data-svelte-h":!0}),A(v)!=="svelte-166pm9u"&&(v.textContent=y),b=I(c),u=g(c,"P",{class:!0,"data-svelte-h":!0}),A(u)!=="svelte-13c53xs"&&(u.textContent=V),x=I(c);for(let C=0;C<l.length;C+=1)l[C].l(c);c.forEach(_),s.forEach(_),this.h()},h(){document.title="Deep Learning Projects",f(v,"class","svelte-10h0yr1"),f(u,"class","note justified svelte-10h0yr1"),f(t,"class","projects svelte-10h0yr1"),f(a,"class","projectContainer svelte-10h0yr1")},m(r,E){T(r,e,E),T(r,a,E),o(a,t),o(t,v),o(t,b),o(t,u),o(t,x);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null)},p(r,[E]){if(E&0){j=q(N.filter(W));let s;for(s=0;s<j.length;s+=1){const c=O(r,j,s);l[s]?l[s].p(c,E):(l[s]=U(c),l[s].c(),l[s].m(t,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=j.length}},i:B,o:B,d(r){r&&(_(e),_(a)),X(l,r)}}}const W=d=>d.category==="deep-learning";class ne extends ${constructor(e){super(),ee(this,e,null,te,Y,{})}}export{ne as component};
