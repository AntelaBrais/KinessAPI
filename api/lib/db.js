"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var firebase = __importStar(require("firebase"));
require("firebase/auth");
require("firebase/firebase-firestore");
var config = {
    apiKey: 'AIzaSyDvbEniF8LTd2RyKM5zyo0Dz2xp_15qc1c',
    authDomain: 'time-kines.firebaseapp.com',
    databaseURL: 'https://time-kines.firebaseio.com',
    projectId: 'time-kines',
    storageBucket: 'time-kines.appspot.com',
    messagingSenderId: '531045921082'
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var firestore = firebase.firestore();
exports.db = firebase.firestore();
exports.provider = new firebase.auth.GoogleAuthProvider();
exports.auth = firebase.auth();
exports["default"] = firebase;
