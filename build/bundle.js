/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceBase = function ServiceBase() {
    _classCallCheck(this, ServiceBase);
};

exports.default = ServiceBase;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _serviceBase = __webpack_require__(0);

var _serviceBase2 = _interopRequireDefault(_serviceBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AjaxService = function (_ServiceBase) {
    _inherits(AjaxService, _ServiceBase);

    function AjaxService() {
        _classCallCheck(this, AjaxService);

        return _possibleConstructorReturn(this, (AjaxService.__proto__ || Object.getPrototypeOf(AjaxService)).call(this));
    }

    _createClass(AjaxService, [{
        key: 'get',
        value: function get(url) {
            return new Promise(function (resolve, reject) {

                var users = [{
                    id: 1,
                    userName: 'shimiz'
                }];

                setTimeout(function () {
                    return resolve(users);
                }, 1000);
            });
        }
    }, {
        key: 'post',
        value: function post(url, data) {}
    }, {
        key: 'put',
        value: function put(url, data) {}
    }, {
        key: 'delete',
        value: function _delete(url, data) {}
    }]);

    return AjaxService;
}(_serviceBase2.default);

exports.default = AjaxService;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IO = exports.Web = exports.Core = undefined;

var _serviceBase = __webpack_require__(0);

var _serviceBase2 = _interopRequireDefault(_serviceBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Core = function (_ServiceBase) {
  _inherits(Core, _ServiceBase);

  function Core() {
    _classCallCheck(this, Core);

    return _possibleConstructorReturn(this, (Core.__proto__ || Object.getPrototypeOf(Core)).apply(this, arguments));
  }

  return Core;
}(_serviceBase2.default);

var Web = function (_ServiceBase2) {
  _inherits(Web, _ServiceBase2);

  function Web() {
    _classCallCheck(this, Web);

    return _possibleConstructorReturn(this, (Web.__proto__ || Object.getPrototypeOf(Web)).apply(this, arguments));
  }

  return Web;
}(_serviceBase2.default);

var IO = function (_ServiceBase3) {
  _inherits(IO, _ServiceBase3);

  function IO() {
    _classCallCheck(this, IO);

    return _possibleConstructorReturn(this, (IO.__proto__ || Object.getPrototypeOf(IO)).apply(this, arguments));
  }

  return IO;
}(_serviceBase2.default);

exports.Core = Core;
exports.Web = Web;
exports.IO = IO;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _serviceBase = __webpack_require__(0);

var _serviceBase2 = _interopRequireDefault(_serviceBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserLoader = function (_ServiceBase) {
  _inherits(UserLoader, _ServiceBase);

  function UserLoader() {
    _classCallCheck(this, UserLoader);

    return _possibleConstructorReturn(this, (UserLoader.__proto__ || Object.getPrototypeOf(UserLoader)).apply(this, arguments));
  }

  return UserLoader;
}(_serviceBase2.default);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tools = __webpack_require__(2);

var _ajaxService = __webpack_require__(1);

var _ajaxService2 = _interopRequireDefault(_ajaxService);

var _userLoader = __webpack_require__(3);

var _userLoader2 = _interopRequireDefault(_userLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. http request mock
_ajaxService2.default.get('http://someurl.com/api/users').then(function (result) {
    return successCallback(result);
});

function successCallback(result) {
    debugger;
}

/***/ })
/******/ ]);