(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},23:function(e,t,a){e.exports=a.p+"static/media/loading-gif1.41702357.gif"},26:function(e,t,a){e.exports=a.p+"static/media/union.e38b395c.svg"},27:function(e,t,a){e.exports=a.p+"static/media/union-failed.f10ac534.svg"},29:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(18),a(8)),s=a(16),l=a(1),u=a(2),m=a(3),p=a(21),d=a.n(p);var _=function(e){var t=e.email,a=e.deleteEmail,n=e.isHiddenAuthForm,c=Object(u.h)(),o=Object(u.g)(),i=r.a.useState(!1),s=Object(l.a)(i,2),p=s[0],_=s[1];return r.a.createElement("header",{className:"header page__header"},r.a.createElement("div",{className:"header__nav"},r.a.createElement("img",{src:d.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),!n&&"/sign-up"===c.pathname&&r.a.createElement(m.b,{className:"header__link",to:"/sign-in"},"\xa0\u0412\u043e\u0439\u0442\u0438"),!n&&"/sign-in"===c.pathname&&r.a.createElement(m.b,{className:"header__link",to:"/sign-up"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),t&&r.a.createElement("button",{className:"header__burger ".concat(p&&"header__burger_close"),onClick:function(){_(!p)}})),t&&r.a.createElement("div",{className:"header__auth ".concat(p&&"header__auth_opened")},r.a.createElement("p",{className:"header__email"},t),r.a.createElement(m.b,{className:"header__link header__link_signout",to:"/sign-in",onClick:function(){a(),_(!1),localStorage.removeItem("jwt"),o.push("/sign-in")}},"\xa0\u0412\u044b\u0439\u0442\u0438")))},f=a(23),h=a.n(f),g=r.a.createContext();var b=function(e){var t=e.onCardClick,a=e.card,n=e.onCardLike,c=e.onCardDelete,o=r.a.useContext(g),i=o._id===a.owner,s="elements__remove ".concat(i?"elements__remove_active":null),l=a.likes.some((function(e){return e._id===o._id})),p="elements__like ".concat(l?"elements__like_active":null),d=a.likes.map((function(e){return e.name})).join(", "),_=Object(u.i)().path;return r.a.createElement("li",{className:"elements__item"},r.a.createElement("button",{type:"button",className:s,"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){c(a)}}),r.a.createElement(m.b,{to:"/cards/".concat(a._id)},r.a.createElement("div",{className:"elements__image",role:"img",style:{backgroundImage:"url(".concat(a.link,")")},onClick:function(){t(a,_)}})),r.a.createElement("article",{className:"elements__item-bottom"},r.a.createElement("h4",{className:"elements__item-title"},a.name),r.a.createElement("div",{className:"elements__like-container"},r.a.createElement("button",{type:"button",className:p,"aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a \u0432 \u0432\u0438\u0434\u0435 \u0441\u0435\u0440\u0434\u0435\u0447\u043a\u0430",onClick:function(){n(a)}}),r.a.createElement("div",{className:"elements__like-message"},d?"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f: ".concat(d):"\u042d\u0442\u043e \u043c\u0435\u0441\u0442\u043e \u043f\u043e\u043a\u0430 \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u043e\u0446\u0435\u043d\u0438\u043b...\ud83d\ude12"),r.a.createElement("div",{className:"elements__like-counter"},a.likes.length))))};var E=function(){var e=r.a.useContext(g).name;return e?r.a.createElement("section",{className:"greeting"},r.a.createElement("h2",{className:"greeting__text"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ".concat(e,"!"))):null};var v=function(e){var t=e.onCardFriendClick,a=e.cardFriend,n=Object(u.i)().path;return r.a.createElement("li",{className:"elements__item"},r.a.createElement(m.b,{to:"/friends/".concat(a._id)},r.a.createElement("div",{className:"elements__image",role:"img",style:{backgroundImage:"url(".concat(a.avatar,")")},onClick:function(){t(a,n)}})),r.a.createElement("article",{className:"elements__item-bottom elements__item-bottom_theme-friend"},r.a.createElement("h4",{className:"elements__item-title"},a.name),r.a.createElement("p",{className:"elements__item-subtitle"},a.about)))};var k=function(){return r.a.createElement("footer",{className:"footer page__footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var N=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,c=e.onCardClick,o=e.cards,i=e.onCardLike,s=e.onCardDelete,l=e.onCardFriendClick,p=e.onCardsClick,d=e.onFriendsClick,_=r.a.useContext(g),f=[];o.forEach((function(e){f.includes(e.owner)||f.push(e.owner)}));var N=[];return f.forEach((function(e){var t=o.find((function(t){return t.owner===e}));N.push(t.owner)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"profile page__profile"},r.a.createElement("div",{className:"profile__avatar-container",onClick:t},r.a.createElement("img",{src:_.avatar||h.a,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f",className:"profile__avatar"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__info-top"},r.a.createElement("h2",{className:"profile__title"},_.name||"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),r.a.createElement("button",{type:"button",className:"profile__edit-button",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:a})),r.a.createElement("p",{className:"profile__subtitle"},_.about||"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")),r.a.createElement("button",{type:"button",className:"profile__add-button",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:n})),r.a.createElement("nav",{className:"links page__links"},r.a.createElement("ul",{className:"links__list"},r.a.createElement("li",{className:"links__item"},r.a.createElement(m.c,{to:"/cards",className:"links__item-link",activeClassName:"links__item-link_active",onClick:function(){p("/cards")}},"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"),r.a.createElement(m.c,{to:"/friends",className:"links__item-link",activeClassName:"links__item-link_active",onClick:function(){d("/friends")}},"\u0414\u0440\u0443\u0437\u044c\u044f")))),r.a.createElement("section",{className:"elements page__elements"},r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(E,null)),r.a.createElement("ul",{className:"elements__list"},r.a.createElement(u.b,{path:"/cards"},o.map((function(e){return r.a.createElement(b,{key:e._id,onCardClick:c,card:e,onCardLike:i,onCardDelete:s})}))),r.a.createElement(u.b,{path:"/friends"},N.map((function(e){return r.a.createElement(v,{key:e._id,onCardFriendClick:l,cardFriend:e})}))))),r.a.createElement(k,null))};var C=function(e){var t=e.name,a=e.isOpen,n=e.onClose,c=e.title,o=e.children,i=e.onSubmit;return r.a.createElement("div",{className:"pop-up ".concat(t," ").concat(a?"pop-up-opened":"")},r.a.createElement("form",{onSubmit:i,noValidate:!0,action:"#",className:"form",method:"POST",name:"".concat(t)},r.a.createElement("button",{type:"button",className:"pop-up__close-icon","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:n}),r.a.createElement("h3",{className:"form__title"},c),o))};var O=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,c=e.isLoading,o=r.a.useState(""),i=Object(l.a)(o,2),s=i[0],u=i[1],m=r.a.useState(""),p=Object(l.a)(m,2),d=p[0],_=p[1],f=r.a.useContext(g),h=r.a.useState(!0),b=Object(l.a)(h,2),E=b[0],v=b[1],k=r.a.useState(!1),N=Object(l.a)(k,2),O=N[0],j=N[1],y=r.a.useState(!1),S=Object(l.a)(y,2),L=S[0],w=S[1],R=r.a.useRef(),T=r.a.useRef(),A=r.a.useRef(),U=r.a.useRef();return r.a.useEffect((function(){setTimeout((function(){u(f.name),_(f.about)}),200),j(!1),w(!1),v(!0)}),[f,t]),r.a.useEffect((function(){R.current.checkValidity()&&T.current.checkValidity()?v(!1):v(!0)}),[s,d]),r.a.createElement(C,{onSubmit:function(e){e.preventDefault(),n({name:s,about:d})},name:"pop-up_profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a},r.a.createElement("div",{className:"form__input-container"},r.a.createElement("input",{name:"input-name",type:"text",className:"form__input form__input_name ".concat(O?"form__input_type_error":""),placeholder:"\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f",required:!0,minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\-]+",onChange:function(e){u(e.target.value),e.target.checkValidity()?j(!1):j(!0)},value:s||"",ref:R}),r.a.createElement("span",{id:"input-name-error",className:"form__input-error ".concat(O?"form__input-error_visible":""),ref:A},O?R.current.validationMessage:"")),r.a.createElement("div",{className:"form__input-container"},r.a.createElement("input",{name:"input-profession",type:"text",className:"form__input form__input_profession ".concat(L?"form__input_type_error":""),placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",required:!0,minLength:"2",maxLength:"200",onChange:function(e){_(e.target.value),e.target.checkValidity()?w(!1):w(!0)},value:d||"",ref:T}),r.a.createElement("span",{id:"input-profession-error",className:"form__input-error ".concat(L?"form__input-error_visible":""),ref:U},L?T.current.validationMessage:"")),r.a.createElement("button",{type:"submit",className:"form__input-button",disabled:E},c?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var j=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,c=e.isLoading,o=r.a.useRef(""),i=r.a.useState(""),s=Object(l.a)(i,2),u=s[0],m=s[1],p=r.a.useState(!0),d=Object(l.a)(p,2),_=d[0],f=d[1],h=r.a.useState(!1),g=Object(l.a)(h,2),b=g[0],E=g[1],v=r.a.useRef();return r.a.useEffect((function(){setTimeout((function(){return m("")}),200),E(!1),f(!0)}),[t]),r.a.useEffect((function(){o.current.checkValidity()?f(!1):f(!0)}),[u]),r.a.createElement(C,{onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value})},name:"pop-up_avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:a},r.a.createElement("div",{className:"form__input-container"},r.a.createElement("input",{ref:o,name:"input-link-avatar",type:"url",className:"form__input form__input_link-avatar ".concat(b?"form__input_type_error":""),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:u||"",onChange:function(e){m(e.target.value),e.target.checkValidity()?E(!1):E(!0)}}),r.a.createElement("span",{id:"input-link-avatar-error",className:"form__input-error ".concat(b?"form__input-error_visible":""),ref:v},b?o.current.validationMessage:"")),r.a.createElement("button",{type:"submit",className:"form__input-button",disabled:_},c?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,c=e.isLoading,o=r.a.useState(""),i=Object(l.a)(o,2),s=i[0],u=i[1],m=r.a.useState(""),p=Object(l.a)(m,2),d=p[0],_=p[1],f=r.a.useState(!0),h=Object(l.a)(f,2),g=h[0],b=h[1],E=r.a.useState(!1),v=Object(l.a)(E,2),k=v[0],N=v[1],O=r.a.useState(!1),j=Object(l.a)(O,2),y=j[0],S=j[1],L=r.a.useRef(),w=r.a.useRef(),R=r.a.useRef(),T=r.a.useRef();return r.a.useEffect((function(){u(""),_(""),N(!1),S(!1)}),[t]),r.a.useEffect((function(){L.current.checkValidity()&&w.current.checkValidity()?b(!1):b(!0)}),[s,d]),r.a.createElement(C,{onSubmit:function(e){e.preventDefault(),n({name:s,link:d})},name:"pop-up_card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:a},r.a.createElement("div",{className:"form__input-container"},r.a.createElement("input",{name:"input-name-card",type:"text",className:"form__input form__input_name-card ".concat(k?"form__input_type_error":""),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\-]+",onChange:function(e){u(e.target.value),e.target.checkValidity()?N(!1):N(!0)},value:s||"",ref:L}),r.a.createElement("span",{id:"input-name-card-error",className:"form__input-error ".concat(k?"form__input-error_visible":""),ref:R},k?L.current.validationMessage:"")),r.a.createElement("div",{className:"form__input-container"},r.a.createElement("input",{name:"input-link-card",type:"url",className:"form__input form__input_link-card ".concat(y?"form__input_type_error":""),placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){_(e.target.value),e.target.checkValidity()?S(!1):S(!0)},value:d,ref:w}),r.a.createElement("span",{id:"input-link-card-error",className:"form__input-error ".concat(y?"form__input-error_visible":""),ref:T},y?w.current.validationMessage:"")),r.a.createElement("button",{type:"submit",className:"form__input-button",disabled:g},c?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))};var S=function(e){var t=e.isOpen,a=e.onClose,n=e.onButtonClick,c=e.isLoading;return r.a.createElement(C,{name:"pop-up_confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:a},r.a.createElement("button",{onClick:function(){n()},type:"button",className:"form__input-button form__input-button_comfirm"},c?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430"))};var L=function(e){var t=e.isOpen,a=e.onClose,n=e.selectedCard;return r.a.createElement("div",{className:"pop-up-image ".concat(t&&"pop-up-opened")},r.a.createElement("figure",{className:"pop-up-image__container"},r.a.createElement("button",{type:"button",className:"pop-up-image__close-icon","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:a}),r.a.createElement("img",{alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",className:"pop-up-image__img",src:n.link||n.avatar}),r.a.createElement("figcaption",{className:"pop-up-image__description"},n.name),r.a.createElement("figcaption",{className:"pop-up-image__description"},n.about)))},w="http://localhost:3000";var R=function(e){var t=e.onLoginSuccessed,a=e.onLoginFailed,n=e.isHiddenAuthForm,c=r.a.useState(""),o=Object(l.a)(c,2),i=o[0],s=o[1],p=r.a.useState(""),d=Object(l.a)(p,2),_=d[0],f=d[1],h=Object(u.g)();function g(e){"email"===e.target.name?s(e.target.value):"password"===e.target.name&&f(e.target.value)}return n?null:r.a.createElement("div",{className:"login page__login"},r.a.createElement("h2",{className:"login__title"},"\u0412\u0445\u043e\u0434"),r.a.createElement("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),function(e,t){return fetch("".concat(w,"/signin"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(i,_).then((function(e){var n;e.token?(localStorage.setItem("jwt",e.token),function(e){t(e)}(i),s(""),f(""),h.push("/")):e.message&&(s(""),f(""),n=e.message,a(n))}))}},r.a.createElement("input",{className:"login__email",placeholder:"Email",required:!0,type:"email",name:"email",value:i||"",onChange:g,autoComplete:"off"}),r.a.createElement("input",{className:"login__password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,type:"password",name:"password",value:_,onChange:g,autoComplete:"current-password"}),r.a.createElement("button",{type:"submit",className:"login__button"},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("p",{className:"login__text"},"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",r.a.createElement(m.b,{className:"login__link",to:"/sign-up"}," ","\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))};var T=function(e){var t=e.onRegisterSuccessed,a=e.onRegisterFailed,n=e.isHiddenAuthForm,c=r.a.useState(""),o=Object(l.a)(c,2),i=o[0],s=o[1],p=r.a.useState(""),d=Object(l.a)(p,2),_=d[0],f=d[1],h=Object(u.g)();function g(e){"email"===e.target.name?s(e.target.value):"password"===e.target.name&&f(e.target.value)}function b(e){a(e)}return n?null:r.a.createElement("div",{className:"login page__login"},r.a.createElement("h2",{className:"login__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),function(e,t){return fetch("".concat(w,"/signup"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(i,_).then((function(e){console.log(e),e.data?(s(""),f(""),t(),h.push("/sign-in")):e.error?(s(""),f(""),b(e.error),h.push("/sign-up")):e.message&&(s(""),f(""),b(e.message),h.push("/sign-up"))}))}},r.a.createElement("input",{className:"login__email",placeholder:"Email",required:!0,type:"email",name:"email",value:i||"",onChange:g,autoComplete:"off"}),r.a.createElement("input",{className:"login__password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,type:"password",name:"password",value:_,minLength:3,onChange:g,autoComplete:"current-password"}),r.a.createElement("button",{type:"submit",className:"login__button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.a.createElement("p",{className:"login__text"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",r.a.createElement(m.b,{className:"login__link",to:"/sign-in"}," ","\u0412\u043e\u0439\u0442\u0438"))))},A=a(28);var U=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return r.a.createElement(u.b,{path:a.path},a.loggedIn?r.a.createElement(t,a):r.a.createElement(u.a,{to:"/sign-in"}))},x=a(24),F=a(25),P=new(function(){function e(t){Object(x.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(F.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"patchUserData",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"postCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}]),e}())({baseUrl:"http://localhost:3000",headers:{authorization:"5f8b36db11578d76d19bf81a","Content-Type":"application/json;charset=utf-8"}}),D=a(26),q=a.n(D),I=a(27),V=a.n(I);var H=function(e){var t=e.registerSuccessed,a=e.isOpen,n=e.onClose,c=e.messageError;return r.a.createElement("div",{className:"pop-up-tooltip ".concat(a&&"pop-up-tooltip_opened")},r.a.createElement("div",{className:"pop-up-tooltip__container"},r.a.createElement("button",{type:"button",className:"pop-up-tooltip__close-icon","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0442\u0443\u043b\u0442\u0438\u043f",onClick:n}),r.a.createElement("div",{className:"pop-up-tooltip__inner"},r.a.createElement("img",{className:"pop-up-tooltip__img",src:t?q.a:V.a,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0442\u0443\u043b\u0442\u0438\u043f\u0430"}),r.a.createElement("p",{className:"pop-up-tooltip__text"},t?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"".concat(c,"! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.")))))};var J=function(){var e=r.a.useState(),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState(),o=Object(l.a)(c,2),m=o[0],p=o[1],d=r.a.useState(),f=Object(l.a)(d,2),h=f[0],b=f[1],E=r.a.useState(),v=Object(l.a)(E,2),k=v[0],C=v[1],A=r.a.useState(),x=Object(l.a)(A,2),F=x[0],D=x[1],q=r.a.useState(),I=Object(l.a)(q,2),V=I[0],J=I[1],M=r.a.useState({}),B=Object(l.a)(M,2),z=B[0],W=B[1],Z=r.a.useState({}),G=Object(l.a)(Z,2),$=G[0],K=G[1],Q=r.a.useState([]),X=Object(l.a)(Q,2),Y=X[0],ee=X[1],te=r.a.useState({}),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],ce=r.a.useState(),oe=Object(l.a)(ce,2),ie=oe[0],se=oe[1],le=r.a.useState(""),ue=Object(l.a)(le,2),me=ue[0],pe=ue[1],de=r.a.useState({}),_e=Object(l.a)(de,2),fe=_e[0],he=_e[1],ge=r.a.useState({}),be=Object(l.a)(ge,2),Ee=be[0],ve=be[1],ke=r.a.useState(""),Ne=Object(l.a)(ke,2),Ce=Ne[0],Oe=Ne[1],je=r.a.useState(!1),ye=Object(l.a)(je,2),Se=ye[0],Le=ye[1],we=r.a.useState(),Re=Object(l.a)(we,2),Te=Re[0],Ae=Re[1],Ue=r.a.useState(""),xe=Object(l.a)(Ue,2),Fe=xe[0],Pe=xe[1],De=r.a.useState(null),qe=Object(l.a)(De,2),Ie=qe[0],Ve=qe[1],He=r.a.useState(!0),Je=Object(l.a)(He,2),Me=Je[0],Be=Je[1],ze=Object(u.h)(),We=Object(u.g)();function Ze(e){var t=Y.map((function(t){return t._id===e._id?e:t}));ee(t)}function Ge(){b(!1),n(!1),p(!1),C(!1),D(!1),setTimeout((function(){return W({})}),200),"/"===ze.pathname?We.push("/"):Ce?setTimeout((function(){return We.push(Ce)}),200):me?setTimeout((function(){return We.push(me)}),200):fe?setTimeout((function(){return We.push("/cards")}),200):Ee&&setTimeout((function(){return We.push("/friends")}),200),he({}),ve({})}function $e(){J(!1)}function Ke(){var e,t=localStorage.getItem("jwt");t?(e=t,fetch("".concat(w,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){e.data?(Le(!0),Ve(e.data.email),We.push("/")):e.message&&(localStorage.removeItem("jwt"),We.push("/sign-in"))})).finally((function(){return Be(!1)})):t||Be(!1)}return r.a.useEffect((function(){Promise.all([P.getInitialCards(),P.getUserData()]).then((function(e){ee(Object(s.a)(e[0]));var t=e[0].find((function(e){return e._id===ze.pathname.slice(7)}));t&&(C(!0),W(Object(i.a)({},t)),he(Object(i.a)({},t)));var a=e[0].find((function(e){return e.owner===ze.pathname.slice(9)}));a&&(C(!0),W(Object(i.a)({},a.owner)),ve(Object(i.a)({},a.owner))),K(Object(i.a)({},e[1]))})).catch((function(e){return console.error(e)}))}),[]),r.a.useEffect((function(){var e=function(e){e.target.classList.contains("pop-up-opened")&&Ge()};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}})),r.a.useEffect((function(){var e=function(e){e.target.classList.contains("pop-up-tooltip_opened")&&$e()};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}})),r.a.useEffect((function(){var e=function(e){"Escape"===e.key&&document.querySelector(".pop-up-opened")&&Ge(),"Escape"===e.key&&document.querySelector(".pop-up-tooltip_opened")&&$e()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}})),r.a.useEffect((function(){Ke()}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(g.Provider,{value:$},r.a.createElement(_,{email:Ie,deleteEmail:function(){Ve(null)},isHiddenAuthForm:Me}),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/sign-in"},r.a.createElement(R,{isHiddenAuthForm:Me,onLoginSuccessed:function(e){Le(!0),Ve(e)},onLoginFailed:function(e){Ae(!1),J(!0),Pe(e)}})),r.a.createElement(u.b,{path:"/sign-up"},r.a.createElement(T,{isHiddenAuthForm:Me,onRegisterSuccessed:function(){Ae(!0),J(!0)},onRegisterFailed:function(e){Ae(!1),J(!0),Pe(e)}})),r.a.createElement(U,{path:"/",component:N,loggedIn:Se,onEditAvatar:function(){b(!0)},onEditProfile:function(){n(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e,t){C(!0),W(Object(i.a)({},e)),pe(t)},cards:Y,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===$._id}));t?t&&P.deleteLike(e._id).then((function(e){Ze(e)})).catch((function(e){return console.log(e)})):P.putLike(e._id).then((function(e){Ze(e)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){D(!0),re(Object(i.a)({},e))},onCardFriendClick:function(e,t){C(!0),W(Object(i.a)({},e)),pe(t)},onCardsClick:function(e){Oe(e)},onFriendsClick:function(e){Oe(e)}})),r.a.createElement(O,{isOpen:a,onClose:Ge,onUpdateUser:function(e){var t=e.name,a=e.about;se(!0),P.patchUserData(t,a).then((function(e){K(Object(i.a)({},e)),Ge(),se(!1)})).catch((function(e){return console.error(e)}))},isLoading:ie}),r.a.createElement(j,{isOpen:h,onClose:Ge,onUpdateAvatar:function(e){var t=e.avatar;se(!0),P.patchAvatar(t).then((function(e){K(Object(i.a)({},e)),Ge(),setTimeout((function(){return se(!1)}),200)})).catch((function(e){return console.error(e)}))},isLoading:ie}),r.a.createElement(y,{isOpen:m,onClose:Ge,onAddPlace:function(e){var t=e.name,a=e.link;se(!0),P.postCard(t,a).then((function(e){ee([].concat(Object(s.a)(Y),[e])),Ge(),setTimeout((function(){return se(!1)}),200)})).catch((function(e){return console.error(e)}))},isLoading:ie}),r.a.createElement(S,{isOpen:F,onClose:Ge,onButtonClick:function(){se(!0),P.deleteCard(ne._id).then((function(){var e=Y.filter((function(e){return e._id!==ne._id}));ee(e),Ge(),setTimeout((function(){return se(!1)}),200)})).catch((function(e){return console.log(e)}))},isLoading:ie}),r.a.createElement(L,{isOpen:k,onClose:Ge,selectedCard:z}),r.a.createElement(H,{registerSuccessed:Te,isOpen:V,onClose:$e,messageError:Fe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.aab88531.chunk.js.map