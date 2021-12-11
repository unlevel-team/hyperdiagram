/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
window.HyperEngine =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/rxjs/_esm5/internal/Observable.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observable.js ***!
  \********************************************************/
/*! namespace exports */
/*! export Observable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => /* binding */ Observable\n/* harmony export */ });\n/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/canReportError */ \"./node_modules/rxjs/_esm5/internal/util/canReportError.js\");\n/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/toSubscriber */ \"./node_modules/rxjs/_esm5/internal/util/toSubscriber.js\");\n/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/observable */ \"./node_modules/rxjs/_esm5/internal/symbol/observable.js\");\n/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/pipe */ \"./node_modules/rxjs/_esm5/internal/util/pipe.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./node_modules/rxjs/_esm5/internal/config.js\");\n/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */\n\n\n\n\n\nvar Observable = /*@__PURE__*/ (function () {\n    function Observable(subscribe) {\n        this._isScalar = false;\n        if (subscribe) {\n            this._subscribe = subscribe;\n        }\n    }\n    Observable.prototype.lift = function (operator) {\n        var observable = new Observable();\n        observable.source = this;\n        observable.operator = operator;\n        return observable;\n    };\n    Observable.prototype.subscribe = function (observerOrNext, error, complete) {\n        var operator = this.operator;\n        var sink = (0,_util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__.toSubscriber)(observerOrNext, error, complete);\n        if (operator) {\n            sink.add(operator.call(sink, this.source));\n        }\n        else {\n            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?\n                this._subscribe(sink) :\n                this._trySubscribe(sink));\n        }\n        if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {\n            if (sink.syncErrorThrowable) {\n                sink.syncErrorThrowable = false;\n                if (sink.syncErrorThrown) {\n                    throw sink.syncErrorValue;\n                }\n            }\n        }\n        return sink;\n    };\n    Observable.prototype._trySubscribe = function (sink) {\n        try {\n            return this._subscribe(sink);\n        }\n        catch (err) {\n            if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {\n                sink.syncErrorThrown = true;\n                sink.syncErrorValue = err;\n            }\n            if ((0,_util_canReportError__WEBPACK_IMPORTED_MODULE_2__.canReportError)(sink)) {\n                sink.error(err);\n            }\n            else {\n                console.warn(err);\n            }\n        }\n    };\n    Observable.prototype.forEach = function (next, promiseCtor) {\n        var _this = this;\n        promiseCtor = getPromiseCtor(promiseCtor);\n        return new promiseCtor(function (resolve, reject) {\n            var subscription;\n            subscription = _this.subscribe(function (value) {\n                try {\n                    next(value);\n                }\n                catch (err) {\n                    reject(err);\n                    if (subscription) {\n                        subscription.unsubscribe();\n                    }\n                }\n            }, reject, resolve);\n        });\n    };\n    Observable.prototype._subscribe = function (subscriber) {\n        var source = this.source;\n        return source && source.subscribe(subscriber);\n    };\n    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_3__.observable] = function () {\n        return this;\n    };\n    Observable.prototype.pipe = function () {\n        var operations = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            operations[_i] = arguments[_i];\n        }\n        if (operations.length === 0) {\n            return this;\n        }\n        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_4__.pipeFromArray)(operations)(this);\n    };\n    Observable.prototype.toPromise = function (promiseCtor) {\n        var _this = this;\n        promiseCtor = getPromiseCtor(promiseCtor);\n        return new promiseCtor(function (resolve, reject) {\n            var value;\n            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });\n        });\n    };\n    Observable.create = function (subscribe) {\n        return new Observable(subscribe);\n    };\n    return Observable;\n}());\n\nfunction getPromiseCtor(promiseCtor) {\n    if (!promiseCtor) {\n        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_1__.config.Promise || Promise;\n    }\n    if (!promiseCtor) {\n        throw new Error('no Promise impl found');\n    }\n    return promiseCtor;\n}\n//# sourceMappingURL=Observable.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/Observable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observer.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observer.js ***!
  \******************************************************/
/*! namespace exports */
/*! export empty [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"empty\": () => /* binding */ empty\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./node_modules/rxjs/_esm5/internal/config.js\");\n/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ \"./node_modules/rxjs/_esm5/internal/util/hostReportError.js\");\n/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */\n\n\nvar empty = {\n    closed: true,\n    next: function (value) { },\n    error: function (err) {\n        if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {\n            throw err;\n        }\n        else {\n            (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__.hostReportError)(err);\n        }\n    },\n    complete: function () { }\n};\n//# sourceMappingURL=Observer.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/Observer.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subject.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export AnonymousSubject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Subject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SubjectSubscriber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubjectSubscriber\": () => /* binding */ SubjectSubscriber,\n/* harmony export */   \"Subject\": () => /* binding */ Subject,\n/* harmony export */   \"AnonymousSubject\": () => /* binding */ AnonymousSubject\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Observable */ \"./node_modules/rxjs/_esm5/internal/Observable.js\");\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ \"./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js\");\n/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ \"./node_modules/rxjs/_esm5/internal/SubjectSubscription.js\");\n/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ \"./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js\");\n/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */\n\n\n\n\n\n\n\nvar SubjectSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(SubjectSubscriber, _super);\n    function SubjectSubscriber(destination) {\n        var _this = _super.call(this, destination) || this;\n        _this.destination = destination;\n        return _this;\n    }\n    return SubjectSubscriber;\n}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));\n\nvar Subject = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(Subject, _super);\n    function Subject() {\n        var _this = _super.call(this) || this;\n        _this.observers = [];\n        _this.closed = false;\n        _this.isStopped = false;\n        _this.hasError = false;\n        _this.thrownError = null;\n        return _this;\n    }\n    Subject.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber] = function () {\n        return new SubjectSubscriber(this);\n    };\n    Subject.prototype.lift = function (operator) {\n        var subject = new AnonymousSubject(this, this);\n        subject.operator = operator;\n        return subject;\n    };\n    Subject.prototype.next = function (value) {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        if (!this.isStopped) {\n            var observers = this.observers;\n            var len = observers.length;\n            var copy = observers.slice();\n            for (var i = 0; i < len; i++) {\n                copy[i].next(value);\n            }\n        }\n    };\n    Subject.prototype.error = function (err) {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        this.hasError = true;\n        this.thrownError = err;\n        this.isStopped = true;\n        var observers = this.observers;\n        var len = observers.length;\n        var copy = observers.slice();\n        for (var i = 0; i < len; i++) {\n            copy[i].error(err);\n        }\n        this.observers.length = 0;\n    };\n    Subject.prototype.complete = function () {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        this.isStopped = true;\n        var observers = this.observers;\n        var len = observers.length;\n        var copy = observers.slice();\n        for (var i = 0; i < len; i++) {\n            copy[i].complete();\n        }\n        this.observers.length = 0;\n    };\n    Subject.prototype.unsubscribe = function () {\n        this.isStopped = true;\n        this.closed = true;\n        this.observers = null;\n    };\n    Subject.prototype._trySubscribe = function (subscriber) {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        else {\n            return _super.prototype._trySubscribe.call(this, subscriber);\n        }\n    };\n    Subject.prototype._subscribe = function (subscriber) {\n        if (this.closed) {\n            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();\n        }\n        else if (this.hasError) {\n            subscriber.error(this.thrownError);\n            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;\n        }\n        else if (this.isStopped) {\n            subscriber.complete();\n            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;\n        }\n        else {\n            this.observers.push(subscriber);\n            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__.SubjectSubscription(this, subscriber);\n        }\n    };\n    Subject.prototype.asObservable = function () {\n        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_6__.Observable();\n        observable.source = this;\n        return observable;\n    };\n    Subject.create = function (destination, source) {\n        return new AnonymousSubject(destination, source);\n    };\n    return Subject;\n}(_Observable__WEBPACK_IMPORTED_MODULE_6__.Observable));\n\nvar AnonymousSubject = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(AnonymousSubject, _super);\n    function AnonymousSubject(destination, source) {\n        var _this = _super.call(this) || this;\n        _this.destination = destination;\n        _this.source = source;\n        return _this;\n    }\n    AnonymousSubject.prototype.next = function (value) {\n        var destination = this.destination;\n        if (destination && destination.next) {\n            destination.next(value);\n        }\n    };\n    AnonymousSubject.prototype.error = function (err) {\n        var destination = this.destination;\n        if (destination && destination.error) {\n            this.destination.error(err);\n        }\n    };\n    AnonymousSubject.prototype.complete = function () {\n        var destination = this.destination;\n        if (destination && destination.complete) {\n            this.destination.complete();\n        }\n    };\n    AnonymousSubject.prototype._subscribe = function (subscriber) {\n        var source = this.source;\n        if (source) {\n            return this.source.subscribe(subscriber);\n        }\n        else {\n            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;\n        }\n    };\n    return AnonymousSubject;\n}(Subject));\n\n//# sourceMappingURL=Subject.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/Subject.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export SubjectSubscription [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubjectSubscription\": () => /* binding */ SubjectSubscription\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */\n\n\nvar SubjectSubscription = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(SubjectSubscription, _super);\n    function SubjectSubscription(subject, subscriber) {\n        var _this = _super.call(this) || this;\n        _this.subject = subject;\n        _this.subscriber = subscriber;\n        _this.closed = false;\n        return _this;\n    }\n    SubjectSubscription.prototype.unsubscribe = function () {\n        if (this.closed) {\n            return;\n        }\n        this.closed = true;\n        var subject = this.subject;\n        var observers = subject.observers;\n        this.subject = null;\n        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {\n            return;\n        }\n        var subscriberIndex = observers.indexOf(this.subscriber);\n        if (subscriberIndex !== -1) {\n            observers.splice(subscriberIndex, 1);\n        }\n    };\n    return SubjectSubscription;\n}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));\n\n//# sourceMappingURL=SubjectSubscription.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/SubjectSubscription.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscriber.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscriber.js ***!
  \********************************************************/
/*! namespace exports */
/*! export SafeSubscriber [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Subscriber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Subscriber\": () => /* binding */ Subscriber,\n/* harmony export */   \"SafeSubscriber\": () => /* binding */ SafeSubscriber\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/isFunction */ \"./node_modules/rxjs/_esm5/internal/util/isFunction.js\");\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ \"./node_modules/rxjs/_esm5/internal/Observer.js\");\n/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ \"./node_modules/rxjs/_esm5/internal/Subscription.js\");\n/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ \"./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./node_modules/rxjs/_esm5/internal/config.js\");\n/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/hostReportError */ \"./node_modules/rxjs/_esm5/internal/util/hostReportError.js\");\n/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */\n\n\n\n\n\n\n\nvar Subscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(Subscriber, _super);\n    function Subscriber(destinationOrNext, error, complete) {\n        var _this = _super.call(this) || this;\n        _this.syncErrorValue = null;\n        _this.syncErrorThrown = false;\n        _this.syncErrorThrowable = false;\n        _this.isStopped = false;\n        switch (arguments.length) {\n            case 0:\n                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;\n                break;\n            case 1:\n                if (!destinationOrNext) {\n                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;\n                    break;\n                }\n                if (typeof destinationOrNext === 'object') {\n                    if (destinationOrNext instanceof Subscriber) {\n                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;\n                        _this.destination = destinationOrNext;\n                        destinationOrNext.add(_this);\n                    }\n                    else {\n                        _this.syncErrorThrowable = true;\n                        _this.destination = new SafeSubscriber(_this, destinationOrNext);\n                    }\n                    break;\n                }\n            default:\n                _this.syncErrorThrowable = true;\n                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);\n                break;\n        }\n        return _this;\n    }\n    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber] = function () { return this; };\n    Subscriber.create = function (next, error, complete) {\n        var subscriber = new Subscriber(next, error, complete);\n        subscriber.syncErrorThrowable = false;\n        return subscriber;\n    };\n    Subscriber.prototype.next = function (value) {\n        if (!this.isStopped) {\n            this._next(value);\n        }\n    };\n    Subscriber.prototype.error = function (err) {\n        if (!this.isStopped) {\n            this.isStopped = true;\n            this._error(err);\n        }\n    };\n    Subscriber.prototype.complete = function () {\n        if (!this.isStopped) {\n            this.isStopped = true;\n            this._complete();\n        }\n    };\n    Subscriber.prototype.unsubscribe = function () {\n        if (this.closed) {\n            return;\n        }\n        this.isStopped = true;\n        _super.prototype.unsubscribe.call(this);\n    };\n    Subscriber.prototype._next = function (value) {\n        this.destination.next(value);\n    };\n    Subscriber.prototype._error = function (err) {\n        this.destination.error(err);\n        this.unsubscribe();\n    };\n    Subscriber.prototype._complete = function () {\n        this.destination.complete();\n        this.unsubscribe();\n    };\n    Subscriber.prototype._unsubscribeAndRecycle = function () {\n        var _parentOrParents = this._parentOrParents;\n        this._parentOrParents = null;\n        this.unsubscribe();\n        this.closed = false;\n        this.isStopped = false;\n        this._parentOrParents = _parentOrParents;\n        return this;\n    };\n    return Subscriber;\n}(_Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription));\n\nvar SafeSubscriber = /*@__PURE__*/ (function (_super) {\n    tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(SafeSubscriber, _super);\n    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {\n        var _this = _super.call(this) || this;\n        _this._parentSubscriber = _parentSubscriber;\n        var next;\n        var context = _this;\n        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(observerOrNext)) {\n            next = observerOrNext;\n        }\n        else if (observerOrNext) {\n            next = observerOrNext.next;\n            error = observerOrNext.error;\n            complete = observerOrNext.complete;\n            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__.empty) {\n                context = Object.create(observerOrNext);\n                if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(context.unsubscribe)) {\n                    _this.add(context.unsubscribe.bind(context));\n                }\n                context.unsubscribe = _this.unsubscribe.bind(_this);\n            }\n        }\n        _this._context = context;\n        _this._next = next;\n        _this._error = error;\n        _this._complete = complete;\n        return _this;\n    }\n    SafeSubscriber.prototype.next = function (value) {\n        if (!this.isStopped && this._next) {\n            var _parentSubscriber = this._parentSubscriber;\n            if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {\n                this.__tryOrUnsub(this._next, value);\n            }\n            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {\n                this.unsubscribe();\n            }\n        }\n    };\n    SafeSubscriber.prototype.error = function (err) {\n        if (!this.isStopped) {\n            var _parentSubscriber = this._parentSubscriber;\n            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling;\n            if (this._error) {\n                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {\n                    this.__tryOrUnsub(this._error, err);\n                    this.unsubscribe();\n                }\n                else {\n                    this.__tryOrSetError(_parentSubscriber, this._error, err);\n                    this.unsubscribe();\n                }\n            }\n            else if (!_parentSubscriber.syncErrorThrowable) {\n                this.unsubscribe();\n                if (useDeprecatedSynchronousErrorHandling) {\n                    throw err;\n                }\n                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);\n            }\n            else {\n                if (useDeprecatedSynchronousErrorHandling) {\n                    _parentSubscriber.syncErrorValue = err;\n                    _parentSubscriber.syncErrorThrown = true;\n                }\n                else {\n                    (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);\n                }\n                this.unsubscribe();\n            }\n        }\n    };\n    SafeSubscriber.prototype.complete = function () {\n        var _this = this;\n        if (!this.isStopped) {\n            var _parentSubscriber = this._parentSubscriber;\n            if (this._complete) {\n                var wrappedComplete = function () { return _this._complete.call(_this._context); };\n                if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {\n                    this.__tryOrUnsub(wrappedComplete);\n                    this.unsubscribe();\n                }\n                else {\n                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);\n                    this.unsubscribe();\n                }\n            }\n            else {\n                this.unsubscribe();\n            }\n        }\n    };\n    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {\n        try {\n            fn.call(this._context, value);\n        }\n        catch (err) {\n            this.unsubscribe();\n            if (_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {\n                throw err;\n            }\n            else {\n                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);\n            }\n        }\n    };\n    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {\n        if (!_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {\n            throw new Error('bad call');\n        }\n        try {\n            fn.call(this._context, value);\n        }\n        catch (err) {\n            if (_config__WEBPACK_IMPORTED_MODULE_5__.config.useDeprecatedSynchronousErrorHandling) {\n                parent.syncErrorValue = err;\n                parent.syncErrorThrown = true;\n                return true;\n            }\n            else {\n                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__.hostReportError)(err);\n                return true;\n            }\n        }\n        return false;\n    };\n    SafeSubscriber.prototype._unsubscribe = function () {\n        var _parentSubscriber = this._parentSubscriber;\n        this._context = null;\n        this._parentSubscriber = null;\n        _parentSubscriber.unsubscribe();\n    };\n    return SafeSubscriber;\n}(Subscriber));\n\n//# sourceMappingURL=Subscriber.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/Subscriber.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscription.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscription.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export Subscription [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Subscription\": () => /* binding */ Subscription\n/* harmony export */ });\n/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isArray */ \"./node_modules/rxjs/_esm5/internal/util/isArray.js\");\n/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isObject */ \"./node_modules/rxjs/_esm5/internal/util/isObject.js\");\n/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ \"./node_modules/rxjs/_esm5/internal/util/isFunction.js\");\n/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ \"./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js\");\n/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */\n\n\n\n\nvar Subscription = /*@__PURE__*/ (function () {\n    function Subscription(unsubscribe) {\n        this.closed = false;\n        this._parentOrParents = null;\n        this._subscriptions = null;\n        if (unsubscribe) {\n            this._ctorUnsubscribe = true;\n            this._unsubscribe = unsubscribe;\n        }\n    }\n    Subscription.prototype.unsubscribe = function () {\n        var errors;\n        if (this.closed) {\n            return;\n        }\n        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;\n        this.closed = true;\n        this._parentOrParents = null;\n        this._subscriptions = null;\n        if (_parentOrParents instanceof Subscription) {\n            _parentOrParents.remove(this);\n        }\n        else if (_parentOrParents !== null) {\n            for (var index = 0; index < _parentOrParents.length; ++index) {\n                var parent_1 = _parentOrParents[index];\n                parent_1.remove(this);\n            }\n        }\n        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(_unsubscribe)) {\n            if (_ctorUnsubscribe) {\n                this._unsubscribe = undefined;\n            }\n            try {\n                _unsubscribe.call(this);\n            }\n            catch (e) {\n                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];\n            }\n        }\n        if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(_subscriptions)) {\n            var index = -1;\n            var len = _subscriptions.length;\n            while (++index < len) {\n                var sub = _subscriptions[index];\n                if ((0,_util_isObject__WEBPACK_IMPORTED_MODULE_3__.isObject)(sub)) {\n                    try {\n                        sub.unsubscribe();\n                    }\n                    catch (e) {\n                        errors = errors || [];\n                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {\n                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));\n                        }\n                        else {\n                            errors.push(e);\n                        }\n                    }\n                }\n            }\n        }\n        if (errors) {\n            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);\n        }\n    };\n    Subscription.prototype.add = function (teardown) {\n        var subscription = teardown;\n        if (!teardown) {\n            return Subscription.EMPTY;\n        }\n        switch (typeof teardown) {\n            case 'function':\n                subscription = new Subscription(teardown);\n            case 'object':\n                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {\n                    return subscription;\n                }\n                else if (this.closed) {\n                    subscription.unsubscribe();\n                    return subscription;\n                }\n                else if (!(subscription instanceof Subscription)) {\n                    var tmp = subscription;\n                    subscription = new Subscription();\n                    subscription._subscriptions = [tmp];\n                }\n                break;\n            default: {\n                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');\n            }\n        }\n        var _parentOrParents = subscription._parentOrParents;\n        if (_parentOrParents === null) {\n            subscription._parentOrParents = this;\n        }\n        else if (_parentOrParents instanceof Subscription) {\n            if (_parentOrParents === this) {\n                return subscription;\n            }\n            subscription._parentOrParents = [_parentOrParents, this];\n        }\n        else if (_parentOrParents.indexOf(this) === -1) {\n            _parentOrParents.push(this);\n        }\n        else {\n            return subscription;\n        }\n        var subscriptions = this._subscriptions;\n        if (subscriptions === null) {\n            this._subscriptions = [subscription];\n        }\n        else {\n            subscriptions.push(subscription);\n        }\n        return subscription;\n    };\n    Subscription.prototype.remove = function (subscription) {\n        var subscriptions = this._subscriptions;\n        if (subscriptions) {\n            var subscriptionIndex = subscriptions.indexOf(subscription);\n            if (subscriptionIndex !== -1) {\n                subscriptions.splice(subscriptionIndex, 1);\n            }\n        }\n    };\n    Subscription.EMPTY = (function (empty) {\n        empty.closed = true;\n        return empty;\n    }(new Subscription()));\n    return Subscription;\n}());\n\nfunction flattenUnsubscriptionErrors(errors) {\n    return errors.reduce(function (errs, err) { return errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) ? err.errors : err); }, []);\n}\n//# sourceMappingURL=Subscription.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/Subscription.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/config.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/config.js ***!
  \****************************************************/
/*! namespace exports */
/*! export config [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => /* binding */ config\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar _enable_super_gross_mode_that_will_cause_bad_things = false;\nvar config = {\n    Promise: undefined,\n    set useDeprecatedSynchronousErrorHandling(value) {\n        if (value) {\n            var error = /*@__PURE__*/ new Error();\n            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \\n' + error.stack);\n        }\n        else if (_enable_super_gross_mode_that_will_cause_bad_things) {\n            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');\n        }\n        _enable_super_gross_mode_that_will_cause_bad_things = value;\n    },\n    get useDeprecatedSynchronousErrorHandling() {\n        return _enable_super_gross_mode_that_will_cause_bad_things;\n    },\n};\n//# sourceMappingURL=config.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/config.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/observable.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export observable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"observable\": () => /* binding */ observable\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();\n//# sourceMappingURL=observable.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/symbol/observable.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export $$rxSubscriber [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rxSubscriber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rxSubscriber\": () => /* binding */ rxSubscriber,\n/* harmony export */   \"$$rxSubscriber\": () => /* binding */ $$rxSubscriber\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar rxSubscriber = /*@__PURE__*/ (function () {\n    return typeof Symbol === 'function'\n        ? /*@__PURE__*/ Symbol('rxSubscriber')\n        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();\n})();\nvar $$rxSubscriber = rxSubscriber;\n//# sourceMappingURL=rxSubscriber.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**************************************************************************/
/*! namespace exports */
/*! export ObjectUnsubscribedError [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ObjectUnsubscribedError\": () => /* binding */ ObjectUnsubscribedError\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {\n    function ObjectUnsubscribedErrorImpl() {\n        Error.call(this);\n        this.message = 'object unsubscribed';\n        this.name = 'ObjectUnsubscribedError';\n        return this;\n    }\n    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);\n    return ObjectUnsubscribedErrorImpl;\n})();\nvar ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;\n//# sourceMappingURL=ObjectUnsubscribedError.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export UnsubscriptionError [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnsubscriptionError\": () => /* binding */ UnsubscriptionError\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {\n    function UnsubscriptionErrorImpl(errors) {\n        Error.call(this);\n        this.message = errors ?\n            errors.length + \" errors occurred during unsubscription:\\n\" + errors.map(function (err, i) { return i + 1 + \") \" + err.toString(); }).join('\\n  ') : '';\n        this.name = 'UnsubscriptionError';\n        this.errors = errors;\n        return this;\n    }\n    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);\n    return UnsubscriptionErrorImpl;\n})();\nvar UnsubscriptionError = UnsubscriptionErrorImpl;\n//# sourceMappingURL=UnsubscriptionError.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/canReportError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/canReportError.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export canReportError [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canReportError\": () => /* binding */ canReportError\n/* harmony export */ });\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */\n\nfunction canReportError(observer) {\n    while (observer) {\n        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;\n        if (closed_1 || isStopped) {\n            return false;\n        }\n        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {\n            observer = destination;\n        }\n        else {\n            observer = null;\n        }\n    }\n    return true;\n}\n//# sourceMappingURL=canReportError.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/canReportError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/hostReportError.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export hostReportError [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hostReportError\": () => /* binding */ hostReportError\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction hostReportError(err) {\n    setTimeout(function () { throw err; }, 0);\n}\n//# sourceMappingURL=hostReportError.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/hostReportError.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/identity.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/identity.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export identity [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"identity\": () => /* binding */ identity\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction identity(x) {\n    return x;\n}\n//# sourceMappingURL=identity.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/identity.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArray.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export isArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isArray\": () => /* binding */ isArray\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nvar isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();\n//# sourceMappingURL=isArray.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/isArray.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isFunction.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export isFunction [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isFunction\": () => /* binding */ isFunction\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction isFunction(x) {\n    return typeof x === 'function';\n}\n//# sourceMappingURL=isFunction.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/isFunction.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObject.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export isObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isObject\": () => /* binding */ isObject\n/* harmony export */ });\n/** PURE_IMPORTS_START  PURE_IMPORTS_END */\nfunction isObject(x) {\n    return x !== null && typeof x === 'object';\n}\n//# sourceMappingURL=isObject.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/isObject.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/pipe.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/pipe.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export pipe [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pipeFromArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pipe\": () => /* binding */ pipe,\n/* harmony export */   \"pipeFromArray\": () => /* binding */ pipeFromArray\n/* harmony export */ });\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ \"./node_modules/rxjs/_esm5/internal/util/identity.js\");\n/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */\n\nfunction pipe() {\n    var fns = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        fns[_i] = arguments[_i];\n    }\n    return pipeFromArray(fns);\n}\nfunction pipeFromArray(fns) {\n    if (fns.length === 0) {\n        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;\n    }\n    if (fns.length === 1) {\n        return fns[0];\n    }\n    return function piped(input) {\n        return fns.reduce(function (prev, fn) { return fn(prev); }, input);\n    };\n}\n//# sourceMappingURL=pipe.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/pipe.js?");

/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export toSubscriber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toSubscriber\": () => /* binding */ toSubscriber\n/* harmony export */ });\n/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ \"./node_modules/rxjs/_esm5/internal/Subscriber.js\");\n/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ \"./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js\");\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ \"./node_modules/rxjs/_esm5/internal/Observer.js\");\n/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */\n\n\n\nfunction toSubscriber(nextOrObserver, error, complete) {\n    if (nextOrObserver) {\n        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {\n            return nextOrObserver;\n        }\n        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]) {\n            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]();\n        }\n    }\n    if (!nextOrObserver && !error && !complete) {\n        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(_Observer__WEBPACK_IMPORTED_MODULE_2__.empty);\n    }\n    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(nextOrObserver, error, complete);\n}\n//# sourceMappingURL=toSubscriber.js.map\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/rxjs/_esm5/internal/util/toSubscriber.js?");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! namespace exports */
/*! export __assign [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __asyncDelegator [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __asyncGenerator [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __asyncValues [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __await [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __awaiter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __classPrivateFieldGet [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __classPrivateFieldSet [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __createBinding [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __decorate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __exportStar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __extends [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __generator [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __importDefault [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __importStar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __makeTemplateObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __metadata [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __param [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __read [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __rest [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __spread [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __spreadArrays [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __values [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__extends\": () => /* binding */ __extends,\n/* harmony export */   \"__assign\": () => /* binding */ __assign,\n/* harmony export */   \"__rest\": () => /* binding */ __rest,\n/* harmony export */   \"__decorate\": () => /* binding */ __decorate,\n/* harmony export */   \"__param\": () => /* binding */ __param,\n/* harmony export */   \"__metadata\": () => /* binding */ __metadata,\n/* harmony export */   \"__awaiter\": () => /* binding */ __awaiter,\n/* harmony export */   \"__generator\": () => /* binding */ __generator,\n/* harmony export */   \"__createBinding\": () => /* binding */ __createBinding,\n/* harmony export */   \"__exportStar\": () => /* binding */ __exportStar,\n/* harmony export */   \"__values\": () => /* binding */ __values,\n/* harmony export */   \"__read\": () => /* binding */ __read,\n/* harmony export */   \"__spread\": () => /* binding */ __spread,\n/* harmony export */   \"__spreadArrays\": () => /* binding */ __spreadArrays,\n/* harmony export */   \"__await\": () => /* binding */ __await,\n/* harmony export */   \"__asyncGenerator\": () => /* binding */ __asyncGenerator,\n/* harmony export */   \"__asyncDelegator\": () => /* binding */ __asyncDelegator,\n/* harmony export */   \"__asyncValues\": () => /* binding */ __asyncValues,\n/* harmony export */   \"__makeTemplateObject\": () => /* binding */ __makeTemplateObject,\n/* harmony export */   \"__importStar\": () => /* binding */ __importStar,\n/* harmony export */   \"__importDefault\": () => /* binding */ __importDefault,\n/* harmony export */   \"__classPrivateFieldGet\": () => /* binding */ __classPrivateFieldGet,\n/* harmony export */   \"__classPrivateFieldSet\": () => /* binding */ __classPrivateFieldSet\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __createBinding(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack://HyperEngine/./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/common.js":
/*!******************************************!*\
  !*** ./src/libs/hyper-diagram/common.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nconst _COMMON = {\n  generateID: ({ otherIDs }) => {\n    let _id = null;\n\n    do {\n      _id = _COMMON.makeid(11);\n    }\n    while (otherIDs[_id] !== undefined);\n\n    return _id;\n  },\n\n  makeid: (length) => {\n    var result = '';\n    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n    var charactersLength = characters.length;\n    for ( var i = 0; i < length; i++ ) {\n       result += characters.charAt(Math.floor(Math.random() * charactersLength));\n    }\n    return result;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_COMMON);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/common.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/connection.js":
/*!**********************************************!*\
  !*** ./src/libs/hyper-diagram/connection.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/libs/hyper-diagram/common.js\");\n\n\n\n\n\nconst _CONNECTION_TYPES = {\n  FLOW: 'flow',\n  DATA: 'data',\n};\n\nconst _ENV = {\n  connectionsALL: {},\n  connections: {},\n};\n\nconst _CONNECTION = {\n  _generateID: () => {\n    let _id = null;\n\n    do {\n      _id = _common_js__WEBPACK_IMPORTED_MODULE_0__.default.makeid(11);\n    }\n    while (_ENV.connectionsALL[_id] !== undefined);\n\n    return _id;\n  },\n\n  createConnection: ({ type, source, target }) => {\n    if ( _CONNECTION.getConnections({ source, target }).length > 0 ) { return null; }\n\n    const _connection = {\n      id: _CONNECTION._generateID(),\n      type,\n      source,\n      target,\n    };\n\n    _ENV.connectionsALL[_connection.id] = _connection;\n    _ENV.connections[_connection.id] = _connection;\n    return _connection;\n  },\n\n  addConnection: ({ connection }) => {\n    _ENV.connectionsALL[connection.id] = connection;\n    _ENV.connections[connection.id] = connection;\n  },\n\n  getConnection: ({ id = null }) => {\n    if (id !== null) { return _ENV.connections[id] || null; }\n    return null;\n  },\n\n  getConnections: ({ source = null, target = null }) => {\n    if (source !== null && target === null) {\n      return Object.values(_ENV.connections).filter(_connection => _connection.source === source);\n    }\n    else if (target !== null && source === null) {\n      return Object.values(_ENV.connections).filter(_connection => _connection.target === target);\n    }\n    else if (source !== null && target !== null) {\n      return Object.values(_ENV.connections).filter(_connection => _connection.source === source && _connection.target === target);\n    }\n    return [];\n  },\n\n  getAllConnections: () => {\n    return _ENV.connectionsALL;\n  },\n\n  deleteConnection: ({ id }) => {\n    if (_ENV.connections[id] === undefined) return null;\n\n    delete _ENV.connections[id];\n    delete _ENV.connectionsALL[id];\n    return true;\n  },\n\n  clearAllConnections: () => {\n    Object.keys(_ENV.connectionsALL).forEach(_k => {\n      _CONNECTION.deleteConnection({ id: _k })\n    });\n  },\n\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CONNECTION);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/connection.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/connectors.js":
/*!**********************************************!*\
  !*** ./src/libs/hyper-diagram/connectors.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/libs/hyper-diagram/common.js\");\n/* harmony import */ var _connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection.js */ \"./src/libs/hyper-diagram/connection.js\");\n\n\n\n\nconst _CONNECTOR_TYPES = {\n  FLOW: {\n    STEP_START: 'step-start',\n    STEP_END: 'step-end',\n  },\n  DATA: {\n    DATA_IN: 'data-in',\n    DATA_OUT: 'data-out',\n  },\n};\n\nconst _ENV = {\n  connectorsALL: {},\n  connectors: {},\n};\n\nconst _CONNECTORS = {\n  TYPES: _CONNECTOR_TYPES,\n  _env: _ENV,\n\n  addConnector: ({ node, type, position=0 }) => {\n    const _connector = {\n      id: null, type, position, node\n    };\n\n    switch (type) {\n      case _CONNECTOR_TYPES.FLOW.STEP_START:\n        _connector.id = _common_js__WEBPACK_IMPORTED_MODULE_0__.default.generateID({ otherIDs: _CONNECTORS._env.connectorsALL });\n        node.connectors.flow[_connector.id] = _connector;\n        break;\n      \n      case _CONNECTOR_TYPES.FLOW.STEP_END:\n        _connector.id = _common_js__WEBPACK_IMPORTED_MODULE_0__.default.generateID({ otherIDs: _CONNECTORS._env.connectorsALL });\n        _CONNECTORS._checkConnectorPosition({ connectors: _CONNECTORS.getConnectors({ node, type }), position });\n        node.connectors.flow[_connector.id] = _connector;\n        break;\n\n      case _CONNECTOR_TYPES.DATA.DATA_IN:\n      case _CONNECTOR_TYPES.DATA.DATA_OUT:\n        _connector.id = _common_js__WEBPACK_IMPORTED_MODULE_0__.default.generateID({ otherIDs: _CONNECTORS._env.connectorsALL });\n        node.connectors.data[_connector.id] = _connector;\n        break;\n    \n      default:\n        break;\n    }\n\n    if (_connector.id !== null) {\n      _ENV.connectorsALL[_connector.id] = _connector;\n      _ENV.connectors[_connector.id] = _connector;\n    }\n\n    return _connector.id;\n  },\n\n  getConnector: ({ id }) => {\n    return _ENV.connectors[id];\n  },\n\n  getConnectorDATA: ({ id }) => {\n    const connector = _ENV.connectorsALL[id];\n\n    const _connDATA = {\n      ...connector,\n    };\n    delete _connDATA.node;\n\n    return _connDATA;\n  },\n\n  getConnectors: ({ node=null, type=null }) => {\n    if (node !== null && type === null) {\n      return Object.values(_ENV.connectors).filter(_connector => _connector.node.id === node.id);\n    }\n    else if (type !== null && node === null) {\n      return Object.values(_ENV.connectors).filter(_connector => _connector.type === type);\n    }\n    else if (node !== null && type !== null) {\n      return Object.values(_ENV.connectors).filter(_connector => _connector.node.id === node.id && _connector.type === type);\n    }\n    return [];\n  },\n\n  deleteConnector: ({ node, type, id }) => {\n    let _deleted = false;\n\n    switch (type) {\n      case _CONNECTOR_TYPES.FLOW.STEP_START:\n        if (node.connectors.flow[id] !== undefined) {\n          delete node.connectors.flow[id];\n          _deleted = true;\n        }\n        break;\n\n      case _CONNECTOR_TYPES.FLOW.STEP_END:\n        if (node.connectors.flow[id] !== undefined) {\n          _CONNECTORS._deleteConnectorByPosition({\n            connectors: Object.values(node.connectors.flow).filter(_c => _c.type === _CONNECTOR_TYPES.FLOW.STEP_END), \n            position: node.connectors.flow[id].position });\n          delete node.connectors.flow[id];\n          _deleted = true;\n        }\n        break;\n\n      case _CONNECTOR_TYPES.DATA.DATA_IN:\n      case _CONNECTOR_TYPES.DATA.DATA_OUT:\n        if (node.connectors.data[id] !== undefined) {\n          delete node.connectors.data[id];\n          _deleted = true;\n        }\n        break;\n    \n      default:\n        break;\n    }\n\n    // TODO: DELETE CONNECTIONS 🔍⚠️\n    _connection_js__WEBPACK_IMPORTED_MODULE_1__.default.getConnections({ source: id }).forEach(_connection => _connection_js__WEBPACK_IMPORTED_MODULE_1__.default.deleteConnection({ id: _connection.id }));\n    _connection_js__WEBPACK_IMPORTED_MODULE_1__.default.getConnections({ target: id }).forEach(_connection => _connection_js__WEBPACK_IMPORTED_MODULE_1__.default.deleteConnection({ id: _connection.id }));\n\n    if (_deleted === true) {\n      delete _ENV.connectorsALL[id];\n      delete _ENV.connectors[id];\n    }\n\n    return _deleted;\n  },\n\n  _checkConnectorPosition: ({ connectors, position }) => {\n    // const _connectors = Object.values(connectors);\n    const _connectors = Array.isArray(connectors) ? connectors : Object.values(connectors);\n    \n    if (_connectors.length < position) {\n      position = _connectors.length;\n      // throw Error('Bad position');\n    }\n\n    _connectors.sort((_a, _b) => {\n      if (_a.position > _b.position) {\n        return 1;\n      }\n      if (_a.position < _b.position) {\n        return -1;\n      }\n      return 0;\n    });\n\n    // _connectors.slice(position).forEach(_connector => { // rearrange\n    //   _connectors.position++;\n    // });\n\n    for (let _i = position; _i < _connectors.length; _i++) {  // rearrange\n      _connectors[_i].position++;\n    }\n  },\n\n  _deleteConnectorByPosition: ({ connectors, position }) => {\n    const _connectors = Object.values(connectors);\n\n    if (_connectors.length < position) {\n      // position = _connectors.length;\n      throw Error('Bad position');\n    }\n\n    _connectors.sort((_a, _b) => {\n      if (_a.position > _b.position) {\n        return 1;\n      }\n      if (_a.position < _b.position) {\n        return -1;\n      }\n      return 0;\n    });\n\n    for (let _i = position + 1; _i < _connectors.length; _i++) {  // rearrange\n      _connectors[_i].position--;\n    }\n  },\n\n  loadConnectors: ({ node }) => {\n    Object.values(node.connectors.flow).forEach(_c => {  // Process the flow connectors 🧩🛠\n      _c.node = node;\n      _ENV.connectors[_c.id] = _c;\n      _ENV.connectorsALL[_c.id] = _c;\n    });\n    \n    Object.values(node.connectors.data).forEach(_c => {  // Process the data connectors 🧩🛠\n      _c.node = node;\n      _ENV.connectors[_c.id] = _c;\n      _ENV.connectorsALL[_c.id] = _c;\n    });\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CONNECTORS);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/connectors.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/data/index.js":
/*!**********************************************!*\
  !*** ./src/libs/hyper-diagram/data/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states.js */ \"./src/libs/hyper-diagram/data/states.js\");\n\n\n\n\n\nconst _DATA = {\n  states: _states_js__WEBPACK_IMPORTED_MODULE_0__.default,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DATA);\n\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/data/index.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/data/states.js":
/*!***********************************************!*\
  !*** ./src/libs/hyper-diagram/data/states.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common.js */ \"./src/libs/hyper-diagram/common.js\");\n\n\n\nconst _DEF_STATE = {\n  id: null,\n  name: null,\n  description: null,\n  properties: {},\n};\n\nconst _DEF_PROPERTY = {\n  id: null,\n  type: null,\n  value: null,\n};\n\nconst _DEF_STATE_REF = {\n  id: null,\n  reference: null,\n};\n\nconst _ENV = {\n  states: {}, // All the states\n  referencesALL: {},  // All the state references \n  references: {}, // The state references in the current context\n};\n\nconst _STATES = {\n  _env: _ENV,\n\n  addState: ({ id, name, description, properties }) => {\n    if (_ENV.states[id] !== undefined) throw new Error('State id already exists');\n\n    const _state = {\n      ..._DEF_STATE,\n      id,\n      name,\n      description,\n      properties,\n    };\n    _ENV.states[id] = _state;\n  },\n\n  getStates: () => {\n    return _ENV.states;\n  },\n\n  getState: ({ id }) => {\n    return _ENV.states[id];\n  },\n\n  updateState: ({ id, name, description, properties }) => {\n    if (_ENV.states[id] === undefined) throw new Error('State id not exists');\n\n    const _state = {\n      ..._DEF_STATE,\n      id,\n      name,\n      description,\n      properties,\n    };\n    _ENV.states[id] = _state;\n  },\n\n  deleteState: ({ id }) => {\n    if (_ENV.states[id] === undefined) return null;\n    Object.values(_ENV.references).filter(_ref => _ref.reference === id)  // Delete references\n      .forEach(_ref => {\n        _STATES.deleteReference({ id: _ref.id })\n      });\n\n    delete _ENV.states[id];\n    return true;\n  },\n\n  clearStates: () => {\n    Object.values(_ENV.states).forEach(state => _STATES.deleteState(state));\n  },\n\n  addReference: ({ id = null, state }) => {\n    if (_ENV.states[state] === undefined) throw new Error('State id not exists');\n    if (_ENV.referencesALL[id] !== undefined) throw new Error('State reference id already exists');\n    // const id = _COMMON.generateID({ otherIDs: _ENV.referencesALL });  // Generate ID for the state reference 🔍⚠️\n\n    const _stateRef = {\n      ..._DEF_STATE_REF,\n      id, \n      reference: state,\n    };\n    _ENV.referencesALL[id] = _stateRef;\n    _ENV.references[id] = _stateRef;\n\n    return _stateRef;\n  },\n\n  getReferences: () => {\n    return _ENV.references;\n  },\n\n  getAllReferences: () => {\n    return _ENV.referencesALL;\n  },\n\n  getReference: ({ id }) => {\n    return _ENV.references[id];\n  },\n\n  getStateReferences: ({ id }) => {\n    return Object.values(_ENV.references).filter(_r => _r.reference === id);\n  },\n\n  deleteReference: ({ id }) => {\n    if (_ENV.references[id] === undefined) return null;\n    delete _ENV.references[id];\n    delete _ENV.referencesALL[id];\n    return true;\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_STATES);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/data/states.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/defs-nodes/data-state-default.js":
/*!*****************************************************************!*\
  !*** ./src/libs/hyper-diagram/defs-nodes/data-state-default.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _data_states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/states.js */ \"./src/libs/hyper-diagram/data/states.js\");\n\n\n\n\n\nconst _NODE = {\n  def: {\n    name: 'data state default',\n    category: 'data',\n    family: 'state',\n    type: 'default',\n    connectors: [\n      { type: 'data-in' },\n      { type: 'data-out' }\n    ],\n  },\n\n  create: ({ node }) => { \n    if (node.extra === null) {\n      node.extra = {};\n    }\n\n    node.extra = {\n      source: null, // id of the source data state\n      state: null,  // the source data state\n      reference: null, // id of the reference\n      ...node.extra,\n    };\n\n    // Add the source state id to the extra information\n    const _state = _data_states_js__WEBPACK_IMPORTED_MODULE_0__.default.getState({ id: node.extra.source });\n    node.extra.state = _state;\n\n    // Add the state reference, Node ID is the same as the ID of the state reference 🔍⚠️\n    const _stateRef = _data_states_js__WEBPACK_IMPORTED_MODULE_0__.default.addReference({ id: node.id , state: node.extra.source });\n    node.extra.reference = _stateRef.id;\n    \n    return node;\n  },\n  \n  delete: ({ node }) => {\n    // Delete the state reference\n    _data_states_js__WEBPACK_IMPORTED_MODULE_0__.default.deleteReference({ id: node.extra.reference });\n  },\n\n  getDATA: ({ node }) => {\n    const _nodeDATA = {\n      ...node,\n      extra: {\n        ...node.extra,\n        state: null,\n      }\n    };\n\n    return _nodeDATA;\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/defs-nodes/data-state-default.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/defs-nodes/flow-signal-emit.js":
/*!***************************************************************!*\
  !*** ./src/libs/hyper-diagram/defs-nodes/flow-signal-emit.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nconst _PROCESS = {\n  run: ({ node, engine }) => {\n    engine.flowSignals.notifySignal({ signal: node.extra.attributes['signal-name'].value });\n  },\n};\n\nconst _NODE = {\n  def: {\n    name: 'flow signal emit',\n    category: 'flow',\n    family: 'signal',\n    type: 'emit',\n    connectors: [\n      { type: 'step-start' },\n    ],\n    attributes: {\n      'signal-name': {\n        type: 'string',\n        value: null,\n      }\n    },\n  },\n  create: ({ node }) => { return node; },\n  delete: ({ node }) => {},\n  process: _PROCESS,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/defs-nodes/flow-signal-emit.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/defs-nodes/flow-signal-listen.js":
/*!*****************************************************************!*\
  !*** ./src/libs/hyper-diagram/defs-nodes/flow-signal-listen.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst _PROCESS = {\n  processDiagram: ({ diagram, engine }) => {\n    const nodes = diagram.node.getNodes();\n\n    const _listenNodes = Object.values(nodes).filter(_n => _n.category === 'flow' && _n.family === 'signal' && _n.type === 'listen');\n    _listenNodes.forEach(_n => {\n      const _signalName = _n.extra.attributes['signal-name'].value;\n      engine.flowSignals.listenToSignal({ signal: _signalName, listener: () => {\n        engine.flowControl.gotoNode({ id: _n.id });\n      }});\n    });\n  },\n\n};\n\n\nconst _NODE = {\n  def: {\n    name: 'flow signal listen',\n    category: 'flow',\n    family: 'signal',\n    type: 'listen',\n    connectors: [\n      { type: 'step-end' },\n    ],\n    attributes: {\n      'signal-name': {\n        type: 'string',\n        value: null,\n      }\n    },\n  },\n  create: ({ node }) => { return node; },\n  delete: ({ node }) => {},\n  process: _PROCESS,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/defs-nodes/flow-signal-listen.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/defs-nodes/flow-step-default.js":
/*!****************************************************************!*\
  !*** ./src/libs/hyper-diagram/defs-nodes/flow-step-default.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\n\nconst _NODE = {\n  def: {\n    name: 'flow step default',\n    category: 'flow',\n    family: 'step',\n    type: 'default',\n    connectors: [\n      { type: 'step-start' },\n      { type: 'step-end' },\n      { type: 'data-in' },\n      { type: 'data-out' }\n    ],\n  },\n  create: ({ node }) => { return node; },\n  delete: ({ node }) => {}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/defs-nodes/flow-step-default.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/defs-nodes/flow-step-function-call.js":
/*!**********************************************************************!*\
  !*** ./src/libs/hyper-diagram/defs-nodes/flow-step-function-call.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nconst _PROCESS = {\n  run: ({ node, engine, data }) => {\n    const _externalProcess = engine.diagramProcess.getExternalProcess({ id: node.extra.attributes['function-name'].value });\n    _externalProcess({ engine, data });\n  },\n};\n\n\nconst _NODE = {\n  def: {\n    name: 'flow step function call',\n    category: 'flow',\n    family: 'step',\n    type: 'function-call',\n    connectors: [\n      { type: 'step-start' },\n      { type: 'step-end' },\n      { type: 'data-in' },\n      { type: 'data-out' }\n    ],\n    attributes: {\n      'function-name': {\n        type: 'string',\n        value: null,\n      }\n    },\n  },\n  create: ({ node }) => { return node; },\n  delete: ({ node }) => {},\n  process: _PROCESS,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/defs-nodes/flow-step-function-call.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/defs-nodes/flow-step-pause.js":
/*!**************************************************************!*\
  !*** ./src/libs/hyper-diagram/defs-nodes/flow-step-pause.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\nconst _PROCESS = {\n  run: ({ node, engine }) => {\n    engine.flowControl.pauseFlow();\n  },\n};\n\nconst _NODE = {\n  def: {\n    name: 'flow step pause',\n    category: 'flow',\n    family: 'step',\n    type: 'pause',\n    connectors: [\n      { type: 'step-start' },\n      { type: 'step-end' }\n    ],\n  },\n  create: ({ node }) => { return node; },\n  delete: ({ node }) => {},\n  process: _PROCESS,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/defs-nodes/flow-step-pause.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/defs-nodes/index.js":
/*!****************************************************!*\
  !*** ./src/libs/hyper-diagram/defs-nodes/index.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _flow_step_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flow-step-default.js */ \"./src/libs/hyper-diagram/defs-nodes/flow-step-default.js\");\n/* harmony import */ var _data_state_default_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-state-default.js */ \"./src/libs/hyper-diagram/defs-nodes/data-state-default.js\");\n/* harmony import */ var _flow_step_pause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flow-step-pause.js */ \"./src/libs/hyper-diagram/defs-nodes/flow-step-pause.js\");\n/* harmony import */ var _flow_step_function_call_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flow-step-function-call.js */ \"./src/libs/hyper-diagram/defs-nodes/flow-step-function-call.js\");\n/* harmony import */ var _flow_signal_listen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flow-signal-listen.js */ \"./src/libs/hyper-diagram/defs-nodes/flow-signal-listen.js\");\n/* harmony import */ var _flow_signal_emit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flow-signal-emit.js */ \"./src/libs/hyper-diagram/defs-nodes/flow-signal-emit.js\");\n\n\n\n\n\n\n\n\nconst _ENV = {\n  nodesDEFS: {\n    flow_step_default: _flow_step_default_js__WEBPACK_IMPORTED_MODULE_0__.default,\n    data_state_default: _data_state_default_js__WEBPACK_IMPORTED_MODULE_1__.default,\n    flow_step_pause: _flow_step_pause_js__WEBPACK_IMPORTED_MODULE_2__.default,\n    flow_step_function_call: _flow_step_function_call_js__WEBPACK_IMPORTED_MODULE_3__.default,\n    flow_signal_listen: _flow_signal_listen_js__WEBPACK_IMPORTED_MODULE_4__.default,\n    flow_signal_emit: _flow_signal_emit_js__WEBPACK_IMPORTED_MODULE_5__.default,\n  },\n  categories: {},\n};\n\n/**\n * Nodes definitions\n */\nconst _NODES = {\n  _env: _ENV,\n  init: () => {\n    Object.keys(_ENV.nodesDEFS).forEach(_k => {\n      _NODES.defineNode({ nodeDEF: _ENV.nodesDEFS[_k] });\n    });\n  },\n\n  defineNode: ({ nodeDEF }) => {\n    const { category, family, type } = nodeDEF.def;\n\n    if (_ENV.categories[category] === undefined) { _ENV.categories[category] = { name: category, families: {} }; }\n    const _category = _ENV.categories[category];\n\n    if (_category.families[family] === undefined) { _category.families[family] = { name: family, types: {} }; }\n    const _family = _category.families[family];\n\n    if (_family.types[type] !== undefined) { \n      throw new Error('Node type already defined')\n    }\n    _family.types[type] = { name: type, def: nodeDEF }; \n  },\n\n  getNodeDEF: ({ category, family, type }) => {\n    const _category = _ENV.categories[category];\n    if (_category === undefined) { throw new Error('Category not found.'); }\n    const _family = _category.families[family];\n    if (_family === undefined) { throw new Error('Family not found.'); }\n    const _type = _family.types[type];\n    if (_type === undefined) { throw new Error('Type not found.'); }\n    return _type.def\n  },\n\n  getAllNodeDEFS: () => _ENV.nodesDEFS,\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODES);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/defs-nodes/index.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/index.js":
/*!*****************************************!*\
  !*** ./src/libs/hyper-diagram/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/libs/hyper-diagram/node.js\");\n/* harmony import */ var _connectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connectors.js */ \"./src/libs/hyper-diagram/connectors.js\");\n/* harmony import */ var _connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.js */ \"./src/libs/hyper-diagram/connection.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./src/libs/hyper-diagram/data/index.js\");\n/* harmony import */ var _data_states_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/states.js */ \"./src/libs/hyper-diagram/data/states.js\");\n\n\n\n\n\n\n\nconst _HYPERDIAGRAM = {\n  node: _node_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  connectors: _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  connection: _connection_js__WEBPACK_IMPORTED_MODULE_2__.default,\n  data: _data__WEBPACK_IMPORTED_MODULE_3__.default,\n\n  init: () => {\n    _node_js__WEBPACK_IMPORTED_MODULE_0__.default.init();\n  },\n\n  getDATA: () => {\n    const _hyperDiagramDATA = {\n      nodes: _node_js__WEBPACK_IMPORTED_MODULE_0__.default.getAllNodesDATA(),\n      connections: _connection_js__WEBPACK_IMPORTED_MODULE_2__.default.getAllConnections(),\n      data: {\n        states: _data__WEBPACK_IMPORTED_MODULE_3__.default.states.getStates(),\n        references: _data__WEBPACK_IMPORTED_MODULE_3__.default.states.getAllReferences(),\n      },\n    };\n\n    // https://stackoverflow.com/questions/11616630/how-can-i-print-a-circular-structure-in-a-json-like-format 🧩📌\n    // const getCircularReplacer = () => {\n    //   const seen = new WeakSet();\n    //   return (key, value) => {\n    //     if (typeof value === \"object\" && value !== null) {\n    //       if (seen.has(value)) {\n    //         return;\n    //       }\n    //       seen.add(value);\n    //     }\n    //     return value;\n    //   };\n    // };\n    \n    // let _dataJSON = JSON.stringify(_hyperDiagramDATA, getCircularReplacer(), 2);\n    let _dataJSON = JSON.stringify(_hyperDiagramDATA, null, 2);\n    return _dataJSON;\n  },\n\n  loadDATA: ({ data }) => {\n    _node_js__WEBPACK_IMPORTED_MODULE_0__.default.clearAllNodes();\n    _data_states_js__WEBPACK_IMPORTED_MODULE_4__.default.clearStates();\n\n    Object.values(data.data.states).forEach(state => _data__WEBPACK_IMPORTED_MODULE_3__.default.states.addState(state));  // Load states\n    // Object.values(data.data.references).forEach(_r => _DATA.states.addReference({ id: _r.id, state: _r.reference }));  // Load references\n\n    Object.values(data.nodes).forEach(nodeDATA => _node_js__WEBPACK_IMPORTED_MODULE_0__.default.loadNode({ nodeDATA }));  // Load nodes\n    Object.values(data.connections).forEach(connection => _connection_js__WEBPACK_IMPORTED_MODULE_2__.default.addConnection({ connection }));  // Add connections\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_HYPERDIAGRAM);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/index.js?");

/***/ }),

/***/ "./src/libs/hyper-diagram/node.js":
/*!****************************************!*\
  !*** ./src/libs/hyper-diagram/node.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/libs/hyper-diagram/common.js\");\n/* harmony import */ var _connectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connectors.js */ \"./src/libs/hyper-diagram/connectors.js\");\n/* harmony import */ var _defs_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defs-nodes */ \"./src/libs/hyper-diagram/defs-nodes/index.js\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ \"./src/utils/index.js\");\n\n\n\n\n\n\nconst _ENV = {\n  nodesALL: {},\n  nodes: {},\n};\n\n\nconst _NODE = {\n  _env: _ENV,\n\n  init: () => {\n    _defs_nodes__WEBPACK_IMPORTED_MODULE_2__.default.init();\n  },\n\n  create: ({ category, family, type, extra={} }) => {\n    const _nodeDEF = _defs_nodes__WEBPACK_IMPORTED_MODULE_2__.default.getNodeDEF({ category, family, type });\n    \n    let _node = {\n      id: _common_js__WEBPACK_IMPORTED_MODULE_0__.default.generateID({ otherIDs: _ENV.nodesALL }),\n      class: 'node',\n      category,\n      family,\n      type,\n      name: null,\n      extra: {\n        ...extra,\n        attributes: {\n          ..._utils_index_js__WEBPACK_IMPORTED_MODULE_3__.default.deepClone(_nodeDEF.def.attributes),  // clone the attributes of the node definition 🧩\n          ...extra.attributes,\n        },\n      },\n      connectors: {\n        flow: {},\n        data: {},\n      },\n    };\n    _node.name = `${_nodeDEF.def.name} - ${_node.id}`;\n\n    const _step_start = _nodeDEF.def.connectors.find(_c => _c.type === 'step-start');\n    if (_step_start !== undefined) {\n      _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.addConnector({ node: _node, type: _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.TYPES.FLOW.STEP_START });\n    }\n\n    const _step_end = _nodeDEF.def.connectors.find(_c => _c.type === 'step-end');\n    if (_step_end !== undefined) {\n      _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.addConnector({ node: _node, type: _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.TYPES.FLOW.STEP_END });\n    }\n\n    const _data_in = _nodeDEF.def.connectors.find(_c => _c.type === 'data-in');\n    if (_data_in !== undefined) {\n      _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.addConnector({ node: _node, type: _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.TYPES.DATA.DATA_IN });\n    }\n\n    const _data_out = _nodeDEF.def.connectors.find(_c => _c.type === 'data-out');\n    if (_data_out !== undefined) {\n      _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.addConnector({ node: _node, type: _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.TYPES.DATA.DATA_OUT });\n    }\n\n    _node = _nodeDEF.create({ node: _node });\n\n    _ENV.nodesALL[_node.id] = _node;\n    _ENV.nodes[_node.id] = _node;\n    return _node;\n  },\n\n  delete: ({ id }) => {\n    if (_ENV.nodes[id] === undefined) return null;\n    const node = _ENV.nodes[id];\n\n    const _nodeDEF = _defs_nodes__WEBPACK_IMPORTED_MODULE_2__.default.getNodeDEF(node);\n    _nodeDEF.delete({ node });\n\n    _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.getConnectors({ node })\n      .forEach(_connector => _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.deleteConnector({ node, type: _connector.type, id: _connector.id }));\n\n    delete _ENV.nodes[id];\n    delete _ENV.nodesALL[id];\n    return true;\n  },\n\n  getNode: ({ id }) => {\n    return _ENV.nodes[id];\n  },\n\n  getNodeDEF: _defs_nodes__WEBPACK_IMPORTED_MODULE_2__.default.getNodeDEF,\n\n  getAllNodeDEFS: _defs_nodes__WEBPACK_IMPORTED_MODULE_2__.default.getAllNodeDEFS,\n\n  getNodeDATA: ({ id }) => {\n    const node = _ENV.nodes[id];\n    \n    let _nodeDATA = {\n      ...node,\n      connectors: {\n        flow: {},\n        data: {},\n      },\n    };\n\n    // Obtain connectors data 🧩⚙\n    Object.values(node.connectors.flow).forEach(_c => {\n      _nodeDATA.connectors.flow[_c.id] = _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.getConnectorDATA(_c);\n    });\n\n    Object.values(node.connectors.data).forEach(_c => {\n      _nodeDATA.connectors.data[_c.id] = _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.getConnectorDATA(_c);\n    });\n\n    // Obtain data from the node definition 🧩⚙\n    const _nodeDEF = _defs_nodes__WEBPACK_IMPORTED_MODULE_2__.default.getNodeDEF(node);\n    if (_nodeDEF.getDATA !== undefined) {\n      _nodeDATA = _nodeDEF.getDATA({ node: _nodeDATA });\n    }\n\n    return _nodeDATA;\n  },\n\n  getNodes: () => {\n    return _ENV.nodes;\n  },\n\n  getAllNodes: () => {\n    return _ENV.nodesALL;\n  },\n\n  getAllNodesDATA: () => {\n    const _allNodesDATA = {};\n\n    Object.values(_ENV.nodesALL).forEach(_n => {\n      _allNodesDATA[_n.id] = _NODE.getNodeDATA(_n);\n    });\n    \n    return _allNodesDATA;\n  },\n\n  clearAllNodes: () => {\n    Object.keys(_ENV.nodesALL).forEach(_k => {\n      _NODE.delete({ id: _k });\n    });\n  },\n\n  loadNode: ({ nodeDATA }) => {\n    const _nodeDEF = _defs_nodes__WEBPACK_IMPORTED_MODULE_2__.default.getNodeDEF(nodeDATA);\n\n    let node = {\n      ...nodeDATA,\n    };\n\n    _connectors_js__WEBPACK_IMPORTED_MODULE_1__.default.loadConnectors({ node });\n\n    node = _nodeDEF.create({ node });\n\n    _ENV.nodesALL[node.id] = node;\n    _ENV.nodes[node.id] = node;\n  },\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NODE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-diagram/node.js?");

/***/ }),

/***/ "./src/libs/hyper-engine/data-control.js":
/*!***********************************************!*\
  !*** ./src/libs/hyper-engine/data-control.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nconst _ENV = {\n  engine: null,\n  hyperdiagram: null,\n  dataIN: {},\n  dataOUT: {},\n}\n\nconst _DATA_CONTROL = {\n  init: ({ engine }) => {\n    _ENV.engine = engine;\n    _ENV.hyperdiagram = engine._env.hyperdiagram;  // Access to other environment ⚠❗🧩\n  },\n\n  setDataFromNode: ({ node }) => {\n    _ENV.dataIN = {};\n    _ENV.dataOUT = {};\n\n    const _connectorDataIN = _ENV.hyperdiagram.connectors.getConnectors({ node, type: 'data-in' })[0];  // Obtain the connector for 'data-in'\n    if (_connectorDataIN !== undefined) {\n      const _connectionsDataIN = _ENV.hyperdiagram.connection.getConnections({ target: _connectorDataIN.id });\n      _connectionsDataIN.forEach(_c => {\n        const _sourceDataIN = _ENV.hyperdiagram.connectors.getConnector({ id: _c.source });\n        const _stateDataIN = _ENV.hyperdiagram.data.states.getState({ id: _sourceDataIN.node.extra.source });\n        _ENV.dataIN[_stateDataIN.id] = Object.values(_stateDataIN.properties).reduce((_props, _prop) => {\n          _props[_prop.id] = _prop.value;\n          return _props;\n        }, {});\n      });\n    }\n\n    const _connectorDataOUT = _ENV.hyperdiagram.connectors.getConnectors({ node, type: 'data-out' })[0];  // Obtain the connector for 'data-out'\n    if (_connectorDataOUT !== undefined) {\n      const _connectionsDataOUT = _ENV.hyperdiagram.connection.getConnections({ source: _connectorDataOUT.id });\n      _connectionsDataOUT.forEach(_c => {\n        const _targetDataOUT = _ENV.hyperdiagram.connectors.getConnector({ id: _c.target });\n        const _stateDataOUT = _ENV.hyperdiagram.data.states.getState({ id: _targetDataOUT.node.extra.source });\n        _ENV.dataOUT[_stateDataOUT.id] = Object.values(_stateDataOUT.properties).reduce((_props, _prop) => {\n          _props[_prop.id] = _prop.value;\n          return _props;\n        }, {});\n      });\n    }\n  },\n\n  getDATA: () => {\n    return {\n      dataIN: _ENV.dataIN,\n      dataOUT: _ENV.dataOUT,\n    };\n  },\n\n  clearDATA: () => {\n    _ENV.dataIN = {};\n    _ENV.dataOUT = {};\n  },\n\n  updateOutputDATA: () => {\n    Object.keys(_ENV.dataOUT).forEach(_k => {\n      const state = _ENV.hyperdiagram.data.states.getState({ id: _k });\n      Object.keys(_ENV.dataOUT[_k]).forEach(_prop => {\n        state.properties[_prop].value = _ENV.dataOUT[_k][_prop];\n      });\n    });\n  },\n\n  infoDiagramDATA: () => {\n    const _dataSources = new Set();\n\n    // Obtain all the sources used from the data nodes\n    Object.values(_ENV.hyperdiagram.node.getNodes())\n    .filter(_n => _n.category === 'data' && _n.family === 'state' && _n.type === 'default')\n    .forEach(_n => {\n      _dataSources.add(_n.extra.source)\n    });\n\n    // Obtain data information from the states\n    const _dataInfo = Array.from(_dataSources).reduce((_info, _source) => {\n      _info[_source] = {};\n      const state = _ENV.hyperdiagram.data.states.getState({ id: _source });\n      Object.keys(state.properties).forEach(_prop => {\n        _info[_source][_prop] = state.properties[_prop].value;\n      });\n      return _info;\n    }, {});\n\n    return _dataInfo;\n  },\n\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DATA_CONTROL);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-engine/data-control.js?");

/***/ }),

/***/ "./src/libs/hyper-engine/diagram-process.js":
/*!**************************************************!*\
  !*** ./src/libs/hyper-engine/diagram-process.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst _ENV = {\n  engine: null,\n  diagram: null,\n  externalProcesses: {},\n};\n\n\nconst _DIAGRAM_PROCESS = {\n\n  init: ({ engine }) => {\n    _ENV.engine = engine;\n    _ENV.diagram = engine._env.hyperdiagram;  // Access to other environment ⚠❗🧩\n  },\n\n  // Process all the node definitions for the diagram\n  processDiagram: () => {\n    const nodesDEFS = _ENV.diagram.node.getAllNodeDEFS();  // Obtain all the node definitions 🧩\n\n    // console.log('nodedefs', {_def});  // TODO: REMOVE DEBUG LOG 📏⏳🔍\n\n\n    Object.values(nodesDEFS).forEach(_def => {\n      if (_def.process !== undefined && _def.process.processDiagram !== undefined) {\n        _def.process.processDiagram({ diagram: _ENV.diagram, engine: _ENV.engine });\n      }\n    });\n  },\n\n  addExternalProcess: ({ id, process }) => {\n    _ENV.externalProcesses[id] = process;\n  },\n\n  getExternalProcess: ({ id }) => _ENV.externalProcesses[id],\n  \n  clearExternalProcesses: () => {\n    Object.keys(_ENV.externalProcesses).forEach(id => {\n      delete _ENV.externalProcesses[id];\n    })\n  },\n\n  infoDiagramProcess: () => {\n    const externalProcesses = new Set();\n\n    // Obtain all the sources used from the data nodes\n    Object.values(_ENV.diagram.node.getNodes())\n    .filter(_n => _n.category === 'flow' && _n.family === 'step' && _n.type === 'function-call')\n    .forEach(_n => externalProcesses.add(_n.extra.attributes['function-name'].value))\n\n    const _infoProcesses = {\n      external: Array.from(externalProcesses),\n    };\n\n    return _infoProcesses;\n  },\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DIAGRAM_PROCESS);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-engine/diagram-process.js?");

/***/ }),

/***/ "./src/libs/hyper-engine/engine.js":
/*!*****************************************!*\
  !*** ./src/libs/hyper-engine/engine.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _diagram_process_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diagram-process.js */ \"./src/libs/hyper-engine/diagram-process.js\");\n/* harmony import */ var _flow_signals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flow-signals.js */ \"./src/libs/hyper-engine/flow-signals.js\");\n/* harmony import */ var _flow_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flow-control.js */ \"./src/libs/hyper-engine/flow-control.js\");\n/* harmony import */ var _data_control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-control.js */ \"./src/libs/hyper-engine/data-control.js\");\n\n\n\n\n\nconst _ENV = {\n  hyperdiagram: null,\n};\n\nconst _ENGINE = {\n  _env: _ENV,\n\n  init: ({ hyperdiagram }) => {\n    _ENV.hyperdiagram = hyperdiagram;\n\n    _diagram_process_js__WEBPACK_IMPORTED_MODULE_0__.default.init({ engine: _ENGINE });\n    _flow_control_js__WEBPACK_IMPORTED_MODULE_2__.default.init({ engine: _ENGINE });\n    _data_control_js__WEBPACK_IMPORTED_MODULE_3__.default.init({ engine: _ENGINE });\n  },\n\n  diagramProcess: _diagram_process_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  flowSignals: _flow_signals_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  flowControl: _flow_control_js__WEBPACK_IMPORTED_MODULE_2__.default,\n  dataControl: _data_control_js__WEBPACK_IMPORTED_MODULE_3__.default,\n\n  diagramInfo: () => {\n    const _diagramInfo = {\n      process: _ENGINE.diagramProcess.infoDiagramProcess(),\n      signals: _ENGINE.flowSignals.infoDiagramSignals({ diagram: _ENV.hyperdiagram }),\n      data: _ENGINE.dataControl.infoDiagramDATA(),\n    };\n    return _diagramInfo;\n  },\n\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ENGINE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-engine/engine.js?");

/***/ }),

/***/ "./src/libs/hyper-engine/flow-control.js":
/*!***********************************************!*\
  !*** ./src/libs/hyper-engine/flow-control.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst _ENV = {\n  engine: null,\n  hyperdiagram: null,\n  nextNode: null,\n  onPause: false,\n  runningNode: false,\n};\n\n\nconst _FLOW_CONTROL = {\n  init: ({ engine }) => {\n    _ENV.engine = engine;\n    _ENV.hyperdiagram = engine._env.hyperdiagram;  // Access to other environment ⚠❗🧩\n  },\n\n  gotoNode: ({ id }) => {\n    const node = _ENV.hyperdiagram.node.getNode({ id });\n    const nodeDEF = _ENV.hyperdiagram.node.getNodeDEF(node);\n\n    _ENV.runningNode = true;\n    _ENV.onPause = false;\n    _ENV.nextNode = null;  // Reset the next node\n\n    _ENV.engine.dataControl.setDataFromNode({ node });  // Prepare the data for the node ⚙🧩\n    const data = _ENV.engine.dataControl.getDATA();\n\n    if (nodeDEF.process && nodeDEF.process.run) nodeDEF.process.run({ node, engine: _ENV.engine, data });  // Run the node ⚙🧩\n\n    const _connectorStepEND = Object.values(node.connectors.flow).filter(_c => _c.type === 'step-end')[0];  // Obtain the connector for 'step-end'\n    if (_connectorStepEND !== undefined) {\n      const _connectionStepEND = _ENV.hyperdiagram.connection.getConnections({ source: _connectorStepEND.id })[0];\n      if (_connectionStepEND !== undefined) {\n        const _targetStepEND = _ENV.hyperdiagram.connectors.getConnector({ id: _connectionStepEND.target });\n        _ENV.nextNode = _targetStepEND.node.id;\n      } \n    }\n\n    _ENV.runningNode = false;\n\n    // @see https://levelup.gitconnected.com/the-call-stack-is-not-an-infinite-resource-d530df0041bc\n    // setImmediate(() => nextStep());\n    requestAnimationFrame(() => _FLOW_CONTROL.nextStep());  // Avoid call stack overflow ⚠⚙🛠\n  },\n\n  nextStep: () => {\n    if (_ENV.onPause) return;\n    if (_ENV.nextNode !== null) _FLOW_CONTROL.gotoNode({ id: _ENV.nextNode }) \n  },\n\n  pauseFlow: () => {\n    _ENV.onPause = true;\n  }\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FLOW_CONTROL);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-engine/flow-control.js?");

/***/ }),

/***/ "./src/libs/hyper-engine/flow-signals.js":
/*!***********************************************!*\
  !*** ./src/libs/hyper-engine/flow-signals.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/internal/Subject.js\");\n\n\n\nconst _ENV = {\n  subject: new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject(),\n  listeners: {},\n};\n\nconst _FLOW_SIGNALS = {\n  notifySignal: ({ signal }) => {\n    const { subject } = _ENV;\n    subject.next({ signal });\n  },\n\n  listenToSignal: ({ listener, signal }) => {\n    const { subject } = _ENV;\n\n    if (_ENV.listeners[signal] === undefined) _ENV.listeners[signal] = [];\n\n    const subscriber = subject.subscribe({\n      next: (_options) => {\n        if (_options.signal === signal) listener(_options);\n      },\n    });\n\n    _ENV.listeners[signal].push({ listener, subscriber });\n\n    return subscriber;\n  },\n\n  clearSignals: () => {\n    Object.keys(_ENV.listeners).forEach(signal => {\n      _ENV.listeners[signal].forEach(_listener => _listener.subscriber.unsubscribe());\n      delete _ENV.listeners[signal];\n    });\n  },\n\n  infoDiagramSignals: ({ diagram }) => {\n    const listenSignals = new Set();\n    const emitSignals = new Set();\n\n    // Obtain all the sources used from the data nodes\n    Object.values(diagram.node.getNodes())\n    .filter(_n => _n.category === 'flow' && _n.family === 'signal')\n    .forEach(_n => {\n      switch (_n.type) {\n        case 'listen':\n          listenSignals.add(_n.extra.attributes['signal-name'].value)\n          break;\n        case 'emit':\n          emitSignals.add(_n.extra.attributes['signal-name'].value)\n          break;\n        default:\n          break;\n      }\n    });\n\n    const _infoSignals = {\n      listen: Array.from(listenSignals),\n      emit: Array.from(emitSignals),\n    };\n\n    return _infoSignals;\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FLOW_SIGNALS);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-engine/flow-signals.js?");

/***/ }),

/***/ "./src/libs/hyper-engine/index-lib.js":
/*!********************************************!*\
  !*** ./src/libs/hyper-engine/index-lib.js ***!
  \********************************************/
/*! namespace exports */
/*! export diagram [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export engine [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in index (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"diagram\": () => /* binding */ diagram,\n/* harmony export */   \"engine\": () => /* binding */ engine\n/* harmony export */ });\n/* harmony import */ var _hyper_diagram_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hyper-diagram/index.js */ \"./src/libs/hyper-diagram/index.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/libs/hyper-engine/index.js\");\n/*\n  Hyperengine library\n*/\n\n\n\n\n\nconst diagram = _hyper_diagram_index_js__WEBPACK_IMPORTED_MODULE_0__.default;\nconst engine = _index_js__WEBPACK_IMPORTED_MODULE_1__.default.engine;\n\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-engine/index-lib.js?");

/***/ }),

/***/ "./src/libs/hyper-engine/index.js":
/*!****************************************!*\
  !*** ./src/libs/hyper-engine/index.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.js */ \"./src/libs/hyper-engine/engine.js\");\n\n\nconst _HYPERENGINE = {\n  init: _engine_js__WEBPACK_IMPORTED_MODULE_0__.default.init,\n  engine: _engine_js__WEBPACK_IMPORTED_MODULE_0__.default,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_HYPERENGINE);\n\n//# sourceURL=webpack://HyperEngine/./src/libs/hyper-engine/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _rfdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rfdc */ \"./src/utils/rfdc.js\");\n/* harmony import */ var _rfdc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rfdc__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst _UTILS = {\n  deepClone: (source) => {\n    return _rfdc__WEBPACK_IMPORTED_MODULE_0___default()({ proto: true })(source); // clone the referenced source\n  }\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_UTILS);\n\n//# sourceURL=webpack://HyperEngine/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/rfdc.js":
/*!***************************!*\
  !*** ./src/utils/rfdc.js ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

eval("\nmodule.exports = rfdc\n\nfunction copyBuffer (cur) {\n  if (cur instanceof Buffer) {\n    return Buffer.from(cur)\n  }\n\n  return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length)\n}\n\n\n/**\n * RFDC Really Fast Deep Clone\n * @see https://github.com/davidmarkclements/rfdc\n */\nfunction rfdc (opts) {\n  opts = opts || {}\n\n  if (opts.circles) return rfdcCircles(opts)\n  return opts.proto ? cloneProto : clone\n\n  function cloneArray (a, fn) {\n    var keys = Object.keys(a)\n    var a2 = new Array(keys.length)\n    for (var i = 0; i < keys.length; i++) {\n      var k = keys[i]\n      var cur = a[k]\n      if (typeof cur !== 'object' || cur === null) {\n        a2[k] = cur\n      } else if (cur instanceof Date) {\n        a2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        a2[k] = copyBuffer(cur)\n      } else {\n        a2[k] = fn(cur)\n      }\n    }\n    return a2\n  }\n\n  function clone (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, clone)\n    var o2 = {}\n    for (var k in o) {\n      if (Object.hasOwnProperty.call(o, k) === false) continue\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        o2[k] = clone(cur)\n      }\n    }\n    return o2\n  }\n\n  function cloneProto (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, cloneProto)\n    var o2 = {}\n    for (var k in o) {\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        o2[k] = cloneProto(cur)\n      }\n    }\n    return o2\n  }\n}\n\nfunction rfdcCircles (opts) {\n  var refs = []\n  var refsNew = []\n\n  return opts.proto ? cloneProto : clone\n\n  function cloneArray (a, fn) {\n    var keys = Object.keys(a)\n    var a2 = new Array(keys.length)\n    for (var i = 0; i < keys.length; i++) {\n      var k = keys[i]\n      var cur = a[k]\n      if (typeof cur !== 'object' || cur === null) {\n        a2[k] = cur\n      } else if (cur instanceof Date) {\n        a2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        a2[k] = copyBuffer(cur)\n      } else {\n        var index = refs.indexOf(cur)\n        if (index !== -1) {\n          a2[k] = refsNew[index]\n        } else {\n          a2[k] = fn(cur)\n        }\n      }\n    }\n    return a2\n  }\n\n  function clone (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, clone)\n    var o2 = {}\n    refs.push(o)\n    refsNew.push(o2)\n    for (var k in o) {\n      if (Object.hasOwnProperty.call(o, k) === false) continue\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        var i = refs.indexOf(cur)\n        if (i !== -1) {\n          o2[k] = refsNew[i]\n        } else {\n          o2[k] = clone(cur)\n        }\n      }\n    }\n    refs.pop()\n    refsNew.pop()\n    return o2\n  }\n\n  function cloneProto (o) {\n    if (typeof o !== 'object' || o === null) return o\n    if (o instanceof Date) return new Date(o)\n    if (Array.isArray(o)) return cloneArray(o, cloneProto)\n    var o2 = {}\n    refs.push(o)\n    refsNew.push(o2)\n    for (var k in o) {\n      var cur = o[k]\n      if (typeof cur !== 'object' || cur === null) {\n        o2[k] = cur\n      } else if (cur instanceof Date) {\n        o2[k] = new Date(cur)\n      } else if (ArrayBuffer.isView(cur)) {\n        o2[k] = copyBuffer(cur)\n      } else {\n        var i = refs.indexOf(cur)\n        if (i !== -1) {\n          o2[k] = refsNew[i]\n        } else {\n          o2[k] = cloneProto(cur)\n        }\n      }\n    }\n    refs.pop()\n    refsNew.pop()\n    return o2\n  }\n}\n\n//# sourceURL=webpack://HyperEngine/./src/utils/rfdc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/libs/hyper-engine/index-lib.js");
/******/ })()
;