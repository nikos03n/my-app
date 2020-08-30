"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsRef = exports.db = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Conveniently import this file anywhere to use db
var db = _app["default"].initializeApp({
  projectId: 'FIREBASE_PROJECT_ID'
}).firestore();

exports.db = db;
var productsRef = db.ref('products'); // Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }

exports.productsRef = productsRef;