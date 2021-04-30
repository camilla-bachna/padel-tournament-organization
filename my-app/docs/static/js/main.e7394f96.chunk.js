(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{11:function(e,a){},18:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t(10),l=t.n(r),o=t(13),c=t(3),i=(t(18),t(1));var s=function(e){var a=Object(n.useState)(""),t=Object(c.a)(a,2),r=t[0],l=t[1];return Object(i.jsxs)("form",{className:"main__form",onSubmit:function(a){a.preventDefault(),e.handleLogin({player:r})},children:[Object(i.jsx)("button",{className:"main__form--new",children:"Crea un nuevo pozo"}),Object(i.jsx)("label",{htmlFor:"player",className:"main__form--label",children:"Jugador *"}),Object(i.jsx)("input",{type:"text",id:"player",className:"main__form--input",placeholder:"elige cualquier nombre de usuario",value:r,onChange:function(e){l(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"match",className:"main__form--label",children:"Pin *"}),Object(i.jsx)("input",{type:"text",id:"match",className:"main__form--input",placeholder:"a\xf1ade el pin del pozo",required:!0}),Object(i.jsx)("label",{htmlFor:"gender",className:"main__form--label",children:"G\xe9nero"}),Object(i.jsxs)("select",{name:"gender",id:"gender",value:"gender",className:"main__form--select",children:[Object(i.jsx)("option",{value:"male",children:"Hombre"}),Object(i.jsx)("option",{value:"female",children:"Mujer"})]}),Object(i.jsx)("button",{type:"submit",className:"main__form--button",children:"Go"})]})},d=function(e){var a=Object(n.useState)(""),t=Object(c.a)(a,2);t[0],t[1];return Object(i.jsx)("section",{children:Object(i.jsx)(s,{handleLogin:e.handleLogin})})},m=t(11),j=t.n(m),u=function(e){return e.isPlayerLoggedIn?Object(i.jsx)(j.a,{handleLogout:e.handleLogout}):Object(i.jsx)(d,{loginError:e.loginError,handleLogin:e.handleLogin})},b={get:function(e){var a=JSON.parse(localStorage.getItem(e));return null!==a?a:{}},remove:function(e){localStorage.removeItem(e)},set:function(e,a){localStorage.setItem(e,JSON.stringify(a))}};var h=function(){var e=b.get("player"),a=Object(n.useState)(e.playerId||""),t=Object(c.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)({}),s=Object(c.a)(o,2),d=s[0];return s[1],Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{className:"header__heading",children:"Bienvenido al para\xedso del p\xe1del"})}),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsx)("div",{className:"main__image"}),Object(i.jsx)(u,{isPlayerLoggedIn:!!r,loginError:d,handleLogin:function(){var e={playerId:"12"};l(e.playerId),b.set("user",e)},handleLogout:function(){b.remove("player"),window.location.reload()}})]}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("small",{className:"footer__note",children:"Esta aplicaci\xf3n est\xe1 dise\xf1ada para ayudarte a encontrar la pista correcta. S\xf3lo tienes que elegir tu nombre de usuario, a\xf1adir el pin del pozo y elegir el g\xe9nero. Ya estar\xeda :)"})})]})};l.a.render(Object(i.jsx)(o.a,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e7394f96.chunk.js.map