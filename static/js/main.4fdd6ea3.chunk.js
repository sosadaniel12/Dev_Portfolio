(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c(3),a=c(1),i=c(0),l=Object(a.createContext)(),r=function(e){var t=e.children,c=Object(a.useState)("light"),n=Object(s.a)(c,2),r=n[0],o=n[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://sosadaniel12.github.io/Dev_Portfolio",j="DS.",h="Daniel Sosa",d="Full Stack Developer",b="Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of the process with ease. Collaborative team player with excellent technical abilities.",u="https://docs.google.com/document/d/1c5QxO37uOoZKw-w4S7e0juFNFwHDhLNKHkFuAsdCHww/edit?usp=sharing",m={linkedin:"https://www.linkedin.com/in/daniel-sosa-a940381b9/",github:"https://github.com/sosadaniel12"},O=[{name:"Splash Chat",description:"User are to able to log in and chat with their friends around the world.",stack:["CSS","MongoDB","React","Socket.io"],sourceCode:"https://github.com/sosadaniel12/Splash_Chat_io",livePreview:"https://safe-stream-65170.herokuapp.com/"},{name:"MERN E-Commerce",description:"An ECommerce site built with the MERN stack. Users can add products to cart and use Stripe for payment.",stack:["GraphQL","MongoDB","React","Express"],sourceCode:"https://github.com/sosadaniel12/MERN-E-Commerce",livePreview:"https://salty-fortress-89051.herokuapp.com/"},{name:"Movie Finder",description:"Application that allows users to search for movies and shows. ",stack:["HTML","CSS","Javascript","JQuery"],sourceCode:"https://github.com/sosadaniel12/movieFinder",livePreview:"https://sosadaniel12.github.io/movieFinder/"}],x=["HTML","CSS","JavaScript","MongoDB","React","Redux","SASS","CSS","Git","GraphQL","Jest","MySQL"],p="danielsosa2121@gmail.com",f=c(17),v=c.n(f),k=c(15),g=c.n(k),N=c(19),_=c.n(N),w=c(18),S=c.n(w),C=(c(28),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(a.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,x.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,p?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(i.jsx)(g.a,{}):Object(i.jsx)(v.a,{})}),Object(i.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(S.a,{}):Object(i.jsx)(_.a,{})})]})}),E=(c(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(C,{})]})}),y=c(7),M=c.n(y),F=c(12),D=c.n(F),L=(c(33),function(){var e=h,t=d,c=b,n=u,s=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:c&&c}),Object(i.jsxs)("div",{className:"about__contact center",children:[n&&Object(i.jsx)("a",{href:n,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(M.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(D.a,{})})]})]})]})}),P=c(8),R=c.n(P),H=c(20),J=c.n(H),A=(c(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},R()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(M.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(J.a,{})})]})}),Q=(c(36),function(){return O.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(i.jsx)(A,{project:e},R()())}))})]}):null}),B=(c(37),function(){return x.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},R()())}))})]}):null}),T=c(21),z=c.n(T),G=(c(38),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(z.a,{fontSize:"large"})})}):null}),I=(c(39),function(){return p?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(p),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(c(40),function(){var e=m;return Object(i.jsx)("footer",{className:"footer",children:e&&Object(i.jsxs)(i.Fragment,{children:[e.github&&Object(i.jsx)("a",{href:e.github,"aria-label":"github",children:Object(i.jsx)(M.a,{fontSize:"large",className:"icon"})}),e.linkedin&&Object(i.jsx)("a",{href:e.linkedin,"aria-label":"linkedin",children:Object(i.jsx)(D.a,{fontSize:"large",className:"icon"})})]})})}),q=(c(41),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(E,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(L,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(B,{}),Object(i.jsx)(I,{})]}),Object(i.jsx)(G,{}),Object(i.jsx)(K,{})]})});c(42);Object(n.render)(Object(i.jsx)(r,{children:Object(i.jsx)(q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4fdd6ea3.chunk.js.map