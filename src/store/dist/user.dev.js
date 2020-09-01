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

var User = function User(id) {
  _classCallCheck(this, User);

  this.id = id;
};

var _default = {
  state: {
    user: null
  },
  mutations: {
    setUser: function setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    registerUser: function registerUser(_ref, _ref2) {
      var commit, email, password, user;
      return regeneratorRuntime.async(function registerUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              email = _ref2.email, password = _ref2.password;
              commit('clearError');
              commit('setLoading', true);
              _context.prev = 4;
              _context.next = 7;
              return regeneratorRuntime.awrap(fb.auth().createUserWithEmailAndPassword(email, password));

            case 7:
              user = _context.sent;
              commit('setUser', new User(user.uid));
              commit('setLoading', false);
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              commit('setLoading', false);
              commit('setError', _context.t0.message);
              throw _context.t0;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[4, 12]]);
    },
    loginUser: function loginUser(_ref3, _ref4) {
      var commit, email, password, user;
      return regeneratorRuntime.async(function loginUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit;
              email = _ref4.email, password = _ref4.password;
              commit('clearError');
              commit('setLoading', true);
              _context2.prev = 4;
              _context2.next = 7;
              return regeneratorRuntime.awrap(fb.auth().signInWithEmailAndPassword(email, password));

            case 7:
              user = _context2.sent;
              commit('setUser', new User(user.uid));
              commit('setLoading', false);
              _context2.next = 17;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              commit('setLoading', false);
              commit('setError', _context2.t0.message);
              throw _context2.t0;

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[4, 12]]);
    },
    autoLoginUser: function autoLoginUser(_ref5, payload) {
      var commit = _ref5.commit;
      commit('setUser', new User(payload.uid));
    },
    logoutUser: function logoutUser(_ref6) {
      var commit = _ref6.commit;
      fb.auth().signOut();
      commit('setUser', null);
    }
  },
  getters: {
    user: function user(state) {
      return state.user;
    },
    isUserLoggedIn: function isUserLoggedIn(state) {
      return state.user !== null;
    }
  }
};
exports["default"] = _default;