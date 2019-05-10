import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_DATABASEURL,
    projectId: "todo-vuetify-4fe44",
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_APP_ID
  };

  firebase.initializeApp(config);

  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;