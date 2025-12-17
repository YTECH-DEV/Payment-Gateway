(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Currency = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Currency = exports.Currency = /*#__PURE__*/function () {
  function Currency() {
    _classCallCheck(this, Currency);
  }
  return _createClass(Currency, null, [{
    key: "isValid",
    value: function isValid(currency) {
      return Object.values(this).includes(currency.toUpperCase());
    }
  }]);
}();
_defineProperty(Currency, "USD", "USD");
_defineProperty(Currency, "NGN", "NGN");
_defineProperty(Currency, "XOF", "F CFA");

},{}],2:[function(require,module,exports){
"use strict";

var _enums = require("./enums");
var _patterns = require("./patterns");
var _transaction = _interopRequireDefault(require("./transaction"));
var _ypay = _interopRequireDefault(require("./ypay"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }

},{"./enums":1,"./patterns":3,"./transaction":4,"./ypay":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenPattern = exports.paymentCodePattern = exports.cardPattern = void 0;
var cardPattern = exports.cardPattern = /^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;
var paymentCodePattern = exports.paymentCodePattern = /^[0-9]{6}$/;
var tokenPattern = exports.tokenPattern = /^[0-9]{1,}\|[A-Za-z0-9]{48}$/;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _patterns = require("./patterns.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Transaction = /*#__PURE__*/function () {
  function Transaction() {
    var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var sender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var otp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var amount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var language = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "en";
    var handlers = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    _classCallCheck(this, Transaction);
    this.sender = this.sanitizeData(sender);
    this.token = this.sanitizeData(token);
    this.otp = otp;
    this.amount = parseFloat(amount.toString());
    this.language = language;
    this.paymentHandlers = {
      onSuccess: handlers.onSuccess || function () {},
      onFailure: handlers.onFailure || function () {}
    };

    // Validate during construction
    var validationError = this._validate();
    if (validationError) {
      this.validationError = validationError;
    }
  }
  return _createClass(Transaction, [{
    key: "_validate",
    value: function _validate() {
      var errors = [];
      if (!this.sender) {
        errors.push("Sender card is required.");
      } else if (!_patterns.cardPattern.test(this.sender)) {
        errors.push("Sender card format is invalid.");
      }
      if (!this.token) {
        errors.push("token is required.");
      } else if (!_patterns.tokenPattern.test(this.token)) {
        errors.push("token card format is invalid.");
      }
      if (!this.otp) {
        errors.push("Payment code is required.");
      } else if (!_patterns.paymentCodePattern.test(this.otp)) {
        errors.push("Payment code format is invalid.");
      }
      if (isNaN(this.amount) || this.amount <= 0) {
        errors.push("Amount must be a positive number.");
      }
      if (!["en", "fr"].includes(this.language.toString().toLowerCase())) {
        errors.push("Language is invalid.");
      }
      return errors.length > 0 ? new Error(errors.join("\n")) : null;
    }
  }, {
    key: "exec",
    value: function () {
      var _exec = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var paymentResponse, data, errorData, errorMessage, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!this.validationError) {
                _context.n = 1;
                break;
              }
              this.paymentHandlers.onFailure(this.validationError);
              throw this.validationError;
            case 1:
              _context.p = 1;
              _context.n = 2;
              return fetch("https://ypay.ytech-bf.com/api/v1/project/make-payment", {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer ".concat(this.token),
                  "accept-language": this.language
                },
                body: JSON.stringify({
                  card_code: this.sender,
                  amount: this.amount,
                  payment_code: this.otp
                })
              });
            case 2:
              paymentResponse = _context.v;
              if (!paymentResponse.ok) {
                _context.n = 4;
                break;
              }
              _context.n = 3;
              return paymentResponse.json();
            case 3:
              data = _context.v;
              this.paymentHandlers.onSuccess(data);
              return _context.a(2, data);
            case 4:
              _context.n = 5;
              return paymentResponse.json()["catch"](function () {
                return {};
              });
            case 5:
              errorData = _context.v;
              errorMessage = errorData.message || paymentResponse.statusText || "Payment failed";
              throw new Error("".concat(paymentResponse.status, "\n").concat(errorMessage));
            case 6:
              _context.p = 6;
              _t = _context.v;
              this.paymentHandlers.onFailure(_t);
              throw _t;
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[1, 6]]);
      }));
      function exec() {
        return _exec.apply(this, arguments);
      }
      return exec;
    }() // Validation checker
  }, {
    key: "isValid",
    value: function isValid() {
      return !this.validationError;
    }

    // Get validation errors without throwing
  }, {
    key: "getValidationErrors",
    value: function getValidationErrors() {
      return this.validationError ? this.validationError.message : null;
    }

    // Sanitizes data passed to the constructor
  }, {
    key: "sanitizeData",
    value: function sanitizeData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (data === "" || data === null || data === undefined) {
        return "";
      }
      data = String(data);

      // Remove null bytes
      data = data.replace(/\\0/g, '');

      // Trim whitespace
      data = data.trim();

      // Strip HTML tags
      data = data.replace(/<[^>]*>/g, '');
      return data;
    }
  }]);
}();
var _default = exports["default"] = Transaction;

},{"./patterns.js":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _transaction = _interopRequireDefault(require("./transaction.js"));
var _enums = require("./enums.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ----- ONE TIME CONFIGURATIONS FOR YPAY PAYMENTS
var YPAY = /*#__PURE__*/function () {
  // one-time initialization
  function YPAY(token, currency, shopName) {
    _classCallCheck(this, YPAY);
    this.token = token;
    this.currency = currency || _enums.Currency.XOF;
    this.shopName = shopName || "Undefined";

    // Validate during construction
    var validationError = this._validate();
    if (validationError) {
      this.validationError = validationError;
    }

    // singleton instance-like
    if (YPAY.instance) {
      return YPAY.instance;
    }
    YPAY.instance = this;
  }

  // create a transaction and execute it
  return _createClass(YPAY, [{
    key: "createTransaction",
    value: function createTransaction(card_code, otp, amount, language) {
      var handlers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      return new _transaction["default"](this.token, card_code, otp, amount, language, handlers).exec();
    }
  }, {
    key: "_validate",
    value: function _validate() {
      var errors = [];

      // checks currency
      if (!_enums.Currency.isValid(this.currency)) {
        errors.push(this.currency + " is not supported yet");
      }
      return errors.length > 0 ? new Error(errors.join("\n")) : null;
    }
  }], [{
    key: "resetInstance",
    value: function resetInstance() {
      YPAY.instance = null;
    }
  }]);
}();
var _default = exports["default"] = YPAY;

},{"./enums.js":1,"./transaction.js":4}]},{},[2]);
