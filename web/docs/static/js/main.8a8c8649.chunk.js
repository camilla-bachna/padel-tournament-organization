(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{27:function(e,n,a){},34:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),l=a(17),o=a.n(l),c=a(7),i=a(9),s=a(2),d=(a(27),{get:function(e){var n=JSON.parse(localStorage.getItem(e));return null!==n?n:{}},remove:function(e){localStorage.removeItem(e)},set:function(e,n){localStorage.setItem(e,JSON.stringify(n))}}),j=a(0);var u=function(){return Object(j.jsxs)("div",{className:"main__landing--container main__annimation",children:[Object(j.jsx)("p",{className:"main__landing--paragraph",children:"Por favor elija si deseas crear un nuevo pozo o unirte a uno"}),Object(j.jsx)(c.b,{to:"/newTournament",children:Object(j.jsx)("button",{className:"main__landing--button",children:"Crea un nuevo pozo"})}),Object(j.jsx)(c.b,{to:"/joinTournament",children:Object(j.jsx)("button",{className:"main__landing--button",children:"\xdanete a un pozo"})})]})};var h=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"main__form main__annimation",onSubmit:function(n){n.preventDefault(),e.handleLogin({player:e.player,pin:e.pin})},children:[Object(j.jsx)("label",{htmlFor:"player",className:"main__form--label main__form--labelPlayer",children:"Jugador *"}),Object(j.jsx)("input",{type:"text",id:"player",className:"main__form--input",pattern:"^[a-zA-Z0-9]{1,20}$",title:"Puede contener letras y/o n\xfameros",placeholder:"elige cualquier nombre de usuario",value:e.player,onChange:e.handlePlayer,required:!0}),Object(j.jsx)("label",{htmlFor:"match",className:"main__form--label",children:"Pin *"}),Object(j.jsx)("input",{type:"text",id:"match",className:"main__form--input",pattern:"^[0-9]{1,500}$",title:"S\xf3lo puede contener n\xfameros",placeholder:"a\xf1ade el pin del pozo",value:e.pin,onChange:e.handlePin,required:!0}),Object(j.jsx)("label",{htmlFor:"gender",className:"main__form--label",children:"G\xe9nero"}),Object(j.jsxs)("select",{name:"gender",id:"gender",value:e.gender,onChange:function(n){e.handleSelect(n.target.name,n.target.value)},className:"main__form--select",children:[Object(j.jsx)("option",{value:"choose",children:"elige"}),Object(j.jsx)("option",{value:"male",children:"Hombre"}),Object(j.jsx)("option",{value:"female",children:"Mujer"})]}),Object(j.jsx)("button",{type:"submit",className:"main__form--button",children:"A jugar"}),Object(j.jsx)("span",{className:"main__form--errorMessage",children:e.loginError.message}),Object(j.jsx)(c.b,{to:"/",className:"link",children:Object(j.jsx)("h4",{className:"main__form--link",children:"Volver a la p\xe1gina principal"})})]})})},m=function(e){return Object(j.jsx)("section",{children:Object(j.jsx)(h,{handleLogin:e.handleLogin,gender:e.gender,handleSelect:e.handleSelect,handlePlayer:e.handlePlayer,handlePin:e.handlePin,player:e.player,pin:e.pin,loginError:e.loginError})})},p=function(e){return Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("h4",{className:"profile__heading",children:["Bienvenido ",e.player]}),Object(j.jsx)("p",{className:"profile__paragraph",children:"Por favor, selecciona si has ganado o perdido este partido:"}),Object(j.jsxs)("select",{name:"result",id:"result",value:"result",className:"profile__select",children:[Object(j.jsx)("option",{value:"won",children:"Ganado"}),Object(j.jsx)("option",{value:"lost",children:"Perdido"})]}),Object(j.jsx)("button",{className:"profile__confirmation",children:"Confirme"}),Object(j.jsx)("button",{className:"profile__button",onClick:function(){e.handleLogout()},children:"Cerrar la sesi\xf3n"})]})},b=function(e){return e.isPlayerLoggedIn?Object(j.jsx)(p,{handleLogout:e.handleLogout,player:e.player}):Object(j.jsx)(m,{loginError:e.loginError,handleLogin:e.handleLogin,gender:e.gender,handleSelect:e.handleSelect,handlePlayer:e.handlePlayer,handlePin:e.handlePin,player:e.player,pin:e.pin})},O=a(19),g=a(20),_=a(11),x=a(22),f=a(21),v=function(e){Object(x.a)(a,e);var n=Object(f.a)(a);function a(e){var t;return Object(O.a)(this,a),(t=n.call(this,e)).state={counter:0},t.handleButton=t.handleButton.bind(Object(_.a)(t)),t}return Object(g.a)(a,[{key:"handleButton",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"render",value:function(){return j.Fragment,this.state.counter,Object(j.jsxs)("div",{className:"newTournament",children:[Object(j.jsx)("h1",{className:"newTournament__heading",children:"Hola"}),Object(j.jsx)("p",{className:"newTournament__paragraph",children:"Por favor, pulse el bot\xf3n para crear un nuevo pin del pozo"}),Object(j.jsx)("button",{className:"newTournament__button",onClick:this.handleButton,children:"Nuevo pozo"}),Object(j.jsx)("p",{className:"newTournament__paragraph",children:"El pin del pozo es: *"}),Object(j.jsx)("small",{className:"newTournament__comment",children:"* Por favor, comparte este pin con los otros jugadores"}),Object(j.jsx)("div",{className:"newTournament__container",children:this.state.counter}),Object(j.jsx)(c.b,{to:"/",className:"link",children:Object(j.jsx)("h4",{className:"newTournament__link",children:"Volver a la p\xe1gina principal"})})]})}}]),a}(r.a.Component),y=function(e){return fetch("http://localhost:3000/api/user/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))};var N=function(){var e=d.get("player"),n=Object(t.useState)(""),a=Object(i.a)(n,2),r=a[0],l=a[1],o=Object(t.useState)(""),c=Object(i.a)(o,2),h=c[0],m=c[1],p=Object(t.useState)(e.playerId||""),O=Object(i.a)(p,2),g=O[0],_=O[1],x=Object(t.useState)("choose"),f=Object(i.a)(x,2),N=f[0],P=f[1],S=Object(t.useState)({}),w=Object(i.a)(S,2),T=w[0],L=w[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("h1",{className:"header__heading",children:"Bienvenido al para\xedso del p\xe1del"})}),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)("div",{className:"main__image"}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",children:Object(j.jsx)(u,{})}),Object(j.jsx)(s.a,{exact:!0,path:"/newTournament",children:Object(j.jsx)(v,{})}),Object(j.jsx)(s.a,{exact:!0,path:"/joinTournament",children:Object(j.jsx)(b,{isPlayerLoggedIn:!!g,loginError:T,handleLogin:function(e){console.log(e),y(e).then((function(e){!1===e.error?(_(e.playerId),d.set("player",e)):L(e)}))},handleLogout:function(){d.remove("player"),window.location.reload()},handleSelect:function(e,n){"gender"===e&&P(n)},handlePlayer:function(e){l(e.target.value)},handlePin:function(e){m(e.target.value)},gender:N,player:r,pin:h})})]})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("small",{className:"footer__note",children:"Esta aplicaci\xf3n est\xe1 dise\xf1ada para ayudarte a encontrar la pista correcta. S\xf3lo tienes que elegir tu nombre de usuario, a\xf1adir el pin del pozo y elegir el g\xe9nero. Ya estar\xeda :)"})})]})};o.a.render(Object(j.jsx)(c.a,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8a8c8649.chunk.js.map