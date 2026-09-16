const firebaseConfig = {
  apiKey: "AIzaSyCgLhnXdhxllASWtG2dVXl-cgIwxNCtlUE",
  authDomain: "comlemos-66e5f.firebaseapp.com",
  databaseURL: "https://comlemos-66e5f-default-rtdb.firebaseio.com",
  projectId: "comlemos-66e5f",
  storageBucket: "comlemos-66e5f.firebasestorage.app",
  messagingSenderId: "1018092913555",
  appId: "1:1018092913555:web:bdb27511a67ac36d979e66"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.enablePersistence({ synchronizeTabs: true }).catch(() => {});
