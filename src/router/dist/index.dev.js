"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _authGuard = _interopRequireDefault(require("./auth-guard"));

var _Home = _interopRequireDefault(require("@/components/Home"));

var _Ad = _interopRequireDefault(require("@/components/Ads/Ad"));

var _AdList = _interopRequireDefault(require("@/components/Ads/AdList"));

var _NewAd = _interopRequireDefault(require("@/components/Ads/NewAd"));

var _Login = _interopRequireDefault(require("@/components/Auth/Login"));

var _Registration = _interopRequireDefault(require("@/components/Auth/Registration"));

var _Orders = _interopRequireDefault(require("@/components/User/Orders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '',
    name: 'home',
    component: _Home["default"]
  }, {
    path: '/ad/:id',
    props: true,
    name: 'ad',
    component: _Ad["default"]
  }, {
    path: '/list',
    name: 'list',
    component: _AdList["default"],
    beforeEnter: _authGuard["default"]
  }, {
    path: '/new',
    name: 'newAd',
    component: _NewAd["default"],
    beforeEnter: _authGuard["default"]
  }, {
    path: '/login',
    name: 'login',
    component: _Login["default"]
  }, {
    path: '/registration',
    name: 'reg',
    component: _Registration["default"]
  }, {
    path: '/orders',
    name: 'orders',
    component: _Orders["default"],
    beforeEnter: _authGuard["default"]
  }],
  mode: 'history'
});

exports["default"] = _default;