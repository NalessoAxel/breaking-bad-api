(this["webpackJsonpbreaking-badge"]=this["webpackJsonpbreaking-badge"]||[]).push([[0],{40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(14),s=c.n(a),i=c(5),j=c.n(i),o=c(15),d=c(3),b=c(16),u=c.n(b),l=(c(40),c.p+"static/media/logo.e6ecab44.png"),h=c(0),O=function(){return Object(h.jsx)("header",{className:"center",children:Object(h.jsx)("img",{src:l,alt:""})})},x=function(e){var t=e.item;return Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card-inner",children:[Object(h.jsx)("div",{className:"card-front",children:Object(h.jsx)("img",{src:t.img,alt:""})}),Object(h.jsxs)("div",{className:"card-back",children:[Object(h.jsx)("h1",{children:t.name}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},m=function(e){var t=e.items;return e.isLoading?Object(h.jsx)("h1",{children:"Loading..."}):Object(h.jsx)("section",{className:"cards",children:t.map((function(e){return Object(h.jsx)(x,{item:e},e.char_id)}))})},g=function(e){var t=e.getQuery,c=Object(n.useState)(""),r=Object(d.a)(c,2),a=r[0],s=r[1];return Object(h.jsx)("section",{className:"search",children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"search characters",value:a,onChange:function(e){return c=e.target.value,s(c),void t(c);var c},autoFocus:!0})})})},f=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(d.a)(a,2),i=s[0],b=s[1],l=Object(n.useState)(""),x=Object(d.a)(l,2),f=x[0],p=x[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://www.breakingbadapi.com/api/characters?name=".concat(f));case 2:t=e.sent,console.log(t.data),r(t.data),b(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{}),Object(h.jsx)(g,{getQuery:function(e){return p(e)}}),Object(h.jsx)(m,{isLoading:i,items:c})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.ab4ebf20.chunk.js.map