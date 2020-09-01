"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var fb = _interopRequireWildcard(require("firebase"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Order = function Order(name, phone, adId) {
  var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  _classCallCheck(this, Order);

  this.name = name;
  this.phone = phone;
  this.adId = adId;
  this.done = done;
  this.id = id;
};

var _default = {
  state: {
    orders: []
  },
  mutations: {
    loadOrders: function loadOrders(state, payload) {
      state.orders = payload;
    }
  },
  actions: {
    createOrder: function createOrder(_ref, _ref2) {
      var commit, name, phone, adId, ownerId, order;
      return regeneratorRuntime.async(function createOrder$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              name = _ref2.name, phone = _ref2.phone, adId = _ref2.adId, ownerId = _ref2.ownerId;
              order = new Order(name, phone, adId);
              commit('clearError');
              _context.prev = 4;
              _context.next = 7;
              return regeneratorRuntime.awrap(fb.database().ref("/users/".concat(ownerId, "/orders")).push(order));

            case 7:
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](4);
              commit('setError', _context.t0.message);
              throw _context.t0;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[4, 9]]);
    }
  },
  getters: {}
};
exports["default"] = _default;