(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(t,e,a){},56:function(t,e,a){},80:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),o=(a(56),a(3)),i=(a(38),a(15)),d=a.n(i),l=a(17),j=a.n(l),b=a(27),u=a(48),p=a(87),x=a(86),h=a(88),f=a(16),m=a(1);var O=function(t){var e=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("https://crud-rk.herokuapp.com/api/delete-todo/".concat(e)).then((function(t){return console.log(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],s=c[1];return Object(m.jsxs)("div",{align:"right",style:{"font-family":"Segoe UI"},children:[Object(m.jsx)("span",{className:"float-start text-break",style:{"padding-top":"7px","font-family":"lato","font-size":"17px","word-wrap":"break-word"},children:t.todo.title}),Object(m.jsx)(u.a,{onClick:function(){return s(!r)},"aria-controls":"example-collapse-text","aria-expanded":r,className:"mx-2",variant:"outline-info",style:{borderRadius:"100px"},children:Object(m.jsx)(f.a,{style:{"padding-bottom":"3px"}})}),Object(m.jsxs)(p.a,{as:x.a,className:"mx-1",children:[Object(m.jsx)(p.a.Toggle,{variant:"outline-primary"}),Object(m.jsx)(p.a.Menu,{align:"end",children:Object(m.jsxs)("div",{align:"right",children:[Object(m.jsxs)(p.a.Item,{href:"/crud-frontend/".concat(t.todo.nanoid),children:[Object(m.jsx)("span",{style:{float:"left"},children:"Update"})," ",Object(m.jsx)(f.b,{style:{"padding-bottom":"3px"},className:"link-warning"})]}),Object(m.jsxs)(p.a.Item,{onClick:function(){return e(t.todo.nanoid)},style:{align:"right"},children:[Object(m.jsx)("span",{style:{float:"left"},children:"Delete"}),Object(m.jsx)(f.d,{style:{"padding-bottom":"3px"},className:"link-danger"})]})]})})]}),Object(m.jsx)(h.a,{in:r,children:Object(m.jsxs)("div",{id:"example-collapse-text",className:"card-body ",style:{"word-wrap":"break-word"},align:"left",children:[Object(m.jsx)("span",{style:{"font-family":"lato","font-size":"16px"},children:"Title :"}),Object(m.jsx)("br",{}),t.todo.title,Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{"font-family":"lato","font-size":"16px"},children:"Description :"}),Object(m.jsx)("br",{}),t.todo.description,Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{"font-family":"lato","font-size":"16px"},children:"Added on :"}),Object(m.jsx)("br",{}),t.todo.addedDT,Object(m.jsx)("br",{}),Object(m.jsx)("span",{style:{"font-family":"lato","font-size":"16px"},children:"Last updated on :"}),Object(m.jsx)("br",{}),t.todo.updatedDT]})}),Object(m.jsx)("hr",{})]})};function y(t){return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:t.todoList.map((function(t){return Object(m.jsx)(O,{todo:t})}))})})}var g=a(33),w=a(89);var v=function(){var t=Object(n.useState)([{}]),e=Object(o.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),p=b[0],x=b[1];return Object(n.useEffect)((function(){d.a.get("https://crud-rk.herokuapp.com/api/get-todo").then((function(t){c(t.data)}))})),Object(m.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(m.jsxs)("div",{className:"card-body list-group-item",children:[Object(m.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Add Your Task"}),Object(m.jsxs)(w.a,{align:"left",children:[Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"title",children:[Object(m.jsx)(w.a.Label,{children:"Title"}),Object(m.jsx)(w.a.Control,{required:!0,type:"text",onChange:function(t){return l(t.target.value)}}),Object(m.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(m.jsx)(w.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(m.jsx)("br",{})]}),Object(m.jsxs)(w.a.Group,{className:"mb-4",controlId:"desc",children:[Object(m.jsx)(w.a.Label,{children:"Description"}),Object(m.jsx)(w.a.Control,{as:"textarea",rows:4,onChange:function(t){return x(t.target.value)}})]})]}),Object(m.jsxs)(u.a,{className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},onClick:function(){d.a.post("https://crud-rk.herokuapp.com/api/add-todo/",{nanoid:Object(g.a)(),title:i,description:p,addedDT:Date(),updatedDT:Date()}).then((function(t){return console.log(t)}))},disabled:""===i.trim(),children:["Add ",Object(m.jsx)(f.c,{style:{"padding-bottom":"3.5px"}})]}),Object(m.jsx)("h5",{className:"card text-white bg-dark mb-3",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Your Tasks"}),Object(m.jsx)("div",{className:"justify-content-start align-content-start",children:Object(m.jsx)(y,{todoList:a})})]})})},k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),r(t),s(t)}))},N=(a(79),a(6));var C=function(){var t=Object(n.useState)({}),e=Object(o.a)(t,2),a=e[0],c=e[1],r=Object(N.g)().nanoid,s=function(){var t=Object(b.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://crud-rk.herokuapp.com/api/get-todo/".concat(r));case 2:e=t.sent,c(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){s()}),[]);var i=Object(n.useState)("ojef-=-39uaenflenfaw?:{/"),l=Object(o.a)(i,2),p=l[0],x=l[1],h=Object(n.useState)("q309pjdAA()&#:woau!@"),O=Object(o.a)(h,2),y=O[0],v=O[1],k=Object(N.f)(),C=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"ojef-=-39uaenflenfaw?:{/"===p&&(p=a.title),"q309pjdAA()&#:woau!@"===y&&(y=a.description),t.next=4,d.a.put("https://crud-rk.herokuapp.com/api/update-todo/".concat(e),{nanoid:Object(g.a)(),title:p,description:y,updatedDT:Date()}).then((function(t){return console.log(t.data)}));case 4:k("/crud-frontend",{replace:!0});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(m.jsxs)("div",{className:"card-body list-group-item",children:[Object(m.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Update Your Task"}),Object(m.jsxs)(w.a,{children:[Object(m.jsxs)(w.a.Group,{className:"mb-3",controlId:"title",align:"left",children:[Object(m.jsx)(w.a.Label,{children:"Title"}),Object(m.jsx)(w.a.Control,{required:!0,type:"text",onChange:function(t){return x(t.target.value)},defaultValue:a.title}),Object(m.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(m.jsx)(w.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(m.jsx)("br",{})]}),Object(m.jsxs)(w.a.Group,{className:"mb-4",controlId:"desc",align:"left",children:[Object(m.jsx)(w.a.Label,{children:"Description"}),Object(m.jsx)(w.a.Control,{as:"textarea",rows:4,onChange:function(t){return v(t.target.value)},defaultValue:a.description})]}),Object(m.jsxs)(u.a,{onClick:function(){return C(r)},href:"/crud-frontend",type:"submit",className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},disabled:"ojef-=-39uaenflenfaw?:{/"===p&&"q309pjdAA()&#:woau!@"===y,children:["Update ",Object(m.jsx)(f.c,{style:{"padding-bottom":"3.5px"}})]})]})]})})},T=a(36);s.a.render(Object(m.jsxs)(c.a.StrictMode,{children:[" ",Object(m.jsxs)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:[Object(m.jsx)("br",{}),Object(m.jsx)("h1",{className:"card-body text-white bg-primary mb-4",children:"Task Manager"})]}),Object(m.jsx)(T.a,{children:Object(m.jsxs)(N.c,{children:[Object(m.jsx)(N.a,{path:"/crud-frontend",element:Object(m.jsx)(v,{})}),Object(m.jsx)(N.a,{path:"/crud-frontend/:nanoid",element:Object(m.jsx)(C,{})})]})}),Object(m.jsx)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto bg-secondary",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:Object(m.jsxs)("div",{className:"card-body text-white",children:["Created by : Rohan Karan",Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://github.com/rohankaran/crud-app",className:"text-white-50",children:"(source code)"}),Object(m.jsx)("br",{})]})})]}),document.getElementById("root")),k()}},[[80,1,2]]]);
//# sourceMappingURL=main.73216196.chunk.js.map