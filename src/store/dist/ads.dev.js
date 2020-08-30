"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var fb = _interopRequireWildcard(require("firebase"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ad = // title: any
// description: any
// ownerId: any
// imageSrc: string
// promo: boolean
// id: any
function Ad(title, description, ownerId) {
  var imageSrc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var promo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

  _classCallCheck(this, Ad);

  this.title = title;
  this.description = description;
  this.ownerId = ownerId;
  this.imageSrc = imageSrc;
  this.promo = promo;
  this.id = id;
};

var _default = {
  state: {
    ads: []
  },
  mutations: {
    createAd: function createAd(state, payload) {
      state.ads.push(payload);
    },
    loadAds: function loadAds(state, payload) {
      state.ads = payload;
    }
  },
  actions: {
    createAd: function createAd(_ref, payload) {
      var commit, getters, image, newAd, ad, imageExt, fileData, imageSrc;
      return regeneratorRuntime.async(function createAd$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, getters = _ref.getters;
              commit('clearError');
              commit('setLoading', true);
              image = payload.image;
              _context.prev = 4;
              newAd = new Ad(payload.title, payload.description, getters.user.id, '', payload.promo);
              _context.next = 8;
              return regeneratorRuntime.awrap(fb.database().ref('ads').push(newAd));

            case 8:
              ad = _context.sent;
              imageExt = image.name.slice(image.name.lastIndexOf('.'));
              _context.next = 12;
              return regeneratorRuntime.awrap(fb.storage().ref("ads/".concat(ad.key, ".").concat(imageExt)).put(image));

            case 12:
              fileData = _context.sent;
              imageSrc = fileData.metadata.downloadURLs[0];
              _context.next = 16;
              return regeneratorRuntime.awrap(fb.database().ref('ads').child(ad.key).update({
                imageSrc: imageSrc
              }));

            case 16:
              commit('setLoading', false);
              commit('createAd', _objectSpread({}, newAd, {
                id: ad.key,
                imageSrc: imageSrc
              }));
              _context.next = 25;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](4);
              commit('setError', _context.t0.message);
              commit('setLoading', false);
              throw _context.t0;

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[4, 20]]);
    },
    fetchAds: function fetchAds(_ref2) {
      var commit, resultAds, fbVal, ads;
      return regeneratorRuntime.async(function fetchAds$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              commit('clearError');
              commit('setLoading', true);
              resultAds = [];
              _context2.prev = 4;
              _context2.next = 7;
              return regeneratorRuntime.awrap(fb.database().ref('ads').once('value'));

            case 7:
              fbVal = _context2.sent;
              ads = fbVal.val();
              Object.keys(ads).forEach(function (key) {
                var ad = ads[key];
                resultAds.push(new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key));
              });
              commit('loadAds', resultAds);
              commit('setLoading', false);
              _context2.next = 19;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](4);
              commit('setError', _context2.t0.message);
              commit('setLoading', false);
              throw _context2.t0;

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[4, 14]]);
    }
  },
  getters: {
    ads: function ads(state) {
      return state.ads;
    },
    promoAds: function promoAds(state) {
      return state.ads.filter(function (ad) {
        return ad.promo;
      });
    },
    myAds: function myAds(state) {
      return state.ads;
    },
    adById: function adById(state) {
      return function (adId) {
        return state.ads.find(function (ad) {
          return ad.id === adId;
        });
      };
    }
  }
};
exports["default"] = _default;