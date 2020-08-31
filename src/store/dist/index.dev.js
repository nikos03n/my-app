"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _ads = _interopRequireDefault(require("./ads"));

var _user = _interopRequireDefault(require("./user"));

var _shared = _interopRequireDefault(require("./shared"));

var _orders = _interopRequireDefault(require("./orders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  modules: {
    ads: _ads["default"],
    user: _user["default"],
    shared: _shared["default"],
    orders: _orders["default"]
  }
});

exports["default"] = _default;