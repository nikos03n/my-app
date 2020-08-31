"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  state: {
    orders: []
  },
  mutations: {
    createOrder: function createOrder(state, payload) {
      state.orders.push(payload);
    }
  },
  actions: {
    createOrder: function createOrder() {
      return regeneratorRuntime.async(function createOrder$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(new Promise(function (resolve) {
                setTimeout(function () {
                  resolve();
                }, 4000);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  getters: {}
};
exports["default"] = _default;