import * as firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "todo-b0447.firebaseapp.com",
    databaseURL: "https://todo-b0447.firebaseio.com",
    projectId: "todo-b0447",
    storageBucket: "todo-b0447.appspot.com",
    messagingSenderId: "227591562874"
};

export default firebase.initializeApp(config);