(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(8),a=c.n(n),l=(c(7),c(6)),i=c(9),r=c(2),j=(c(14),c(15),c(16),c(0)),o=function(e){return console.log(e.list),Object(j.jsxs)("div",{className:"user-list",children:[Object(j.jsx)("ul",{className:"list-unstyled",children:Object(j.jsxs)("li",{children:[e.list.name," ",e.list.age," years old"]})}),Object(j.jsx)("p",{})]})},u=(c(18),function(e){var t=function(){e.onClose()};return Object(j.jsx)("div",{className:"backdrop",onClick:t,children:Object(j.jsx)("div",{className:"alert",children:Object(j.jsxs)("div",{className:"alert-child",children:[Object(j.jsx)("p",{className:"message",children:e.message}),Object(j.jsx)("button",{className:"btn",onClick:t,children:"Close"})]})})})}),d=function(e){var t=Object(s.useState)(""),c=Object(r.a)(t,2),n=c[0],a=c[1],l=Object(s.useState)(""),i=Object(r.a)(l,2),o=i[0],d=i[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),m=O[0],h=O[1],f=Object(s.useState)(""),x=Object(r.a)(f,2),v=x[0],g=x[1];return Object(j.jsxs)("div",{className:"userform",children:[Object(j.jsxs)("form",{className:"form-controls",onSubmit:function(t){if(t.preventDefault(),+o<0&&""!==n)h(!0),g("Please enter positive value for age"),a(""),d("");else if(""===n&&""===o)h(!0),g("Please enter both fields"),a(""),d("");else{var c={name:n,age:o};h(!1),g("Added sudcesfully"),a(""),d(""),e.onAdd(c)}},children:[Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("label",{htmlFor:"name",children:"User Name"}),Object(j.jsx)("input",{type:"text",id:"name",onChange:function(e){return a(e.target.value)},value:n})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"age",children:"Age"}),Object(j.jsx)("input",{type:"number",id:"age",onChange:function(e){return d(e.target.value)},value:o})]}),Object(j.jsx)("button",{className:"btn btn-add",children:"Add User"})]}),m?Object(j.jsx)(u,{message:v,alert:m,onClose:function(){h(!1)}}):""]})},b=function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(j.jsxs)("div",{className:"user",children:[Object(j.jsx)("h3",{children:"Add Your Info"}),Object(j.jsx)(d,{onAdd:function(e){return function(e){a([].concat(Object(i.a)(n),[Object(l.a)(Object(l.a)({},e),{},{id:Math.random().toString()})])),console.log("list is",n)}(e)}}),n.map((function(e){return Object(j.jsx)(o,{list:e},e.name)}))]})};var O=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(b,{})})};a.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.93afcd71.chunk.js.map