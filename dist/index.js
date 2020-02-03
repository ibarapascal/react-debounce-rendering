"use strict";
var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function (d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var debounce_1 = __importDefault(require("lodash/debounce"));
exports.debounceRender = function (Component, wait, options) {
  return /** @class */ (function (_super) {
    __extends(DebouncedContainer, _super);
    function DebouncedContainer() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.updateDebounced = debounce_1.default(_this.forceUpdate, wait, options);
      return _this;
    }
    DebouncedContainer.prototype.shouldComponentUpdate = function () {
      this.updateDebounced();
      return false;
    };
    DebouncedContainer.prototype.componentWillUnmount = function () {
      this.updateDebounced.cancel();
    };
    DebouncedContainer.prototype.render = function () {
      return react_1.default.createElement(Component, __assign({}, this.props));
    };
    return DebouncedContainer;
  }(react_1.default.Component));
};
exports.default = exports.debounceRender;
