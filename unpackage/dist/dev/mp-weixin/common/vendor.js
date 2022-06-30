(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"robot","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"robot","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"robot","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"robot","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"robot","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!****************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/pages.json ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/*!***********************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 7));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 8));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 12));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 13));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 17));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 18));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 19));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 20));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 21));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 22));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 23));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 10));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 9));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 24));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 11));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 25));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 26));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 27));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 28));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 29));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 30);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 31));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 32));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 33));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 7 */
/*!**********************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/mixin/mixin.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 8 */
/*!************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/request/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 9));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */
/*!*****************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/deepMerge.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 10 */
/*!*****************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/deepClone.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 11 */
/*!************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/test.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),
/* 12 */
/*!*******************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/queryParams.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),
/* 13 */
/*!*************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/route.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 15);

/***/ }),
/* 15 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 16);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 16 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 17 */
/*!******************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/timeFormat.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),
/* 18 */
/*!****************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/timeFrom.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),
/* 19 */
/*!*********************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/colorGradient.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 20 */
/*!************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/guid.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 21 */
/*!*************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/color.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),
/* 22 */
/*!*****************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/type2icon.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),
/* 23 */
/*!*******************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/randomArray.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 24 */
/*!***************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/addUnit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),
/* 25 */
/*!**************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/random.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 26 */
/*!************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/trim.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 27 */
/*!*************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/toast.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 28 */
/*!*****************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/getParent.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 29 */
/*!***************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/$parent.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),
/* 30 */
/*!***********************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/sys.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 31 */
/*!****************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/debounce.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 32 */
/*!****************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/function/throttle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),
/* 33 */
/*!************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/config/config.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-03-17
var version = '1.8.4';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),
/* 34 */
/*!************************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/uview-ui/libs/config/zIndex.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/*!********************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/static/law.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 82 */
/*!******************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/static/image/comment.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 83 */
/*!***************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/static/image/like.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 84 */
/*!******************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/static/image/collect.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 85 */
/*!*********************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/static/law1.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 86 */
/*!*********************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/static/law2.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAFqAfQDASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAABgAEBQcBAgMI/8QAThAAAQMDAgMFBgQDBQQIBQQDAQIDBAAFERIhBjFBEyJRYXEHFDKBkaEjQrHBFVLRJDNicvAWguHxJTRDU2NzkqImNTaywhdEk7NUdNL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJhEAAgICAwACAgIDAQAAAAAAAAECEQMhBBIxIkETMgVRFCNCM//aAAwDAQACEQMRAD8Av+lSpUAKlSpUAKlSpUAKlSpUAKlSpUAKlSpUAIUqQpUAY61msVnNAGDWaxWaAFWKzWKAFSpUqAFSpUqAFWaxSoAyKwaVKgBVmsUqAFWaQpUAYrNYrOaAMGs1ilQAqVKlQBmlSpUAKlSpUAKlSpUAKlSrB5bUAZpZqEvvE9t4ejF64SUtjGQkd5R9BQHJ9tMLtB7tbpJZJADix8R/wgHekBa+RSyKp1z2sIkvrZExqOtKNSgXNGjflyOTXOD7Vpi73Gtsd+NMQtWHHFIJ7P1XkD7UwLlpULtcVrSo+8RQpP8ANHcCx8+VSETia2TMJRICFn8rg0/rSsCYrNcESG3AClYV/lINdQds07A2pVrk5rINAGaVKlQAqVKlQAqVKlQAqVKlQAqVKlQAqVKlQAqVKlQAqVKlQAqVKlQAqVYrNACFKkKxQAqVKlQAqVYyPGlqFAGaValaR1rmqQhPNQ+tKwO1Kmi7gygfEKbquyd9IJ9BRYEnWinEp5qFRC7o4r4E1EvXlhVwbhqfBfWCQlO4z4ZG2aVjoLEvoWcBQzXQUMtvKac2UdvGpyNKQ6hO/eoTEOqVIGlmmAqVKsZoA2FKtNYBwa2zmmAqVKlQAqVKlQAqVKlQBmlSpUAKlSrUqxzBoAyTisZPT9Kby5bURpTry9KR5ZJ9BQyxxn2j77LltfZUFgNlZGCk8lK3yE+dAUFxURyGageJOJY1ijAOLT7w6D2SMEk+JwKbyuJ0RmZDRY1T2UgiO2sHXnkRvy8zVJcS392Qqctxr3y6ujS87nuR09GkeGOp2zQOiK4p4ofuNze7fS6FkkLcUAlryz1+VCvv0qO4EsTgsuKwVpH5eRHkPSmc4OKw89IS88AAEJHdbx/r70yblvuOBKCgAHJwMZpCJJlcGO2p1tSnVJ5lacgH/COX1puzdHm39bKlAjfOr9TTQNOMPlAC8kZJA5VuhgpUSkBOeRxufkaAC+LxjLC0FDi0q1A6UkbnzJ6elTyeOnGypmatuQ6TnGnKUZ6DbeqxakhpzAY7ZQ2Go5xXUuS2yp4IS2c5JOPtSaGXDbeNcynGre88wAkHmcHx2VsKJ4fGGlBcdv8AJS2DjOhvHy2rzsFOuNrfdGg/zKB1KPrTu3SWGkhEpp9WFagptJGfLegD1JZ+IXLgEmHdkugjIEpsd7004ontM92awsSGksyWlFLiEnI8iPIjB+decrRclslmS1qbUnkl1wAAb7HfNWdwzxd20n3ko27PS+AN9j0/rTTEWeFZrauLLyHm0rQQUqGQR1FdqYCpUqVACpUqVACpUqVACpUqVACpUqVACpUqVACpUqVACpUqVAGKzSpUAKlSpUAYNR1wlLaOhBwTUjUXdGsgLxSY0MTLeQclzz3rBmP/AM1RNxgsXGdakPp1Yk9Mg/ArbIqcTw4w0P7NJkMnqS4V/wD3VI2cC88dipVc1qUkFSlAbc1KqQRYW1AdvKkuY/lWW/8A7a7N2S3NqCvdULUOS3O8r6neihWQPvTS9mip4nq0M13biz3x+HCLY5ZdXpzRMhASMJAAHQCtqfUQOu8NGahCZshZCVhWlglA9D406XYY6Y6G4zaWVtq1tqSOSvHzqZpVVBYPFxDzvYOp7CWP+zVyV5p8RXIFyOsjdJqdlQ48xstyGg4nmM/lPiPA1GOWFf8A+1nyGgOSVntAfmreoodiRc3Epwretv4qr+WmptV2QSQ7Ed8tBT9xWv8AC7q5+aK0fNJXT2Foe/xRf8prm7eOyQpSyhCQMlSjyFcP9n5Ticu3J0HwaQEj70wu3D8GBAXJ7NT8nKUMKeWVhK1HCTg7cyKBnaJxCxdHnm4klLvYH8Qo5A+FT1veW6jKvGh2229qFGbitISBjvkfmV1PrRTEZDTQx9+dNCY4pUqzTEYpVmlQBis1is0AKlWKzQAqaS5TcNhx5xRATvgcz5U6J2qCccNwnF3P4EZWG/8AEvqr0H9aBpWRU4XZM9m4KjiUgApENKsFo9FeZ8ajLw8bFZJcuQ029dJo0lPMJH8oP8qf1IoyShKUqcUQlCQSSeQ8TQhIaXeLguQpILKEnSDySkck+eTv6CqNNAcowOH7RJukp58yp6AlTzmSsgDAwOgH6VUF3nS3sJTrRHVnuD4SPHoT8zR1xIxchNdkzXPeUtnUl44DaM9EpNBTynLmtxphTrvad5RIOB8+fy5VDJZBKbSXB2zuUnkhNZU6yy+n3bCF/wAwGcVIo4flLSEyEOp32SU9PGnjds7NaAlhDen/ALdx3A+W+KCaIZDMxThdbbcwTutR51yltv6O0cASM40qV3j8qn5DJC8Pyg71Dac4PnnlXJLCWlH3NgpeOCO4VAfPlSAZoYm9glcSK6UlOVKS2APvXFltpelT07CwcdkhvUoenSnrpW+2sF2Qt0K0KSlew/pXNmI62sOsshKxskqWMA0wHJYZkKTHbZTqSNnHnDkf7vIGkqG46kIYlpW4O6rUrYY6bU+RanJLPaSZLSXSNtBKlH5DamK4bcTtGie8rcAK05HoN6QHRFtWgpX7xoBB+LJyfKjrgt99vCnJCnW8aMqb05HU0GWxlEhfZd3ISMpWdRA8+n13o4s8VaVoIGwGMaRt4bnfFA0XRwfML9sLClEmOotj/L0omoB4CcJkzk8glQHzxR7TEzNKlSpiFSpUqAFSpUqAFSpUqAFSpUqAFSpUqAFSpUqAFSpUqAMVmsdazQAhSrFLpQAqi7m4nQE+POpJaglJND8t3t39vSpY0Nmkly8W9AG6HFOq9Akp/UiisUPWRr3ie9L5oQnsGz44PeP1ohxTQNirk84htBUtaUpAzlRAArrihXjlbibYy2l8IQ66G1t5SCobnO46YpiCNl9p3WG3AvQdKgDnBwD+hBrZLiCQAtJJGRg8x40E2Bx1CLyUTy4toDQCkb90DWAMZH5fUGmtvkTYi4Tow6+lAbaaU4AF53Uny64J60AWA48hsoC1AFatKQeprLi0oSVLVhI3Jz0oL4tuMrVCQgGK4Hx2etQAUSk+XTeu8xie1w5GZW+Htf4ZKUkZCgAAcnPrQAVds2pRQlxsqxnTqBI+VJt5DpUEuBWk6Vaeh8KCbKZUG+TXnGQfwFLWAggIIxhIUfLc0yh3FTwdkSpCmozkouhxBzkjGEDTjOfSgCw3n22G1uOKSlKBqOT08a2LiEt9opYDeNWSelB18amSbzJWh9aYyYStaAAUlBTyI8c/apV0XM2Vxp5hiQoggaCU5bxscePKgCXiy48tKzHeQ7oVpVoOcHnj6VF8SDLUNJ2b94Gs+G233FR/CiZKVSVKW2hCV/2hpbBQ4F6Rjfl8OOlTcxpm82pQYdSpLg1NuJOQCNwfkaQEdHUBJBOMZoiQoKQCCDQgiQEudhIPZSU7KQo4Kj4pPIipOPPW2Bk5T49PrSuiqJ6lTRqa24MpPIb43xThLgVjBBz4GnZJvSpUqYCpUqVACpHkaVY6GgRHXaSpmMlpskPPHQjyz1+ma4x2AhpDKBhKU6fWm/bImXiS4FE+7/gBJ6E7k/apNgYyrG4/SmaLSsHuIpiXwq1MyOzAAXLWnfSjnp9SPsaSW27bYC8+gNLfOtYTvpJGABXKQ3AaW64XENqkPa3QrmpIPLyyNqa3CR/GFIQu4JZjJ27GM0HVHwJONj6UNiRXVxhrucwF5xRaSe6OzwB863TZ2UtHCglCTvpUP2GftR6zwxayNTcS4y1HfUtSm8fLlUjFtUdhYUzYHErAxqWoD6mpsdlWSLGy6rtP73IxsSo/YZFc2+FHJRDDcR99H/klQHzOKudliWwSqPZ4bajzIcAJpx295xj3GPj/AM+gkqAcAXNlvDdrlvBXNI0AAfWmTnB95ZQQrh55ttP/AHjgVn5Crr7e8cvcI3/81dEyLqOcBr/dfFFAed5vDzcR8vqhJaeHd0pYWQT5DABPzrk1Zbg4NSY8VzVz1AD5ac8/LevRCpdxUcPWjWjPR4H7YqHn2W3T3C5J4XXrP5m16SPMYxRQFMO2iS6tpCpTsdDfJtCAgD9ai53DsJt3ISt5wkFfaEkAeOw51fEi28PSYnur7TsLbGp4EE/7xqAmcCvoBftjzUxggrGtzCvLBzj7UAVnbbKplQ7FMZphf5s6VH1J/pRTBgdkgOpl7JPwtI0pOPE9fWt1RH21KQtptLjezqHmykpPnk7jzqdslomT0hS2kobyANI2Pp5UqGjbh6/weH5T6ZinAqQoLSltsqITg7miy2cWtzJLrUqM7EQkjs3lEFCweRyOXIjfFQL0ONZeIRdHVJQ2zHQy4pQyEpVyPrkAfOtJFudl3Ju4PqXFtUw9g/GSn+9SeRV4AnPLGNqpIposhCwpAKVAgjIIOc1uOVD1seVbpqbWokx1J1RlK5gDbQT18qn0HKQaCGjelSpUCFSpUqAFSpUqAFSpUqAFSpUqAFSpUqAFSpUqAMdazSpUAYrRa0oGScVuairprwAM464pNjRzmTgsFtveol8u6Ets7vvHQ3+6h6DeujhIQrs0lagNk5xk02ss5xiaZF5YUzKdPZtqBBaaT0SD5+NSt+jCqJHbhx0MNpwlAAGOvjTUX6MXWWlJcSp0rCe7nBTjOccudOZLikRVqQyp1WNm0ncnwoCjMKhJt90UpbEZlxxDzhWVpbCjyG2Ty59KokOpFzajzG4y0KGtCl6+gA6eOa4Smrfc4zbzyGyFoIbWo4UM+HhQhfnX5F6clR0OsONsHszqypYJxsOiT4863s1neutry666WGnVaG3UkYxvgb7b0wCJEew3KYgAxZMiM0EZCgohPLBx6GuLCLNLvLLrTS+3QFaDuEDQdHL9DUTZ1woTht8YyzNfCkKWtoDsUgk88eZrjFjx1OxW1R33S20lQQVYWtKVDCh48t/GgCfu7FuekhlUhUWUMOe8JxlA5AZ8Dnl5U6jm3RbfGzJD7TbgbQ6peolZONz45qMdj6eJEqVrc7RTSjqGyU4Xt6CsQlRX7E0pbgS0bgSghGRqDqsDHrQAQItzA7ckE9ucr350yuHDcScUrS4/FdSR+JGcLZOPHHOplIGkUqAGbltYchOxcKSl1Ghage8RjG567U4Q0EISnwAGa6VnFADC32xMBt4dqt5bzhcccc3KidvsMD5V3Yitx2EstJ0oTyApxWKAGcuDFmN9nJZQ6joFjOKEp8KOy+tq1LlF9PxYdPZt+udvkN6IL5OcYSzFjkB+QSAr+RPVX+vGo5tsNtpZYBCByzzJ6qPialjIViz3Bcpt+ZeHyls6gw0MJJ8z4USwlrEnunKT9q3j25ShlXdT1FSjEVtod1O/jQgO6fhFZpUs1QhVgnBrBVjlvUDcby85MTCti2u2A1OuODUlA8NjzpWBPhYPKuEmbGitqU+822ACcKUAaHTDmPZ94u8tWrmhGEproxaobBz2Panot06sn51LmUos4264hyGXI8OS+6+svLIb0AZ5ZKsZ+VbCJeZUrVJuDUaIBj3aKnKj/vHepMYCcZIAOfIVuDyzj1qXNl9RuxaoLK+0EdKnf+8c76vqafJCUDCEhI/w7VyHr1rYKBOArJ6+VHYKOux86yDjoDXIKxWwOeVFio76s1kGuINbhVVYqOm1Z5cq5hdbhQNOxUZ5/wDOs+HSsZpZpiMlCVpwpIPrvUc/w/bn9ZDHYqX8S2ToJ+YqQzW+TQANzeH3wjRHdS+lI7iJBJKeW2obkeRqJ4WhO2y83JuQwuOZBStCClKUE/m0AH5/Ojk70yuNvanMpS4VJU2rW2tBwpChyIphZBJUHeL5MSS027GdjtlvUMjUnfB+mR6VIXKGmTGfjnktBGfDwx51CtOOOOXlckhEyCttQUjrgHBA8CPpRIo9oyy6RjUkH6700VFghdFNzbHDkyBh2I4FrKeaFDurV6gZous85cqMpt7HvDJ0OY6+B+YobcipNwuEIjuPJDozyyrY/rWLFPDYhPqVjCjCkknqPhJ/T502i5RDhJyKzWqOVbVJiKlSpUAKlSpUAKlSpUAKlSpUAKlSpUAKlSpUAYrNKlQBitFtpcGFAGt6zQBHSLe2pBwAD4eNQzzCRqZcQFIOxT0IopOPCoW5tgPJI2B+1SykaWGQstuQnlla42NKyd1IPw58fWpUxm1tKaUygtqO6cAg+eKgYSi1eYrg2S82pk+ZG4+wNE45U0JnBMZpCgtDSEqCQkEDBx4elblPXAzz3rfNInHOmI1KNsb48jXL3drtg6GkdolOlKtO4HgD4V2yPGlqHjQBpoHPSMnqBWqWW0JCENhKQdWEjYHOa65FIrAoAyOVKmb1xisqwuQ0k+BWP61uzMZf3adQ5/lUDQA5pVgHPKkogJOaAM0qiZXEVtiKKFPFxY5pZQXCPXSDTNXFkPTqajzHfEBhSSPrikBxuZKuI1JPxJjjs8+BPex9qe21oLWVHffah6Veotwv8BbTMgLLbja+0ZKdOcEb8ulE9q5Edc+NSMlQAOlLlSpHGN6pCMZrlIkNRmi464EJHiedcZ85mAwXXTtySBzJ8BQ1IkOO6ps44Sn4Gc7I/qfOlKSRUYtjqZcHZaFqccMWGASRyWoft+tNW5sFhttLCQntDnAO+Mbk0JzJb015T7q1FhJyEg4yegp5BbU7JQwVfiOf3hH5U+FYuTNUqC5mSh9JUhZITzUf2pv/ABIe9MsoOXXlEhH8qPH51G3q5sWqF2KVthSU6ljVulPj86irA86loXWTtKnKCWknkhtIx+n9aBhwFbdayFbc6iBfojiSWlEhJwVfrioW/wDEpix1xkf3z47qeXZJ8/M0CC2TKRFjqdXvgYAB+LPIfM03tKpC2lvP4HanUkdT50EcPypV3ejQjKUphhOtSScqDfXUPPl6UdKnNJdQw1pJS52JTjGnbP7UxEgD9ayDio5mYXZC/hS0jz5nkB9jTlMplWkBYJUooT/iUOYpgOgrPOtgR403cdDaQoncnAFbIdQ4taUk5QrTg07JocA1nNcwdq2Cqdio6BVbZrmMdKzmmmFHWlmtAayFVVks3BrCsn061jVWQaLEDdysssi4SYhSZDqspSfzJ6g/t6VKxH25FvR2ZBUlASpOclCsbg0/PI1FTYLjbpnQ/wC+Hxt8g8PA+fnTQ0RkxOOIY3+OOsZ8wTiox5gN3GWy2ADIjF4A9FtkZP3qUfkNzZVuks6v7xTawR3kd07GuDqB/tZCz8JjvAjyKkCrN07QUwJAlQGHwc60BRPninVQvDaz/DlMq5sOrb+Wcj7EVNVBg/RUqVKgQqVKlQAqVKlQAqVKlQAqVKlQAqVKlQBjrWaxWaAMUqyKVAGKhrqd055damahLksLeSgZ54qWVH0Yaimbas//AOYoHy/CXUtLvsGErs3XwXf+7SMq+lCVyauUu7Q2WPwYjaFLefHMq5aU+eCcn6VKRYLbKQmOzpzzV1PqetFg0O1X+Y6AYtuISeSpDgRkeIGK4KuN5dBKXojXl2RXj55FOkW51Z73XqRThNpz8Ss0ti0Q+q4L+O7ycnmlKUgfpmlickjF2lp8sJOftU+m2NDnvW38Na6DFGx6INmbdWFYMhl9v/E1hX1z+1cXn7hcCTIcVHYzsw2clQ8VH9hipty1jPdNbM2tIIKwCaNisgmrSwoZTFSo9VLySfvWjlrbZUFshcVxIJC2iRj5cjRehlCRgJFM58UrSFJG4p0OyItnESEXB213CQkSG0pUhenSHAftmnnESVv2haWXVo7ySso5lGRqx8qj3Y4I0uspUnrqTkH1rmy+u3NFleXLesEKTzU1nbPmmi6EdUoaZGmIhDbI3SEbAjoc86coivup1ZUR5mmEVf4amioFTR0FQOQoc04PXYiiG3Oa2QD0pIbI33F8dKk4MYsJ3G5p7ikTgVSRNiPKmdwuDFvjF59WOiU9VHoBSnTmYEZb769KBsAOaj4DzoFvt5MaJLvE5SUKZa1MsqP90OQz4qNTKZSjZ0k3lLtxW5KyuWhP4UcHZrwH+Y7ZpldJrjym4mvUpO7igOvX+lBvCUoswVXK5vpStWX1lxeO8fhBz4DBp8L7AW6vtJ8RolXeLkhAJHlvWLTZsmkSSlpGFD+7QrKQeSldAfKpVuZGslrXNecIdUkuLdVzAxzPryFQLc21xpipU67wVxmWgptlp4alqJ8OtRnEs2RNhoe0pcQ67laUKG5HwpHjvjyxRTC0NLjdm7hc2VzVdh74sOPqIz2TSd0p/f51KzL+qcnXGQW0O/hR0Z5NDYK9VH7YqumJL864ONuoUHpjmCDyaaTz3/xftRZBcQuQ5KSAEtYbZC+WrkP/AEjBq6ITCJc1q1QdSla1Nj/1Lx+3M0KTLkpaXZLyi8vSVqK+Z8E/P7ACuN1uAcWPi7FsYSOpHTPrzPgBQvOnPypTERlSx2iCpQH5t9vrg/KmkBY/sskPMWTiDieWC9JcTpQF7asDKUjyziiC1zJb8uNJlud9xDsot/yK2GPvUBDZMDhyLGaIKXUELSNsaj+oohaSlp9lCTqUiGnH+8R/Q0mNBFEUTsnYuOJSPDI73/5VtFeVrjODGxBT5KUremzLvZsBzlp7R4D/ACgD9q6xNKpKUYwhTgCQDy0nP7UrCh9fnViKhLZIcUru49alIzZZjpQo5WMaj4mh++vLM5ttO2nHe9d+XyqbhuKcitrXzWNf1oCh4Dy8c5rYEHbGVAbgU2ZfS4XV8koUU58gMmoV6W6EKdQ4tvtMvOEblKBskAeJ3+lNCYQOyENaElQJJxjPlkn6U2jXT3qShDTZLeguKUrYgfl+u/0qEZdCtXar3d/CO+cZ7zhHoMinMGdpLyko3WjtFE9M7JSPvtVIQQOOFplSykqKeg/NW7ZUUJKk6VY3A6VGR06nGGStZ92Gtas81HoakgfDBFOxM6ZrbNcs4NbZosR1BpdOWa0BrINOxURFwjLhvC4x0KVv/aGwPiT/ADeo+9Nm1RZb7M6OUuYBQlQ205xkHz2og0pVUFOtq4c/+IQ2ytCiPeI6Obg6KSPEfcVSZalR24aWpxNwUeXvRA9NIFT1DnCMhD9nW+hXdckOHvDCh3iNx0NEKVEn5UGb9NqVKlQAqVKlQAqVKlQAqVKlQAqVKlQAqVKlQAqVKlQAhSpClQBqrlUHMYcMgnRkK51OmtShJO4pARUW3lSgt3P7VJIjoR8IFdQABS1CigswEgVmlkVjIzimBnFLFY1DGazmgBUqVKgBVqo4G+MVkkDnUXf7n/B7S/PEd2QWwPw2xnO+M+goAdutIcBGn5ioiVFLKiSNjty236Vq/DC2W3Jclx1wkL1NLKUj/KBzHrW8CatUgwJagpSklTTnLWnwPnScbKS0DSm3rReGlISVQJB7FQznsVc0j/Lkmi21r3UmmsmMWXCNOUEZx/WnFsQrWVEYBpA9k1nauUh5uO0p51YQ2gEqJOABW5UBQXfrmLjLVGQrMJhXf07hxQ3xnwHX6UOVIIxtjNy7ovF2cccCuzjjW22RgISdwo+ZFVhxVdlXaX7kV9yRI2xtpQnr6HFRvE/Fc6FOmriPKStzIUE47ydwCfLFCtquy3XHJkl1Patp7FvH5QScn9Ky6t7ZpaRtdYt7u14faQ2+qMhZCEN7oAAwNutdLLwrxLd1vs2+1yH0N9xRyEBJHmrnVj8CMSL3MVHh62m2kp94lD4W0H8g/wAePod6spm82eLKRYLY6lx5kd5to6wkeKj41rFWLrbPPL/sy4oZdSV2uY4rPfGtGceHxU7HC3EdtZQGLbOdUD3kuoHLyIUf0r0SDnxI6Z51HX69qsNqeko1Kk6D2KE+OPiP+EczVNFShSPP5jmE7ibbZsF8II7M5UF58PAZ3p5ZlXd+3lCoyg0kbAqBK8klR55zjbPlTO+3u4XqUt5yQt1Klau2Wohv/d6kVIWCSqFMaecmIUUck9mSDnz8fWppGNkbdHpDcmUxJacQ2wkqU5gYUDt9+XkCaa8OxkyeJCkKylASElR+E4z9qK+K3m7k2JEWOUBSMOj+bzJ8cZNDlvIhPRFISkqkJW3kbYKeR+9DGmG9qdXKcQFFQV26g2OYBzuDRc3pTcHV42PZBI8E4VtQhYFFuMl45LiG1vOII5LwQkjz5UYd3+ITVcvxCE/LH9TWTNUSiAUxMEbhsD5LUR+1asuqU6wpleFdslR9Fc/1rm66URzk4VqSjH+Xvf8A5U3iOhHEDDIwWkozkeKd/wBqkY7myA7fFhWCnWvQc/y4x+pojLpjxmRzKhp+2TQI26r+IN5R2pPfGDjGSc/tRfOe7FTG2zTanfoKYjr2uLUpQOkvOFIPko7VGuPawpagdClFWB/3bewH/qKjXK4LdZftURIJQ0wt5X+IgaAP/fn5V2SlKVhBVhCNKNR5FKRqKvqrB9KYmYMdGgMkAqIDR3/M53nCPkTThLgC2Do/Dd1S3Nvyp2SnyJJpulK3nGkEFJc5pB6uHKhnxCTtTraRIUjOEOr05/8ACb55+f61ViHsN0sRVPyNndPbuAczn4R8uVOYkhKWXC6SFBQCyf5j0FRa5OtBccOEKUX1pHINp2SPtXdnurYZd5ISZMg9NXQfWlYE5nP71nO9RqJbqkxwcFx4lRHgkdafpWMDnQhUdQrfFbA1yyKyFVViOoOKRP0rnnY78qY3W4e4xUuBaQsrSAD+YZ3qkBxmWGMuU5OjuOxZZTkuNLwMgcyOtSFlkrl2qK+4QVLbCifHbnUVDvDrrjYkFtLK0OKWpW2AFECnnD+GWpMJOrTGeUlGeQSd0geg2pktEzSpUqBCpUqVMBUqVarOlOenWgDOazmo9+7W6MrS7NYSrONJcGactPNvJy0tKwDjKTmgDvSrA5VmgBUqVN5klqJHW++6lppA1KWo4AHnQB3pZzQWfaPZVNrdjl19pJOXEJ0p+9SNp4wtd3QlTTimlLBUEvApOB1HjQAR5A60s0JXvjq2WSMX163hqCQBtqPhyoWV7To700sOTPdEkA4bbyR5FXj8qALWyM4zv4VjI5Z3oDgcRl9z3iHdFvpUNo7/ACPocbUUQLzFnIwk9m6PiaVzB/egCV8qY3K6wrVFMidIQy0PzLPP08azcJzVvhrkvbhPwpB3Uegqq+I+I2oslNxuay4gtq0IAzoz8IA69d6ADI+0Wwpe7LVKJ64jrJHmRjYVq/x/bC4hMVerJwrtmlo+hIxXmq48USJcKeqPIcSHnAXCDvg9AfDFRMW9XAQDFEp1besqI1ZyMYxn50AesI/HloeurNuU4pL7hCUkEKRk8gVA4BNE0eQ3JQVtq1J1FPoQcGvFVquEtt1bZkuhMnAKgcbj4Tnpjxq+PY7xs/eZtytV0kBczV7w0VbFYJ3GOWc70AXHSphDmh91xpYCVpOU4OQpPj/wpy+8hhlTrhwlO5oAbTbtDgOttPvJDzm6Gk7rUPEJG9b+8R5TKkq3QoYUlacbH1oHW6uJxTLvt3W23GfSmJHK0k9h1HL+bG+1EOQ6Atl5taFDu4XzppWVGNmkR5tKlWtbyXVN5VHWFZ1Jzsn1Gw+VcJLK1J/DP4zSu0bV1CuoHyzXCfFYeaIWpDTqd0PIWErbV4jeuEe7p9+ZtktahO7MrSrGQ8kEAqB5dadfRqo6C2G81cYTT4AIWN/I9fvTpCEt7JAFQFpkJiXFcMqwh/8AEaB8fzD9/nU5IdQyyt1xQShA1KJ6Ac6lmMk7pELxRd1QoyIsZQ97k91H+FPVX+vGqh4t4hcs9zbtjLvYtIZS4pRO6snf60R3PiFhuZ/FZ6ygy1lmMn+VAyfviqL4hvbt8vqJTp7qnClAJzpRqOBWH7SNl8Ua3iQhVwWl4nZkoBz57GlZLSlqNGuEgBxpx/AaWDhTafiUfEDIreFwxf8Ai1bku2Wx19kFLS3EkYB68yKtJ2yOcL2x6ZcI/ZQm4HuUJlYBXryConGcElSvoK2Xhk9s0Z4iZkWxdk4acVBtSVKVMubbehx9ROVBrw5nnRjwUqwC0BNlSlCtRD3bKCnlrHVZ5knNPhFhcPey95aGm0f2VWhRSCQVA6fptQ1avZpAk26PKuciQie4kO9pHV2Zazvp57+tVEvHZYjTS9lLBBO+9CvtOUP9lS2h1hGtWFpWdK1p6hJ8c1uLHxDbGP8Ao3iMykJ5NS2wCrzKt/0oC9qM28SLdFhXS3t+8IJUmRHk4Sef5dPP502VNlfP3KH26wht0pIwENpO+PEGnUCZ2jhUIpZaRuVE4OPQVCW+BKuFwEQKWl7ONKhqUf2HqTU7e7PNtFuTLb3iO6mSptWrC07kK8NsbjIqTEcv3NK48htOVFK9WemkkD9DUM5PQ2lKXGipMd/tQpPQcj+gpvPlCO5JA/7lKR9Riox19x1ppLhCS+MqI/l6fvSoEWlYL7BlzI8BDhdkyFoawnklPxFR+dTbd5DEeS45+R88+ZBB/pVc+zqOHOIXJCO6GxlKvHBzRk7YZLVwUlUxKmXW1lKVDw3rKa2aRYTOXRLjUF0KKveCF7+gT+1Oba9/b5mtPeaQsj0Ix+9QItMhkQ3mZSewZY2QRuTjV+9PbLcG5N1uKyMAxACM76tsioLOtvllrif3VGlSMJTy+dGNxcDkt9vOBoQ3keC1YNV5ws+qTxggqIDa39QB54CSMVb0KypU6t+VhSipKko/lwBj71SViboFe3Eq9yzlXZtKQzv0KAVH6lI+td0AutgfnWnRg9CtRKh8gE/Wn14tTcB96QyjS3JUdZz+ZShk1H9rq1LBIUNR9FbJSfok0noFTHUZ38V+SBkISShP8x5J+eMVlr8KK6rVleEx0qHLn3j+n0rMRAWmOzgZkP5wP5E8j9hRYqDHKUpLKMA5AA+VUlZLdAqgIclNo5NZyoj/ALtHIfNWo+dboU4+xnkuc7q2/K0P0BH3rWQUKU+hhOlMlwRkHOMIHxehBzSdfwZDrQwG8RWAOij1+tA1sfRXULfflq/u0lLLXTYc/qcfSpMHOagXvwSzEa//AGyQAOeXFcvX832qYQQgBBPlq8fOlYUdgcVuFU1RJQ6rShWrAOcetdQaYqFKltRmwp1xKCoKSgKPxKxQJcZT8yRZ1TM9qXiFgctwoj9KIr6UOrjtEJ1DKgc5IJ7oP3qBmNa7hblH8q8n1CSP3qkTR0uMduTEisPalNlDmpKTjIznFFlmXouUhoclstuEY5HAFDMjPZwtuaHBRJBIbvbX/ixB9iBTQmT+aVYxSqyLM1oo77Gt6ZzpjUKOp53UUjbCRkk9AKBkJxfxjb+Erd28tzL7mUsMJI1Oq8MV5p4h9ofFHEDq0v3B1oFXKMstoQnw251z9ofGEq+caTZCtZbYyyy04MFsDmCPHNQCYyno6Zk1xSI/JCR8TqvLy86AMPPtIfQpyVKdXqBW5rJOfWjbhT2h3Ph1xyZ25kREEdszndXQfPrmoK1cHSLglU+Q2mNBB2cc2R6Dqo/arBt/sqak8PTp0xSmnBGWYzSh5ZBUOnjigdMvi1XFq7WuLPYJLUhtK058xT3z/Whf2fOoXwJaEocC+zjhCjnOCNjRMVYwCcHNAiPvl6g2G2vXCe8ltlpJUQTurHQDqa80cQe0q58X3Z2PcC6i0BztGojIxqA5BR65zvW/ta4yfvHGCgwSq2wVKaZIOynAMKV54PKg6wwZd6uDUGCkqmyFbL6Mo6n9aAOl34ilSZa0vuAMKG8do4AHQH0ow4UvBixhNmSn3UR0FLKXCSEk4wB4jpSnezO2vWS4TuHrk7dlwVFDo2SdQG5SDzHOmlnYTHsdqbed1tvSCpbaj1QCcfagCPvnG0qZMfceSFvBWlvOyGR5DxqPgSGkpMmasiOjvk53cXXKdIZF2EjskAJUt8jTjmcAfvUZcl6mGW2SS23nOD+Y8zQBO27jKWzfUSFulMdJ3aSengKsO0e0lhpENcxrUnt16idikY1DB6YBxVIxm1rd7gO+APHPlUk668wlbbp7zSVII8VE7n1oA9IcY8YRWLOLmsqXFIDTCB1UoHUr5Db51R/FXFCrs+wgJLCEhKdIPTJ5/I0ScarMrhK2x216mUxWn2t9ydOFZ+ZFVtclhfZu7DW0CMdSNv2pAYfkBAkstJ0hTgIA8M03aeUh9WE/IeP/ADxXN9RU7qxgkJP2q6PZ97MWbhxG5cbmwV29lptxkZGFrO+4znGxpgdp3stMn2WWyVGZP8UYa7VeButKznBHlmq+jC58H8X2+6FtaHGpCQ4dJGvfvc+hGa9XW262yUmU3FkMlMJZYeI2ShQ/LkjB2IqC4s4etnGNu90jtoL6HErTIQjZIHPvciMbbUATEBAuETt46w2oOa2Vjl3kg48wace6zJi0e+qbQyg5LTe+s9CaXDtpNlsUS3qeLy2UYLp6n/lUvpFAA9eoay4zJSz7wGXgtTQTqJTpKSQOvOo0NW6a4VMoaJCslKRhSD5p5iiS4MPupbcjKSHGl6glRwlWxGD5b1GXuRDhQW3bhDQ444rToaA2PqcD5mmXGVERIFqQ6mPJTELroIDS1DUvy8aj3Le7b5LLzIUqPGcCkJO5Q2r4k+QBwflXKJFttxS9NYizHZil5akrKCWSOQSM8uhxzFS8e6POtjtrDLSSN++1pPiQNWcVSZqnY5kR25ATlSklJ1tOpOCk+I9fCmV6ur82Eq2PHslnuyFj+XxHkRUj2gVp7im/BB5j6bVDcUw33rPJkQgPfGI68D+ZODt8tj8qjJFtUiuqW2UPxbxBIuNxcSXUpjR1EMJBxgHI/agRL7oWlQVkpxj5UYwYkKClCuIIS1rceUFBRwQnof1qTHDHDc4OKbcfhFCNaT8QKenpvWuPjtxtHDkzpSpk97EuI24T9xsi1FxTzRkx0ZxqcA3SPM70ZcUXN2+8DPT7I4FhKsSGVjvJwe8COih+9Vzwv7Orgri20uxbkjsy+HO1YV3kpTuT9sfOrdlcPp4XVd5tqhSrk9dBlUZxSQ0FYOSd9s9dt8VMotaZtCdoi5HEdu4p4bsVjtktt11a20zGkKBKG2xlXyODiipT2s6RnAAA+VAnsjgxmuD5En3dtEv3pbal6QFADPdz5eFGjYy9gUkdGJKiTZClaRklZ61V3FlslcScdCBHfKUbA4Phzq2GQE4Uo4HWmMOzNMX5+4hptPaJPeT3lE/PkKGTNFXe0mwzeFeE+wsLSBGUkfxGSg5e35A43SmorisojeymyIUpCJExoKU3yISg5BHy2oxvdnuMv2rrYhsq/htwjhueXEkoXzyRnY9Kqj2mX5ibxYqBBI/h9rQiHHSDthIGr6nNSYMC333ZUn8VRSUgJ+QrV5Sn1lScFDadI35ipGLaJs+K/LYiPPK1ae4knGeeajlx3oryEONqSrOdCsg/OqcXV0LsvCyuAIojuawANKHEb8ySjNFVxfWbmyQcoRHWtflkgCgzh2f216iqQC0hbwykHbYaTRfgSJi2wcrVGQn/AN2f2rln6bwWicZUpWUqPwoTjrzAH7VARQ4i/X9qG0VOqSl0D+UFQzj5VNIOuSAORCP1NaW2M0HlTEjQ441haxzICcVNlUR3CTBVd0OD4tTukDzKcfoqrisd2EtlTbyk9slawkDqkKIH2FV3wBYpEtLMsJKWWkAhxX5ySvOPtUhfpUnhXsnUk9s0QMj8wUrKvtWitEOnoPrsthUVTDmhTq0ns0nmTyyKHv8AZ644wAg4AAJP5QMj7qNQbN8My+x+3d1Kc0KQoqwEA94j6CrDRcYi1qQiS0VDfCVg+f709MimiFjWeWzcoqw2EsNISkHVkjG5+9EuNjgb1yafaf8A7txC/wDKrNdFLS2jKiAkcyelXFf0TJ2B15gXHS+5EiFwttHskJ/Oonf0PnWLTbbk37uiXHUEx0FZOMlbihv+poqMqMR/ftYTue+Nq3L7KQO+jGM7KHLxpNIpSYHN9sJyQ4kJfUsLIPieQ+QB+tSc+UI8NSk41rUEN55FR5VEJkKM+Q4vHa9pgJHLUrb7AZ+daTJS5NyUwgDRGISCPzLUMZ+XhWT9NU9DuK/7v8PTu+ZHIeuc5zU2F5yT86Hoakdqle3ZNIL3htjCPlualA8pq3l5wnZJWT60JgCydU7jmXI7VXZNICCAo42P9d6euoHvbWs40lRJodsk0CfLedOkKX2eQrI5aSc+tSN6vLUWYtWvSlp06jzCgUE4+1USSylNyYsFxs5SoO4qZQ7olWqV/MOyUfIjI++KDLTcwq3QezTnUSrcdCMn9aKO0S9wxFkgkBKGXj44BB/ahPYmgv2G1KtG1BxtK9wFAHn40q1MzLrqWWVuLwEoBUonoBXmrjz2o3+fxAEQXExray9pZbScl05I1E4r0FxM4pvhm6LQMqTFcKfXSa8wcO2k8R8dxIbneSoqcxjYgYOPrmmI7t+zWZfriiVBlpll9w+8IIwppeTrB33xuc9asVj2ZRocv3yRh4MAJixkjbA8fEGpSw2dVm4ufkl4aZiCosDYNqGxrperXdp8+1S2XXkvLuAUpxtRCGmEg5SoeB5UzSK+zojhxciaxMmoQ440QmPG/wCyYH8xH5jUjepsuPwzd06QuQlJZYUBgK1jAI+uK731ydGgyXrewtbjbZUgNjKirPdSBQ/xVxWqDCZt6Y6JNzQhDk4oGWo+QCdX1yBzq4xcnSKlJANwh7STY701FjxlM8PlWl9DitSm18lOE45Z6Uae0n2nxYXDS2uHpTcuXIBQX2FZSwnY5JxzIO1DUnhC1XLh5ERkAIOXW30bKUpW+rPnywaMOGeEOFbhwnGtf8PStEZeX0OAdp2nUqI5j9q1zceUFZlRQ1i4GvN+ejo93kqYe1KS4lGUp2JyfXGPnVw8F+zz/Z62XpoFtV2WgsIWrISlJSDt5c9/KrSYYajMNssNNttITpShCQAAOmBypm5GSq4GUlakqU2G1p6KAJI+mT9awouKBj2b8EPcJ2RTUl/tHn04cRpGlKsncH0qj7qU25BgLXhxq6OocV/LqBFemLxLeg2lyRHSjtAU4JGQkHmcVT3D9ltvH3FB4iceadjIcUZsF5ACi6NgceGMmkJoqS5xXXZMpSlpbTGQNRVtqVyGPHIFS3C3A0/ilxtDbrSGx3ggnKiPEirul+zzh2f20i4tpDesKCUkJBSBsCeeNqJOFWuHVw/eOHkwVMAaNcYDI8iRvQHUpm4ezWZw37xeHmNbEJrUhIHxqPX0Hj5igCbZpjDCrhLToBPaJJOy8+Fem+P4Uy8cMvWm3LSiTKKUas4wn8x9KGk+zWO3w69Y4T7T4XHCHO1UFFtwbhxHgDy+VAOFFLtS1P2mKl9wkdipoJ1ZwkcqH1odkxC0hrIjqJOnfCatCNwfb5XCiLWxiXdm3XipyOoK7JY+EHH5Ty+dCPBZEXi6ExMZHZ9uY8lCxgZUcYOfMUiKH1s4FXeuGmLylwJaU4iOrbJTvp1ema9IWyA/buFGWW0BM5ENLIwdgvGB+uagI3vMK6ucO8NWSKq3Rjma4/lLepW4SjHM7/Kjlsq0IKkBK9O4G4HjTKogLZaLbYuGRbJTIdA1OylEf3iz3lKO+/xY+VOmNNmWwqNqbhLIDkc7pbB2BSefM703vdpnTrxb5DDo92zolNqO5QNxp+fOnVz1IgSiAMpbK9hsTQOghSdhjwrem8dafdWiTjCE/XFdgtJzg8udIgWnJ50Ee0GezBctSZGeycdIBwSAoYO9HNNJ6YqmiiX2JQrbDuMfegLoFLOmO6/PcYOiOt0OtlSQlONODj505lSmY7SnG0OSgkZcDKScJzud+gp03Gi2061MNPws9x4JClN+viPOprQy+zpGgtqH5ORBppl/kf0R7UFDscFKtaVgKSociDURcpKbcgodUhLzgUG0KO6zg8h1rhPvkrhPtI6mBKitNl1tQVhSU5+A/t5VRt+9oU+9cW2e+S2Ozix309nERuQ2D3jk8yRml3vRTlKtnP2osuNX9hOonUynO3Pmf3qMtkp2S4iO0gqdmBDKE58gAPLeiDi15PEcqyXeJGcTHf7Y6cZKUjGM4oIXFlxykdi4hK1417gAHlg12RUoxtHDKpMun2e25zgidKf4lYdt6Xmw0w853mskgnvDkTVqrWiShK21pW25uFJOQfnmgb2YXJ+++z9pVweVMUHFsrDwCthyG/P50rjbLpwnINz4f7STbcgy7VrUQB/O0On+X7VzybbtnXjVLRpwTDESJeYASrU1cVrGRuc5OaJGmSHs4rrZ5EC5wjdbfgtSjqKsYJUNik+Yxg+dP22k9pkjHlSRupUqNWxhOOvjW4JBzudODk+tO+yT8OOladgAdj8vGkJyX2QdwevrVvuZbZYebS2ox1heFDI358zXni28HPtynJ9ya1vBJeDOM6cfmVXqCf7k1bHUT322WnElJUpQTjP70AFy2xLBIt0CK7NdeSUrkuJ0JPhud8VUccpPSOWeWEfSpOGOKHbU0/EdShpayXAvHxOEjunHzrtxz7rd+G4l3ajobkpe7J7HPpzND/FFvetXEDwkRww09gYSrIG/xCnMeQuRaLzantSiW0vt6uYKTzHyINdLlJR6yRzdV2UokZYHlRJDbxdyhKhk+He3q0oQ1XyQQQUIUwhOOWCFb1TZjuxWne9qZWSkEdfA0ccF3xCIbvvLii8X205O+fD7V5s4noQYfNuaXX06hlLykjHgBXRuU1Bjh55BWy3r7RAOMoCSSPsaiTcG/wCPOxEFJBU644rHLCU4/Wt7xrctLzbXxOhaR80neslo2+i5OGpdsnWOI7aglEbswUtpO7YPQ+BpvxfZ4t3tR7Z5DDjR1NOLGQFHx8aqbhLiB/hlSXG9TrTq0du0k7qAGDjzyRU7euMXbs8+sK7KG0ohpPiU7HPnnNa9rRh1pjKzwIyg+sp1pQp3Qs88Z0j7E05iOhq43MNqOlDSNCvNYxj/ANn3o7sPC1tYsUJtyNlfYJCyVHKiRkk+dO/9krN3yImCsAKIUdwKjoyu68GnB7QbhrUkg5OR5DoD8sU/4odSxw7MeWrSlCAonOOtO4FsjW7tTGQpIcIJBOeQx+lYu9qjXu2PQJQUWHgAvScHGa1UaRm3bPP8MSZdufkSnFAXBzQkJJGhjOVfYg/OpWTeHJF5RKfLiYrICQylXQHGB+tWmOBrQG0IShxIQMDCvLH6CmUr2bWSQkpUX0oI04SrHTHOpcWUpIDmbsuLHYnPOpQp1a5bhVuABsB6jA9c1JW54Kis9ovD8rLqcncqWdiPRONqDOOUMwr0iwwdYZS4hk6jnZI1K/an8m6rW+7KCdC22QyzjYJW5tkeGE4qGqLTsK4k1ckBKUhll54tnX1Sk7AeAxnanvF9xNs4RuklOBoYKUjPU7AVFW1pp6bFiaSUMMh1Sf5TsQk+lae0J5Tlg9xASRIXqcJ5aU4J/WpRQI2hxX+zEVRH4r0V7XjmVDKh+lR11kPzHEZJ0lztCnP+Aj962mz0W7h2PIQsI0Nns/8AfGP3qEjyX5VxgpQkqUhPaOpB/Kdv1xWhmyy2mHWbZFQO6W+zyAOQ0DNFUJC02x6ESdCIo0g9O7ioxDYRF0qGNTfM86ncEOrV/wB7FIx6CknsqtBHbHg/a4zuMamx9tv2pU34fVmwQs8+z/c0q0sxHk9n3m3SWCnPaNqRg+YxVO8IcJSeH+MbY/LSlBcQ4Unn8Kt/sauo8udBHtHcRFtENTICZbspMdlYOCkLzq+ya0StjhFykkMuI7vZP9qLQpmUyZJcWy5oyRpI2yeWc1PtOuElsKPeGd/Hp96rm6RobNtS1kMpKkobeSgZQofCon1ozsN2M+AlDamf4kjSHEK2ChyK01tKHVHfl47wxNrxd5NktrcVtxL92kJOgHZKB1WfIUKwbe3CYUgFTzrhK3nXN1uqPMq8c/anc1Zl8R3KWo5CViO0rO2hI/qTW2K9TiYFGPZnCyNj6LYoRld2OpR7JZ5An8lPDMlWiQLnDaLzqE4eZzgvI6j1HMVia1GfirZlhPZL2VqOOfLfx8KimZMywEMT1regAgNyyndvwC/61vlipKmhFisX6BcDbZsOWFtyMoUjlsQSM+ecCpYNK7TBGdJINVS4wLepc63jUwtSXFNpPcCwdlj1PP1omb4+ecmW+E7aVRnpR0l15eUoO2+3PNeRm47xvQ+1BbcYiplolst7qcZUlGP5ulVbwhw2rhjiWaht0uQri0HWHtONXXB9MEfOrGk8S2yzKVHuVzYVLT3i0k7j0TQVdOJrWh1tdrRMWjt0rUjQShBJwVDqNiduVcqezTHjnJ3QQtAe9LdWkv6WSGWBjAVvk77b7VA+ymzXG0QZyriwpuRJWVud0JHdOBsNuVEKm8uFzGEnvJI8Dy+1TEZ8pj5Uo+p3xVUXOJGymnHru7rWpuKyz+ItO6s8ykeGcD6VVHB7siTxlfpcJTkdmYj3eO2kEYUSQCc8sHej+1cRovF/uDVv7eRCSo9s6tvSlt0bYT/NUmYpm3UMRZLEVbKCp3Sgal69s7dRikZNOrIz2acGN8PRbk526pDkl1SC6fAeHzoI4u9nLrnHIctjjvvMhsv9m0gDUpJ2USSAAev71ekSO3EjtsMoKW0JwAfD+tNp0Bx2Q3Mj6US2gUpUrkUHmD9KkysZWyY67bEvvsBmYlID7XLDnUZ6jPWoCZGvJLkqNcRFkSFgJZaHaAqJ8TjbmT6UUTYyV6XsBLgBwFKAB25HxqPBwrScdoOaQrdNUbJJjrtXIIYEt0OJXpQt1KcBK8c/Qmleg2xZ5kl9WlptlSlk/lIzvTK6B2dZpcRso7R1vShSjjBztv09akoyDcbQpidF0oKdC29YWFAbc6CZJoaw438SZbkzUFQWgFtpQ2bTjb5mu0F5yBN9ydUVMObx1r5/4kHz60+SAhIAGAnCQB4DpTedFclxXEMkB9PeaUeQWNx/xpEtaJQuoRpClBJJwMnGTUZPiMyrzD7dsOBDbhSFDbO1MITjF/dW6rUWmkdmUDI0u/m9COlJ6S7bX47ctZCW3AG3j+dJ6etIkfLsUbcxSuKo9WVbfMGuFpsku1S3VC5uPxHBkR3Gx3FeKTnYeVTaMbmtjyNFh9lS8fySXr0oHZmN2YHgcA/vVE3wpZlQ0/DpGw8iaunjHW47xEFDBK8EeWlP/CqWuyEvyFJcRunuhXQ7ZrnT+R0S/QIOHeKbnarYmCiKzIYaQXGiRuUk4O9TUnje2OWpxE22FOO6tCN+zOcA9KG43Zt2y3rB/u2ihxA64IOfvTOaUYlvrGULwrT4jOa6Y8qS0c740Xstn2XcTWVm6SLTBDjMCSU9gp0Yy9jdPqRmrVWgoOOn5dunga8z8LJdk8IXJzSMIdCm1JGCFgghQPTFWHwn7YWFW5uFxM06H2ctqmtAKSsjmpQ6HlSWTszVR6LRZ8WNHhIW3HaQy2tSlkJ20qJyT8zXdCT2oAFR1vvVru7Iet1xjSUEfE04CRUmwcKznGBk58Kpb8G2krHB5nzGBQ3duKgy8uJbWhJkJ2W5ybbPhy39KZX3iBU5bkK3rKGE7PSEnc+KU+HrQYl9JiGQ6t5qIVKSwwwnK14/MSN967cHG7fKR5vI5X1EmX3XJDxfnSe1dPVxQASPIeFN1zm9REZBfd/la3A9TyFB0i9uSXHGrZbtCRnLstROMc9q7Woy4jJ0SFPLJ3Vp0NtnyT+Y16EJRWoo86alLcmS8/h0Xt8LuLcZLamygoRlasdDqON/l86reVapnD3FjUSWSpt1Kmm3lfmQRtnzq4o6imM2HMIUO6c9TUfxJYkX21raAT7y0dbC8bhXr4EVObCpK0Xg5DjLqyinHSm1tsEZ7yxkD4cE4rjBluR2F6dvxkqz6A07uyjBeuVvUjClLSsdNCs7imOoKt7mBhfao+mlVeFONNo9uMtFgQXiu9vuA5WuCtwAnmShI/ap+0qcujrseWC0lhKgFJPVJxQpZ1dpdipXS3HfpyFT8KW0xMSgBKVOPOpcUTsQF8jXNL06IvQ64NQ7c+LbbDawWnA6twqH5AR980c8VcDKhxnpVsaLrYJX2P5kknKiKe+zjhZmAXLwSlTjyOzaxnCU5JOPXapzjm9s2mxaFqKXZqvdmsc8qq6+NmTfyoilcbvQY7TZhIJS4Gca/wDAT4eVYtvtAlXG8pt7Vq7wWEkpczgfSgFq7C5KWvdLSHVLSPzHYjB+tHfsysDkOA9dZaAl+WcoRj4AMjn50oNsqaSD87+lCnEfF7/D9yYjuW5LzLw7jiXsHV4YxnFTV8vMey2x2S8QSkHs2wd1q6AVW3DUKHxlxHMuFylOKebdWtqOFbFpQwPkBkVq2ZJEhH9rTbxUf4ZhCQshXbfEEnB6U/i+0ZMp4p/hpShLCnXF9psjHTl1rvxfwfGlcHyINsYRHcbSFJLacKIHMA+dVKxfi1w5cELQhuQpzsEnklQzy8jtWcm0aRSZi7T0X7jWXPba0ttpACCdwpX/ACqTiMiVMhMDOhT6nnB4gDfPyGRULCjliIHUoJC8uKyN9WwwPHnUop8x0yUJUQ6WkxUOHoTuT6DOPlUWWkF9ikpU1LnqCwuatbiFf+GnYH55qB9olwES0R2nlYcEZxerxzj+tS8HKYbbKCNDSUR0DHMEjI+dV77RXnbpxU9HjkuxYjIaWM7NqyM/tSj7ZUvASnXCVcLFBhFpReaQlspH5kndJ+lGXDEbU/DnFAQpUZDPLdSgd/2rrBjxA8tfYoDjLy0DbokYGfTFOmrpHcukCOkBAIAKkju9Tkee1aN6Mkth/JX+GopGBoOKIWkhamsnfSE48jQSi6tSVyWmVNqWhohKichRJ2A885ohtd2RNkymUaSIa0t7H8wG/wB6ys1S0dYN0eagMtthWlIIGB/iNKo2M/oYSlzU04CdSCr4Tk0q07GNFnHpQF7RwS9YUaMoM5JJ8DhWKPTzqtfazLEL/Z55SsIFwTqHTGDXTDTHh1NEDf2yLBMcQkKU0kODI56TnFD0jjKLaI6XYroccKwlgpGCjI3+hxRYtK1zpMV06m1tZQnx6EVQDzTrV8NvcJKxKSjA/wAwrsyS2j1+Zl6xsv22BQtzCnDqWtOsnxJOc/enmKG+H7skKlwX1Y9zWhsE8984FE2N/KvWwtOKPGuxjcxqhp/81GPrXeXIZacQ08ApbyilCCPi33plxKXEcOTVtnC20doD6HlQlwJc5fFN/l3ebgJitBthI5IyMH51E8iuhBn/AAlLeBEdUw1nC2dALZHXA6VXvG12Wi6OFiSpt6K3qCUAhCSkjAHn4+tWkh9pT7iArKmCO1A6dcVQvEMxx65Xkg6mi+pCB4Z6/auXlSqOhr0sW1Sn7lCFzlgKlS/xFk+Of6U+WjWhSc4BGNR6edMbEpK7BAUNx2KR6bVuzN7Z1CkLGlLhaWgefL9K8Nt2fT4oxWJRDvhiebrCTEfITNi9xQz/AHjfRQ8f+FFrETQgAnIJ5eVVS2XGHkPx3FMvtfC4Nik/uD4VPyuNn3rcmMpLsWdkEltoOJcAP5dxjNaxlZ5fJ4s1LXgVSI0S2x1OJS1HYSSpehITk9Tt1quTKlm7vXhoqak9praA6IAwEnyOOVSFzvcu9JQl9sNsJIIQNyT50wUUtjUtQTg8ycddqlyN+Pw/i3MtizXaNeLc1LjOBaFAZGfhPgak6AOAoDSJ82UlZChhvsxsnxz67VYA5U0ePmgoTaI+42mJc0oEptSwg5BBxTF/h+O2EuwgWpCORySFD+U+I/Sp0gE1jAzTM06BRDup3sXkBiTuOxWob/5f5h6V3lu3WPBV/DmG3pOd0ur04Gd8eeKm5kSPLaLbzQWPv8qr3iV+62e7kW+8ykxGmC45HDQcIONgmlKaS2adnIOY7i3I7bi2y2tQyUqIOPHcbfStW5zQuSYIILxR2pSDyHj86pS0cb+0W+XREW3Ror8ZYJD6mtISkHmo52I8KN7paFxLE3PefdfnR19rKebPecTsFY8gOQocvjaCmWI2022CEISkE6iAMb+PrTS7WyNdre7CkoBQtOxGxSehB6YNB9k4mmMSkR5r6JEYrDIdxhSSfhJ/T50e58TtUwmpESi0N7aw9GgMMSHu2ebbCVudVEdfnTo8q1Cue/1rbVVskqPj9oxp962Ku1jh/bzGnH/tqiZchKYrL7owXHcrTzwMbH6V6W9odrU6libg+76FsyCOYSrGPvn615p4ugOW++PQB/d6gprP8p5b1go1I37XEdQpTSIiS4oAgghSeqFdMeoFRN5mPBxUcEJA+NP8vlXCMtCGXkEqRIb3TvsoA5x+9dLir3u4p7JGr3nQpJB5k4z981ajTJv6LQ4dgJj8AR2yMLePaHbxIoRtKgxd5ySlKgy4pGgjZWoftijSZK91k221tLGlCElQHTAx+pFBi2/d+J57R5rJ1H/FisYv5M2kkokAh5+ARcIMpcZ5oJUlTZwck+VWNwZ7QuKLoldocliQ32ZU9Kc/vEJ25Hr/AMarWWSi3Ng7d/lnyyKJbXpsnAhklWh64P41dezTuflnFd2BW7OLO9UWEu4uP8QNWG2kdkhoF9zqkHcfPrUnxC+bZaW0sPBn8qe7z+fT5b1D+ze2KFseuzqT2s1WxP5UgkCmnEvtAZTLVDgW/wB4ksOYC3BkNq6kDlzr1e9R2eS8dz0b2+zyJRLzw0tk5U65sn1FTdumWhM0RI8gPyv8KcgfMcqrVyVdLw8ly6TFFJVsyhWAM+Q50bs+58IcMSroG9C1IwgHYqUeQohkrYTx26H8qaZF8TGCwIsbvOHPxr6/TwqejqU61qUkBKj3R1x51TXDVwv18nCHCCSNXaOOqTkI33UT41Z1uu8JpXuDMhUtbR0Ov/4z08/2rSGXs6MsuFx2V/7V+Hvd5SL1HRpQ9+G9jkFDl9ar9tJZbdbVgnIJ8D3TXoe8wmeIbTLtmgKSts/ig7IVjbHjvXnhyG9DmvNSEqToUpCiehGa83mY+srR6XCy940yx7Eyyhl57SkZtZA25Gu7ERy53aPEjJUqQq5KSAP5CvvH5CmFjfCrYkL27SGoYzzxtRhwPc7PY+NXXLq+GVO9oiO4o9zUV9fOvL/6PUfhecSKiHFZjtABLaQnYYqmvaVelXL2iW2xRzqMJIeUnIGVkZA38sVcb8xtmE5K1pLaGy5qByCMV5Pk8QLu/tAut7QSCtklJB5YQBt9K3aVGC9suThL2fzEgPXdKWkE6w0kgk7g4J+VWblqJFJCNLSBkJbTyHgAKbWSWZ9jgSyDl5hCz55FOnJDCCQ44gEc8qAxSikgk22UZxDM4m4qvPai0Tkwm39DKdCh3ULzrOdtxTuxcO8V2W8xptttBAD6kvBbyU5ayByzvzO3lVvSb5a4aVKkT47QHPU4OVRb/HXDMWQply8x+1HxJBJ/aildjt1QRhIUk5A36VQ3tX4cRapKX4zXZxpEjtdgMFZyCAOmxP0q3LBxjZOJ3H0Wmal9TGNeARseRGRyrrxLaG75ZJMRSR2hbJbONwrG1DViVplHRZSI8L3gkaEjIz+VKeWfIkn7U2sbjlzfWt5RDTQ1uIJ6uHOMeQOah5zjzshy3KCUhDvugwdlJR3nD9dFSnCqHVLnPLH4ZBUnPP8A0ByrFqjojsPbWMLjj/xkqOfAJIJ+9VPfbqzBudwx33H3VLWMcgDgfParYhrDam1HfS28o/UVSMT+3TZkpxOoKlDUT0SCdv0ox7CY7t/EKgqYuUFIcU24XANgnUk7+uTipjh9z315p8YbhMAqaQR05JV9Tg0J3tSUSXnGzs4MLzy1Ab/ei7h50NWNrKSlK04AP5U9f/dpq5eGS9CuxxmmHWllHZpbWXnR/KRnf65qX4GlB2A8Vf30pxUtxR8VHOPvQ7LfMLh2UrJ1Lj9lz3IXtt5g5PzqZ4XWmGhlLiT+KdIA3xgYB+lYmyJ2bBD8553SrKlZOPQUqkFKVqO/XwpVHYOofmqe9vpULLaSjOUywoAdSKuDpVc+1hlEiJbI7oHZvvloKO+lRScH7V6C9OfG/kQSZiJNqt1wbOHVoStvwOQMgn/W9VJxVGMb2jNPRE/3zrTze3PJ3qx/Z7JFw4VNtkp1OQlqZcQrqNyPtyqB4rsD8S+RZinApth1HZlWxUlR3HyrrcW0melyE54xk5N/h/HU5havw5jjSgTyKh/xzVrFPfVttmqa47ZdjcTsPpUCVLTgjqdqudI1ICgRg7134JU6PMI+9M9rYJ7Z6x1dORxzqBs7MHgrgITElKllsPqUrGXHFDujFFkplL8OQ2c4U0sHHhiqK4g4okXZuHbGmyli3JKcfzrzgE/QVOeSjKxFicIyHzwdcJrpJfdU4palH4lEePgOlVTPfUxDllSErK5I3I8M/wBaty9wf4TwFGtbS+yWrBUrO4I7xJ9SMfOqfvC0qbDY5uv6sfSuTkS+I16Wbw28hfC0VY5Brl4Yzk1DcMyVPQp4PNpztPMkHepS1hcWyTYgA1RkZQAehRn9TQ5wXJKrxIjqUOzloXp81ZG1eYj3vydYxDm1ThdIhkBBQCsgdTtT4Y1hP825HnQFwdcTEuF2hynFdlHKnAnwwdyKILNe27txBNbQhWI6QEqzskdfnmnRvDkRnSY54gmGDEjrSsoU5ISjI8wfryqC4yujiIlshIVl95YcWBzwCMfenHGoULhZkJByVk6Ty8P3qDkabhx6C5/1O2oClE8sJGfuaEjnz5mnSL69n6VJYlBRyoFOc+lHFAvs6kKlRJD+Rh3SsY8DR1WiPGz/ALsVaFWDyramlxkJhw3pCiMNoKvmBtSbpWYg1deK5CZ8qDborZcjrCHHnz3ASAdgNzsaHUMPiW/NXIW/IeAK9Z7uRyx4CsQlIAUkrBkOEvOpzlXe33p3jPn67V4nI5DlJpeHdixpKwdcR7hKcejdvb3nFanOxTlBPj4fWn0Xim5MLCXbzan2j+Z5pQX89JA+1SS0qcaKQtSM8lAcvlXH3RaU5S8Fq8XGxtSjyJVRf419kM7IVcpkxcZ/3h2SlKXVMo0sM45KSTuVelGcXiWXOjoiWqOFLaSG3ZrxPZJwN8H8xqBt9nevrgcemJNqSpSVNtpCe2UOYP8Ah8fSpC7XBKbSYlobQUFaYqXGlYCVHonHxYHy3r0eLCXrMJpPRJx37k4pE6FdkS0qThTDicNqIO+g9Dt1qbtt6jTlllSVR5IGVMujSr5eI86hIyGbQIsBlOSe4hKcA4TzPl/WpDU26sJfZS4AoaSobiu5oycCYlMNS4zjDqQptaSkg1S/Evs0lSp5XLgmXEaSUtvsr7+j/EnmSKtRlEmL2jzcsutZ1Kbkfl9FUA8QcUXNq+QoqZ77TcpQKm2gAUah3Bnwxz86UcXeWjNz/GrZS149nd5YlOuQWHJMdO4PJaR4EeNc+DrC65xJHTObcbXHXq7Nacb8/l416GTKmON9nJMacE7fjt7/ADqLuVrZlyY8lixxIr6M6ltY3JGOfOqnxsiWiMfJxyeyqbpJMS/hxWSHJAb1HplYqE4pmNs3eSI7o7bJJx4+FEnGHDd995Qpi3OvBKu1U42NWN8gUDXGzXj3h2S7AlJ1HUVqbIrCGCS9RvPPB+MZSX+3SyyE4ICenM4o6u9neu14sfDcVJxGjJDuOSM7qpWL2dyn4DF5mkFoJ7RUdJGsIA2PP51YtqcttuMu5y1KbmySC4l7mU42CSNiPSvQwYmtM4M+ZfQz4surfCvD8e2QEq7d1vQ3pSMpT1JqvLZw7cLp+M3/AGeLjvPyCUjHUn+b9KmeJ+J7jLmJlIskRKUqUlp54JWvHj5UMs3OffpfZypTjyU93c6Uj0/StZS31MoxddiwuHYXDsa6NxorqrjPAz2i90Ix1A5fSo/jWPM4svbdohLSiFC70mQpWEIUeeT5eFduHPdbDBn3QNpIYQpLrpODq6DPqRtQHc+KrrxBEbt7LYQhayVoZGO0UeqqrJkSh1IxQbn2COXfrXZoSuH7Av8ACHdkywnvuK6nI6eFT3DsaN2bDDaihgjCnRsSeu/iep9KC7Hw52oaEkJbDawMEjLivAEdKsyLCZtqASEPSEABLY+BoeG3MjfbzowsXIkvEE7LDbTaWWkhCUjupGxFVB7TbMIt/ZfCAIk1RdUoD/tMHNWYm9uLU0huPgqVgtn4gnxOOXzqN9o1p/ivBzy0DLsYh1BHQDmB9avkLtAw4s+uRFUxpPuzNoCSQlTLuVHkRqIx9q6cQyw87JWcHsWwtHiCVb4qKblNrg2lBVu2hxB8sqJH61m4LOqQ2TkqSUk+gz+1eI1TPoL0EyPaHxBAhyOH2Hw7CdZSlPaZKmk9Qk56+eaE4D7cN2WTkpOEI+fOt29bt+DaE5W4hKUjqdqmOIuB79w0wH5tuWlh0Fzt0kKAGAe9g7fPFV9EHVji/iNTcSK3d5SWY7KQltt0pAGoDoRRNNclJuNzkOT5CkPdgkBTyjjY6sb1XkNSu1dPP8JrGP8AOKOg8hTksr1YSwl8dckahis5M0il6Q10mfxZMVHfQTgK1fm3yPtUaw4Wlz7ir4lJUUg+oSB5bE0fWj2XXriK0267xJ8NlCm0LQlQJIIxny8qHfaLwfcOE1MokvMOe/Okt9kTyGBv8yKaJvZKezy7uWFyHPTrcZJIWE7Facnb65ov4p4/uMuOUxHPdWlkhARkKV4b+ewoHtzQZYYZSezAwNum39c10lPe8XhDRICY6Q4rw7o5/wDrxWbk7o0UV6M5jCWFJaZRrfWUx0FXVS91Kz48h8qL7bEbjF5oDOlQaJ9EgUKxFKXcY80qGpgLfS2RkKWf6bfWi+3FbsCM+5s48StYHjqNTJmkR3cJIi2KdICsFMNSgfAqFVK2RFtUBpY0lTbkhwjmc4wT8wasPjOSI3B0s8tSWkjfn3hkfSq0u77apHYIcAIaaYQP8JyT+orTCtEZfRhOPvHYtk4Osaz0KjuasC2NBMRpBTpU5hKUq8vi+u1ANwKWVtNIGtS3StxI3woHG1STc+4vMydEjT2OAonxwd/ptVyVmSdBhfHQtyLGC9nJKUp8NgCR96KbetSbtCiIUNaUalAHJACd/vVMQLzKjT4hlKL7THwoV0zzNWf7PVvXG53O8PHK14QnHIZxWU40jWErZZzacoB3Od6VbxgTHQRvtSrDqbdWG3SgH2noBt9qWUatNwbGM+IV/Sj6gD2ppWq3WYIcS2oXVkhShsDhXOvSj6cOP1FX8Nz02Tjl6M6nQ3PJQR07Ucj89qNOM2wOGXF6QtaHmyFEZ094AmgD2iW1+K6qZF2Wl3Wop5pII39KOnbgjiH2crntKSVFkLOP5kEE1145bo9Hv8XEAuP0K/iLgwdaUIdRtzAHOrG4clouPD0CU2rUFtD6jY0N8d2pUywMXiO0Vvx2kKcCeam1AZFbeyy4ImcMKjIOPdnO6OoQSTXVB9ZHnP0OAjcDpyP71R1v4fcle11cMtENIkqfORsUp3q9gB036VXlyfNj48uz6QlUyRDSITZ5knYgfPJJozb2Ib3+5JulxnOheY7DiIzQ6EpOV5+lVxcLU489DmspcEZ2R2feHJWr9/2o9lQP4bCTECi4Y7ZUpYGVFSgcq8wc/I1vMtf/AEHBjJ2WwpuUptJ2UVkgKz/u1y5lasqCuSONnmJVxzdIxA7NxtGkeOkYI+1AUmeqxcZlbekoiyioAeBO4+lTjE0RPagoA91UhTfhjV0+tTcv2bxrjcpEt6Y432rhOhCQa87xnp9ZZIfEB77OVbr7dewORLwUq8AoA/vT7hTiNrh+Op15Hauy15Vn8oH/ABqV4s4TtVktapL86U7KKQhlBA7xHj8qrxolx9KVKyOQqvTlffFMsCfemrvfmJCHlKaL+lrUNk5xyrtxxIahXRUCAz+PMCFyD1JGNvQ0OhCG7rBjtqKkNvNjfxG5/WpuGy5euMbhdZOzbTpSnw22pmvdy9L59ng/6PUVISlQbbQQnkCByo6oJ9njK27U+VpIUt7Vv0o2pnFl/dioW4rnoUlu2IWkuukLcT10A/1xRFJfbjR3HnVaG0JJUT0FVbMufvDz9wdWUSJh/s6SN0tg7Vz8nJ1jQYo2zSG41Ju0l5DZR3AFA+IJH7U9lS2IccvyXkNt+KzUTAfbhwplzkL0M4Pe8cEn75qneKeJ5/Et2WMYiJXoaQj4QP6nxrzcXHeR7OuU+qLxtd6hXgPKhOhaW19nkkb+lSWNyo8sgZ6D1qp7LPj8MsNqWUKmuN91lO4bR4nz8udOZXGs6M0tDSlLQ6NCHHdiM7FVD49N0JZLQYWnja0Wq7yrXPfajxpCipok7as4OfAHyp/G4gtt74mtdutSCIkFTjuvToQtYHJPjzJ+dVpAsPvF0auEtpL86XtCjc0toH/bLB5eQ8amVQzdOPY1tjPutRrM33nGe6rXzUrPX0r0MeRQSRk1bss+Gnt+K5Th3biR0ttnoVK3NEceOh5JOoEg4OOlV5wBxL/Fp12amrQmQuV+CvGO2QlOnI/xYG9EliskOQ9Mllc1t559S1ITJWhIHTYHANdcZqStGcpUSV4QhuKYxcTmQtLRRnfBO5qi+LbuHOJFyBtpuGoOA8ktq0fYVeFxt8W2solMxnXlNq1LWpRW4B6nfFeYeMHXkTRqBQpTYcx0UFjJP1rfC6dnNl+WmGEXiafb7jI7ZwLDa9DoBydPMK+WaIxxTISylSXtb+MoGnurzVOM3vsJ7MlSwtD7SQ8kDmeWaL7LPYdY91LoUWyS2T1Sd8Gu3Hm7aOHJi6bDtnjJ19GtttKin4myrBHQj5ftSicbRSTHuKkhzfslFOznlv1oPltKgy0PtE9m7vj+YDn/ALwptdGUTYp0kFp/vJ3xoV0I8KpuiFvQXr4pgm5suCNpbQrdY7q2yeeRyIqOvLwgXFEOcgPWSX32XgMmOfI/y+VA9uvKlOmBOToktZQFK5r3+E/tRdbpCbzaX7G+v+0No7aG4eoH5f2pLImOUHE3fszkSKnCkyozgy0pJyFp56Qeiuo9aYW+xW1UkuQ2cqKchJJ7xPU+Hp96f8PXJttoQJuRDfX2e/OO7/TPI9N6mFpb4Sh3K8zikgghICR+IvooeBV1FNqPpKcn8UBvtDnptdmicORNWsjtZJPMHoCPrQjamZstLcWK0Wsd5xR7pA8z0FMZd3eul6dnSVa1urKylR2/0KfPcQzfdylKQyyv+7IHeOOuT+9cMpqUrO6EHGNFh2WE3a0do2O3lFOA6r4UjxSKnmUqwcugHmo43Pnz2H3qr7FcbrMcOiRKdeOAlIPdPhtR/aeFkBwrv078aRuY/a5KvXx9OVdOORxZYJO2T9jXDuLriGO0caQe+42nuKP+Y86IXITT0NyJpAadQpBA8CK4RJVvaCIcYpQhAASEkaR9KkQMA+GcV0eo422pWjytdrW/ab/JtznccYX8sbEfY12ufahpD+gaVqO/jR37ZbP7teYl1QgBElBaXp/mSBv9MVj2fcCv8cOR1vAt2qOU9s4T/eFOO6B4+Jrx8samz6DBk7Y0wh9kfAKrleE8UXFs+6sge5pUNnFYwVeg+/yq77zJhQ7RKk3Et+5tNqW9rwRpA6jrXaNGjW23tRmG0NR2EBKUjACUgV5+9qXHDnEF6VaILyhamGllahkB5Wnr0wKiy/Rna+FDx7xDdp3DsePDgNvIAbUsjbOrOPQUXxPZZf25qXHnoZa7Hs1gLOeasdPA1D+x7ie0cOM3Vu5SwwHFtFtSkk6hjHTzNWqPaJwwZKmBch2ieY7NVTSY02h/wlaH7Hw3Et0js1OMggls7eVDntF4GlcXKhLirZStjKfxSeRIV/8AjRjbLvDvMJMyC72rJJAUARyppeuJrXYHGE3KQWVPJKkEIKhgEZ5eoqtE7K1T7Lb4lxSkyYeCCMajsOfh40K8S8G3HhCK5JnSGVqnOltAaySAAVkH1KavmzX2331h163PF1DS9CyUEYVjPWgb21NFfDkBQAymWck+HZqqei9KU34U7YJTlxM5SwAGShDeOXezv9qsG3gCJESo7JCsnzBNV9wmhKI8zB+Nxv7ZqxIikkspyMlKyPrXLlezsxIgfaPpRw3GjlOoOS0IPpvVUriOyZr76VANNL0hSvIcqsv2oyFN2OGtPMyc7/5TVetOoNkS2ySoqJ7T/Nnn9DW+L9TDK/kdojKUOQSQO0Q0XCf5go7/AGNdsdnY5CtO8hRweukkH9AabxnEvvPLQrCBhpB/l2rRxxcq4xuyCuwSrbHLB6Y+RqiNDZ9Cm3ScZ0hKEnxB3z9MVdHs9iiJwu0rG7rmT6DYfaqovLIitsaSD31KG+5Sfh/erU4WuRRFiWlTWFR4yAVDqcDP3rPK3Rriq9B01ICWW0noKVDcl3+0uAOKGk450qwSNqZco5UGe01kK4XbklGoRJjMg+WCRn70Z1D8UwTc+GrjDHNxhWn1Az+1egns4I6ZUfFzTlvfcfkta7bJdPeHJvUP0JPyoHj3dXCP8RsT5X/Dp8ZRZcSrOlw7pI8OWCPOrKcU1eODbXKdwsuRuyW2rOlahsoeuc1WMyMyEfwq6ArbBUYj5I1JP8ij/rlW107OmctWizLRf7ejhe0v3GS2hmUyGwV7AkDBzUHwnZ1cN8dS4MRaHoMljtm1JOAE53x44O1RsK1JvfshXDdBS/bnTg7ZGDn6YNCPs6vUmFxvAakPuLQtXYAKWSAD4Z866u9Uzms9Ed0DOe7jdXgPE1V9x4qts72n28Qojs1MVtbDjjSNRKjnlVmXOAu4W52Gl9UcOjQtSRvp648DTazcNQOHYCmLVGQ27p/vljK1nHNSue/lVzk2BDtWePdmBPS8exddUpeU40BPxA/vVeWa+C+e0C6tAHsHfw2sfClLZOKKL3cJ3B/DN0tLktMh1TQcacXzBcHfHoOn70G+y2M6qU9KDeW1uEa8eAyd/PNcuWReL90DnESnofFSpKnErWl8KJH1H1FXBcH56YzTltajvOqAJadc0kjHSq144spg3Fx0g9g8O0Qvz8D6H7UYpsqOKOFLZJZkux5iGE9m6lZHeA5Edelcb2enj7Rk0hFEjiDtIt94cLCUNqKXkuBZB8E46mqdmJbN/UiKw4wgPAIacOSnfrVkK4u4p4VkCPeoSH2hsh0JI1Y6g0D8QhD/ABY5JguBxuQsPNqHidyPUGhHNyX32bW15UriZHaDSO2Bx4Z2Jq0LHZmWJCYTBKme2USpXNW52NVfAUmRxa0pCQNbqNhy5jNW5crmxw8q43N/UosnCEqIytZO3+vDFUPA1VstLg4/2eajwkH70T5oG9ntxcmxnFutdmt9lqQU/wApUOX3ounz2rfEckvKwhHLxJ6Ck2ltnJl3N0DHGcxUot2ZlQ0ud+UfBHMJ/wB7l6GquvV/QeKFwxsIyAlIzzJ21f1o4lOyS3KnBrtZjmV6AeZxgJz0xVFRbfebvxm3HTGcbdU730u5HdKhqGeu1cC/3Td+Gn6IuPhmyTLvw9KdktAMNNOIZQrcOLJPe9AMUOXqyRHuFLdcIrMdp5lCClR7oUrTjHmavCBFjx7WzFYSgNNthtIBztjFUNxbBkL4fS1GdWXLe4617sgbjCiAr6cqvJj6VQou/QJC2W33nEFJcPdKyeRHMCiu0WaNEtJ4n4hz7s2NcaKdu06ZI8z+tRfAnBkqfcPe7sktwo2VKSrYEjfG/wAz8qf3SevjXiYMtjTZYKsoA7odPj4cxSdf2Ugr4VS+7BmcSz0/22XlCB/3TQ+FI8Kj+G1KjWviG7rPfdUrS79v9elFgY12JvtEBltKFKUOWQAdPz6jzqOkW8R+CXI6GyS73lJI3yTtmuWWTZpQuG7cYvC9qdKQ0/rLvbAbtlRyDjqMEVadpiNwoaG0OKdK++txXNZPMmhGFFDdoYir5BlKFfSiDhuWpyKYzyh2rB0kdcV0cbLcqZllh9k4ttKkKSUghQwR40BXX2XWe4FRDKFAo0JDoKtA8EnpR/zrGnAwM16UZUcrjZREj2DIQt8peUpCk5aSheShfjk42oZY4Ji2BcqNeZrzVzSrDSmUEgd3Iz9a9OFPmapHjnUniK6EHT2b7SjvyBQnelLO4bLhhWR0BqYtylxHbazPjy2Hk9o2t1JbW0obDBNczab5Ft5DYjz0/CsNujKT4HP7U4ld11teSFNEkEfT9N65LQkSlIBIb1jGk4yVDnt6felHm36hy4VfYOTLNcbqFPohuIlsjDidunIg558hWbK5d4jZmKacxEdSUOp3La/AjnhQz5ZrpOmvRnNbTi2ylKkkBZ6D+tWTwFa4R4LjzpTSe0dSpbzmfiSMHJ6V04ZfkdnNnX41RDTIjMaeb3OebjWyWlLxjKBK3DjvI0+vXwxQPxlxbK4nlJSpKmYTRw01nbPiT1NS/GvFce5KMO1thMJsaS+rdx3fkOeBmhyI3HgIEuYoBz4m2Makp67jxqss3fVGeLHXyZxtsVuMVynISpJbAKW3DpTnoVePpUr7nJdnIl3dlLJ0haUKG6/DCBv8jgedRY4gf96LjCEakn8MubhH+IjkVfpXdNySXC67IXKlHdalqwn68z6DFZppeGzthdCcMdsNw1mI0TqWsKAcUfNWcJHkCTWF8V2+3doiE0uZJVstSSdJPgVHdX0oRUqZd5SG1lSgOTLY2A9KMozUPheAiSphHvZSSVOJCin/ACp/c8q0jNmLgvsM7K4ZFrakXCIpmQvfS8NvRKBuo0SQbpDbU1DQ649MX3lIxkoHn0T6E1TNtuV/v1w95hocabRut15wgAevIfKiS2ifblqdbuBKxntH1jCQPIcyfMmtY5GzkyYUFntMtRuXBknTu9F/tCeQOBz2qrvZt7RLjwjIcjKWXraSFKYO+MkZUmrksQ/idkkOPxXsvJUkuPc3hvuB4V5leSqBNksLSULSopI8wqsOQt2dXDeupfPGntOjcSRmrHw+txXvjYLzg7pT3h3R57Gj+FwJav8AZNFnlxULCkqKlEZUhSuZB8uVVB7DeFHrpf18QSU/2OGNDWobLWc8s+H716Au9yatFplT5CsNsNlw+eBnFch3AfavZJw1ChhqVFEl4HHaqUQopByn9Klf/wBPeGPeVPfw1vtFHJOTVPQePvaBfJc5mxntcILyUaMlIKhtz8KIXLh7V3CgNR3EakpySgbHrQgaLbtlrhWeIIsFpLLIOrQPvWlystvuwR7/ABW39AITr6Zx/SoTgJXExszg4pJ99DpCSQBlPSuvGbfEDluYPDjhTI7Ua8bd3emImrfa4VraWiAwhhDitagkYycYz9q2nW2HdI4Zmxm32wdQQ4M7+NB3s+Z4ybfuX+1RKkHT7uSvPU56eGKnuMZcqDwvMlQnS2+gApUPWn4gAHj2yW+zyYirfDbYQ8CChpOAojx896gbU3K1RnXm9AS26lQPTKjj7YqMTf7pf4yV3SUXy253NsYB/wCVT7j3Zx0LR/MhJB89q8/K9no4Y0tgr7Uik8PMA8+2Gn6GqvjOrbirVncqSEjxHWrM9pqk/wAFio5kv7fQ0FN2pLcFpaiS4kg6R/iOB+hrpxOoHPlVyNERFMqjwwMdqe0Wei0nlT1lCI0+A2heUR0KX2g5EHYA+hP3rOvt7rIdBy02Est+YGwI+e9N23iqVLeCcuKV2eByx1Hz2qrI6mr0JZnRnJLhUhToRv0Gcn7k1Z/BrKxHekrPfWrHoeZ+tBUlhC48QKUcNIK0jrq5BJ8asmxMJiWeK0diUAk9fnWGWVqjXFH7Ia79qbvKIWUgr2+gpUbxOH/fYTMlTJUXU6s/Mj9qVCgX3RaNN5brTMZ1x44aSklZ8BjenB5U2msCTEeYUBpcQpJz5jFdpwFPcN3KPN4dvMOMhRaZnqUzqQRpbWorBPhzoN4itaJcNQQNawMlAO6sffNWDY+Fm1QVu22SqNPaUYs5kq0peKCQFEflVgZBoXvGqPLMO4h2NIz3HVNnSSP5iBgHwPI+VXejZy0cODZLTHDF+jhv8JtnK+zVrxtuSfHGKqJKn7bdY8hJ1ONKS8hY/NjcVbvAzcxN9u9rkNN6Z8VbjJTgBwpzzwTvURwr7PlRYrl94uHY2+CCpLCjpK1A9fI7Vo22kZF02a4M3azRJzBy282lR6743H1qRCNxkZ361V3sm4ybusi4Wp1KW8uKfjJTsAjYaf0q1tJz1zXRGVoCovbJY5pVDvUVKnm/+rutJHIn4T8+XzrSxMixSrZw82dD7Vvdmz0pznWvGE+oAq3pMRE2K6w78Kgd+ekjkR5jnVG2yzXuy+1t8XcOumQhemQc4cSdkn6DlXNlLxOpoJXY9u404eUjV3XPzDdbKhty6cqaWdtdh4E7N+QA60taWynfvZ2B+lAN1nzuE+LphjOqbCXEuKSANK0nHMVO2WZI4xi3ezSH0IlLPvLC07AKGx/WuY9H8yt16E1h4jiXmK5FugZS6ghKm3Bt5nfkPOoH2lcNxYdoh3e2RW2W4rgC+zGO6eR+uKAri5NtgfhzmHUvN5Qh1KSOu4OeYqd4O4scEH+A3PEm3SiWBndbRVyI8dzTRhLIpfGge4VZU9xpBDaCtBeCseWetGPGkr/aHjddtYGYVvUVvkclKA3P2x8qY2jh+4cPcXT4JaW57u2p/tkp20AHG/z+1deD2W/4NdZbyFiZIJ3UfiQRn675pmUbSoub2YPvTI3vUg5WqK0lR6EpFMPaPxaILclSVZTG/DYbxut8jY464HKpD2UaHbI642coRhoD0rFxgRV3mU9KQhSmXVYK/hGQN9+orHNPorojr2kVLwvB49uaxJVcX4sckd+Tvn0SasdKZ9ojdpNkKuJJCUlLQStCj1OOafvVfcbe0xXaOQLCsZTs7MA5+Ompb2bvXNLMqZc5TzzzrRUlK1Z0jbH3xXLKM2lJ6NOy8Li4RjsR7OQy6lxxThW8E5ASs76cHltQtKgJj8Y3Nk4DStEhIxuskD7A0a8PwUwrU0kY7V0Bx1XVSj1P6fKoDi1sQr5b7iQEtOJMd0kZ25/tW2WLliRjF1Irj2jcQmKwiwQCUyJOFPFsfCk7Y9T+1M7Rb27bb0NggY7y87ZI6eg/ah+OyZ3FNwvElxame1Upor2JTnn+wFFMdtdyQlCRs6QNPXHh8utc8kox6mydsnYV1N6VGhNtrLIURrUfjA+I+g5fMUXFlC2uyUkFGw38qjLDbEQ2e17MJK0hCQOQR4j1qaCd/IVxy90aowEYH051o24YN2akDZDxCHPI9K7gVpIjiRHW0did0nwI5VeN9XZM1aCxtYWgKHI1tUVYZZlWxBVs4jKFjwI51K9K9nG+0bON6Yjzqk+OGu14mvjf8+gD/wDiTV2HrVM8X/8A1jddvzt//wBSax5HhvxtyAoqS8hlZ+FY+6gabyEn8IqGFBBTnPw4POu+kx2HUEYLCyRnwB2+1NnFolR1uNglCVagBzV4iuWJ2yQL3/JnqSMjUVHHkoZH61bvB1uTdvZlb4SpDrDbiMLU1zI2yPQ1UnEAyhiWn4s975bfpVzezVQPAVt35JUf0r2OC9nifyH66K0444RicJCO5DkrekOLUcOAYbHSgOSp3BLxJUvHdUNwOeaub2l32Ew2040C8+kFDZJ7ic8yPOqdYizrrLX7uhTiie+pWwSPM9KvN+xPHbcdjTRpUQoZV/KOVT1nsbjzKZT5EeOo7LUNRV5JTzP6VHS4sSGQ2h73lwf3i0fCD4DxxRPw/aLhfWdTzpYhIH4j++VjwHoPCs4rZrN0h6xMQx/0fZYanJIGTowpZ81KGyRXaHbAp4i4rE2Z8SYiVfhN/wCJxXh5delPoltCmVw7OTDgJOH5St1unxz/AK+dS9ssLzzK4sEfw+1oOX573947/lz+9apbOeUlRFRYUj+I9izrlTVAaYzOzbaeQJHJKasOx8FsxVImXlaZUz4ks4/DaPiB1PnTWwTYDTj1r4ZiKV2acuzV/CVZ6qPM1PRBJZSoOS0Ovk5U4dkJ8hmtoxo5ckmydScEYGBXna/8GTr17XJNmgIUe3eDy1Y2bQTkqPl+teh0ZDadR1HrjrQrJ4oi8Je0GOmcy2mNd2Uo95x3kLBwAT/LWedaK4bakH3DthicOWOLa4aNLLCAnl8R6moX2oNFz2dXkg95DBX9BRIu6Q0TY8MyG+3kIK2kat1JGMkeW4qN42ZEjge+NEZ1QXf/ALTXH9Hp/ZRHsd4og2e9vuXZxuI25HVh076jqTtt6Grv/wBveGVISv8AirRSUhQ7pOx2HTyNVF7HeDOH+KeHZrl0il9+PK0A68bY2qz2vZfwky2hCbb3UABOVk9T/Wp2XonbVxFar2p1NulJfU1uvCSNNOrlcolqgOTJruhhvBUvGcfIUysvDFp4fW6q2xQyp3AWQfixUjMhsT4y40ltLjTgwpJ5GnuidWBx9rvBgf7JN0KljoGV8/pUbxB7TOFZ1ul2xuW4p55tSEjslAasHHMeNFCeBuGErLibNF1eOnfNdjwhw6lztf4PE7QbhXZ75pO2hqkefLc43HioaWoAhIO/Ug0RJXmHKVqOlCg4M+ASDUbxnEbjce3Nppns47a06UpGAMgU+i4IU0RspgDHj0P2rgyKmelidoG/aQFOwred9JVj5nlUA66W4+dgpsJB354/50fTYrFxRaxLRrAc1lOds6TgV1FhtmtxZjpUVL17n4fSrWZRjRDxW7A+12OQ+G22myUqX31Y7uPzb0+4p4faiKiLt0YpaWrDgb6qyMH9aNkaEDSkAIG4SnYDxrfV44PyzWf5mV+HQJr4ckFx19/cHQltCfy+f70ZMtOOqYhspy88QhIH3Ppjc+lcVOYGEhRWo4QlO6lHwxVg8KcNqgATpgSZi04CRyaSd8DzrXHFzdsyySUI0gghx2oUNmMMYbQEjalToA+dKuvocPZm9c1bkjw3xiulKrAq/wBpxmcLxm+LrMkCQ0sNy0KzpeQcAah4786h+F/bLYeIFiJf4rUJ9Z0jWnW0seBJ5VZvFdqTe+Gp9uUgK7ZlSUjnv0rx7cLKtodohCkhJwtKtyjH6jzpdqZpFWj0HPtdn/2+s7llhqQEhapD8cfhYWO7n6VC8XWXibjueiHHaEKxNEjtH1gKcOPiKRv6VWns74zY4XuDyZTC3Iryd0Nq3zyyPH0o9dv8VpxbtslxXYuNXuctAbeYPgNWNYroi7RLCCycA2jhG3yA3PSZ61Bxt5RAxgbAD1/WjWyXNu8W4SUBSFBXZupUkjSoetUZO9qc+E9otbMVtKe8440wMgeByK78I+0O7Wni8SL88t613QAqd0aUpwMBQx4YwfSn3S8Js9ApSeYGD+tDvFEZC3LS7g6kysBWc4BByKJkaVICkqCgRsRyNQnF2lq0sylHCWZCFKPgDkZqZOzTE6lZVXG/s8PED/8AEILgblFOFoUe6rGMGq5gG4cE8XxlScgNqRrUk7KbJx/r0oz4x43utivvuYbWhMd0raKxkPI/cUJzrvGvMFayUh1JK29XTPxIP6jptWB0ZZJO0HPEHF0SBe0scQWdmVblfiRJTac6kEAjPjU/aL5wHIUh2ILew4k5/EYSgj02oG4NiRePLEbJLlFiZByY7hGrU1z0keVDl44Xtllm9mm+B1SVEKKGCUigX5H+xaPEN7tnvE5yLfYYdmRBEQ1pJJ57kjqc4qp7dfZVljSmJOFlBU0Mb6TjTz+VRrNtfNxQ1bFIlqWsKQtCCPselTfF/BNy4ZDetRlIkNJefWhOEoWo8qZlKUnsvv2N/wD0k4D1dKj8668a2MXZM2Cp1TXbkOa0Kx5Y258q7+yq3u2/hQIfSUOqV+Ik/lPUVM8Ss6HI8nkCeyWfDO4NY518SYP5HlaRZkxOLE2xaUpDbg1gHIJ5irQ4YnNIljWkJjOoLLSs7k7YOPCgvjCA3C40mJaS4BIIWpxzOQCO9pPTqK1ReGX+yfddQmIyQlpsbF1Q6+SQK553KKotaez0Pw9dJomItszsV/hZStoEY0+OTTzi2AJ1hewD2jOHUkDJGOf2qrbPxgq6Qff0pVAWwC21McWlLIHXme96DNFHDV/E5ca4LvRnRHkmM8pY7NCVdFaemeW9XGb60yXHdlfsWiXeb46kMKaZKtZGO6P8WfrirCtNnYithwtYUU6Ej8zaenzPM+tP4kVmH7xDjvKfS08QdRyUZ30nx8qU2Y3EKGlLxIc/u0adz41w5LujaNVZ07VKVkEAJHPHIV07dsNa1HCeVQ6Xg4o4JKR4dTXZKdffdzgHAT/r9OtSoFNkwytLqApByk8q7BP/ACoZfuIbKU9sUFagkEAqKjnA0pSDkDwHzojjSGF6WUyUOuoGFhKhkHrn+lV0+ybMwnDAvGScMSzgjwcA2+vKibpQ8/HTKZU0okBXIjmPBQp5Z5qpDK2Xj/aGDocHj4H5ivQ48vjRzzWyUO1UpxavPGV4UfhC2/8A+pNXWo7VSHFPc4suqDyS6gnzyhJo5HhtxdSBaY63748jIUFt5x46hj96g7U+GkvMOKASklA9Ry/WnFyQvCSFYU26ptSvI501HEakgpx2oVpJ8T/oVzwWjqk9kTxA4pDSmVK3S4dh51bnCtxatPslhSFrKCcpACclROOVUtcMvTlIcGlGCQfEgV6A9nbKE8A2ntEggDWCeWdt69bhKjxuc7QISrC/fofvV3T7hbWfgQpIC1eQ8ztQfcpiG2VQIrBh29OynAnvOfXn86OeOfaExqdt1uUHQg6HHk7lSv5UfuaC4FrW46LhdPjBylrHdbHQnxPlW2Wm9GWK0tjKHa4TTHvklBai80BwalrHyoyamCVGjRlFUeIB+GwEYcd8sDkP1qJXOjpkNqcLa1pOUt5yG/NQHPyFNHUvzH1ypTy2WXk4CynvqH8oA5f68aSVMJNvQasyojLqGZZaU4kAtwWyClA6FZGxPlTtH8TvUtLPuri4+e+UHShI9TmoC0MNr0R4EdaV9HVnUrHifL70dxmWbenVKkFbihunUSM/5fHwzWkVZhJDmNHbhQ0sslKGEHdtrZHnlXU11XGLi23VJb7BCtQW9kJ+SetMV3rUsJjMqSsfnWMrHoMbfpTZ8ypKVrdeKEqGFKyMqH1x9Ksz6sOGHkyGg62DhXPIIP8Aw9Kq/wBucAucPwJyAAph/ST1wQaNeH57j6FsuPI7NsBLSezUCrHPvKHe6cuVRvtOh/xDgS4JA3bAdHyqMiuJeBdZlZ+yziK43H2lWVVwkrfKW1RklavhTjIH2r01co/vVqlx1DPaMqQR6ivHns5mphcdWp9zb8cJz8iP3r2aoZSR45rgPUPM3Az/ABvYoUv/AGdtZfZce0rWU93KdjvRzHuntVdfdSuAlKCDoVgADYY/epDgO/2uxOX+0XG4R4y2Lo92TbrgBKCc5FGH+2nDgWEC7xlKJAAS5nepY0DPCkj2gr4kaF+ZSLboVqIUn4unIZo/mJdXEdDB0ulJ0nwNQrfGvDz0tuKi5NF5xYbSkA7qzjFEANNUxO0VDIsXtSfceIurTeMhv8VIznr9K72zhb2hNhz368oWpeVJw98PlRRP9o/D0C5OwHpSxJbHeQG1bb454ri97T+HmSkFx1WrGkpTzz1qXJXRdSq6Bu58D3nsZk2U6w852QVqzlRIO/2oRhugqZUNxlSCOve3/erOe9o9nkxVtpakELJbxp5HFVYhWhasckuAp2xjfB+1cmbr9HZgcv8Ao3bEkS4zKWXHkiSvT2acqGEnpUqt1LOzmWleDidJpWJ/3fieI5194Sc/5gR+9XmUJPQc6MWJTQsuVwlRRBmRx/2yPrT+DFkz1BMSO88D1QnY/wC90q6OxbP5R9K2CQnZIwK1XGVmb5cqoFOHuFmoC0y5bYVKG6EncNeniaKkDBPQVsBWa6IxUfDllJyezHKlWcUqYjNKlSpgaLGRXmj2gWv+E364ISNLaVayB/IrlXphXOqV9rtuWviKKuOQHpERSMH85SRgfQmoka4nujz0+ksSDthJVkEcvlR/fLWm+2GPcmhiUhsKITzI8KEbjDAW402hSXEbrbI5K6+dGPAVxMm3KhLT3mSSlR5EE8q6cFS0XFJyaYEtrmWtwrZy24U5UhQyFJ8afW7je8W7QjWxIjJCkiO+0FN4PMDkR9aJ+JeGiUuTIyu4k94fyn+lAEiGUArT0PeSOnpSyQ6vRGSHVnoHgL2sN3aKxav4ZKXPGdRbSOxRk4G5OQOnWji92y43azyRKCS4lALURlWpOoHIJURufLb51569lHEVrsfED8e8pIiz2+x7Ub9mrIIOPUDccq9JW6atCUw3lhbgTqZeSdnm+hHmKhNsUQNuLHDnESfcr2wlEpAAUiQNK0E+BoIunsPS+4pdkuiUoV3g0+c4H+Yf0oo9o8XHEEeSpAIks4KVb7p60LMuvsJ0sPvNDwbcIrWOHsjelJbHfD3szuPCs2NcpstkLLoac7FRKQgjHPA3ouleyfhmUwllUeQ2lOSNLu/nk4oM94lrb0OTZS04xhTyiD8qfQP4rdp8eCu6zSlZy4sOFOlCRnOBtSeFpBVehvbeGuFuFmGwwyygo5LWQ4rPUbb74p286xdgVyLfmEkaVuPN4UR/hH+sVz4aet9wtrcmPFaS8klpaigasjqTz3ojKEspS64sAeJrOiZNUNuEQqNHmW9bheMd8lLxH94le4+dSt5g/wARtr0YHvKTlJ8COVQ0dpFjvan1LIhzyloJXyacH7H9cUUaM9TWc12VHPdM83+1SIXLa1cfhkOr7F3pgjYp8hkVWrDLVqS2/cWveXlJ1MRtWwHRSh+3WvUPHXDrb7IuLUP3pYWNcfGQsnZK8fzCgHg72ThTv8a4hlqdkOqUFRwnURvyJPX0rPHHqqLuyuIlm4m42fjh4KSxjDSEgpSE+QGw9TVyWXhI2qJFgzZkJllJ/BjBOQSDnVqJGV9dxjyo4t1ug22KIsGOhhtIx3eePPxpTLXFlthMuM08gK1JC0g7jkfI1qopjWiPkWJKmnXXHpDz+kFKteOXoPDNB1rhSVvyXY+p1kulxDjmStIxgpHlnNFy4N3gyVvRLm69Dxq90WlGR5BR5jyNPYrzEplLkbSEK7oIGnTvvt+1cnIVfRpEgfd3IsIvuoKW0YATzUflTORPeAypjskg4SHspBJ5asZyfIfajBIQsZTpIzpyRyPhWymUOaCtsOFv4CpOojzHhXHFjaKwusuc2JC+zcbQlPefAwVA9EgZI9RUPaLrJMlLFktcxxwnUpxtk6Sf8SiRqPntVwLTbYpLjwiNHO6lgDf1rQXqCkaIxW/tshhBKc+vIetbp3qiCH4dXxc/KAuzDEaIgEq7Q63nPDcYAqVnLk2y7xZ8dPaoWgtSWQoAlIBOtI64xigniv2sRLIy4zHS0ZQOEt5Kz55I2FDNlusy5uSOMuIZD7NubGhhHaYW8rHwIA5ZGckVtGPXZLLxtfEEK7SnWIri3FNoSrXpwk5zy8cY3qrOM29HGtzJAGotrHmOzSP2op4Ouwu6bXc2oZjsKDrCGUp2Sk4IPmNudQXtHa08VBzHxxE/XNVm+UC8DqZXE9tOt5vfvpz8wcg/aoCW8liRrOR26QokflPLFEVzOmUMDIICgrpz3oVvx0sEpGktLJKTz3/pWGHZ05XWxvcUIlONJZ5g93HXNXgpC7d7PITDTb7rqYyEpaZG61EY0q8AM5+VUPbQZl1isFRBdcShOOhyAK9G3CXEh25DEmQtkKCU6W/jcwOSRzx517PEhpnj8ufyRS8Cxy03JalsIW4xlS3s6WWR17x5q6eopwWJtzcKUupjsDONOVKVv0HU9KmL02udKV/FpJjwmCVNWxjB0J/mWBsM8996VthT79HCoyU2228tee8scvjPTHhWn43ZHfQwjNwLa8Y0ZCe2JIVq77vnk8k/epIWJ51KXHSGWdOwCtyPUjuj6nzqZh22zcONa2kh5wnGs/hoz5Hmo+lOpnvVzbS5OUllhKtSUuDskfTYmtFjM3IaWZpAWpDSwyEDAc2SE+Q3znz3qcTGjtoK1qUSTnU6rGT6c1H6UKGI6m4qXESn3ZCQEzHE5JPgnOyflTq3ty2ZLi46HJTitlOznCQj/KjOaqKoTSCRp1AKUstlXXdGPoM/qa3cQt1epRUtfRDeCR88Yz5YrCFOR2E+/dmDzOtXZg+YAwT867x3p0hSVQ1toZz3lpb0hQ8Mc6062Qd7ZBls3APusMtMJT3AtRU6D65wB6CnfEDXvfDlyY564zg/9pxXbtMHAGEn/RpvOcH8Pk5Ix2Ln/wBppyx/EUF8jzNFWIcq3PjZSXgokdO9iva8ZwPxWnAchaQofSvEjwS5FdVg6kOHH1NWRb/blxKxaQwzDgFMVlKApQVqKQMZ+1eO9NnqVoYe1i3GH7SJcko7rqgtGOZJO5qLgutlp11nKi24ChQ6q6Aem9MuJOL7nxjem5s9LIUEpGhsd0ip9hlGhCmgGyCFgpHPHj965szpHVgjY4ekCHxDAmNqGgvNPJJ8CRmvTrCw5HbWN8pBH0ry5eEBdq7RGxjud3b4UK5H0Ga6XH2gcTt21gMXZ5pCkJHdAyMbHpSxT0GbH/QQe0aKmPx1cHezKT3F8sZSUgE/UGhhyYlwMNKylbY0KI/MDsMem2aZ/wAdnXC8sOXGWuQqW0GQpY3TjYfff51wCne2IIIUfy4+FSeY9NjUzW7Lx6VBRFdW4xk7OLTlQH86T0+WK7LOp5RHwupzn1GMU0YcAUl5AwhzC0j7H/XlTkjLbWnGUkpH6p+1csvTqXhIQnf+k7a7yCnGwonoQsbfTNegwM15ybWSuMU7lEtvHnlQr0Y1kNp9BXZxvDg5X7HSlilSrqOYVKlSoAVKlSoAVKlSoA1V4+VVv7T4SXX7TJ7Na1NuKGEDcgpNWSqhriiCuU5CeAOlhwqUfAYI/eon4aYv2R5Z4gjyX7iqSHlLJyAUjCtI/f1p1wLPEKPcytOoNth3T6GrP4o4DEpt2TCa7RR7y2xsr1R4+hoU4T4YVb4f8alAp7eQqKptQ2UDyPrnangns1kn3tEZI4kj3R9LsRBbeCCChau66n8yD5+BqGfYakRnXmEHsFjS2g821fyn/W9PeNOEHbJI/iMBKjEWcqSObSt9vTahZFyfbJXqKkr/ALzPWumbbZM2xiQpiRpcSUkHdNX5wrGemcOxS3OkMKBB1NK2SQBjA6bc6oOU8XpKnMlWoYBUN6vz2Xv+98OgHmMK+2P2qYULF7sd8Swlphx3u1edUHiFKccJ2I+1QCW6P7/E7WxydI+EJWfLByaDkM90GuiEqN0N0teVOI4ejvB2O4W3dJQVDfKTzT6HxpwhkV3RHz89qJSsb2P7FfIEKdGiL7SOp9wtYUnuqP5SD9efjR00kmZNhSlp7JaErSFnZIIwR58iaq+S0gzWm320uslpSghRwNaSNJ8epqVuFwnXJ1tyWtrQ20UobY1J1eZOa52jGUXYU2K4tXa7txZICvcdSWDnKVqSQNfrgmjccqq3h5Ih3q3hOQ0mQWxjrlJz98VaQ5Cs2jGSo1IwOWagWUIaS+wFKPZvnKs9Tv8AtU+evhUER2d0nMJOVEJdA9c0IImEusKdLKHEl1ABUnqnPWmqnLi7cg2mWlkKT+EhbepDmOe/MK+VNpKAxOdltAfhJQ6pR5qSdlA+W1P57ZEdZSoBxo9o2pRx3hv9PKmy5M0Msx3gzNbEZ0kFKwctL8groahFTWXOJXBHcDbZHZyjsUuqA2x4EDmRU/eHETuFnH9IIKErxjrQo/aUwFrXa4T0qU4A6026cNNZG+/XJzXNmf0EGOrhc+zARHX2baOQPM5/MaHXeI57jqo4kFShnSyzzx5n9qeM8L3qbkTEoQ2oZWQ/pcWo+ZBwKdw+AiwtRZ7GM0UFOjdwg9VZyDmuZJFOyBXeG7XCceU6yVKOAGGtXZ43KUHmfM+NBcu9cT8QPH+BQZilPq0JWOak8irbkPOrsicG26OgdtrdSlOkBWEpT6bfvTwSrFZAlkPQ4u2EtoIz8sfpWqpEbZTUf2VwOG4auIuLZyy00nU4w0RqUo9M/tThu2O31mJd76yqFaGCBa7OhWlxYzzV5HfeunHHGViXe+2Eh+8y2lYYglOiOyrbvK/mNRlpXc7rdjcrhLK5a04UPyIT0SkcsCrlPrG2aYsLlKi8uGEMOwG5LenUU6NCRgNAfkA8qE/alG0PW6XsArU0T1z0/WtuGrsq13FKHFH3V8hKiT8K+h/Wpb2lRQ/wt7ykZXHdSsemcGhtThaBweKdMoea7kJOyktnUg+R2OaDbzMWie81jKANJzzVn8x86JLw/wBhNebUOR1hI5aTzFB12c7W4L+Q9fOpwRo0zzVBFwFFiu8Ww3JLrbbbOXVF1WkZG4q7p9wj9l2kS4QmXl90OqWDj0wa8zl4nB1EHGCc9Byok4IskjiW/txVOLTGaHaPLBPdSPD1r1uNlr4nm5cfbZcTFltrAcXJnMPS3FBZU4tOnPjpz3q6luMXT7xeWtIwAS4M/LwFSDlvgDsiYbSuyRpRkZISBsB41UHENubkvy5XakKIKtKXNKAPAH9sV3ZGoKzCMbZay4EJvDsaazFBBy/rC1q/3id6RsEFbOW3He0Uf+sFztFEeXhXnBUuWUhHbvaB8I7Q4A8qdtcQXlpAbauElKQMABw7Vzf5S/o1/CejWLJBac7RTTjznIrdJOR50/ToZSlKEoQnGEgbD5ZrzaxfeJHe41cJigf/ABDWkm53tSyiTcZRKNwC8c/Kr/yo/wBE/gPQjVqtjEhb4aS4+TnU85rIPlnlT8yW0/nQCBt3hXmx+dPUEq/iEl1zH5FqAHzzRDaOGb1Jim53Ge/CgoTqUtxwlSh4AZpx5F+ITwl5+8IUkkLQf94Y+W9Rt+uHutlnONqbU4GVYSVgEjHTeq54WW7xHcmGm0uNW2JvlSzrdJJxmhXjoPQeLJsUuOlkd5CC4SAD4VWXO1C6HDFUgf1PFa1blCzqI8Odd4jDiXXEtDIUnBHkrb7V1bUdA0JCkOJGvPl/zraGvspydiQEgZFeLKVs71EarZ7OStlSih5GQCORIo2tUn3q3MuJO4Gkj+v3oVv7JCmpSAAHEhKsHqKkeGJOFuRlnmAoY8axy/KNm2J1KguQEOoW2oZS6jsiPUZT8ulDsmC4ppDKe+WnNQ9B0+n6VNoKgVAHCsZT5KG4++1OsJ1qUEjchafTkR965IyaOpx7EemM0plOltAcjntmlDoKay1hNwaeBGiQcgeDg5g1IKAjSBn4Enl4tn/jmmNwjB9p6Mo5CxrbI2wocj9KuMrexSjSH1tcQ5HkxU82DrQoeG+fpvT5s646+nd1DHiOVQtnbeZkqkrRh11CCSPhUoZyPpj6VLtqS1LKQcoV30eYO9TOrHG6HsTCrhCT0VKaHy1DFejB1rzxbWgq6QWzzRMbx/6q9DjkfU11cbw5OV+xvSpDlSrpOUVKlSoAVKlSoAVKlSoAwa0cQlaSlQBB5g10pUAQr9v7FepvJbzkAdDQtxpBLlshFQIZRI7ywcaNu6frirBUkFJBGaheJWFu8OzI7TIcLiNGD0B2J+XOpjGpaNIzfhRqLnMbcehypHaNFWUrKB3PUHmnxHpTCVCiTHOxfhRRIHwYTpQseo5A9DzFGd94NVckpkW+R7tOQgDC/wC7WAOSvI1Xl9Td4rjFslWt0OqOAByBHVC+Wk+BrqkzSREXfhSHAmxJzRdVaJai0Cr4mHsYKVehxVz8AxGDZ2XIzYSltlMdaeupJOfrnPzquOFp7zl8Xw7xNAfUxcQGXgpvJC/yrB5Z86vWyWKPZYCYkYEpT8SlHJURtknxwBWa0TFU7MyIfvMGQzjZxspqvo7XaMoJ22q122skJPI1XqY+h6Qgj4H1pA8BmqcjSL2NUMZ6U5bj+VOkR/KnKGPKp7mjYMX9sMiKsq0ha+zz4ZGf2p/HBeLbhSMBGpQ8KjPaHEkLtVu91UQ7762nHlhWf0qbs0c9g2lau+sgEeKQc/pt8qhyM29j5lkxvcXVbLTJQo/7ygP3qyqBJrYS3HB6SWtuvxjajulZjk9MHlQfxFYrvNvHbwZQajLQkOAKKSSnO2fDfpRjWMCgzBizWa4RzIRdJLcxLjaUJWEYJGTsfTxoclcK3y8vFmYsNxUqCQtxZKtKeqQNhnx51ZWKWBQOyEFgYHD6rQh95too09olR1D0NQl+gzLDw3Ikwbg+tbCQo9qArujnRtULxWlKuF7mDyMZf6VE4poeN/JFUSuLeJnUZiz2m9uXZJ/pQhdOOOJGV6DxY02c7hLKTj6DNcOI5JVHUw0V60pBISogEY8vKq8kNOrV2hSjnjAVkny8658cN7O/M4pUkFEviyRJSszb1criv+TtShr6c6kODWHpE9UlEVKUgbqxsBUfaOGQG2pFxyylYyiPnC1fLoKsi2soZjNtNIDaAnIATillmlpDw4vtglKhOQuJZrrNvanZwtSO0PahJA3x1qWg8WQG19i3AcYwd0kYUPUf6FRnGEW6R72zdrWAVx2RrCefPfbqKf2a6WLjJhLU+Ohuckd4AhBUfFJqq7RC+stBfEkxbkwosOJVnGrHNPh96Pbe43xHwo7DmAlYBZeGcEEcj8xg1VEPgwxZvbx7rKTpOWwFDIHVJPUUe8NSVwLolLyklMsaCRsNY5fbFLFq4k8iLaUikOKba9ILoSQt2OpSUlvnp32NV49qJGrOsbb1c3tVgrtHGZeayGpPeGDgAqByaqyTJJSppaEKz8OobjBPWtYfF0c86krIcpyo71ffsvsotXCaZS06X5iu1KvBGNh881T/AAzBbu3EEaKvAU4vCQBso+dei0JXFhIZKEICAEoSjkBXrcLF2lZxZXSog+JrkIVvWG5IZkOghsFOok48OlVRKaQ44HbhIcfcyDoJzk+Q5Cj3iR99yYG2m2UhCcl5QyoemcD70AzbparepSGsyX/zKSdgf83X0rr5TXjM8cWMHLY7cH9aGexbGx73L16CurcG2RVaFKVLcHNto7D/ADK5YqKm3uVMVpW4Usg/AjYVq1Mee0xY6Q0lRwccz6mvOtXSNqaH8m9PlRjsIDbSduzbPP1P9K3tVuk3JYDjJShRHTSn+pqStVlc0JKmxnzGB/X5AVZnDtmTCb7Z8JW8dxhGyfTNdWLiuTtkuaOdj4PtttZQ+4jtXh3k604Sk+QoR42vq71dBYoS/wCxtHU8ociR+n/Ginjm/myWJwtq/tEj8Jog5IOOdVjw6Vy30x2gTJkqKnHD4VtkpP8AGiUn6G/BFvcVc+2bVpiRcA7Y7VfgPSoP2uwi1fIsoDZ9nCj/AIhVgWpMaBHbjR1oCG+6CDkqVzJP1qF9qFuM7huPIbTlxh4cvAjH6mq5GCsQoSuRT0WQ4hPZoO53H9K3ZDinThRC1Hn4kchTcMvN/ilC0pSrBUByNddZS8FB3IUrVnwrwWjrTJ0rFxhqiqwFLb7Zs/4hzT9Ka2zTHkxH0Ep30u/6+dYYUqPJQ4NihYcSOeQdiK7ym0InrQ1/dO99tXnzH3zWbaqjVLdhWHCAlSO8oKGT6n9jvTtCwUjbKU97HilWxHyO9RFrC5gQhvZKh3/QjFTCWHo7Qcc0Oad1AfRX7Vw5FujuhbRvJQFRdShns+6o+X/LBqPJ1s6FE6mzj/8A5/aphlJ7HSoatjq0jmOmfliopMNsSHWFu9ksfAsrHeT4fKiNjlVbO8JS3IiEOJ0dr3gkdFjpWJCy2w3JxvHXkp/wnn9K4+9w4yDH98aOrJSsr+BQpRrjGlJyXgtxae+hsZz0zihwl6SprwKbIhL1+twTyU8lQ88b5q/6oHg4zXeKra41bHnYsZeXl5Hc1JONulX6k90Eb53rs46qJxcl3I6UqVKug5xUqVKgBUqVKgBUqVKgBUqVKgBHlTWanVDeH+A06NalIIIPI7ULQXQItsgnGAa7LgsyG+zfZbdR0SpIOPTwoiMNkjBQPlWvuLY+HIq+xq8lkQm3xyWyYzRLfwEoBI+dPkNHwp17rjka2DRSehobQu5yQ3uCfGgFCCu43AkAf2pePSrGCcUISWgJj2EgZWeVQ2PG9jNDWwruhoV0SgeFd0N+VRZs2D/EjClwo5QB3XwTn0P74pzw/EU1H1LSQQMDPidyfvipzsUqGFJBHgRmu6W8dBjHKmiPs4txW3JUdbiQpTS9SM9D40TDkKhW0fiJOBzqZHIUzKfptSpUqZAqVKsHlQBg8qGOO5gicJzM83QGhjrq2qYut4h2aAuZPeDLKdio7knwAG5PkKq7i/idniFTHuSl+5MAr1rQU6lkbbHw86yySpUa4cblK0VlKiz7086pQLUb4Uj4cDxPjTaLGtdmURFQmRMHxPu/Cj/KP3pneLnc5xX+KGY6TgJ5k/8ACohADL6DI1A5+Jex9AKzjHR2Tkr0GEbtHpSXluFx5ZHfJyT6Z/5UT2eV2kxUftFPOJGXSPhT5Z6k0E29yY5hCEpOrISEpP1UedH3D8NiBF90QsLkEdo8R1Uaxmtm2OfbRE8VXL+DXuxzFD8MlxDg6EHGxrS+cDNyF/xaxFLT+O0LQ+F0eI8M0y9q2kW63gkBZcVjJ9KbcEccrgaLXdwfdkAJbfGMtjpnyreK+OjCc13aYT8PcRvtKbt93ZWy/pBCVjceY8RRuGkyWQW1HvDKVJ5gjcYpq9AgXZpC32mpKSAULGCQOhSehp1CtrcQpDLjgQBulRzq+fPNZ+OzR7VEF7UIxv3BsO56AHmippYHRQBP7V56kvl0qVjC8nI8tv3zXqd6EubbL7b3GVdkWxJbc6agMkCvMN8h+53OUzpwArUn0rojtnDNUFPsoge8cSrkqTlEZokHzNXJLcwjkT0qvvZVAMSJMeUrdzRjyyAqiziBckwy3DUUvKOkEDYHz8q+i4cKgcOR7K99oN3Rp9waWnURqXg1Wp1KUAkk56UXTOHLrKkynXmw221nW6vYr9PEUNrbUBpQkJTnn/x61w81Sc9mkKGyGlrUUjmKIuGGEtOrkvOtoa+HChkk+QqNhalOBpDJUSeenOfl1ontrC9aCy3l07fhDUr/ANXJPypcXB2kE5UgzsoQ46FllQUPhUvn6+VF8f4B18KFrNEfjpCnlJSVfkA3+Z61LXq4i0cPyphIBabOkeZ2H717k/8AXjOdbZVvtBuhu99kdmr+zxB2aQORV1qM4ZkrjPnSgFbvcCifhT1NRbsklkIV/eOLK1k9c1LWqGqS8mIgbud51Y/KivGg3kzWjoekH/DyTImmUFExmzoZz+dXVVGc+E3crJJiKxh1spz4HGx+tCEVWl5ttgaWkHSnwCR/o0ZQXe1i5z5V7M8d46MU6Z5zliXBfeiuOKHZLKSk+Irkw8y0kh2MHfBWSCKNfaZZ1Q7z7+0nDUs9/bbWP+dBvYtpbPaA8u6pHL6V81nx9JtHVB2iUZvkBpTK0wl9o0cbrzqHXpTuRxDbJDTjaoTgBVqSQr4PtUAqEDoSgKS4QO6v83pXFcZaXFIOziTjSa5ekWaqckgrhcVW6EnLcV0uHmoq5/at3ONnHchhhtrzcOc/TFByGluO6BgKzjHjT1m2vlOpCiFZ5fzeQ86l4oelxzToeS+JblKCguYtI6JQMCotUmStzK1rUojqo05XF0kpkMrQT+bJrmEKYc0OoK04xtzx4iqSj9ClKb9EiM8tCnVNko6q8KnOH4zjz5QwChYGQ4nKVCmcGQUODs1ZA6J5gedFVikNB0gI06yAccuf2rLLJ1Rrihey4/ZPHXrujxyUZbbyo94kJOc1Z4qsfZa+Q7MYVg6gFDHTGx/WrOxV4HcTDOvmZrNYFZrYyFSpUqAFSpUqAFSpUqAFSpUqAFSpUqAFSpUqAFWDWaR5UAY6UPu22Qt9xYRsVEjeiDpWopMadMgU2x/+QfWuybc71A+tTBNYyc0UV3ZGpt7nl9a6CC4P5frUhWaKF2YxTEWDnb60+AwBWDWw5UyW7FSpUqAFWFfDWaweVAARx/PthtZt0oKckqwtptAGpCuivLrVU3SSliCtLoR30FKu9jnzxRjx9txhkc/dm9/mqqt4rP8A02yOma4csn3o9TiwXSyIWENtBDXoFYyr5Co95AUtDGvD+Rud1Y8/Cn+f+kHP81Qkwn+Nu79a1h4Yz9C1M1FtZz2obTtlwHUr0SOpqa4cvQlXFhptDkeIMr37y3FeKjVeTABcIwA/l/WrD9n/AHptwJ3IG2fSiUV1srHJpnXjixy+Jblb4UJI0soUt1w7BGcc/PahWXwZIhvdi8sokt4JWk91wfsauODu84epWgE+O1DnGhxNigctA/WiD1QskU9gvZOJ5/Bb6WJWuVa3OfUoHl4elXBa7jCu0REqE8l1pWCDnceoql75/wDKR50UexU/9BXEeDwx9KqSVE45NstuJkFaMbLbUjy3rzL7QonYXFLoGCSttWPI7V6bjf3zfqa87+0jm5//ALSv1qYP5oWRaYXezpoo4WYcV8TpUT8iQPtT6/3WJbUKXIcGrABT1IrXgkf/AAtB/wDLP60D8d967Ss790c/Wvq4S/HjTR5jVyIW/wDGr1wWWI6EtsA435mhculxepxfypur4/nWfzV4ubPKctmqVEzElR2MqU2p0g8jy+dFVn4mYYJ7SIpKcJCOzPLxzyoIT8Q+VP7iT7s3vXZx8rg1RMlZbNnurE8JUk6VknudceNRHtOmdlZI0NKsJcc1LHiBjFMOAv8A50r/AMmuftV/vYn+SvQ5WRywmcV8iuNZWvUTk0dcNxVNRu0UTqcA1fSgVjkr5frVlW4f2FHof1FebwNz2aTJmMg6ElOQpzupHQDrRVblhptKBjlpA8aHIv8A1yGP/CX+pqdgf9Yj+v7V9FKPwMfsa8XWZN5tD8cjvY1tnwUKotxLkdwsuYSsbE45V6Lm/k+dUNxIB/Grj/nH614P8lBJWjfEM2kgpDjiirbOAeXn5V3TGaeBbUomQAClRPMVqAPcxt+T9xWUf9aY9K8Rs6+qORhKC3CWj3cK322p/Bdc16FglBGN+o8/605nf3cr/wAoV1jgdk5t+RFTJuiopWPIsYPKLTiQsjdBUNx5eddZFhQW1BCToP5TyFOIn/zRr/LU4f7l70rjeSSZ2RxxaAd7hKcylD8VwKOd0g4xUtZ4ErUHJDS2HUn/AHVUQN7MtnrXRvdKs705ZW1QRxKL0HXsveSLzKaOAVtbfI1bPSqZ9mx/+Kk/+Sr9RVzdK6uP+pwcj/0MjlSpDlSroMBUqVKgBUqVKgD/2Q=="

/***/ }),
/* 87 */
/*!****************************************************************************!*\
  !*** C:/Users/万青尧/Documents/HBuilderProjects/robot/static/image/like1.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map