(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(t,e,n){},58:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(16),o=n.n(r),s=(n(58),n(4)),i=(n(39),n(13)),d=n.n(i),l=n(18),j=n.n(l),b=n(29),u=n(50),p=n(89),x=n(88),h=n(90),f=n(17),m=n(49),O=n(7),g=n(2);var y=function(t){var e=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("https://crud-rk.herokuapp.com/api/delete-todo/".concat(e)).then((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=Object(a.useState)(!1),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(O.f)();return Object(g.jsxs)("div",{align:"right",style:{"font-family":"Segoe UI"},children:[Object(g.jsxs)("span",{className:"text-break",style:{"padding-top":"6px","font-family":"lato","font-size":"17px","word-wrap":"break-word",float:"left"},children:[Object(g.jsx)(m.a,{}),"\xa0 ",t.todo.title]}),Object(g.jsx)(u.a,{onClick:function(){return o(!r)},"aria-controls":"example-collapse-text","aria-expanded":r,className:"mx-2",variant:"outline-info",style:{borderRadius:"100px"},hidden:!t.todo.title,children:Object(g.jsx)(f.a,{style:{"padding-bottom":"3px"}})}),Object(g.jsxs)(p.a,{as:x.a,hidden:!t.todo.title,children:[Object(g.jsx)(p.a.Toggle,{variant:"outline-primary"}),Object(g.jsx)(p.a.Menu,{align:"end",children:Object(g.jsxs)("div",{align:"right",children:[Object(g.jsxs)(p.a.Item,{href:"/crud-frontend/".concat(t.todo.nanoid),children:[Object(g.jsx)("span",{style:{float:"left"},children:"Update"})," ",Object(g.jsx)(f.b,{style:{"padding-bottom":"3px"},className:"link-warning"})]}),Object(g.jsxs)(p.a.Item,{onClick:function(){e(t.todo.nanoid),i("/crud-frontend")},style:{align:"right"},children:[Object(g.jsx)("span",{style:{float:"left"},children:"Delete"}),Object(g.jsx)(f.d,{style:{"padding-bottom":"3px"},className:"link-danger"})]})]})})]}),Object(g.jsx)(h.a,{in:r,children:Object(g.jsxs)("div",{id:"example-collapse-text",className:"card-body mx-3",style:{"word-wrap":"break-word"},align:"left",children:[Object(g.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Title :"}),Object(g.jsx)("br",{}),t.todo.title,Object(g.jsx)("br",{}),Object(g.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Description :"}),Object(g.jsx)("br",{}),t.todo.description,Object(g.jsx)("br",{}),Object(g.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Added on :"}),Object(g.jsx)("br",{}),t.todo.addedDT,Object(g.jsx)("br",{}),Object(g.jsx)("span",{style:{"font-weight":"bold","font-size":"16px"},children:"Last updated on :"}),Object(g.jsx)("br",{}),t.todo.updatedDT]})}),Object(g.jsx)("hr",{hidden:!t.todo.title})]})};function w(t){return Object(g.jsx)("div",{children:t.todoList.map((function(t){return Object(g.jsx)(y,{todo:t})}))})}var k=n(30),v=n(91);var N=function(){var t=Object(a.useState)([{}]),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),i=o[0],l=o[1],j=Object(a.useState)(""),b=Object(s.a)(j,2),p=b[0],x=b[1],h=Object(O.f)();return Object(a.useEffect)((function(){d.a.get("https://crud-rk.herokuapp.com/api/get-todo").then((function(t){c(t.data)}))})),Object(g.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(g.jsxs)("div",{className:"card-body list-group-item",children:[Object(g.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Add Task"}),Object(g.jsxs)(v.a,{align:"left",children:[Object(g.jsxs)(v.a.Group,{className:"mb-3",controlId:"title",children:[Object(g.jsx)(v.a.Label,{children:"Title"}),Object(g.jsx)(v.a.Control,{required:!0,type:"text",onChange:function(t){return l(t.target.value)}}),Object(g.jsx)(v.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(g.jsx)(v.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(g.jsx)("br",{})]}),Object(g.jsxs)(v.a.Group,{className:"mb-4",controlId:"desc",children:[Object(g.jsx)(v.a.Label,{children:"Description"}),Object(g.jsx)(v.a.Control,{as:"textarea",rows:4,onChange:function(t){return x(t.target.value)}})]})]}),Object(g.jsxs)(u.a,{className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},onClick:function(){d.a.post("https://crud-rk.herokuapp.com/api/add-todo/",{nanoid:Object(k.a)(),title:i,description:p,addedDT:Date(),updatedDT:Date()}).then((function(t){return console.log(t)})),h("/crud-frontend")},disabled:""===i.trim(),children:["Add ",Object(g.jsx)(f.c,{style:{"padding-bottom":"3.5px"}})]}),Object(g.jsx)("h5",{className:"card text-white bg-dark mb-3",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Tasks"}),Object(g.jsx)("div",{className:"justify-content-start align-content-start",children:Object(g.jsx)(w,{todoList:n})})]})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};n(81);var T=function(){var t=Object(a.useState)({}),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(O.g)().nanoid,o=function(){var t=Object(b.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://crud-rk.herokuapp.com/api/get-todo/".concat(r));case 2:e=t.sent,c(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){o()}),[]);var i=Object(a.useState)("ojef-=-39uaenflenfaw?:{/"),l=Object(s.a)(i,2),p=l[0],x=l[1],h=Object(a.useState)("q309pjdAA()&#:woau!@"),m=Object(s.a)(h,2),y=m[0],w=m[1],N=Object(O.f)(),C=function(){var t=Object(b.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"ojef-=-39uaenflenfaw?:{/"===p&&(p=n.title),"q309pjdAA()&#:woau!@"===y&&(y=n.description),t.next=4,d.a.put("https://crud-rk.herokuapp.com/api/update-todo/".concat(e),{nanoid:Object(k.a)(),title:p,description:y,updatedDT:Date()});case 4:return t.next=6,d.a.put("https://crud-rk.herokuapp.com/api/update-todo/".concat(e),{nanoid:Object(k.a)(),title:p,description:y,updatedDT:Date()});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{id:"main",className:"App  justify-content-center align-content-center mx-auto my-auto",style:{width:"480px","max-width":"100%",backgroundColor:"white",margintop:"15px"},children:Object(g.jsxs)("div",{className:"card-body list-group-item",children:[Object(g.jsx)("h5",{className:"card text-white bg-dark mb-4",style:{"font-family":"Palatino Linotype","font-weight":"bold"},children:"Update Your Task"}),Object(g.jsxs)(v.a,{children:[Object(g.jsxs)(v.a.Group,{className:"mb-3",controlId:"title",align:"left",children:[Object(g.jsx)(v.a.Label,{children:"Title"}),Object(g.jsx)(v.a.Control,{required:!0,type:"text",onChange:function(t){return x(t.target.value)},defaultValue:n.title}),Object(g.jsx)(v.a.Control.Feedback,{type:"invalid",children:"Title can not be empty"}),Object(g.jsx)(v.a.Text,{className:"mb-1 text-muted",style:{"font-family":"Garamond"},children:"*Title can not be empty"}),Object(g.jsx)("br",{})]}),Object(g.jsxs)(v.a.Group,{className:"mb-4",controlId:"desc",align:"left",children:[Object(g.jsx)(v.a.Label,{children:"Description"}),Object(g.jsx)(v.a.Control,{as:"textarea",rows:4,onChange:function(t){return w(t.target.value)},defaultValue:n.description})]}),Object(g.jsxs)(u.a,{onClick:function(){C(r),N("/crud-frontend")},type:"submit",className:" mx-2 mb-5",variant:"success",style:{borderRadius:"50px"},disabled:"ojef-=-39uaenflenfaw?:{/"===p&&"q309pjdAA()&#:woau!@"===y||""===p.trim(),children:["Update ",Object(g.jsx)(f.c,{style:{"padding-bottom":"3.5px"}})]})]})]})})},D=n(26);o.a.render(Object(g.jsxs)(c.a.StrictMode,{children:[" ",Object(g.jsxs)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:[Object(g.jsx)("br",{}),Object(g.jsx)("h1",{className:"card-body text-white bg-primary mb-4",children:"Task Manager"})]}),Object(g.jsx)(D.a,{children:Object(g.jsxs)(O.c,{children:[Object(g.jsx)(O.a,{exact:!0,path:"/crud-frontend",element:Object(g.jsx)(N,{})}),Object(g.jsx)(O.a,{path:"/crud-frontend/:nanoid",element:Object(g.jsx)(T,{})})]})}),Object(g.jsx)("div",{id:"main",className:"App card-body list-group-item justify-content-center align-content-center mx-auto my-auto bg-secondary",style:{width:"480px",backgroundColor:"white","max-width":"100%"},children:Object(g.jsxs)("div",{className:"card-body text-white",children:["Created by : Rohan Karan",Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://github.com/rohankaran/crud-app",className:"text-white-50",children:"(source code)"}),Object(g.jsx)("br",{})]})})]}),document.getElementById("root")),C()}},[[82,1,2]]]);
//# sourceMappingURL=main.d9711285.chunk.js.map