'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isEqual = _interopDefault(require('lodash.isequal'));
var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var reactDnd = require('react-dnd');
var reactDndHtml5Backend = require('react-dnd-html5-backend');
var reactVirtualized = require('react-virtualized');
var reactDom = require('react-dom');

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_throttle = throttle;

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root$1 = typeof window === 'undefined' ? commonjsGlobal : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root$1['request' + suffix]
  , caf = root$1['cancel' + suffix] || root$1['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root$1[vendors[i] + 'Request' + suffix];
  caf = root$1[vendors[i] + 'Cancel' + suffix]
      || root$1[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root$1, fn)
};
var cancel = function() {
  caf.apply(root$1, arguments);
};
var polyfill$1 = function(object) {
  if (!object) {
    object = root$1;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel;
raf_1.polyfill = polyfill$1;

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function noop() {}
function intBetween(min, max, val) {
  return Math.floor(Math.min(max, Math.max(min, val)));
}
function getCoords(evt) {
  if (evt.type === 'touchmove') {
    return {
      x: evt.changedTouches[0].clientX,
      y: evt.changedTouches[0].clientY
    };
  }

  return {
    x: evt.clientX,
    y: evt.clientY
  };
}

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
var DEFAULT_BUFFER = 150;
function createHorizontalStrength(_buffer) {
  return function defaultHorizontalStrength(_ref, point) {
    var x = _ref.x,
        w = _ref.w,
        y = _ref.y,
        h = _ref.h;
    var buffer = Math.min(w / 2, _buffer);
    var inRange = point.x >= x && point.x <= x + w;
    var inBox = inRange && point.y >= y && point.y <= y + h;

    if (inBox) {
      if (point.x < x + buffer) {
        return (point.x - x - buffer) / buffer;
      }

      if (point.x > x + w - buffer) {
        return -(x + w - point.x - buffer) / buffer;
      }
    }

    return 0;
  };
}
function createVerticalStrength(_buffer) {
  return function defaultVerticalStrength(_ref2, point) {
    var y = _ref2.y,
        h = _ref2.h,
        x = _ref2.x,
        w = _ref2.w;
    var buffer = Math.min(h / 2, _buffer);
    var inRange = point.y >= y && point.y <= y + h;
    var inBox = inRange && point.x >= x && point.x <= x + w;

    if (inBox) {
      if (point.y < y + buffer) {
        return (point.y - y - buffer) / buffer;
      }

      if (point.y > y + h - buffer) {
        return -(y + h - point.y - buffer) / buffer;
      }
    }

    return 0;
  };
}
var defaultHorizontalStrength = createHorizontalStrength(DEFAULT_BUFFER);
var defaultVerticalStrength = createVerticalStrength(DEFAULT_BUFFER);
function createScrollingComponent(WrappedComponent) {
  var ScrollingComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ScrollingComponent, _Component);

    var _super = _createSuper(ScrollingComponent);

    function ScrollingComponent(props, ctx) {
      var _this;

      _classCallCheck(this, ScrollingComponent);

      _this = _super.call(this, props, ctx);
      // Update scaleX and scaleY every 100ms or so
      // and start scrolling if necessary
      _this.updateScrolling = lodash_throttle(function (evt) {
        var _this$container$getBo = _this.container.getBoundingClientRect(),
            x = _this$container$getBo.left,
            y = _this$container$getBo.top,
            w = _this$container$getBo.width,
            h = _this$container$getBo.height;

        var box = {
          x: x,
          y: y,
          w: w,
          h: h
        };
        var coords = getCoords(evt); // calculate strength

        var _this$props = _this.props,
            horizontalStrength = _this$props.horizontalStrength,
            verticalStrength = _this$props.verticalStrength;
        _this.scaleX = horizontalStrength(box, coords);
        _this.scaleY = verticalStrength(box, coords); // start scrolling if we need to

        if (!_this.frame && (_this.scaleX || _this.scaleY)) {
          _this.startScrolling();
        }
      }, 100, {
        trailing: false
      });

      _this.handleEvent = function (evt) {
        if (_this.dragging && !_this.attached) {
          _this.attach();

          _this.updateScrolling(evt);
        }
      };

      _this.wrappedInstance = React__default.createRef();
      _this.scaleX = 0;
      _this.scaleY = 0;
      _this.frame = null;
      _this.attached = false;
      _this.dragging = false;
      return _this;
    }

    _createClass(ScrollingComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // eslint-disable-next-line react/no-find-dom-node
        this.container = reactDom.findDOMNode(this.wrappedInstance.current);

        if (this.container && typeof this.container.addEventListener === 'function') {
          this.container.addEventListener('dragover', this.handleEvent);
        } // touchmove events don't seem to work across siblings, so we unfortunately
        // have to attach the listeners to the body


        window.document.body.addEventListener('touchmove', this.handleEvent);
        var dragDropManager = this.props.dragDropManager;
        this.clearMonitorSubscription = dragDropManager.getMonitor().subscribeToStateChange(function () {
          return _this2.handleMonitorChange();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.container && typeof this.container.removeEventListener === 'function') {
          this.container.removeEventListener('dragover', this.handleEvent);
        }

        window.document.body.removeEventListener('touchmove', this.handleEvent);
        this.clearMonitorSubscription();
        this.stopScrolling();
      }
    }, {
      key: "handleMonitorChange",
      value: function handleMonitorChange() {
        var dragDropManager = this.props.dragDropManager;
        var isDragging = dragDropManager.getMonitor().isDragging();

        if (!this.dragging && isDragging) {
          this.dragging = true;
        } else if (this.dragging && !isDragging) {
          this.dragging = false;
          this.stopScrolling();
        }
      }
    }, {
      key: "attach",
      value: function attach() {
        this.attached = true;
        window.document.body.addEventListener('dragover', this.updateScrolling);
        window.document.body.addEventListener('touchmove', this.updateScrolling);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.attached = false;
        window.document.body.removeEventListener('dragover', this.updateScrolling);
        window.document.body.removeEventListener('touchmove', this.updateScrolling);
      }
    }, {
      key: "startScrolling",
      value: function startScrolling() {
        var _this3 = this;

        var i = 0;

        var tick = function tick() {
          var scaleX = _this3.scaleX,
              scaleY = _this3.scaleY,
              container = _this3.container;
          var _this3$props = _this3.props,
              strengthMultiplier = _this3$props.strengthMultiplier,
              onScrollChange = _this3$props.onScrollChange; // stop scrolling if there's nothing to do

          if (strengthMultiplier === 0 || scaleX + scaleY === 0) {
            _this3.stopScrolling();

            return;
          } // there's a bug in safari where it seems like we can't get
          // mousemove events from a container that also emits a scroll
          // event that same frame. So we double the strengthMultiplier and only adjust
          // the scroll position at 30fps


          i += 1;

          if (i % 2) {
            var scrollLeft = container.scrollLeft,
                scrollTop = container.scrollTop,
                scrollWidth = container.scrollWidth,
                scrollHeight = container.scrollHeight,
                clientWidth = container.clientWidth,
                clientHeight = container.clientHeight;
            var newLeft = scaleX ? container.scrollLeft = intBetween(0, scrollWidth - clientWidth, scrollLeft + scaleX * strengthMultiplier) : scrollLeft;
            var newTop = scaleY ? container.scrollTop = intBetween(0, scrollHeight - clientHeight, scrollTop + scaleY * strengthMultiplier) : scrollTop;
            onScrollChange(newLeft, newTop);
          }

          _this3.frame = raf_1(tick);
        };

        tick();
      }
    }, {
      key: "stopScrolling",
      value: function stopScrolling() {
        this.detach();
        this.scaleX = 0;
        this.scaleY = 0;

        if (this.frame) {
          raf_1.cancel(this.frame);
          this.frame = null;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            strengthMultiplier = _this$props2.strengthMultiplier,
            verticalStrength = _this$props2.verticalStrength,
            horizontalStrength = _this$props2.horizontalStrength,
            onScrollChange = _this$props2.onScrollChange,
            props = _objectWithoutProperties(_this$props2, ["strengthMultiplier", "verticalStrength", "horizontalStrength", "onScrollChange"]);

        return React__default.createElement(WrappedComponent, _extends({
          ref: this.wrappedInstance
        }, props));
      }
    }]);

    return ScrollingComponent;
  }(React.Component);

  ScrollingComponent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    dragDropManager: PropTypes.object.isRequired,
    onScrollChange: PropTypes.func,
    verticalStrength: PropTypes.func,
    horizontalStrength: PropTypes.func,
    strengthMultiplier: PropTypes.number
  };
  ScrollingComponent.defaultProps = {
    onScrollChange: noop,
    verticalStrength: defaultVerticalStrength,
    horizontalStrength: defaultHorizontalStrength,
    strengthMultiplier: 30
  };
  return hoistNonReactStatics_cjs(ScrollingComponent, WrappedComponent);
}
function createScrollingComponentWithConsumer(WrappedComponent) {
  var ScrollingComponent = createScrollingComponent(WrappedComponent);
  return function (props) {
    return React__default.createElement(reactDnd.DndContext, null, function (_ref3) {
      var dragDropManager = _ref3.dragDropManager;
      return dragDropManager === undefined ? null : React__default.createElement(ScrollingComponent, _extends({}, props, {
        dragDropManager: dragDropManager
      }));
    });
  };
}

/**
 * Performs a depth-first traversal over all of the node descendants,
 * incrementing currentIndex by 1 for each
 */
function getNodeDataAtTreeIndexOrNextIndex(_ref) {
  var targetIndex = _ref.targetIndex,
      node = _ref.node,
      currentIndex = _ref.currentIndex,
      getNodeKey = _ref.getNodeKey,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? [] : _ref$path,
      _ref$lowerSiblingCoun = _ref.lowerSiblingCounts,
      lowerSiblingCounts = _ref$lowerSiblingCoun === void 0 ? [] : _ref$lowerSiblingCoun,
      _ref$ignoreCollapsed = _ref.ignoreCollapsed,
      ignoreCollapsed = _ref$ignoreCollapsed === void 0 ? true : _ref$ignoreCollapsed,
      _ref$isPseudoRoot = _ref.isPseudoRoot,
      isPseudoRoot = _ref$isPseudoRoot === void 0 ? false : _ref$isPseudoRoot;
  // The pseudo-root is not considered in the path
  var selfPath = !isPseudoRoot ? [].concat(_toConsumableArray(path), [getNodeKey({
    node: node,
    treeIndex: currentIndex
  })]) : []; // Return target node when found

  if (currentIndex === targetIndex) {
    return {
      node: node,
      lowerSiblingCounts: lowerSiblingCounts,
      path: selfPath
    };
  } // Add one and continue for nodes with no children or hidden children


  if (!node.children || ignoreCollapsed && node.expanded !== true) {
    return {
      nextIndex: currentIndex + 1
    };
  } // Iterate over each child and their descendants and return the
  // target node if childIndex reaches the targetIndex


  var childIndex = currentIndex + 1;
  var childCount = node.children.length;

  for (var i = 0; i < childCount; i += 1) {
    var result = getNodeDataAtTreeIndexOrNextIndex({
      ignoreCollapsed: ignoreCollapsed,
      getNodeKey: getNodeKey,
      targetIndex: targetIndex,
      node: node.children[i],
      currentIndex: childIndex,
      lowerSiblingCounts: [].concat(_toConsumableArray(lowerSiblingCounts), [childCount - i - 1]),
      path: selfPath
    });

    if (result.node) {
      return result;
    }

    childIndex = result.nextIndex;
  } // If the target node is not found, return the farthest traversed index


  return {
    nextIndex: childIndex
  };
}

function getDescendantCount(_ref2) {
  var node = _ref2.node,
      _ref2$ignoreCollapsed = _ref2.ignoreCollapsed,
      ignoreCollapsed = _ref2$ignoreCollapsed === void 0 ? true : _ref2$ignoreCollapsed;
  return getNodeDataAtTreeIndexOrNextIndex({
    getNodeKey: function getNodeKey() {},
    ignoreCollapsed: ignoreCollapsed,
    node: node,
    currentIndex: 0,
    targetIndex: -1
  }).nextIndex - 1;
}
/**
 * Walk all descendants of the given node, depth-first
 *
 * @param {Object} args - Function parameters
 * @param {function} args.callback - Function to call on each node
 * @param {function} args.getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean} args.ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} args.isPseudoRoot - If true, this node has no real data, and only serves
 *                                        as the parent of all the nodes in the tree
 * @param {Object} args.node - A tree node
 * @param {Object=} args.parentNode - The parent node of `node`
 * @param {number} args.currentIndex - The treeIndex of `node`
 * @param {number[]|string[]} args.path - Array of keys leading up to node to be changed
 * @param {number[]} args.lowerSiblingCounts - An array containing the count of siblings beneath the
 *                                             previous nodes in this path
 *
 * @return {number|false} nextIndex - Index of the next sibling of `node`,
 *                                    or false if the walk should be terminated
 */

function walkDescendants(_ref3) {
  var callback = _ref3.callback,
      getNodeKey = _ref3.getNodeKey,
      ignoreCollapsed = _ref3.ignoreCollapsed,
      _ref3$isPseudoRoot = _ref3.isPseudoRoot,
      isPseudoRoot = _ref3$isPseudoRoot === void 0 ? false : _ref3$isPseudoRoot,
      node = _ref3.node,
      _ref3$parentNode = _ref3.parentNode,
      parentNode = _ref3$parentNode === void 0 ? null : _ref3$parentNode,
      currentIndex = _ref3.currentIndex,
      _ref3$path = _ref3.path,
      path = _ref3$path === void 0 ? [] : _ref3$path,
      _ref3$lowerSiblingCou = _ref3.lowerSiblingCounts,
      lowerSiblingCounts = _ref3$lowerSiblingCou === void 0 ? [] : _ref3$lowerSiblingCou;
  // The pseudo-root is not considered in the path
  var selfPath = isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
    node: node,
    treeIndex: currentIndex
  })]);
  var selfInfo = isPseudoRoot ? null : {
    node: node,
    parentNode: parentNode,
    path: selfPath,
    lowerSiblingCounts: lowerSiblingCounts,
    treeIndex: currentIndex
  };

  if (!isPseudoRoot) {
    var callbackResult = callback(selfInfo); // Cut walk short if the callback returned false

    if (callbackResult === false) {
      return false;
    }
  } // Return self on nodes with no children or hidden children


  if (!node.children || node.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
    return currentIndex;
  } // Get all descendants


  var childIndex = currentIndex;
  var childCount = node.children.length;

  if (typeof node.children !== 'function') {
    for (var i = 0; i < childCount; i += 1) {
      childIndex = walkDescendants({
        callback: callback,
        getNodeKey: getNodeKey,
        ignoreCollapsed: ignoreCollapsed,
        node: node.children[i],
        parentNode: isPseudoRoot ? null : node,
        currentIndex: childIndex + 1,
        lowerSiblingCounts: [].concat(_toConsumableArray(lowerSiblingCounts), [childCount - i - 1]),
        path: selfPath
      }); // Cut walk short if the callback returned false

      if (childIndex === false) {
        return false;
      }
    }
  }

  return childIndex;
}
/**
 * Perform a change on the given node and all its descendants, traversing the tree depth-first
 *
 * @param {Object} args - Function parameters
 * @param {function} args.callback - Function to call on each node
 * @param {function} args.getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean} args.ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} args.isPseudoRoot - If true, this node has no real data, and only serves
 *                                        as the parent of all the nodes in the tree
 * @param {Object} args.node - A tree node
 * @param {Object=} args.parentNode - The parent node of `node`
 * @param {number} args.currentIndex - The treeIndex of `node`
 * @param {number[]|string[]} args.path - Array of keys leading up to node to be changed
 * @param {number[]} args.lowerSiblingCounts - An array containing the count of siblings beneath the
 *                                             previous nodes in this path
 *
 * @return {number|false} nextIndex - Index of the next sibling of `node`,
 *                                    or false if the walk should be terminated
 */


function mapDescendants(_ref4) {
  var callback = _ref4.callback,
      getNodeKey = _ref4.getNodeKey,
      ignoreCollapsed = _ref4.ignoreCollapsed,
      _ref4$isPseudoRoot = _ref4.isPseudoRoot,
      isPseudoRoot = _ref4$isPseudoRoot === void 0 ? false : _ref4$isPseudoRoot,
      node = _ref4.node,
      _ref4$parentNode = _ref4.parentNode,
      parentNode = _ref4$parentNode === void 0 ? null : _ref4$parentNode,
      currentIndex = _ref4.currentIndex,
      _ref4$path = _ref4.path,
      path = _ref4$path === void 0 ? [] : _ref4$path,
      _ref4$lowerSiblingCou = _ref4.lowerSiblingCounts,
      lowerSiblingCounts = _ref4$lowerSiblingCou === void 0 ? [] : _ref4$lowerSiblingCou;

  var nextNode = _objectSpread2({}, node); // The pseudo-root is not considered in the path


  var selfPath = isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
    node: nextNode,
    treeIndex: currentIndex
  })]);
  var selfInfo = {
    node: nextNode,
    parentNode: parentNode,
    path: selfPath,
    lowerSiblingCounts: lowerSiblingCounts,
    treeIndex: currentIndex
  }; // Return self on nodes with no children or hidden children

  if (!nextNode.children || nextNode.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
    return {
      treeIndex: currentIndex,
      node: callback(selfInfo)
    };
  } // Get all descendants


  var childIndex = currentIndex;
  var childCount = nextNode.children.length;

  if (typeof nextNode.children !== 'function') {
    nextNode.children = nextNode.children.map(function (child, i) {
      var mapResult = mapDescendants({
        callback: callback,
        getNodeKey: getNodeKey,
        ignoreCollapsed: ignoreCollapsed,
        node: child,
        parentNode: isPseudoRoot ? null : nextNode,
        currentIndex: childIndex + 1,
        lowerSiblingCounts: [].concat(_toConsumableArray(lowerSiblingCounts), [childCount - i - 1]),
        path: selfPath
      });
      childIndex = mapResult.treeIndex;
      return mapResult.node;
    });
  }

  return {
    node: callback(selfInfo),
    treeIndex: childIndex
  };
}
/**
 * Count all the visible (expanded) descendants in the tree data.
 *
 * @param {!Object[]} treeData - Tree data
 *
 * @return {number} count
 */


function getVisibleNodeCount(_ref5) {
  var treeData = _ref5.treeData;

  var traverse = function traverse(node) {
    if (!node.children || node.expanded !== true || typeof node.children === 'function') {
      return 1;
    }

    return 1 + node.children.reduce(function (total, currentNode) {
      return total + traverse(currentNode);
    }, 0);
  };

  return treeData.reduce(function (total, currentNode) {
    return total + traverse(currentNode);
  }, 0);
}
/**
 * Get the <targetIndex>th visible node in the tree data.
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!number} targetIndex - The index of the node to search for
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 *
 * @return {{
 *      node: Object,
 *      path: []string|[]number,
 *      lowerSiblingCounts: []number
 *  }|null} node - The node at targetIndex, or null if not found
 */

function getVisibleNodeInfoAtIndex(_ref6) {
  var treeData = _ref6.treeData,
      targetIndex = _ref6.index,
      getNodeKey = _ref6.getNodeKey;

  if (!treeData || treeData.length < 1) {
    return null;
  } // Call the tree traversal with a pseudo-root node


  var result = getNodeDataAtTreeIndexOrNextIndex({
    targetIndex: targetIndex,
    getNodeKey: getNodeKey,
    node: {
      children: treeData,
      expanded: true
    },
    currentIndex: -1,
    path: [],
    lowerSiblingCounts: [],
    isPseudoRoot: true
  });

  if (result.node) {
    return result;
  }

  return null;
}
/**
 * Walk descendants depth-first and call a callback on each
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {function} callback - Function to call on each node
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return void
 */

function walk(_ref7) {
  var treeData = _ref7.treeData,
      getNodeKey = _ref7.getNodeKey,
      callback = _ref7.callback,
      _ref7$ignoreCollapsed = _ref7.ignoreCollapsed,
      ignoreCollapsed = _ref7$ignoreCollapsed === void 0 ? true : _ref7$ignoreCollapsed;

  if (!treeData || treeData.length < 1) {
    return;
  }

  walkDescendants({
    callback: callback,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    isPseudoRoot: true,
    node: {
      children: treeData
    },
    currentIndex: -1,
    path: [],
    lowerSiblingCounts: []
  });
}
/**
 * Perform a depth-first transversal of the descendants and
 *  make a change to every node in the tree
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {function} callback - Function to call on each node
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */

function map(_ref8) {
  var treeData = _ref8.treeData,
      getNodeKey = _ref8.getNodeKey,
      callback = _ref8.callback,
      _ref8$ignoreCollapsed = _ref8.ignoreCollapsed,
      ignoreCollapsed = _ref8$ignoreCollapsed === void 0 ? true : _ref8$ignoreCollapsed;

  if (!treeData || treeData.length < 1) {
    return [];
  }

  return mapDescendants({
    callback: callback,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    isPseudoRoot: true,
    node: {
      children: treeData
    },
    currentIndex: -1,
    path: [],
    lowerSiblingCounts: []
  }).node.children;
}
/**
 * Expand or close every node in the tree
 *
 * @param {!Object[]} treeData - Tree data
 * @param {?boolean} expanded - Whether the node is expanded or not
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */

function toggleExpandedForAll(_ref9) {
  var treeData = _ref9.treeData,
      _ref9$expanded = _ref9.expanded,
      expanded = _ref9$expanded === void 0 ? true : _ref9$expanded;
  return map({
    treeData: treeData,
    callback: function callback(_ref10) {
      var node = _ref10.node;
      return _objectSpread2(_objectSpread2({}, node), {}, {
        expanded: expanded
      });
    },
    getNodeKey: function getNodeKey(_ref11) {
      var treeIndex = _ref11.treeIndex;
      return treeIndex;
    },
    ignoreCollapsed: false
  });
}
/**
 * Replaces node at path with object, or callback-defined object
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be changed
 * @param {function|any} newNode - Node to replace the node at the path with, or a function producing the new node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */

function changeNodeAtPath(_ref12) {
  var treeData = _ref12.treeData,
      path = _ref12.path,
      newNode = _ref12.newNode,
      getNodeKey = _ref12.getNodeKey,
      _ref12$ignoreCollapse = _ref12.ignoreCollapsed,
      ignoreCollapsed = _ref12$ignoreCollapse === void 0 ? true : _ref12$ignoreCollapse;
  var RESULT_MISS = 'RESULT_MISS';

  var traverse = function traverse(_ref13) {
    var _ref13$isPseudoRoot = _ref13.isPseudoRoot,
        isPseudoRoot = _ref13$isPseudoRoot === void 0 ? false : _ref13$isPseudoRoot,
        node = _ref13.node,
        currentTreeIndex = _ref13.currentTreeIndex,
        pathIndex = _ref13.pathIndex;

    if (!isPseudoRoot && getNodeKey({
      node: node,
      treeIndex: currentTreeIndex
    }) !== path[pathIndex]) {
      return RESULT_MISS;
    }

    if (pathIndex >= path.length - 1) {
      // If this is the final location in the path, return its changed form
      return typeof newNode === 'function' ? newNode({
        node: node,
        treeIndex: currentTreeIndex
      }) : newNode;
    }

    if (!node.children) {
      // If this node is part of the path, but has no children, return the unchanged node
      throw new Error('Path referenced children of node with no children.');
    }

    var nextTreeIndex = currentTreeIndex + 1;

    for (var i = 0; i < node.children.length; i += 1) {
      var _result = traverse({
        node: node.children[i],
        currentTreeIndex: nextTreeIndex,
        pathIndex: pathIndex + 1
      }); // If the result went down the correct path


      if (_result !== RESULT_MISS) {
        if (_result) {
          // If the result was truthy (in this case, an object),
          //  pass it to the next level of recursion up
          return _objectSpread2(_objectSpread2({}, node), {}, {
            children: [].concat(_toConsumableArray(node.children.slice(0, i)), [_result], _toConsumableArray(node.children.slice(i + 1)))
          });
        } // If the result was falsy (returned from the newNode function), then
        //  delete the node from the array.


        return _objectSpread2(_objectSpread2({}, node), {}, {
          children: [].concat(_toConsumableArray(node.children.slice(0, i)), _toConsumableArray(node.children.slice(i + 1)))
        });
      }

      nextTreeIndex += 1 + getDescendantCount({
        node: node.children[i],
        ignoreCollapsed: ignoreCollapsed
      });
    }

    return RESULT_MISS;
  }; // Use a pseudo-root node in the beginning traversal


  var result = traverse({
    node: {
      children: treeData
    },
    currentTreeIndex: -1,
    pathIndex: -1,
    isPseudoRoot: true
  });

  if (result === RESULT_MISS) {
    throw new Error('No node found at the given path.');
  }

  return result.children;
}
/**
 * Removes the node at the specified path and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The tree data with the node removed
 */

function removeNodeAtPath(_ref14) {
  var treeData = _ref14.treeData,
      path = _ref14.path,
      getNodeKey = _ref14.getNodeKey,
      _ref14$ignoreCollapse = _ref14.ignoreCollapsed,
      ignoreCollapsed = _ref14$ignoreCollapse === void 0 ? true : _ref14$ignoreCollapse;
  return changeNodeAtPath({
    treeData: treeData,
    path: path,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    newNode: null // Delete the node

  });
}
/**
 * Removes the node at the specified path and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The tree data with the node removed
 * @return {Object} result.node - The node that was removed
 * @return {number} result.treeIndex - The previous treeIndex of the removed node
 */

function removeNode(_ref15) {
  var treeData = _ref15.treeData,
      path = _ref15.path,
      getNodeKey = _ref15.getNodeKey,
      _ref15$ignoreCollapse = _ref15.ignoreCollapsed,
      ignoreCollapsed = _ref15$ignoreCollapse === void 0 ? true : _ref15$ignoreCollapse;
  var removedNode = null;
  var removedTreeIndex = null;
  var nextTreeData = changeNodeAtPath({
    treeData: treeData,
    path: path,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    newNode: function newNode(_ref16) {
      var node = _ref16.node,
          treeIndex = _ref16.treeIndex;
      // Store the target node and delete it from the tree
      removedNode = node;
      removedTreeIndex = treeIndex;
      return null;
    }
  });
  return {
    treeData: nextTreeData,
    node: removedNode,
    treeIndex: removedTreeIndex
  };
}
/**
 * Gets the node at the specified path
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object|null} nodeInfo - The node info at the given path, or null if not found
 */

function getNodeAtPath(_ref17) {
  var treeData = _ref17.treeData,
      path = _ref17.path,
      getNodeKey = _ref17.getNodeKey,
      _ref17$ignoreCollapse = _ref17.ignoreCollapsed,
      ignoreCollapsed = _ref17$ignoreCollapse === void 0 ? true : _ref17$ignoreCollapse;
  var foundNodeInfo = null;

  try {
    changeNodeAtPath({
      treeData: treeData,
      path: path,
      getNodeKey: getNodeKey,
      ignoreCollapsed: ignoreCollapsed,
      newNode: function newNode(_ref18) {
        var node = _ref18.node,
            treeIndex = _ref18.treeIndex;
        foundNodeInfo = {
          node: node,
          treeIndex: treeIndex
        };
        return node;
      }
    });
  } catch (err) {// Ignore the error -- the null return will be explanation enough
  }

  return foundNodeInfo;
}
/**
 * Adds the node to the specified parent and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {!Object} newNode - The node to insert
 * @param {number|string} parentKey - The key of the to-be parentNode of the node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} expandParent - If true, expands the parentNode specified by parentPath
 * @param {boolean=} addAsFirstChild - If true, adds new node as first child of tree
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The updated tree data
 * @return {number} result.treeIndex - The tree index at which the node was inserted
 */

function addNodeUnderParent(_ref19) {
  var treeData = _ref19.treeData,
      newNode = _ref19.newNode,
      _ref19$parentKey = _ref19.parentKey,
      parentKey = _ref19$parentKey === void 0 ? null : _ref19$parentKey,
      getNodeKey = _ref19.getNodeKey,
      _ref19$ignoreCollapse = _ref19.ignoreCollapsed,
      ignoreCollapsed = _ref19$ignoreCollapse === void 0 ? true : _ref19$ignoreCollapse,
      _ref19$expandParent = _ref19.expandParent,
      expandParent = _ref19$expandParent === void 0 ? false : _ref19$expandParent,
      _ref19$addAsFirstChil = _ref19.addAsFirstChild,
      addAsFirstChild = _ref19$addAsFirstChil === void 0 ? false : _ref19$addAsFirstChil;

  if (parentKey === null) {
    return addAsFirstChild ? {
      treeData: [newNode].concat(_toConsumableArray(treeData || [])),
      treeIndex: 0
    } : {
      treeData: [].concat(_toConsumableArray(treeData || []), [newNode]),
      treeIndex: (treeData || []).length
    };
  }

  var insertedTreeIndex = null;
  var hasBeenAdded = false;
  var changedTreeData = map({
    treeData: treeData,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    callback: function callback(_ref20) {
      var node = _ref20.node,
          treeIndex = _ref20.treeIndex,
          path = _ref20.path;
      var key = path ? path[path.length - 1] : null; // Return nodes that are not the parent as-is

      if (hasBeenAdded || key !== parentKey) {
        return node;
      }

      hasBeenAdded = true;

      var parentNode = _objectSpread2({}, node);

      if (expandParent) {
        parentNode.expanded = true;
      } // If no children exist yet, just add the single newNode


      if (!parentNode.children) {
        insertedTreeIndex = treeIndex + 1;
        return _objectSpread2(_objectSpread2({}, parentNode), {}, {
          children: [newNode]
        });
      }

      if (typeof parentNode.children === 'function') {
        throw new Error('Cannot add to children defined by a function');
      }

      var nextTreeIndex = treeIndex + 1;

      for (var i = 0; i < parentNode.children.length; i += 1) {
        nextTreeIndex += 1 + getDescendantCount({
          node: parentNode.children[i],
          ignoreCollapsed: ignoreCollapsed
        });
      }

      insertedTreeIndex = nextTreeIndex;
      var children = addAsFirstChild ? [newNode].concat(_toConsumableArray(parentNode.children)) : [].concat(_toConsumableArray(parentNode.children), [newNode]);
      return _objectSpread2(_objectSpread2({}, parentNode), {}, {
        children: children
      });
    }
  });

  if (!hasBeenAdded) {
    throw new Error('No node found with the given key.');
  }

  return {
    treeData: changedTreeData,
    treeIndex: insertedTreeIndex
  };
}

function addNodeAtDepthAndIndex(_ref21) {
  var targetDepth = _ref21.targetDepth,
      minimumTreeIndex = _ref21.minimumTreeIndex,
      newNode = _ref21.newNode,
      ignoreCollapsed = _ref21.ignoreCollapsed,
      expandParent = _ref21.expandParent,
      _ref21$isPseudoRoot = _ref21.isPseudoRoot,
      isPseudoRoot = _ref21$isPseudoRoot === void 0 ? false : _ref21$isPseudoRoot,
      isLastChild = _ref21.isLastChild,
      node = _ref21.node,
      currentIndex = _ref21.currentIndex,
      currentDepth = _ref21.currentDepth,
      getNodeKey = _ref21.getNodeKey,
      _ref21$path = _ref21.path,
      path = _ref21$path === void 0 ? [] : _ref21$path;

  var selfPath = function selfPath(n) {
    return isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
      node: n,
      treeIndex: currentIndex
    })]);
  }; // If the current position is the only possible place to add, add it


  if (currentIndex >= minimumTreeIndex - 1 || isLastChild && !(node.children && node.children.length)) {
    if (typeof node.children === 'function') {
      throw new Error('Cannot add to children defined by a function');
    } else {
      var extraNodeProps = expandParent ? {
        expanded: true
      } : {};

      var _nextNode = _objectSpread2(_objectSpread2(_objectSpread2({}, node), extraNodeProps), {}, {
        children: node.children ? [newNode].concat(_toConsumableArray(node.children)) : [newNode]
      });

      return {
        node: _nextNode,
        nextIndex: currentIndex + 2,
        insertedTreeIndex: currentIndex + 1,
        parentPath: selfPath(_nextNode),
        parentNode: isPseudoRoot ? null : _nextNode
      };
    }
  } // If this is the target depth for the insertion,
  // i.e., where the newNode can be added to the current node's children


  if (currentDepth >= targetDepth - 1) {
    // Skip over nodes with no children or hidden children
    if (!node.children || typeof node.children === 'function' || node.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
      return {
        node: node,
        nextIndex: currentIndex + 1
      };
    } // Scan over the children to see if there's a place among them that fulfills
    // the minimumTreeIndex requirement


    var _childIndex = currentIndex + 1;

    var _insertedTreeIndex = null;
    var insertIndex = null;

    for (var i = 0; i < node.children.length; i += 1) {
      // If a valid location is found, mark it as the insertion location and
      // break out of the loop
      if (_childIndex >= minimumTreeIndex) {
        _insertedTreeIndex = _childIndex;
        insertIndex = i;
        break;
      } // Increment the index by the child itself plus the number of descendants it has


      _childIndex += 1 + getDescendantCount({
        node: node.children[i],
        ignoreCollapsed: ignoreCollapsed
      });
    } // If no valid indices to add the node were found


    if (insertIndex === null) {
      // If the last position in this node's children is less than the minimum index
      // and there are more children on the level of this node, return without insertion
      if (_childIndex < minimumTreeIndex && !isLastChild) {
        return {
          node: node,
          nextIndex: _childIndex
        };
      } // Use the last position in the children array to insert the newNode


      _insertedTreeIndex = _childIndex;
      insertIndex = node.children.length;
    } // Insert the newNode at the insertIndex


    var _nextNode2 = _objectSpread2(_objectSpread2({}, node), {}, {
      children: [].concat(_toConsumableArray(node.children.slice(0, insertIndex)), [newNode], _toConsumableArray(node.children.slice(insertIndex)))
    }); // Return node with successful insert result


    return {
      node: _nextNode2,
      nextIndex: _childIndex,
      insertedTreeIndex: _insertedTreeIndex,
      parentPath: selfPath(_nextNode2),
      parentNode: isPseudoRoot ? null : _nextNode2
    };
  } // Skip over nodes with no children or hidden children


  if (!node.children || typeof node.children === 'function' || node.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
    return {
      node: node,
      nextIndex: currentIndex + 1
    };
  } // Get all descendants


  var insertedTreeIndex = null;
  var pathFragment = null;
  var parentNode = null;
  var childIndex = currentIndex + 1;
  var newChildren = node.children;

  if (typeof newChildren !== 'function') {
    newChildren = newChildren.map(function (child, i) {
      if (insertedTreeIndex !== null) {
        return child;
      }

      var mapResult = addNodeAtDepthAndIndex({
        targetDepth: targetDepth,
        minimumTreeIndex: minimumTreeIndex,
        newNode: newNode,
        ignoreCollapsed: ignoreCollapsed,
        expandParent: expandParent,
        isLastChild: isLastChild && i === newChildren.length - 1,
        node: child,
        currentIndex: childIndex,
        currentDepth: currentDepth + 1,
        getNodeKey: getNodeKey,
        path: [] // Cannot determine the parent path until the children have been processed

      });

      if ('insertedTreeIndex' in mapResult) {
        insertedTreeIndex = mapResult.insertedTreeIndex;
        parentNode = mapResult.parentNode;
        pathFragment = mapResult.parentPath;
      }

      childIndex = mapResult.nextIndex;
      return mapResult.node;
    });
  }

  var nextNode = _objectSpread2(_objectSpread2({}, node), {}, {
    children: newChildren
  });

  var result = {
    node: nextNode,
    nextIndex: childIndex
  };

  if (insertedTreeIndex !== null) {
    result.insertedTreeIndex = insertedTreeIndex;
    result.parentPath = [].concat(_toConsumableArray(selfPath(nextNode)), _toConsumableArray(pathFragment));
    result.parentNode = parentNode;
  }

  return result;
}
/**
 * Insert a node into the tree at the given depth, after the minimum index
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!number} depth - The depth to insert the node at (the first level of the array being depth 0)
 * @param {!number} minimumTreeIndex - The lowest possible treeIndex to insert the node at
 * @param {!Object} newNode - The node to insert into the tree
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} expandParent - If true, expands the parent of the inserted node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The tree data with the node added
 * @return {number} result.treeIndex - The tree index at which the node was inserted
 * @return {number[]|string[]} result.path - Array of keys leading to the node location after insertion
 * @return {Object} result.parentNode - The parent node of the inserted node
 */


function insertNode(_ref22) {
  var treeData = _ref22.treeData,
      targetDepth = _ref22.depth,
      minimumTreeIndex = _ref22.minimumTreeIndex,
      newNode = _ref22.newNode,
      _ref22$getNodeKey = _ref22.getNodeKey,
      getNodeKey = _ref22$getNodeKey === void 0 ? function () {} : _ref22$getNodeKey,
      _ref22$ignoreCollapse = _ref22.ignoreCollapsed,
      ignoreCollapsed = _ref22$ignoreCollapse === void 0 ? true : _ref22$ignoreCollapse,
      _ref22$expandParent = _ref22.expandParent,
      expandParent = _ref22$expandParent === void 0 ? false : _ref22$expandParent;

  if (!treeData && targetDepth === 0) {
    return {
      treeData: [newNode],
      treeIndex: 0,
      path: [getNodeKey({
        node: newNode,
        treeIndex: 0
      })],
      parentNode: null
    };
  }

  var insertResult = addNodeAtDepthAndIndex({
    targetDepth: targetDepth,
    minimumTreeIndex: minimumTreeIndex,
    newNode: newNode,
    ignoreCollapsed: ignoreCollapsed,
    expandParent: expandParent,
    getNodeKey: getNodeKey,
    isPseudoRoot: true,
    isLastChild: true,
    node: {
      children: treeData
    },
    currentIndex: -1,
    currentDepth: -1
  });

  if (!('insertedTreeIndex' in insertResult)) {
    throw new Error('No suitable position found to insert.');
  }

  var treeIndex = insertResult.insertedTreeIndex;
  return {
    treeData: insertResult.node.children,
    treeIndex: treeIndex,
    path: [].concat(_toConsumableArray(insertResult.parentPath), [getNodeKey({
      node: newNode,
      treeIndex: treeIndex
    })]),
    parentNode: insertResult.parentNode
  };
}
/**
 * Get tree data flattened.
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {{
 *      node: Object,
 *      path: []string|[]number,
 *      lowerSiblingCounts: []number
 *  }}[] nodes - The node array
 */

function getFlatDataFromTree(_ref23) {
  var treeData = _ref23.treeData,
      getNodeKey = _ref23.getNodeKey,
      _ref23$ignoreCollapse = _ref23.ignoreCollapsed,
      ignoreCollapsed = _ref23$ignoreCollapse === void 0 ? true : _ref23$ignoreCollapse;

  if (!treeData || treeData.length < 1) {
    return [];
  }

  var flattened = [];
  walk({
    treeData: treeData,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    callback: function callback(nodeInfo) {
      flattened.push(nodeInfo);
    }
  });
  return flattened;
}
/**
 * Generate a tree structure from flat data.
 *
 * @param {!Object[]} flatData
 * @param {!function=} getKey - Function to get the key from the nodeData
 * @param {!function=} getParentKey - Function to get the parent key from the nodeData
 * @param {string|number=} rootKey - The value returned by `getParentKey` that corresponds to the root node.
 *                                  For example, if your nodes have id 1-99, you might use rootKey = 0
 *
 * @return {Object[]} treeData - The flat data represented as a tree
 */

function getTreeFromFlatData(_ref24) {
  var flatData = _ref24.flatData,
      _ref24$getKey = _ref24.getKey,
      getKey = _ref24$getKey === void 0 ? function (node) {
    return node.id;
  } : _ref24$getKey,
      _ref24$getParentKey = _ref24.getParentKey,
      getParentKey = _ref24$getParentKey === void 0 ? function (node) {
    return node.parentId;
  } : _ref24$getParentKey,
      _ref24$rootKey = _ref24.rootKey,
      rootKey = _ref24$rootKey === void 0 ? '0' : _ref24$rootKey;

  if (!flatData) {
    return [];
  }

  var childrenToParents = {};
  flatData.forEach(function (child) {
    var parentKey = getParentKey(child);

    if (parentKey in childrenToParents) {
      childrenToParents[parentKey].push(child);
    } else {
      childrenToParents[parentKey] = [child];
    }
  });

  if (!(rootKey in childrenToParents)) {
    return [];
  }

  var trav = function trav(parent) {
    var parentKey = getKey(parent);

    if (parentKey in childrenToParents) {
      return _objectSpread2(_objectSpread2({}, parent), {}, {
        children: childrenToParents[parentKey].map(function (child) {
          return trav(child);
        })
      });
    }

    return _objectSpread2({}, parent);
  };

  return childrenToParents[rootKey].map(function (child) {
    return trav(child);
  });
}
/**
 * Check if a node is a descendant of another node.
 *
 * @param {!Object} older - Potential ancestor of younger node
 * @param {!Object} younger - Potential descendant of older node
 *
 * @return {boolean}
 */

function isDescendant(older, younger) {
  return !!older.children && typeof older.children !== 'function' && older.children.some(function (child) {
    return child === younger || isDescendant(child, younger);
  });
}
/**
 * Get the maximum depth of the children (the depth of the root node is 0).
 *
 * @param {!Object} node - Node in the tree
 * @param {?number} depth - The current depth
 *
 * @return {number} maxDepth - The deepest depth in the tree
 */

function getDepth(node) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!node.children) {
    return depth;
  }

  if (typeof node.children === 'function') {
    return depth + 1;
  }

  return node.children.reduce(function (deepest, child) {
    return Math.max(deepest, getDepth(child, depth + 1));
  }, depth);
}
/**
 * Find nodes matching a search query in the tree,
 *
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {!Object[]} treeData - Tree data
 * @param {?string|number} searchQuery - Function returning a boolean to indicate whether the node is a match or not
 * @param {!function} searchMethod - Function returning a boolean to indicate whether the node is a match or not
 * @param {?number} searchFocusOffset - The offset of the match to focus on
 *                                      (e.g., 0 focuses on the first match, 1 on the second)
 * @param {boolean=} expandAllMatchPaths - If true, expands the paths to any matched node
 * @param {boolean=} expandFocusMatchPaths - If true, expands the path to the focused node
 *
 * @return {Object[]} matches - An array of objects containing the matching `node`s, their `path`s and `treeIndex`s
 * @return {Object[]} treeData - The original tree data with all relevant nodes expanded.
 *                               If expandAllMatchPaths and expandFocusMatchPaths are both false,
 *                               it will be the same as the original tree data.
 */

function find(_ref25) {
  var getNodeKey = _ref25.getNodeKey,
      treeData = _ref25.treeData,
      searchQuery = _ref25.searchQuery,
      searchMethod = _ref25.searchMethod,
      searchFocusOffset = _ref25.searchFocusOffset,
      _ref25$expandAllMatch = _ref25.expandAllMatchPaths,
      expandAllMatchPaths = _ref25$expandAllMatch === void 0 ? false : _ref25$expandAllMatch,
      _ref25$expandFocusMat = _ref25.expandFocusMatchPaths,
      expandFocusMatchPaths = _ref25$expandFocusMat === void 0 ? true : _ref25$expandFocusMat;
  var matchCount = 0;

  var trav = function trav(_ref26) {
    var _ref26$isPseudoRoot = _ref26.isPseudoRoot,
        isPseudoRoot = _ref26$isPseudoRoot === void 0 ? false : _ref26$isPseudoRoot,
        node = _ref26.node,
        currentIndex = _ref26.currentIndex,
        _ref26$path = _ref26.path,
        path = _ref26$path === void 0 ? [] : _ref26$path;
    var matches = [];
    var isSelfMatch = false;
    var hasFocusMatch = false; // The pseudo-root is not considered in the path

    var selfPath = isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
      node: node,
      treeIndex: currentIndex
    })]);
    var extraInfo = isPseudoRoot ? null : {
      path: selfPath,
      treeIndex: currentIndex
    }; // Nodes with with children that aren't lazy

    var hasChildren = node.children && typeof node.children !== 'function' && node.children.length > 0; // Examine the current node to see if it is a match

    if (!isPseudoRoot && searchMethod(_objectSpread2(_objectSpread2({}, extraInfo), {}, {
      node: node,
      searchQuery: searchQuery
    }))) {
      if (matchCount === searchFocusOffset) {
        hasFocusMatch = true;
      } // Keep track of the number of matching nodes, so we know when the searchFocusOffset
      //  is reached


      matchCount += 1; // We cannot add this node to the matches right away, as it may be changed
      //  during the search of the descendants. The entire node is used in
      //  comparisons between nodes inside the `matches` and `treeData` results
      //  of this method (`find`)

      isSelfMatch = true;
    }

    var childIndex = currentIndex;

    var newNode = _objectSpread2({}, node);

    if (hasChildren) {
      // Get all descendants
      newNode.children = newNode.children.map(function (child) {
        var mapResult = trav({
          node: child,
          currentIndex: childIndex + 1,
          path: selfPath
        }); // Ignore hidden nodes by only advancing the index counter to the returned treeIndex
        // if the child is expanded.
        //
        // The child could have been expanded from the start,
        // or expanded due to a matching node being found in its descendants

        if (mapResult.node.expanded) {
          childIndex = mapResult.treeIndex;
        } else {
          childIndex += 1;
        }

        if (mapResult.matches.length > 0 || mapResult.hasFocusMatch) {
          matches = [].concat(_toConsumableArray(matches), _toConsumableArray(mapResult.matches));

          if (mapResult.hasFocusMatch) {
            hasFocusMatch = true;
          } // Expand the current node if it has descendants matching the search
          // and the settings are set to do so.


          if (expandAllMatchPaths && mapResult.matches.length > 0 || (expandAllMatchPaths || expandFocusMatchPaths) && mapResult.hasFocusMatch) {
            newNode.expanded = true;
          }
        }

        return mapResult.node;
      });
    } // Cannot assign a treeIndex to hidden nodes


    if (!isPseudoRoot && !newNode.expanded) {
      matches = matches.map(function (match) {
        return _objectSpread2(_objectSpread2({}, match), {}, {
          treeIndex: null
        });
      });
    } // Add this node to the matches if it fits the search criteria.
    // This is performed at the last minute so newNode can be sent in its final form.


    if (isSelfMatch) {
      matches = [_objectSpread2(_objectSpread2({}, extraInfo), {}, {
        node: newNode
      })].concat(_toConsumableArray(matches));
    }

    return {
      node: matches.length > 0 ? newNode : node,
      matches: matches,
      hasFocusMatch: hasFocusMatch,
      treeIndex: childIndex
    };
  };

  var result = trav({
    node: {
      children: treeData
    },
    isPseudoRoot: true,
    currentIndex: -1
  });
  return {
    matches: result.matches,
    treeData: result.node.children
  };
}

// very simple className utility for creating a classname string...
// Falsy arguments are ignored:
//
// const active = true
// const className = classnames(
//    "class1",
//    !active && "class2",
//    active && "class3"
// ); // returns -> class1 class3";
//
function classnames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  // Use Boolean constructor as a filter callback
  // Allows for loose type truthy/falsey checks
  // Boolean("") === false;
  // Boolean(false) === false;
  // Boolean(undefined) === false;
  // Boolean(null) === false;
  // Boolean(0) === false;
  // Boolean("classname") === true;
  return classes.filter(Boolean).join(' ');
}

function _createSuper$1(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var NodeRendererDefault =
/*#__PURE__*/
function (_Component) {
  _inherits(NodeRendererDefault, _Component);

  var _super = _createSuper$1(NodeRendererDefault);

  function NodeRendererDefault() {
    _classCallCheck(this, NodeRendererDefault);

    return _super.apply(this, arguments);
  }

  _createClass(NodeRendererDefault, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          scaffoldBlockPxWidth = _this$props.scaffoldBlockPxWidth,
          toggleChildrenVisibility = _this$props.toggleChildrenVisibility,
          connectDragPreview = _this$props.connectDragPreview,
          connectDragSource = _this$props.connectDragSource,
          isDragging = _this$props.isDragging,
          canDrop = _this$props.canDrop,
          canDrag = _this$props.canDrag,
          node = _this$props.node,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          draggedNode = _this$props.draggedNode,
          path = _this$props.path,
          treeIndex = _this$props.treeIndex,
          isSearchMatch = _this$props.isSearchMatch,
          isSearchFocus = _this$props.isSearchFocus,
          buttons = _this$props.buttons,
          className = _this$props.className,
          style = _this$props.style,
          didDrop = _this$props.didDrop,
          treeId = _this$props.treeId,
          isOver = _this$props.isOver,
          parentNode = _this$props.parentNode,
          rowDirection = _this$props.rowDirection,
          otherProps = _objectWithoutProperties(_this$props, ["scaffoldBlockPxWidth", "toggleChildrenVisibility", "connectDragPreview", "connectDragSource", "isDragging", "canDrop", "canDrag", "node", "title", "subtitle", "draggedNode", "path", "treeIndex", "isSearchMatch", "isSearchFocus", "buttons", "className", "style", "didDrop", "treeId", "isOver", "parentNode", "rowDirection"]);

      var nodeTitle = title || node.title;
      var nodeSubtitle = subtitle || node.subtitle;
      var rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null;
      var handle;

      if (canDrag) {
        if (typeof node.children === 'function' && node.expanded) {
          // Show a loading symbol on the handle when the children are expanded
          //  and yet still defined by a function (a callback to fetch the children)
          handle = React__default.createElement("div", {
            className: "rst__loadingHandle"
          }, React__default.createElement("div", {
            className: "rst__loadingCircle"
          }, _toConsumableArray(new Array(12)).map(function (_, index) {
            return React__default.createElement("div", {
              // eslint-disable-next-line react/no-array-index-key
              key: index,
              className: classnames('rst__loadingCirclePoint', rowDirectionClass)
            });
          })));
        } else {
          // Show the handle used to initiate a drag-and-drop
          handle = connectDragSource(React__default.createElement("div", {
            className: "rst__moveHandle"
          }), {
            dropEffect: 'copy'
          });
        }
      }

      var isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
      var isLandingPadActive = !didDrop && isDragging;
      var buttonStyle = {
        left: -0.5 * scaffoldBlockPxWidth
      };

      if (rowDirection === 'rtl') {
        buttonStyle = {
          right: -0.5 * scaffoldBlockPxWidth
        };
      }

      return React__default.createElement("div", _extends({
        style: {
          height: '100%'
        }
      }, otherProps), toggleChildrenVisibility && node.children && (node.children.length > 0 || typeof node.children === 'function') && React__default.createElement("div", null, React__default.createElement("button", {
        type: "button",
        "aria-label": node.expanded ? 'Collapse' : 'Expand',
        className: classnames(node.expanded ? 'rst__collapseButton' : 'rst__expandButton', rowDirectionClass),
        style: buttonStyle,
        onClick: function onClick() {
          return toggleChildrenVisibility({
            node: node,
            path: path,
            treeIndex: treeIndex
          });
        }
      }), node.expanded && !isDragging && React__default.createElement("div", {
        style: {
          width: scaffoldBlockPxWidth
        },
        className: classnames('rst__lineChildren', rowDirectionClass)
      })), React__default.createElement("div", {
        className: classnames('rst__rowWrapper', rowDirectionClass)
      }, connectDragPreview(React__default.createElement("div", {
        className: classnames('rst__row', isLandingPadActive && 'rst__rowLandingPad', isLandingPadActive && !canDrop && 'rst__rowCancelPad', isSearchMatch && 'rst__rowSearchMatch', isSearchFocus && 'rst__rowSearchFocus', rowDirectionClass, className),
        style: _objectSpread2({
          opacity: isDraggedDescendant ? 0.5 : 1
        }, style)
      }, handle, React__default.createElement("div", {
        className: classnames('rst__rowContents', !canDrag && 'rst__rowContentsDragDisabled', rowDirectionClass)
      }, React__default.createElement("div", {
        className: classnames('rst__rowLabel', rowDirectionClass)
      }, React__default.createElement("span", {
        className: classnames('rst__rowTitle', node.subtitle && 'rst__rowTitleWithSubtitle')
      }, typeof nodeTitle === 'function' ? nodeTitle({
        node: node,
        path: path,
        treeIndex: treeIndex
      }) : nodeTitle), nodeSubtitle && React__default.createElement("span", {
        className: "rst__rowSubtitle"
      }, typeof nodeSubtitle === 'function' ? nodeSubtitle({
        node: node,
        path: path,
        treeIndex: treeIndex
      }) : nodeSubtitle)), React__default.createElement("div", {
        className: "rst__rowToolbar"
      }, buttons.map(function (btn, index) {
        return React__default.createElement("div", {
          key: index // eslint-disable-line react/no-array-index-key
          ,
          className: "rst__toolbarButton"
        }, btn);
      })))))));
    }
  }]);

  return NodeRendererDefault;
}(React.Component);

NodeRendererDefault.defaultProps = {
  isSearchMatch: false,
  isSearchFocus: false,
  canDrag: false,
  toggleChildrenVisibility: null,
  buttons: [],
  className: '',
  style: {},
  parentNode: null,
  draggedNode: null,
  canDrop: false,
  title: null,
  subtitle: null,
  rowDirection: 'ltr'
};
NodeRendererDefault.propTypes = {
  node: PropTypes.shape({}).isRequired,
  title: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  subtitle: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  path: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  treeIndex: PropTypes.number.isRequired,
  treeId: PropTypes.string.isRequired,
  isSearchMatch: PropTypes.bool,
  isSearchFocus: PropTypes.bool,
  canDrag: PropTypes.bool,
  scaffoldBlockPxWidth: PropTypes.number.isRequired,
  toggleChildrenVisibility: PropTypes.func,
  buttons: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  // Drag and drop API functions
  // Drag source
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  parentNode: PropTypes.shape({}),
  // Needed for dndManager
  isDragging: PropTypes.bool.isRequired,
  didDrop: PropTypes.bool.isRequired,
  draggedNode: PropTypes.shape({}),
  // Drop target
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool,
  // rtl support
  rowDirection: PropTypes.string
};

var PlaceholderRendererDefault = function PlaceholderRendererDefault(_ref) {
  var isOver = _ref.isOver,
      canDrop = _ref.canDrop;
  return React__default.createElement("div", {
    className: classnames('rst__placeholder', canDrop && 'rst__placeholderLandingPad', canDrop && !isOver && 'rst__placeholderCancelPad')
  });
};

PlaceholderRendererDefault.defaultProps = {
  isOver: false,
  canDrop: false
};
PlaceholderRendererDefault.propTypes = {
  isOver: PropTypes.bool,
  canDrop: PropTypes.bool
};

function _createSuper$2(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var TreeNode =
/*#__PURE__*/
function (_Component) {
  _inherits(TreeNode, _Component);

  var _super = _createSuper$2(TreeNode);

  function TreeNode() {
    _classCallCheck(this, TreeNode);

    return _super.apply(this, arguments);
  }

  _createClass(TreeNode, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          listIndex = _this$props.listIndex,
          swapFrom = _this$props.swapFrom,
          swapLength = _this$props.swapLength,
          swapDepth = _this$props.swapDepth,
          scaffoldBlockPxWidth = _this$props.scaffoldBlockPxWidth,
          lowerSiblingCounts = _this$props.lowerSiblingCounts,
          connectDropTarget = _this$props.connectDropTarget,
          isOver = _this$props.isOver,
          draggedNode = _this$props.draggedNode,
          canDrop = _this$props.canDrop,
          treeIndex = _this$props.treeIndex,
          treeId = _this$props.treeId,
          getPrevRow = _this$props.getPrevRow,
          node = _this$props.node,
          path = _this$props.path,
          rowDirection = _this$props.rowDirection,
          otherProps = _objectWithoutProperties(_this$props, ["children", "listIndex", "swapFrom", "swapLength", "swapDepth", "scaffoldBlockPxWidth", "lowerSiblingCounts", "connectDropTarget", "isOver", "draggedNode", "canDrop", "treeIndex", "treeId", "getPrevRow", "node", "path", "rowDirection"]);

      var rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null; // Construct the scaffold representing the structure of the tree

      var scaffoldBlockCount = lowerSiblingCounts.length;
      var scaffold = [];
      lowerSiblingCounts.forEach(function (lowerSiblingCount, i) {
        var lineClass = '';

        if (lowerSiblingCount > 0) {
          // At this level in the tree, the nodes had sibling nodes further down
          if (listIndex === 0) {
            // Top-left corner of the tree
            // +-----+
            // |     |
            // |  +--+
            // |  |  |
            // +--+--+
            lineClass = 'rst__lineHalfHorizontalRight rst__lineHalfVerticalBottom';
          } else if (i === scaffoldBlockCount - 1) {
            // Last scaffold block in the row, right before the row content
            // +--+--+
            // |  |  |
            // |  +--+
            // |  |  |
            // +--+--+
            lineClass = 'rst__lineHalfHorizontalRight rst__lineFullVertical';
          } else {
            // Simply connecting the line extending down to the next sibling on this level
            // +--+--+
            // |  |  |
            // |  |  |
            // |  |  |
            // +--+--+
            lineClass = 'rst__lineFullVertical';
          }
        } else if (listIndex === 0) {
          // Top-left corner of the tree, but has no siblings
          // +-----+
          // |     |
          // |  +--+
          // |     |
          // +-----+
          lineClass = 'rst__lineHalfHorizontalRight';
        } else if (i === scaffoldBlockCount - 1) {
          // The last or only node in this level of the tree
          // +--+--+
          // |  |  |
          // |  +--+
          // |     |
          // +-----+
          lineClass = 'rst__lineHalfVerticalTop rst__lineHalfHorizontalRight';
        }

        scaffold.push(React__default.createElement("div", {
          key: "pre_".concat(1 + i),
          style: {
            width: scaffoldBlockPxWidth
          },
          className: classnames('rst__lineBlock', lineClass, rowDirectionClass)
        }));

        if (treeIndex !== listIndex && i === swapDepth) {
          // This row has been shifted, and is at the depth of
          // the line pointing to the new destination
          var highlightLineClass = '';

          if (listIndex === swapFrom + swapLength - 1) {
            // This block is on the bottom (target) line
            // This block points at the target block (where the row will go when released)
            highlightLineClass = 'rst__highlightBottomLeftCorner';
          } else if (treeIndex === swapFrom) {
            // This block is on the top (source) line
            highlightLineClass = 'rst__highlightTopLeftCorner';
          } else {
            // This block is between the bottom and top
            highlightLineClass = 'rst__highlightLineVertical';
          }

          var _style;

          if (rowDirection === 'rtl') {
            _style = {
              width: scaffoldBlockPxWidth,
              right: scaffoldBlockPxWidth * i
            };
          } else {
            // Default ltr
            _style = {
              width: scaffoldBlockPxWidth,
              left: scaffoldBlockPxWidth * i
            };
          }

          scaffold.push(React__default.createElement("div", {
            // eslint-disable-next-line react/no-array-index-key
            key: i,
            style: _style,
            className: classnames('rst__absoluteLineBlock', highlightLineClass, rowDirectionClass)
          }));
        }
      });
      var style;

      if (rowDirection === 'rtl') {
        style = {
          right: scaffoldBlockPxWidth * scaffoldBlockCount
        };
      } else {
        // Default ltr
        style = {
          left: scaffoldBlockPxWidth * scaffoldBlockCount
        };
      }

      return connectDropTarget(React__default.createElement("div", _extends({}, otherProps, {
        className: classnames('rst__node', rowDirectionClass)
      }), scaffold, React__default.createElement("div", {
        className: "rst__nodeContent",
        style: style
      }, React.Children.map(children, function (child) {
        return React.cloneElement(child, {
          isOver: isOver,
          canDrop: canDrop,
          draggedNode: draggedNode
        });
      }))));
    }
  }]);

  return TreeNode;
}(React.Component);

TreeNode.defaultProps = {
  swapFrom: null,
  swapDepth: null,
  swapLength: null,
  canDrop: false,
  draggedNode: null,
  rowDirection: 'ltr'
};
TreeNode.propTypes = {
  treeIndex: PropTypes.number.isRequired,
  treeId: PropTypes.string.isRequired,
  swapFrom: PropTypes.number,
  swapDepth: PropTypes.number,
  swapLength: PropTypes.number,
  scaffoldBlockPxWidth: PropTypes.number.isRequired,
  lowerSiblingCounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  listIndex: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  // Drop target
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool,
  draggedNode: PropTypes.shape({}),
  // used in dndManager
  getPrevRow: PropTypes.func.isRequired,
  node: PropTypes.shape({}).isRequired,
  path: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  // rtl support
  rowDirection: PropTypes.string
};

function _createSuper$3(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var TreePlaceholder =
/*#__PURE__*/
function (_Component) {
  _inherits(TreePlaceholder, _Component);

  var _super = _createSuper$3(TreePlaceholder);

  function TreePlaceholder() {
    _classCallCheck(this, TreePlaceholder);

    return _super.apply(this, arguments);
  }

  _createClass(TreePlaceholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          connectDropTarget = _this$props.connectDropTarget,
          treeId = _this$props.treeId,
          drop = _this$props.drop,
          otherProps = _objectWithoutProperties(_this$props, ["children", "connectDropTarget", "treeId", "drop"]);

      return connectDropTarget(React__default.createElement("div", null, React.Children.map(children, function (child) {
        return React.cloneElement(child, _objectSpread2({}, otherProps));
      })));
    }
  }]);

  return TreePlaceholder;
}(React.Component);

TreePlaceholder.defaultProps = {
  canDrop: false,
  draggedNode: null
};
TreePlaceholder.propTypes = {
  children: PropTypes.node.isRequired,
  // Drop target
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool,
  draggedNode: PropTypes.shape({}),
  treeId: PropTypes.string.isRequired,
  drop: PropTypes.func.isRequired
};

function defaultGetNodeKey(_ref) {
  var treeIndex = _ref.treeIndex;
  return treeIndex;
} // Cheap hack to get the text of a react object

function getReactElementText(parent) {
  if (typeof parent === 'string') {
    return parent;
  }

  if (parent === null || _typeof(parent) !== 'object' || !parent.props || !parent.props.children || typeof parent.props.children !== 'string' && _typeof(parent.props.children) !== 'object') {
    return '';
  }

  if (typeof parent.props.children === 'string') {
    return parent.props.children;
  }

  return parent.props.children.map(function (child) {
    return getReactElementText(child);
  }).join('');
} // Search for a query string inside a node property


function stringSearch(key, searchQuery, node, path, treeIndex) {
  if (typeof node[key] === 'function') {
    // Search within text after calling its function to generate the text
    return String(node[key]({
      node: node,
      path: path,
      treeIndex: treeIndex
    })).indexOf(searchQuery) > -1;
  }

  if (_typeof(node[key]) === 'object') {
    // Search within text inside react elements
    return getReactElementText(node[key]).indexOf(searchQuery) > -1;
  } // Search within string


  return node[key] && String(node[key]).indexOf(searchQuery) > -1;
}

function defaultSearchMethod(_ref2) {
  var node = _ref2.node,
      path = _ref2.path,
      treeIndex = _ref2.treeIndex,
      searchQuery = _ref2.searchQuery;
  return stringSearch('title', searchQuery, node, path, treeIndex) || stringSearch('subtitle', searchQuery, node, path, treeIndex);
}

var memoize = function memoize(f) {
  var savedArgsArray = [];
  var savedKeysArray = [];
  var savedResult = null;
  return function (args) {
    var keysArray = Object.keys(args).sort();
    var argsArray = keysArray.map(function (key) {
      return args[key];
    }); // If the arguments for the last insert operation are different than this time,
    // recalculate the result

    if (argsArray.length !== savedArgsArray.length || argsArray.some(function (arg, index) {
      return arg !== savedArgsArray[index];
    }) || keysArray.some(function (key, index) {
      return key !== savedKeysArray[index];
    })) {
      savedArgsArray = argsArray;
      savedKeysArray = keysArray;
      savedResult = f(args);
    }

    return savedResult;
  };
};

var memoizedInsertNode = memoize(insertNode);
var memoizedGetFlatDataFromTree = memoize(getFlatDataFromTree);
var memoizedGetDescendantCount = memoize(getDescendantCount);

var DndManager =
/*#__PURE__*/
function () {
  function DndManager(treeRef) {
    _classCallCheck(this, DndManager);

    this.treeRef = treeRef;
  }

  _createClass(DndManager, [{
    key: "getTargetDepth",
    value: function getTargetDepth(dropTargetProps, monitor, component) {
      var dropTargetDepth = 0;
      var rowAbove = dropTargetProps.getPrevRow();

      if (rowAbove) {
        var path = rowAbove.path;
        var aboveNodeCannotHaveChildren = !this.treeRef.canNodeHaveChildren(rowAbove.node);

        if (aboveNodeCannotHaveChildren) {
          path = path.slice(0, path.length - 1);
        } // Limit the length of the path to the deepest possible


        dropTargetDepth = Math.min(path.length, dropTargetProps.path.length);
      }

      var blocksOffset;
      var dragSourceInitialDepth = (monitor.getItem().path || []).length; // When adding node from external source

      if (monitor.getItem().treeId !== this.treeId) {
        // Ignore the tree depth of the source, if it had any to begin with
        dragSourceInitialDepth = 0;

        if (component) {
          var relativePosition = reactDom.findDOMNode(component).getBoundingClientRect(); // eslint-disable-line react/no-find-dom-node

          var leftShift = monitor.getSourceClientOffset().x - relativePosition.left;
          blocksOffset = Math.round(leftShift / dropTargetProps.scaffoldBlockPxWidth);
        } else {
          blocksOffset = dropTargetProps.path.length;
        }
      } else {
        // handle row direction support
        var direction = dropTargetProps.rowDirection === 'rtl' ? -1 : 1;
        blocksOffset = Math.round(direction * monitor.getDifferenceFromInitialOffset().x / dropTargetProps.scaffoldBlockPxWidth);
      }

      var targetDepth = Math.min(dropTargetDepth, Math.max(0, dragSourceInitialDepth + blocksOffset - 1)); // If a maxDepth is defined, constrain the target depth

      if (typeof this.maxDepth !== 'undefined' && this.maxDepth !== null) {
        var draggedNode = monitor.getItem().node;
        var draggedChildDepth = getDepth(draggedNode);
        targetDepth = Math.max(0, Math.min(targetDepth, this.maxDepth - draggedChildDepth - 1));
      }

      return targetDepth;
    }
  }, {
    key: "canDrop",
    value: function canDrop(dropTargetProps, monitor) {
      if (!monitor.isOver()) {
        return false;
      }

      var rowAbove = dropTargetProps.getPrevRow();
      var abovePath = rowAbove ? rowAbove.path : [];
      var aboveNode = rowAbove ? rowAbove.node : {};
      var targetDepth = this.getTargetDepth(dropTargetProps, monitor, null); // Cannot drop if we're adding to the children of the row above and
      //  the row above is a function

      if (targetDepth >= abovePath.length && typeof aboveNode.children === 'function') {
        return false;
      }

      if (typeof this.customCanDrop === 'function') {
        var _monitor$getItem = monitor.getItem(),
            node = _monitor$getItem.node;

        var addedResult = memoizedInsertNode({
          treeData: this.treeData,
          newNode: node,
          depth: targetDepth,
          getNodeKey: this.getNodeKey,
          minimumTreeIndex: dropTargetProps.listIndex,
          expandParent: true
        });
        return this.customCanDrop({
          node: node,
          prevPath: monitor.getItem().path,
          prevParent: monitor.getItem().parentNode,
          prevTreeIndex: monitor.getItem().treeIndex,
          // Equals -1 when dragged from external tree
          nextPath: addedResult.path,
          nextParent: addedResult.parentNode,
          nextTreeIndex: addedResult.treeIndex
        });
      }

      return true;
    }
  }, {
    key: "wrapSource",
    value: function wrapSource(el) {
      var _this = this;

      var nodeDragSource = {
        beginDrag: function beginDrag(props) {
          _this.startDrag(props);

          return {
            node: props.node,
            parentNode: props.parentNode,
            path: props.path,
            treeIndex: props.treeIndex,
            treeId: props.treeId
          };
        },
        endDrag: function endDrag(props, monitor) {
          _this.endDrag(monitor.getDropResult());
        },
        isDragging: function isDragging(props, monitor) {
          var dropTargetNode = monitor.getItem().node;
          var draggedNode = props.node;
          return draggedNode === dropTargetNode;
        }
      };

      function nodeDragSourcePropInjection(connect, monitor) {
        return {
          connectDragSource: connect.dragSource(),
          connectDragPreview: connect.dragPreview(),
          isDragging: monitor.isDragging(),
          didDrop: monitor.didDrop()
        };
      }

      return reactDnd.DragSource(this.dndType, nodeDragSource, nodeDragSourcePropInjection)(el);
    }
  }, {
    key: "wrapTarget",
    value: function wrapTarget(el) {
      var _this2 = this;

      var nodeDropTarget = {
        drop: function drop(dropTargetProps, monitor, component) {
          var result = {
            node: monitor.getItem().node,
            path: monitor.getItem().path,
            treeIndex: monitor.getItem().treeIndex,
            treeId: _this2.treeId,
            minimumTreeIndex: dropTargetProps.treeIndex,
            depth: _this2.getTargetDepth(dropTargetProps, monitor, component)
          };

          _this2.drop(result);

          return result;
        },
        hover: function hover(dropTargetProps, monitor, component) {
          var targetDepth = _this2.getTargetDepth(dropTargetProps, monitor, component);

          var draggedNode = monitor.getItem().node;
          var needsRedraw = // Redraw if hovered above different nodes
          dropTargetProps.node !== draggedNode || // Or hovered above the same node but at a different depth
          targetDepth !== dropTargetProps.path.length - 1;

          if (!needsRedraw) {
            return;
          } // throttle `dragHover` work to available animation frames


          cancelAnimationFrame(_this2.rafId);
          _this2.rafId = requestAnimationFrame(function () {
            _this2.dragHover({
              node: draggedNode,
              path: monitor.getItem().path,
              minimumTreeIndex: dropTargetProps.listIndex,
              depth: targetDepth
            });
          });
        },
        canDrop: this.canDrop.bind(this)
      };

      function nodeDropTargetPropInjection(connect, monitor) {
        var dragged = monitor.getItem();
        return {
          connectDropTarget: connect.dropTarget(),
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          draggedNode: dragged ? dragged.node : null
        };
      }

      return reactDnd.DropTarget(this.dndType, nodeDropTarget, nodeDropTargetPropInjection)(el);
    }
  }, {
    key: "wrapPlaceholder",
    value: function wrapPlaceholder(el) {
      var _this3 = this;

      var placeholderDropTarget = {
        drop: function drop(dropTargetProps, monitor) {
          var _monitor$getItem2 = monitor.getItem(),
              node = _monitor$getItem2.node,
              path = _monitor$getItem2.path,
              treeIndex = _monitor$getItem2.treeIndex;

          var result = {
            node: node,
            path: path,
            treeIndex: treeIndex,
            treeId: _this3.treeId,
            minimumTreeIndex: 0,
            depth: 0
          };

          _this3.drop(result);

          return result;
        }
      };

      function placeholderPropInjection(connect, monitor) {
        var dragged = monitor.getItem();
        return {
          connectDropTarget: connect.dropTarget(),
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          draggedNode: dragged ? dragged.node : null
        };
      }

      return reactDnd.DropTarget(this.dndType, placeholderDropTarget, placeholderPropInjection)(el);
    }
  }, {
    key: "startDrag",
    get: function get() {
      return this.treeRef.startDrag;
    }
  }, {
    key: "dragHover",
    get: function get() {
      return this.treeRef.dragHover;
    }
  }, {
    key: "endDrag",
    get: function get() {
      return this.treeRef.endDrag;
    }
  }, {
    key: "drop",
    get: function get() {
      return this.treeRef.drop;
    }
  }, {
    key: "treeId",
    get: function get() {
      return this.treeRef.treeId;
    }
  }, {
    key: "dndType",
    get: function get() {
      return this.treeRef.dndType;
    }
  }, {
    key: "treeData",
    get: function get() {
      return this.treeRef.state.draggingTreeData || this.treeRef.props.treeData;
    }
  }, {
    key: "getNodeKey",
    get: function get() {
      return this.treeRef.props.getNodeKey;
    }
  }, {
    key: "customCanDrop",
    get: function get() {
      return this.treeRef.props.canDrop;
    }
  }, {
    key: "maxDepth",
    get: function get() {
      return this.treeRef.props.maxDepth;
    }
  }]);

  return DndManager;
}();

/* eslint-disable import/prefer-default-export */
function slideRows(rows, fromIndex, toIndex) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var rowsWithoutMoved = [].concat(_toConsumableArray(rows.slice(0, fromIndex)), _toConsumableArray(rows.slice(fromIndex + count)));
  return [].concat(_toConsumableArray(rowsWithoutMoved.slice(0, toIndex)), _toConsumableArray(rows.slice(fromIndex, fromIndex + count)), _toConsumableArray(rowsWithoutMoved.slice(toIndex)));
}

function _createSuper$4(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
var treeIdCounter = 1;

var mergeTheme = function mergeTheme(props) {
  var merged = _objectSpread2(_objectSpread2({}, props), {}, {
    style: _objectSpread2(_objectSpread2({}, props.theme.style), props.style),
    innerStyle: _objectSpread2(_objectSpread2({}, props.theme.innerStyle), props.innerStyle),
    reactVirtualizedListProps: _objectSpread2(_objectSpread2({}, props.theme.reactVirtualizedListProps), props.reactVirtualizedListProps)
  });

  var overridableDefaults = {
    nodeContentRenderer: NodeRendererDefault,
    placeholderRenderer: PlaceholderRendererDefault,
    rowHeight: 62,
    scaffoldBlockPxWidth: 44,
    slideRegionSize: 100,
    treeNodeRenderer: TreeNode
  };
  Object.keys(overridableDefaults).forEach(function (propKey) {
    // If prop has been specified, do not change it
    // If prop is specified in theme, use the theme setting
    // If all else fails, fall back to the default
    if (props[propKey] === null) {
      merged[propKey] = typeof props.theme[propKey] !== 'undefined' ? props.theme[propKey] : overridableDefaults[propKey];
    }
  });
  return merged;
};

var ReactSortableTree =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactSortableTree, _Component);

  var _super = _createSuper$4(ReactSortableTree);

  function ReactSortableTree(props) {
    var _this;

    _classCallCheck(this, ReactSortableTree);

    _this = _super.call(this, props);

    var _mergeTheme = mergeTheme(props),
        dndType = _mergeTheme.dndType,
        nodeContentRenderer = _mergeTheme.nodeContentRenderer,
        treeNodeRenderer = _mergeTheme.treeNodeRenderer,
        isVirtualized = _mergeTheme.isVirtualized,
        slideRegionSize = _mergeTheme.slideRegionSize;

    _this.dndManager = new DndManager(_assertThisInitialized(_this)); // Wrapping classes for use with react-dnd

    _this.treeId = "rst__".concat(treeIdCounter);
    treeIdCounter += 1;
    _this.dndType = dndType || _this.treeId;
    _this.nodeContentRenderer = _this.dndManager.wrapSource(nodeContentRenderer);
    _this.treePlaceholderRenderer = _this.dndManager.wrapPlaceholder(TreePlaceholder);
    _this.treeNodeRenderer = _this.dndManager.wrapTarget(treeNodeRenderer); // Prepare scroll-on-drag options for this list

    if (isVirtualized) {
      _this.scrollZoneVirtualList = (createScrollingComponent || createScrollingComponentWithConsumer)(reactVirtualized.List);
      _this.vStrength = createVerticalStrength(slideRegionSize);
      _this.hStrength = createHorizontalStrength(slideRegionSize);
    }

    _this.state = {
      draggingTreeData: null,
      draggedNode: null,
      draggedMinimumTreeIndex: null,
      draggedDepth: null,
      searchMatches: [],
      searchFocusTreeIndex: null,
      dragging: false,
      // props that need to be used in gDSFP or static functions will be stored here
      instanceProps: {
        treeData: [],
        ignoreOneTreeUpdate: false,
        searchQuery: null,
        searchFocusOffset: null
      }
    };
    _this.toggleChildrenVisibility = _this.toggleChildrenVisibility.bind(_assertThisInitialized(_this));
    _this.moveNode = _this.moveNode.bind(_assertThisInitialized(_this));
    _this.startDrag = _this.startDrag.bind(_assertThisInitialized(_this));
    _this.dragHover = _this.dragHover.bind(_assertThisInitialized(_this));
    _this.endDrag = _this.endDrag.bind(_assertThisInitialized(_this));
    _this.drop = _this.drop.bind(_assertThisInitialized(_this));
    _this.handleDndMonitorChange = _this.handleDndMonitorChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReactSortableTree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      ReactSortableTree.loadLazyChildren(this.props, this.state);
      var stateUpdate = ReactSortableTree.search(this.props, this.state, true, true, false);
      this.setState(stateUpdate); // Hook into react-dnd state changes to detect when the drag ends
      // TODO: This is very brittle, so it needs to be replaced if react-dnd
      // offers a more official way to detect when a drag ends

      this.clearMonitorSubscription = this.props.dragDropManager.getMonitor().subscribeToStateChange(this.handleDndMonitorChange);
    }
  }, {
    key: "componentDidUpdate",
    // listen to dragging
    value: function componentDidUpdate(prevProps, prevState) {
      // if it is not the same then call the onDragStateChanged
      if (this.state.dragging !== prevState.dragging) {
        if (this.props.onDragStateChanged) {
          this.props.onDragStateChanged({
            isDragging: this.state.dragging,
            draggedNode: this.state.draggedNode
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearMonitorSubscription();
    }
  }, {
    key: "getRows",
    value: function getRows(treeData) {
      return memoizedGetFlatDataFromTree({
        ignoreCollapsed: true,
        getNodeKey: this.props.getNodeKey,
        treeData: treeData
      });
    }
  }, {
    key: "handleDndMonitorChange",
    value: function handleDndMonitorChange() {
      var _this2 = this;

      var monitor = this.props.dragDropManager.getMonitor(); // If the drag ends and the tree is still in a mid-drag state,
      // it means that the drag was canceled or the dragSource dropped
      // elsewhere, and we should reset the state of this tree

      if (!monitor.isDragging() && this.state.draggingTreeData) {
        setTimeout(function () {
          _this2.endDrag();
        });
      }
    }
  }, {
    key: "toggleChildrenVisibility",
    value: function toggleChildrenVisibility(_ref) {
      var targetNode = _ref.node,
          path = _ref.path;
      var instanceProps = this.state.instanceProps;
      var treeData = changeNodeAtPath({
        treeData: instanceProps.treeData,
        path: path,
        newNode: function newNode(_ref2) {
          var node = _ref2.node;
          return _objectSpread2(_objectSpread2({}, node), {}, {
            expanded: !node.expanded
          });
        },
        getNodeKey: this.props.getNodeKey
      });
      this.props.onChange(treeData);
      this.props.onVisibilityToggle({
        treeData: treeData,
        node: targetNode,
        expanded: !targetNode.expanded,
        path: path
      });
    }
  }, {
    key: "moveNode",
    value: function moveNode(_ref3) {
      var node = _ref3.node,
          prevPath = _ref3.path,
          prevTreeIndex = _ref3.treeIndex,
          depth = _ref3.depth,
          minimumTreeIndex = _ref3.minimumTreeIndex;

      var _insertNode = insertNode({
        treeData: this.state.draggingTreeData,
        newNode: node,
        depth: depth,
        minimumTreeIndex: minimumTreeIndex,
        expandParent: true,
        getNodeKey: this.props.getNodeKey
      }),
          treeData = _insertNode.treeData,
          treeIndex = _insertNode.treeIndex,
          path = _insertNode.path,
          nextParentNode = _insertNode.parentNode;

      this.props.onChange(treeData);
      this.props.onMoveNode({
        treeData: treeData,
        node: node,
        treeIndex: treeIndex,
        path: path,
        nextPath: path,
        nextTreeIndex: treeIndex,
        prevPath: prevPath,
        prevTreeIndex: prevTreeIndex,
        nextParentNode: nextParentNode
      });
    } // returns the new state after search

  }, {
    key: "startDrag",
    value: function startDrag(_ref4) {
      var _this3 = this;

      var path = _ref4.path;
      this.setState(function (prevState) {
        var _removeNode = removeNode({
          treeData: prevState.instanceProps.treeData,
          path: path,
          getNodeKey: _this3.props.getNodeKey
        }),
            draggingTreeData = _removeNode.treeData,
            draggedNode = _removeNode.node,
            draggedMinimumTreeIndex = _removeNode.treeIndex;

        return {
          draggingTreeData: draggingTreeData,
          draggedNode: draggedNode,
          draggedDepth: path.length - 1,
          draggedMinimumTreeIndex: draggedMinimumTreeIndex,
          dragging: true
        };
      });
    }
  }, {
    key: "dragHover",
    value: function dragHover(_ref5) {
      var _this4 = this;

      var draggedNode = _ref5.node,
          draggedDepth = _ref5.depth,
          draggedMinimumTreeIndex = _ref5.minimumTreeIndex;

      // Ignore this hover if it is at the same position as the last hover
      if (this.state.draggedDepth === draggedDepth && this.state.draggedMinimumTreeIndex === draggedMinimumTreeIndex) {
        return;
      }

      this.setState(function (_ref6) {
        var draggingTreeData = _ref6.draggingTreeData,
            instanceProps = _ref6.instanceProps;
        // Fall back to the tree data if something is being dragged in from
        //  an external element
        var newDraggingTreeData = draggingTreeData || instanceProps.treeData;
        var addedResult = memoizedInsertNode({
          treeData: newDraggingTreeData,
          newNode: draggedNode,
          depth: draggedDepth,
          minimumTreeIndex: draggedMinimumTreeIndex,
          expandParent: true,
          getNodeKey: _this4.props.getNodeKey
        });

        var rows = _this4.getRows(addedResult.treeData);

        var expandedParentPath = rows[addedResult.treeIndex].path;
        return {
          draggedNode: draggedNode,
          draggedDepth: draggedDepth,
          draggedMinimumTreeIndex: draggedMinimumTreeIndex,
          draggingTreeData: changeNodeAtPath({
            treeData: newDraggingTreeData,
            path: expandedParentPath.slice(0, -1),
            newNode: function newNode(_ref7) {
              var node = _ref7.node;
              return _objectSpread2(_objectSpread2({}, node), {}, {
                expanded: true
              });
            },
            getNodeKey: _this4.props.getNodeKey
          }),
          // reset the scroll focus so it doesn't jump back
          // to a search result while dragging
          searchFocusTreeIndex: null,
          dragging: true
        };
      });
    }
  }, {
    key: "endDrag",
    value: function endDrag(dropResult) {
      var _this5 = this;

      var instanceProps = this.state.instanceProps;

      var resetTree = function resetTree() {
        return _this5.setState({
          draggingTreeData: null,
          draggedNode: null,
          draggedMinimumTreeIndex: null,
          draggedDepth: null,
          dragging: false
        });
      }; // Drop was cancelled


      if (!dropResult) {
        resetTree();
      } else if (dropResult.treeId !== this.treeId) {
        // The node was dropped in an external drop target or tree
        var node = dropResult.node,
            path = dropResult.path,
            treeIndex = dropResult.treeIndex;
        var shouldCopy = this.props.shouldCopyOnOutsideDrop;

        if (typeof shouldCopy === 'function') {
          shouldCopy = shouldCopy({
            node: node,
            prevTreeIndex: treeIndex,
            prevPath: path
          });
        }

        var treeData = this.state.draggingTreeData || instanceProps.treeData; // If copying is enabled, a drop outside leaves behind a copy in the
        //  source tree

        if (shouldCopy) {
          treeData = changeNodeAtPath({
            treeData: instanceProps.treeData,
            // use treeData unaltered by the drag operation
            path: path,
            newNode: function newNode(_ref8) {
              var copyNode = _ref8.node;
              return _objectSpread2({}, copyNode);
            },
            // create a shallow copy of the node
            getNodeKey: this.props.getNodeKey
          });
        }

        this.props.onChange(treeData);
        this.props.onMoveNode({
          treeData: treeData,
          node: node,
          treeIndex: null,
          path: null,
          nextPath: null,
          nextTreeIndex: null,
          prevPath: path,
          prevTreeIndex: treeIndex
        });
      }
    }
  }, {
    key: "drop",
    value: function drop(dropResult) {
      this.moveNode(dropResult);
    }
  }, {
    key: "canNodeHaveChildren",
    value: function canNodeHaveChildren(node) {
      var canNodeHaveChildren = this.props.canNodeHaveChildren;

      if (canNodeHaveChildren) {
        return canNodeHaveChildren(node);
      }

      return true;
    } // Load any children in the tree that are given by a function
    // calls the onChange callback on the new treeData

  }, {
    key: "renderRow",
    value: function renderRow(row, _ref9) {
      var listIndex = _ref9.listIndex,
          style = _ref9.style,
          getPrevRow = _ref9.getPrevRow,
          matchKeys = _ref9.matchKeys,
          swapFrom = _ref9.swapFrom,
          swapDepth = _ref9.swapDepth,
          swapLength = _ref9.swapLength;
      var node = row.node,
          parentNode = row.parentNode,
          path = row.path,
          lowerSiblingCounts = row.lowerSiblingCounts,
          treeIndex = row.treeIndex;

      var _mergeTheme2 = mergeTheme(this.props),
          canDrag = _mergeTheme2.canDrag,
          generateNodeProps = _mergeTheme2.generateNodeProps,
          scaffoldBlockPxWidth = _mergeTheme2.scaffoldBlockPxWidth,
          searchFocusOffset = _mergeTheme2.searchFocusOffset,
          rowDirection = _mergeTheme2.rowDirection;

      var TreeNodeRenderer = this.treeNodeRenderer;
      var NodeContentRenderer = this.nodeContentRenderer;
      var nodeKey = path[path.length - 1];
      var isSearchMatch = nodeKey in matchKeys;
      var isSearchFocus = isSearchMatch && matchKeys[nodeKey] === searchFocusOffset;
      var callbackParams = {
        node: node,
        parentNode: parentNode,
        path: path,
        lowerSiblingCounts: lowerSiblingCounts,
        treeIndex: treeIndex,
        isSearchMatch: isSearchMatch,
        isSearchFocus: isSearchFocus
      };
      var nodeProps = !generateNodeProps ? {} : generateNodeProps(callbackParams);
      var rowCanDrag = typeof canDrag !== 'function' ? canDrag : canDrag(callbackParams);
      var sharedProps = {
        treeIndex: treeIndex,
        scaffoldBlockPxWidth: scaffoldBlockPxWidth,
        node: node,
        path: path,
        treeId: this.treeId,
        rowDirection: rowDirection
      };
      return React__default.createElement(TreeNodeRenderer, _extends({
        style: style,
        key: nodeKey,
        listIndex: listIndex,
        getPrevRow: getPrevRow,
        lowerSiblingCounts: lowerSiblingCounts,
        swapFrom: swapFrom,
        swapLength: swapLength,
        swapDepth: swapDepth
      }, sharedProps), React__default.createElement(NodeContentRenderer, _extends({
        parentNode: parentNode,
        isSearchMatch: isSearchMatch,
        isSearchFocus: isSearchFocus,
        canDrag: rowCanDrag,
        toggleChildrenVisibility: this.toggleChildrenVisibility
      }, sharedProps, nodeProps)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _mergeTheme3 = mergeTheme(this.props),
          dragDropManager = _mergeTheme3.dragDropManager,
          style = _mergeTheme3.style,
          className = _mergeTheme3.className,
          innerStyle = _mergeTheme3.innerStyle,
          rowHeight = _mergeTheme3.rowHeight,
          isVirtualized = _mergeTheme3.isVirtualized,
          placeholderRenderer = _mergeTheme3.placeholderRenderer,
          reactVirtualizedListProps = _mergeTheme3.reactVirtualizedListProps,
          getNodeKey = _mergeTheme3.getNodeKey,
          rowDirection = _mergeTheme3.rowDirection;

      var _this$state = this.state,
          searchMatches = _this$state.searchMatches,
          searchFocusTreeIndex = _this$state.searchFocusTreeIndex,
          draggedNode = _this$state.draggedNode,
          draggedDepth = _this$state.draggedDepth,
          draggedMinimumTreeIndex = _this$state.draggedMinimumTreeIndex,
          instanceProps = _this$state.instanceProps;
      var treeData = this.state.draggingTreeData || instanceProps.treeData;
      var rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null;
      var rows;
      var swapFrom = null;
      var swapLength = null;

      if (draggedNode && draggedMinimumTreeIndex !== null) {
        var addedResult = memoizedInsertNode({
          treeData: treeData,
          newNode: draggedNode,
          depth: draggedDepth,
          minimumTreeIndex: draggedMinimumTreeIndex,
          expandParent: true,
          getNodeKey: getNodeKey
        });
        var swapTo = draggedMinimumTreeIndex;
        swapFrom = addedResult.treeIndex;
        swapLength = 1 + memoizedGetDescendantCount({
          node: draggedNode
        });
        rows = slideRows(this.getRows(addedResult.treeData), swapFrom, swapTo, swapLength);
      } else {
        rows = this.getRows(treeData);
      } // Get indices for rows that match the search conditions


      var matchKeys = {};
      searchMatches.forEach(function (_ref10, i) {
        var path = _ref10.path;
        matchKeys[path[path.length - 1]] = i;
      }); // Seek to the focused search result if there is one specified

      var scrollToInfo = searchFocusTreeIndex !== null ? {
        scrollToIndex: searchFocusTreeIndex
      } : {};
      var containerStyle = style;
      var list;

      if (rows.length < 1) {
        var Placeholder = this.treePlaceholderRenderer;
        var PlaceholderContent = placeholderRenderer;
        list = React__default.createElement(Placeholder, {
          treeId: this.treeId,
          drop: this.drop
        }, React__default.createElement(PlaceholderContent, null));
      } else if (isVirtualized) {
        containerStyle = _objectSpread2({
          height: '100%'
        }, containerStyle);
        var ScrollZoneVirtualList = this.scrollZoneVirtualList; // Render list with react-virtualized

        list = React__default.createElement(reactVirtualized.AutoSizer, null, function (_ref11) {
          var height = _ref11.height,
              width = _ref11.width;
          return React__default.createElement(ScrollZoneVirtualList, _extends({}, scrollToInfo, {
            dragDropManager: dragDropManager,
            verticalStrength: _this6.vStrength,
            horizontalStrength: _this6.hStrength,
            speed: 30,
            scrollToAlignment: "start",
            className: "rst__virtualScrollOverride",
            width: width,
            onScroll: function onScroll(_ref12) {
              var scrollTop = _ref12.scrollTop;
              _this6.scrollTop = scrollTop;
            },
            height: height,
            style: innerStyle,
            rowCount: rows.length,
            estimatedRowSize: typeof rowHeight !== 'function' ? rowHeight : undefined,
            rowHeight: typeof rowHeight !== 'function' ? rowHeight : function (_ref13) {
              var index = _ref13.index;
              return rowHeight({
                index: index,
                treeIndex: index,
                node: rows[index].node,
                path: rows[index].path
              });
            },
            rowRenderer: function rowRenderer(_ref14) {
              var index = _ref14.index,
                  rowStyle = _ref14.style;
              return _this6.renderRow(rows[index], {
                listIndex: index,
                style: rowStyle,
                getPrevRow: function getPrevRow() {
                  return rows[index - 1] || null;
                },
                matchKeys: matchKeys,
                swapFrom: swapFrom,
                swapDepth: draggedDepth,
                swapLength: swapLength
              });
            }
          }, reactVirtualizedListProps));
        });
      } else {
        // Render list without react-virtualized
        list = rows.map(function (row, index) {
          return _this6.renderRow(row, {
            listIndex: index,
            style: {
              height: typeof rowHeight !== 'function' ? rowHeight : rowHeight({
                index: index,
                treeIndex: index,
                node: row.node,
                path: row.path
              })
            },
            getPrevRow: function getPrevRow() {
              return rows[index - 1] || null;
            },
            matchKeys: matchKeys,
            swapFrom: swapFrom,
            swapDepth: draggedDepth,
            swapLength: swapLength
          });
        });
      }

      return React__default.createElement("div", {
        className: classnames('rst__tree', className, rowDirectionClass),
        style: containerStyle
      }, list);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var instanceProps = prevState.instanceProps;
      var newState = {};
      var isTreeDataEqual = isEqual(instanceProps.treeData, nextProps.treeData); // make sure we have the most recent version of treeData

      instanceProps.treeData = nextProps.treeData;

      if (!isTreeDataEqual) {
        if (instanceProps.ignoreOneTreeUpdate) {
          instanceProps.ignoreOneTreeUpdate = false;
        } else {
          newState.searchFocusTreeIndex = null;
          ReactSortableTree.loadLazyChildren(nextProps, prevState);
          Object.assign(newState, ReactSortableTree.search(nextProps, prevState, false, false, false));
        }

        newState.draggingTreeData = null;
        newState.draggedNode = null;
        newState.draggedMinimumTreeIndex = null;
        newState.draggedDepth = null;
        newState.dragging = false;
      } else if (!isEqual(instanceProps.searchQuery, nextProps.searchQuery)) {
        Object.assign(newState, ReactSortableTree.search(nextProps, prevState, true, true, false));
      } else if (instanceProps.searchFocusOffset !== nextProps.searchFocusOffset) {
        Object.assign(newState, ReactSortableTree.search(nextProps, prevState, true, true, true));
      }

      instanceProps.searchQuery = nextProps.searchQuery;
      instanceProps.searchFocusOffset = nextProps.searchFocusOffset;
      newState.instanceProps = _objectSpread2(_objectSpread2({}, instanceProps), newState.instanceProps);
      return newState;
    }
  }, {
    key: "search",
    value: function search(props, state, seekIndex, expand, singleSearch) {
      var onChange = props.onChange,
          getNodeKey = props.getNodeKey,
          searchFinishCallback = props.searchFinishCallback,
          searchQuery = props.searchQuery,
          searchMethod = props.searchMethod,
          searchFocusOffset = props.searchFocusOffset,
          onlyExpandSearchedNodes = props.onlyExpandSearchedNodes;
      var instanceProps = state.instanceProps; // Skip search if no conditions are specified

      if (!searchQuery && !searchMethod) {
        if (searchFinishCallback) {
          searchFinishCallback([]);
        }

        return {
          searchMatches: []
        };
      }

      var newState = {
        instanceProps: {}
      }; // if onlyExpandSearchedNodes collapse the tree and search

      var _find = find({
        getNodeKey: getNodeKey,
        treeData: onlyExpandSearchedNodes ? toggleExpandedForAll({
          treeData: instanceProps.treeData,
          expanded: false
        }) : instanceProps.treeData,
        searchQuery: searchQuery,
        searchMethod: searchMethod || defaultSearchMethod,
        searchFocusOffset: searchFocusOffset,
        expandAllMatchPaths: expand && !singleSearch,
        expandFocusMatchPaths: !!expand
      }),
          expandedTreeData = _find.treeData,
          searchMatches = _find.matches; // Update the tree with data leaving all paths leading to matching nodes open


      if (expand) {
        newState.instanceProps.ignoreOneTreeUpdate = true; // Prevents infinite loop

        onChange(expandedTreeData);
      }

      if (searchFinishCallback) {
        searchFinishCallback(searchMatches);
      }

      var searchFocusTreeIndex = null;

      if (seekIndex && searchFocusOffset !== null && searchFocusOffset < searchMatches.length) {
        searchFocusTreeIndex = searchMatches[searchFocusOffset].treeIndex;
      }

      newState.searchMatches = searchMatches;
      newState.searchFocusTreeIndex = searchFocusTreeIndex;
      return newState;
    }
  }, {
    key: "loadLazyChildren",
    value: function loadLazyChildren(props, state) {
      var instanceProps = state.instanceProps;
      walk({
        treeData: instanceProps.treeData,
        getNodeKey: props.getNodeKey,
        callback: function callback(_ref15) {
          var node = _ref15.node,
              path = _ref15.path,
              lowerSiblingCounts = _ref15.lowerSiblingCounts,
              treeIndex = _ref15.treeIndex;

          // If the node has children defined by a function, and is either expanded
          //  or set to load even before expansion, run the function.
          if (node.children && typeof node.children === 'function' && (node.expanded || props.loadCollapsedLazyChildren)) {
            // Call the children fetching function
            node.children({
              node: node,
              path: path,
              lowerSiblingCounts: lowerSiblingCounts,
              treeIndex: treeIndex,
              // Provide a helper to append the new data when it is received
              done: function done(childrenArray) {
                return props.onChange(changeNodeAtPath({
                  treeData: instanceProps.treeData,
                  path: path,
                  newNode: function newNode(_ref16) {
                    var oldNode = _ref16.node;
                    return (// Only replace the old node if it's the one we set off to find children
                      //  for in the first place
                      oldNode === node ? _objectSpread2(_objectSpread2({}, oldNode), {}, {
                        children: childrenArray
                      }) : oldNode
                    );
                  },
                  getNodeKey: props.getNodeKey
                }));
              }
            });
          }
        }
      });
    }
  }]);

  return ReactSortableTree;
}(React.Component);

ReactSortableTree.propTypes = {
  dragDropManager: PropTypes.shape({
    getMonitor: PropTypes.func
  }).isRequired,
  // Tree data in the following format:
  // [{title: 'main', subtitle: 'sub'}, { title: 'value2', expanded: true, children: [{ title: 'value3') }] }]
  // `title` is the primary label for the node
  // `subtitle` is a secondary label for the node
  // `expanded` shows children of the node if true, or hides them if false. Defaults to false.
  // `children` is an array of child nodes belonging to the node.
  treeData: PropTypes.arrayOf(PropTypes.object).isRequired,
  // Style applied to the container wrapping the tree (style defaults to {height: '100%'})
  style: PropTypes.shape({}),
  // Class name for the container wrapping the tree
  className: PropTypes.string,
  // Style applied to the inner, scrollable container (for padding, etc.)
  innerStyle: PropTypes.shape({}),
  // Used by react-virtualized
  // Either a fixed row height (number) or a function that returns the
  // height of a row given its index: `({ index: number }): number`
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  // Size in px of the region near the edges that initiates scrolling on dragover
  slideRegionSize: PropTypes.number,
  // Custom properties to hand to the react-virtualized list
  // https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md#prop-types
  reactVirtualizedListProps: PropTypes.shape({}),
  // The width of the blocks containing the lines representing the structure of the tree.
  scaffoldBlockPxWidth: PropTypes.number,
  // Maximum depth nodes can be inserted at. Defaults to infinite.
  maxDepth: PropTypes.number,
  // The method used to search nodes.
  // Defaults to a function that uses the `searchQuery` string to search for nodes with
  // matching `title` or `subtitle` values.
  // NOTE: Changing `searchMethod` will not update the search, but changing the `searchQuery` will.
  searchMethod: PropTypes.func,
  // Used by the `searchMethod` to highlight and scroll to matched nodes.
  // Should be a string for the default `searchMethod`, but can be anything when using a custom search.
  searchQuery: PropTypes.any,
  // eslint-disable-line react/forbid-prop-types
  // Outline the <`searchFocusOffset`>th node and scroll to it.
  searchFocusOffset: PropTypes.number,
  // Get the nodes that match the search criteria. Used for counting total matches, etc.
  searchFinishCallback: PropTypes.func,
  // Generate an object with additional props to be passed to the node renderer.
  // Use this for adding buttons via the `buttons` key,
  // or additional `style` / `className` settings.
  generateNodeProps: PropTypes.func,
  // Set to false to disable virtualization.
  // NOTE: Auto-scrolling while dragging, and scrolling to the `searchFocusOffset` will be disabled.
  isVirtualized: PropTypes.bool,
  treeNodeRenderer: PropTypes.func,
  // Override the default component for rendering nodes (but keep the scaffolding generator)
  // This is an advanced option for complete customization of the appearance.
  // It is best to copy the component in `node-renderer-default.js` to use as a base, and customize as needed.
  nodeContentRenderer: PropTypes.func,
  // Override the default component for rendering an empty tree
  // This is an advanced option for complete customization of the appearance.
  // It is best to copy the component in `placeholder-renderer-default.js` to use as a base,
  // and customize as needed.
  placeholderRenderer: PropTypes.func,
  theme: PropTypes.shape({
    style: PropTypes.shape({}),
    innerStyle: PropTypes.shape({}),
    reactVirtualizedListProps: PropTypes.shape({}),
    scaffoldBlockPxWidth: PropTypes.number,
    slideRegionSize: PropTypes.number,
    rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    treeNodeRenderer: PropTypes.func,
    nodeContentRenderer: PropTypes.func,
    placeholderRenderer: PropTypes.func
  }),
  // Determine the unique key used to identify each node and
  // generate the `path` array passed in callbacks.
  // By default, returns the index in the tree (omitting hidden nodes).
  getNodeKey: PropTypes.func,
  // Called whenever tree data changed.
  // Just like with React input elements, you have to update your
  // own component's data to see the changes reflected.
  onChange: PropTypes.func.isRequired,
  // Called after node move operation.
  onMoveNode: PropTypes.func,
  // Determine whether a node can be dragged. Set to false to disable dragging on all nodes.
  canDrag: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // Determine whether a node can be dropped based on its path and parents'.
  canDrop: PropTypes.func,
  // Determine whether a node can have children
  canNodeHaveChildren: PropTypes.func,
  // When true, or a callback returning true, dropping nodes to react-dnd
  // drop targets outside of this tree will not remove them from this tree
  shouldCopyOnOutsideDrop: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // Called after children nodes collapsed or expanded.
  onVisibilityToggle: PropTypes.func,
  dndType: PropTypes.string,
  // Called to track between dropped and dragging
  onDragStateChanged: PropTypes.func,
  // Specify that nodes that do not match search will be collapsed
  onlyExpandSearchedNodes: PropTypes.bool,
  // rtl support
  rowDirection: PropTypes.string
};
ReactSortableTree.defaultProps = {
  canDrag: true,
  canDrop: null,
  canNodeHaveChildren: function canNodeHaveChildren() {
    return true;
  },
  className: '',
  dndType: null,
  generateNodeProps: null,
  getNodeKey: defaultGetNodeKey,
  innerStyle: {},
  isVirtualized: true,
  maxDepth: null,
  treeNodeRenderer: null,
  nodeContentRenderer: null,
  onMoveNode: function onMoveNode() {},
  onVisibilityToggle: function onVisibilityToggle() {},
  placeholderRenderer: null,
  reactVirtualizedListProps: {},
  rowHeight: null,
  scaffoldBlockPxWidth: null,
  searchFinishCallback: null,
  searchFocusOffset: null,
  searchMethod: null,
  searchQuery: null,
  shouldCopyOnOutsideDrop: false,
  slideRegionSize: null,
  style: {},
  theme: {},
  onDragStateChanged: function onDragStateChanged() {},
  onlyExpandSearchedNodes: false,
  rowDirection: 'ltr'
};
polyfill(ReactSortableTree);

var SortableTreeWithoutDndContext = function SortableTreeWithoutDndContext(props) {
  return React__default.createElement(reactDnd.DndContext.Consumer, null, function (_ref17) {
    var dragDropManager = _ref17.dragDropManager;
    return dragDropManager === undefined ? null : React__default.createElement(ReactSortableTree, _extends({}, props, {
      dragDropManager: dragDropManager
    }));
  });
};

var SortableTree = function SortableTree(props) {
  return React__default.createElement(reactDnd.DndProvider, {
    backend: reactDndHtml5Backend.HTML5Backend
  }, React__default.createElement(SortableTreeWithoutDndContext, props));
}; // Export the tree component without the react-dnd DragDropContext,

exports.SortableTreeWithoutDndContext = SortableTreeWithoutDndContext;
exports.addNodeUnderParent = addNodeUnderParent;
exports.changeNodeAtPath = changeNodeAtPath;
exports.default = SortableTree;
exports.defaultGetNodeKey = defaultGetNodeKey;
exports.defaultSearchMethod = defaultSearchMethod;
exports.find = find;
exports.getDepth = getDepth;
exports.getDescendantCount = getDescendantCount;
exports.getFlatDataFromTree = getFlatDataFromTree;
exports.getNodeAtPath = getNodeAtPath;
exports.getTreeFromFlatData = getTreeFromFlatData;
exports.getVisibleNodeCount = getVisibleNodeCount;
exports.getVisibleNodeInfoAtIndex = getVisibleNodeInfoAtIndex;
exports.insertNode = insertNode;
exports.isDescendant = isDescendant;
exports.map = map;
exports.removeNode = removeNode;
exports.removeNodeAtPath = removeNodeAtPath;
exports.toggleExpandedForAll = toggleExpandedForAll;
exports.walk = walk;
