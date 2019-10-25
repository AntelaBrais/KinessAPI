import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: 'AIzaSyDvbEniF8LTd2RyKM5zyo0Dz2xp_15qc1c',
  authDomain: 'time-kines.firebaseapp.com',
  databaseURL: 'https://time-kines.firebaseio.com',
  projectId: 'time-kines',
  storageBucket: 'time-kines.appspot.com',
  messagingSenderId: '531045921082'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()
export const db = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export default firebase
