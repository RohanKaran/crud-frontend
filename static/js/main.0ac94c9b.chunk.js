(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(t,e,a){},56:function(t,e,a){},80:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),o=(a(56),a(3)),i=(a(38),a(15)),d=a.n(i),l=a(17),j=a.n(l),b=a(27),u=a(48),p=a(87),x=a(86),h=a(88),m=a(16),f=a(1);var O=function(t){var e=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("https://crud-rk.herokuapp.com/api/delete-todo/".concat(e)).then((function(t){return console.log(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],s=c[1];return Object(f.jsxs)("div",{align:"right",style:{"font-family":"Segoe UI"},children:[Object(f.jsx)("span",{className:"float-start text-break",style:{"padding-top":"7px","font-family":"lato","font-size":"17px","word-wrap":"break-word"},children:t.todo.title}),Object(f.jsx)(u.a,{onClick:function(){return s(!r)},"aria-controls":"example-collapse-text","aria-expanded":r,className:"mx-2",variant:"outline-info",style:{borderRadius:"100px"},children:Object(f.jsx)(m.a,{style:{"padding-bottom":"3px"}})}),Object(f.jsxs)(p.a,{as:x.a,className:"mx-1",children:[Object(f.jsx)(p.a.Toggle,{variant:"outline-primary"}),Object(f.jsx)(p.a.Menu,{align:"end",children:Object(f.jsxs)("div",{align:"right",children:[Object(f.jsxs)(p.a.Item,{href:"/crud-frontend/update",children:[Object(f.jsx)("span",{style:{float:"left"},children:"Update"})," ",Object(f.jsx)(m.b,{style:{"padding-bottom":"3px"},className:"link-warning"})]}),Object(f.jsxs)(p.a.Item,{onClick:function(){return e(t.todo.nanoid)},style:{align:"right"},children:[Object(f.jsx)("span",{style:{float:"left"},children:"Delete"}),Object(f.jsx)(m.d,{style:{"padding-bottom":"3px"},className:"link-danger"})]})]})})]}),Object(f.jsx)(h.a,{in:r,children:Object(f.jsxs)("div",{id:"example-collapse-text",className:"card-body ",style:{"word-wrap":"break-word"},align:"left",children:[Object(f.jsx)("span",{style:{"font-family":"lato","font-size":"16px"},children:"Title :"}),Object(f.jsx)("br",{}),t.todo.title,Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:{"font-family":"lato","font-size":"16px"},children:"Description :"}),Object(f.jsx)("br",{}),t.todo.description,Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:{"font-family":"lato","font-size":"16px"},children:"Added on :"}),Object(f.jsx)("br",{}),t.todo.addedDT,Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:{"font-family":"lato","font-size":"16px"},children:"Last updated on :"}),Object(f.jsx)("br",{}),t.todo.updatedDT]})}),Object(f.jsx)("hr",{})]})};function y(t){return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:t.todoList.map((function(t){return Object(f.jsx)(O,{todo:t})}))})})}var g=a(33),w=a(89);var v=function(){var t=Object(n.useState)([{}]),e=Object(o.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),p=b[0],x=b[1];return Object(n.useEffect)((function(){d.a.get("https://crud-rk.herokuapp.com/api/get-todo").then((function(t){c(t.data)}))})),Object(f.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(f.jsxs)("div",{className:"card-body list-group-item",children:[Object(f.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Add Your Task"}),Object(f.jsxs)(w.a,{align:"left",children:[Object(f.jsxs)(w.a.Group,{className:"mb-3",controlId:"title",children:[Object(f.jsx)(w.a.Label,{children:"Title"}),Object(f.jsx)(w.a.Control,{required:!0,type:"text",onChange:function(t){return l(t.target.value)}}),Object(f.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(f.jsx)(w.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(w.a.Group,{className:"mb-4",controlId:"desc",children:[Object(f.jsx)(w.a.Label,{children:"Description"}),Object(f.jsx)(w.a.Control,{as:"textarea",rows:4,onChange:function(t){return x(t.target.value)}})]})]}),Object(f.jsxs)(u.a,{className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},onClick:function(){d.a.post("https://crud-rk.herokuapp.com/api/add-todo/",{nanoid:Object(g.a)(),title:i,description:p,addedDT:Date(),updatedDT:Date()}).then((function(t){return console.log(t)}))},disabled:""===i.trim(),children:["Add ",Object(f.jsx)(m.c,{style:{"padding-bottom":"3.5px"}})]}),Object(f.jsx)("h5",{className:"card text-white bg-dark mb-3",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Your Tasks"}),Object(f.jsx)("div",{className:"justify-content-start align-content-start",children:Object(f.jsx)(y,{todoList:a})})]})})},k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),r(t),s(t)}))},N=(a(79),a(6));var C=function(){var t=Object(n.useState)({}),e=Object(o.a)(t,2),a=e[0],c=e[1],r=Object(N.g)().nanoid,s=function(){var t=Object(b.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://crud-rk.herokuapp.com/api/get-todo/".concat(r));case 2:e=t.sent,c(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){s()}),[]);var i=Object(n.useState)("ojef-=-39uaenflenfaw?:{/"),l=Object(o.a)(i,2),p=l[0],x=l[1],h=Object(n.useState)("q309pjdAA()&#:woau!@"),O=Object(o.a)(h,2),y=O[0],v=O[1],k=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"ojef-=-39uaenflenfaw?:{/"===p&&(p=a.title),"q309pjdAA()&#:woau!@"===y&&(y=a.description),t.next=4,d.a.put("https://crud-rk.herokuapp.com/api/update-todo/".concat(e),{nanoid:Object(g.a)(),title:p,description:y,updatedDT:Date()}).then((function(t){return console.log(t.data)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(f.jsxs)("div",{className:"card-body list-group-item",children:[Object(f.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Update Your Task"}),Object(f.jsxs)(w.a,{children:[Object(f.jsxs)(w.a.Group,{className:"mb-3",controlId:"title",align:"left",children:[Object(f.jsx)(w.a.Label,{children:"Title"}),Object(f.jsx)(w.a.Control,{required:!0,type:"text",onChange:function(t){return x(t.target.value)},defaultValue:a.title}),Object(f.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(f.jsx)(w.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(w.a.Group,{className:"mb-4",controlId:"desc",align:"left",children:[Object(f.jsx)(w.a.Label,{children:"Description"}),Object(f.jsx)(w.a.Control,{as:"textarea",rows:4,onChange:function(t){return v(t.target.value)},defaultValue:a.description})]}),Object(f.jsxs)(u.a,{onClick:function(){return k(r)},href:"/crud-frontend",type:"submit",className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},disabled:"ojef-=-39uaenflenfaw?:{/"===p&&"q309pjdAA()&#:woau!@"===y,children:["Update ",Object(f.jsx)(m.c,{style:{"padding-bottom":"3.5px"}})]})]})]})})},T=a(36);s.a.render(Object(f.jsxs)(c.a.StrictMode,{children:[" ",Object(f.jsxs)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:[Object(f.jsx)("br",{}),Object(f.jsx)("h1",{className:"card-body text-white bg-primary mb-4",children:"Task Manager"})]}),Object(f.jsx)(T.a,{children:Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{path:"/crud-frontend",element:Object(f.jsx)(v,{})}),Object(f.jsx)(N.a,{path:"/crud-frontend/update",element:Object(f.jsx)(C,{})})]})}),Object(f.jsx)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto bg-secondary",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:Object(f.jsxs)("div",{className:"card-body text-white",children:["Created by : Rohan Karan",Object(f.jsx)("br",{}),Object(f.jsx)("a",{href:"https://github.com/rohankaran/crud-app",className:"text-white-50",children:"(source code)"}),Object(f.jsx)("br",{})]})})]}),document.getElementById("root")),k()}},[[80,1,2]]]);
//# sourceMappingURL=main.0ac94c9b.chunk.js.map