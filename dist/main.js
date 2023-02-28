(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function r(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var o=function(){function t(e,n,o,i,u,a){var c=this,s=e.cardData,l=u.handleDeleteCard,f=a.handleLikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_deleteCardEverywhere",(function(){c._handleDeleteCard(c.cardData,c)})),r(this,"_setCardLike",(function(){c._likes.some((function(t){return t._id===c._userId}))?(c._likeButton.classList.add("card__like-button_active"),c.isLiked=!0):c._likeButton.classList.remove("card__like-button_active")})),r(this,"setLikesNumber",(function(t){c._likeNumber.innerHTML=t})),r(this,"likeCard",(function(){c._likeButton.classList.toggle("card__like-button_active")})),r(this,"_setDeleteButton",(function(){c._cardOwner===c._userId&&c._deleteButton.classList.remove("card__delete-button_hidden")})),this.cardData=s,this._cardOwner=s.owner._id,this._userId=i._id,this._title=s.name,this._link=s.link,this._templateSelector=o,this._handleDeleteCard=l,this._handleCardClick=n,this._handleLikeCard=f}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._picture=this._element.querySelector(".card__picture"),this._likeButton=this._element.querySelector(".card__like-button"),this._likeNumber=this._element.querySelector(".card__likes-number"),this._deleteButton=this._element.querySelector(".card__delete-button"),this._cardTitle=this._element.querySelector(".card__title"),this._likes=this.cardData.likes,this.isLiked=!1,this._picture.src=this._link,this._picture.alt=this._title,this._cardTitle.textContent=this._title,this._likeNumber.innerHTML=this._likes.length,this._setCardLike(),this._setDeleteButton(),this._setEventListeners(),this.setLikesNumber(this._likes.length),this._element}},{key:"deleteCardOnPage",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleLikeCard(t.cardData)})),this._deleteButton.addEventListener("click",(function(){t._deleteCardEverywhere()})),this._picture.addEventListener("click",(function(){t._handleCardClick(t.cardData)}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function a(t,e,r){return(e=c(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}var s=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_showInputError",(function(t,e){var r=n._formElementSelector.querySelector(".".concat(t.id,"-error"));t.classList.add(n._inputErrorClass),r.textContent=e,r.classList.add(n._errorClass)})),a(this,"_hideInputError",(function(t){var e=n._formElementSelector.querySelector(".".concat(t.id,"-error"));t.classList.remove(n._inputErrorClass),e.classList.remove(n._errorClass),e.textContent=""})),a(this,"_isValid",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t,t.validationMessage)})),this._formElementSelector=r,this._inputSelector=e.inputSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._formElementSelector.querySelectorAll(this._inputSelector)),this._submitButton=this._formElementSelector.querySelector(e.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"_disableSubmitButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"changeButtonOnSaveChanges",value:function(){this._submitButton.textContent=this._submitButton.dataset.buttonLoadingText}},{key:"setDefaultSubmitButtonValue",value:function(){this._submitButton.textContent=this._submitButton.dataset.buttonText}},{key:"resetFormCondition",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e),t._disableSubmitButton()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"!=t.key&&"Esc"!=t.key||(t.preventDefault(),i.close())},(n=p(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-button")}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("mouseup",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},b.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._picture=e._popup.querySelector(".popup__picture"),e._caption=e._popup.querySelector(".popup__picture-caption"),e}return e=u,(r=[{key:"open",value:function(t){b(m(u.prototype),"open",this).call(this),this._caption.textContent=t.name,this._picture.alt=t.name,this._picture.src=t.link}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(n);if(o){var r=j(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,r){var n,o=e.handleFormSubmit,a=r.setSubmitButtonValue;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=o,n._setSubmitButtonValue=a,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(r=[{key:"open",value:function(){k(j(u.prototype),"open",this).call(this),this._setSubmitButtonValue()}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;k(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){k(j(u.prototype),"close",this).call(this),this._form.reset()}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},P.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(n);if(o){var r=B(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormSubmit=n,r._form=r._popup.querySelector(".popup__form"),r._submitButton=r._popup.querySelector(".popup__save-button"),r}return e=u,(r=[{key:"setEventListeners",value:function(t,e){var r=this;P(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(n){n.preventDefault(),r._handleFormSubmit(t,e)}))}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}var q=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&I(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}var V=function(){function t(e){var r=e.userCredentialsSelector,n=e.userDescriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userCredentials=document.querySelector(r),this._userDescription=document.querySelector(n),this._userAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.credentials=this._userCredentials.textContent,this._userInfo.description=this._userDescription.textContent,this._userInfo}},{key:"setUserInfo",value:function(t){var e=t.credentials,r=t.description;this._userCredentials.textContent=e,this._userDescription.textContent=r}},{key:"setUserAvatar",value:function(t){var e=t.link;this._userAvatar.src=e}}])&&U(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var A=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"getCardList",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){throw console.log(t),t}))}},{key:"createCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))})).catch((function(t){throw console.log(t),t}))}},{key:"editUserInfo",value:function(t){var e=t.name,r=t.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:r})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t._id,"/likes"),{method:"PUT",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"changeAvatar",value:function(t){var e=t.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&F(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_incorrect",errorClass:"popup__input-error_active"},H=(document.querySelector(".popup_purpose_show-picture"),document.querySelector(".profile__edit-button")),J=document.querySelector(".profile__add-button"),M=document.querySelector(".popup_purpose_add-card").querySelector(".popup__form"),z=document.querySelector(".popup_purpose_edit-profile").querySelector(".popup__form"),G=z.querySelector(".popup__input_type_credentials"),K=z.querySelector(".popup__input_type_description"),Q=document.querySelector(".profile__avatar-button"),W=document.querySelector(".popup_purpose_change-avatar").querySelector(".popup__form"),X=new A({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"0de4c39e-5b90-4384-ab42-a9e741a5f163","Content-Type":"application/json"}}),Y=function(t){return new s(N,t)},Z=Y(z);Z.enableValidation();var $=Y(M);$.enableValidation();var tt=Y(W);tt.enableValidation();var et=new V({userCredentialsSelector:".profile__credentials",userDescriptionSelector:".profile__description",avatarSelector:".profile__avatar"}),rt=new _(".popup_purpose_show-picture");rt.setEventListeners();var nt=function(t){rt.open(t)},ot=new T(".popup_purpose_confirm-delete",{handleFormSubmit:function(t,e){X.deleteCard(t._id).then((function(){e.deleteCardOnPage()})),ot.close()}}),it=function(t){var e=t.cardData,r=t.userInfo,n=new o({cardData:e},nt,"#cards-template",r,{handleDeleteCard:function(t,e){ot.setEventListeners(t,e),ot.open()}},{handleLikeCard:function(t){n.likeCard(),n.isLiked?X.deleteLike(t._id).then((function(t){n.isLiked=!1,n.setLikesNumber(t.likes.length)})).catch((function(t){console.log(t)})):X.addLike(t).then((function(t){n.isLiked=!0,n.setLikesNumber(t.likes.length)})).catch((function(t){console.log(t)}))}});return n};X.getUserInfo().then((function(t){et.setUserInfo({credentials:t.name,description:t.about}),et.setUserAvatar({link:t.avatar});var e=new q({renderer:function(r){var n=it({cardData:r,userInfo:t}).generateCard();e.addItem(n)}},".gallery");X.getCardList().then((function(t){e.renderItems(t)}));var r=new q({renderer:function(e){var n=it({cardData:e,userInfo:t}).generateCard();r.addItem(n)}},".gallery"),n=new E(".popup_purpose_add-card",{handleFormSubmit:function(t){$.changeButtonOnSaveChanges();var e=[];X.createCard(t).then((function(t){e.push(t),r.renderItems(e),n.close()})).catch((function(t){console.log(t)}))}},{setSubmitButtonValue:function(){$.setDefaultSubmitButtonValue()}});n.setEventListeners(),J.addEventListener("click",(function(){n.open(),$.resetFormCondition()}))})).catch((function(t){console.log(t)}));var ut=new E(".popup_purpose_edit-profile",{handleFormSubmit:function(t){Z.changeButtonOnSaveChanges(),X.editUserInfo({name:t.credentials,about:t.description}).then((function(t){var e=t.name,r=t.about;et.setUserInfo({credentials:e,description:r}),ut.close()})).catch((function(t){console.log(t)}))}},{setSubmitButtonValue:function(){Z.setDefaultSubmitButtonValue()}});ut.setEventListeners(),H.addEventListener("click",(function(){!function(){ut.open(),Z.resetFormCondition();var t=et.getUserInfo();G.value=t.credentials,K.value=t.description}()}));var at=new E(".popup_purpose_change-avatar",{handleFormSubmit:function(t){tt.changeButtonOnSaveChanges(),X.changeAvatar({avatar:t.link}).then((function(t){var e=t.avatar;et.setUserAvatar({link:e}),at.close()})).catch((function(t){console.log(t)}))}},{setSubmitButtonValue:function(){tt.setDefaultSubmitButtonValue()}});at.setEventListeners(),Q.addEventListener("click",(function(){at.open(),tt.resetFormCondition()}))})();