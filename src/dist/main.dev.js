"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fb = _interopRequireWildcard(require("firebase"));

var _vue = _interopRequireDefault(require("vue"));

var _vuefire = require("vuefire");

var _App = _interopRequireDefault(require("./App.vue"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vuefire.firestorePlugin);

_vue["default"].config.productionTip = false;
/* eslint-disable no-new */

new _vue["default"]({
  vuetify: _vuetify["default"],
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  },
  created: function created() {
    var _this = this;

    fb.initializeApp({
      apiKey: "AIzaSyCU0sxFp-Qebu--NGunZDa9saEzVayqW_Y",
      authDomain: "vuevlad.firebaseapp.com",
      databaseURL: "https://vuevlad.firebaseio.com",
      projectId: "vuevlad",
      storageBucket: "vuevlad.appspot.com",
      messagingSenderId: "1092549475395",
      appId: "1:1092549475395:web:19577a6fb9b3ed0ee8a8f6",
      measurementId: "G-P2D3F8YS0Q"
    });
    fb.auth().onAuthStateChanged(function (user) {
      if (user) {
        _this.$store.dispatch('autoLoginUser', user);
      }
    });
    this.$store.dispatch('fetchAds');
  }
}).$mount('#app');