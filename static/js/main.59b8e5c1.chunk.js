(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(t,e,n){},56:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),s=n.n(r),o=(n(56),n(3)),i=(n(38),n(15)),d=n.n(i),l=n(17),j=n.n(l),b=n(27),u=n(48),p=n(87),x=n(86),h=n(88),m=n(16),f=n(1);var O=function(t){var e=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("https://crud-rk.herokuapp.com/api/delete-todo/".concat(e)).then((function(t){return console.log(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=Object(a.useState)(!1),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(f.jsxs)("div",{align:"right",style:{"font-family":"Segoe UI"},children:[Object(f.jsx)("span",{className:"float-start text-break",style:{"padding-top":"7px","font-family":"lato","font-size":"17px","word-wrap":"break-word"},children:t.todo.title}),Object(f.jsx)(u.a,{onClick:function(){return s(!r)},"aria-controls":"example-collapse-text","aria-expanded":r,className:"mx-2",variant:"outline-info",style:{borderRadius:"100px"},children:Object(f.jsx)(m.a,{style:{"padding-bottom":"3px"}})}),Object(f.jsxs)(p.a,{as:x.a,className:"mx-1",children:[Object(f.jsx)(p.a.Toggle,{variant:"outline-primary"}),Object(f.jsx)(p.a.Menu,{align:"end",children:Object(f.jsxs)("div",{align:"right",children:[Object(f.jsxs)(p.a.Item,{href:"/crud-frontend/".concat(t.todo.nanoid),children:[Object(f.jsx)("span",{style:{float:"left"},children:"Update"})," ",Object(f.jsx)(m.b,{style:{"padding-bottom":"3px"},className:"link-warning"})]}),Object(f.jsxs)(p.a.Item,{onClick:function(){return e(t.todo.nanoid)},style:{align:"right"},children:[Object(f.jsx)("span",{style:{float:"left"},children:"Delete"}),Object(f.jsx)(m.d,{style:{"padding-bottom":"3px"},className:"link-danger"})]})]})})]}),Object(f.jsx)(h.a,{in:r,children:Object(f.jsxs)("div",{id:"example-collapse-text",className:"card-body ",style:{"word-wrap":"break-word"},align:"left",children:[Object(f.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Title :"}),Object(f.jsx)("br",{}),t.todo.title,Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Description :"}),Object(f.jsx)("br",{}),t.todo.description,Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Added on :"}),Object(f.jsx)("br",{}),t.todo.addedDT,Object(f.jsx)("br",{}),Object(f.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Last updated on :"}),Object(f.jsx)("br",{}),t.todo.updatedDT]})}),Object(f.jsx)("hr",{})]})};function g(t){return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:t.todoList.map((function(t){return Object(f.jsx)(O,{todo:t})}))})})}var y=n(33),w=n(89);var v=function(){var t=Object(a.useState)([{}]),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),p=b[0],x=b[1];return Object(a.useEffect)((function(){d.a.get("https://crud-rk.herokuapp.com/api/get-todo").then((function(t){c(t.data)}))})),Object(f.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(f.jsxs)("div",{className:"card-body list-group-item",children:[Object(f.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Add Your Task"}),Object(f.jsxs)(w.a,{align:"left",children:[Object(f.jsxs)(w.a.Group,{className:"mb-3",controlId:"title",children:[Object(f.jsx)(w.a.Label,{children:"Title"}),Object(f.jsx)(w.a.Control,{required:!0,type:"text",onChange:function(t){return l(t.target.value)}}),Object(f.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(f.jsx)(w.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(w.a.Group,{className:"mb-4",controlId:"desc",children:[Object(f.jsx)(w.a.Label,{children:"Description"}),Object(f.jsx)(w.a.Control,{as:"textarea",rows:4,onChange:function(t){return x(t.target.value)}})]})]}),Object(f.jsxs)(u.a,{className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},onClick:function(){d.a.post("https://crud-rk.herokuapp.com/api/add-todo/",{nanoid:Object(y.a)(),title:i,description:p,addedDT:Date(),updatedDT:Date()}).then((function(t){return console.log(t)}))},disabled:""===i.trim(),children:["Add ",Object(f.jsx)(m.c,{style:{"padding-bottom":"3.5px"}})]}),Object(f.jsx)("h5",{className:"card text-white bg-dark mb-3",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Your Tasks"}),Object(f.jsx)("div",{className:"justify-content-start align-content-start",children:Object(f.jsx)(g,{todoList:n})})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))},N=(n(79),n(6));var C=function(){var t=Object(a.useState)({}),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(N.g)().nanoid,s=function(){var t=Object(b.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://crud-rk.herokuapp.com/api/get-todo/".concat(r));case 2:e=t.sent,c(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){s()}),[]);var i=Object(a.useState)("ojef-=-39uaenflenfaw?:{/"),l=Object(o.a)(i,2),p=l[0],x=l[1],h=Object(a.useState)("q309pjdAA()&#:woau!@"),O=Object(o.a)(h,2),g=O[0],v=O[1],k=Object(N.f)(),C=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"ojef-=-39uaenflenfaw?:{/"===p&&(p=n.title),"q309pjdAA()&#:woau!@"===g&&(g=n.description),t.next=4,d.a.put("https://crud-rk.herokuapp.com/api/update-todo/".concat(e),{nanoid:Object(y.a)(),title:p,description:g,updatedDT:Date()}).then((function(t){return console.log(t.data)}));case 4:k("/crud-frontend",{replace:!0});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(f.jsxs)("div",{className:"card-body list-group-item",children:[Object(f.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Update Your Task"}),Object(f.jsxs)(w.a,{children:[Object(f.jsxs)(w.a.Group,{className:"mb-3",controlId:"title",align:"left",children:[Object(f.jsx)(w.a.Label,{children:"Title"}),Object(f.jsx)(w.a.Control,{required:!0,type:"text",onChange:function(t){return x(t.target.value)},defaultValue:n.title}),Object(f.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(f.jsx)(w.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(f.jsx)("br",{})]}),Object(f.jsxs)(w.a.Group,{className:"mb-4",controlId:"desc",align:"left",children:[Object(f.jsx)(w.a.Label,{children:"Description"}),Object(f.jsx)(w.a.Control,{as:"textarea",rows:4,onChange:function(t){return v(t.target.value)},defaultValue:n.description})]}),Object(f.jsxs)(u.a,{onClick:function(){return C(r)},href:"/crud-frontend",type:"submit",className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},disabled:"ojef-=-39uaenflenfaw?:{/"===p&&"q309pjdAA()&#:woau!@"===g||""===p.trim(),children:["Update ",Object(f.jsx)(m.c,{style:{"padding-bottom":"3.5px"}})]})]})]})})},T=n(36);s.a.render(Object(f.jsxs)(c.a.StrictMode,{children:[" ",Object(f.jsxs)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:[Object(f.jsx)("br",{}),Object(f.jsx)("h1",{className:"card-body text-white bg-primary mb-4",children:"Task Manager"})]}),Object(f.jsx)(T.a,{children:Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{path:"/crud-frontend",element:Object(f.jsx)(v,{})}),Object(f.jsx)(N.a,{path:"/crud-frontend/:nanoid",element:Object(f.jsx)(C,{})})]})}),Object(f.jsx)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto bg-secondary",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:Object(f.jsxs)("div",{className:"card-body text-white",children:["Created by : Rohan Karan",Object(f.jsx)("br",{}),Object(f.jsx)("a",{href:"https://github.com/rohankaran/crud-app",className:"text-white-50",children:"(source code)"}),Object(f.jsx)("br",{})]})})]}),document.getElementById("root")),k()}},[[80,1,2]]]);
//# sourceMappingURL=main.59b8e5c1.chunk.js.map