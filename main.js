(()=>{"use strict";var e=document.querySelector(".profile"),t=e.querySelector(".profile__edit-button"),n=e.querySelector(".profile__add-button"),r=e.querySelector(".profile__avatar-cover"),o=document.querySelector(".popup_type_edit"),i=o.querySelector(".popup__form"),u=o.querySelector(".popup__save-button"),c=document.querySelector(".popup_type_add"),a=c.querySelector(".popup__form"),l=c.querySelector(".popup__save-button"),s=document.querySelector(".popup_type_delete").querySelector(".popup__save-button"),f=document.querySelector(".popup_type_avatar"),p=f.querySelector(".popup__form"),y=f.querySelector(".popup__save-button"),h={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__save-button",sectionSelector:".popup__section",errorInputSelector:".popup__field-error",errorInputActiveClass:"popup__input-error_active",inactiveButtonClass:"popup__save-button_inactive"};function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function v(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===_(t)?t:String(t)}var b=function(){function e(t,n,r,o,i,u,c,a){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"_getTemplate",(function(){return document.querySelector(l._templateId).content.querySelector(".element").cloneNode(!0)})),v(this,"_setEventListeners",(function(){l._elementLike.addEventListener("click",l._toggleLikeHandler),l._elementImage.addEventListener("click",l._openModalImageHandler),l._elementTrash.addEventListener("click",(function(){l._popupConfirmation.open(),s.addEventListener("click",l._deleteCard)}))})),v(this,"_toggleLikeHandler",(function(){l._elementLike.classList.contains("element__like_active")?(l._elementLike.classList.remove("element__like_active"),l._deleteLike(l._elementNumberLikes,l._cardDetails._id)):(l._elementLike.classList.add("element__like_active"),l._addLike(l._elementNumberLikes,l._cardDetails._id))})),v(this,"_removeCardHandler",(function(){l._element.remove()})),v(this,"_openModalImageHandler",(function(){l._popupImage.open(l._cardDetails)})),v(this,"_addCardDetails",(function(){var e=l._element.querySelector(".element__place"),t=l._element.querySelector(".element__image");e.textContent=l._cardDetails.name,t.src=l._cardDetails.link,t.alt=l._cardDetails.name})),this._cardDetails=t,this._templateId=n,this._popupImage=r,this._popupConfirmation=o,this._userOwner=i,this._cardOwner=t.owner._id,this._deleteCardServer=u,this._deleteCard=this._deleteCard.bind(this),this._addLike=c,this._deleteLike=a}var t,n;return t=e,(n=[{key:"_checkTrash",value:function(){this._cardOwner!==this._userOwner&&this._elementTrash.remove()}},{key:"_checkLike",value:function(){var e=this;this._cardDetails.likes.some((function(t){return t._id===e._userOwner}))&&this._elementLike.classList.add("element__like_active")}},{key:"_deleteCard",value:function(){s.removeEventListener("click",this._deleteCard),this._deleteCardServer(this._cardDetails._id),this._removeCardHandler()}},{key:"_showCountLikes",value:function(){this._elementNumberLikes.textContent=this._cardDetails.likes.length}},{key:"render",value:function(){return this._element=this._getTemplate(),this._elementLike=this._element.querySelector(".element__like"),this._elementTrash=this._element.querySelector(".element__trash"),this._elementImage=this._element.querySelector(".element__image"),this._elementNumberLikes=this._element.querySelector(".element__likes-number"),this._checkTrash(),this._checkLike(),this._showCountLikes(),this._setEventListeners(),this._addCardDetails(),this._element}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var w=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItemLoading",value:function(e){this._container.append(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function O(e,t,n){return(t=P(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===k(t)?t:String(t)}var C=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"_showInputError",(function(e){r._errorElement.textContent=e,r._errorElement.classList.add(r._validationConfig.errorInputActiveClass)})),O(this,"_hideInputError",(function(){r._errorElement.textContent="",r._errorElement.classList.remove(r._validationConfig.errorInputActiveClass)})),O(this,"_toggleInputErrorState",(function(e){var t=e.validity.valid,n=e.closest(r._validationConfig.sectionSelector);r._errorElement=n.querySelector(r._validationConfig.errorInputSelector),t?r._hideInputError():r._showInputError(e.validationMessage)})),O(this,"_turnOffButtom",(function(){r._submitButton.setAttribute("disabled",!0),r._submitButton.classList.add(r._validationConfig.inactiveButtonClass)})),O(this,"_turnOnButtom",(function(){r._submitButton.removeAttribute("disabled"),r._submitButton.classList.remove(r._validationConfig.inactiveButtonClass)})),O(this,"_toggleButtonState",(function(){r._inputList.some((function(e){return!e.validity.valid}))?r._turnOffButtom():r._turnOnButtom()})),O(this,"_setEventListeners",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._toggleInputErrorState(e),r._toggleButtonState()}))}))})),O(this,"enableValidation",(function(){r._setEventListeners()})),this._validationConfig=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector)),this._submitButton=this._form.querySelector(this._validationConfig.submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"_hideError",value:function(e){var t=e.closest(this._validationConfig.sectionSelector);this._errorElement=t.querySelector(this._validationConfig.errorInputSelector),this._errorElement.textContent="",this._errorElement.classList.remove(this._validationConfig.errorInputActiveClass)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(t),this._closeButton=this._container.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeByClickOnOverlay",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"open",value:function(){this._container.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._container.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._container.addEventListener("mousedown",(function(t){e._closeByClickOnOverlay(t)}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function x(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e,t){var n,r=e.submitFunc;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFunc=r,n._submitForm=n._container.querySelector(".popup__form"),n._inputFields=n._container.querySelectorAll(".popup__field"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputFields.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){R(U(u.prototype),"close",this).call(this),this._submitForm.reset()}},{key:"setInputValues",value:function(e){this._inputFields.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;R(U(u.prototype),"setEventListeners",this).call(this),this._submitForm.addEventListener("submit",(function(t){var n=e._getInputValues();e._submitFunc(t,n)}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(T);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function H(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(r){var o=N(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return H(this,e)});function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(T);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=K(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function K(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}function W(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imagePopupText=t._container.querySelector(".popup__text"),t._imagePopupPhoto=t._container.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e){this._imagePopupText.textContent=e.name,this._imagePopupPhoto.src=e.link,this._imagePopupPhoto.alt=e.name,z(X(u.prototype),"open",this).call(this)}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(T);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Z(o)?o:String(o)),r)}var o}var ee=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._about=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){e.name&&(this._name.textContent=e.name,this._avatar.alt=e.name),e.about&&(this._about.textContent=e.about)}},{key:"getUserOwner",value:function(){return this._owner}},{key:"setUserOwner",value:function(e){this._owner=e}},{key:"setUserAvatar",value:function(e){e.avatar&&(this._avatar.src=e.avatar)}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e){return te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(e)}function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==te(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==te(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===te(o)?o:String(o)),r)}var o}var re=function(e,t){e.textContent=t},oe=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserValues",value:function(){var e=this;return fetch(this._url+"users/me/",{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"updateUserValues",value:function(e){var t=this;return fetch(this._url+"users/me/",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"updateUserAvatar",value:function(e){var t=this;return fetch(this._url+"users/me/avatar/",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch(this._url+"cards/",{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"createNewCard",value:function(e){var t=this;return fetch(this._url+"cards/",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"doLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}}])&&ne(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-57/",headers:{authorization:"8a834428-9740-47ce-9a26-1ae204198268","Content-Type":"application/json"}}),ie=new Y(".popup_type_image");ie.setEventListeners();var ue=new J(".popup_type_delete");ue.setEventListeners();var ce=function(e){oe.deleteCard(e).then((function(e){return ue.close(),e})).catch((function(e){return console.log("DELETE card",e)}))},ae=function(e,t){oe.doLike(t).then((function(t){e.textContent=t.likes.length})).catch((function(e){return console.log("POST delete like",e)}))},le=function(e,t){oe.deleteLike(t).then((function(t){e.textContent=t.likes.length})).catch((function(e){return console.log("POST delete like",e)}))},se=function(e){return new b(e,"#element-template",ie,ue,_e.getUserOwner(),ce,ae,le,oe).render()},fe=new w({renderer:function(e){var t=se(e);fe.addItemLoading(t)}},".elements",oe),pe=new C(h,a),ye=new C(h,i),he=new C(h,p);pe.enableValidation(),ye.enableValidation(),he.enableValidation();var _e=new ee(".profile__name",".profile__job",".profile__avatar",oe),de=new A({submitFunc:function(e,t){var n;e.preventDefault(),re(u,"Сохранение..."),n=t,oe.updateUserValues(n).then((function(e){_e.setUserInfo(e),de.close()})).catch((function(e){return console.log("PATCH User values",e)}))}},".popup_type_edit");de.setEventListeners(),t.addEventListener("click",(function(){de.setInputValues(_e.getUserInfo()),ye.resetValidation(),re(u,"Сохранить"),de.open()}));var ve=new A({submitFunc:function(e,t){e.preventDefault(),re(l,"Сохранение..."),oe.createNewCard(t).then((function(e){var t=se(e);fe.addItem(t),ve.close()})).catch((function(e){return console.log("POST card",e)}))}},".popup_type_add");ve.setEventListeners(),n.addEventListener("click",(function(){pe.resetValidation(),re(l,"Создать"),ve.open()}));var me=new A({submitFunc:function(e,t){var n;e.preventDefault(),re(y,"Сохранение..."),n=t,oe.updateUserAvatar(n).then((function(e){_e.setUserAvatar(e),me.close()})).catch((function(e){return console.log("PATCH Avatar",e)}))}},".popup_type_avatar");me.setEventListeners(),r.addEventListener("click",(function(){he.resetValidation(),re(y,"Сохранить"),me.open()})),oe.getUserValues().then((function(e){_e.setUserOwner(e._id),_e.setUserInfo(e),_e.setUserAvatar(e)})).catch((function(e){return console.log("GET user",e)})),oe.getInitialCards().then((function(e){fe.renderItems(e)})).catch((function(e){return console.log("GET cards",e)}))})();