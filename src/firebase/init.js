import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyDKAK60AGf-bWKybRPNBv7juJdapVELJIQ",
    authDomain: "kin-arai-dee.firebaseapp.com",
    databaseURL: "https://kin-arai-dee.firebaseio.com",
    projectId: "kin-arai-dee",
    storageBucket: "",
    messagingSenderId: "758185352460",
    appId: "1:758185352460:web:f4a33ff82a8622f2"
}

firebase.initializeApp(config)
