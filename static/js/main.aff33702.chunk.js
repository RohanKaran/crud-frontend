(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(t,e,a){},58:function(t,e,a){},82:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(16),o=a.n(r),s=(a(58),a(4)),i=(a(39),a(13)),d=a.n(i),l=a(18),j=a.n(l),b=a(28),u=a(50),p=a(89),x=a(88),h=a(90),m=a(17),f=a(49),O=a(2);var g=function(t){var e=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("https://crud-rk.herokuapp.com/api/delete-todo/".concat(e)).then((function(t){return console.log(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=Object(n.useState)(!1),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(O.jsxs)("div",{className:"mx-1",align:"right",style:{"font-family":"Segoe UI"},children:[Object(O.jsxs)("span",{className:"text-break",style:{"padding-top":"6px","font-family":"lato","font-size":"17px","word-wrap":"break-word",float:"left"},children:[Object(O.jsx)(f.a,{}),"\xa0 ",t.todo.title]}),Object(O.jsx)(u.a,{onClick:function(){return o(!r)},"aria-controls":"example-collapse-text","aria-expanded":r,className:"mx-2",variant:"outline-info",style:{borderRadius:"100px"},hidden:!t.todo.title,children:Object(O.jsx)(m.a,{style:{"padding-bottom":"3px"}})}),Object(O.jsxs)(p.a,{as:x.a,hidden:!t.todo.title,children:[Object(O.jsx)(p.a.Toggle,{variant:"outline-primary"}),Object(O.jsx)(p.a.Menu,{align:"end",children:Object(O.jsxs)("div",{align:"right",children:[Object(O.jsxs)(p.a.Item,{href:"/crud-frontend/".concat(t.todo.nanoid),children:[Object(O.jsx)("span",{style:{float:"left"},children:"Update"})," ",Object(O.jsx)(m.b,{style:{"padding-bottom":"3px"},className:"link-warning"})]}),Object(O.jsxs)(p.a.Item,{onClick:function(){return e(t.todo.nanoid)},style:{align:"right"},children:[Object(O.jsx)("span",{style:{float:"left"},children:"Delete"}),Object(O.jsx)(m.d,{style:{"padding-bottom":"3px"},className:"link-danger"})]})]})})]}),Object(O.jsx)(h.a,{in:r,children:Object(O.jsxs)("div",{id:"example-collapse-text",className:"card-body mx-3",style:{"word-wrap":"break-word"},align:"left",children:[Object(O.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Title :"}),Object(O.jsx)("br",{}),t.todo.title,Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Description :"}),Object(O.jsx)("br",{}),t.todo.description,Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Added on :"}),Object(O.jsx)("br",{}),t.todo.addedDT,Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Last updated on :"}),Object(O.jsx)("br",{}),t.todo.updatedDT]})}),Object(O.jsx)("hr",{hidden:!t.todo.title})]})};function y(t){return Object(O.jsx)("div",{children:t.todoList.map((function(t){return Object(O.jsx)(g,{todo:t})}))})}var w=a(29),k=a(91),v=a(7);var N=function(){var t=Object(n.useState)([{}]),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],l=o[1],j=Object(n.useState)(""),b=Object(s.a)(j,2),p=b[0],x=b[1],h=Object(v.f)();return Object(n.useEffect)((function(){d.a.get("https://crud-rk.herokuapp.com/api/get-todo").then((function(t){c(t.data)}))})),Object(O.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(O.jsxs)("div",{className:"card-body list-group-item",children:[Object(O.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Add Your Task"}),Object(O.jsxs)(k.a,{align:"left",children:[Object(O.jsxs)(k.a.Group,{className:"mb-3",controlId:"title",children:[Object(O.jsx)(k.a.Label,{children:"Title"}),Object(O.jsx)(k.a.Control,{required:!0,type:"text",onChange:function(t){return l(t.target.value)}}),Object(O.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(O.jsx)(k.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(k.a.Group,{className:"mb-4",controlId:"desc",children:[Object(O.jsx)(k.a.Label,{children:"Description"}),Object(O.jsx)(k.a.Control,{as:"textarea",rows:4,onChange:function(t){return x(t.target.value)}})]})]}),Object(O.jsxs)(u.a,{className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},onClick:function(){d.a.post("https://crud-rk.herokuapp.com/api/add-todo/",{nanoid:Object(w.a)(),title:i,description:p,addedDT:Date(),updatedDT:Date()}).then((function(t){return console.log(t)})),h("/crud-frontend")},disabled:""===i.trim(),children:["Add ",Object(O.jsx)(m.c,{style:{"padding-bottom":"3.5px"}})]}),Object(O.jsx)("h5",{className:"card text-white bg-dark mb-3",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Your Tasks"}),Object(O.jsx)("div",{className:"justify-content-start align-content-start",children:Object(O.jsx)(y,{todoList:a})})]})})},C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;a(t),n(t),c(t),r(t),o(t)}))};a(81);var T=function(){var t=Object(n.useState)({}),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(v.g)().nanoid,o=function(){var t=Object(b.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://crud-rk.herokuapp.com/api/get-todo/".concat(r));case 2:e=t.sent,c(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){o()}),[]);var i=Object(n.useState)("ojef-=-39uaenflenfaw?:{/"),l=Object(s.a)(i,2),p=l[0],x=l[1],h=Object(n.useState)("q309pjdAA()&#:woau!@"),f=Object(s.a)(h,2),g=f[0],y=f[1],N=Object(v.f)(),C=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"ojef-=-39uaenflenfaw?:{/"===p&&(p=a.title),"q309pjdAA()&#:woau!@"===g&&(g=a.description),t.next=4,d.a.put("https://crud-rk.herokuapp.com/api/update-todo/".concat(e),{nanoid:Object(w.a)(),title:p,description:g,updatedDT:Date()});case 4:return t.next=6,d.a.put("https://crud-rk.herokuapp.com/api/update-todo/".concat(e),{nanoid:Object(w.a)(),title:p,description:g,updatedDT:Date()});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(O.jsxs)("div",{className:"card-body list-group-item",children:[Object(O.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Update Your Task"}),Object(O.jsxs)(k.a,{children:[Object(O.jsxs)(k.a.Group,{className:"mb-3",controlId:"title",align:"left",children:[Object(O.jsx)(k.a.Label,{children:"Title"}),Object(O.jsx)(k.a.Control,{required:!0,type:"text",onChange:function(t){return x(t.target.value)},defaultValue:a.title}),Object(O.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(O.jsx)(k.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(k.a.Group,{className:"mb-4",controlId:"desc",align:"left",children:[Object(O.jsx)(k.a.Label,{children:"Description"}),Object(O.jsx)(k.a.Control,{as:"textarea",rows:4,onChange:function(t){return y(t.target.value)},defaultValue:a.description})]}),Object(O.jsxs)(u.a,{onClick:function(){C(r),N("/crud-frontend")},type:"submit",className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},disabled:"ojef-=-39uaenflenfaw?:{/"===p&&"q309pjdAA()&#:woau!@"===g||""===p.trim(),children:["Update ",Object(O.jsx)(m.c,{style:{"padding-bottom":"3.5px"}})]})]})]})})},D=a(32);o.a.render(Object(O.jsxs)(c.a.StrictMode,{children:[" ",Object(O.jsxs)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:[Object(O.jsx)("br",{}),Object(O.jsx)("h1",{className:"card-body text-white bg-primary mb-4",children:"Task Manager"})]}),Object(O.jsx)(D.a,{children:Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{exact:!0,path:"/crud-frontend",element:Object(O.jsx)(N,{})}),Object(O.jsx)(v.a,{path:"/crud-frontend/:nanoid",element:Object(O.jsx)(T,{})})]})}),Object(O.jsx)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto bg-secondary",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:Object(O.jsxs)("div",{className:"card-body text-white",children:["Created by : Rohan Karan",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:"https://github.com/rohankaran/crud-app",className:"text-white-50",children:"(source code)"}),Object(O.jsx)("br",{})]})})]}),document.getElementById("root")),C()}},[[82,1,2]]]);
//# sourceMappingURL=main.aff33702.chunk.js.map