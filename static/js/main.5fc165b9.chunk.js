(this["webpackJsonpreact-homework-template"]=this["webpackJsonpreact-homework-template"]||[]).push([[0],{44:function(e,t,a){e.exports={header:"Header_header__1VCKf",gameName:"Header_gameName__2EWC3",singIn:"Header_singIn__1khwA",singOut:"Header_singOut__1RYml"}},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a.n(n),s=a(38),i=a.n(s),r=a(22),l=a(27),o=a(42),j=Object(o.b)({name:"user",initialState:{email:null,token:null,id:null},reducers:{setUser:function(e,t){e.email=t.payload.email,e.token=t.payload.token,e.id=t.payload.id},removeUser:function(e){e.email=null,e.token=null,e.id=null}}}),b=j.actions,u=b.setUser,d=b.removeUser,m=j.reducer,O=Object(o.a)({reducer:{user:m}}),p=a(0),h=a(12),x=a(1),f=a(13),v=a(17);function g(){var e=Object(l.c)((function(e){return e.user})),t=e.email;return{isAuth:!!t,email:t,token:e.token,id:e.id}}var y=a(44),k=a.n(y),N=a(8),w=function(e){var t=e.name,a=e.text,n=e.onClick;return Object(N.jsx)("form",{className:t,children:Object(N.jsx)("button",{type:"button",onClick:function(){return n()},children:a})})};function _(){var e=Object(l.b)(),t=g().isAuth;return Object(N.jsxs)("header",{className:k.a.header,id:"header",children:[Object(N.jsx)("h1",{className:k.a.gameName,children:"\u041c\u0410\u0424\u0406\u042f"}),t&&Object(N.jsx)(w,{name:k.a.singOut,text:"\u0412\u0438\u0439\u0442\u0438",onClick:function(){return e(d())}})]})}var C=a(30),S=a(50),A=Object(S.a)({apiKey:"AIzaSyCjURkTZP-hYQ003_umy1baP9wor83vepw",authDomain:"mafia-game-by-roman.firebaseapp.com",databaseURL:"https://mafia-game-by-roman-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"mafia-game-by-roman",storageBucket:"mafia-game-by-roman.appspot.com",messagingSenderId:"465612943644",appId:"1:465612943644:web:ef0270733806ce0d7a4ad9",measurementId:"G-P4VCHM8991"}),I=Object(C.d)(A),R=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],s=g().isAuth;function i(){return(i=Object(x.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)(Object(C.a)(I,"table"));case 2:e.sent.forEach((function(e){c((function(t){return[].concat(Object(h.a)(t),[e.id])})),console.log(e.id," => ",e.data())}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),console.log(a),s?Object(N.jsxs)("div",{children:[Object(N.jsx)(_,{}),a.map((function(e){return Object(N.jsx)("h1",{children:e})})),Object(N.jsx)(r.b,{to:"/table",children:"+ \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u0441\u0442\u0456\u043b"})]}):Object(N.jsx)(v.a,{to:"/login"})},E=a(11),U=a(43),V=Object(C.d)(A),F=function(){var e,t=Object(v.g)().push,a=Object(U.a)({mode:"onChange",defaultValues:{name:"Roman",password:112233,doctor:1,sherif:1,mafia:2,peace:3}}),n=a.register,c=a.formState,s=c.errors,i=c.isValid,r=a.handleSubmit,l=a.reset;return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)("form",{onSubmit:r((function(e){console.log(e.name),Object(C.e)(Object(C.b)(V,"table",e.name),{name:e.name,password:e.password,users:[],role:[],count:{mafia:e.mafia,doctor:e.doctor,sherif:e.sherif,peace:e.peace}}),l(),t("/")})),children:[Object(N.jsxs)("label",{className:"label",children:["\u041d\u0430\u0437\u0432\u0430 \u0441\u0442\u043e\u043b\u0430:",Object(N.jsx)("input",Object(E.a)({type:"name"},n("name",{validate:function(e){return e.length>2}})))]}),(null===s||void 0===s?void 0:s.email)&&Object(N.jsx)("p",{children:(null===s||void 0===s||null===(e=s.email)||void 0===e?void 0:e.message)||"Error!"}),Object(N.jsxs)("label",{className:"label",children:["Password:",Object(N.jsx)("input",Object(E.a)({},n("password",{validate:function(e){return e.length>5}})))]}),(null===s||void 0===s?void 0:s.password)&&Object(N.jsx)("p",{children:"\u041c\u0456\u043d\u0456\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432!"}),Object(N.jsxs)("label",{className:"label",children:["\u041c\u0430\u0444\u0456\u044f:",Object(N.jsx)("input",Object(E.a)({type:"text"},n("mafia",{validate:{positiveNumber:function(e){return parseFloat(e)>0}}})))]}),s.age&&"positiveNumber"===s.age.type&&Object(N.jsx)("p",{children:"\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0447\u0438\u0441\u043b\u043e"}),Object(N.jsxs)("label",{className:"label",children:["\u041b\u0456\u043a\u0430\u0440:",Object(N.jsx)("input",Object(E.a)({type:"text"},n("doctor",{validate:{positiveNumber:function(e){return parseFloat(e)>0}}})))]}),s.age&&"positiveNumber"===s.age.type&&Object(N.jsx)("p",{children:"\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0447\u0438\u0441\u043b\u043e"}),Object(N.jsxs)("label",{className:"label",children:["\u0428\u0435\u0440\u0438\u0444:",Object(N.jsx)("input",Object(E.a)({type:"text"},n("sherif",{validate:{positiveNumber:function(e){return parseFloat(e)>0}}})))]}),s.age&&"positiveNumber"===s.age.type&&Object(N.jsx)("p",{children:"\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0447\u0438\u0441\u043b\u043e"}),Object(N.jsxs)("label",{className:"label",children:["\u041c\u0438\u0440\u043d\u0438\u0439:",Object(N.jsx)("input",Object(E.a)({type:"text"},n("peace",{validate:{positiveNumber:function(e){return parseFloat(e)>0}}})))]}),s.age&&"positiveNumber"===s.age.type&&Object(N.jsx)("p",{children:"\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0447\u0438\u0441\u043b\u043e"}),Object(N.jsx)("input",{type:"submit",disabled:!i})]})})},H=function(){return g().isAuth?Object(N.jsxs)("div",{children:[Object(N.jsx)(_,{}),Object(N.jsx)(F,{})]}):Object(N.jsx)(v.a,{to:"/login"})},P=a(33),M=function(e){var t,a=e.handleClick,n=Object(U.a)({mode:"onChange",defaultValues:{email:"bly@ukr.net",password:112233}}),c=n.register,s=n.formState,i=s.errors,r=s.isValid,l=n.handleSubmit,o=n.reset;return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)("form",{onSubmit:l((function(e){a(e.email,e.password),o()})),children:[Object(N.jsxs)("label",{className:"label",children:["Email:",Object(N.jsx)("input",Object(E.a)({type:"email"},c("email",{required:" \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f!"})))]}),Object(N.jsx)("div",{style:{height:40},children:(null===i||void 0===i?void 0:i.email)&&Object(N.jsx)("p",{children:(null===i||void 0===i||null===(t=i.email)||void 0===t?void 0:t.message)||"Error!"})}),Object(N.jsxs)("label",{className:"label",children:["Password:",Object(N.jsx)("input",Object(E.a)({},c("password",{required:" \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f!",validate:function(e){return e.length>5}})))]}),Object(N.jsx)("div",{style:{height:40},children:(null===i||void 0===i?void 0:i.password)&&Object(N.jsx)("p",{children:"\u041c\u0456\u043d\u0456\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432!"})}),Object(N.jsx)("input",{type:"submit",disabled:!r})]})})},T=a(36),q=function(){var e=Object(l.b)(),t=Object(v.g)().push;return Object(N.jsx)(M,{handleClick:function(a,n){var c=Object(P.b)();Object(P.c)(c,a,n).then((function(a){var n=a.user;e(u({email:n.email,id:n.uid,token:n.accessToken})),t("/")})).catch((function(e){T.Report.failure("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"," ".concat(e.message),"Ok")}))}})},B=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"Login"}),Object(N.jsx)(q,{}),Object(N.jsxs)("p",{children:["Or ",Object(N.jsx)(r.b,{to:"/register",children:"register"})]})]})]})},J=function(){var e=Object(l.b)(),t=Object(v.g)().push;return Object(N.jsx)(M,{handleClick:function(a,n){var c=Object(P.b)();Object(P.a)(c,a,n).then((function(a){var n=a.user;T.Report.success("\u0423\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439","","Ok"),e(u({email:n.email,id:n.uid,token:n.accessToken})),t("/")})).catch((function(e){T.Report.failure("\u041f\u043e\u043c\u0438\u043b\u043a\u0430"," ".concat(e.message),"Ok")}))}})},K=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(_,{}),Object(N.jsx)("h1",{children:"Register"}),Object(N.jsx)(J,{}),Object(N.jsxs)("p",{children:["Already have an account? ",Object(N.jsx)(r.b,{to:"/login",children:"Sign in"})]})]})};var L=function(){return Object(N.jsxs)(v.d,{children:[Object(N.jsx)(v.b,{exact:!0,path:"/",component:R}),Object(N.jsx)(v.b,{exact:!0,path:"/login",component:B}),Object(N.jsx)(v.b,{exact:!0,path:"/register",component:K}),Object(N.jsx)(v.b,{exact:!0,path:"/table",component:H})]})};a(67);i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(r.a,{basename:"Mafia-game",children:Object(N.jsx)(l.a,{store:O,children:Object(N.jsx)(L,{})})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.5fc165b9.chunk.js.map