(this["webpackJsonpto-do-react"]=this["webpackJsonpto-do-react"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(7),s=n.n(o),a=(n(13),n(8)),r=n(5),u=n(6),d=n(0),j=function(t){var e=t.setTasks,n=t.t,c=t.tasks;return Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"checkbox",onClick:function(){return function(t){e(c.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))}(n)}}),Object(d.jsx)("span",{className:n.completed?"red":"blue",children:n.name}),Object(d.jsxs)("button",{onClick:function(){!function(t){e(c.filter((function(e){return e.id!==t.id})))}(n)},children:[Object(d.jsx)("i",{class:"fas fa-trash-alt"})," "]})]},n.id)},l=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)([]),s=Object(r.a)(o,2),u=s[0],l=s[1];return Object(d.jsxs)("div",{className:"main-div",children:[Object(d.jsx)("input",{type:"text",placeholder:"Add todo",onChange:function(t){return i(t.target.value)},value:n}),Object(d.jsx)("button",{onClick:function(){l([].concat(Object(a.a)(u),[{name:n,completed:!1,id:1e3*Math.random()}])),i(""),console.log(n)},children:"Add task"}),Object(d.jsx)("ul",{children:u.map((function(t){return Object(d.jsx)(j,{setTasks:l,t:t,tasks:u})}))})]})};n(15);var b=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(l,{})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.0977d03f.chunk.js.map